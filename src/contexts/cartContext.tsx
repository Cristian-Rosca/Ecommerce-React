import { createContext, useReducer } from "react"
import { CartItem } from "../types/CartItem"
import { Product } from "../types/Product"
import { createAction } from "../utils/reducer/reucer.utils"

type CartContext = {
    isCartOpen: boolean,
    setIsCartOpen: (boolean: boolean) => void,
    cartItems: CartItem[],
    addItemToCart: any,
    cartCount: number
    removeItemFromCart: any
    clearItemFromCart: any
    cartTotal: number
}

export type CART_ACTION_TYPES = "SET_CART_ITEMS" | "SET_IS_CART_OPEN"

type CART_ACTION = {
    type: CART_ACTION_TYPES,
    payload: any
}


const iCartState = {
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartCount: 0,
    removeItemFromCart: () => { },
    clearItemFromCart: () => { },
    cartTotal: 0
}

type CartState = {
    isCartOpen: boolean,
    cartItems: CartItem[],
    cartCount: number,
    cartTotal: number
}

const INITIAL_CART_STATE: CartState = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}

const cartReducer = (state: CartState, action: CART_ACTION) => {
    const { type, payload } = action;

    switch (type) {
        case "SET_CART_ITEMS":
            return {
                ...state,
                ...payload
            }
        case "SET_IS_CART_OPEN":
            return {
                ...state,
                isCartOpen: payload
            }

        default:
            console.error(`Unhandled action type ${action.type}`);
            return state;
    }


}


const addCartItem = (cartItems: CartItem[], productItemToAdd: Product) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productItemToAdd.id)

    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }

    return [...cartItems, { ...productItemToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems: CartItem[], productItemToRemove: Product) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productItemToRemove.id)

    if (existingCartItem && existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== productItemToRemove.id)
    }

    return cartItems.map((cartItem) => cartItem.id === productItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
}

const clearCartItem = (cartItems: CartItem[], productItemToClear: Product) => {
    return cartItems.filter((cartItem) => cartItem.id !== productItemToClear.id)
}


      


export const CartContext = createContext<CartContext>(iCartState)

const CartProvider = ({ children }: any) => {

    const [{cartItems, isCartOpen, cartCount, cartTotal}, dispatch] = useReducer(cartReducer, INITIAL_CART_STATE)

    const updateCartItemsReducer = (newCartItems: CartItem[]) => {
        const updatedCartCount = newCartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
        const updatedCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)

        dispatch(
            createAction("SET_CART_ITEMS", {
                cartItems: newCartItems,
                cartCount: updatedCartCount,
                cartTotal: updatedCartTotal
            }))
                

    }


    const addItemToCart = (productToAdd: Product) => {
        const newCartItems = addCartItem(cartItems, productToAdd)
        updateCartItemsReducer(newCartItems)
    }

    const removeItemFromCart = (productToRemove: Product) => {
        const newCartItems = removeCartItem(cartItems, productToRemove)
        updateCartItemsReducer(newCartItems)
    }

    const clearItemFromCart = (productToClear: Product) => {
        const newCartItems = clearCartItem(cartItems, productToClear)
        updateCartItemsReducer(newCartItems)
    }

    const setIsCartOpen = (boolean: boolean) => {
        dispatch(
            createAction("SET_IS_CART_OPEN", boolean))
    }

    return (
        <CartContext.Provider value={{ isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, removeItemFromCart, clearItemFromCart, cartTotal }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;