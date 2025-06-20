import React, { useEffect, useState } from 'react';

const Feedback = ({ teamName }) => {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/feedback/${teamName}`)
      .then((res) => res.json())
      .then((data) => setFeedbackList(data))
      .catch((err) => console.error('❌ Fetch error:', err));
  }, [teamName]);

  return (
    <div className="feedback-container">
      <h2>📝 Mentor Feedback for {teamName}</h2>
      {feedbackList.length === 0 ? (
        <p>No feedback available yet.</p>
      ) : (
        feedbackList.map((fb) => (
          <div key={fb.id} className="feedback-card">
            <p><strong>Mentor:</strong> {fb.mentor_name}</p>
            <p>{fb.feedback_text}</p>
            <small>Sent at: {new Date(fb.created_at).toLocaleString()}</small>
          </div>
        ))
      )}
    </div>
  );
};

export default Feedback;
