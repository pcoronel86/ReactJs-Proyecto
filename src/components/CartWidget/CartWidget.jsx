import * as React from "react"
import { useContext } from "react";
import './CartWidget.css'
import { CartContext } from "../../Context/CartContext"

const CartWidget = () => {
    const {getCantidad} = useContext(CartContext);
    return(
        <button className="CartWidget">
            <img src="/images/icons8-carrito-de-compras-48.png" alt='cart' className='CartImg'/>
            {getCantidad()}
        </button>
    )
}

export default CartWidget
