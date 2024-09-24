import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom'; // Moved useNavigate to the top-level

const CalendarPage = () => {
  const [periodStart, setPeriodStart] = useState(null);
  const [periodEnd, setPeriodEnd] = useState(null);
  const [currentStage, setCurrentStage] = useState('');

  // Call useNavigate outside of any handler or subfunction
  const navigate = useNavigate();

  const handleStartDate = (date) => {
    setPeriodStart(date);
    calculateCycleStage(date);
  };

  const handleEndDate = (date) => {
    setPeriodEnd(date);
  };

  const calculateCycleStage = (startDate) => {
    const today = new Date();
    const cycleLength = 28; // assuming a 28-day cycle
    const diffInDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

    if (diffInDays < 7) {
      setCurrentStage('Menstrual Phase');
    } else if (diffInDays < 14) {
      setCurrentStage('Follicular Phase');
    } else if (diffInDays < 21) {
      setCurrentStage('Ovulatory Phase');
    } else {
      setCurrentStage('Luteal Phase');
    }
  };

  return (
    <div>
      <h2>Period Tracker</h2>
      <div>
        <h4>Select your period start date:</h4>
        <Calendar onClickDay={handleStartDate} />
      </div>
      {periodStart && (
        <div>
          <h4>Select your period end date:</h4>
          <Calendar onClickDay={handleEndDate} />
        </div>
      )}
      <div>
        {currentStage && (
          <p>
            Your current cycle stage: <strong>{currentStage}</strong>
          </p>
        )}
      </div>
      <div>
        {/* The buttons should now work properly */}
        <button onClick={() => navigate('/journal')}>Daily Journal</button>
        <button onClick={() => navigate('/weekly-questionnaire')}>Weekly PMS Questionnaire</button>
        <button onClick={() => navigate('/monthly-symptoms')}>Monthly Symptoms</button>
      </div>
    </div>
  );
};

export default CalendarPage;
