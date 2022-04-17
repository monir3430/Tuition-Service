import './Services.css';
import React from 'react';import batch from '../images/batch.jpg'
import virtual from '../images/virtual.jpg'
import home from '../images/home.jpg'
import { Link } from 'react-router-dom';


const Services = () => {
   
    return (
       <div>
            
            <div className='teaching-option'>
                <h3> 1. Home Teaching</h3>
                <img src={home} alt="" />
                <h5>Category : Single Entity</h5>
                <p><b>Description:</b> I carefully nurse your child at your home. This package includes one person only at a time. I'm waiting for your response. Please take schedule.</p>
                
                <h5>Service Charge : 1000 tk/Month</h5>
                <Link to="/Contact">
                <button className='button'>Contact Me</button>
                </Link>
            </div>
            <div className='teaching-option'>
                <h3> 1. Batch Teaching</h3>
                <img src={batch} alt="" />
                <h5>Category : Grouping</h5>
                <p><b>Description:</b> I teach every person at a selected Ac room. This package includes hundred of person at a time. I'm waiting for your response. Please take schedule.</p>
                <h5>Service Charge : 1500 tk/Month</h5>
                <Link to="/Contact">
                <button className='button'>Contact Me</button>
                </Link>
            </div>
            <div className='teaching-option'>
                <h3> 1. Virtual Teaching</h3>
                <img src={virtual} alt="" />
                <h5>Category : Grouping</h5>
                <p><b>Description:</b> I teach every person by online. This package include 500 person at a time. I will provide google meet link for live class after buying this package. I'm waiting for your response. Please take schedule.</p>
                <h5>Service Charge : 700 tk/Month</h5>
                <Link to="/Contact">
                <button className='button'>Contact Me</button>
                </Link>
            </div>
        </div>
    );
};

export default Services;