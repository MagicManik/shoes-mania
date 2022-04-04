import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useCustomers from '../../hooks/useCustomers';
import './AllReviews.css'

const AllReviews = () => {
    const [customers] = useCustomers();
    return (
        <section className='all-review-section'>
            <div className='customer-reviews-container'>
                {
                    customers.map(customer =>
                        <div className='customer-review'>
                            <img src={customer.img} alt="" />
                            <div className='customer-review-text'>
                                <h5>{customer.name}</h5>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            </div>
                            <p>{customer.review}</p>
                        </div>)
                }
            </div>
        </section>
    );
};

export default AllReviews;