import {combineReducers} from 'redux';
import application from './application';

export const INITIAL_STATE = { 
    application: {
        cartItems: [],
        quantity: 0
    }
}
export default combineReducers({
    application
  });