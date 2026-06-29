import type { AdminClaim, Claim, NewsUpdate, NILReport, Player, Prediction, Source, Team, TeamRanking, TimelineEvent, Visit } from "@/types/portal";

const lastUpdated = "2026-06-28T12:00:00.000Z";

export const mockSource = (id: string, label = "Mock source placeholder"): Source => ({
  id,
  label,
  url: "https://example.com/mock-source",
  type: "unknown",
  lastUpdated,
  confidence: "medium",
  isMock: true
});

export const mockClaims: Claim[] = [
  {
    id: "claim-portal-entry-1",
    claimType: "portal_entry",
    subjectType: "player",
    subjectId: "marcus-vale",
    value: "Mock portal entry placeholder for Marcus Vale.",
    status: "needs_review",
    confidenceLevel: "medium",
    confidenceScore: 64,
    sourceIds: ["source-player-1"],
    firstSeenAt: lastUpdated,
    lastSeenAt: lastUpdated,
    notes: "Fictional claim used to validate source-backed architecture.",
    isMock: true
  },
  {
    id: "claim-commitment-1",
    claimType: "commitment",
    subjectType: "player",
    subjectId: "jalen-rooks",
    value: "Mock commitment placeholder for Jalen Rooks.",
    status: "reported",
    confidenceLevel: "high",
    confidenceScore: 82,
    sourceIds: ["source-player-2"],
    firstSeenAt: lastUpdated,
    lastSeenAt: lastUpdated,
    notes: "Fictional claim used to validate source-backed architecture.",
    isMock: true
  },
  {
    id: "claim-nil-1",
    claimType: "nil_report",
    subjectType: "nil_report",
    subjectId: "nil-2",
    value: "Mock NIL rumor placeholder for Camden Frost.",
    status: "rumored",
    confidenceLevel: "low",
    confidenceScore: 34,
    sourceIds: ["source-nil-2"],
    firstSeenAt: lastUpdated,
    lastSeenAt: lastUpdated,
    notes: "Fictional NIL claim with low confidence for admin review patterns.",
    isMock: true
  }
];

export const mockPlayers: Player[] = [
  {
    id: "marcus-vale",
    name: "Marcus Vale",
    sport: "Football",
    position: "QB",
    classYear: "RS Sophomore",
    previousSchool: "Lakefront State",
    currentStatus: "entered",
    conference: "Sun Belt",
    commitmentProbability: 42,
    nilStatus: "estimated",
    confidence: "medium",
    confidenceScore: 64,
    lastUpdated,
    interestedTeams: [
      { team: "Metro University", interestLevel: "medium", probability: 42, isMock: true },
      { team: "Southern Tech", interestLevel: "low", probability: 24, isMock: true }
    ],
    isMock: true,
    source: mockSource("source-player-1")
  },
  {
    id: "jalen-rooks",
    name: "Jalen Rooks",
    sport: "Football",
    position: "EDGE",
    classYear: "Junior",
    previousSchool: "Plains A&M",
    currentStatus: "committed",
    conference: "AAC",
    commitmentProbability: 86,
    nilStatus: "reported",
    confidence: "high",
    confidenceScore: 82,
    lastUpdated,
    interestedTeams: [
      { team: "Coastal Atlantic", interestLevel: "high", probability: 86, isMock: true },
      { team: "North Valley", interestLevel: "medium", probability: 10, isMock: true }
    ],
    isMock: true,
    source: mockSource("source-player-2")
  },
  {
    id: "eliya-brooks",
    name: "Eliya Brooks",
    sport: "Women's Basketball",
    position: "G",
    classYear: "Sophomore",
    previousSchool: "River City",
    currentStatus: "available",
    conference: "WCC",
    commitmentProbability: 38,
    nilStatus: "unknown",
    confidence: "medium",
    confidenceScore: 58,
    lastUpdated,
    interestedTeams: [
      { team: "Desert State", interestLevel: "medium", probability: 38, isMock: true },
      { team: "Pacific College", interestLevel: "medium", probability: 31, isMock: true }
    ],
    isMock: true,
    source: mockSource("source-player-3")
  },
  {
    id: "camden-frost",
    name: "Camden Frost",
    sport: "Football",
    position: "WR",
    classYear: "Freshman",
    previousSchool: "Northern Plains",
    currentStatus: "available",
    conference: "Mountain West",
    commitmentProbability: 29,
    nilStatus: "rumored",
    confidence: "low",
    confidenceScore: 41,
    lastUpdated,
    interestedTeams: [
      { team: "Metro University", interestLevel: "low", probability: 29, isMock: true },
      { team: "Great Lakes", interestLevel: "low", probability: 22, isMock: true }
    ],
    isMock: true,
    source: mockSource("source-player-4")
  },
  {
    id: "niko-arden",
    name: "Niko Arden",
    sport: "Men's Basketball",
    position: "F",
    classYear: "Senior",
    previousSchool: "Capital Tech",
    currentStatus: "entered",
    conference: "A-10",
    commitmentProbability: 51,
    nilStatus: "estimated",
    confidence: "medium",
    confidenceScore: 67,
    lastUpdated,
    interestedTeams: [
      { team: "Queen City", interestLevel: "medium", probability: 51, isMock: true },
      { team: "Coastal Atlantic", interestLevel: "medium", probability: 27, isMock: true }
    ],
    isMock: true,
    source: mockSource("source-player-5")
  },
  {
    id: "trey-maddox",
    name: "Trey Maddox",
    sport: "Football",
    position: "CB",
    classYear: "Junior",
    previousSchool: "Western Range",
    currentStatus: "withdrawn",
    conference: "C-USA",
    commitmentProbability: 12,
    nilStatus: "unknown",
    confidence: "conflicting",
    confidenceScore: 36,
    lastUpdated,
    interestedTeams: [
      { team: "North Valley", interestLevel: "low", probability: 12, isMock: true }
    ],
    isMock: true,
    source: mockSource("source-player-6", "Mock conflicting source placeholder")
  }
];

export const mockTeams: Team[] = [
  { id: "metro-university", name: "Metro University", conference: "Big Central", sport: "Football", isMock: true },
  { id: "coastal-atlantic", name: "Coastal Atlantic", conference: "ACC", sport: "Football", isMock: true },
  { id: "queen-city", name: "Queen City", conference: "A-10", sport: "Men's Basketball", isMock: true },
  { id: "desert-state", name: "Desert State", conference: "Pac West", sport: "Women's Basketball", isMock: true }
];

export const mockNewsUpdates: NewsUpdate[] = [
  {
    id: "news-1",
    playerName: "Marcus Vale",
    movementType: "entry",
    team: "Lakefront State",
    confidence: "medium",
    timestamp: lastUpdated,
    sourceLabel: "Mock source placeholder",
    isMock: true
  },
  {
    id: "news-2",
    playerName: "Jalen Rooks",
    movementType: "commitment",
    team: "Coastal Atlantic",
    confidence: "high",
    timestamp: lastUpdated,
    sourceLabel: "Mock source placeholder",
    isMock: true
  },
  {
    id: "news-3",
    playerName: "Eliya Brooks",
    movementType: "visit",
    team: "Desert State",
    confidence: "medium",
    timestamp: lastUpdated,
    sourceLabel: "Mock source placeholder",
    isMock: true
  },
  {
    id: "news-4",
    playerName: "Trey Maddox",
    movementType: "withdrawal",
    team: "Western Range",
    confidence: "conflicting",
    timestamp: lastUpdated,
    sourceLabel: "Mock conflicting source placeholder",
    isMock: true
  }
];

export const mockRankings: TeamRanking[] = [
  {
    id: "ranking-1",
    team: "Metro University",
    sport: "Football",
    conference: "Big Central",
    rank: 1,
    previousRank: 3,
    commits: 8,
    losses: 3,
    netImpact: 18,
    portalGrade: "A",
    projectedImpactScore: 91,
    isMock: true
  },
  {
    id: "ranking-2",
    team: "Coastal Atlantic",
    sport: "Football",
    conference: "ACC",
    rank: 2,
    previousRank: 1,
    commits: 6,
    losses: 2,
    netImpact: 15,
    portalGrade: "A-",
    projectedImpactScore: 88,
    isMock: true
  },
  {
    id: "ranking-3",
    team: "Queen City",
    sport: "Men's Basketball",
    conference: "A-10",
    rank: 3,
    previousRank: 5,
    commits: 4,
    losses: 1,
    netImpact: 12,
    portalGrade: "B+",
    projectedImpactScore: 83,
    isMock: true
  },
  {
    id: "ranking-4",
    team: "Desert State",
    sport: "Women's Basketball",
    conference: "Pac West",
    rank: 4,
    previousRank: 4,
    commits: 3,
    losses: 2,
    netImpact: 7,
    portalGrade: "B",
    projectedImpactScore: 78,
    isMock: true
  }
];

export const mockNilReports: NILReport[] = [
  {
    id: "nil-1",
    playerId: "marcus-vale",
    playerName: "Marcus Vale",
    school: "Lakefront State",
    sport: "Football",
    position: "QB",
    status: "estimated",
    rangeLabel: "Estimated premium range",
    confidence: "medium",
    confidenceScore: 55,
    source: mockSource("source-nil-1"),
    isMock: true
  },
  {
    id: "nil-2",
    playerId: "camden-frost",
    playerName: "Camden Frost",
    school: "Northern Plains",
    sport: "Football",
    position: "WR",
    status: "rumored",
    rangeLabel: "Rumored market interest",
    confidence: "low",
    confidenceScore: 34,
    source: mockSource("source-nil-2"),
    isMock: true
  },
  {
    id: "nil-3",
    playerId: "niko-arden",
    playerName: "Niko Arden",
    school: "Capital Tech",
    sport: "Men's Basketball",
    position: "F",
    status: "estimated",
    rangeLabel: "Estimated role-based range",
    confidence: "medium",
    confidenceScore: 62,
    source: mockSource("source-nil-3"),
    isMock: true
  }
];

export const mockVisits: Visit[] = [
  {
    id: "visit-1",
    playerId: "marcus-vale",
    playerName: "Marcus Vale",
    team: "Metro University",
    date: "2026-07-02",
    type: "official",
    status: "upcoming",
    confidenceScore: 61,
    confidence: "medium",
    source: mockSource("source-visit-1"),
    isMock: true
  },
  {
    id: "visit-2",
    playerId: "eliya-brooks",
    playerName: "Eliya Brooks",
    team: "Desert State",
    date: "2026-07-08",
    type: "unofficial",
    status: "upcoming",
    confidenceScore: 57,
    confidence: "medium",
    source: mockSource("source-visit-2"),
    isMock: true
  },
  {
    id: "visit-3",
    playerId: "jalen-rooks",
    playerName: "Jalen Rooks",
    team: "Coastal Atlantic",
    date: "2026-06-24",
    type: "official",
    status: "completed",
    confidenceScore: 80,
    confidence: "high",
    source: mockSource("source-visit-3"),
    isMock: true
  }
];

export const mockPredictions: Prediction[] = [
  {
    id: "prediction-1",
    playerId: "marcus-vale",
    playerName: "Marcus Vale",
    predictionType: "commitment",
    movement: "up",
    confidence: "medium",
    confidenceScore: 59,
    explanation: "Mock projection based on roster need, visit timing, and interest placeholders. This is not a real report.",
    teamBreakdown: [
      { team: "Metro University", probability: 42, isMock: true },
      { team: "Southern Tech", probability: 24, isMock: true },
      { team: "Field", probability: 34, isMock: true }
    ],
    source: mockSource("source-prediction-1"),
    isMock: true
  },
  {
    id: "prediction-2",
    playerId: "niko-arden",
    playerName: "Niko Arden",
    predictionType: "commitment",
    movement: "flat",
    confidence: "medium",
    confidenceScore: 63,
    explanation: "Mock projection based on fit and scholarship availability placeholders. This is not a real report.",
    teamBreakdown: [
      { team: "Queen City", probability: 51, isMock: true },
      { team: "Coastal Atlantic", probability: 27, isMock: true },
      { team: "Field", probability: 22, isMock: true }
    ],
    source: mockSource("source-prediction-2"),
    isMock: true
  }
];

export const mockTimelineEvents: TimelineEvent[] = [
  {
    id: "timeline-1",
    subjectId: "marcus-vale",
    subjectType: "player",
    title: "Mock portal status update",
    detail: "Fictional event used to structure future verified player timelines.",
    timestamp: lastUpdated,
    confidence: "medium",
    claimId: "claim-portal-entry-1",
    isMock: true
  },
  {
    id: "timeline-2",
    subjectId: "jalen-rooks",
    subjectType: "player",
    title: "Mock commitment update",
    detail: "Fictional event used to validate claim-linked timelines.",
    timestamp: lastUpdated,
    confidence: "high",
    claimId: "claim-commitment-1",
    isMock: true
  }
];

export const mockAdminClaims: AdminClaim[] = [
  {
    id: "admin-1",
    category: "new_claim",
    title: "New portal entry requires source review",
    entity: "Marcus Vale",
    priority: "medium",
    confidence: "medium",
    timestamp: lastUpdated,
    isMock: true
  },
  {
    id: "admin-2",
    category: "low_confidence",
    title: "Low-confidence NIL report needs verification",
    entity: "Camden Frost",
    priority: "high",
    confidence: "low",
    timestamp: lastUpdated,
    isMock: true
  },
  {
    id: "admin-3",
    category: "conflicting_report",
    title: "Conflicting withdrawal report flagged",
    entity: "Trey Maddox",
    priority: "high",
    confidence: "conflicting",
    timestamp: lastUpdated,
    isMock: true
  },
  {
    id: "admin-4",
    category: "duplicate_player",
    title: "Possible duplicate player record",
    entity: "Niko Arden",
    priority: "low",
    confidence: "unknown",
    timestamp: lastUpdated,
    isMock: true
  }
];

export const getMockPlayerById = (id: string) => mockPlayers.find((player) => player.id === id);
