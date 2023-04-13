import React from 'react';
import { createContext, useState, useContext } from 'react';

const CartContext = createContext('valor inicial')

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd])
        } else {
            console.log('no se agrega al carro')
        }
    }

    const totalPrice = () =>{
        return cart.reduce((prev,act)=> prev + act.quantity * act.price, 0);
    }

    const totalProducts = () => cart.reduce((acumulador, productActual)=> acumulador + productActual.quantity, 0);

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const updatedCart = cart.filter(prod => prod.id !== id)
        setCart(updatedCart)
    }

    const getTotalQuantity = () => {
        let totalQuantity = 0

        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })

        return totalQuantity
    }

    const totalQuantity = getTotalQuantity()

    const clearCart = () =>
    setCart ([])

    return (
        <CartContext.Provider value={{ cart, addItem, totalQuantity, removeItem, isInCart, totalPrice, totalProducts, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}


