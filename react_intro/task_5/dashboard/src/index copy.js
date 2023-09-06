import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Notifications from './Notifications'; // Import the Notifications component

// Render the App component in the 'root' div
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <div id='root-notifications'>
      <Notifications />
    </div>
  </React.StrictMode>
);
