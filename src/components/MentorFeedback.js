import React, { useState } from 'react';

const MentorFeedback = () => {
  const [selectedTeam, setSelectedTeam] = useState('');
  const [feedbackText, setFeedbackText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          team_name: selectedTeam,
          mentor_name: 'Prof. Sharma',
          feedback_text: feedbackText
        })
      });

      if (res.ok) {
        alert('✅ Feedback submitted');
        setSelectedTeam('');
        setFeedbackText('');
      } else {
        alert('❌ Failed to submit');
      }
    } catch (err) {
      console.error('❌ Error:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Mentor Feedback</h2>
      <select value={selectedTeam} onChange={(e) => setSelectedTeam(e.target.value)} required>
        <option value="">Select Team</option>
        <option value="Team Alpha">Team Alpha</option>
        <option value="Team Beta">Team Beta</option>
      </select>
      <textarea value={feedbackText} onChange={(e) => setFeedbackText(e.target.value)} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MentorFeedback;
