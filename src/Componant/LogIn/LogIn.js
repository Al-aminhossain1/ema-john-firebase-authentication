import React from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css'

const LogIn = () => {
    return (
        <div className='form-container'>
            <div>

                <form >
                    <h1>LOG IN</h1>
                    <div className="input-group">
                        <label className='label-title' htmlFor="Email">Email</label>
                        <input type="email" name='email' required />
                    </div>

                    <div className="input-group">
                        <label className='label-title' htmlFor="Password">Password</label>
                        <input type="password" name='password' required />
                    </div>


                    <div >
                        <input className="button" type="submit" value="Log in" />
                    </div>

                </form>
                <p>New to ema john? <Link className='create-account' to={'/signin'}>Create New Account</Link></p>




            </div>

        </div>
    );
};

export default LogIn;