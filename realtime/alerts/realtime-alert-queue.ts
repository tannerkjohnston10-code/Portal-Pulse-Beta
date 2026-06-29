import type { RealtimeAlert } from "@/platform/realtime/core/realtime-types";

export const RealtimeAlertQueue = {
  queueAlert(alert: RealtimeAlert): RealtimeAlert {
    return {
      ...alert,
      destination: "in_app_placeholder",
      isMock: true
    };
  },

  getDeliveryPolicy() {
    return {
      pushEnabled: false,
      emailEnabled: false,
      smsEnabled: false,
      requiresUserPreferences: true,
      isMock: true
    };
  }
};
