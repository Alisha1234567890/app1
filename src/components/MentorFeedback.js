// src/components/MentorFeedback.js
import React, { useState } from 'react';
import './MentorFeedback.css'; // optional, for styling

const dummyTeams = [
  { id: 1, name: 'Team Alpha' },
  { id: 2, name: 'Team Beta' },
  { id: 3, name: 'Team Gamma' },
];

const MentorFeedback = () => {
  const [selectedTeam, setSelectedTeam] = useState('');
  const [feedbackText, setFeedbackText] = useState('');
  const [submittedFeedback, setSubmittedFeedback] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedTeam && feedbackText) {
      setSubmittedFeedback({
        ...submittedFeedback,
        [selectedTeam]: feedbackText
      });
      alert('Feedback submitted!');
      setFeedbackText('');
    }
  };

  return (
    <div className="feedback-container">
      <h2>📋 Provide Feedback to Student Teams</h2>

      <form onSubmit={handleSubmit} className="feedback-form">
        <label>Select Team:</label>
        <select
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
          required
        >
          <option value="">-- Select a Team --</option>
          {dummyTeams.map(team => (
            <option key={team.id} value={team.name}>
              {team.name}
            </option>
          ))}
        </select>

        <label>Feedback:</label>
        <textarea
          value={feedbackText}
          onChange={(e) => setFeedbackText(e.target.value)}
          placeholder="Write your feedback here..."
          rows="5"
          required
        ></textarea>

        <button type="submit">Submit Feedback</button>
      </form>

      {Object.keys(submittedFeedback).length > 0 && (
        <div className="submitted-feedback">
          <h3>📨 Submitted Feedback</h3>
          <ul>
            {Object.entries(submittedFeedback).map(([team, feedback]) => (
              <li key={team}>
                <strong>{team}:</strong> {feedback}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MentorFeedback;
