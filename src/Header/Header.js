import React from 'react';
import { NavLink } from 'react-router-dom';
import { auth } from '../../src/Firebase/firebase.init'
import './Header.css';

const Header = () => {
    return (
        <div className='navbar'>
            <NavLink
                to="/Home"
                style={({ isActive }) =>
                    (isActive ? { textDecoration: 'underline', color: 'red' } : { color: 'blue' })}
            >
                Home
            </NavLink>
            {/* <NavLink
                to="/Services"
                style={({ isActive }) =>
                    (isActive ? {textDecoration: 'underline', color: 'red' } : { color: 'blue' })}
            >
                Services
            </NavLink> */}
            <NavLink
                to="/Blogs"
                style={({ isActive }) =>
                    (isActive ? {textDecoration: 'underline', color: 'red' } : { color: 'blue' })}
            >
                Blogs
            </NavLink>
            <NavLink
                to="/About"
                style={({ isActive }) =>
                    (isActive ? {textDecoration: 'underline', color: 'red' } : { color: 'blue' })}
            >
               About Me
            </NavLink>
            <NavLink
                to="/Login"
                style={({ isActive }) =>
                    (isActive ? { textDecoration: 'underline', color: 'red' } : { color: 'blue' })}
            >
                Login
            </NavLink>
            <NavLink
                to="/Signup"
                style={({ isActive }) =>
                    (isActive ? {textDecoration: 'underline', color: 'red' } : { color: 'blue' })}
            >
               Register
            </NavLink>
        </div>
    );
};

export default Header;