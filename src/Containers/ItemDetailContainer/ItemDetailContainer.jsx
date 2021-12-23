import React from 'react'
import './ItemDetailContainer.css'
import { useState, useEffect } from 'react/cjs/react.development'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { getProductById } from '../../products'
import { useParams } from 'react-router'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState (true)
    const {paramId}= useParams()
    
    useEffect(()=>{
        getProductById(paramId).then(item=>{
            setProduct(item)
            setLoading(false)
        }).catch(err =>{
            console.log(err)
        })
        return (()=>{
            setProduct([])
        })
    },[paramId])



    return (
        <div>
            <div className="itemDetailContainer">
                {loading ? <h1>LOADING</h1> : <ItemDetail product={product}/>}
            </div>
        </div>
    )
}

export default ItemDetailContainer
