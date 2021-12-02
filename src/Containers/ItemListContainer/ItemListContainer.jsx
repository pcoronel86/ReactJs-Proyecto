import React from 'react'
import './styles.css';
import ItemList from '../../components/ItemList/ItemList';
import { useEffect, useState } from 'react/cjs/react.development';
import { getProducts } from '../../products';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const list = getProducts()
        list.then(list => {
            setProducts(list)
        })
        return (()=>{
            setProducts([])
        })
    },[])
    
    return (
        <div>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer
