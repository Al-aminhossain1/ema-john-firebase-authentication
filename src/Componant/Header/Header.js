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
            <div className='navbar'>
                <nav >
                    <CustomLink to="/">SHOP</CustomLink>
                    <CustomLink to="/review">ORDERS</CustomLink>
                    <CustomLink to="/inventory">INVENTORY</CustomLink>
                    <CustomLink to="/about">ABOUT US</CustomLink>
                    <CustomLink to="/login">LOG IN</CustomLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;