import shoe from '../../showcase-area-img/shoe.png'
import useCustomers from '../../hooks/useCustomers';
import './Home.css'
import CustomerReview from '../CustomerReview/CustomerReview';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [customers] = useCustomers();
    // console.log(customers)

    const sliceCustomer = customers.slice(0, 3);

    const navigate = useNavigate();

    const seeAllReviews = () => {
        navigate('/reviews');
    }


    return (
        <div>
            <section className='showcase-area-bg-color'>
                <div className='showcase-container'>
                    <div className='showcase-text'>
                        <h1>Your next shoes</h1>
                        <h1>
                            <span className='gradient-text-2'>Your best shoes</span>
                        </h1>
                        <p>
                            Big Offer Up to 50% of on Nike Air Force Shoes. Everyone konws Nike is one of the most popular sports bands in the world. Most probably your grandpapa knew that too. In Bangladesh we are an authorized dealer of Nike. Nike has allowed us to offer this special offer to our customers to enhance the reputation of our shop as we are able to fulfill a target of Nike. So without delay, jump in our shop with your family and friends to get the offer now.
                        </p>
                        <button className='live-demo-button'>Live Demo</button>
                    </div>
                    <div className='showcase-img'>
                        <img src={shoe} alt="" />
                    </div>
                </div>
            </section>

            <section className='customer-review-section'>
                <h1><span className='gradient-text'>Our Customer Reviews</span></h1>
                <div className='customer-reviews-container'>

                    {
                        sliceCustomer.map(customer => <CustomerReview key={customer.id} customer={customer}></CustomerReview>)
                    }

                </div>
                <div className='reviews-button'>
                    <button onClick={seeAllReviews}>See All Reviews <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon></button>
                </div>
            </section>


        </div>
    );
};

export default Home;