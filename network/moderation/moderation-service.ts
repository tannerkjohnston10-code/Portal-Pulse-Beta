import { mockModerationQueue } from "@/platform/network/network-mock-data";

export const networkModerationService = {
  getModerationQueue() {
    return mockModerationQueue;
  },
  reviewItem(itemId: string) {
    return {
      itemId,
      status: "mock_review_placeholder",
      message: "Moderation decisions are placeholders. No real moderation action occurred.",
      isMock: true as const
    };
  }
};
