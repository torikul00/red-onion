import React from 'react';
import './SignUp.css'
import Logo from '../../../src/images/logo2.png'

const SignUp = () => {
    return (
        <div className='form-container'>

            <form className='signUp-form' >
                <img className='form-logo' src={Logo} alt="logo" />
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Password'/>
                <input type="text" placeholder='Confirm password' />
                <button className='signUp-form-button' type='submit'>Sign Up</button>
                <p>Already have an account ?</p>
            </form>



        </div>
    );
};

export default SignUp;