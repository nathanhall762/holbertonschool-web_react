import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import { getLatestNotification } from '../Utils/utils';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

const Notifications = ({ displayDrawer = false, listNotifications = [] }) => {
  const handleClose = () => {
    console.log('Close button has been clicked');
  };

  return (
    <>
      <div className="menuItem">
        Your notifications
      </div>
      {displayDrawer && (
        <div className="Notifications">
          <button
            className="close-icon"
            style={{ right: '0px', top: '0px' }}
            aria-label="Close"
            onClick={handleClose}
          ></button>
          <p>Here is the list of notifications</p>
          <ul>
            {listNotifications.length === 0 ? (
              <NotificationItem
                type="default"
                value="No new notification for now"
              />
            ) : (
              listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                />
              ))
            )}
          </ul>
        </div>
      )}
    </>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
