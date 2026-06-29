import type { ConfidenceLevel } from "@/types/portal";
import type { SourceType } from "@/types/portal";

export type SentinelSourceKind =
  | "official_athletics_release"
  | "official_player_statement"
  | "coach_statement"
  | "verified_reporter"
  | "rss_feed"
  | "podcast_transcript"
  | "public_social"
  | "news_article";

export type SentinelPriorityLabel = "critical" | "high" | "medium" | "low" | "background";

export type SentinelConflictType =
  | "different_schools"
  | "different_visit_dates"
  | "different_nil_estimates"
  | "conflicting_commitment_reports"
  | "contradictory_coach_statements";

export type SentinelDuplicateType =
  | "duplicate_article"
  | "duplicate_social_post"
  | "duplicate_claim"
  | "duplicate_player_identity"
  | "duplicate_visit"
  | "duplicate_commitment_report"
  | "duplicate_nil_mention"
  | "duplicate_prediction_event";

export type SentinelSourceItem = {
  id: string;
  title: string;
  sourceName: string;
  sourceUrl: string;
  sourceKind: SentinelSourceKind;
  sourceType: SourceType;
  reliabilityScore: number;
  detectedAt: string;
  retrievedAt: string;
  summary: string;
  affectedPlayers: string[];
  affectedTeams: string[];
  affectedConferences: string[];
  confidence: ConfidenceLevel;
  isMock: true;
};

export type SentinelComplianceResult = {
  itemId: string;
  allowed: boolean;
  reason: string;
  requiresReview: boolean;
  isMock: true;
};

export type SentinelDuplicateResult = {
  itemId: string;
  duplicateDetected: boolean;
  duplicateType?: SentinelDuplicateType;
  matchedItemIds: string[];
  recommendation: "continue" | "merge" | "discard_duplicate";
  isMock: true;
};

export type SentinelConflictResult = {
  itemId: string;
  conflictDetected: boolean;
  conflictType?: SentinelConflictType;
  severity: "low" | "medium" | "high" | "critical";
  evidence: string[];
  recommendedReviewAction: "none" | "admin_review" | "lower_confidence" | "hold_for_more_sources";
  isMock: true;
};

export type SentinelPriorityResult = {
  itemId: string;
  priorityScore: number;
  priorityLabel: SentinelPriorityLabel;
  factors: string[];
  isMock: true;
};

export type SentinelClaimCandidate = {
  id: string;
  sourceItemId: string;
  claimType: "portal_entry" | "commitment" | "team_interest" | "visit" | "nil_report" | "prediction_event" | "roster_update";
  summary: string;
  confidence: ConfidenceLevel;
  evidenceIds: string[];
  sourceCount: number;
  routeTo: "intelligence_core" | "admin_review" | "hold";
  isMock: true;
};

export type SentinelPipelineRecord = {
  id: string;
  sourceItem: SentinelSourceItem;
  compliance: SentinelComplianceResult;
  duplicate: SentinelDuplicateResult;
  conflict: SentinelConflictResult;
  priority: SentinelPriorityResult;
  claimCandidate: SentinelClaimCandidate;
  submittedToCore: boolean;
  adminReviewRequired: boolean;
  auditLog: string[];
  isMock: true;
};

export type SentinelDashboardSnapshot = {
  id: string;
  itemsMonitored: number;
  newSourceItems: number;
  claimCandidates: number;
  conflictsDetected: number;
  duplicatesRemoved: number;
  awaitingCoreReview: number;
  awaitingAdminReview: number;
  priorityAlerts: SentinelPipelineRecord[];
  latestVerifiedIntakeTimestamp: string;
  recentRecords: SentinelPipelineRecord[];
  isMock: true;
};
