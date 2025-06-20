import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import './WeeklyProgress.css';

const initialData = [
  { name: 'Planning', value: 20 },
  { name: 'Design', value: 20 },
  { name: 'Coding', value: 20 },
  { name: 'Testing', value: 20 },
  { name: 'Deployment', value: 20 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28CF7'];

const WeeklyProgress = () => {
  const [data, setData] = useState(initialData);
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file || !description) {
      alert('Please upload a file and provide a description.');
      return;
    }

    const updatedData = data.map((item) =>
      item.name === 'Coding' ? { ...item, value: 100 } : item
    );

    setData(updatedData);
    alert('Progress submitted successfully!');
  };

  return (
    <div className="progress-container">
      <h2>Weekly Progress Dashboard</h2>

      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>

      <form onSubmit={handleSubmit} className="progress-form">
        <label>Description of Progress:</label>
        <textarea value={description} onChange={handleDescriptionChange} required />

        <label>Upload File (Document, Code, Zip):</label>
        <input
          type="file"
          onChange={handleFileChange}
          accept=".zip,.pdf,.docx,.txt,.js,.py,.java"
          required
        />

        <button type="submit">Submit Progress</button>
      </form>
    </div>
  );
};

export default WeeklyProgress;
