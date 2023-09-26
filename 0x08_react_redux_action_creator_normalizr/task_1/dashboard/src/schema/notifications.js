import * as notificationsData from "../../notifications.json";
import { schema, normalize } from "normalizr";

const user = new schema.Entity("users");
const message = new schema.Entity(
  "messages",
  {},
  {
    idAttribute: "guid",
  }
);
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

const normalizedData = normalize(notificationsData.default, [notification]);

export function getAllNotificationsByUser(userId) {
  // Get all notification IDs for a user
  const userNotifications = normalizedData.entities.users[userId].notifications;

  // Map these IDs to their message
  return userNotifications.map((notificationId) => {
    return normalizedData.entities.messages[
      normalizedData.entities.notifications[notificationId].context
    ];
  });
}

export { normalizedData };
