import type { ConfidenceLevel, NILStatus, PortalStatus, Sport } from "@/types/portal";

export type RankingType = "players" | "teams" | "conferences" | "positions" | "nil" | "momentum" | "roster_strength" | "portal_class";
export type RankMovement = "up" | "down" | "flat" | "new";

export type BaseRankingItem = {
  id: string;
  rankingType: RankingType;
  rank: number;
  previousRank: number;
  rankChange: number;
  movement: RankMovement;
  score: number;
  confidenceScore: number;
  sourceCount: number;
  lastUpdated: string;
  explanation: string;
  factors: Array<{ label: string; value: number; isMock: true }>;
  history: number[];
  isMock: true;
};

export type PlayerTransferRanking = BaseRankingItem & {
  rankingType: "players";
  playerName: string;
  position: string;
  sport: Sport;
  previousSchool: string;
  currentStatus: PortalStatus;
  portalPulseScore: number;
  demandScore: number;
  predictionMomentum: number;
  nilActivityLabel: string;
  confidence: ConfidenceLevel;
};

export type TeamTransferRanking = BaseRankingItem & {
  rankingType: "teams";
  teamName: string;
  conference: string;
  portalPulseTeamScore: number;
  commits: number;
  losses: number;
  netTalentScore: number;
  rosterFitScore: number;
  portalClassImpact: number;
  confidence: ConfidenceLevel;
};

export type ConferenceTransferRanking = BaseRankingItem & {
  rankingType: "conferences";
  conference: string;
  transfersIn: number;
  transfersOut: number;
  netTalentMovement: number;
  topGainingTeam: string;
  mostActivePosition: string;
  conferenceMomentumScore: number;
  confidence: ConfidenceLevel;
};

export type PositionGroupRanking = BaseRankingItem & {
  rankingType: "positions";
  position: string;
  playerVolume: number;
  elitePlayerCount: number;
  averagePortalPulseScore: number;
  demandScore: number;
  nilActivity: string;
  mostActiveTeams: string[];
  marketScarcityLabel: string;
};

export type NILMarketRanking = BaseRankingItem & {
  rankingType: "nil";
  schoolOrTeam: string;
  collectiveActivity: string;
  estimatedMarketStrengthLabel: string;
  playerActivity: number;
  reportedDealCount: number;
  nilStatus: NILStatus;
  confidence: ConfidenceLevel;
  disclaimer: string;
};

export type MomentumRanking = BaseRankingItem & {
  rankingType: "momentum";
  entityName: string;
  entityType: "player" | "team" | "conference" | "position" | "nil_market";
  momentumCategory: string;
  weeklyChange: number;
  monthlyChange: number;
  confidence: ConfidenceLevel;
};

export type RosterStrengthRanking = BaseRankingItem & {
  rankingType: "roster_strength";
  teamName: string;
  conference: string;
  rosterStrengthScore: number;
  depthScore: number;
  returningProductionScore: number;
};

export type PortalClassRanking = BaseRankingItem & {
  rankingType: "portal_class";
  teamName: string;
  conference: string;
  totalCommits: number;
  averageTransferRating: number;
  portalClassImpact: number;
};

export type AnyRankingItem =
  | PlayerTransferRanking
  | TeamTransferRanking
  | ConferenceTransferRanking
  | PositionGroupRanking
  | NILMarketRanking
  | MomentumRanking
  | RosterStrengthRanking
  | PortalClassRanking;

export type RankingSummary = {
  type: RankingType;
  title: string;
  description: string;
  items: AnyRankingItem[];
  lastUpdated: string;
  isMock: true;
};
