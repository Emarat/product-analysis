import React from 'react';
import './Home.css';
import jersey from '../../Jersey.jpg';


const Home = () => {
    return (
        <div>
            <div className='product-container'>
                <div className='text'>
                    <h3>WORLD SOCCER APPAREL & ACCESSORIES</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sapiente accusantium corporis facere quam quasi deserunt dolor, vitae debitis sit.</p>
                </div>
                <div>
                    <img src={jersey} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;