import type { ConfidenceLevel } from "@/types/portal";

export type HistoricalEntityType = "player" | "team" | "ranking" | "prediction" | "insight" | "source" | "timeline";

export type HistoricalSnapshot = {
  id: string;
  entityType: HistoricalEntityType;
  entityId: string;
  snapshotDate: string;
  data: Record<string, unknown>;
  confidenceAtTime: ConfidenceLevel;
  sourceCountAtTime: number;
  predictionStateAtTime: string;
  createdAt: string;
  isMock: true;
};

export type EntitySnapshot = HistoricalSnapshot;
export type PlayerSnapshot = HistoricalSnapshot & { entityType: "player" };
export type TeamSnapshot = HistoricalSnapshot & { entityType: "team" };
export type RankingSnapshot = HistoricalSnapshot & { entityType: "ranking" };
export type PredictionSnapshot = HistoricalSnapshot & { entityType: "prediction" };
export type InsightSnapshot = HistoricalSnapshot & { entityType: "insight" };
export type SourceSnapshot = HistoricalSnapshot & { entityType: "source" };
export type TimelineSnapshot = HistoricalSnapshot & { entityType: "timeline" };

export type ReplayEvent = {
  id: string;
  eventDate: string;
  title: string;
  summary: string;
  whatWasKnownThen: string;
  whatIsKnownNow: string;
  predictedThen: string;
  actualLater: string;
  confidenceAtTime: ConfidenceLevel;
  sourceCountAtTime: number;
  isMock: true;
};

export type ReplaySession = {
  id: string;
  subjectType: HistoricalEntityType;
  subjectId: string;
  title: string;
  startDate: string;
  endDate: string;
  events: ReplayEvent[];
  snapshots: HistoricalSnapshot[];
  summary: string;
  isMock: true;
};

export type PredictionAccuracyResult = {
  id: string;
  predictionMade: string;
  confidenceAtTime: ConfidenceLevel;
  finalOutcome: string;
  accuracyResult: "correct" | "incorrect" | "partial" | "unresolved";
  explanation: string;
  modelVersion: string;
  sourceCount: number;
  lessonsLearned: string;
  isProjection: true;
  isMock: true;
};

export type SnapshotComparison = {
  id: string;
  entityId: string;
  dateA: string;
  dateB: string;
  whatChanged: string[];
  confidenceDelta: number;
  sourceCountDelta: number;
  isMock: true;
};

export type ApolloFinding = {
  id: string;
  title: string;
  summary: string;
  biggestHistoricalMover: string;
  predictionAccuracySnapshot: string;
  thisWeekVsLastWeek: string;
  submittedToCore: true;
  confidence: ConfidenceLevel;
  sourceCount: number;
  isMock: true;
};

