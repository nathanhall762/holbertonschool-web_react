import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../Utils/utils"; // Assuming getLatestNotification is in utils.js
import NotificationItem from "./NotificationItem";

const Notifications = () => {
  const handleClose = () => {
    console.log("Close button has been clicked");
  };

  return (
    <div className="Notifications">
      <button
        className="close-icon"
        style={{ right: "0px", top: "0px" }}
        aria-label="Close"
        onClick={handleClose}
      ></button>
      <p>Here is the list of notifications</p>

      <ul>
        <NotificationItem type={'default'} value={'New course available'} />
        <NotificationItem type={'urgent'} value={'New resume available'} />
        <NotificationItem
          type={'urgent'}
          html={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
};

export default Notifications;
