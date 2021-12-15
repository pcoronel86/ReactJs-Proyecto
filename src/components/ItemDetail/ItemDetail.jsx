import React, { useState } from 'react'
import FinalizePurchase from '../FinalizePurchase/FinalizePurchase'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({product}) => {
    
    let [amount, setAmount] = useState(0);
    
    const addToCart = (contador) =>{
       console.log(contador)
        setAmount(amount=contador)
        console.log(amount)
        console.log(amount)

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
                    {amount === 0 ? <ItemCount onConfirm={addToCart} stock={product?.stock}/> : <FinalizePurchase/>}
                    </div>
                </div>
        </div>
    )
}

export default ItemDetail
