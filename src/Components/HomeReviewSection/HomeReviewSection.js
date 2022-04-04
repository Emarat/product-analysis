import React from 'react';
import CustomReviews from '../../Hook/CustomReviews';
import UserReview from '../UserReview/UserReview';
import './HomeReviewSection.css';


const HomeReviewSection = () => {
    const [reviews] = CustomReviews();
    return (
        <div className='review-container'>
            {
                reviews.slice(0, 3).map(review => <UserReview review={review} key={review._id}></UserReview>)
            }
        </div>
    );
};

export default HomeReviewSection;