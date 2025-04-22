import React from 'react';
import './MentorDashboard1.css'; 
const MentorDashboard1 = () => {
  // Dummy student team data
  const teams = [
    {
      teamId: 1,
      students: [
        { name: 'Alice', contribution: 'Design UI - 40%' },
        { name: 'Bob', contribution: 'Backend API - 30%' },
        { name: 'Charlie', contribution: 'Documentation - 30%' }
      ]
    },
    {
      teamId: 2,
      students: [
        { name: 'David', contribution: 'Frontend Components - 50%' },
        { name: 'Eve', contribution: 'Database Design - 30%' },
        { name: 'Frank', contribution: 'Testing - 20%' }
      ]
    }
  ];

  return (
    <div className="dashboard-container">
      <h2>Mentor Dashboard</h2>
      {teams.map((team) => (
        <div key={team.teamId}>
          <p><strong>Team {team.teamId}</strong></p>
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Contribution</th>
              </tr>
            </thead>
            <tbody>
              {team.students.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.contribution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default MentorDashboard1;
