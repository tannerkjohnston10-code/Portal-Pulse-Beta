import type { FeedItem, KnowledgeExchangeItem, ModerationQueueItem, NetworkAIBriefing, NetworkCommunity, NetworkDashboardData, NetworkNotification, NetworkReport, NetworkUserProfile, SharedWatchlist } from "@/platform/network/network-types";

const now = "2026-06-29T10:00:00.000Z";

const evidence = {
  evidenceCount: 4,
  sourceCount: 2,
  hasContradictions: false,
  verifiedPlaceholder: true,
  label: "Mock evidence linked",
  isMock: true as const
};

export const mockNetworkProfiles: NetworkUserProfile[] = [
  {
    id: "mock-profile-analyst",
    displayName: "Mock Analyst",
    biography: "Fictional transfer portal analyst focused on evidence quality and multi-sport roster context.",
    role: "analyst",
    sportIds: ["football", "mens-basketball", "baseball"],
    favoritePrograms: ["Mock State", "Example Tech"],
    expertiseTags: ["Roster construction", "Transfer fit", "Market movement"],
    verifiedPlaceholder: true,
    following: 42,
    followers: 1280,
    savedReports: 18,
    publishedReports: 12,
    sharedWatchlists: 3,
    reputation: {
      score: 84,
      contributionLevel: "trusted",
      verificationStatus: "verified_placeholder",
      expertiseAreas: ["Transfer analysis", "Roster risk", "Evidence review"],
      trustIndicators: ["High evidence density", "Constructive participation", "Consistent confidence alignment"],
      factors: [
        { label: "Evidence quality", score: 91, explanation: "Mock reports include structured evidence placeholders.", isMock: true },
        { label: "Report quality", score: 86, explanation: "Mock analysis is clear and source-aware.", isMock: true },
        { label: "Accuracy history", score: 76, explanation: "Placeholder for future tracked outcomes.", isMock: true }
      ],
      isMock: true
    },
    contributionHistory: ["Published mock transfer portfolio note", "Shared evidence-backed watchlist", "Flagged conflicting placeholder report"],
    recentActivity: ["Saved a mock baseball pipeline report", "Published a roster risk summary"],
    bookmarks: ["Mock State OL watchlist", "Big mock conference trend"],
    aiPreferences: ["Show confidence first", "Separate projections"],
    profileBanner: "Mock intelligence banner",
    profilePhotoPlaceholder: "MA",
    isMock: true
  },
  {
    id: "mock-profile-media",
    displayName: "Mock Media Pro",
    biography: "Fictional media member organizing verified-placeholder reports and historical context.",
    role: "media",
    sportIds: ["womens-basketball", "softball"],
    favoritePrograms: ["Sample U"],
    expertiseTags: ["Reporting", "Historical context", "Conference movement"],
    verifiedPlaceholder: true,
    following: 31,
    followers: 920,
    savedReports: 9,
    publishedReports: 7,
    sharedWatchlists: 2,
    reputation: {
      score: 79,
      contributionLevel: "trusted",
      verificationStatus: "professional_placeholder",
      expertiseAreas: ["Source review", "Conference trends"],
      trustIndicators: ["Professional placeholder", "High citation discipline"],
      factors: [
        { label: "Evidence quality", score: 88, explanation: "Mock media reports include reference placeholders.", isMock: true },
        { label: "Constructive participation", score: 82, explanation: "Mock comments focus on evidence gaps.", isMock: true }
      ],
      isMock: true
    },
    contributionHistory: ["Created mock women's basketball conference report", "Saved softball transfer watchlist"],
    recentActivity: ["Shared a historical context report"],
    bookmarks: ["Mock softball pitcher depth"],
    aiPreferences: ["Summarize evidence gaps"],
    profileBanner: "Mock media banner",
    profilePhotoPlaceholder: "MP",
    isMock: true
  }
];

export const mockNetworkReports: NetworkReport[] = [
  {
    id: "mock-report-transfer-fit",
    title: "Mock transfer analysis: roster fit signals across two programs",
    reportType: "transfer_analysis",
    executiveSummary: "A fictional transfer archetype appears more valuable to the program with greater sport-specific roster need. This is mock analysis only.",
    supportingEvidencePlaceholder: ["Mock Atlas fit signal", "Mock Sport Capability roster context", "Mock evidence feed item"],
    confidence: "medium",
    confidenceScore: 72,
    referencesPlaceholder: ["Mock source reference A", "Mock source reference B"],
    sportIds: ["football"],
    programs: ["Mock State", "Example Tech"],
    athletes: ["Mock Transfer Tackle"],
    tags: ["transfer-fit", "roster-risk"],
    visibility: "public",
    versionHistoryPlaceholder: ["v1 mock draft", "v2 evidence placeholders added"],
    author: mockNetworkProfiles[0],
    informationType: "analysis",
    evidence,
    publishedAt: now,
    isMock: true
  },
  {
    id: "mock-report-conference",
    title: "Mock conference report: women's basketball movement watch",
    reportType: "conference_report",
    executiveSummary: "Fictional women's basketball programs show elevated placeholder transfer activity in the mock Network dataset.",
    supportingEvidencePlaceholder: ["Mock trend signal", "Mock community publication"],
    confidence: "medium",
    confidenceScore: 68,
    referencesPlaceholder: ["Mock public report reference"],
    sportIds: ["womens-basketball"],
    programs: ["Sample U"],
    athletes: [],
    tags: ["conference", "women-basketball"],
    visibility: "public",
    versionHistoryPlaceholder: ["v1 mock publication"],
    author: mockNetworkProfiles[1],
    informationType: "historical_context",
    evidence: { ...evidence, evidenceCount: 3, sourceCount: 1 },
    publishedAt: now,
    isMock: true
  }
];

export const mockFeedItems: FeedItem[] = [
  {
    id: "mock-feed-report",
    itemType: "published_report",
    title: "Mock Analyst published a transfer fit report",
    summary: "Structured mock analysis connected to roster need, confidence, and evidence placeholders.",
    timestamp: now,
    evidence,
    confidence: "medium",
    confidenceScore: 72,
    author: mockNetworkProfiles[0],
    relatedProgram: "Mock State",
    relatedAthlete: "Mock Transfer Tackle",
    sportId: "football",
    explainThis: "The feed item is ranked because evidence count, report quality, and roster relevance are high in mock data.",
    informationType: "analysis",
    isMock: true
  },
  {
    id: "mock-feed-ai",
    itemType: "ai_insight",
    title: "Athena summarized mock community intelligence",
    summary: "AI summary separates verified placeholders from forward-looking scenarios.",
    timestamp: now,
    evidence: { ...evidence, sourceCount: 0, label: "AI summary with evidence placeholders" },
    confidence: "medium",
    confidenceScore: 66,
    author: mockNetworkProfiles[1],
    relatedProgram: "Sample U",
    relatedAthlete: "N/A",
    sportId: "softball",
    explainThis: "Athena can summarize community intelligence but cannot publish claims without Intelligence Core review.",
    informationType: "mock",
    isMock: true
  }
];

export const mockWatchlists: SharedWatchlist[] = [
  {
    id: "mock-watchlist-players",
    title: "Mock high-evidence transfer watchlist",
    watchlistType: "athlete",
    owner: mockNetworkProfiles[0],
    sportIds: ["football", "mens-basketball"],
    items: ["Mock Transfer Tackle", "Mock Guard Prospect", "Mock Pitcher"],
    sharing: "public",
    pinned: true,
    sorting: "Evidence count desc",
    filtering: ["medium+ confidence", "source-linked"],
    collaborationPlaceholder: "Future invited collaborators",
    commentsPlaceholder: 4,
    exportPlaceholder: "CSV/PDF export placeholder",
    confidence: "medium",
    isMock: true
  }
];

export const mockCommunities: NetworkCommunity[] = [
  {
    id: "mock-community-football",
    name: "Football Intelligence",
    sportId: "football",
    trendingTopics: ["Roster risk", "Transfer fit", "Portal class movement"],
    featuredReports: [mockNetworkReports[0]],
    featuredContributors: [mockNetworkProfiles[0]],
    marketMovers: ["Mock State OL need", "Example Tech DB depth"],
    transferActivity: "Mock football activity is elevated in roster-risk topics.",
    recentPublications: ["Mock transfer analysis"],
    communityCalendarPlaceholder: ["Mock portal window watch", "Mock report review hour"],
    isMock: true
  },
  {
    id: "mock-community-softball",
    name: "Softball Intelligence",
    sportId: "softball",
    trendingTopics: ["Pitcher depth", "Lineup flexibility", "Regional pipelines"],
    featuredReports: [mockNetworkReports[1]],
    featuredContributors: [mockNetworkProfiles[1]],
    marketMovers: ["Sample U pitcher depth"],
    transferActivity: "Mock softball activity centers on pitcher-depth context.",
    recentPublications: ["Mock historical context"],
    communityCalendarPlaceholder: ["Mock community calendar placeholder"],
    isMock: true
  },
  {
    id: "mock-community-mens-basketball",
    name: "Men's Basketball Intelligence",
    sportId: "mens-basketball",
    trendingTopics: ["Rotation fit", "Guard movement", "Frontcourt scarcity"],
    featuredReports: [mockNetworkReports[0]],
    featuredContributors: [mockNetworkProfiles[0]],
    marketMovers: ["Mock Guard Prospect", "Example Tech rotation"],
    transferActivity: "Mock men's basketball activity centers on rotation fit.",
    recentPublications: ["Mock rotation analysis"],
    communityCalendarPlaceholder: ["Mock transfer window watch"],
    isMock: true
  },
  {
    id: "mock-community-womens-basketball",
    name: "Women's Basketball Intelligence",
    sportId: "womens-basketball",
    trendingTopics: ["Conference movement", "Backcourt depth", "Historical context"],
    featuredReports: [mockNetworkReports[1]],
    featuredContributors: [mockNetworkProfiles[1]],
    marketMovers: ["Sample U backcourt watch"],
    transferActivity: "Mock women's basketball activity is rising around conference reports.",
    recentPublications: ["Mock conference report"],
    communityCalendarPlaceholder: ["Mock report review"],
    isMock: true
  },
  {
    id: "mock-community-baseball",
    name: "Baseball Intelligence",
    sportId: "baseball",
    trendingTopics: ["Pitching depth", "Lineup flexibility", "Regional recruiting"],
    featuredReports: [mockNetworkReports[0]],
    featuredContributors: [mockNetworkProfiles[0]],
    marketMovers: ["Mock Pitcher", "Mock utility bat"],
    transferActivity: "Mock baseball activity focuses on pitcher-depth and lineup flexibility.",
    recentPublications: ["Mock baseball pipeline note"],
    communityCalendarPlaceholder: ["Mock recruiting calendar placeholder"],
    isMock: true
  }
];

export const mockNetworkNotifications: NetworkNotification[] = [
  { id: "mock-network-notification-1", category: "report_published", title: "Mock report published", summary: "A watched program appeared in a new mock report.", confidence: "medium", readPlaceholder: false, createdAt: now, isMock: true },
  { id: "mock-network-notification-2", category: "ai_recommendation", title: "Athena recommendation placeholder", summary: "Review a mock watchlist with rising evidence density.", confidence: "low", readPlaceholder: false, createdAt: now, isMock: true }
];

export const mockModerationQueue: ModerationQueueItem[] = [
  { id: "mock-moderation-report", queueType: "report_review", title: "Mock NIL trend report requires evidence review", reason: "NIL-adjacent claims need stronger source placeholders.", status: "pending_review", confidence: "low", isMock: true },
  { id: "mock-moderation-verify", queueType: "professional_verification", title: "Professional verification placeholder", reason: "Future workflow for media/professional verification.", status: "approved_mock", confidence: "medium", isMock: true }
];

export const mockKnowledgeExchange: KnowledgeExchangeItem[] = [
  { id: "mock-exchange-report", title: "Top mock report", summary: "Transfer fit report with high evidence density.", itemType: "top_report", confidence: "medium", isMock: true },
  { id: "mock-exchange-analyst", title: "Featured mock analyst", summary: "Contributor with strong evidence quality indicators.", itemType: "featured_analyst", confidence: "medium", isMock: true },
  { id: "mock-exchange-storyline", title: "Emerging mock storyline", summary: "Softball pitcher-depth conversations are rising in mock community activity.", itemType: "emerging_storyline", confidence: "low", isMock: true }
];

export const mockNetworkAIBriefing: NetworkAIBriefing = {
  id: "mock-network-ai-briefing",
  title: "Athena Network Summary",
  summary: "Mock community intelligence is strongest where reports include evidence placeholders, confidence labels, and clear separation between analysis and projections.",
  verifiedFacts: ["Verified placeholder: no real claims are included.", "Verified placeholder: all data is mock."],
  projections: ["Projection placeholder: evidence-dense reports would receive higher distribution in future ranking."],
  confidence: "medium",
  explainThis: "Athena summarizes Network activity but cannot confirm facts or bypass the Intelligence Core.",
  sourceCount: 0,
  evidenceCount: 7,
  isMock: true
};

export const mockNetworkDashboard: NetworkDashboardData = {
  todayIntelligence: mockFeedItems,
  trendingPlayers: ["Mock Transfer Tackle", "Mock Guard Prospect", "Mock Pitcher"],
  trendingPrograms: ["Mock State", "Sample U", "Example Tech"],
  trendingDiscussions: ["Evidence quality", "Roster fit", "Pitcher depth"],
  latestReports: mockNetworkReports,
  expertAnalysis: [mockNetworkReports[0]],
  communityActivity: mockFeedItems,
  aiSummary: mockNetworkAIBriefing,
  evidenceFeed: [evidence, { ...evidence, evidenceCount: 2, sourceCount: 1, hasContradictions: true, label: "Mock conflict flag" }],
  confidenceFeed: [
    { label: "Published reports", confidence: "medium", score: 72, isMock: true },
    { label: "Community activity", confidence: "low", score: 54, isMock: true }
  ],
  recommendedReads: mockNetworkReports,
  popularWatchlists: mockWatchlists,
  recentPublications: mockNetworkReports,
  communities: mockCommunities,
  profiles: mockNetworkProfiles,
  notifications: mockNetworkNotifications,
  moderationQueue: mockModerationQueue,
  knowledgeExchange: mockKnowledgeExchange,
  isMock: true
};
