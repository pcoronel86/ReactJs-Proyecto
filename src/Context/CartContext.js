import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getCantidad = () => {
    let subTotal = 0;
    products.forEach((elemento) => {
      subTotal += elemento.cantidad;
    });
    return subTotal;
  };
  const obtenerTotal = () => {
    let total = 0;
    products.forEach((elemento) => {
      total += elemento.cantidad * elemento.item.price;
    });
    return total;
  };

  const addItem = (product, quantity) => {
    const flag = isInCart(product);
    console.log(flag);
    if (flag) {
      let productRepetido = products.find((elemento) => elemento.item === product);
      productRepetido.cantidad += quantity;
      let cartSinRepetido = products.filter(
        (elemento) => elemento.item !== product
      );
      setProducts([...cartSinRepetido, productRepetido]);
    } else {
        setProducts([...products, { item: product, cantidad: quantity }]);
    }
    console.log(products);
  };

  const isInCart = (item) => {
    console.log(item);
    return products.some((product) => product.item === item);
  };

  const removeItem = (id) => {
    console.log(id);
    let newCart = products.splice(
        products.findIndex((elemento) => elemento.id === id),
      1
    );
    setProducts([...newCart]);
  };

  const cleanCart = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        products,
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
