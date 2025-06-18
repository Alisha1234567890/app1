// src/components/MentorStudentProgress.js
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import './WeeklyProgress.css'; // reuses styles

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28CF7'];

const studentProgressList = [
  {
    teamName: 'Team Alpha',
    progress: [
      { name: 'Planning', value: 100 },
      { name: 'Design', value: 80 },
      { name: 'Coding', value: 60 },
      { name: 'Testing', value: 20 },
      { name: 'Deployment', value: 0 },
    ],
  },
  {
    teamName: 'Team Beta',
    progress: [
      { name: 'Planning', value: 100 },
      { name: 'Design', value: 100 },
      { name: 'Coding', value: 90 },
      { name: 'Testing', value: 50 },
      { name: 'Deployment', value: 20 },
    ],
  },
];

const MentorStudentProgress = () => {
  return (
    <div className="progress-container" style={{ padding: '30px' }}>
      <h2 style={{ textAlign: 'center' }}>Student Progress Overview</h2>

      {studentProgressList.map((team, idx) => (
        <div key={idx} className="team-progress" style={{ marginBottom: '50px', textAlign: 'center' }}>
          <h3>{team.teamName}</h3>
          <PieChart width={400} height={400}>
            <Pie
              data={team.progress}
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
              {team.progress.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      ))}
    </div>
  );
};

export default MentorStudentProgress;
