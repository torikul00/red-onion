import React from 'react';

const Card = ({food}) => {
    const {name,image,title} = food
    return (
        <div>
            <img src={image} alt="" />
            <h2>{ name}</h2>
        </div>
    );
};

export default Card;