import { useContext, useState, useEffect } from "react";
import { Icon } from "semantic-ui-react";
import './Cart.css'
import { CartContext } from "../../Context/CartContext";
import UserContext from '../../Context/userContext'
import { Link } from "react-router-dom";
import { addDoc, collection, Timestamp, doc, writeBatch, getDoc} from 'firebase/firestore'
import { db } from "../../sevices/firebase/firebase";



const Cart = () => {
  const [usuario, setusuario] = useState()
  const [processingOrder, setProcessingOrder] = useState(false)
  const { obtenerTotal } = useContext(CartContext);
  const { cart } = useContext(CartContext);
  const {user} = useContext(UserContext)
  const { removeItem } = useContext(CartContext);
  const { cleanCart } = useContext(CartContext);

  useEffect(()=>{
    const loggedUserJSON = window.localStorage.getItem('user')
    console.log(loggedUserJSON)
    if(loggedUserJSON){
      const objUser = JSON.parse(loggedUserJSON)
      setusuario(objUser)
    }
  },[])
  
  const confirmOrder = () => {
    setProcessingOrder(true)

    const objOrder = {
        buyer: usuario.username,
        items: cart,
        total: obtenerTotal(),
        phone: usuario.userphone,
        mail: usuario.usermail,
        address: usuario.useraddress,
        date: Timestamp.fromDate(new Date())
    }

    const batch = writeBatch(db)
    const outOfStock = []

    objOrder.items.forEach((prod) => {
        getDoc(doc(db, 'items', prod.item.id)).then((docSnap)=>{
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
          console.log('Su id de compra es:',id)
          
        }) 
      }).catch((error) =>{
        console.log("Error ejecutando la order", error);
      })
    }
      

    setTimeout(() =>{
      cleanCart()
      setProcessingOrder(false)
    }, 1000)
  }
  
  if(processingOrder){
    return <h1>Se Esta Procesando su Orden</h1>
       
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
          {cart.map((product) => {
            return (
              <tr key={product.item.id}>
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
          {
            user ? <button
            className="btn btn-success ml-auto comprarButton"
            type="button"
            data-toggle="modal"
            data-target="#comprarModal"
            onClick={()=>confirmOrder()}
          >
            Confirmar Compra
          </button>:<h4>Registrate</h4>}
            
        </div>
        {usuario ? <div>
          <h4>Nombre: {usuario.username}</h4>
          <h4>Telefono: {usuario.userphone}</h4>
          <h4>Direccion: {usuario.useraddress}</h4>
          <h4>mail: {usuario.usermail}</h4>
        </div>: <div><h4>no hay usuario logueado</h4></div>}
            
      </table>
    )}
  </div>
  
  )
};

export default Cart;
