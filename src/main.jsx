import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from react-dom/client
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Create a root and render your app
const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
