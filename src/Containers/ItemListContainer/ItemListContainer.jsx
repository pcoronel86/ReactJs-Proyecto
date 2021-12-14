import React from 'react'
import './styles.css';
import ItemList from '../../components/ItemList/ItemList';
import { useEffect, useState } from 'react/cjs/react.development';
import { getProducts } from '../../products';
import { useParams } from 'react-router';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    useEffect(()=>{
        getProducts(categoryId).then(item =>{
            setProducts(item)
        }).catch(err =>{
            console.log(err)
        })
        return (()=>{
            setProducts([])
        })
    },[categoryId])
    
    return (
        <div>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer
