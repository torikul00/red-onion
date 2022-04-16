import React from 'react';
import { Link, Outlet } from 'react-router-dom';

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
                        <Link to="breakfast">Breakfast</Link>
                        <Link to="lunch">Lunch</Link>
                        <Link to="dinner">Dinner</Link>                                               
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