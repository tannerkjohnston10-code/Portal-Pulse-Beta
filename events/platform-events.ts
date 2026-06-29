import type { PlatformEntityType } from "@/platform/types/platform-types";

export type PlatformEventType =
  | "PlayerUpdated"
  | "ClaimVerified"
  | "PredictionChanged"
  | "VisitAdded"
  | "CommitmentRecorded"
  | "NILUpdated"
  | "RankingChanged"
  | "TeamUpdated"
  | "TimelineUpdated"
  | "ConferenceUpdated"
  | "InsightGenerated"
  | "HistoricalSnapshotCreated"
  | "TransferAdded"
  | "WatchlistChanged"
  | "ReportPublished"
  | "AINotificationGenerated"
  | "ProfileUpdated"
  | "WorkspaceShared"
  | "SimulationCompleted"
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

export type PlatformEvent<TPayload = unknown> = {
  id: string;
  type: PlatformEventType;
  entityType: PlatformEntityType;
  entityId: string;
  payload: TPayload;
  occurredAt: string;
  source: "platform";
  isMock?: true;
};

export type PlatformEventHandler<TPayload = unknown> = (event: PlatformEvent<TPayload>) => void | Promise<void>;
