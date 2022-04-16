import React from 'react';
import Card from '../Card/Card';
import useFoods from '../hooks/useFoods';
import './Home.css'

const Home = () => {

    const [food, setFood] = useFoods()
    const breakfastFoods = food.breakfast
    console.log(breakfastFoods)
   
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
                        <a href="">Breakfast</a>
                        <a href="">Lunch</a>
                        <a href="">Dinner</a>                                               
                    </div>


                    <div className="food-items">

                        {
                            breakfastFoods?.map(food => <Card key={food.id} food={food} />)
                        }
                        
                    </div>
                </div>
               
            </main>
        </div>
    );
};

export default Home;