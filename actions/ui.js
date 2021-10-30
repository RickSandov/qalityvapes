import { types } from "../types/types";


export const uiStopToast = () => ({
    type: types.uiStopToast
})

export const uiActiveToast = (msg, err) => ({
    type: types.uiActiveToast,
    payload: { msg, err }
})

export const uiTempToast = (msg, err) => {

    return (dispatch) => {
        dispatch(uiActiveToast(msg, err));
        setTimeout(() => {
            dispatch(uiStopToast())
        }, 4000);
    }
}

export const uiActiveModal = (orderId) => ({
    type: types.uiActiveModal,
    payload: { orderId }
})

export const uiCloseModal = () => ({
    type: types.uiCloseModal
})