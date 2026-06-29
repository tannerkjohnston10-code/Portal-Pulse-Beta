import type { RealtimeSource } from "@/platform/realtime/core/realtime-types";

export const realtimeMockSources: RealtimeSource[] = [
  {
    id: "mock-source-official-release",
    name: "Mock Official Athletics Release Feed",
    sourceType: "official_school_release",
    url: "https://example.invalid/athletics/releases",
    sportIds: ["football", "mens-basketball", "womens-basketball"],
    complianceStatus: "approved_public",
    reliabilityScore: 95,
    lastChecked: new Date().toISOString(),
    pollingIntervalMinutes: 10,
    enabled: true,
    isMock: true
  },
  {
    id: "mock-source-public-rss",
    name: "Mock Public College Athletics RSS",
    sourceType: "rss_feed",
    url: "https://example.invalid/rss",
    sportIds: ["baseball", "softball", "football"],
    complianceStatus: "approved_public",
    reliabilityScore: 72,
    lastChecked: new Date().toISOString(),
    pollingIntervalMinutes: 15,
    enabled: true,
    isMock: true
  },
  {
    id: "mock-source-partner-feed",
    name: "Mock Approved Partner Feed",
    sourceType: "approved_partner_feed_placeholder",
    url: "https://partner.example.invalid/feed",
    sportIds: ["football", "mens-basketball", "womens-basketball", "baseball", "softball"],
    complianceStatus: "requires_review",
    reliabilityScore: 80,
    lastChecked: new Date().toISOString(),
    pollingIntervalMinutes: 30,
    enabled: false,
    isMock: true
  }
];

export const RealtimeSourceRegistry = {
  listSources() {
    return realtimeMockSources;
  },

  listEnabledSources() {
    return realtimeMockSources.filter((source) => source.enabled && source.complianceStatus === "approved_public");
  },

  getSourceById(sourceId: string) {
    return realtimeMockSources.find((source) => source.id === sourceId) ?? null;
  }
};
