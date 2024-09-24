import React, { useState } from 'react';

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const handleSend = () => {
    const userMessage = { text: userInput, sender: 'user' };
    setChatLog([...chatLog, userMessage]);
    setUserInput('');
    
    // You can replace the below line with an API call to a chatbot
    const botReply = { text: 'Here’s a suggestion for your symptom.', sender: 'bot' };
    setChatLog([...chatLog, userMessage, botReply]);
  };

  return (
    <div>
      <h2>Chatbot</h2>
      <div>
        {chatLog.map((message, index) => (
          <p key={index} className={message.sender === 'user' ? 'user' : 'bot'}>
            {message.text}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Ask a question..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default Chatbot;
