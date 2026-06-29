import type { ConfidenceLevel } from "@/types/portal";
import type { IntelligenceCoreDecision } from "@/platform/athena/types/athena-types";

export type OraclePredictionSignalType =
  | "official_visit"
  | "unofficial_visit"
  | "reported_offer"
  | "team_interest"
  | "roster_need"
  | "depth_chart_opening"
  | "coaching_connection"
  | "hometown_connection"
  | "nil_activity"
  | "source_volume"
  | "prediction_movement"
  | "conference_fit"
  | "playing_time_opportunity"
  | "historical_recruiting_relationship"
  | "conflicting_report";

export type OraclePredictionSignal = {
  id: string;
  signalType: OraclePredictionSignalType;
  affectedPlayer: string;
  affectedTeam: string;
  strength: number;
  confidence: ConfidenceLevel;
  sourceCount: number;
  evidenceCount: number;
  lastUpdated: string;
  isMock: true;
};

export type OraclePredictionRisk = {
  id: string;
  label: string;
  severity: "low" | "medium" | "high";
  explanation: string;
  evidenceCount: number;
  isMock: true;
};

export type OraclePredictionHistoryPoint = {
  id: string;
  timestamp: string;
  probability: number;
  confidence: ConfidenceLevel;
  changeReason: string;
  isMock: true;
};

export type OraclePredictionFinding = {
  id: string;
  predictedOutcome: string;
  probability: number;
  confidence: ConfidenceLevel;
  topSupportingReasons: string[];
  topRiskFactors: OraclePredictionRisk[];
  contradictingEvidence: string[];
  uncertaintyLevel: "low" | "medium" | "high";
  whatCouldChangePrediction: string[];
  sourceCount: number;
  evidenceCount: number;
  supportingSignals: OraclePredictionSignal[];
  history: OraclePredictionHistoryPoint[];
  explanation: string;
  recommendationToIntelligenceCore: "approve_projection" | "lower_confidence" | "route_to_admin_review" | "reject";
  coreDecision: IntelligenceCoreDecision;
  generatedAt: string;
  isProjection: true;
  isMock: true;
};

