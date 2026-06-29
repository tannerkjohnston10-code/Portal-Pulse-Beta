import type {
  AIBriefingItem,
  BreakingPortalUpdate,
  CommandCenterSearchResult,
  CommandCenterSnapshot,
  ConferenceActivityItem,
  DashboardWidgetDefinition,
  MarketMover,
  NILMovementItem,
  PredictionMover,
  TeamMomentumItem,
  TransferMapEvent,
  UserDashboardPreference,
  WatchlistUpdate
} from "@/types/command-center";

const generatedAt = "2026-06-28T12:00:00.000Z";
const sourceUrl = "https://example.com/mock-command-center-source";

export const mockCommandCenterSnapshot: CommandCenterSnapshot = {
  id: "mock-command-center-snapshot",
  generatedAt,
  activePortalEntries: 342,
  breakingUpdates: 4,
  marketMovers: 4,
  predictionMovers: 3,
  teamsTracked: 128,
  nilMovements: 2,
  confidenceAverage: 67,
  modules: ["ai_briefing", "ai_insights", "breaking_feed", "market_movers", "prediction_movers", "team_momentum", "transfer_map"],
  isMock: true
};

export const mockBreakingPortalUpdates: BreakingPortalUpdate[] = [
  {
    id: "mock-breaking-1",
    headline: "Mock portal entry requires review",
    playerName: "Marcus Vale",
    movementType: "entry",
    schoolOrTeam: "Lakefront State",
    confidence: "medium",
    confidenceScore: 64,
    sourceLabel: "Mock source placeholder",
    sourceUrl,
    timestamp: generatedAt,
    isMock: true
  },
  {
    id: "mock-breaking-2",
    headline: "Mock visit signal added",
    playerName: "Eliya Brooks",
    movementType: "visit",
    schoolOrTeam: "Desert State",
    confidence: "medium",
    confidenceScore: 58,
    sourceLabel: "Mock source placeholder",
    sourceUrl,
    timestamp: generatedAt,
    isMock: true
  },
  {
    id: "mock-breaking-3",
    headline: "Mock prediction movement flagged",
    playerName: "Noah Redd",
    movementType: "prediction",
    schoolOrTeam: "Summit Tech",
    confidence: "low",
    confidenceScore: 49,
    sourceLabel: "Mock source placeholder",
    sourceUrl,
    timestamp: "2026-06-28T11:20:00.000Z",
    isMock: true
  },
  {
    id: "mock-breaking-4",
    headline: "Mock team interest update",
    playerName: "Jalen North",
    movementType: "interest",
    schoolOrTeam: "Prairie A&M",
    confidence: "medium",
    confidenceScore: 62,
    sourceLabel: "Mock source placeholder",
    sourceUrl,
    timestamp: "2026-06-28T10:55:00.000Z",
    isMock: true
  }
];

export const mockMarketMovers: MarketMover[] = [
  {
    id: "mock-market-1",
    playerName: "Marcus Vale",
    position: "QB",
    movementReason: "Mock source activity and team interest increased.",
    portalPulseScoreChange: 3,
    category: "rising",
    sparkline: [58, 60, 61, 63, 66, 68],
    confidence: "medium",
    sourceCount: 1,
    isMock: true
  },
  {
    id: "mock-market-2",
    playerName: "Camden Frost",
    position: "WR",
    movementReason: "Mock NIL rumor remained low confidence.",
    portalPulseScoreChange: -2,
    category: "falling",
    sparkline: [72, 71, 70, 68, 67, 66],
    confidence: "low",
    sourceCount: 1,
    isMock: true
  },
  {
    id: "mock-market-3",
    playerName: "Jalen North",
    position: "OT",
    movementReason: "Mock team need and watchlist attention increased.",
    portalPulseScoreChange: 5,
    category: "interest",
    sparkline: [44, 45, 47, 51, 55, 60],
    confidence: "medium",
    sourceCount: 2,
    isMock: true
  },
  {
    id: "mock-market-4",
    playerName: "Noah Redd",
    position: "CB",
    movementReason: "Mock conflicting prediction signal reduced clarity.",
    portalPulseScoreChange: -4,
    category: "activity",
    sparkline: [63, 64, 62, 59, 60, 58],
    confidence: "low",
    sourceCount: 1,
    isMock: true
  }
];

export const mockPredictionMovers: PredictionMover[] = [
  {
    id: "mock-prediction-mover-1",
    playerName: "Marcus Vale",
    school: "Metro University",
    previousProbability: 37,
    currentProbability: 42,
    movementReason: "Mock visit timing signal.",
    confidence: "medium",
    confidenceScore: 61,
    isMock: true
  },
  {
    id: "mock-prediction-mover-2",
    playerName: "Eliya Brooks",
    school: "Desert State",
    previousProbability: 22,
    currentProbability: 31,
    movementReason: "Mock interest and roster fit signal.",
    confidence: "medium",
    confidenceScore: 57,
    isMock: true
  },
  {
    id: "mock-prediction-mover-3",
    playerName: "Noah Redd",
    school: "Summit Tech",
    previousProbability: 48,
    currentProbability: 39,
    movementReason: "Mock conflicting source signal.",
    confidence: "conflicting",
    confidenceScore: 44,
    isMock: true
  }
];

export const mockTeamMomentum: TeamMomentumItem[] = [
  {
    id: "mock-team-momentum-1",
    teamName: "Metro University",
    conference: "Mock Central",
    momentumScore: 84,
    commits: 8,
    departures: 3,
    netImpact: 18,
    trend: "up",
    portalGrade: "A-",
    conferenceRank: 1,
    isMock: true
  },
  {
    id: "mock-team-momentum-2",
    teamName: "Coastal Atlantic",
    conference: "Mock Atlantic",
    momentumScore: 78,
    commits: 6,
    departures: 2,
    netImpact: 15,
    trend: "flat",
    portalGrade: "B+",
    conferenceRank: 2,
    isMock: true
  },
  {
    id: "mock-team-momentum-3",
    teamName: "Prairie A&M",
    conference: "Mock Plains",
    momentumScore: 69,
    commits: 4,
    departures: 5,
    netImpact: 3,
    trend: "down",
    portalGrade: "B",
    conferenceRank: 4,
    isMock: true
  }
];

export const mockConferenceActivity: ConferenceActivityItem[] = [
  {
    id: "mock-conference-1",
    conference: "Mock Central",
    portalEntries: 42,
    commitments: 18,
    netTalentMovement: 7,
    topTeam: "Metro University",
    transfersOut: 35,
    mostActivePosition: "Offensive line",
    conferenceScore: 82,
    trend: [62, 64, 65, 70, 77, 82],
    isMock: true
  },
  {
    id: "mock-conference-2",
    conference: "Mock Atlantic",
    portalEntries: 36,
    commitments: 15,
    netTalentMovement: 4,
    topTeam: "Coastal Atlantic",
    transfersOut: 32,
    mostActivePosition: "Wide receiver",
    conferenceScore: 76,
    trend: [70, 71, 73, 72, 75, 76],
    isMock: true
  },
  {
    id: "mock-conference-3",
    conference: "Mock Plains",
    portalEntries: 29,
    commitments: 11,
    netTalentMovement: -2,
    topTeam: "Prairie A&M",
    transfersOut: 31,
    mostActivePosition: "Defensive back",
    conferenceScore: 64,
    trend: [67, 66, 65, 64, 65, 64],
    isMock: true
  }
];

export const mockNILMovement: NILMovementItem[] = [
  {
    id: "mock-nil-move-1",
    playerName: "Marcus Vale",
    status: "estimated",
    movementLabel: "Mock estimated range mentioned",
    estimatedRange: "$75K-$125K fictional placeholder",
    collectiveActivity: "Mock collective interest",
    marketMovement: "up",
    confidence: "medium",
    sourceLabel: "Mock source placeholder",
    sourceCount: 1,
    isMock: true
  },
  {
    id: "mock-nil-move-2",
    playerName: "Camden Frost",
    status: "rumored",
    movementLabel: "Mock rumor requires review",
    estimatedRange: "No verified value",
    collectiveActivity: "Mock unverified mention",
    marketMovement: "flat",
    confidence: "low",
    sourceLabel: "Mock source placeholder",
    sourceCount: 1,
    isMock: true
  }
];

export const mockWatchlistUpdates: WatchlistUpdate[] = [
  {
    id: "mock-watchlist-1",
    subjectName: "Marcus Vale",
    subjectType: "player",
    update: "Mock watchlist item changed confidence.",
    urgency: "medium",
    timestamp: generatedAt,
    isMock: true
  }
];

export const mockAIBriefing: AIBriefingItem[] = [
  {
    id: "mock-briefing-1",
    title: "Morning portal briefing placeholder",
    summary: "Mock AI briefing summary. Future versions will summarize source-backed movement without inventing facts.",
    confidence: "medium",
    supportingSourceCount: 2,
    contradictions: 0,
    isMock: true
  }
];

export const mockTransferMapEvents: TransferMapEvent[] = [
  {
    id: "mock-map-1",
    playerName: "Marcus Vale",
    fromSchool: "Lakefront State",
    toSchool: "Metro University",
    latitude: 41.8781,
    longitude: -87.6298,
    destinationLatitude: 39.0997,
    destinationLongitude: -94.5786,
    movementType: "interest",
    confidence: "medium",
    isMock: true
  },
  {
    id: "mock-map-2",
    playerName: "Eliya Brooks",
    fromSchool: "Riverbend College",
    toSchool: "Desert State",
    latitude: 35.4676,
    longitude: -97.5164,
    destinationLatitude: 33.4484,
    destinationLongitude: -112.074,
    movementType: "visit",
    confidence: "medium",
    isMock: true
  }
];

export const mockUserDashboardPreference: UserDashboardPreference = {
  userId: "mock-user",
  enabledModules: ["ai_briefing", "breaking_feed", "market_movers", "team_momentum", "transfer_map"],
  favoriteTeams: ["Metro University"],
  favoritePlayers: ["Marcus Vale"],
  defaultSport: "Football",
  isMock: true
};

export const mockCommandCenterSearchResults: CommandCenterSearchResult[] = [
  {
    id: "mock-search-player-1",
    label: "Marcus Vale",
    category: "player",
    description: "Mock QB with rising Portal Pulse activity.",
    href: "/players/mock-player-1",
    confidence: "medium",
    isMock: true
  },
  {
    id: "mock-search-team-1",
    label: "Metro University",
    category: "team",
    description: "Mock team leading Command Center momentum.",
    href: "/rankings",
    confidence: "medium",
    isMock: true
  },
  {
    id: "mock-search-conference-1",
    label: "Mock Central",
    category: "conference",
    description: "Fictional conference with active portal movement.",
    href: "/command-center",
    confidence: "medium",
    isMock: true
  },
  {
    id: "mock-search-source-1",
    label: "Mock source placeholder",
    category: "source",
    description: "Placeholder source record for demo-only claims.",
    href: "/admin",
    confidence: "unknown",
    isMock: true
  }
];

export const mockDashboardWidgets: DashboardWidgetDefinition[] = [
  {
    id: "ai_insights",
    title: "AI Insights Engine",
    description: "Explainable insight layer over source-backed claims.",
    defaultColumnSpan: 8,
    defaultEnabled: true,
    isMock: true
  },
  {
    id: "morning_briefing",
    title: "AI Morning Briefing",
    description: "Personalized source-backed overview.",
    defaultColumnSpan: 4,
    defaultEnabled: true,
    isMock: true
  },
  {
    id: "breaking_feed",
    title: "Breaking Portal Feed",
    description: "Live-style movement feed.",
    defaultColumnSpan: 4,
    defaultEnabled: true,
    isMock: true
  },
  {
    id: "transfer_map",
    title: "Transfer Map",
    description: "Movement geography and future animation layer.",
    defaultColumnSpan: 8,
    defaultEnabled: true,
    isMock: true
  },
  {
    id: "market_movers",
    title: "Market Movers",
    description: "Stock-market-style player movement.",
    defaultColumnSpan: 4,
    defaultEnabled: true,
    isMock: true
  },
  {
    id: "team_momentum",
    title: "Team Momentum",
    description: "Team-level transfer impact.",
    defaultColumnSpan: 4,
    defaultEnabled: true,
    isMock: true
  },
  {
    id: "ai_assistant",
    title: "AI Assistant Dock",
    description: "Future source-backed copilot.",
    defaultColumnSpan: 12,
    defaultEnabled: true,
    isMock: true
  }
];
