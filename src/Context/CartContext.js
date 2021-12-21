import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const getCantidad = () => {
        let subTotal = 0;
        cart.forEach(elemento=> {
            
            subTotal += elemento.cantidad
        })
        return subTotal;
    }

    const addItem = (producto, quantity) => {
        const flag = isInCart(producto);
        console.log(flag);
        if (flag) {
            let productoRepetido = cart.find (elemento => elemento.item === producto);
            productoRepetido.cantidad += quantity;
            let cartSinRepetido = cart.filter (elemento => elemento.item !== producto);
            setCart([...cartSinRepetido, productoRepetido]);
        } else {
            setCart([...cart, {item: producto, cantidad: quantity}]);
        }
       
    }

    const isInCart = (item) => {
        
        return cart.some(producto =>  producto.item === item );
    }

    const removeItem = (item) => {

    }

    const cleanCart = () => {

    }


    return(
        <CartContext.Provider value = {{
            cart,
            addItem, removeItem, cleanCart, getCantidad
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;