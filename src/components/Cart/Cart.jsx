import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const Cart = () => {

    const {cart} = useContext (CartContext);

    return (
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Foto</th>
                <th scope="col">Nombre</th>
                <th scope="col">Cantidad</th>
                </tr>
            </thead>
            <tbody>
                {cart.map(producto => {
                        return <tr>
                            <td><img src={producto.item.pictureURL} alt="" /></td>
                            <td> {producto.item.title} </td>
                            <td> {producto.cantidad} </td>
                        </tr>
            })}
            </tbody>
        </table>
    )
}

export default Cart;
