import React from 'react';
import './CustomerReview.css'

const CustomerReview = ({ customer }) => {
    const { img, name, review } = customer;
    return (
        <div className='customer-review'>
            <img src={img} alt="" />
            <p>{name}</p>
            <p>{review}</p>
        </div>
    );
};

export default CustomerReview;