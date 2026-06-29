import type { ConfidenceLevel } from "@/types/portal";
import type { IntelligenceCoreOutput, IntelligenceSignal } from "@/platform/intelligence/interfaces/intelligence-types";
import type { SportId } from "@/platform/sports/sport-types";

export type AgentRole =
  | "chief_intelligence_officer"
  | "prediction_specialist"
  | "breaking_news_monitor"
  | "sport_analyst"
  | "transfer_market_analyst"
  | "historical_analyst"
  | "notification_intelligence"
  | "historical_replay_analyst"
  | "map_intelligence"
  | "knowledge_graph_analyst";

export type AgentFindingStatus = "proposed" | "sent_to_core" | "approved" | "rejected" | "lowered_confidence" | "admin_review";

export type AgentConfidence = ConfidenceLevel;

export type AgentEvidence = {
  id: string;
  evidenceType: "claim" | "source" | "signal" | "timeline" | "knowledge_graph" | "mock";
  summary: string;
  sourceId?: string;
  claimId?: string;
  signalId?: string;
  confidenceScore: number;
  isMock: true;
};

export type AthenaAgent = {
  id: string;
  name: string;
  codename: string;
  role: AgentRole;
  mission: string;
  specialty: string[];
  sportIds: SportId[];
  status: "online" | "standby" | "disabled" | "review_only";
  requiresCoreApproval: true;
  isMock: true;
};

export type AgentFinding = {
  id: string;
  agentId: string;
  agentName: string;
  findingType:
    | "briefing"
    | "prediction_signal"
    | "breaking_update"
    | "team_storyline"
    | "market_shift"
    | "historical_context"
    | "notification_candidate"
    | "map_signal"
    | "graph_relationship";
  summary: string;
  proposedImportance: number;
  proposedConfidence: AgentConfidence;
  confidenceReasoning: string;
  supportingEvidenceIds: string[];
  contradictingEvidenceIds: string[];
  affectedPlayers: string[];
  affectedTeams: string[];
  affectedConferences: string[];
  status: AgentFindingStatus;
  createdAt: string;
  isMock: true;
};

export type AgentTask = {
  id: string;
  assignedAgentId: string;
  taskType: "observe" | "analyze" | "brief" | "handoff" | "evaluate" | "route_to_core";
  prompt: string;
  signalIds: string[];
  status: "queued" | "running" | "complete" | "blocked";
  createdAt: string;
  isMock: true;
};

export type AgentHandoff = {
  id: string;
  fromAgentId: string;
  toAgentId: string;
  reason: string;
  findingIds: string[];
  createdAt: string;
  isMock: true;
};

export type AgentWorkflow = {
  id: string;
  name: string;
  lifecycle: [
    "observe_signals",
    "propose_finding",
    "attach_evidence",
    "attach_confidence_reasoning",
    "send_to_intelligence_core",
    "core_verification",
    "core_decision",
    "surface_approved_intelligence"
  ];
  tasks: AgentTask[];
  handoffs: AgentHandoff[];
  isMock: true;
};

export type IntelligenceProposal = {
  id: string;
  finding: AgentFinding;
  evidence: AgentEvidence[];
  signals: IntelligenceSignal[];
  submittedToCoreAt: string;
  isMock: true;
};

export type IntelligenceCoreDecision = {
  id: string;
  proposalId: string;
  decision: "approved" | "rejected" | "lowered_confidence" | "admin_review";
  reason: string;
  finalConfidence: AgentConfidence;
  finalImportance: number;
  coreOutput?: IntelligenceCoreOutput;
  decidedAt: string;
  isMock: true;
};

export type BriefingRequest = {
  id: string;
  requestedBy: "mock_user" | "system" | "admin";
  scope: "daily" | "command_center" | "watchlist" | "team" | "player" | "conference";
  subjectId?: string;
  requestedAt: string;
  isMock: true;
};

export type BriefingResult = {
  id: string;
  requestId: string;
  title: string;
  summary: string;
  findings: AgentFinding[];
  coreDecisions: IntelligenceCoreDecision[];
  generatedAt: string;
  sourceCount: number;
  confidence: AgentConfidence;
  isMock: true;
};
