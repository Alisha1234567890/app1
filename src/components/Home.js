import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import studentWorkImage from './images/1.png';
import mentorMeetingImage from './images/2.png';
import projectProgressImage from './images/4.png';

const projectImages = [
  { id: 1, src: studentWorkImage, alt: 'Students working on projects' },
  { id: 2, src: mentorMeetingImage, alt: 'Mentor meeting with students' },
  { id: 3, src: projectProgressImage, alt: 'Project progress overview' }
];

const Home = () => {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false,
    dots: false
  };

  return (
    <>
      <div className="home-container">
        <div className="section about-us">
          <h2>About Us</h2>
          <p>
            Welcome to <strong>Project Management</strong>, your dedicated platform for monitoring and managing student progress. 
            Our mission is to provide a seamless way for students to document their weekly achievements while allowing mentors 
            to track growth, provide feedback, and ensure academic success.
          </p>
          <p>
            Every week, students upload detailed reports showcasing their efforts and improvements. 
            Mentors then review submissions, assess progress, and offer personalized guidance to keep students on track.
          </p>
          <p>
            With structured progress tracking, insightful feedback, and a collaborative ecosystem, <strong>Project Tracker</strong> ensures 
            that students grow with confidence and accountability.
          </p>
        </div>

        <div className="section middle-section">
          <h1 align="center">PROJECT MANAGEMENT</h1>
          <Slider {...settings}>
            {projectImages.map((image) => (
              <div key={image.id} className="slide">
                <div className="image-wrapper">
                  <img src={image.src} alt={image.alt} />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="section contact-details">
          <h2>Contact Details</h2>
          <p><strong>Phone:</strong> <FontAwesomeIcon icon={faPhone} /> +91 12456-67890</p>
          <p><strong>Address:</strong> <FontAwesomeIcon icon={faLocationDot} /> Gill Road, Ludhiana</p>
          <p><strong>Email:</strong> <FontAwesomeIcon icon={faEnvelope} /> abc@gmail.com</p>
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
          </ul>
        </div>
      </div>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Project Management. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;
