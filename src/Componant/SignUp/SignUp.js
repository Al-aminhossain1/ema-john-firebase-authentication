import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [eamil, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handelEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handelPasswordBlur = event => {
        setPassword(event.target.value);

    }
    const handelConfirmPassword = event => {
        setConfirmPassword(event.target.value);
    }
    const handelCreateUser = event => {
        event.preventDefault()

        if (password !== confirmPassword) {
            setError("Your two password didn't match")
            return;
        }
    }
    return (

        <div className='form-container'>
            <div>

                <form onSubmit={handelCreateUser}>
                    <h1>Sign Up</h1>
                    <div className="input-group">
                        <label className='label-title' htmlFor="Email">Email</label>
                        <input onBlur={handelEmailBlur} type="email" name='email' placeholder='Enter your email' required />
                    </div>
                    <div className="input-group">
                        <label className='label-title' htmlFor="Password">Password</label>
                        <input onBlur={handelPasswordBlur} type="password" name='password' placeholder='Enter your password' required />
                    </div>
                    <div className="input-group">
                        <label className='label-title' htmlFor="Confirm-Password">Confirm Password</label>
                        <input onBlur={handelConfirmPassword} type="password" name='Confirm-password' placeholder='Enter your password' required />
                    </div>
                    <p style={{ color: "red", fontSize: '20px' }}>{error}</p>
                    <div >
                        <input className="button" type="submit" value="Sign up" />
                    </div>

                </form>
                <p>Already have an Account? <Link className='create-account' to={'/login'}>login</Link></p>




            </div>

        </div>
    );
};

export default SignIn;