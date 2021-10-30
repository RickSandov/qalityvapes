import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { cartReducer } from '../reducers/cartReducer';
import thunk from 'redux-thunk';
import { uiReducer } from '../reducers/uiReducer';
import { authReducer } from '../reducers/authReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    cart: cartReducer,
    ui: uiReducer,
    session: authReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);