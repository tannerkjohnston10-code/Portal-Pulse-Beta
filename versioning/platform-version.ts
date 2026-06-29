export const platformVersion = {
  sdk: "1.0.0-mock",
  player: "v1",
  team: "v1",
  ranking: "v1",
  prediction: "v1",
  nil: "v1",
  visit: "v1",
  timeline: "v1",
  insight: "v1",
  search: "v1",
  notification: "v1",
  knowledgeGraph: "v1",
  intelligence: "v1",
  athena: "v1",
  analytics: "v1",
  history: "v1",
  maps: "v1"
} as const;

export type PlatformSDKVersion = typeof platformVersion;
