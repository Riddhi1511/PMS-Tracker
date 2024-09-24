// JournalPage.js
import React, { useState } from 'react';

const JournalPage = () => {
  const [journalEntry, setJournalEntry] = useState('');

  const handleSave = () => {
    console.log('Journal entry:', journalEntry);
  };

  return (
    <div>
      <h2>Daily Journal</h2>
      <textarea
        value={journalEntry}
        onChange={(e) => setJournalEntry(e.target.value)}
        placeholder="How are you feeling today?"
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default JournalPage;
