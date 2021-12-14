import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'


const ItemDetail = ({product}) => {
    return (
        
        <div className="itemDetail">
            <img className="imgitem" src={product?.pictureURL}  alt={product?.pictureURL}/>
            <h5 className="itemTitel">{product?.title}</h5>
                <div className="itemCompra"> 
                    <p className="price">${product?.price}</p>
                    <p className="description">{product?.description}</p>
                    <p>Cantidad Disponibles: {product?.stock}</p>
                    <div className="itemCount">
                    <ItemCount stock={product?.stock}/>
                    <button className="btn btn-success ml-auto comprarButton" type="button" data-toggle="modal"
                        data-target="#comprarModal">Comprar</button>
                    </div>
                </div>

        </div>
    )
}

export default ItemDetail
