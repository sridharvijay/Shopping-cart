import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import "./header.css"
const Header = ({application}) => {
    return (
        <header className="header">
            <div>
                <h1>
                    <Link to="/" className="logo">
                       Dckap Shopping 
                    </Link>
                </h1>
            </div>
            <div className="header-link">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/cart" className="cart">
                            <i className="fas fa-shopping-cart"/>
                            <span className="cart-length">
                                {application?.cartItems.length === 0 ? "" : application?.cartItems.length}
                            </span>
                        </Link>
                    </li>
                </ul>

            </div>
        </header>
    )
}

const mapStateToProps = state => ({
    application: state.application
})

export default connect(
    mapStateToProps
  )(Header);