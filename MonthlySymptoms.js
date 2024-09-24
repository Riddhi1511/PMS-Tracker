// MonthlySymptoms.js
import React, { useState } from 'react';

const MonthlySymptoms = () => {
  const [symptoms, setSymptoms] = useState('');

  const handleSave = () => {
    console.log('Monthly Symptoms:', symptoms);
  };

  return (
    <div>
      <h2>Monthly Symptoms Form</h2>
      <textarea
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
        placeholder="Enter your symptoms for this month"
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default MonthlySymptoms;
