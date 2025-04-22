// TeamRegistration1.js

import React, { useState } from 'react';
import './TeamRegistration1.css';

const TeamRegistration1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    projectTitle: '',
    member1: '',
    member2: '',
    member3: '',
    mentor: '',
    projectPurpose: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="form-container">
      <h2>Team Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Your Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Project Title:</label>
        <input
          type="text"
          name="projectTitle"
          value={formData.projectTitle}
          onChange={handleChange}
          required
        />

        <label>Group Member 1 Name:</label>
        <input
          type="text"
          name="member1"
          value={formData.member1}
          onChange={handleChange}
          required
        />

        <label>Group Member 2 Name:</label>
        <input
          type="text"
          name="member2"
          value={formData.member2}
          onChange={handleChange}
          required
        />

        <label>Group Member 3 Name:</label>
        <input
          type="text"
          name="member3"
          value={formData.member3}
          onChange={handleChange}
          required
        />

        <label>Preferred Mentor:</label>
        <input
          type="text"
          name="mentor"
          value={formData.mentor}
          onChange={handleChange}
          required
        />

        <label>Project Purpose:</label>
        <select
          name="projectPurpose"
          value={formData.projectPurpose}
          onChange={handleChange}
          required
        >
          <option value="">Select Purpose</option>
          <option value="Research">Research</option>
          <option value="Academic">Academic</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TeamRegistration1;
