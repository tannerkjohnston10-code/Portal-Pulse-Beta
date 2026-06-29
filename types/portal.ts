export type Sport = "Football" | "Men's Basketball" | "Women's Basketball" | "Baseball" | "Softball" | "Unknown";

export type Conference = string;

export type School = {
  id: string;
  name: string;
  conference: Conference;
  isMock?: boolean;
};

export type PortalStatus = "entered" | "available" | "committed" | "signed" | "enrolled" | "withdrawn" | "unknown";

export type ConfidenceLevel = "high" | "medium" | "low" | "conflicting" | "unknown";

export type ClaimStatus = "confirmed" | "reported" | "rumored" | "estimated" | "disputed" | "needs_review" | "unknown";

export type SourceType =
  | "official_school"
  | "player_statement"
  | "coach_statement"
  | "verified_reporter"
  | "recruiting_site"
  | "news_article"
  | "podcast"
  | "social_media"
  | "message_board"
  | "unknown";

export type NILStatus = "confirmed" | "reported" | "estimated" | "rumored" | "unknown";

export type VisitType = "official" | "unofficial" | "in_home" | "virtual" | "unknown";

export type PredictionType = "commitment" | "visit" | "nil" | "roster_fit" | "team_ranking";

export type MovementType = "entry" | "commitment" | "visit" | "interest" | "withdrawal" | "nil" | "prediction";

export type ClaimType =
  | "portal_entry"
  | "commitment"
  | "team_interest"
  | "visit"
  | "nil_report"
  | "offer"
  | "roster_status"
  | "roster_change"
  | "prediction_update"
  | "ranking_update"
  | "coach_connection"
  | "recruiting_relationship";

export type SubjectType = "player" | "team" | "school" | "conference" | "prediction" | "nil_report" | "visit";

export type Source = {
  id: string;
  label: string;
  url: string;
  type: SourceType;
  lastUpdated: string;
  confidence: ConfidenceLevel;
  isMock: true;
};

export type Claim = {
  id: string;
  claimType: ClaimType;
  subjectType: SubjectType;
  subjectId: string;
  value: string;
  status: ClaimStatus;
  confidenceLevel: ConfidenceLevel;
  confidenceScore: number;
  sourceIds: string[];
  firstSeenAt: string;
  lastSeenAt: string;
  reviewedBy?: string;
  reviewedAt?: string;
  notes?: string;
  isMock: true;
};

export type TeamInterest = {
  team: string;
  interestLevel: ConfidenceLevel;
  probability: number;
  isMock: true;
};

export type PlayerMovement = {
  id: string;
  playerId: string;
  movementType: MovementType;
  fromSchool?: string;
  toSchool?: string;
  occurredAt: string;
  claimId?: string;
  isMock: true;
};

export type Player = {
  id: string;
  name: string;
  sport: Sport;
  position: string;
  classYear: string;
  previousSchool: string;
  currentStatus: PortalStatus;
  conference: Conference;
  commitmentProbability: number;
  nilStatus: NILStatus;
  confidence: ConfidenceLevel;
  confidenceScore: number;
  lastUpdated: string;
  interestedTeams: TeamInterest[];
  isMock: true;
  source: Source;
};

export type Team = {
  id: string;
  name: string;
  conference: Conference;
  sport: Sport;
  isMock: true;
};

export type RosterNeed = {
  id: string;
  teamId: string;
  position: string;
  priority: "high" | "medium" | "low";
  notes?: string;
  isMock: true;
};

export type DepthChartPosition = {
  id: string;
  teamId: string;
  position: string;
  playerName?: string;
  order: number;
  status: "projected" | "confirmed" | "unknown";
  isMock: true;
};

export type TimelineEvent = {
  id: string;
  subjectId: string;
  subjectType: SubjectType;
  title: string;
  detail: string;
  timestamp: string;
  confidence: ConfidenceLevel;
  claimId?: string;
  isMock: true;
};

export type NewsUpdate = {
  id: string;
  playerName: string;
  movementType: MovementType;
  team: string;
  confidence: ConfidenceLevel;
  timestamp: string;
  sourceLabel: string;
  isMock: true;
};

export type TeamRanking = {
  id: string;
  team: string;
  sport: Sport;
  conference: Conference;
  rank: number;
  previousRank: number;
  commits: number;
  losses: number;
  netImpact: number;
  portalGrade: "A+" | "A" | "A-" | "B+" | "B" | "B-" | "C";
  projectedImpactScore: number;
  isMock: true;
};

export type NILReport = {
  id: string;
  playerId: string;
  playerName: string;
  school: string;
  sport: Sport;
  position: string;
  status: NILStatus;
  rangeLabel: string;
  confidence: ConfidenceLevel;
  confidenceScore: number;
  source: Source;
  isMock: true;
};

export type Visit = {
  id: string;
  playerId: string;
  playerName: string;
  team: string;
  date: string;
  type: VisitType;
  status: "upcoming" | "completed" | "unknown";
  confidenceScore: number;
  confidence: ConfidenceLevel;
  source: Source;
  isMock: true;
};

export type Prediction = {
  id: string;
  playerId: string;
  playerName: string;
  predictionType: PredictionType;
  movement: "up" | "down" | "flat";
  confidence: ConfidenceLevel;
  confidenceScore: number;
  explanation: string;
  teamBreakdown: Array<{
    team: string;
    probability: number;
    isMock: true;
  }>;
  source: Source;
  isMock: true;
};

export type AdminClaim = {
  id: string;
  category:
    | "new_claim"
    | "low_confidence"
    | "conflicting_report"
    | "nil_review"
    | "duplicate_player"
    | "failed_source_check";
  title: string;
  entity: string;
  priority: "high" | "medium" | "low";
  confidence: ConfidenceLevel;
  timestamp: string;
  claimId?: string;
  isMock: true;
};
