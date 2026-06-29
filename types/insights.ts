import type { ConfidenceLevel } from "@/types/portal";

export type InsightCategory =
  | "breaking"
  | "trending"
  | "rising"
  | "falling"
  | "risk"
  | "opportunity"
  | "conflict"
  | "prediction_shift"
  | "roster_impact"
  | "nil_movement"
  | "conference_movement"
  | "watchlist_alert";

export type InsightType =
  | "player"
  | "team"
  | "conference"
  | "nil"
  | "prediction"
  | "roster"
  | "market"
  | "trend"
  | "risk"
  | "watchlist";

export type InsightSubjectType = "player" | "team" | "conference" | "nil" | "prediction" | "roster" | "market" | "watchlist";

export type InsightReviewStatus = "approved_mock" | "needs_review" | "rejected";

export type InsightEvidenceItem = {
  id: string;
  label: string;
  claimId: string;
  sourceLabel: string;
  confidenceScore: number;
  isMock: true;
};

export type BaseInsight = {
  id: string;
  title: string;
  summary: string;
  insightType: InsightType;
  category: InsightCategory;
  subjectType: InsightSubjectType;
  subjectId: string;
  importanceScore: number;
  confidenceLevel: ConfidenceLevel;
  confidenceScore: number;
  evidenceCount: number;
  sourceCount: number;
  relatedPlayers: string[];
  relatedTeams: string[];
  relatedConferences: string[];
  supportingClaimIds: string[];
  contradictingClaimIds: string[];
  evidence: InsightEvidenceItem[];
  whyThisMatters: string;
  whatChanged: string;
  whatToWatchNext: string;
  generatedAt: string;
  expiresAt?: string;
  reviewStatus: InsightReviewStatus;
  isMock: true;
};

export type PlayerInsight = BaseInsight & { insightType: "player"; subjectType: "player" };
export type TeamInsight = BaseInsight & { insightType: "team"; subjectType: "team" };
export type ConferenceInsight = BaseInsight & { insightType: "conference"; subjectType: "conference" };
export type NILInsight = BaseInsight & { insightType: "nil"; subjectType: "nil" };
export type PredictionInsight = BaseInsight & { insightType: "prediction"; subjectType: "prediction" };
export type RosterInsight = BaseInsight & { insightType: "roster"; subjectType: "roster" };
export type MarketInsight = BaseInsight & { insightType: "market"; subjectType: "market" };
export type TrendInsight = BaseInsight & { insightType: "trend" };
export type RiskInsight = BaseInsight & { insightType: "risk" };
export type WatchlistInsight = BaseInsight & { insightType: "watchlist"; subjectType: "watchlist" };

export type AIInsight =
  | PlayerInsight
  | TeamInsight
  | ConferenceInsight
  | NILInsight
  | PredictionInsight
  | RosterInsight
  | MarketInsight
  | TrendInsight
  | RiskInsight
  | WatchlistInsight;

export type InsightSignal = {
  id: string;
  signalType: InsightCategory;
  subjectType: InsightSubjectType;
  subjectId: string;
  title: string;
  summary: string;
  recencyScore: number;
  confidenceScore: number;
  sourceCount: number;
  affectedPlayerQuality: number;
  affectedTeamQuality: number;
  predictionMovementSize: number;
  nilMovementSize: number;
  conferenceImpact: number;
  userWatchlistRelevance: number;
  conflictSeverity: number;
  historicalSignificance: number;
  relatedPlayers: string[];
  relatedTeams: string[];
  relatedConferences: string[];
  supportingClaimIds: string[];
  contradictingClaimIds: string[];
  evidence: InsightEvidenceItem[];
  generatedAt: string;
  isMock: true;
};

export type InsightRankingFactors = {
  recency: number;
  confidence: number;
  sourceCount: number;
  affectedPlayerQuality: number;
  affectedTeamQuality: number;
  predictionMovementSize: number;
  nilMovementSize: number;
  conferenceImpact: number;
  userWatchlistRelevance: number;
  conflictSeverity: number;
  historicalSignificance: number;
};

export type InsightEngineResult = {
  insights: AIInsight[];
  reviewQueue: AIInsight[];
  generatedAt: string;
  isMock: true;
};
