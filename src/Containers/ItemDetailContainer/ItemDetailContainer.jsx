import React from 'react'
import './ItemDetailContainer.css'
import { useState, useEffect } from 'react/cjs/react.development'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { getItem } from '../../products'

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])

    useEffect(()=>{
        const list = getItem()
        list.then(list => {
            setItem(list)
        })
        return (()=>{
            setItem([])
        })
    },[])



    return (
        <div>
            <h2>Item Detail Container</h2>
            <div className="itemDetailContainer">
                <ItemDetail item={item}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer
