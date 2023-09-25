import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";
import closeIcon from "../assets/close-icon.png";

// Define keyframes first
const opacityKeyframes = {
  from: { opacity: 0.5 },
  to: { opacity: 1 },
};

const translateYKeyframes = {
  "0%": {
    transform: "translateY(0)",
  },
  "50%": {
    transform: "translateY(-5px)",
  },
  "75%": {
    transform: "translateY(5px)",
  },
  "100%": {
    transform: "translateY(0)",
  },
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
  menuItem: {
    float: "right",
    backgroundColor: "#fff8f8",
    ":hover": {
      cursor: "pointer",
      animationName: [opacityKeyframes, translateYKeyframes],
      animationDuration: "1s, 0.5s",
      animationIterationCount: 3,
    },
  },

  menuItemPNoShow: {
    marginRight: "8px",
    display: "none",
  },

  menuItemPShow: {
    display: "inline",
    marginRight: "8px",
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

class Notifications extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
      markNotificationAsRead,
    } = this.props;

    return (
      <>
        <div
          className={css(styles.menuItem)}
          id="menuItem"
          onClick={handleDisplayDrawer}
        >
          {/*if displayDrawer is true, then show p with 'Your notifications', else hide it */}
          <p
            className={
              !displayDrawer
                ? css(styles.menuItemPShow)
                : css(styles.menuItemPNoShow)
            }
          >
            Your notifications
          </p>
        </div>
        {displayDrawer && (
          <div className={css(styles.notifications)} id="Notifications">
            <button
              className={css(styles.notificationsButton)}
              style={{ right: "0px", top: "0px" }}
              aria-label="Close"
              onClick={handleHideDrawer}
              id="closeNotifications"
            >
              <img
                className={css(styles.closeImage)}
                src={closeIcon}
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
                    markAsRead={markNotificationAsRead} // pass markAsRead function
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
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;
