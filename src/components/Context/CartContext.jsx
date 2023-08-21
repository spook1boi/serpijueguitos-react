import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();


export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        const addItem = { ...item, quantity };

        const newCart = [...cart];
        const isInCart = newCart.find((producto) => producto.id === addItem.id);

        if (isInCart) {
            isInCart.quantity += quantity;
        } else {
          newCart.push(addItem);
        }
        setCart(newCart);
    }

    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0);
    }

    const total = () => {
        return cart.reduce((acc, prod) => acc + prod.precio * prod.quantity, 0);
    }

    const clearCart = () => {
        setCart([]);
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])
    

    return (
        <CartContext.Provider value={ {cart, addItem, cartQuantity, total, clearCart} }>
            {children}
        </CartContext.Provider>
    )

}