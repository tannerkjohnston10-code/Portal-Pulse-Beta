import type { ConfidenceLevel } from "@/types/portal";

export type IntelligenceLayer = "fact" | "claim" | "evidence" | "intelligence" | "prediction" | "recommendation";

export type IntelligenceSignalType =
  | "portal_entry"
  | "official_visit"
  | "unofficial_visit"
  | "offer"
  | "commitment"
  | "prediction_change"
  | "roster_change"
  | "coach_change"
  | "nil_mention"
  | "source_volume"
  | "relationship_activity"
  | "timeline_activity"
  | "watchlist_activity"
  | "conference_trend"
  | "ranking_movement";

export type AffectedEntity = {
  id: string;
  type: "player" | "team" | "conference" | "position" | "prediction" | "nil" | "source";
  label: string;
  isMock: true;
};

export type IntelligenceSignal = {
  id: string;
  type: IntelligenceSignalType;
  title: string;
  summary: string;
  sourceCount: number;
  confidence: ConfidenceLevel;
  confidenceScore: number;
  timestamp: string;
  importance: number;
  evidenceIds: string[];
  affectedEntities: AffectedEntity[];
  isMock: true;
};

export type EvidenceItem = {
  id: string;
  supportingClaimIds: string[];
  supportingSourceIds: string[];
  contradictingClaimIds: string[];
  contradictingSourceIds: string[];
  historicalConsistency: number;
  evidenceStrength: number;
  recencyScore: number;
  summary: string;
  isMock: true;
};

export type ReasoningObject = {
  id: string;
  whyImportant: string;
  whyNow: string;
  affectedEntities: AffectedEntity[];
  supportingEvidence: EvidenceItem[];
  weakeningEvidence: EvidenceItem[];
  confidence: ConfidenceLevel;
  confidenceScore: number;
  whatCouldHappenNext: string[];
  isMock: true;
};

export type IntelligenceExplanation = {
  whatChanged: string;
  whyItMatters: string;
  supportingEvidence: string[];
  contradictingEvidence: string[];
  timelineContext: string;
  relatedEntities: AffectedEntity[];
  confidence: ConfidenceLevel;
  confidenceScore: number;
  isMock: true;
};

export type IntelligenceRecommendation = {
  id: string;
  title: string;
  recommendationType: "watch_player" | "monitor_team" | "compare_entities" | "read_summary" | "search" | "track_roster_battle" | "review_prediction";
  priorityScore: number;
  reason: string;
  relatedEntities: AffectedEntity[];
  isMock: true;
};

export type IntelligenceCardModel = {
  id: string;
  title: string;
  layer: IntelligenceLayer;
  priorityScore: number;
  confidenceScore: number;
  evidenceCount: number;
  summary: string;
  explanation: IntelligenceExplanation;
  recommendations: IntelligenceRecommendation[];
  generatedAt: string;
  isMock: true;
};

export type IntelligenceCoreOutput = {
  id: string;
  subjectId: string;
  subjectType: AffectedEntity["type"] | "command_center" | "briefing" | "ranking" | "insight" | "prediction" | "recommendation";
  signals: IntelligenceSignal[];
  evidence: EvidenceItem[];
  reasoning: ReasoningObject;
  explanation: IntelligenceExplanation;
  importanceScore: number;
  recommendations: IntelligenceRecommendation[];
  cards: IntelligenceCardModel[];
  generatedAt: string;
  isMock: true;
};
