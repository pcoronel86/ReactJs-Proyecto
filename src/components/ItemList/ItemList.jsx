import React from 'react'
import './ItemList.css'
import Item  from '../Items/Item'

const  ItemList = ({products}) => {
    return (
        <div className="producto">
            {products.map(product =><Item key={product.id} product={product}/>)}
        </div>
    )
}

export default ItemList;
