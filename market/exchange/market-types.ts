import type { ConfidenceLevel } from "@/types/portal";

export type MarketEntityType = "player" | "team" | "conference" | "position" | "prediction" | "watchlist";

export type MarketMetricKey =
  | "portal_activity_index"
  | "player_momentum"
  | "school_momentum"
  | "conference_momentum"
  | "transfer_velocity"
  | "recruiting_heat"
  | "position_scarcity"
  | "market_confidence"
  | "interest_volume"
  | "signal_strength"
  | "prediction_velocity"
  | "source_activity";

export type MarketDirection = "up" | "down" | "flat";

export type MarketMetric = {
  id: string;
  key: MarketMetricKey;
  label: string;
  value: number;
  previousValue: number;
  direction: MarketDirection;
  confidence: ConfidenceLevel;
  explanation: string;
  sourceCount: number;
  evidenceCount: number;
  lastUpdated: string;
  isMock: true;
};

export type MarketMover = {
  id: string;
  category:
    | "biggest_riser"
    | "biggest_faller"
    | "active_school"
    | "growing_interest"
    | "competitive_recruitment"
    | "active_conference"
    | "confidence_change"
    | "watched_player"
    | "prediction_change";
  entityType: MarketEntityType;
  entityId: string;
  label: string;
  context: string;
  score: number;
  previousScore: number;
  delta: number;
  direction: MarketDirection;
  confidence: ConfidenceLevel;
  sourceCount: number;
  evidenceCount: number;
  sparkline: number[];
  explanation: string;
  lastUpdated: string;
  isMock: true;
};

export type PositionMarket = {
  id: string;
  position: string;
  sport: string;
  activityScore: number;
  scarcityScore: number;
  demandScore: number;
  movementScore: number;
  trend: MarketDirection;
  confidence: ConfidenceLevel;
  explanation: string;
  isMock: true;
};

export type ConferenceMarket = {
  id: string;
  conference: string;
  activityScore: number;
  netGains: number;
  netLosses: number;
  averageMomentum: number;
  topSchools: string[];
  trend: MarketDirection;
  regionalActivity: string;
  historicalComparison: string;
  confidence: ConfidenceLevel;
  isMock: true;
};

export type MarketTimelineEvent = {
  id: string;
  eventType:
    | "portal_entry"
    | "visit"
    | "offer"
    | "commitment"
    | "prediction_movement"
    | "ranking_movement"
    | "nil_mention"
    | "source_spike"
    | "coach_change";
  title: string;
  summary: string;
  timestamp: string;
  confidence: ConfidenceLevel;
  sourceCount: number;
  evidenceCount: number;
  apolloReplayEventId?: string;
  isMock: true;
};

export type MarketCommentary = {
  id: string;
  summary: string;
  evidence: string[];
  confidence: ConfidenceLevel;
  importance: number;
  relatedEntities: string[];
  whatChanged: string;
  whatToWatch: string;
  submittedToCore: true;
  isMock: true;
};

export type WatchlistMarketUpdate = {
  id: string;
  label: string;
  updateType: "player_heating_up" | "team_heating_up" | "prediction_change" | "visit_increase" | "confidence_change" | "interest_spike";
  summary: string;
  confidence: ConfidenceLevel;
  sourceCount: number;
  isMock: true;
};

export type MarketSnapshot = {
  id: string;
  title: string;
  marketStatus: "open_mock" | "monitoring_mock" | "quiet_mock";
  heatIndex: number;
  portalActivityIndex: number;
  transferVelocity: number;
  marketConfidence: number;
  sourceActivity: number;
  topMover: string;
  trendingConference: string;
  lastUpdated: string;
  confidence: ConfidenceLevel;
  sourceCount: number;
  isMock: true;
};

export type TransferMarketExchangeDashboard = {
  snapshot: MarketSnapshot;
  metrics: MarketMetric[];
  movers: MarketMover[];
  trendingPlayers: MarketMover[];
  trendingTeams: MarketMover[];
  conferences: ConferenceMarket[];
  positions: PositionMarket[];
  predictionMovers: MarketMover[];
  interestLeaders: MarketMover[];
  sourceActivity: MarketMetric[];
  timeline: MarketTimelineEvent[];
  watchlist: WatchlistMarketUpdate[];
  commentary: MarketCommentary[];
  isMock: true;
};

