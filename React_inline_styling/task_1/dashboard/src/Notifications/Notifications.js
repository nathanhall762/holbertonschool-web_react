import React, { Component } from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
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
  notifications: {
    border: "2px solid #e0354b",
    padding: "1rem",
    margin: "3rem",
    borderRadius: "1rem",
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
});

// class Notifications extends Component {
//   shouldComponentUpdate(nextProps) {
//     if (
//       nextProps.listNotifications.length > this.props.listNotifications.length
//     ) {
//       return true;
//     }
//     return false;
//   }

//   markAsRead = (id) => {
//     console.log(`Notification ${id} has been marked as read`);
//   };

//   render() {
//     const { displayDrawer, listNotifications } = this.props;

//     return (
//       <>
//         <div className="menuItem">Your notifications</div>
//         {displayDrawer && (
//           <div className="Notifications">
//             <button
//               className="close-icon"
//               style={{ right: "0px", top: "0px" }}
//               aria-label="Close"
//               onClick={this.handleClose}
//             ></button>
//             <p>Here is the list of notifications</p>
//             <ul>
//               {listNotifications.length === 0 ? (
//                 <NotificationItem
//                   type="default"
//                   value="No new notification for now"
//                 />
//               ) : (
//                 listNotifications.map((notification) => (
//                   <NotificationItem
//                     key={notification.id}
//                     type={notification.type}
//                     value={notification.value}
//                     html={notification.html}
//                     id={notification.id} // pass id
//                     markAsRead={this.markAsRead} // pass markAsRead function
//                   />
//                 ))
//               )}
//             </ul>
//           </div>
//         )}
//       </>
//     );
//   }
// }
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
