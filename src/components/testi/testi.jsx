import React from "react";
import './testi.css';
import { useState, useEffect } from "react";
import nextbtn from '../../assets/next-icon.png';
import backbtn from '../../assets/back-icon.png';
import user1 from '../../assets/user-1.png';
import user2 from '../../assets/user-2.png';
import user3 from '../../assets/user-3.png';
import user4 from '../../assets/user-4.png';

function Testimonials() {
    const [currentslide, setslide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    
    // Check if screen is mobile size
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
    
    // Calculate total slides based on screen size
    const totalSlides = isMobile ? 4 : 2; // 4 individual slides on mobile, 2 pairs on desktop
    
    const nextslide = () => {
        setslide(currentslide === totalSlides - 1 ? 0 : currentslide + 1);
    }
    
    const prevslide = () => {
        setslide(currentslide === 0 ? totalSlides - 1 : currentslide - 1);
    }
    
    // Auto-slide functionality
    useEffect(() => {
        const timer = setInterval(() => {
            nextslide();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentslide, totalSlides]);
    
    // Calculate transform based on screen size
    const getTransform = () => {
        if (isMobile) {
            return `translateX(-${currentslide * 25}%)`;
        } else {
            return `translateX(-${currentslide * 50}%)`;
        }
    };
    
    return (
        <div className="testimonials">
            <div className="slider">
                <ul style={{ transform: getTransform() }}>
                    <li>
                        <div className="slide">
                            <div className="userinfo">
                                <img src={user1} alt="" />
                                <div className="text">
                                    <h3>Nihal Aboobacker</h3>
                                    <span>America, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="userinfo">
                                <img src={user2} alt="" />
                                <div className="text">
                                    <h3>Mohammed Naeem</h3>
                                    <span>America, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="userinfo">
                                <img src={user3} alt="" />
                                <div className="text">
                                    <h3>Rubiya</h3>
                                    <span>America, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="userinfo">
                                <img src={user4} alt="" />
                                <div className="text">
                                    <h3>Rukiya</h3>
                                    <span>America, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="nextback">
                <img src={backbtn} onClick={prevslide} alt="" className="backbtn" />
                <img src={nextbtn} onClick={nextslide} alt="" className="nextbtn" />
            </div>
        </div>
    )
}

export default Testimonials;