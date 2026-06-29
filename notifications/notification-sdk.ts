import { notificationService, type NotificationChannel } from "@/server/notifications/notification-service";
import type { PlatformEventType } from "@/platform/events/platform-events";

export const NotificationSDK = {
  version: "v1",

  async publish(channel: NotificationChannel, message: string) {
    return notificationService.sendNotification(channel, message);
  },

  subscribe(userId: string, eventType: PlatformEventType) {
    return { userId, eventType, subscriptionId: `mock-subscription-${userId}-${eventType}`, isMock: true };
  },

  unsubscribe(subscriptionId: string) {
    return { subscriptionId, unsubscribed: true, isMock: true };
  },

  routeByPreference(userId: string, eventType: PlatformEventType) {
    return { userId, eventType, channels: ["in_app"] as NotificationChannel[], isMock: true };
  }
};
