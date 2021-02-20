import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ChatClient from './api/chat';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ChatClient.createClient();
