import React from 'react'
import './Navbar.css'
import { AiOutlineShoppingCart } from 'react-icons/ai';


const Navbar = () => {
    return (
        <div>
            <nav>
                <div>
                    <img className='logo' src='images/logo2.png' alt="" />
                </div>

                <div className="links">
                    <a  href="/"><AiOutlineShoppingCart className='cart-icon' /></a>
                    <a href="/">Login</a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;