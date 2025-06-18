import React, { useState } from 'react';
import './Announcements.css';

const Announcements = () => {
  const [announcements] = useState([
    { id: 1, title: 'Welcome!', message: 'Project registration is now open. Submit your team form by Friday.' },
    { id: 2, title: 'Mentor Allocation', message: 'Mentor assignments will be announced next week.' },
    { id: 3, title: 'Weekly Reports', message: 'All teams must submit weekly progress updates by Sunday night.' }
  ]);

  return (
    <div className="announcements-container">
      <h2>📢 Announcements</h2>
      {announcements.map((item) => (
        <div key={item.id} className="announcement-item">
          <h3>{item.title}</h3>
          <p>{item.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Announcements;
