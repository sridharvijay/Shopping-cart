import React from "react";
import {connect} from 'react-redux';
import "./product.css"
import {handleAddProduct} from '../../../action/application';
const Products = ({productItems, addProduct}) => {
    return (
        <div className="products">
            {productItems.map((item) => {
                return (<div className="card">
                    <div>
                        <img className="product-image" src={item.image} alt={item.name}/>
                        </div>
                        <div>
                            <h3 className="product-name">
                                {item.name}
                            </h3>
                    </div>
                    <div className="product-price">
                        ${item.price}
                        </div>
                        <div>
                            <button className="product-add-btn"
                            onClick={() => addProduct(item)}>Add to Cart</button>
                            </div>
                </div>)
               
            })}
        </div>
    )
}

const mapStateToProps = state => ({
    application: state.application
})
const mapDispatchToProps = dispatch => ({
    addProduct: product => dispatch(handleAddProduct(product)),  
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Products);