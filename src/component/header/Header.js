import React from 'react';
import headers from "../../file/images/logo.png"
import './Header.css'

const Header = () => {
    return (
        <div className="main">
            <img className="img-size" src={headers} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Mange Inventory Here</a>
            </nav>
        </div>
    );
};

export default Header;