import { INITIAL_STATE } from './';
import { ActionTypes } from '../action/action-type';

const application = (state = INITIAL_STATE.application, action = {}) => {
    switch (action.type) {
        case ActionTypes.APPLICATION_CART_INCREMENT: {
            const newState = { ...state };
            const product = action.payload;
            const productExist = newState?.cartItems.find((item) => item.id === product.id);
            if (productExist) {
                newState.cartItems = newState?.cartItems.map((item) => item.id === product.id ?
                    { ...productExist, quantity: productExist.quantity + 1 } : item)
            } else {
                newState.cartItems = [...newState?.cartItems, { ...product, quantity: 1 }];
            }
            return newState;
        }
        case ActionTypes.APPLICATION_CART_DECREMENT: {
            const newState = { ...state };
            const product = action.payload;
            const productExist = newState?.cartItems.find((item) => item.id === product.id);
            if (productExist?.quantity === 1) {
                newState.cartItems = newState?.cartItems.filter((item) => item.id !== product.id);
            } else {
                newState.cartItems = newState?.cartItems.map((item) => item.id === product.id ?
                    { ...productExist, quantity: productExist.quantity - 1 } : item)
            }
            return newState;
        }
        case ActionTypes.APPLICATION_CART_CLEAR: {
            const newState = { ...state };
            newState.cartItems  = action.payload
            return newState;
        }
        default:
            return state;
    }
}
export default application;