import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../src/Firebase/firebase.init'



const Header = () => {
    const [user] = useAuthState(auth);


    return (
        <div className='navbar'>
            <NavLink
                to="/Home"
                style={({ isActive }) =>
                    (isActive ? { textDecoration: 'underline', color: 'red' } : { color: 'blue' })}
            >
                Home
            </NavLink>

            <NavLink
                to="/Services"
                style={({ isActive }) =>
                    (isActive ? { textDecoration: 'underline', color: 'red' } : { color: 'blue' })}
            >
                Services
            </NavLink>
            <NavLink
                to="/Blogs"
                style={({ isActive }) =>
                    (isActive ? { textDecoration: 'underline', color: 'red' } : { color: 'blue' })}
            >
                Blogs
            </NavLink>
            <NavLink
                to="/About"
                style={({ isActive }) =>
                    (isActive ? { textDecoration: 'underline', color: 'red' } : { color: 'blue' })}
            >
                About
            </NavLink>


            

            {user ? (<button className='user-pic' onClick={() => signOut(auth)}> <img src={user.photoURL} alt="" /> SignOut</button>) : <div className='userToggle'>
            
            <NavLink
                to="/Login"
                style={({ isActive }) =>
                    (isActive ? { textDecoration: 'underline', color: 'red' } : { color: 'blue' })}>
                
                Login
            
            
            </NavLink>
            <NavLink
                to="/Signup"
                style={({ isActive }) =>
                    (isActive ? { textDecoration: 'underline', color: 'red' } : { color: 'blue' })}
            >
                Register


            </NavLink>
            
            
            </div>}






        </div>
    );
};

export default Header;