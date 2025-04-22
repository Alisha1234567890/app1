// src/components/Home.js
import React from 'react';
import './Home.css';
import studentWorkImage from './images/1.png'; // Import images from the images folder
import mentorMeetingImage from './images/2.png';
import projectProgressImage from './images/3.png';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="section left-section">
          <h2>About Us</h2>
          <p>Welcome to our project management platform! We help students track their progress and connect with mentors.</p>
        </div>

        <div className="section middle-section">
          <h1 align="center">PROJECT MANGEMENT</h1>
          <img src={studentWorkImage} alt="Students working on projects" style={{ width: '75%', height: 'auto' }} />
          <img src={mentorMeetingImage} alt="Mentor meeting with students" style={{ width: '50%', height: 'auto' }} />
          <img src={projectProgressImage} alt="Project progress overview" style={{ width: '50%', height: 'auto' }} />
        </div>

        <div className="section right-section">
          <h2>Contact Details</h2>
          <p><strong>Phone:</strong> +91 12456-67890</p>
          <p><strong>Address:</strong>  Gill Road, Ludhiana</p>
          <p><strong>Email:</strong> abc@gmail.com</p>
          <h3>Follow Us</h3>

          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Project Tracker. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;