
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'
// Navbar.jsx additions:



function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const [sticky, setsticky] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 500 ? setsticky(true) : setsticky(false)
        })
        return () => {
            window.removeEventListener('scroll', () => {
                window.scrollY > 500 ? setsticky(true) : setsticky(false)
            })
        }
    }
        , [])

    return (
        <nav className={`container ${sticky ? 'darknav' : ''}`}>
            <img src={logo} alt="" srcset="" className="logo" />
            <button className="hamburger" aria-label="Toggle menu" onClick={toggleMenu}>
                &#9776;
            </button>

            <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                <a href="#program" onClick={() => setMenuOpen(false)}>Program</a>
                <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                <a href="#campus" onClick={() => setMenuOpen(false)}>Campus</a>
                <a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a>
                <a href="#contact"  onClick={() => setMenuOpen(false)}>Contact us</a>
            </div>


        </nav>)
}
export default Navbar;