import React from 'react'
import './style.css'

const Item = ({product}) => {
    return (
        <div>
            <h5 className="productoNombre">{product.title}</h5>
            <img className="imgProducto" src={product.pictureURL}  alt={product.pictureURL}/>
                <div className="productoCompra">
                    <button className="btn btn-success ml-auto comprarButton" type="button" data-toggle="modal"
                        data-target="#comprarModal">Ver Detalle</button>
                    <p className="precio">{product.price}</p>
                </div>
            <p class="productoId">Stock: {product.stock}</p>
        </div>
    )
}

export default Item

