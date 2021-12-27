import React from 'react'
import './styles.css';
import ItemList from '../../components/ItemList/ItemList';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../../sevices/firebase/firebase';
import { collection, getDocs, query, where} from 'firebase/firestore';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState (true)
    const { categoryId } = useParams()

    useEffect(()=>{
        if(!categoryId) {
            setLoading(true)
            getDocs(collection(db, 'items')).then((querySnapshot) => {
               const products = querySnapshot.docs.map(doc => {
                   return { id: doc.id, ...doc.data()}
               })
               setProducts(products)
            }).catch ((error)=>{
                console.log('Error searching items', error)
            }).finally(()=>{
                setLoading(false)
            })

        }else{
            setLoading(true)
            getDocs(query(collection(db, 'items'), where('category', '==', categoryId))).then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => {
                    return {id: doc.id, ...doc.data()}
                })
                setProducts(products)
             }).catch ((error)=>{
                 console.log('Error searching items', error)
             }).finally(()=>{
                 setLoading(false)
             })
             
        }
        return (()=>{
            setProducts([])
        })
    },[categoryId])
    
    if(loading){
        return <h1>Loading</h1>
    }

    return (
        <div>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer
