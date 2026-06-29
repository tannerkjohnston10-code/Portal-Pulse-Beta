import type { ConfidenceLevel } from "@/types/portal";
import type { SportId } from "@/platform/sports/sport-types";

export type RealtimeSourceType =
  | "official_school_release"
  | "athletic_department_page"
  | "rss_feed"
  | "verified_reporter_public_post_placeholder"
  | "player_statement_placeholder"
  | "coach_statement_placeholder"
  | "podcast_transcript_placeholder"
  | "approved_partner_feed_placeholder"
  | "manual_admin_submission";

export type RealtimeComplianceStatus =
  | "approved_public"
  | "requires_review"
  | "robots_unknown"
  | "robots_disallowed"
  | "paywalled_without_license"
  | "login_required"
  | "private_source";

export type RealtimeSource = {
  id: string;
  name: string;
  sourceType: RealtimeSourceType;
  url: string;
  sportIds: SportId[];
  complianceStatus: RealtimeComplianceStatus;
  reliabilityScore: number;
  lastChecked: string;
  pollingIntervalMinutes: number;
  enabled: boolean;
  isMock: true;
};

export type RealtimePipelineStage =
  | "source_detected"
  | "compliance_checked"
  | "content_normalized"
  | "duplicate_checked"
  | "entity_matched"
  | "claim_candidate_created"
  | "evidence_attached"
  | "confidence_estimated"
  | "conflict_scan_completed"
  | "intelligence_core_review_triggered"
  | "knowledge_graph_update_proposed"
  | "ai_agents_notified"
  | "dashboards_refreshed"
  | "alerts_queued";

export type RealtimeClaimType =
  | "portal_entry"
  | "commitment"
  | "withdrawal"
  | "visit"
  | "team_interest"
  | "nil_mention"
  | "coaching_change"
  | "roster_update"
  | "ranking_movement"
  | "transfer_market_movement"
  | "report_publication";

export type RealtimeClaimCandidateStatus =
  | "pending_review"
  | "verified_placeholder"
  | "rejected_placeholder"
  | "conflict_review"
  | "duplicate_review"
  | "admin_review_required";

export type RealtimeClaimCandidate = {
  id: string;
  claimType: RealtimeClaimType;
  affectedSport: SportId;
  affectedAthlete?: string;
  affectedProgram?: string;
  affectedConference?: string;
  summary: string;
  evidenceIds: string[];
  sourceIds: string[];
  confidence: ConfidenceLevel;
  confidenceScore: number;
  status: RealtimeClaimCandidateStatus;
  createdAt: string;
  isMock: true;
};

export type RealtimePipelineStageResult = {
  stage: RealtimePipelineStage;
  status: "completed" | "queued" | "blocked" | "requires_review";
  details: string;
  completedAt?: string;
  isMock: true;
};

export type RealtimeEventName =
  | "SourceItemDetected"
  | "SourceItemNormalized"
  | "ClaimCandidateCreated"
  | "ClaimCandidateVerified"
  | "ConflictDetected"
  | "KnowledgeGraphUpdateProposed"
  | "IntelligenceApproved"
  | "DashboardRefreshRequested"
  | "AlertQueued"
  | "RealtimePipelineFailed";

export type RealtimePipelineEvent = {
  id: string;
  eventName: RealtimeEventName;
  entityLabel: string;
  confidence: ConfidenceLevel;
  sourceCount: number;
  occurredAt: string;
  status: "published_to_bus" | "queued" | "review_required" | "failed";
  isMock: true;
};

export type RealtimeConflict = {
  id: string;
  conflictType: "identity_uncertainty" | "claim_conflict" | "duplicate_uncertainty" | "nil_review" | "source_compliance";
  severity: "critical" | "high" | "medium" | "low";
  summary: string;
  candidateIds: string[];
  recommendedAction: string;
  isMock: true;
};

export type RealtimeAlertType =
  | "watched_athlete_update"
  | "watched_program_update"
  | "transfer_movement"
  | "commitment"
  | "visit_update"
  | "prediction_shift"
  | "roster_risk"
  | "market_movement"
  | "conflict_detected"
  | "admin_review_required";

export type RealtimeAlert = {
  id: string;
  alertType: RealtimeAlertType;
  title: string;
  destination: "in_app_placeholder" | "email_future" | "push_future" | "sms_future";
  confidence: ConfidenceLevel;
  queuedAt: string;
  isMock: true;
};

export type RealtimeReviewItem = {
  id: string;
  reason:
    | "low_confidence"
    | "conflicting_reports"
    | "duplicate_uncertainty"
    | "nil_mention"
    | "identity_uncertainty"
    | "source_compliance_warning"
    | "high_impact_update";
  candidateId: string;
  priority: "critical" | "high" | "medium" | "low";
  summary: string;
  isMock: true;
};

export type RealtimeMonitoringSnapshot = {
  pipelineHealth: "healthy" | "degraded" | "paused";
  sourceFreshnessMinutes: number;
  failedJobs: number;
  duplicateRate: number;
  conflictRate: number;
  averageConfidence: number;
  reviewQueueSize: number;
  processingLatencyMs: number;
  eventVolumeLastHour: number;
  isMock: true;
};

export type RealtimeDistributionTarget =
  | "command_center"
  | "player_intelligence"
  | "program_intelligence"
  | "coach_workspace"
  | "gm_workspace"
  | "portal_pulse_network"
  | "transfer_market_exchange"
  | "rankings"
  | "maps"
  | "historical_replay";

export type RealtimeKnowledgeGraphProposal = {
  id: string;
  candidateId: string;
  proposedNodes: Array<"athlete" | "program" | "coach" | "sport" | "conference" | "source" | "claim">;
  proposedEdges: string[];
  requiresCoreApproval: true;
  autoPublishBlocked: true;
  isMock: true;
};

export type RealtimeAgentNotification = {
  agentName: "Sentinel" | "Athena" | "Oracle" | "Mercury" | "Atlas" | "Apollo" | "Librarian" | "Cartographer";
  responsibility: string;
  status: "notified_placeholder" | "queued_placeholder";
  isMock: true;
};

export type RealtimeDashboardSnapshot = {
  status: RealtimeMonitoringSnapshot;
  sources: RealtimeSource[];
  pipelineStages: RealtimePipelineStageResult[];
  claimCandidates: RealtimeClaimCandidate[];
  events: RealtimePipelineEvent[];
  conflicts: RealtimeConflict[];
  reviewQueue: RealtimeReviewItem[];
  alerts: RealtimeAlert[];
  distributionTargets: RealtimeDistributionTarget[];
  knowledgeGraphProposals: RealtimeKnowledgeGraphProposal[];
  agentNotifications: RealtimeAgentNotification[];
  isMock: true;
};
