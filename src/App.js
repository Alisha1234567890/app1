import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login1 from './components/Login1';
import Navbar from './components/Navbar';
import Navbar1 from './components/Navbar1';
import Home from './components/Home';
import TeamRegistration1 from './components/TeamRegistration1';
import WeeklyProgress from './components/WeeklyProgress';
import Announcements from './components/Announcements';
import MentorHome from './components/MentorHome';
import MentorStudentProgress from './components/MentorStudentProgress';
import MentorFeedback from './components/MentorFeedback';
import Feedback from './components/Feedback'; // ✅ Import your student Feedback component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const auth = sessionStorage.getItem('isAuthenticated');
    const role = sessionStorage.getItem('userRole');
    const expiry = sessionStorage.getItem('sessionExpiry');

    if (auth === 'true' && expiry && new Date().getTime() < parseInt(expiry)) {
      setIsAuthenticated(true);
      setUserRole(role);
    } else {
      sessionStorage.clear();
      setIsAuthenticated(false);
      setUserRole('');
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const expiry = sessionStorage.getItem('sessionExpiry');
      if (expiry && new Date().getTime() >= parseInt(expiry)) {
        sessionStorage.clear();
        setIsAuthenticated(false);
        setUserRole('');
        window.location.href = '/login';
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleLogin = (role) => {
    const expiryTime = new Date().getTime() + 6 * 60 * 1000;
    sessionStorage.setItem('isAuthenticated', 'true');
    sessionStorage.setItem('userRole', role);
    sessionStorage.setItem('sessionExpiry', expiryTime.toString());
    setIsAuthenticated(true);
    setUserRole(role);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    setIsAuthenticated(false);
    setUserRole('');
  };

  return (
    <Router>
      {isAuthenticated && (
        userRole === 'mentor'
          ? <Navbar1 onLogout={handleLogout} role={userRole} />
          : <Navbar onLogout={handleLogout} role={userRole} />
      )}

      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/login" element={<Login1 onLogin={handleLogin} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Navigate to={userRole === 'mentor' ? "/mentor-home" : "/home"} />} />

            {/* ✅ Student Routes */}
            {userRole === 'student' && (
              <>
                <Route path="/home" element={<Home />} />
                <Route path="/team-registration" element={<TeamRegistration1 />} />
                <Route path="/weekly-progress" element={<WeeklyProgress />} />
                <Route path="/announcements" element={<Announcements />} />
                <Route path="/feedback" element={<Feedback />} /> {/* ✅ Student Feedback */}
              </>
            )}

            {/* ✅ Mentor Routes */}
            {userRole === 'mentor' && (
              <>
                <Route path="/mentor-home" element={<MentorHome />} />
                <Route path="/mentor-student-progress" element={<MentorStudentProgress />} />
                <Route path="/mentor-feedback" element={<MentorFeedback />} />
              </>
            )}

            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
