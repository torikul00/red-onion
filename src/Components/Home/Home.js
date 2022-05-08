import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import './Home.css'
const Home = () => {


    return (
        <div>
            <header>
                <h1 className='title'>Best food waiting for your belly </h1>
                <div className='search-container'>
                    <input placeholder='Search Food' className='search-input' type="text" />
                    <button className='search-button'>Search</button>
                </div>
            </header>

            <main>
                <div className="items-container">
                    <div className="items-links">
                        <NavLink to='breakfast'
                            className={({ isActive }) =>
                                isActive ? 'active-items-links' : 'items-links'
                            }
                        >BREAKFAST</NavLink>

                        <NavLink to="lunch"
                            className={({ isActive }) =>
                                isActive ? 'active-items-links' : 'items-links'
                            }
                        >LUNCH</NavLink>
                        <NavLink to="dinner"
                            className={({ isActive }) =>
                                isActive ? 'active-items-links' : 'items-links'
                            }
                        >DINNER</NavLink>
                    </div>
                    <div className="food-items">

                        <Outlet />

                    </div>
                </div>

            </main>
        </div>
    );
};

export default Home;