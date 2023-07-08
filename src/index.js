// Importing necessary libraries and components
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import User from './User';
import Match from './Match';
import Calendar from './Calendar';
import reportWebVitals from './reportWebVitals';

// Creating root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Reporting web vitals for performance measurement
reportWebVitals();