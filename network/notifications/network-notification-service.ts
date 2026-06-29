import { mockNetworkNotifications } from "@/platform/network/network-mock-data";

export const networkNotificationService = {
  getNotifications() {
    return mockNetworkNotifications;
  },
  getUnreadCount() {
    return mockNetworkNotifications.filter((notification) => !notification.readPlaceholder).length;
  }
};
