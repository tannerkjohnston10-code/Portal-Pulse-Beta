import type { ConfidenceLevel } from "@/types/portal";
import type { SportId } from "@/platform/sports/sport-types";

export type NetworkUserRole = "fan" | "analyst" | "media" | "coach_placeholder" | "administrator_placeholder" | "researcher" | "developer" | "enterprise_placeholder";
export type NetworkVisibility = "public" | "unlisted" | "private_placeholder" | "workspace_placeholder";
export type NetworkInformationType = "verified_placeholder" | "analysis" | "projection" | "simulation" | "historical_context" | "mock";
export type ReportType = "player_evaluation" | "program_analysis" | "recruiting_report" | "transfer_analysis" | "nil_trend_report" | "historical_comparison" | "conference_report" | "market_analysis";
export type WatchlistType = "athlete" | "program" | "conference" | "position" | "transfer";
export type FeedItemType = "transfer_update" | "program_news" | "published_report" | "ai_insight" | "watchlist_change" | "trending_analysis" | "historical_highlight" | "community_publication";
export type NotificationCategory = "mention" | "watchlist_update" | "transfer_activity" | "report_published" | "report_shared" | "program_update" | "community_activity" | "ai_recommendation" | "verification_update_placeholder";
export type ModerationStatus = "pending_review" | "approved_mock" | "needs_evidence" | "flagged" | "appeal_placeholder";

export type ReputationProfile = {
  score: number;
  contributionLevel: "emerging" | "trusted" | "expert" | "professional_placeholder";
  verificationStatus: "unverified" | "verified_placeholder" | "professional_placeholder";
  expertiseAreas: string[];
  trustIndicators: string[];
  factors: Array<{ label: string; score: number; explanation: string; isMock: true }>;
  isMock: true;
};

export type NetworkUserProfile = {
  id: string;
  displayName: string;
  biography: string;
  role: NetworkUserRole;
  sportIds: SportId[];
  favoritePrograms: string[];
  expertiseTags: string[];
  verifiedPlaceholder: boolean;
  following: number;
  followers: number;
  savedReports: number;
  publishedReports: number;
  sharedWatchlists: number;
  reputation: ReputationProfile;
  contributionHistory: string[];
  recentActivity: string[];
  bookmarks: string[];
  aiPreferences: string[];
  profileBanner: string;
  profilePhotoPlaceholder: string;
  isMock: true;
};

export type EvidenceIndicator = {
  evidenceCount: number;
  sourceCount: number;
  hasContradictions: boolean;
  verifiedPlaceholder: boolean;
  label: string;
  isMock: true;
};

export type NetworkReport = {
  id: string;
  title: string;
  reportType: ReportType;
  executiveSummary: string;
  supportingEvidencePlaceholder: string[];
  confidence: ConfidenceLevel;
  confidenceScore: number;
  referencesPlaceholder: string[];
  sportIds: SportId[];
  programs: string[];
  athletes: string[];
  tags: string[];
  visibility: NetworkVisibility;
  versionHistoryPlaceholder: string[];
  author: NetworkUserProfile;
  informationType: NetworkInformationType;
  evidence: EvidenceIndicator;
  publishedAt: string;
  isMock: true;
};

export type FeedItem = {
  id: string;
  itemType: FeedItemType;
  title: string;
  summary: string;
  timestamp: string;
  evidence: EvidenceIndicator;
  confidence: ConfidenceLevel;
  confidenceScore: number;
  author: NetworkUserProfile;
  relatedProgram: string;
  relatedAthlete: string;
  sportId: SportId;
  explainThis: string;
  informationType: NetworkInformationType;
  isMock: true;
};

export type SharedWatchlist = {
  id: string;
  title: string;
  watchlistType: WatchlistType;
  owner: NetworkUserProfile;
  sportIds: SportId[];
  items: string[];
  sharing: NetworkVisibility;
  pinned: boolean;
  sorting: string;
  filtering: string[];
  collaborationPlaceholder: string;
  commentsPlaceholder: number;
  exportPlaceholder: string;
  confidence: ConfidenceLevel;
  isMock: true;
};

export type NetworkCommunity = {
  id: string;
  name: string;
  sportId: SportId;
  trendingTopics: string[];
  featuredReports: NetworkReport[];
  featuredContributors: NetworkUserProfile[];
  marketMovers: string[];
  transferActivity: string;
  recentPublications: string[];
  communityCalendarPlaceholder: string[];
  isMock: true;
};

export type NetworkNotification = {
  id: string;
  category: NotificationCategory;
  title: string;
  summary: string;
  confidence: ConfidenceLevel;
  readPlaceholder: boolean;
  createdAt: string;
  isMock: true;
};

export type ModerationQueueItem = {
  id: string;
  queueType: "report_review" | "evidence_verification" | "community_standards" | "professional_verification" | "content_flagging" | "appeal";
  title: string;
  reason: string;
  status: ModerationStatus;
  confidence: ConfidenceLevel;
  isMock: true;
};

export type KnowledgeExchangeItem = {
  id: string;
  title: string;
  summary: string;
  itemType: "top_report" | "editors_pick_placeholder" | "featured_analyst" | "trending_insight" | "emerging_storyline" | "historical_perspective" | "trusted_contributor";
  confidence: ConfidenceLevel;
  isMock: true;
};

export type NetworkAIBriefing = {
  id: string;
  title: string;
  summary: string;
  verifiedFacts: string[];
  projections: string[];
  confidence: ConfidenceLevel;
  explainThis: string;
  sourceCount: number;
  evidenceCount: number;
  isMock: true;
};

export type NetworkDashboardData = {
  todayIntelligence: FeedItem[];
  trendingPlayers: string[];
  trendingPrograms: string[];
  trendingDiscussions: string[];
  latestReports: NetworkReport[];
  expertAnalysis: NetworkReport[];
  communityActivity: FeedItem[];
  aiSummary: NetworkAIBriefing;
  evidenceFeed: EvidenceIndicator[];
  confidenceFeed: Array<{ label: string; confidence: ConfidenceLevel; score: number; isMock: true }>;
  recommendedReads: NetworkReport[];
  popularWatchlists: SharedWatchlist[];
  recentPublications: NetworkReport[];
  communities: NetworkCommunity[];
  profiles: NetworkUserProfile[];
  notifications: NetworkNotification[];
  moderationQueue: ModerationQueueItem[];
  knowledgeExchange: KnowledgeExchangeItem[];
  isMock: true;
};
