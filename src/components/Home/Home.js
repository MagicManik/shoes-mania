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

    const sliceCustomer = customers.slice(1, 4);

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
                        <h1><span className='gradient-text'>Your best shoes</span></h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                        <button className='live-demo-button'>Live Demo</button>
                    </div>
                    <div className='showcase-img'>
                        <img src={shoe} alt="" />
                    </div>
                </div>
            </section>

            <section className='customer-review-section'>
                <h1><span className='gradient-text'>Customer Reviews</span></h1>
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