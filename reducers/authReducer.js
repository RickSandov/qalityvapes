import { types } from "../types/types";


const initialState = {
    profileId: '',
    sessionId: '',
    orderHistory: [],
    address: {
        city: '',
        phoneNumber: '',
        street: '',
        division: '',
        extNum: '',
        intNum: '',
        zip: '',
        refs: ''
    }
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case types:

            return state;

        default:
            return state;
    }

}