export type CART_ACTION_TYPES = "cart/SET_CART_ITEMS" | "cart/SET_IS_CART_OPEN" | "cart/SET_CART_COUNT" | "cart/SET_CART_TOTAL";

export type CART_ACTION = {
    type: CART_ACTION_TYPES,
    payload: any
}