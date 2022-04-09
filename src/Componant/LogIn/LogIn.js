import React from 'react';
import './LogIn.css'

const LogIn = () => {
    return (
        <div className='form-container'>
            <h1>LOG IN</h1>
            <form >
                <label htmlFor="Email"></label>
                <input type="email" placeholder='Enter your email' />
                <br />
                <label htmlFor="Password"></label>
                <input type="password" placeholder='Enter your password' />
                <br />
                <input type="submit" value="Login" />

            </form>

        </div>
    );
};

export default LogIn;