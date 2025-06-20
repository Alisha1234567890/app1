import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login1.css';

const Login1 = ({ onLogin }) => {
  const [role, setRole] = useState('student');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Optional: Add more mentor users if needed
  const mentorAccounts = {
    mentor1: 'pass123',
    mentor2: 'mentor456',
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔐 Mentor login check
    if (role === 'mentor') {
      if (mentorAccounts[username] && mentorAccounts[username] === password) {
        onLogin(role); // Update auth in App.js
        navigate('/mentor-home');
      } else {
        alert('Invalid mentor credentials');
      }
    } else {
      // 🎓 Student login (no password check)
      onLogin(role);
      navigate('/home');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label>Login As:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="mentor">Mentor</option>
        </select>

        <label>Username:</label>
        <input
          type="text"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login1;
