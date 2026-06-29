import type {
  RealtimeAgentNotification,
  RealtimeAlert,
  RealtimeClaimCandidate,
  RealtimeConflict,
  RealtimeDashboardSnapshot,
  RealtimeDistributionTarget,
  RealtimeKnowledgeGraphProposal,
  RealtimeMonitoringSnapshot,
  RealtimePipelineEvent,
  RealtimePipelineStageResult,
  RealtimeReviewItem
} from "@/platform/realtime/core/realtime-types";
import { RealtimeSourceRegistry } from "@/platform/realtime/sources/realtime-source-registry";

const now = () => new Date().toISOString();

const mockPipelineStages: RealtimePipelineStageResult[] = [
  {
    stage: "source_detected",
    status: "completed",
    details: "Mock public source item detected from an approved source registry entry.",
    completedAt: now(),
    isMock: true
  },
  {
    stage: "compliance_checked",
    status: "completed",
    details: "Compliance gate verified this source is public, enabled, and not marked paywalled/private.",
    completedAt: now(),
    isMock: true
  },
  {
    stage: "content_normalized",
    status: "completed",
    details: "Mock content normalized into summary, source metadata, and candidate entity labels.",
    completedAt: now(),
    isMock: true
  },
  {
    stage: "duplicate_checked",
    status: "completed",
    details: "Canonical URL, title fingerprint, source ID, and candidate claim signature checked.",
    completedAt: now(),
    isMock: true
  },
  {
    stage: "entity_matched",
    status: "requires_review",
    details: "Mock athlete identity is intentionally fictional and reviewable before publication.",
    completedAt: now(),
    isMock: true
  },
  {
    stage: "claim_candidate_created",
    status: "completed",
    details: "Claim candidate created as pending review, not as a published fact.",
    completedAt: now(),
    isMock: true
  },
  {
    stage: "evidence_attached",
    status: "completed",
    details: "Evidence IDs and source IDs attached to the candidate.",
    completedAt: now(),
    isMock: true
  },
  {
    stage: "confidence_estimated",
    status: "completed",
    details: "Initial confidence estimate generated from source reliability and evidence count.",
    completedAt: now(),
    isMock: true
  },
  {
    stage: "conflict_scan_completed",
    status: "completed",
    details: "Conflict scan flagged one mock NIL mention for admin review.",
    completedAt: now(),
    isMock: true
  },
  {
    stage: "intelligence_core_review_triggered",
    status: "queued",
    details: "Intelligence Core approval is required before any surface treats this as intelligence.",
    isMock: true
  },
  {
    stage: "knowledge_graph_update_proposed",
    status: "queued",
    details: "Knowledge Graph update proposed but auto-publish is blocked.",
    isMock: true
  },
  {
    stage: "ai_agents_notified",
    status: "queued",
    details: "Agent notifications are proposal-only and cannot publish conclusions.",
    isMock: true
  },
  {
    stage: "dashboards_refreshed",
    status: "queued",
    details: "Dashboard refresh request prepared for approved intelligence only.",
    isMock: true
  },
  {
    stage: "alerts_queued",
    status: "queued",
    details: "Mock alerts queued with no push, email, or SMS delivery.",
    isMock: true
  }
];

const mockClaimCandidates: RealtimeClaimCandidate[] = [
  {
    id: "mock-claim-candidate-portal-entry",
    claimType: "portal_entry",
    affectedSport: "football",
    affectedAthlete: "Mock Athlete Delta",
    affectedProgram: "Mock Plains University",
    affectedConference: "Mock Central Conference",
    summary: "Mock candidate: a fictional athlete movement item requires source-backed review before surfacing.",
    evidenceIds: ["mock-evidence-101", "mock-evidence-102"],
    sourceIds: ["mock-source-official-release"],
    confidence: "medium",
    confidenceScore: 68,
    status: "pending_review",
    createdAt: now(),
    isMock: true
  },
  {
    id: "mock-claim-candidate-nil",
    claimType: "nil_mention",
    affectedSport: "womens-basketball",
    affectedAthlete: "Mock Athlete Nova",
    affectedProgram: "Mock Lakeside State",
    affectedConference: "Mock Atlantic League",
    summary: "Mock candidate: fictional NIL-related mention is automatically routed to admin review.",
    evidenceIds: ["mock-evidence-201"],
    sourceIds: ["mock-source-public-rss"],
    confidence: "low",
    confidenceScore: 41,
    status: "admin_review_required",
    createdAt: now(),
    isMock: true
  },
  {
    id: "mock-claim-candidate-ranking",
    claimType: "ranking_movement",
    affectedSport: "baseball",
    affectedProgram: "Mock Desert Tech",
    affectedConference: "Mock Western Conference",
    summary: "Mock candidate: fictional ranking movement awaits ranking engine and Intelligence Core review.",
    evidenceIds: ["mock-evidence-301", "mock-evidence-302", "mock-evidence-303"],
    sourceIds: ["mock-source-public-rss"],
    confidence: "high",
    confidenceScore: 83,
    status: "pending_review",
    createdAt: now(),
    isMock: true
  }
];

const mockEvents: RealtimePipelineEvent[] = [
  {
    id: "mock-rt-event-source-detected",
    eventName: "SourceItemDetected",
    entityLabel: "Mock Official Athletics Release Feed",
    confidence: "medium",
    sourceCount: 1,
    occurredAt: now(),
    status: "published_to_bus",
    isMock: true
  },
  {
    id: "mock-rt-event-claim-created",
    eventName: "ClaimCandidateCreated",
    entityLabel: "Mock Athlete Delta",
    confidence: "medium",
    sourceCount: 1,
    occurredAt: now(),
    status: "queued",
    isMock: true
  },
  {
    id: "mock-rt-event-conflict",
    eventName: "ConflictDetected",
    entityLabel: "Mock Athlete Nova",
    confidence: "low",
    sourceCount: 1,
    occurredAt: now(),
    status: "review_required",
    isMock: true
  }
];

const mockConflicts: RealtimeConflict[] = [
  {
    id: "mock-conflict-nil-review",
    conflictType: "nil_review",
    severity: "high",
    summary: "Mock NIL mention requires review because financial claims must not be surfaced as facts.",
    candidateIds: ["mock-claim-candidate-nil"],
    recommendedAction: "Route to admin review and require source-backed NIL status labeling.",
    isMock: true
  }
];

const mockReviewQueue: RealtimeReviewItem[] = [
  {
    id: "mock-review-low-confidence",
    reason: "low_confidence",
    candidateId: "mock-claim-candidate-nil",
    priority: "high",
    summary: "Low-confidence NIL-related candidate requires manual review.",
    isMock: true
  },
  {
    id: "mock-review-identity",
    reason: "identity_uncertainty",
    candidateId: "mock-claim-candidate-portal-entry",
    priority: "medium",
    summary: "Fictional athlete identity needs entity resolution before approval.",
    isMock: true
  }
];

const mockAlerts: RealtimeAlert[] = [
  {
    id: "mock-alert-admin-review",
    alertType: "admin_review_required",
    title: "Mock admin review required for low-confidence NIL mention",
    destination: "in_app_placeholder",
    confidence: "low",
    queuedAt: now(),
    isMock: true
  },
  {
    id: "mock-alert-market-movement",
    alertType: "market_movement",
    title: "Mock market movement alert queued for review-approved intelligence",
    destination: "in_app_placeholder",
    confidence: "medium",
    queuedAt: now(),
    isMock: true
  }
];

const mockDistributionTargets: RealtimeDistributionTarget[] = [
  "command_center",
  "player_intelligence",
  "program_intelligence",
  "coach_workspace",
  "gm_workspace",
  "portal_pulse_network",
  "transfer_market_exchange",
  "rankings",
  "maps",
  "historical_replay"
];

const mockKnowledgeGraphProposals: RealtimeKnowledgeGraphProposal[] = [
  {
    id: "mock-kg-proposal-athlete-program",
    candidateId: "mock-claim-candidate-portal-entry",
    proposedNodes: ["athlete", "program", "sport", "conference", "source", "claim"],
    proposedEdges: ["CLAIM_SUPPORTS_RELATIONSHIP", "SOURCE_SUPPORTS_CLAIM"],
    requiresCoreApproval: true,
    autoPublishBlocked: true,
    isMock: true
  }
];

const mockAgentNotifications: RealtimeAgentNotification[] = [
  { agentName: "Sentinel", responsibility: "Prioritize intake and route review items.", status: "notified_placeholder", isMock: true },
  { agentName: "Athena", responsibility: "Summarize approved intelligence only.", status: "queued_placeholder", isMock: true },
  { agentName: "Oracle", responsibility: "Assess prediction impact as projection, not fact.", status: "queued_placeholder", isMock: true },
  { agentName: "Mercury", responsibility: "Assess transfer market impact after Core approval.", status: "queued_placeholder", isMock: true },
  { agentName: "Atlas", responsibility: "Assess roster impact with simulation labels.", status: "queued_placeholder", isMock: true },
  { agentName: "Apollo", responsibility: "Prepare historical snapshot once approved.", status: "queued_placeholder", isMock: true },
  { agentName: "Librarian", responsibility: "Prepare relationship context for Knowledge Graph review.", status: "queued_placeholder", isMock: true },
  { agentName: "Cartographer", responsibility: "Prepare spatial update if geographies are verified.", status: "queued_placeholder", isMock: true }
];

const mockMonitoring: RealtimeMonitoringSnapshot = {
  pipelineHealth: "healthy",
  sourceFreshnessMinutes: 9,
  failedJobs: 0,
  duplicateRate: 0.08,
  conflictRate: 0.12,
  averageConfidence: 64,
  reviewQueueSize: mockReviewQueue.length,
  processingLatencyMs: 420,
  eventVolumeLastHour: 18,
  isMock: true
};

export const RealtimePipelineService = {
  getSourceIntakeSummary() {
    return RealtimeSourceRegistry.listSources();
  },

  getClaimCandidateStream() {
    return mockClaimCandidates;
  },

  getPipelineStages() {
    return mockPipelineStages;
  },

  getRecentEvents() {
    return mockEvents;
  },

  getMonitoringSnapshot() {
    return mockMonitoring;
  },

  getDashboardSnapshot(): RealtimeDashboardSnapshot {
    return {
      status: mockMonitoring,
      sources: RealtimeSourceRegistry.listSources(),
      pipelineStages: mockPipelineStages,
      claimCandidates: mockClaimCandidates,
      events: mockEvents,
      conflicts: mockConflicts,
      reviewQueue: mockReviewQueue,
      alerts: mockAlerts,
      distributionTargets: mockDistributionTargets,
      knowledgeGraphProposals: mockKnowledgeGraphProposals,
      agentNotifications: mockAgentNotifications,
      isMock: true
    };
  }
};
