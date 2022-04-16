import React from 'react';
import Card from '../Card/Card';
import useFoods from '../hooks/useFoods';

const Lunch = () => {
     const [food] = useFoods()
     const lunchFoods = food?.lunch
     return (
         <>
             {
            lunchFoods?.map(food => <Card key={food.id} food={food} />)
            }
         </>)
};

export default Lunch;