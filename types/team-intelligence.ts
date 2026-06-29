import type { ConfidenceLevel, Sport } from "@/types/portal";

export type TeamNeedUrgency = "critical" | "high" | "moderate" | "stable" | "surplus";
export type TeamTimelineEventType = "portal_entry" | "commitment" | "coaching_change" | "nil_development" | "roster_update" | "ranking_change" | "prediction_change";

export type TeamScore = {
  overall: number;
  weeklyTrend: number;
  monthlyTrend: number;
  factors: Array<{
    label: string;
    score: number;
    isMock: true;
  }>;
  history: number[];
  isMock: true;
};

export type TeamRosterIntelligence = {
  returningStarters: number;
  incomingTransfers: number;
  outgoingTransfers: number;
  freshmen: number;
  seniorsGraduating: number;
  scholarshipCount: number;
  openScholarships: number;
  positionBreakdown: Array<{
    position: string;
    total: number;
    transfersIn: number;
    transfersOut: number;
    experienceScore: number;
    isMock: true;
  }>;
  experienceDistribution: Array<{
    label: string;
    count: number;
    isMock: true;
  }>;
  isMock: true;
};

export type TeamDepthChartGroup = {
  phase: "offense" | "defense" | "special_teams";
  positions: Array<{
    position: string;
    projectedStarter: string;
    competitionLevel: TeamNeedUrgency;
    experience: string;
    transferAdditions: number;
    rosterConfidence: number;
    aiConfidence: ConfidenceLevel;
    isMock: true;
  }>;
  isMock: true;
};

export type TeamTimelineEvent = {
  id: string;
  date: string;
  eventType: TeamTimelineEventType;
  summary: string;
  confidence: ConfidenceLevel;
  sourceCount: number;
  relatedPlayers: string[];
  isMock: true;
};

export type TeamNeedItem = {
  id: string;
  position: string;
  urgency: TeamNeedUrgency;
  urgencyScore: number;
  currentDepth: number;
  transferTargets: string[];
  projectedImpact: number;
  scholarshipAvailability: number;
  confidence: ConfidenceLevel;
  isMock: true;
};

export type TeamPortalClass = {
  totalCommits: number;
  averageTransferRating: number;
  averagePortalPulseScore: number;
  offenseCommits: number;
  defenseCommits: number;
  positionsFilled: string[];
  geographicMapLabel: string;
  conferenceComparisonRank: number;
  nationalComparisonRank: number;
  isMock: true;
};

export type TeamMomentum = {
  weeklyMomentum: number;
  monthlyMomentum: number;
  commitmentMomentum: number;
  visitMomentum: number;
  predictionMomentum: number;
  portalActivityScore: number;
  sourceActivityScore: number;
  sparkline: number[];
  movement: "up" | "down" | "flat";
  isMock: true;
};

export type CoachingIntelligence = {
  headCoach: string;
  coordinators: string[];
  tenure: string;
  transferSuccessScore: number;
  recruitingProfile: string;
  portalTendencies: string[];
  coachingTree: string[];
  isMock: true;
};

export type TeamAIStoryline = {
  id: string;
  title: string;
  summary: string;
  confidence: ConfidenceLevel;
  confidenceScore: number;
  evidenceCount: number;
  relatedPlayers: string[];
  relatedPositions: string[];
  sourceCount: number;
  isMock: true;
};

export type RecruitingPipeline = {
  recruitingClassRank: string;
  transferClassRank: string;
  highSchoolPipeline: string[];
  statePipeline: string[];
  juniorCollegePipeline: string[];
  coachingRelationships: string[];
  isMock: true;
};

export type ConferenceComparisonItem = {
  team: string;
  portalAdditions: number;
  portalLosses: number;
  rosterScore: number;
  teamScore: number;
  positionalStrength: number;
  momentum: number;
  recruitingBalance: number;
  isMock: true;
};

export type TeamComparisonItem = {
  metric: string;
  teamValue: string;
  peerValue: string;
  leader: "team" | "peer" | "even";
  isMock: true;
};

export type TeamIntelligenceProfile = {
  id: string;
  schoolName: string;
  logoInitials: string;
  sport: Sport;
  conference: string;
  headCoach: string;
  nationalTransferRanking: number;
  conferenceRanking: number;
  portalGrade: string;
  lastUpdated: string;
  teamScore: TeamScore;
  roster: TeamRosterIntelligence;
  depthChart: TeamDepthChartGroup[];
  timeline: TeamTimelineEvent[];
  needs: TeamNeedItem[];
  portalClass: TeamPortalClass;
  momentum: TeamMomentum;
  coaching: CoachingIntelligence;
  aiStorylines: TeamAIStoryline[];
  recruitingPipeline: RecruitingPipeline;
  conferenceComparison: ConferenceComparisonItem[];
  teamComparison: TeamComparisonItem[];
  isMock: true;
};
