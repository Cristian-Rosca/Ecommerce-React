import { CartItem } from "../../types/CartItem";
import { CART_ACTION } from "./cart.types";

type CartState = {
    isCartOpen: boolean,
    cartItems: CartItem[],

}

const CART_INITIAL_STATE: CartState = {
    isCartOpen: false,
    cartItems: [],
}

export const cartReducer = (state: CartState = CART_INITIAL_STATE, action: CART_ACTION) => {
    const { type, payload } = action;

    switch (type) {
        case "cart/SET_CART_ITEMS":
            return {
                ...state,
                cartItems : payload
            }
        case "cart/SET_IS_CART_OPEN":
            return {
                ...state,
                isCartOpen: payload
            }

        default:
            return state;
    }


}