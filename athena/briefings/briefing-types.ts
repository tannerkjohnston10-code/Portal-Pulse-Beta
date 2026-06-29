import type { ConfidenceLevel } from "@/types/portal";
import type { AgentFinding, IntelligenceCoreDecision } from "@/platform/athena/types/athena-types";

export type AthenaBriefingSection =
  | "overnight_updates"
  | "watched_teams"
  | "watched_players"
  | "prediction_changes"
  | "nil_movement"
  | "team_momentum"
  | "conference_trends"
  | "watch_next";

export type AthenaBriefingItem = {
  id: string;
  section: AthenaBriefingSection;
  title: string;
  summary: string;
  confidence: ConfidenceLevel;
  evidenceCount: number;
  sourceCount: number;
  coreDecisionId: string;
  isMock: true;
};

export type AthenaDailyBriefing = {
  id: string;
  title: string;
  headlineSummary: string;
  generatedAt: string;
  lastUpdated: string;
  confidenceAverage: number;
  confidenceSummary: string;
  sourceCount: number;
  evidenceCount: number;
  items: AthenaBriefingItem[];
  topOvernightUpdates: AthenaBriefingItem[];
  watchedTeams: AthenaBriefingItem[];
  watchedPlayers: AthenaBriefingItem[];
  predictionChanges: AthenaBriefingItem[];
  nilMovement: AthenaBriefingItem[];
  teamMomentum: AthenaBriefingItem[];
  conferenceTrends: AthenaBriefingItem[];
  whatToWatchNext: AthenaBriefingItem[];
  findings: AgentFinding[];
  coreDecisions: IntelligenceCoreDecision[];
  audioAvailable: false;
  audioButtonLabel: "Listen to mock briefing";
  isMock: true;
};

