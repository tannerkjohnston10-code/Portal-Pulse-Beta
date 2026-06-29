export type WebhookEventType =
  | "player.updated"
  | "player.committed"
  | "player.entered_portal"
  | "team.ranking_changed"
  | "prediction.changed"
  | "nil.updated"
  | "insight.generated"
  | "source.conflict_detected";

export type WebhookSubscription = {
  id: string;
  consumerId: string;
  endpointUrl: string;
  events: WebhookEventType[];
  secretPreview: string;
  isMock: true;
};
