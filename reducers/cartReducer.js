import { types } from "../types/types";



export const cartReducer = (state = [

], action) => {

    const stateCopy = state;

    switch (action.type) {
        case types.cartUpdate:
            return action.payload

        case types.cartCreate:
            window.localStorage.setItem('cart', JSON.stringify([]))
            return []

        case types.cartAddItem:

            const currentProduct = stateCopy.find(item => item.product === action.payload.product);

            if (currentProduct) {
                currentProduct.qty = currentProduct.qty + action.payload.qty
            } else {
                stateCopy.push(action.payload)
            }

            window.localStorage.setItem('cart', JSON.stringify(stateCopy))

            return [...stateCopy]

        case types.setQuantity:
            const prod = stateCopy.find(item => item.product === action.payload.product);
            if (prod) {
                prod.qty = action.payload.qty
            }

            window.localStorage.setItem('cart', JSON.stringify(stateCopy))

            return [...stateCopy]

        case types.cartDeleteItem:
            const index = stateCopy.findIndex(({ product }) => product === action.payload.product);

            stateCopy.splice(index, 1);

            window.localStorage.setItem('cart', JSON.stringify(stateCopy))
            return [...stateCopy]

        default:
            return state;
    }

}