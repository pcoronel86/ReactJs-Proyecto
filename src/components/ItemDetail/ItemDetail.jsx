import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({product}) => {
    const [quantity, setQuantity] = useState(0)
    
    const addToCart=(count) =>{
        
        console.log('success', `Agregado al Carrito ${count}`)
        setQuantity(count)
    }
    

    return (
        
        <div className="itemDetail">
            <img className="imgitem" src={product?.pictureURL}  alt={product?.pictureURL}/>
            <h5 className="itemTitel">{product?.title}</h5>
                <div className="itemCompra"> 
                    <p className="price">${product?.price}</p>
                    <p className="description">{product?.description}</p>
                    <p>Cantidad Disponibles: {product?.stock}</p>
                    <div className="itemCount">
                        {quantity === 0 ?
                            <ItemCount initial={1} stock={product?.stock} onAdd = {addToCart} />
                            :
                            <Link to = '/cart' className="btn btn-success ml-auto comprarButton" type="button" data-toggle="modal" data-target="#comprarModal"
                            > Ir al Carrito </Link>
                        }
                    </div>
                </div>
        </div>
    )
}

export default ItemDetail
