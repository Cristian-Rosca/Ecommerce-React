import { CartItem } from "../../types/CartItem";
import { Product } from "../../types/Product";
import { createSlice } from "@reduxjs/toolkit";

type CartState = {
    isCartOpen: boolean,
    cartItems: CartItem[],

}

const CART_INITIAL_STATE: CartState = {
    isCartOpen: false,
    cartItems: [],
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

export const cartSlice = createSlice({
    name: "cart",
    initialState: CART_INITIAL_STATE,
    reducers: {
        addItemToCart: (state, action) => {
            state.cartItems = addCartItem(state.cartItems, action.payload)
        },
        removeItemFromCart: (state, action) => {
            state.cartItems = removeCartItem(state.cartItems, action.payload)
        },
        clearItemFromCart: (state, action) => {
            state.cartItems = clearCartItem(state.cartItems, action.payload)
        },
        setIsCartOpen: (state, action) => {
            state.isCartOpen = action.payload
        }
    }})

export const { addItemToCart, removeItemFromCart, clearItemFromCart, setIsCartOpen } = cartSlice.actions

export const cartReducer = cartSlice.reducer