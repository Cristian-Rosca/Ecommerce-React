import { createContext, useEffect, useState } from "react"
import { CartItem } from "../types/CartItem"
import { Product } from "../types/Product"

type CartContext = {
    isCartOpen: boolean,
    setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>
    cartItems: CartItem[],
    addItemToCart: (item: Product) => void,
    cartCount: number
}

const iCartState = {
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartCount : 0
}

const addCartItem = (cartItems: CartItem[], productItemToAdd: Product)  => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productItemToAdd.id)

    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
    }

    return [...cartItems, {...productItemToAdd, quantity: 1}]
}

export const CartContext = createContext<CartContext>(iCartState)

const CartProvider = ({children} : any) => {

    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const addItemToCart = (productToAdd : Product) => {
        const updatedCart = addCartItem(cartItems, productToAdd)
        setCartItems(updatedCart)
    }

    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems]);

    return ( 
    <CartContext.Provider value={{isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount}}>
        {children}
    </CartContext.Provider> 
    );
}
 
export default CartProvider;