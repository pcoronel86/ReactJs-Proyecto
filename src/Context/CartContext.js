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
    const obtenerTotal=()=>{
        let total = 0
        cart.forEach(elemento => {
            total += (elemento.cantidad * elemento.item.price)
        })
        return total;
    }    

    const addItem = (product, quantity) => {
        const flag = isInCart(product);
        console.log(flag); 
        if (flag) {
            let productoRepetido = cart.find (elemento => elemento.item === product);
            productoRepetido.cantidad += quantity;
            let cartSinRepetido = cart.filter (elemento => elemento.item !== product);
            setCart([...cartSinRepetido, productoRepetido]);
        } else {
            setCart([...cart, {item: product, cantidad: quantity}]);
        } 
        console.log (cart)
       
    }

    const isInCart = (item) => {
        return cart.some(producto =>  producto.item === item );
    }

    const removeItem = (id) => {
        console.log(id)
        let newCart = cart.splice(
            cart.findIndex(elemento=> elemento.id === id),
            1
        );
        setCart([...newCart])
    }

    const cleanCart = (id) => {
        setCart(cart.filter(item=>item.id !==id))
    }


    return(
        <CartContext.Provider value = {{
            cart,
            addItem, removeItem, cleanCart, getCantidad, obtenerTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;