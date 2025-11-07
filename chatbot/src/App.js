import React from 'react';
import Chatbot from './components/chatbot/Chatbot.js';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="main-container">
        <header className="app-header">
          <h1>ChatBot</h1>
        </header>
        <Chatbot />
      </div>
    </div>
  );
}

export default App;