import { useContext, useRef, useState } from "react";
import { Icon } from "semantic-ui-react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { addDoc, collection, Timestamp, doc, writeBatch, getDoc} from 'firebase/firestore'
import { db } from "../../sevices/firebase/firebase";



const Cart = () => {
  const [processingOrder, setProcessingOrder] = useState(false)
  const [contact, setContact] = useState({
    name:'',
    phone:'',
    address:'',
  })
  const { obtenerTotal } = useContext(CartContext);
  const { products } = useContext(CartContext);
  const { removeItem } = useContext(CartContext);
  const { cleanCart } = useContext(CartContext);
  const contactFormRef = useRef ()

  const confirmOrder = () => {
    setProcessingOrder(true)

    const objOrder = {
        buyer: contact.name,
        items: products,
        total: obtenerTotal(),
        phone: contact.phone,
        address: contact.address, 
        date: Timestamp.fromDate(new Date())
    }

    const batch = writeBatch(db)
    const outOfStock = []

    objOrder.items.forEach((prod) => {
        getDoc(doc(db, 'items'), prod.item.id).then((docSnap)=>{
          if(docSnap.data().stock >= prod.cantidad){
            batch.update(doc(db, 'items', docSnap.id),{
              stock : docSnap.data().stock - prod.cantidad
            })
          }else{
              outOfStock.push({id: docSnap.id, ...docSnap.data()})
          }
        })
    })

    if(outOfStock.length === 0){
      addDoc(collection(db, 'orders'), objOrder).then(({id}) =>{
        batch.commit().then(() => {
          console.log(id)
        }) 
      }).catch((error) =>{
        
      })
    }
      

    setTimeout(() =>{
      cleanCart()
      setProcessingOrder(false)
    }, 1000)
  }
  
  const removeAll = () => {
    cleanCart();
  };

  return (
    <div>
    {obtenerTotal() === 0 ? (
      <div>
        <h1>Carrito de Compras Vacio</h1>
        <div>
          <Link
            to="/"
            className="btn btn-success ml-auto comprarButton"
            type="button"
            data-toggle="modal"
            data-target="#comprarModal"
          >
            {" "}
            Return{" "}
          </Link>
        </div>
      </div>
    ) : (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Foto</th>
            <th scope="col">Nombre</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio Unidad</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr>
                <td>
                  <img src={product.item.pictureURL} alt="" />
                </td>
                <td> {product.item.title} </td>
                <td> {product.cantidad} </td>
                <td>{product.item.price}</td>
                <button
                  color="red"
                  onClick={(handleRemove) => removeItem(product.item.id)}
                >
                  <Icon name="trash" />
                </button>
              </tr>
            );
          })}
        </tbody>
        <div>
          <h1>TOTAL:${obtenerTotal()}</h1>
        </div>
        <div>
          <button
            className="btn btn-success ml-auto comprarButton"
            type="button"
            data-toggle="modal"
            data-target="#comprarModal"
            onClick={removeAll}
          >
            Remove All
          </button>
          <button
            className="btn btn-success ml-auto comprarButton"
            type="button"
            data-toggle="modal"
            data-target="#comprarModal"
            onClick={()=>confirmOrder()}
          >
            Confirmar Compra
          </button>
        </div>
            <div>
              <h4>Nombre: {contact.name}</h4>
              <h4>Telefono: {contact.phone}</h4>
              <h4>Direccion: {contact.address}</h4>
              <button onClick={() => setContact({name:'', phone:'', address:'', comment:''})}>Agregar Contacto</button>
            </div>
            
      </table>
    )}
  </div>
  )
};

export default Cart;
