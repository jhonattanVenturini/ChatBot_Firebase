import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: 'Olá Jhonattan 😒! Como posso ajudar?', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim() === '') return;

    // Adiciona a mensagem do usuário
    const userMessage = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);

    // Simula uma resposta do bot
    setTimeout(() => {
      let response = '';

      const userText = input.toLowerCase();

      if (userText.includes('oi') || userText.includes('olá')) {
        response = 'Oi! Tudo bem? 😊';
      } else if (userText.includes('nome')) {
        response = 'Meu nome é Chatinho 🤖!';
      } else if (userText.includes('hora')) {
        const hora = new Date().toLocaleTimeString();
        response = `Agora são ${hora}.`;
      } else if (userText.includes('corno')) {
        response = 'Quem te chamou de corno foi seu reflexo no espelho! 😂';
      } else if (userText.includes('gay')) {
        response = 'tu é né? man 🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🤨🤨🤨?????';
      } else if (userText.includes('ajuda')) {
        response = 'Claro! Me diga o que você precisa que eu te ajudo 😄';
      } else {
        response = 'Desculpa, não entendi 🤔. Pode repetir de outro jeito?';
      }

      const botMessage = { text: response, sender: 'bot' };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);

    // Limpa o campo após enviar
    setInput('');
  };

  const handleClearChat = () => {
    setMessages([]); // Limpa todas as mensagens
  };

  return (
    <div className="chatbot-container">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <form className="chat-input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="chat-input"
          placeholder="Digite sua mensagem"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="send-button">
          Enviar
        </button>
        <button
          type="button"
          className="clear-button"
          onClick={handleClearChat}
        >
          Limpar
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
