import type { ConfidenceLevel } from "@/types/portal";
import type { AtlasRiskLevel } from "@/platform/roster/core/roster-types";
import type { SportId } from "@/platform/sports/sport-types";

export type IntelligenceClassification = "verified_placeholder" | "analysis" | "projection" | "simulation" | "mock";

export type ExecutivePriority = {
  id: string;
  title: string;
  summary: string;
  priorityLevel: "critical" | "high" | "medium" | "low";
  confidence: ConfidenceLevel;
  evidencePlaceholder: string;
  lastUpdated: string;
  classification: IntelligenceClassification;
  isMock: true;
};

export type ExecutiveBrief = {
  id: string;
  headline: string;
  topPriorities: ExecutivePriority[];
  criticalRisks: ExecutivePriority[];
  emergingOpportunities: ExecutivePriority[];
  transferMarketSummary: string;
  recruitingStatus: string;
  rosterForecast: string;
  historicalContext: string;
  aiExecutiveSummary: string;
  confidence: ConfidenceLevel;
  evidenceCount: number;
  sourceCount: number;
  lastUpdated: string;
  isMock: true;
};

export type RosterHealthCategory = {
  id: string;
  label: string;
  score: number;
  trend: "up" | "down" | "flat";
  explanation: string;
  classification: IntelligenceClassification;
  isMock: true;
};

export type RosterHealth = {
  id: string;
  overallScore: number;
  trendPlaceholder: string;
  categories: RosterHealthCategory[];
  riskIndicators: string[];
  explainThis: string;
  confidence: ConfidenceLevel;
  isMock: true;
};

export type GMTransferPortfolioItem = {
  id: string;
  playerName: string;
  position: string;
  portfolioStatus: "high_priority" | "development_target" | "immediate_contributor" | "future_fit" | "monitoring" | "committed_elsewhere_placeholder";
  transferFitScore: number;
  confidence: ConfidenceLevel;
  programNeed: string;
  rosterImpact: string;
  timelinePlaceholder: string;
  evidencePlaceholder: string;
  isMock: true;
};

export type RecruitingPipeline = {
  id: string;
  pipelineStrength: number;
  regionalFocus: string[];
  positionPriorities: string[];
  futureClassBalance: string;
  relationshipPlaceholders: string[];
  historicalTrend: string;
  cartographerSignal: string;
  confidence: ConfidenceLevel;
  isMock: true;
};

export type OrganizationalPlan = {
  id: string;
  title: string;
  planningHorizon: "three_year" | "five_year" | "allocation" | "risk_management" | "scenario";
  summary: string;
  recommendation: string;
  confidence: ConfidenceLevel;
  classification: IntelligenceClassification;
  isMock: true;
};

export type ExecutiveCouncilRecommendation = {
  id: string;
  agentName: "Athena" | "Atlas" | "Mercury" | "Apollo" | "Oracle" | "Librarian" | "Cartographer";
  focusArea: string;
  recommendation: string;
  whyItMatters: string;
  confidence: ConfidenceLevel;
  evidencePlaceholder: string;
  submittedToIntelligenceCore: true;
  isMock: true;
};

export type InvestmentBoardItem = {
  id: string;
  assetType: "roster_asset" | "position_investment" | "future_opportunity" | "transfer_investment" | "development_pipeline" | "retention_priority";
  title: string;
  allocationPlaceholder: string;
  expectedValue: string;
  risk: AtlasRiskLevel;
  confidence: ConfidenceLevel;
  isMock: true;
};

export type GMReportTemplate = {
  id: string;
  title: string;
  cadence: "daily" | "weekly" | "monthly" | "board";
  sections: string[];
  exportStatus: "placeholder";
  isMock: true;
};

export type GMCommandCenterWidget = {
  id: string;
  executivePriorities: string[];
  rosterHealthScore: number;
  scholarshipAlerts: string[];
  topTransferOpportunity: string;
  linkHref: string;
  confidence: ConfidenceLevel;
  lastUpdated: string;
  isMock: true;
};

export type GMDashboardData = {
  id: string;
  programName: string;
  sport: string;
  executiveBrief: ExecutiveBrief;
  rosterHealth: RosterHealth;
  scholarshipIQ: {
    sportId: SportId;
    scholarshipModel: "head_count" | "equivalency" | "mixed_or_unknown";
    scholarshipLimitLabel: string;
    usedScholarships: number;
    scholarshipLimitPlaceholder: number;
    projectedOpenings: number;
    overloadedPositions: string[];
    futureShortages: string[];
    recommendedActions: string[];
    confidence: ConfidenceLevel;
    isMock: true;
  };
  rosterDNA: { score: number; summary: string; confidence: ConfidenceLevel; isMock: true };
  teamGenome: { summary: string; confidence: ConfidenceLevel; isMock: true };
  transferRisk: ExecutivePriority[];
  transferOpportunities: ExecutivePriority[];
  transferPortfolio: GMTransferPortfolioItem[];
  recruitingPipeline: RecruitingPipeline;
  organizationalPlans: OrganizationalPlan[];
  executiveCouncil: ExecutiveCouncilRecommendation[];
  investmentBoard: InvestmentBoardItem[];
  reports: GMReportTemplate[];
  confidenceSummary: string;
  evidenceSummary: string;
  simulationReminder: string;
  lastUpdated: string;
  isMock: true;
};
