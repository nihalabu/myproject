
import './Hero.css';
import React from 'react';
import arrow from '../../assets/dark-arrow.png'
function Hero(){
    return(
    <div className='Hero container'>
        <div className='Herotext'>
            <h1>We Ensure better education for a better world</h1>
            <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
            <button className='btn bt'>Explore more <img className='arrow' src={arrow} alt="" srcset="" /></button>
           
            

        </div>


    </div>)
}
export default Hero;