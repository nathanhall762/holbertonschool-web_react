import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';

const NotificationItem = ({ type = 'default', value, html }) => {
  return (
    <li
      data-notification-type={type}
      dangerouslySetInnerHTML={html}
    >
      {value}
    </li>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string })
};

NotificationItem.defaultProps = {
  type: 'default'
};

export default NotificationItem;
