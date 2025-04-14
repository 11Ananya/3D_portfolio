import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  TypingIndicator
} from '@chatscope/chat-ui-kit-react';
import { styles } from '../styles';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const themes = {
    dark: {
      bg: 'bg-[#0a0416]',
      header: 'bg-[#1a0b2e]',
      messageBot: 'bg-[#1a0b2e]',
      messageUser: 'bg-[#2a1b3e]',
      text: 'text-white',
      accent: 'text-[#915EFF]',
      hover: 'hover:text-white',
      border: 'border-[#915EFF]',
      borderLight: 'border-[#915EFF]/20'
    },
    light: {
      bg: 'bg-white',
      header: 'bg-gray-100',
      messageBot: 'bg-gray-100',
      messageUser: 'bg-[#915EFF]/10',
      text: 'text-gray-800',
      accent: 'text-[#915EFF]',
      hover: 'hover:text-[#7d4ed4]',
      border: 'border-[#915EFF]',
      borderLight: 'border-gray-200'
    }
  };

  const currentTheme = isDarkMode ? themes.dark : themes.light;

  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  if (!apiKey) {
    console.error('OpenAI API key is missing. Please check your .env file');
  }

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      message: inputValue,
      sender: "user",
      direction: "outgoing"
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setIsTyping(true);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{
            role: 'system',
            content: `
You are a helpful assistant that answers questions about Ananya Dabas. 
Here are key details about Ananya:

Professional Background:
- She is a software developer with a passion for creating innovative web solutions
- Her favorite tech stack includes:
  * Frontend: React.js, Three.js, TailwindCSS
  * Backend: Node.js, Express.js
  * Database: MongoDB
  * Tools: Git, VS Code
- She created this 3D portfolio website using React and Three.js

Hobbies and Interests:
- She's a huge Potterhead (Harry Potter fan) with deep knowledge of the wizarding world
- She enjoys playing basketball
- She participates in local tech meetups and developer communities

Fun Facts:
- She has memorized the entire periodic table (all 118 elements!)
- She combines her love for science with her technical skills

Outside of Coding:
- She's often found discussing Harry Potter theories and favorite moments
- She enjoys playing basketball to stay active and competitive
- She loves sharing her knowledge about chemistry and the periodic table

Please answer questions in a friendly and conversational tone.`,
          }, {
            role: 'user',
            content: inputValue
          }]
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'API request failed');
      }
      
      const result = await response.json();
      const botResponse = result.choices[0].message.content;
      
      setMessages([...newMessages, {
        message: botResponse,
        sender: "bot",
        direction: "incoming"
      }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages([...newMessages, {
        message: "I apologize, but I'm having trouble processing your request right now.",
        sender: "bot",
        direction: "incoming"
      }]);
    }

    setIsTyping(false);
    setInputValue('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className={`fixed bottom-4 right-4 z-50 ${isMinimized ? 'w-64 h-12' : 'w-96 h-[500px]'} 
            ${currentTheme.bg} rounded-2xl shadow-card overflow-hidden border ${currentTheme.border}`}
        >
          <div className={`${currentTheme.header} p-3 flex justify-between items-center cursor-pointer border-b ${currentTheme.border}`}
               onClick={() => setIsMinimized(!isMinimized)}>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-[#915EFF] animate-pulse" />
              <h3 className={`${styles.sectionSubText} text-sm m-0`}>Chat with Ananya's AI</h3>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDarkMode(!isDarkMode);
                }}
                className={`${currentTheme.accent} ${currentTheme.hover} transition-colors text-lg`}
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMinimized(!isMinimized);
                }}
                className={`${currentTheme.accent} ${currentTheme.hover} transition-colors`}
              >
                {isMinimized ? '□' : '−'}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
                className={`${currentTheme.accent} hover:text-red-500 transition-colors`}
              >
                ×
              </button>
            </div>
          </div>

          <div className="h-[calc(100%-48px)] flex flex-col">
            <div className={`flex-1 overflow-hidden ${isMinimized ? 'hidden' : ''}`}>
              <div className="h-full overflow-y-auto">
                <div className="p-4 space-y-4">
                  {messages.map((message, i) => (
                    <div
                      key={i}
                      className={`flex ${message.sender === "bot" ? "justify-start" : "justify-end"}`}
                    >
                      <div
                        className={`max-w-[80%] break-words rounded-lg p-3 ${message.sender === "bot" ? currentTheme.messageBot : currentTheme.messageUser} 
                          ${currentTheme.text} border ${currentTheme.borderLight}`}
                      >
                        {message.message}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className={`${currentTheme.messageBot} ${currentTheme.text} rounded-lg p-3 border ${currentTheme.borderLight}`}>
                        <TypingIndicator content="AI is thinking..." />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="p-3 border-t ${currentTheme.borderLight}">
              <div className="flex space-x-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder="Ask me anything about Ananya..."
                  className={`flex-1 p-2 rounded-lg ${currentTheme.text} ${currentTheme.border} focus:outline-none focus:ring-2 focus:ring-[#915EFF]`} 
                />
                <button
                  onClick={handleSend}
                  className={`px-4 py-2 rounded-lg ${currentTheme.accent} ${currentTheme.hover} transition-colors`}
                  disabled={!inputValue.trim()}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className="fixed bottom-4 right-4 z-50 w-12 h-12 rounded-full bg-tertiary 
            shadow-lg flex items-center justify-center hover:bg-primary 
            transition-colors duration-300 border border-[#915EFF]"
          onClick={() => setIsOpen(true)}
        >
          <span className="text-white text-xl">💬</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default Chatbot;
