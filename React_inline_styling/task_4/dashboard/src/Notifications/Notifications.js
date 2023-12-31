import React, { Component } from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

// Define keyframes first
const opacityKeyframes = {
  from: { opacity: 0.5 },
  to: { opacity: 1 },
};

const bounceKeyframes = {
  "0%": { transform: "translateY(0px)" },
  "50%": { transform: "translateY(-5px)" },
  "100%": { transform: "translateY(5px)" },
};

const styles = StyleSheet.create({
  notifications: {
    border: "2px dotted #e0354b",
    padding: "1rem",
    margin: "3rem",
    borderRadius: "1rem",
    backgroundColor: "white",
    "@media (max-width: 900px)": {
      position: "absolute",
      right: "0px",
      top: "0px",
      border: "none",
      margin: "0",
      height: "100vh",
      padding: "0",
      ":hover": {
        animationName: [opacityKeyframes, bounceKeyframes],
        animationDuration: "1s, 0.5s",
        animationIterationCount: "3, 3",
      },
    },
  },
  notificationsButton: {
    float: "inline-end",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    height: "2rem",
    width: "2rem",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundColor: "white",
    backgroundPosition: "center",
    ":hover": {
      animationName: [opacityKeyframes, bounceKeyframes],
      animationDuration: "1s, 0.5s",
      animationIterationCount: "3, 3",
    },
  },
  closeImage: {
    height: "1rem",
    width: "1rem",
    justifyContent: "center",
  },
  notificationsDefault: {
    color: "blue",
  },
  notificationsUrgent: {
    color: "red",
  },
  opacityKeyframe: {
    from: { opacity: 0.5 },
    to: { opacity: 1 },
  },
  unorderedList: {
    "@media (max-width: 900px)": {
      listStyle: "none",
      padding: "0",
    },
  },
});

class Notifications extends Component {
  shouldComponentUpdate(nextProps) {
    if (
      nextProps.listNotifications.length > this.props.listNotifications.length
    ) {
      return true;
    }
    return false;
  }

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <>
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <button
              className={css(styles.notificationsButton)}
              style={{ right: "0px", top: "0px" }}
              aria-label="Close"
              onClick={this.handleClose}
            >
              <img
                className={css(styles.closeImage)}
                src="../assets/close-icon.png"
                alt="close icon"
              />
            </button>
            <p>Here is the list of notifications</p>
            <ul className={css(styles.unorderedList)}>
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
                    id={notification.id} // pass id
                    markAsRead={this.markAsRead} // pass markAsRead function
                  />
                ))
              )}
            </ul>
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
