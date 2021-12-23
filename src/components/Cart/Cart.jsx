import { useContext } from 'react';
import { Icon } from 'semantic-ui-react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const {obtenerTotal} = useContext(CartContext);
    const {cart} = useContext (CartContext);
    const {removeItem} = useContext(CartContext)
    const {cleanCart}= useContext(CartContext)

    const removeAll=()=>{
        cleanCart()
    }
    
    return (
        <div>
        {obtenerTotal() === 0 ?
        <div>
            <h1>
                Carrito de Compras Vacio
            </h1>
            <div>
            <Link to = '/' className="btn btn-success ml-auto comprarButton" type="button" data-toggle="modal" data-target="#comprarModal"> Return </Link>
            </div>
        </div>
        :
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
                {cart.map(product => {
                        return <tr> 
                            <td><img src={product.item.pictureURL} alt="" /></td>
                            <td> {product.item.title} </td>
                            <td> {product.cantidad} </td>
                            <td>{product.item.price}</td>
                            <button color="red" onClick={(handleRemove)=>removeItem(product.item.id)}><Icon name="trash"/></button>
                        </tr>
                        
            })}
            </tbody>
            <div>
                <h1>TOTAL:${obtenerTotal()}</h1>
            </div>
            <div>
            <button className="btn btn-success ml-auto comprarButton" type="button" data-toggle="modal" data-target="#comprarModal"
            onClick={removeAll}>Remove All</button>
            </div>
        </table>}
        </div>
    )
}

export default Cart;
