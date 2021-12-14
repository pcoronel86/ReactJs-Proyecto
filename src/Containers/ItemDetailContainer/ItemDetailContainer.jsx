import React from 'react'
import './ItemDetailContainer.css'
import { useState, useEffect } from 'react/cjs/react.development'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { getProductById } from '../../products'
import { useParams } from 'react-router'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const {paramId}= useParams()
    
    useEffect(()=>{
        getProductById(paramId).then(item=>{
            setProduct(item)
        }).catch(err =>{
            console.log(err)
        })
        return (()=>{
            setProduct([])
        })
    },[paramId])



    return (
        <div>
            <h2>Item Detail Container</h2>
            <div className="itemDetailContainer">
                <ItemDetail product={product}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer
