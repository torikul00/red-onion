import React from 'react';
import Card from '../Card/Card';
import useFoods from '../hooks/useFoods';

const Breakfast = () => {
    const [food] = useFoods()
    const breakfastFoods = food?.breakfast
    return (
        <>
            {
           breakfastFoods?.map(food => <Card key={food.id} food={food} />)
           }
        </>
    );
};

export default Breakfast;