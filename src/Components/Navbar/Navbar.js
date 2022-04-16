import React from 'react'
import './Navbar.css'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate  = useNavigate()
    return (
        <div>
            <nav>
                <div>
                    <img onClick={()=> navigate('/')} className='logo' src='images/logo2.png' alt="" />
                </div>

                <div className="links">
                    <Link  to="/cart"><AiOutlineShoppingCart className='cart-icon' /></Link>
                    <Link to="/login">Login</Link>
                    <button onClick={()=>navigate('/signUp')} className='signUp-button'>Sign Up</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;