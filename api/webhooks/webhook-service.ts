import type { WebhookEventType, WebhookSubscription } from "@/platform/api/webhooks/webhook-types";

export const webhookService = {
  createSubscription(consumerId: string, endpointUrl: string, events: WebhookEventType[]): WebhookSubscription {
    return {
      id: `mock-webhook-${consumerId}`,
      consumerId,
      endpointUrl,
      events,
      secretPreview: "mock_••••",
      isMock: true
    };
  },

  async deliver(_subscription: WebhookSubscription, _payload: unknown) {
    // TODO: Add signed delivery, retries, dead-letter queues, and delivery logs.
    return { delivered: false, reason: "Mock delivery only", isMock: true };
  }
};
