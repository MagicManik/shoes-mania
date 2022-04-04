import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CustomerReview.css'

const CustomerReview = ({ customer }) => {
    console.log(customer.name)
    const { img, name, review } = customer;
    return (
        <div className='customer-review'>
            <img src={img} alt="" />
            <div className='customer-review-text'>
                <h5>{name}</h5>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </div>
            <p>{review}</p>
        </div>
    );
};

export default CustomerReview;