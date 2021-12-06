import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'


const ItemDetail = ({item}) => {
    return (
        
        <div className="itemDetail">
            <img className="imgitem" src={item.pictureURL}  alt={item.pictureURL}/>
            <h5 className="itemTitel">{item.title}</h5>
                <div className="itemCompra"> 
                    <p className="price">${item.price}</p>
                    <p className="description">{item.description}</p>
                    <p>Cantidad Disponibles: {item.stock}</p>
                    <div className="itemCount">
                    <ItemCount stock={item.stock}/>
                    <button className="btn btn-success ml-auto comprarButton" type="button" data-toggle="modal"
                        data-target="#comprarModal">Comprar</button>
                    </div>
                </div>

        </div>
    )
}

export default ItemDetail
