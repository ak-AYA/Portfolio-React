import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <nav id="header">
                <div className="container nav-bar">
                    <span className="name" id="name">Aya</span>
                    <div className="nav-container">
                        <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
                            <li className="list"><Link to="/">About Me</Link></li>
                            <li className="list"><Link to="/skills">Skills</Link></li>
                            <li className="list"><Link to="/services">Services</Link></li>
                            <li className="list"><Link to="/projects">Projects</Link></li>
                            <li className="list"><Link to="/testimonials">Testimonials</Link></li>
                            <li className="list"><Link to="/contact">Contact</Link></li>
                        </ul>
                        <button 
                            className="toggle-button" 
                            onClick={toggleMenu}
                            aria-label="Toggle Menu"
                        >
                            ☰
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Nav;
