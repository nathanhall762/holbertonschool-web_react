import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  /* add a border and some padding around class Notifications */
  // .Notifications {
  //   border: 2px solid #e0354b;
  //   padding: 1rem;
  //   margin: 3rem;
  //   border-radius: 1rem;
  // }
  // .Notifications button,
  // .close-icon {
  //   float: inline-end;
  //   font-size: 1rem;
  //   font-weight: bold;
  //   cursor: pointer;
  //   height: 2rem;
  //   width: 2rem;
  //   background-image: url(../assets/close-icon.png);
  //   background-size: cover;
  //   background-repeat: no-repeat;
  //   background-color: white;
  //   background-position: center;
  // }
  // /* Style default priority notifications */
  // [data-notification-type="default"] {
  //   color: blue;
  // }
  // /* Style urgent priority notifications */
  // [data-notification-type="urgent"] {
  //   color: red;
  // }

  Notifications: {
    border: "2px solid #e0354b",
    padding: "1rem",
    margin: "3rem",
    borderRadius: "1rem",
  },
  button: {
    float: "inline-end",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    height: "2rem",
    width: "2rem",
    backgroundImage: "url(../assets/close-icon.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundColor: "white",
    backgroundPosition: "center",
  },
  default: {
    color: "blue",
  },
  urgent: {
    color: "red",
  },
});

// class NotificationItem extends PureComponent {
//   render() {
//     const { id, type, value, html, markAsRead } = this.props;
//     return (
//       <li
//         data-notification-type={type}
//         dangerouslySetInnerHTML={html}
//         onClick={() => markAsRead(id)} // Add onClick to call markAsRead
//       >
//         {value}
//       </li>
//     );
//   }
// }
class NotificationItem extends PureComponent {
  render() {
    const { id, type, value, html, markAsRead } = this.props;
    return (
      <li
        data-notification-type={type}
        onClick={() => markAsRead(id)} // Add onClick to call markAsRead
        className={css(styles[type])}
        dangerouslySetInnerHTML={html}
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
