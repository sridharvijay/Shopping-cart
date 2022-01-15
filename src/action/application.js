import { ActionTypes } from "./action-type";

export const handleAddProduct = payload => ({type: ActionTypes.APPLICATION_CART_INCREMENT, payload});
export const handleRemoveProduct = payload => ({type: ActionTypes.APPLICATION_CART_DECREMENT, payload})
export const handleCartClear = payload => ({type: ActionTypes.APPLICATION_CART_CLEAR, payload})