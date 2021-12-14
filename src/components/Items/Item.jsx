import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
   
    return (
        <div>
            <h5 className="productoNombre">{product.title}</h5>
            <img className="imgProducto" src={product.pictureURL}  alt={product.pictureURL}/>
                <div className="productoCompra">    
                <Link className="btn btn-success ml-auto comprarButton" type="button" data-toggle="modal"
                        data-target="#comprarModal" to={`/item/${product.id}`}>Ver Detalle</Link>
                    <p className="precio">${product.price}</p>
                </div>
        </div>
    )
}

export default Item

