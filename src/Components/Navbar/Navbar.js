import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navBar'>
            <CustomLink to='/home'>Home</CustomLink>
            <CustomLink to='/reviews'>Reviews</CustomLink>
            <CustomLink to='/blogs'>Blogs</CustomLink>
            <CustomLink to='/dashboard'>Dashboard</CustomLink>
            <CustomLink to='/about'>About</CustomLink>

        </nav>
    );
};

export default Navbar;