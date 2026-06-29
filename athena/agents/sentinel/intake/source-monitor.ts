import type { SentinelSourceItem } from "@/platform/athena/agents/sentinel/types/sentinel-types";

export const sourceMonitor = {
  detectMockSourceItems(): SentinelSourceItem[] {
    return [
      {
        id: "mock-sentinel-source-1",
        title: "Mock official athletics release mentions roster movement",
        sourceName: "Mock Athletics Department",
        sourceUrl: "https://example.com/mock-official-release",
        sourceKind: "official_athletics_release",
        sourceType: "official_school",
        reliabilityScore: 95,
        detectedAt: "2026-06-28T16:00:00.000Z",
        retrievedAt: "2026-06-28T16:01:00.000Z",
        summary: "Fictional official release-style item for intake pipeline validation.",
        affectedPlayers: ["Mock Player Delta"],
        affectedTeams: ["Mock State"],
        affectedConferences: ["Mock Conference"],
        confidence: "high",
        isMock: true
      },
      {
        id: "mock-sentinel-source-2",
        title: "Mock verified reporter says visit timing is uncertain",
        sourceName: "Mock Verified Reporter",
        sourceUrl: "https://example.com/mock-reporter-update",
        sourceKind: "verified_reporter",
        sourceType: "verified_reporter",
        reliabilityScore: 85,
        detectedAt: "2026-06-28T16:04:00.000Z",
        retrievedAt: "2026-06-28T16:05:00.000Z",
        summary: "Fictional reporter item that creates a mock conflict around visit date timing.",
        affectedPlayers: ["Mock Player Echo"],
        affectedTeams: ["Mock Tech"],
        affectedConferences: ["Mock Conference"],
        confidence: "medium",
        isMock: true
      },
      {
        id: "mock-sentinel-source-3",
        title: "Mock public social post repeats prior NIL mention",
        sourceName: "Mock Public Social",
        sourceUrl: "https://example.com/mock-public-social",
        sourceKind: "public_social",
        sourceType: "social_media",
        reliabilityScore: 55,
        detectedAt: "2026-06-28T16:08:00.000Z",
        retrievedAt: "2026-06-28T16:09:00.000Z",
        summary: "Fictional public social item that should be treated as duplicate-prone and review-sensitive.",
        affectedPlayers: ["Mock Player Foxtrot"],
        affectedTeams: ["Mock Valley"],
        affectedConferences: ["Mock League"],
        confidence: "low",
        isMock: true
      }
    ];
  }
};

