import React, { useState } from 'react';
import './Home.css';
import batch from '../images/batch.jpg'
import virtual from '../images/virtual.jpg'
import home from '../images/home.jpg'
import banner from '../images/banner.jpg'




const Home = () => {

    return (
        <div className='banner'>
        <img src={banner} alt="" />
        </div>
    );
};

export default Home;