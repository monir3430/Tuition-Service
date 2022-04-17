import React, { useState } from 'react';
import './Home.css';
import batch from '../images/batch.jpg'
import virtual from '../images/virtual.jpg'
import home from '../images/home.jpg'
import banner from '../images/banner.jpg'




const Home = () => {

    return (
        <div>
            
            <div className='banner'>
                <h1>Your Child's Future is First Priority</h1>
                <img src={banner} alt="" />
            </div>
            <h1> I provide three services</h1>
            <div className='teaching-option'>
                <h3> 1. Home Teaching</h3>
                <img src={home} alt="" />
                <h5>Category : Single Entity</h5>
                <h5>Subject : Any Subject Except Science</h5>
                
                <h5>Service Charge : 1000 tk/Month</h5>
                <button className='button'>Details</button>
            </div>
            <div className='teaching-option'>
                <h3> 1. Batch Teaching</h3>
                <img src={batch} alt="" />
                <h5>Category : Grouping</h5>
                <h5>Subject : Any Subject Except Science</h5>
                <h5>Service Charge : 1500 tk/Month</h5>
                <button className='button'>Details</button>
            </div>
            <div className='teaching-option'>
                <h3> 1. Virtual Teaching</h3>
                <img src={virtual} alt="" />
                <h5>Category : Grouping</h5>
                <h5>Subject : Any Subject Except Science</h5>
                <h5>Service Charge : 700 tk/Month</h5>
                <button className='button'>Details</button>
            </div>
        </div>
    );
};

export default Home;