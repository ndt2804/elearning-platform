// import { notification } from "antd";

// const openNotification = () => {
//   notification.open({
//     message: "Notification Title",
//     description:
//       "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
//   });
// };

// export default openNotification;
import { notification } from "antd";

type NotificationType = "success" | "info" | "warning" | "error";

const openNotification = (
  type: NotificationType,
  message: string,
  description: string
) => {
  notification[type]({
    message,
    description,
  });
};

export default openNotification;
