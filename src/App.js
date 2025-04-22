// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login1 from './components/Login1';

import Navbar from './components/Navbar';
import Home from './components/Home';
import TeamRegistration1 from './components/TeamRegistration1';
import WeeklyProgress from './components/WeeklyProgress';
import MentorDashboard1 from './components/MentorDashboard1';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
  };

  return (
    <Router>
      {isAuthenticated && <Navbar />}
      <div className="content">
        <Routes>
          {!isAuthenticated ? (
            <Route path="*" element={<Login1 onLogin={handleLogin} />} />
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/team-registration" element={<TeamRegistration1 />} />
              <Route path="/weekly-progress" element={<WeeklyProgress />} />
              <Route path="/mentor-dashboard" element={<MentorDashboard1 />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
