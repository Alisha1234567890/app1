// src/components/Navbar1.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar1.css';

const Navbar1 = ({ onLogout, role }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    onLogout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">🎓 Project Portal</div>

      <ul className="navbar-links">
        {role === 'student' && (
          <>
            <li><Link to="/team-registration">Register Team</Link></li>
            <li><Link to="/progress">Progress</Link></li>
          </>
        )}

        {role === 'mentor' && (
          <>
            <li><Link to="/mentor-home">Home</Link></li>
            <li><Link to="/mentor-student-progress">Student Progress</Link></li>
            <li><Link to="/mentor-feedback">Feedback</Link></li>
          </>
        )}

        <li>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar1;
