import React from 'react';
import './UserReview.css';

const UserReview = (props) => {
    const { name, ratings, text } = props.review;
    return (
        <div className='review'>
            <h3>Author: {name}</h3>
            <h5>Rating: {ratings}</h5>
            <p>Comment: {text}</p>
        </div>
    );
};

export default UserReview;