import { notificationInstanceRef } from "@/layouts/ClientProvider";

export const myToast = {
  success: (message) => {
    notificationInstanceRef?.current?.success({
      message: message,
      duration: 3000,
    });
  },
  error: (message) => {
    notificationInstanceRef?.current?.error({
      message: message,
      duration: 3000,
    });
  },
  warning: (message) => {
    notificationInstanceRef?.current?.warning({
      message: message,
      duration: 3000,
    });
  },
  info: (message) => {
    notificationInstanceRef?.current?.info({
      message: message,
      duration: 3000,
    });
  },
};
