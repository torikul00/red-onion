import React from 'react';
import Card from '../Card/Card';
import useFoods from '../hooks/useFoods';

const Dinner = () => {
    const [food] = useFoods()
    const dinnerFoods = food?.dinner
    return (
        <>
            {
           dinnerFoods?.map(food => <Card key={food.id} food={food} />)
           }
        </>
    );
};

export default Dinner;