import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';

// Define your styles
const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
});

class NotificationItem extends PureComponent {
  render() {
    const { id, type, value, html, markAsRead } = this.props;

    // Apply styles conditionally
    const style = type === 'urgent' ? styles.urgent : styles.default;

    return (
      <li
        className={css(style)}
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={() => markAsRead(id)}
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
