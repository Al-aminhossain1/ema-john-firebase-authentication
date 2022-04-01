import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='header'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <nav >
                    <CustomLink to="/">Shop</CustomLink>
                    <CustomLink to="/review">Orders</CustomLink>
                    <CustomLink to="/inventory">Inventory</CustomLink>
                    <CustomLink to="/about">About us</CustomLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;