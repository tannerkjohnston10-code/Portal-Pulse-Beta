import type {
  ConferenceMarket,
  MarketCommentary,
  MarketMetric,
  MarketMover,
  MarketSnapshot,
  MarketTimelineEvent,
  PositionMarket,
  WatchlistMarketUpdate
} from "@/platform/market/exchange/market-types";

export const mockMarketSnapshot: MarketSnapshot = {
  id: "mock-tmx-snapshot",
  title: "Mock Transfer Market Exchange",
  marketStatus: "open_mock",
  heatIndex: 82,
  portalActivityIndex: 78,
  transferVelocity: 64,
  marketConfidence: 71,
  sourceActivity: 88,
  topMover: "Mock Player Alpha",
  trendingConference: "Mock Lakes Conference",
  lastUpdated: "2026-06-28T18:30:00.000Z",
  confidence: "medium",
  sourceCount: 24,
  isMock: true
};

export const mockMarketMetrics: MarketMetric[] = [
  {
    id: "mock-metric-portal-activity",
    key: "portal_activity_index",
    label: "Portal Activity Index",
    value: 78,
    previousValue: 70,
    direction: "up",
    confidence: "medium",
    explanation: "Mock activity rose because fictional source volume, timeline events, and interest signals increased.",
    sourceCount: 8,
    evidenceCount: 11,
    lastUpdated: "2026-06-28T18:30:00.000Z",
    isMock: true
  },
  {
    id: "mock-metric-transfer-velocity",
    key: "transfer_velocity",
    label: "Transfer Velocity",
    value: 64,
    previousValue: 59,
    direction: "up",
    confidence: "medium",
    explanation: "Mock velocity measures the rate of fictional movement signals over the last mock window.",
    sourceCount: 6,
    evidenceCount: 9,
    lastUpdated: "2026-06-28T18:30:00.000Z",
    isMock: true
  },
  {
    id: "mock-metric-position-scarcity",
    key: "position_scarcity",
    label: "Position Scarcity",
    value: 73,
    previousValue: 75,
    direction: "down",
    confidence: "low",
    explanation: "Mock scarcity eased slightly after fictional position volume improved, but confidence remains low.",
    sourceCount: 4,
    evidenceCount: 5,
    lastUpdated: "2026-06-28T18:30:00.000Z",
    isMock: true
  },
  {
    id: "mock-metric-source-activity",
    key: "source_activity",
    label: "Source Activity",
    value: 88,
    previousValue: 76,
    direction: "up",
    confidence: "medium",
    explanation: "Mock source activity increased across approved fictional source records and Sentinel intake placeholders.",
    sourceCount: 10,
    evidenceCount: 14,
    lastUpdated: "2026-06-28T18:30:00.000Z",
    isMock: true
  }
];

export const mockMarketMovers: MarketMover[] = [
  {
    id: "mock-market-mover-alpha",
    category: "biggest_riser",
    entityType: "player",
    entityId: "mock-player-alpha",
    label: "Mock Player Alpha",
    context: "Quarterback market",
    score: 86,
    previousScore: 72,
    delta: 14,
    direction: "up",
    confidence: "medium",
    sourceCount: 6,
    evidenceCount: 8,
    sparkline: [58, 61, 67, 72, 79, 86],
    explanation: "Fictional interest volume, prediction velocity, and source activity rose in the mock dataset.",
    lastUpdated: "2026-06-28T18:30:00.000Z",
    isMock: true
  },
  {
    id: "mock-market-mover-beta",
    category: "biggest_faller",
    entityType: "player",
    entityId: "mock-player-beta",
    label: "Mock Player Beta",
    context: "Wing market",
    score: 52,
    previousScore: 64,
    delta: -12,
    direction: "down",
    confidence: "low",
    sourceCount: 3,
    evidenceCount: 4,
    sparkline: [68, 65, 64, 59, 55, 52],
    explanation: "Mock confidence dipped after duplicate uncertainty and lower fictional source activity.",
    lastUpdated: "2026-06-28T18:30:00.000Z",
    isMock: true
  },
  {
    id: "mock-market-mover-state",
    category: "active_school",
    entityType: "team",
    entityId: "mock-team-state",
    label: "Mock State",
    context: "Most active school",
    score: 91,
    previousScore: 80,
    delta: 11,
    direction: "up",
    confidence: "medium",
    sourceCount: 7,
    evidenceCount: 10,
    sparkline: [66, 72, 74, 80, 86, 91],
    explanation: "Mock State added fictional interest, visit, and roster-need signals.",
    lastUpdated: "2026-06-28T18:30:00.000Z",
    isMock: true
  },
  {
    id: "mock-market-mover-lakes",
    category: "active_conference",
    entityType: "conference",
    entityId: "mock-lakes",
    label: "Mock Lakes Conference",
    context: "Most active conference",
    score: 84,
    previousScore: 73,
    delta: 11,
    direction: "up",
    confidence: "medium",
    sourceCount: 8,
    evidenceCount: 12,
    sparkline: [55, 60, 65, 73, 78, 84],
    explanation: "Fictional team activity clustered across three mock schools.",
    lastUpdated: "2026-06-28T18:30:00.000Z",
    isMock: true
  },
  {
    id: "mock-market-mover-prediction",
    category: "prediction_change",
    entityType: "prediction",
    entityId: "mock-oracle-prediction-alpha",
    label: "Mock Player Alpha to Mock State",
    context: "Fastest prediction change",
    score: 58,
    previousScore: 44,
    delta: 14,
    direction: "up",
    confidence: "medium",
    sourceCount: 6,
    evidenceCount: 7,
    sparkline: [44, 47, 51, 53, 56, 58],
    explanation: "Oracle projection movement remains a projection and is capped by mock conflicting evidence.",
    lastUpdated: "2026-06-28T18:30:00.000Z",
    isMock: true
  }
];

export const mockPositionMarkets: PositionMarket[] = [
  {
    id: "mock-position-qb",
    position: "Quarterbacks",
    sport: "Football",
    activityScore: 86,
    scarcityScore: 79,
    demandScore: 92,
    movementScore: 81,
    trend: "up",
    confidence: "medium",
    explanation: "Mock demand is high because fictional schools show roster need and interest volume.",
    isMock: true
  },
  {
    id: "mock-position-ol",
    position: "Offensive Line",
    sport: "Football",
    activityScore: 74,
    scarcityScore: 88,
    demandScore: 85,
    movementScore: 68,
    trend: "up",
    confidence: "medium",
    explanation: "Mock scarcity remains elevated as fictional roster-need signals outpace available volume.",
    isMock: true
  },
  {
    id: "mock-position-guards",
    position: "Basketball Guards",
    sport: "Men's Basketball",
    activityScore: 69,
    scarcityScore: 55,
    demandScore: 71,
    movementScore: 63,
    trend: "flat",
    confidence: "low",
    explanation: "Mock activity is steady, but source confidence is lower in this fictional segment.",
    isMock: true
  }
];

export const mockConferenceMarkets: ConferenceMarket[] = [
  {
    id: "mock-conference-lakes",
    conference: "Mock Lakes Conference",
    activityScore: 84,
    netGains: 12,
    netLosses: 7,
    averageMomentum: 76,
    topSchools: ["Mock State", "Mock Tech"],
    trend: "up",
    regionalActivity: "Fictional Midwest activity cluster",
    historicalComparison: "Up 9 points versus last mock replay snapshot.",
    confidence: "medium",
    isMock: true
  },
  {
    id: "mock-conference-coastal",
    conference: "Mock Coastal Conference",
    activityScore: 67,
    netGains: 8,
    netLosses: 9,
    averageMomentum: 61,
    topSchools: ["Mock Harbor"],
    trend: "flat",
    regionalActivity: "Fictional coastal activity remains balanced.",
    historicalComparison: "Flat versus last mock replay snapshot.",
    confidence: "low",
    isMock: true
  }
];

export const mockMarketTimeline: MarketTimelineEvent[] = [
  {
    id: "mock-market-timeline-1",
    eventType: "source_spike",
    title: "Mock source activity spike",
    summary: "Sentinel-style fictional intake volume rose across approved mock sources.",
    timestamp: "2026-06-28T09:30:00.000Z",
    confidence: "medium",
    sourceCount: 8,
    evidenceCount: 10,
    apolloReplayEventId: "mock-replay-event-3",
    isMock: true
  },
  {
    id: "mock-market-timeline-2",
    eventType: "prediction_movement",
    title: "Mock prediction velocity increased",
    summary: "Oracle projection movement rose but remained labeled as projection only.",
    timestamp: "2026-06-28T11:45:00.000Z",
    confidence: "medium",
    sourceCount: 6,
    evidenceCount: 7,
    apolloReplayEventId: "mock-replay-event-3",
    isMock: true
  },
  {
    id: "mock-market-timeline-3",
    eventType: "ranking_movement",
    title: "Mock team momentum changed",
    summary: "A fictional team momentum score moved after roster need and source volume signals increased.",
    timestamp: "2026-06-28T15:10:00.000Z",
    confidence: "medium",
    sourceCount: 5,
    evidenceCount: 8,
    isMock: true
  }
];

export const mockWatchlistMarketUpdates: WatchlistMarketUpdate[] = [
  {
    id: "mock-watchlist-market-1",
    label: "Mock Player Alpha",
    updateType: "player_heating_up",
    summary: "Mock watched player entered the top fictional momentum group.",
    confidence: "medium",
    sourceCount: 6,
    isMock: true
  },
  {
    id: "mock-watchlist-market-2",
    label: "Mock State",
    updateType: "team_heating_up",
    summary: "Mock watched team gained fictional activity and interest volume.",
    confidence: "medium",
    sourceCount: 7,
    isMock: true
  }
];

export const mockMarketCommentary: MarketCommentary[] = [
  {
    id: "mock-market-commentary-1",
    summary: "Mock market heat rose because source activity and prediction velocity increased together.",
    evidence: ["mock-metric-source-activity", "mock-market-mover-prediction", "mock-market-timeline-1"],
    confidence: "medium",
    importance: 82,
    relatedEntities: ["mock-player-alpha", "mock-team-state", "mock-lakes"],
    whatChanged: "Fictional source activity and interest signals increased over the mock window.",
    whatToWatch: "Watch whether duplicate uncertainty clears or caps confidence.",
    submittedToCore: true,
    isMock: true
  },
  {
    id: "mock-market-commentary-2",
    summary: "Mock quarterback demand remains the strongest position market.",
    evidence: ["mock-position-qb", "mock-market-mover-alpha"],
    confidence: "medium",
    importance: 76,
    relatedEntities: ["mock-position-qb", "mock-team-state"],
    whatChanged: "Demand and scarcity remained elevated in the fictional position market.",
    whatToWatch: "Watch schools with open depth chart opportunities.",
    submittedToCore: true,
    isMock: true
  }
];

