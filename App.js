
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CalendarPage from './CalendarPage';
import JournalPage from './JournalPage';
import WeeklyQuestionnaire from './WeeklyQuestionnaire';
import MonthlySymptoms from './MonthlySymptoms';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CalendarPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/weekly-questionnaire" element={<WeeklyQuestionnaire />} />
        <Route path="/monthly-symptoms" element={<MonthlySymptoms />} />
      </Routes>
    </Router>
  );
}

export default App;
