import React from 'react';
import './Card.css'
const Card = ({ food }) => {
    const { name, image, title, price } = food
    return (
        <div className="item-container">
            <div className='single-item'>
                <img src={image} alt="" />
                <h2>{name}</h2>
                <span>{title}</span>
                <h2> $ {price}</h2>
            </div>
        </div>
    );
};

export default Card;