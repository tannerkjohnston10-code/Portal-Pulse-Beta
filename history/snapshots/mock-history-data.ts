import type { HistoricalSnapshot, PredictionAccuracyResult, ReplayEvent } from "@/platform/history/snapshots/history-types";

export const mockSnapshots: HistoricalSnapshot[] = [
  {
    id: "mock-snapshot-player-week-1",
    entityType: "player",
    entityId: "mock-player-alpha",
    snapshotDate: "2026-06-14T12:00:00.000Z",
    data: { status: "monitoring", portalPulseScore: 61, interestedTeams: ["Mock State"] },
    confidenceAtTime: "medium",
    sourceCountAtTime: 2,
    predictionStateAtTime: "Mock State 44%",
    createdAt: "2026-06-14T12:05:00.000Z",
    isMock: true
  },
  {
    id: "mock-snapshot-player-week-2",
    entityType: "player",
    entityId: "mock-player-alpha",
    snapshotDate: "2026-06-21T12:00:00.000Z",
    data: { status: "visit signal", portalPulseScore: 68, interestedTeams: ["Mock State", "Mock Tech"] },
    confidenceAtTime: "medium",
    sourceCountAtTime: 4,
    predictionStateAtTime: "Mock State 51%",
    createdAt: "2026-06-21T12:05:00.000Z",
    isMock: true
  },
  {
    id: "mock-snapshot-player-week-3",
    entityType: "player",
    entityId: "mock-player-alpha",
    snapshotDate: "2026-06-28T12:00:00.000Z",
    data: { status: "projection movement", portalPulseScore: 73, interestedTeams: ["Mock State", "Mock Tech", "Mock Valley"] },
    confidenceAtTime: "medium",
    sourceCountAtTime: 6,
    predictionStateAtTime: "Mock State 58%",
    createdAt: "2026-06-28T12:05:00.000Z",
    isMock: true
  },
  {
    id: "mock-snapshot-team-week-1",
    entityType: "team",
    entityId: "mock-team-state",
    snapshotDate: "2026-06-14T12:00:00.000Z",
    data: { ranking: 18, momentum: 55, portalNeeds: ["QB"] },
    confidenceAtTime: "medium",
    sourceCountAtTime: 3,
    predictionStateAtTime: "stable roster need",
    createdAt: "2026-06-14T12:05:00.000Z",
    isMock: true
  },
  {
    id: "mock-snapshot-ranking-week-3",
    entityType: "ranking",
    entityId: "mock-ranking-team-transfer",
    snapshotDate: "2026-06-28T12:00:00.000Z",
    data: { rank: 12, previousRank: 18, score: 74 },
    confidenceAtTime: "medium",
    sourceCountAtTime: 5,
    predictionStateAtTime: "team momentum rising",
    createdAt: "2026-06-28T12:05:00.000Z",
    isMock: true
  },
  {
    id: "mock-snapshot-prediction-week-3",
    entityType: "prediction",
    entityId: "mock-oracle-prediction-alpha",
    snapshotDate: "2026-06-28T12:00:00.000Z",
    data: { probability: 58, projectedTeam: "Mock State", uncertainty: "high" },
    confidenceAtTime: "medium",
    sourceCountAtTime: 6,
    predictionStateAtTime: "projection only",
    createdAt: "2026-06-28T12:05:00.000Z",
    isMock: true
  }
];

export const mockReplayEvents: ReplayEvent[] = [
  {
    id: "mock-replay-event-1",
    eventDate: "2026-06-14T12:00:00.000Z",
    title: "Mock baseline formed",
    summary: "Portal Pulse had limited fictional evidence and treated the player as a watch item.",
    whatWasKnownThen: "Two mock sources suggested basic team interest.",
    whatIsKnownNow: "The mock graph later added visit and roster-fit context.",
    predictedThen: "Mock State 44%",
    actualLater: "No real outcome. Mock later state moved to 58%.",
    confidenceAtTime: "medium",
    sourceCountAtTime: 2,
    isMock: true
  },
  {
    id: "mock-replay-event-2",
    eventDate: "2026-06-21T12:00:00.000Z",
    title: "Mock visit signal changed projection",
    summary: "A fictional visit-style signal increased projection movement.",
    whatWasKnownThen: "Four mock sources and one visit signal were available.",
    whatIsKnownNow: "A conflicting mock report later capped confidence.",
    predictedThen: "Mock State 51%",
    actualLater: "Projection later rose, but remained uncertain.",
    confidenceAtTime: "medium",
    sourceCountAtTime: 4,
    isMock: true
  },
  {
    id: "mock-replay-event-3",
    eventDate: "2026-06-28T12:00:00.000Z",
    title: "Mock conflict kept confidence capped",
    summary: "Oracle projection rose, but Apollo preserves the uncertainty context.",
    whatWasKnownThen: "Six mock sources, roster fit, and conflict signals existed.",
    whatIsKnownNow: "No confirmed real-world outcome exists in mock mode.",
    predictedThen: "Mock State 58%",
    actualLater: "Placeholder only. Future outcomes will be compared without rewriting old snapshots.",
    confidenceAtTime: "medium",
    sourceCountAtTime: 6,
    isMock: true
  }
];

export const mockPredictionAccuracy: PredictionAccuracyResult[] = [
  {
    id: "mock-accuracy-1",
    predictionMade: "Mock State projection at 58%",
    confidenceAtTime: "medium",
    finalOutcome: "Mock outcome unresolved",
    accuracyResult: "unresolved",
    explanation: "Prediction remains a projection. Apollo cannot call it correct or incorrect without a verified later outcome.",
    modelVersion: "mock-oracle-v1",
    sourceCount: 6,
    lessonsLearned: "Conflict signals should cap confidence until official confirmation or stronger independent sourcing appears.",
    isProjection: true,
    isMock: true
  },
  {
    id: "mock-accuracy-2",
    predictionMade: "Mock team momentum ranking rise",
    confidenceAtTime: "medium",
    finalOutcome: "Mock ranking rose from 18 to 12",
    accuracyResult: "partial",
    explanation: "The fictional ranking movement aligned directionally, but source strength remained medium.",
    modelVersion: "mock-ranking-v1",
    sourceCount: 5,
    lessonsLearned: "Momentum models should preserve source count and confidence at each snapshot.",
    isProjection: true,
    isMock: true
  }
];

