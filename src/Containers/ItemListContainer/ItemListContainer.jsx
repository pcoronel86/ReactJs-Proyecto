import React from 'react'
import './styles.scss';
import ItemCount from '../../components/ItemCount/ItemCount'


const ItemListContainer = () => {
    return (
        <div className = "container">
            <ItemCount stock ={10}/>
            <ItemCount stock ={3}/>
            <ItemCount stock ={2}/>
        </div>
    )
}

export default ItemListContainer
