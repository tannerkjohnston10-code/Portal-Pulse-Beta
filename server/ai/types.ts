import type { ClaimCandidate } from "@/server/ingestion/types";
import type { ClaimType, ConfidenceLevel, SourceType, SubjectType } from "@/types/portal";

export type ExtractedEntityType =
  | "player"
  | "school"
  | "coach"
  | "team"
  | "conference"
  | "brand"
  | "nil_collective"
  | "organization"
  | "sport"
  | "source";

export type ExtractedEntity = {
  id: string;
  type: ExtractedEntityType;
  text: string;
  normalizedText: string;
  confidenceScore: number;
  sourceId: string;
  isMock: true;
};

export type ExtractedRelationshipType =
  | "player_school"
  | "player_coach"
  | "player_teammate"
  | "player_high_school"
  | "player_recruiting_class"
  | "player_visit"
  | "player_nil_collective"
  | "player_source_article"
  | "coach_school"
  | "coach_player"
  | "coach_recruiting_class"
  | "team_conference"
  | "team_position_need"
  | "team_roster"
  | "school_conference";

export type ExtractedRelationship = {
  id: string;
  type: ExtractedRelationshipType;
  fromEntityId: string;
  toEntityId: string;
  sourceId: string;
  confidenceScore: number;
  evidenceText?: string;
  isMock: true;
};

export type ExtractionResult = {
  id: string;
  sourceId: string;
  sourceUrl: string;
  extractedAt: string;
  entities: ExtractedEntity[];
  relationships: ExtractedRelationship[];
  claimCandidates: ClaimCandidate[];
  dates: string[];
  sports: string[];
  conferences: string[];
  organizations: string[];
  extractionMethod: "mock" | "parser" | "ai_future";
  isMock: true;
};

export type EntityResolutionCandidate = {
  entityType: ExtractedEntityType;
  inputText: string;
  canonicalId?: string;
  canonicalName?: string;
  matchScore: number;
  reasons: string[];
  needsReview: boolean;
  isMock: true;
};

export type VerificationStage =
  | "extraction"
  | "claim_candidate"
  | "verification"
  | "confidence"
  | "conflict_check"
  | "admin_review"
  | "database_ready";

export type ClaimVerificationPacket = {
  candidate: ClaimCandidate;
  stage: VerificationStage;
  sourceReliabilityScore: number;
  independentSourceCount: number;
  officialConfirmation: boolean;
  playerStatement: boolean;
  coachStatement: boolean;
  recencyScore: number;
  consistencyScore: number;
  conflictCount: number;
  recommendedConfidence: ConfidenceLevel;
  recommendedConfidenceScore: number;
  explanation: string;
  needsAdminReview: boolean;
  isMock: true;
};

export type ConfidenceFactor = {
  name: string;
  weight: number;
  score: number;
  explanation: string;
};

export type ConfidenceExplanation = {
  level: ConfidenceLevel;
  score: number;
  factors: ConfidenceFactor[];
  why: string;
  limitations: string[];
  isMock: true;
};

export type ConflictType =
  | "commitment_status"
  | "visit_schedule"
  | "nil_value"
  | "school_interest"
  | "roster_status"
  | "identity"
  | "date"
  | "source_disagreement";

export type ConflictSeverity = "critical" | "high" | "medium" | "low";

export type DetectedConflict = {
  id: string;
  type: ConflictType;
  severity: ConflictSeverity;
  sourcesInvolved: string[];
  claimsInvolved: string[];
  recommendedAction: string;
  confidenceReduction: number;
  needsReview: boolean;
  explanation: string;
  isMock: true;
};

export type GraphNodeType = ExtractedEntityType | "roster" | "position_need" | "visit" | "source_article" | "recruiting_class";

export type GraphNode = {
  id: string;
  type: GraphNodeType;
  label: string;
  metadata?: Record<string, string | number | boolean>;
  isMock?: true;
};

export type GraphEdge = {
  id: string;
  fromNodeId: string;
  toNodeId: string;
  relationshipType: ExtractedRelationshipType;
  confidenceScore: number;
  sourceIds: string[];
  isMock?: true;
};

export type KnowledgeGraphQueryResult = {
  nodes: GraphNode[];
  edges: GraphEdge[];
  explanation: string;
  isMock: true;
};

export type AITimelineEventType =
  | "portal_entry"
  | "visit"
  | "offer"
  | "team_interest"
  | "nil_report"
  | "commitment"
  | "enrollment"
  | "withdrawal"
  | "ranking_movement"
  | "prediction_change"
  | "source_update";

export type TimelineIntelligenceEvent = {
  id: string;
  eventType: AITimelineEventType;
  subjectType: SubjectType;
  subjectId: string;
  title: string;
  occurredAt: string;
  supportingClaimIds: string[];
  confidenceScore: number;
  explanation: string;
  isMock: true;
};

export type SourceTrustSignal = {
  sourceId: string;
  sourceType: SourceType | "rss_feed" | "podcast";
  historicalAccuracyScore: number;
  correctionRate: number;
  conflictFrequency: number;
  predictionSuccessRate?: number;
  currentReliabilityScore: number;
  explanation: string;
  isMock: true;
};

export type PredictionSignal =
  | "official_visit"
  | "unofficial_visit"
  | "coach_relationship"
  | "previous_recruitment"
  | "distance_from_home"
  | "roster_need"
  | "scholarship_availability"
  | "returning_starters"
  | "conference_fit"
  | "playing_opportunity"
  | "social_mentions"
  | "official_statements"
  | "player_follows"
  | "source_confidence"
  | "historical_coaching_trends"
  | "nil_market_strength"
  | "recent_commitments"
  | "recruiting_class_balance";

export type WeightedPredictionSignal = {
  signal: PredictionSignal;
  weight: number;
  value: number;
  explanation: string;
};

export type AISummary = {
  keyUpdate: string;
  affectedPlayer?: string;
  affectedTeams: string[];
  timeline: string[];
  confidence: ConfidenceExplanation;
  sources: string[];
  explanation: string;
  contradictions: string[];
  isMock: true;
};
