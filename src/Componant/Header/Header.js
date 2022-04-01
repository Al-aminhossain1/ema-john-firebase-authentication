import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='header'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <nav >
                    <a href="">Order</a>
                    <a href="">Order Review</a>
                    <a href="">Manage Inventory</a>
                    <a href="">About us</a>
                </nav>
                <h1>amaro porane jaha chay tumi tai tumi taigo amaro porane jaha cahy toma jhora aj a mone mor keho nai keho naigo amaro porane jaha chay</h1>
            </div>
        </div>
    );
};

export default Header;