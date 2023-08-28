import { createContext, useState } from "react"

export const CartContext = createContext({
    cart: []
})


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log("Cart");
    console.log(cart);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(previousCart => [...previousCart, { ...item, quantity }]);
        } else {
            setCart(previousCart => previousCart.map(elem => {
                if (elem.id === item.id) {
                    return { ...elem, "quantity": elem.quantity + quantity }
                }
                return elem
            }));
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId) //anymatch
    }

    return <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>{children}</CartContext.Provider>;
}
