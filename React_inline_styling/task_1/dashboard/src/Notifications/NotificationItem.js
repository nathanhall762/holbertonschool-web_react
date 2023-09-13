import React, { PureComponent } from "react";
import PropTypes from "prop-types";



class NotificationItem extends PureComponent {
  render() {
    const { id, type, value, html, markAsRead } = this.props;
    return (
      <li
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={() => markAsRead(id)} // Add onClick to call markAsRead
      >
        {value}
      </li>
    );
  }
}


NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  markAsRead: PropTypes.func.isRequired,
};

NotificationItem.defaultProps = {
  type: "default",
};

export default NotificationItem;
