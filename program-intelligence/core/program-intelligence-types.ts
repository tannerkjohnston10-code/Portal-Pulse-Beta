import type { ConfidenceLevel, Sport } from "@/types/portal";
import type { SportId } from "@/platform/sports/sport-types";
import type {
  CoachingIntelligence,
  RecruitingPipeline,
  TeamDepthChartGroup,
  TeamNeedItem,
  TeamPortalClass,
  TeamRosterIntelligence,
  TeamTimelineEvent
} from "@/types/team-intelligence";

export type ProgramInformationType = "Verified Information" | "Analysis" | "Historical Context" | "Predictions" | "Simulations";

export interface ProgramIntelligenceModule<T> {
  id: string;
  title: string;
  contentType: ProgramInformationType;
  summary: string;
  confidence: ConfidenceLevel;
  confidenceScore: number;
  sourceCount: number;
  lastUpdated: string;
  evidenceIds: string[];
  data: T;
  isMock: true;
}

export interface ProgramIdentity {
  programId: string;
  schoolName: string;
  logoInitials: string;
  sport: Sport;
  sportId: SportId;
  seasonId: string;
  conference: string;
  conferenceId: string;
  division: string;
  headCoach: string;
  location: string;
  isMock: true;
}

export interface ProgramSnapshot {
  identity: ProgramIdentity;
  rosterSummary: string;
  portalActivitySummary: string;
  recruitingSnapshot: string;
  historicalTrend: string;
  confidenceIndicators: Array<{
    label: string;
    type: ProgramInformationType;
    confidenceScore: number;
    isMock: true;
  }>;
  lastUpdated: string;
  isMock: true;
}

export interface ProgramIntelligenceSummary {
  strengths: string[];
  risks: string[];
  opportunities: string[];
  recentChanges: string[];
  watchItems: string[];
  confidenceExplanation: string;
  evidenceIds: string[];
  contentType: ProgramInformationType;
  isMock: true;
}

export interface ProgramTransferActivity {
  entries: number;
  commits: number;
  departures: number;
  netMovement: number;
  topPositions: string[];
  isMock: true;
}

export interface ProgramPipeline {
  title: string;
  items: string[];
  confidenceScore: number;
  isMock: true;
}

export interface ProgramScholarshipPlanning {
  used: number;
  open: number;
  projectedOpenings: number;
  riskLabel: string;
  notes: string[];
  isMock: true;
}

export interface ProgramKnowledgeGraphPreview {
  entityCount: number;
  relationshipCount: number;
  strongestRelationships: string[];
  conflictingRelationships: string[];
  isMock: true;
}

export interface ProgramHistoricalReplayPreview {
  snapshotLabel: string;
  trend: string;
  whatChanged: string[];
  isMock: true;
}

export interface ProgramMarketSummary {
  heatIndex: number;
  momentumLabel: string;
  positionScarcity: string[];
  marketDisclaimer: string;
  isMock: true;
}

export interface ProgramConferencePosition {
  conferenceRank: number;
  nationalRank: number;
  peerComparison: string;
  isMock: true;
}

export interface ProgramRankingSummary {
  transferRank: number;
  rosterStrengthRank: number;
  momentumRank: number;
  confidenceScore: number;
  isMock: true;
}

export interface ProgramAIInsight {
  id: string;
  agent: "Athena" | "Atlas" | "Mercury" | "Apollo" | "Librarian" | "Cartographer" | "Oracle";
  contentType: ProgramInformationType;
  title: string;
  summary: string;
  confidenceScore: number;
  evidenceIds: string[];
  isMock: true;
}

export interface ProgramEvidenceSummary {
  verifiedItems: number;
  analyticalItems: number;
  historicalItems: number;
  predictionItems: number;
  simulationItems: number;
  sourceCount: number;
  disclaimer: string;
  isMock: true;
}

export interface ProgramDigitalTwinState {
  programId: string;
  stateVersion: "mock-v1";
  unifiedProgramState: string;
  relationshipSummary: string;
  simulationReadiness: string;
  forecastingReadiness: string;
  isMock: true;
}

export interface ProgramIntelligenceWorkspace {
  snapshot: ProgramSnapshot;
  digitalTwin: ProgramDigitalTwinState;
  intelligenceSummary: ProgramIntelligenceSummary;
  modules: {
    programOverview: ProgramIntelligenceModule<ProgramSnapshot>;
    rosterIntelligence: ProgramIntelligenceModule<TeamRosterIntelligence>;
    transferActivity: ProgramIntelligenceModule<ProgramTransferActivity>;
    recruitingOverview: ProgramIntelligenceModule<RecruitingPipeline>;
    portalPipeline: ProgramIntelligenceModule<ProgramPipeline>;
    coachIntelligence: ProgramIntelligenceModule<CoachingIntelligence>;
    scholarshipPlanning: ProgramIntelligenceModule<ProgramScholarshipPlanning>;
    depthChart: ProgramIntelligenceModule<TeamDepthChartGroup[]>;
    knowledgeGraph: ProgramIntelligenceModule<ProgramKnowledgeGraphPreview>;
    historicalReplay: ProgramIntelligenceModule<ProgramHistoricalReplayPreview>;
    marketIntelligence: ProgramIntelligenceModule<ProgramMarketSummary>;
    conferencePosition: ProgramIntelligenceModule<ProgramConferencePosition>;
    rankings: ProgramIntelligenceModule<ProgramRankingSummary>;
    timeline: ProgramIntelligenceModule<TeamTimelineEvent[]>;
    aiInsights: ProgramIntelligenceModule<ProgramAIInsight[]>;
    evidenceSummary: ProgramIntelligenceModule<ProgramEvidenceSummary>;
    teamNeeds: ProgramIntelligenceModule<TeamNeedItem[]>;
    portalClass: ProgramIntelligenceModule<TeamPortalClass>;
  };
  isMock: true;
}

export interface ProgramCommandCenterWidget {
  recentlyViewedPrograms: ProgramIdentity[];
  notableChanges: string[];
  pinnedPrograms: ProgramIdentity[];
  linkHref: string;
  disclaimer: string;
  isMock: true;
}
