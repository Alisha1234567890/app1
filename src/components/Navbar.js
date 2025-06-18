// src/components/Navbar.jsx

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // ✅ Link imported here
import './Navbar.css';

const Navbar = ({ onLogout }) => {
  const [isActive, setIsActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    console.log("Search:", e.target.value);
  };

  const handleLogoutClick = () => {
    onLogout(); // Clear session and state
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav className={`navbar ${isActive ? 'active' : ''}`}>
      <div className="hamburger" onClick={toggleActiveClass}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`navMenu ${isActive ? 'active' : ''}`}>
        <li><Link to="/home"><b>Home</b></Link></li>
        <li><Link to="/team-registration"><b>Team Registration</b></Link></li>
        <li><Link to="/weekly-progress"><b>Weekly Progress</b></Link></li>
        <li><Link to="/feedback"><b>Feedback</b></Link></li>
        <li><Link to="/announcements"><b>Announcements</b></Link></li>

        <li className="search-item" style={{ marginLeft: 'auto' }}>
          <input
            type="text"
            placeholder="🔍 Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
        </li>

        <li>
          <button className="logout-btn" onClick={handleLogoutClick}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
