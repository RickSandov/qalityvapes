import { types } from "../types/types";


export const updateCart = cart => ({
    type: types.cartUpdate,
    payload: cart
})

export const cartCreate = () => ({
    type: types.cartCreate
})

export const cartAddItem = (item) => ({
    type: types.cartAddItem,
    payload: item
})

export const setQuantity = (product, qty) => ({
    type: types.setQuantity,
    payload: {
        product,
        qty
    }
})

export const cartDeleteItem = (product) => ({
    type: types.cartDeleteItem,
    payload: {
        product
    }
})
