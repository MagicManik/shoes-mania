import React from 'react';
import './NotFound.css'
import fourZeroFour from '../../not-found-img/fourZeroFour.svg'

const NotFound = () => {
    return (
        <div className='not-found-container'>
            <div className='not-found-img'>
                <img src={fourZeroFour} alt="" />
            </div>
            <div className='not-found-text'>
                <h1 className='gradient-text-2'>Oops! You're lost.</h1>
                <p>The page you are looking for was not found.</p>
            </div>
        </div>
    );
};

export default NotFound;