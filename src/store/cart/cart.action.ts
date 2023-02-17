import { CartItem } from "../../types/CartItem";
import { Product } from "../../types/Product";
import { createAction } from "../../utils/reducer/reducer.utils";

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

export const setIsCartOpen = (boolean : boolean) => createAction("cart/SET_IS_CART_OPEN", boolean);

export const addItemToCart = (cartItems : CartItem[], productToAdd: Product) => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    return createAction("cart/SET_CART_ITEMS", newCartItems)
}

export const removeItemFromCart = (cartItems : CartItem[], productToRemove: Product) => {
    const newCartItems = removeCartItem(cartItems, productToRemove)
    return createAction("cart/SET_CART_ITEMS", newCartItems)
}

export const clearItemFromCart = (cartItems : CartItem[], productToClear: Product) => {
    const newCartItems = clearCartItem(cartItems, productToClear)
    return createAction("cart/SET_CART_ITEMS", newCartItems)
}