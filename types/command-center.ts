import type { ConfidenceLevel, MovementType, NILStatus } from "@/types/portal";

export type CommandCenterModule =
  | "ai_briefing"
  | "ai_insights"
  | "breaking_feed"
  | "market_movers"
  | "prediction_movers"
  | "team_momentum"
  | "nil_movement"
  | "conference_activity"
  | "watchlist"
  | "global_search"
  | "transfer_map"
  | "ai_assistant"
  | "morning_briefing";

export type BreakingPortalUpdate = {
  id: string;
  headline: string;
  playerName: string;
  movementType: MovementType;
  schoolOrTeam: string;
  confidence: ConfidenceLevel;
  confidenceScore: number;
  sourceLabel: string;
  sourceUrl: string;
  timestamp: string;
  isMock: true;
};

export type MarketMover = {
  id: string;
  playerName: string;
  position: string;
  movementReason: string;
  portalPulseScoreChange: number;
  category: "rising" | "falling" | "interest" | "activity";
  sparkline: number[];
  confidence: ConfidenceLevel;
  sourceCount: number;
  isMock: true;
};

export type PredictionMover = {
  id: string;
  playerName: string;
  school: string;
  previousProbability: number;
  currentProbability: number;
  movementReason: string;
  confidence: ConfidenceLevel;
  confidenceScore: number;
  isMock: true;
};

export type TeamMomentumItem = {
  id: string;
  teamName: string;
  conference: string;
  momentumScore: number;
  commits: number;
  departures: number;
  netImpact: number;
  trend: "up" | "down" | "flat";
  portalGrade: string;
  conferenceRank: number;
  isMock: true;
};

export type ConferenceActivityItem = {
  id: string;
  conference: string;
  portalEntries: number;
  commitments: number;
  netTalentMovement: number;
  topTeam: string;
  transfersOut: number;
  mostActivePosition: string;
  conferenceScore: number;
  trend: number[];
  isMock: true;
};

export type NILMovementItem = {
  id: string;
  playerName: string;
  status: NILStatus;
  movementLabel: string;
  estimatedRange: string;
  collectiveActivity: string;
  marketMovement: "up" | "down" | "flat";
  confidence: ConfidenceLevel;
  sourceLabel: string;
  sourceCount: number;
  isMock: true;
};

export type WatchlistUpdate = {
  id: string;
  subjectName: string;
  subjectType: "player" | "team" | "conference" | "claim";
  update: string;
  urgency: "high" | "medium" | "low";
  timestamp: string;
  isMock: true;
};

export type AIBriefingItem = {
  id: string;
  title: string;
  summary: string;
  confidence: ConfidenceLevel;
  supportingSourceCount: number;
  contradictions: number;
  isMock: true;
};

export type TransferMapEvent = {
  id: string;
  playerName: string;
  fromSchool: string;
  toSchool?: string;
  latitude: number;
  longitude: number;
  destinationLatitude?: number;
  destinationLongitude?: number;
  movementType: MovementType;
  confidence: ConfidenceLevel;
  isMock: true;
};

export type CommandCenterSearchResult = {
  id: string;
  label: string;
  category: "player" | "team" | "school" | "coach" | "conference" | "sport" | "high_school" | "nil_collective" | "source" | "prediction" | "timeline";
  description: string;
  href: string;
  confidence?: ConfidenceLevel;
  isMock: true;
};

export type DashboardWidgetDefinition = {
  id: CommandCenterModule;
  title: string;
  description: string;
  defaultColumnSpan: 3 | 4 | 5 | 6 | 7 | 8 | 9 | 12;
  defaultEnabled: boolean;
  isMock: true;
};

export type UserDashboardPreference = {
  userId: string;
  enabledModules: CommandCenterModule[];
  favoriteTeams: string[];
  favoritePlayers: string[];
  defaultSport: string;
  isMock: true;
};

export type CommandCenterSnapshot = {
  id: string;
  generatedAt: string;
  activePortalEntries: number;
  breakingUpdates: number;
  marketMovers: number;
  predictionMovers: number;
  teamsTracked: number;
  nilMovements: number;
  confidenceAverage: number;
  modules: CommandCenterModule[];
  isMock: true;
};
