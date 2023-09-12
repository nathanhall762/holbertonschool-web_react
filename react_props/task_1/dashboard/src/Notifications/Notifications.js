import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../Utils/utils'; // Assuming getLatestNotification is in utils.js

const Notifications = () => {
  const handleClose = () => {
    console.log("Close button has been clicked");
  };

  return (
    <div className="Notifications">
      <button 
        style={{ right: '0px', top: '0px' }} 
        aria-label="Close" 
        onClick={handleClose}
      >
      </button>
      <p>Here is the list of notifications</p>

      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li 
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
};

export default Notifications;
