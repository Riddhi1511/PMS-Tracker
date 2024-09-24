// WeeklyQuestionnaire.js
import React, { useState } from 'react';

const WeeklyQuestionnaire = () => {
  const [pmsSymptoms, setPmsSymptoms] = useState({
    moodSwings: false,
    cramps: false,
    headaches: false,
  });

  const handleChange = (e) => {
    setPmsSymptoms({
      ...pmsSymptoms,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = () => {
    console.log('PMS Symptoms:', pmsSymptoms);
  };

  return (
    <div>
      <h2>Weekly PMS Questionnaire</h2>
      <form>
        <label>
          <input
            type="checkbox"
            name="moodSwings"
            checked={pmsSymptoms.moodSwings}
            onChange={handleChange}
          />
          Mood Swings
        </label>
        <label>
          <input
            type="checkbox"
            name="cramps"
            checked={pmsSymptoms.cramps}
            onChange={handleChange}
          />
          Cramps
        </label>
        <label>
          <input
            type="checkbox"
            name="headaches"
            checked={pmsSymptoms.headaches}
            onChange={handleChange}
          />
          Headaches
        </label>
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default WeeklyQuestionnaire;
