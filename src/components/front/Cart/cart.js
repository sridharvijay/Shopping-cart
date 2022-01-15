import React from 'react';
import {connect} from 'react-redux';
import "./cart.css";
import {handleAddProduct, handleRemoveProduct, handleCartClear} from '../../../action/application';
const Cart = ({ application , addProduct, removeProduct, clearCart}) => {
    const totalPrice = application?.cartItems.reduce((price, item )=> price + item.quantity * item.price,0)
    return (
        <div className="cart-items">
            <h2 className="cart-items-header">Cart Items</h2>
            <div className="clear-cart">
                {application?.cartItems.length >=1 && (
                    <button className="clear-cart-btn" onClick={() => clearCart([])}>Clear cart</button>
                )}
            </div>
            {application?.cartItems.length === 0 && (
                <div className="cart-items-empty">
                    No items are added.
                </div>
            )}
            <div>
                {application?.cartItems.map((item) => {
                    return (
                        <div key={item.id} className="cart-items-list">
                            <img className="cart-items-image" src={item.image} alt={item.name} />
                            <div className="cart-items-name">{item.name}</div>
                            <div className="cart-items-functions">
                                <button className="cart-items-add" 
                                onClick={() => addProduct(item)}>+</button>
                               <span className="quantity">
                               {item.quantity}
                               </span>
                                <button className="cart-items-remove"
                                onClick={() => removeProduct(item)}>-</button>
                                </div>
                                <div className="cart-items-price">
                                {application?.cartItems.filter((data) => data.id === item.id).reduce((price, item )=> price + item.quantity * item.price,0)}
                                    </div>
                        </div>
                    )
                })}
            </div>
            <div className="cart-items-totalPrice-name">
                Total Price
                <div className="cart-items-totalPrice">
                ${totalPrice}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    application: state.application
})
const mapDispatchToProps = dispatch => ({
    addProduct: product => dispatch(handleAddProduct(product)),  
    removeProduct: product => dispatch(handleRemoveProduct(product)),
    clearCart: product => dispatch(handleCartClear(product)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cart);