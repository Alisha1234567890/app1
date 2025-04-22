// src/components/Navbar.jsx

import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className={`navbar ${isActive ? 'active' : ''}`}>
            <div className="hamburger" onClick={toggleActiveClass}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className={`navMenu ${isActive ? 'active' : ''}`}>
                <li><a href="/">Home</a></li>
                <li><a href="/team-registration">Team Registration</a></li>
                <li><a href="/mentor-dashboard">Mentor Dashboard</a></li>
                <li><a href="/weekly-progress">Weekly Progress</a></li>
                <li><a href="/feedback">Feedback</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
