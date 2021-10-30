import { types } from "../types/types";


export const stripeSetPromise = (stripePromise) => ({
    type: types.stripeSetPromise,
    payload: {
        stripePromise
    }
})