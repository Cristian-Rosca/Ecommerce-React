import { createContext, useEffect, useState } from "react"
import { CartItem } from "../types/CartItem"
import { Product } from "../types/Product"

type CartContext = {
    isCartOpen: boolean,
    setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>
    cartItems: CartItem[],
    addItemToCart: any,
    cartCount: number
    removeItemFromCart: any
    clearItemFromCart: any
    cartTotal: number
}

const iCartState = {
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartCount : 0,
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartTotal: 0
}

const addCartItem = (cartItems: CartItem[], productItemToAdd: Product)  => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productItemToAdd.id)

    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
    }

    return [...cartItems, {...productItemToAdd, quantity: 1}]
}

const removeCartItem = (cartItems: CartItem[], productItemToRemove: Product) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productItemToRemove.id)

    if (existingCartItem && existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== productItemToRemove.id)
    }

    return cartItems.map((cartItem) => cartItem.id === productItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem)
}

const clearCartItem = (cartItems: CartItem[], productItemToClear: Product) => {
    return cartItems.filter((cartItem) => cartItem.id !== productItemToClear.id)
}

export const CartContext = createContext<CartContext>(iCartState)

const CartProvider = ({children} : any) => {

    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    const addItemToCart = (productToAdd : Product) => {
        const updatedCart = addCartItem(cartItems, productToAdd)
        setCartItems(updatedCart)
        const updatedCartCount = updatedCart.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
        setCartCount(updatedCartCount)
        const updatedCartTotal = updatedCart.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setCartTotal(updatedCartTotal)
    }

    const removeItemFromCart = (productToRemove : Product) => {
        const updatedCart = removeCartItem(cartItems, productToRemove)
        setCartItems(updatedCart)
        const updatedCartCount = updatedCart.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
        setCartCount(updatedCartCount)
        const updatedCartTotal = updatedCart.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setCartTotal(updatedCartTotal)
    }

    const clearItemFromCart = (productToClear : Product) => {
        const updatedCart = clearCartItem(cartItems, productToClear)
        setCartItems(updatedCart)
        const updatedCartCount = updatedCart.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
        setCartCount(updatedCartCount)
        const updatedCartTotal = updatedCart.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setCartTotal(updatedCartTotal)
    }

    return ( 
    <CartContext.Provider value={{isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, removeItemFromCart, clearItemFromCart, cartTotal}}>
        {children}
    </CartContext.Provider> 
    );
}
 
export default CartProvider;