import type { SourceRegistryEntry } from "@/server/ingestion/types";

const now = "2026-06-28T12:00:00.000Z";

export const sourceRegistry: SourceRegistryEntry[] = [
  {
    id: "mock-official-school",
    name: "Mock State Athletics",
    baseUrl: "https://example.edu/athletics/news",
    sourceType: "official_school",
    sportCoverage: ["Football"],
    schoolCoverage: ["Mock State"],
    conferenceCoverage: ["Mock Central"],
    crawlFrequency: "daily",
    reliabilityScore: 95,
    termsNotes: "Mock official source. Public press releases only.",
    robotsTxtStatus: "allowed",
    paywallStatus: "not_paywalled",
    loginRequired: false,
    privateSource: false,
    rateLimitPerHour: 12,
    contentUsageRules: "Store metadata, short summary, and citations. Do not copy full articles.",
    lastChecked: now,
    enabled: true,
    isMock: true
  },
  {
    id: "mock-rss-feed",
    name: "Mock Public RSS Feed",
    baseUrl: "https://example.com/mock-rss.xml",
    sourceType: "rss_feed",
    sportCoverage: ["Football", "Men's Basketball"],
    schoolCoverage: ["Metro University"],
    conferenceCoverage: ["Mock Central"],
    crawlFrequency: "hourly",
    reliabilityScore: 70,
    termsNotes: "Mock RSS source. Use title, URL, metadata, and brief summary only.",
    robotsTxtStatus: "allowed",
    paywallStatus: "not_paywalled",
    loginRequired: false,
    privateSource: false,
    rateLimitPerHour: 24,
    contentUsageRules: "Use public RSS metadata and link back to original source.",
    lastChecked: now,
    enabled: true,
    isMock: true
  },
  {
    id: "mock-message-board",
    name: "Mock Message Board",
    baseUrl: "https://example.com/private-board",
    sourceType: "message_board",
    sportCoverage: ["Football"],
    schoolCoverage: ["Lakefront State"],
    conferenceCoverage: ["Mock Central"],
    crawlFrequency: "manual",
    reliabilityScore: 20,
    termsNotes: "Mock rejected source. Login required and compliance unknown.",
    robotsTxtStatus: "unknown",
    paywallStatus: "unknown",
    loginRequired: true,
    privateSource: true,
    rateLimitPerHour: 0,
    contentUsageRules: "Reject unless licensed and reviewed.",
    lastChecked: now,
    enabled: true,
    isMock: true
  }
];

export const getRegisteredSource = (id: string) => sourceRegistry.find((source) => source.id === id);
