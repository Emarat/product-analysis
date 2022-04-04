import React, { useEffect, useState } from 'react';
import CustomReviews from '../../Hook/CustomReviews';
import UserReview from '../UserReview/UserReview';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = CustomReviews();
    return (
        <div className='review-container'>
            {
                reviews.map(review => <UserReview review={review} key={review._id}></UserReview>)
            }
        </div>
    );
};

export default Reviews;