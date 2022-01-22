import { useContext, useState, useRef } from "react";
import { Icon } from "semantic-ui-react";
import './Cart.css'
import Togglable from '../TogglaBle/Togglable';
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { addDoc, collection, Timestamp, doc, writeBatch, getDoc} from 'firebase/firestore'
import { db } from "../../sevices/firebase/firebase";
import ContactForm from "../ContactForm/ContactForm";



const Cart = () => {
  const [processingOrder, setProcessingOrder] = useState(false)
  const [contact, setContact] = useState({
    name:"",
    phone: "",
    address: "",
    email: "",
  });
  const { cleanCart, removeItem, obtenerTotal, cart } = useContext(CartContext);
  const contactFormRef = useRef();

  const confirmOrder = () => {
    setProcessingOrder(true)

    const objOrder = {
        buyer: contact.name,
        items: cart,
        total: obtenerTotal(),
        phone: contact.phone,
        mail: contact.email,
        address: contact.address,
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
      .finally(()=>{
        setProcessingOrder(false);
        cleanCart()
      })
    }
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
            <th scope="col">Descripcion</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio Unidad</th>
          </tr>
        </thead>
        <tbody>
          {!processingOrder && cart.length > 0 
          ? cart.map((product) => {
            return (
              <tr key={product?.item.id}>
                <td>
                  <img src={product?.item.pictureURL} alt="" />
                </td>
                <td> {product?.item.title} </td>
                <td> {product?.item.description} </td>
                <td> {product?.cantidad} </td>
                <td>{product?.item.price}</td>
                <td
                  className="btn btn-success ml-auto comprarButton bg-danger"
                  type="button"
                  data-toggle="modal"
                  data-target="#comprarModal"
                  onClick={(handleRemove) => removeItem(product?.item.id)}
                >
                  <Icon name="trash" />
                </td>
              </tr>
            );
          }):"procesando Orden"}
        </tbody>    
      </table>
    )}
    <div>
          {cart.length > 0 && !processingOrder && <h1>TOTAL:${obtenerTotal()}</h1>}
        </div>
        <div>
          {!processingOrder && cart.length > 0 && (
            <button
            className="btn btn-success ml-auto comprarButton"
            type="button"
            data-toggle="modal"
            data-target="#comprarModal"
            onClick={removeAll}
          >
            Remove All
          </button>
          )}
          {!processingOrder && cart.length > 0 && (
            <button
            className="btn btn-success ml-auto comprarButton"
            type="button"
            data-toggle="modal"
            data-target="#comprarModal"
            onClick={()=>confirmOrder()}
          >
            Confirmar Compra
          </button>
          )}
          {!processingOrder &&
           contact.name !== "" &&
           contact.phone !== "" &&
           contact.address !== "" &&
           contact.email !== "" && (
          <div>
            <h4>Nombre: {contact.address}</h4>
            <h4>Telefono: {contact.phone}</h4>
            <h4>Direccion: {contact.address}</h4>
            <h4>Email: {contact.email}</h4>
            <button
              onClick={() =>
                setContact({ name :"" ,phone: "", address: "", email: "" })
              }
              className="Button"
              style={{ backgroundColor: "#db4025" }}
            >
              Borrar datos de contacto
            </button>
          </div>
           )}
           {(!processingOrder && cart.length) > 0 &&(
             <Togglable
                buttonLabelShow={
                  contact.name !== "" &&
                  contact.phone !== "" &&
                  contact.address !== "" &&
                  contact.email !== ""
                    ? "Editar contacto"
                    : "Agregar contacto"
                }
                ref={contactFormRef}
              >
                <ContactForm
                  toggleVisibility={contactFormRef}
                  setContact={setContact}
                />
              </Togglable>
           )}     
        </div>
        
  </div>
  
  
  )
};

export default Cart;
