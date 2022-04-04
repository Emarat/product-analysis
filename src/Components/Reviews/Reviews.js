import React, { useEffect, useState } from 'react';
import UserReview from '../UserReview/UserReview';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='review-container'>
            {
                reviews.map(review => <UserReview review={review} key={review._id}></UserReview>)
            }
        </div>
    );
};

export default Reviews;