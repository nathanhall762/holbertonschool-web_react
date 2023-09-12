// component named NotificationItem:
// it should render a li tag
// the component accept three properties (type, html, and value)
// type should be rendered with the data-notification-type attribute
// value should be rendered within the tag
// html should be rendered with the dangerouslySetInnerHTML attribute
const NotificationItem = ({ type, value, html, markAsRead, id }) => {
  return (
    <li
      data-notification-type={type}
      dangerouslySetInnerHTML={html}
      onClick={() => markAsRead(id)}
    >
      {value}
    </li>
  );
};

export default NotificationItem;