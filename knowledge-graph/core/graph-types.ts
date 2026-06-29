import type { SportId } from "@/platform/sports/sport-types";

export type GraphEntityType =
  | "Player"
  | "Team"
  | "School"
  | "Conference"
  | "Coach"
  | "Position"
  | "Sport"
  | "HighSchool"
  | "RecruitingClass"
  | "NILCollective"
  | "Brand"
  | "Source"
  | "Claim"
  | "Visit"
  | "Prediction"
  | "TimelineEvent"
  | "Region"
  | "State"
  | "City"
  | "TransferClass"
  | "RosterSpot";

export type GraphRelationshipType =
  | "PLAYER_ATTENDED_SCHOOL"
  | "PLAYER_PLAYED_FOR_TEAM"
  | "PLAYER_ENTERED_PORTAL"
  | "PLAYER_COMMITTED_TO"
  | "PLAYER_VISITED_TEAM"
  | "PLAYER_INTERESTED_IN_TEAM"
  | "PLAYER_LINKED_TO_COACH"
  | "PLAYER_TEAMMATE_OF"
  | "PLAYER_FROM_HIGHSCHOOL"
  | "PLAYER_FROM_REGION"
  | "PLAYER_HAS_POSITION"
  | "PLAYER_HAS_NIL_CONNECTION"
  | "TEAM_MEMBER_OF_CONFERENCE"
  | "TEAM_HAS_COACH"
  | "COACH_WORKED_AT_SCHOOL"
  | "COACH_RECRUITED_PLAYER"
  | "COACH_CONNECTED_TO_PLAYER"
  | "TEAM_NEEDS_POSITION"
  | "TEAM_COMPETING_FOR_PLAYER"
  | "TEAM_GAINED_PLAYER"
  | "TEAM_LOST_PLAYER"
  | "SOURCE_SUPPORTS_CLAIM"
  | "CLAIM_SUPPORTS_RELATIONSHIP"
  | "PREDICTION_INVOLVES_PLAYER"
  | "PREDICTION_INVOLVES_TEAM"
  | "TIMELINE_EVENT_INVOLVES_ENTITY";

export type GraphRelationshipStatus = "proposed" | "verified" | "disputed" | "stale" | "needs_review" | "rejected";
export type GraphRelationshipStrengthLabel = "Strong" | "Moderate" | "Weak" | "Inferred" | "Conflicting" | "Unknown";

export type GraphEntity = {
  id: string;
  entityType: GraphEntityType;
  displayName: string;
  aliases: string[];
  sportId: SportId;
  seasonId: string;
  conferenceId: string;
  division: string;
  programId: string;
  confidenceScore: number;
  sourceIds: string[];
  createdAt: string;
  updatedAt: string;
  isMock: true;
};

export type GraphRelationship = {
  id: string;
  relationshipType: GraphRelationshipType;
  fromEntityId: string;
  toEntityId: string;
  direction: "directed" | "bidirectional";
  strengthScore: number;
  confidenceScore: number;
  evidenceIds: string[];
  sourceIds: string[];
  firstSeenAt: string;
  lastSeenAt: string;
  status: GraphRelationshipStatus;
  isInferred: boolean;
  isMock: true;
};

export type GraphEvidence = {
  id: string;
  relationshipId: string;
  summary: string;
  sourceIds: string[];
  claimIds: string[];
  contradictionCount: number;
  reliabilityScore: number;
  isMock: true;
};

export type GraphNetwork = {
  id: string;
  subjectId: string;
  title: string;
  entities: GraphEntity[];
  relationships: GraphRelationship[];
  summary: string;
  sourceCount: number;
  evidenceCount: number;
  confidenceScore: number;
  isMock: true;
};

export type LibrarianRelationshipFinding = {
  id: string;
  title: string;
  summary: string;
  proposedRelationshipIds: string[];
  duplicateEntityIds: string[];
  weakRelationshipIds: string[];
  importantNetworkEntityIds: string[];
  explanation: string;
  submittedToCore: true;
  isMock: true;
};
