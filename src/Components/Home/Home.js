import React from 'react';
import './Home.css';
import jersey from '../../Jersey.jpg';
import HomeReviewSection from '../HomeReviewSection/HomeReviewSection';
import CustomLink from '../CustomLink/CustomLink';


const Home = () => {
    return (
        <div className='body'>
            <div className='product-container'>
                <div className='text'>
                    <h3>WORLD SOCCER APPAREL & ACCESSORIES</h3>
                    <p>Shop soccer apparel and accessories at WORLD SOCCER APPAREL & ACCESSORIES. Featuring a wide range of high-quality soccer clothing for the whole family.</p>
                </div>
                <div>
                    <img src={jersey} alt="" />
                </div>
            </div>
            <div className='homeuserreview'>
                <h2>User Reviews</h2>
                <HomeReviewSection></HomeReviewSection>
            </div>
            <button className='btn'>
                <CustomLink to='/reviews'>See All Reviews</CustomLink>
            </button>
        </div>
    );
};

export default Home;