import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const getCantidad = () => {
    let subTotal = 0;
    cart.forEach((elemento) => {
      subTotal += elemento.cantidad;
    });
    return subTotal;
  };
  const obtenerTotal = () => {
    let total = 0;
    cart.forEach((elemento) => {
      total += elemento.cantidad * elemento.item.price;
    });
    return total;
  };

  const addItem = (producto, quantity) => {
    const flag = isInCart(producto);
    if (flag) {
      let productRepetido = cart.find((elemento) => elemento.item.id === producto.id);
      productRepetido.cantidad += quantity;
      let cartSinRepetido = cart.filter(
        (elemento) => elemento.item.id !== producto.id
      );
      setCart([...cartSinRepetido, productRepetido]);
    } else {
      setCart([...cart, { item: producto, cantidad: quantity }]);
    }
  };

  const isInCart = (item) => {
    return cart.some((producto) => producto.item.id === item.id );
  };

  const removeItem = (id) => {
    const cartIndex = cart.findIndex((elemento)=> elemento.item.id === id)
     cart.splice(
      cartIndex,
      1
    );
    setCart([...cart])
    
  };

  const cleanCart = (id) => {
    setCart([])
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        cleanCart,
        getCantidad,
        obtenerTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
