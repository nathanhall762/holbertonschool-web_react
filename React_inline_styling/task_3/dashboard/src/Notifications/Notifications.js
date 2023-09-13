import React, { Component } from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  notifications: {
    border: "2px solid #e0354b",
    padding: "1rem",
    margin: "3rem",
    borderRadius: "1rem",
    width: "100vw",
    height: "100vh",
    margin: "0",
    padding: "0",
    zIndex: "1",
    right: "0",
    top: "0",
    borderStyle: "none",
  },
  notificationsButton: {
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
  notificationsDefault: {
    color: "blue",
  },
  notificationsUrgent: {
    color: "red",
  },
  // in mobile,
  // When the panel is open, it should take over the entire screen
  // There should be no padding because of the ul element
  // The font size of the text should be 20px;
  "@media (min-width: 400px)": {
    notifications: {
      width: "100vh",
      height: "100vw",
      margin: "0",
      padding: "0",
      fontSize: "20px",
      zIndex: "1",
    },
    notificationsButton: {
      position: "fixed",
      top: "0",
      right: "0",
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
