export type NotificationChannel = "email" | "in_app" | "sms";

export const notificationService = {
  async createWatchlistAlert(_userId: string, _subjectId: string): Promise<void> {
    // TODO: Persist watchlist alerts after auth/user accounts exist.
  },

  async sendNotification(_channel: NotificationChannel, _message: string): Promise<void> {
    // TODO: Route through email, in-app, and future SMS providers.
  }
};
