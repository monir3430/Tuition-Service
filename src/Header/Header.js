import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='navbar'>
            <Link to="/Home">Home</Link>
            <Link to="/Services">Services</Link>
            <Link to="/Blogs">Blogs</Link>
            <Link to="/About Me">About Me</Link>
        </div>
    );
};

export default Header;