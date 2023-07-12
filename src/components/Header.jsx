import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="header-container flex ">
                <div className="header-logo">
                    <img src="https://1000logos.net/wp-content/uploads/2021/06/Zomato-logo-768x432.png" alt="" />
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
