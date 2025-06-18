import React from 'react';

const MentorHome = () => {
  const containerStyle = {
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    background: 'linear-gradient(to right, #f0f4f8, #e0eafc)',
    minHeight: '100vh',
  };

  const cardStyle = {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    maxWidth: '800px',
    margin: 'auto',
  };

  const headingStyle = {
    fontSize: '32px',
    marginBottom: '20px',
    color: '#2b2b52',
  };

  const sectionStyle = {
    marginTop: '30px',
  };

  const buttonStyle = {
    padding: '12px 20px',
    marginTop: '15px',
    fontSize: '16px',
    backgroundColor: '#2b2b52',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={headingStyle}>Welcome, Mentor 👩‍🏫</h2>
        <p style={{ fontSize: '18px' }}>
          This is your dedicated space to manage your assigned student teams, review their project submissions,
          provide feedback, and guide them to success.
        </p>

        <div style={sectionStyle}>
          <h3>📝 Tasks You Can Do:</h3>
          <ul style={{ fontSize: '16px', lineHeight: '1.8' }}>
            <li>View team submissions and project details</li>
            <li>Track weekly student progress reports</li>
            <li>Give feedback on individual or team performance</li>
            <li>Monitor team development based on SDLC principles</li>
            <li>Post announcements and instructions for your students</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h3>🚀 Quick Actions</h3>
          <button style={buttonStyle} onClick={() => window.location.href = '/mentor-progress'}>
            View Student Progress
          </button>
          <button style={{ ...buttonStyle, marginLeft: '15px' }} onClick={() => window.location.href = '/mentor-feedback'}>
            Provide Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorHome;
