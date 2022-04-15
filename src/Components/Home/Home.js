import React from 'react';
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
                <div className="items-links">
                    <a href=""></a>
                </div>
            </main>
        </div>
    );
};

export default Home;