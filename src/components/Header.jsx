import React from 'react';
import logo from "../assets/logo/output.png"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="header-container flex ">
                <div className="header-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="header-nav flex flex-center">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link>Favourites</Link>
                    </li>
                    <li>
                        <Link to="checkout">Checkout</Link>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Header
