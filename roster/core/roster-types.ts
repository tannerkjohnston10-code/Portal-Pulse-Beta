import type { ConfidenceLevel } from "@/types/portal";
import type { SportId } from "@/platform/sports/sport-types";

export type AtlasRiskLevel = "critical" | "high" | "moderate" | "stable" | "surplus";
export type SimulationStatus = "mock" | "simulated" | "projected" | "assumption_based";

export type RosterSnapshot = {
  id: string;
  teamId: string;
  teamName: string;
  sport: string;
  sportId: SportId;
  seasonId: string;
  returningStarters: number;
  incomingTransfers: number;
  outgoingTransfers: number;
  freshmenPlaceholder: number;
  seniorsGraduatingPlaceholder: number;
  scholarshipUsed: number;
  scholarshipLimitPlaceholder: number;
  projectedOpenings: number;
  confidence: ConfidenceLevel;
  lastUpdated: string;
  isMock: true;
};

export type DepthChartPosition = {
  id: string;
  sportId: SportId;
  group: string;
  positionId: string;
  projectedStarter: string;
  backups: string[];
  competitionLevel: AtlasRiskLevel;
  transferNeed: AtlasRiskLevel;
  confidence: ConfidenceLevel;
  risk: string;
  isMock: true;
};

export type PositionNeed = {
  id: string;
  position: string;
  urgency: AtlasRiskLevel;
  currentDepth: number;
  transferTargetsPlaceholder: number;
  projectedImpact: number;
  scholarshipAvailability: string;
  confidence: ConfidenceLevel;
  recommendedAction: string;
  isMock: true;
};

export type RosterDNA = {
  id: string;
  score: number;
  categories: Array<{ label: string; score: number; explanation: string; isMock: true }>;
  strengths: string[];
  weaknesses: string[];
  confidence: ConfidenceLevel;
  isMock: true;
};

export type TeamGenome = {
  id: string;
  rosterIdentity: string;
  recruitingIdentity: string;
  transferIdentity: string;
  developmentIdentity: string;
  pipelineIdentity: string;
  styleOfPlayPlaceholder: string;
  longTermRosterTrend: string;
  confidence: ConfidenceLevel;
  isMock: true;
};

export type RosterChemistry = {
  id: string;
  overallScore: number;
  riskAreas: string[];
  stabilityAreas: string[];
  trendPlaceholder: string;
  confidence: ConfidenceLevel;
  isMock: true;
};

export type ScholarshipIQ = {
  id: string;
  sportId: SportId;
  scholarshipModel: "head_count" | "equivalency" | "mixed_or_unknown";
  scholarshipLimitLabel: string;
  totalScholarshipsPlaceholder: number;
  usedScholarships: number;
  projectedOpenings: number;
  classYearDistribution: Record<string, number>;
  positionalDistribution: Record<string, number>;
  futureBottlenecks: string[];
  overfilledPositions: string[];
  underfilledPositions: string[];
  riskAlerts: string[];
  confidence: ConfidenceLevel;
  isMock: true;
};

export type TransferFit = {
  id: string;
  playerId: string;
  playerName: string;
  position: string;
  rosterNeedFit: number;
  playingTimeFit: number;
  schemeFitPlaceholder: number;
  eligibilityFit: number;
  experienceFit: number;
  geographicFit: number;
  coachingRelationshipFit: number;
  nilEnvironmentPlaceholder: string;
  overallTransferFitScore: number;
  confidence: ConfidenceLevel;
  isMock: true;
};

export type RosterOpportunity = {
  id: string;
  title: string;
  urgency: AtlasRiskLevel;
  impact: number;
  confidence: ConfidenceLevel;
  evidencePlaceholder: string;
  relatedPosition: string;
  recommendedAction: string;
  isMock: true;
};

export type StrategyRecommendation = {
  id: string;
  title: string;
  summary: string;
  confidence: ConfidenceLevel;
  supportingRosterSignals: string[];
  simulationStatus: SimulationStatus;
  isMock: true;
};

export type RosterSimulation = {
  id: string;
  simulationType:
    | "add_transfer_player"
    | "remove_player"
    | "fill_position_need"
    | "compare_two_transfers"
    | "improve_depth_chart"
    | "scholarship_balance_change"
    | "roster_before_after"
    | "multi_year_forecast"
    | "conference_comparison";
  title: string;
  beforeState: string;
  afterState: string;
  projectedImpact: number;
  confidence: ConfidenceLevel;
  assumptions: string[];
  risk: string;
  disclaimer: string;
  isMock: true;
};

export type RosterForecastYear = {
  id: string;
  year: string;
  projectedPositionDepth: Record<string, number>;
  scholarshipPressure: AtlasRiskLevel;
  departureRiskPlaceholder: AtlasRiskLevel;
  recruitingNeed: string;
  portalNeed: string;
  confidence: ConfidenceLevel;
  isMock: true;
};

export type AtlasInsight = {
  id: string;
  title: string;
  confidence: ConfidenceLevel;
  evidenceCount: number;
  affectedPositions: string[];
  simulationStatus: SimulationStatus;
  sourcePlaceholder: string;
  intelligenceCoreApproval: "pending_mock_review" | "approved_mock_placeholder";
  isMock: true;
};

export type AtlasFinding = {
  id: string;
  title: string;
  summary: string;
  topRosterOpportunity: RosterOpportunity;
  biggestTeamNeed: PositionNeed;
  rosterStabilityScore: number;
  suggestedSimulation: RosterSimulation;
  submittedToCore: true;
  confidence: ConfidenceLevel;
  evidenceCount: number;
  isMock: true;
};

export type AtlasWorkspaceData = {
  snapshot: RosterSnapshot;
  depthChart: DepthChartPosition[];
  needs: PositionNeed[];
  rosterDNA: RosterDNA;
  teamGenome: TeamGenome;
  rosterChemistry: RosterChemistry;
  scholarshipIQ: ScholarshipIQ;
  transferFits: TransferFit[];
  opportunities: RosterOpportunity[];
  strategies: StrategyRecommendation[];
  simulations: RosterSimulation[];
  forecast: RosterForecastYear[];
  insights: AtlasInsight[];
  isMock: true;
};
