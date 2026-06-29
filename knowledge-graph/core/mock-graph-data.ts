import type { GraphEntity, GraphEvidence, GraphRelationship } from "@/platform/knowledge-graph/core/graph-types";

const now = "2026-06-28T17:00:00.000Z";
const graphScope = {
  sportId: "football" as const,
  seasonId: "2026",
  conferenceId: "graph-conference-mock",
  division: "NCAA Division I placeholder",
  programId: "graph-team-state"
};

function graphEntity(entity: Omit<GraphEntity, "sportId" | "seasonId" | "conferenceId" | "division" | "programId">): GraphEntity {
  return { ...entity, ...graphScope };
}

export const mockGraphEntities: GraphEntity[] = [
  graphEntity({ id: "graph-player-alpha", entityType: "Player", displayName: "Mock Player Alpha", aliases: ["M. Player Alpha", "Alpha"], confidenceScore: 82, sourceIds: ["graph-source-1"], createdAt: now, updatedAt: now, isMock: true }),
  graphEntity({ id: "graph-team-state", entityType: "Team", displayName: "Mock State", aliases: ["MSU Mock"], confidenceScore: 88, sourceIds: ["graph-source-1"], createdAt: now, updatedAt: now, isMock: true }),
  graphEntity({ id: "graph-school-state", entityType: "School", displayName: "Mock State University", aliases: ["Mock State"], confidenceScore: 90, sourceIds: ["graph-source-1"], createdAt: now, updatedAt: now, isMock: true }),
  graphEntity({ id: "graph-conference-mock", entityType: "Conference", displayName: "Mock Conference", aliases: ["MC"], confidenceScore: 86, sourceIds: ["graph-source-2"], createdAt: now, updatedAt: now, isMock: true }),
  graphEntity({ id: "graph-coach-river", entityType: "Coach", displayName: "Coach River", aliases: ["R. River"], confidenceScore: 74, sourceIds: ["graph-source-3"], createdAt: now, updatedAt: now, isMock: true }),
  graphEntity({ id: "graph-position-qb", entityType: "Position", displayName: "Quarterback", aliases: ["QB"], confidenceScore: 92, sourceIds: ["graph-source-1"], createdAt: now, updatedAt: now, isMock: true }),
  graphEntity({ id: "graph-sport-football", entityType: "Sport", displayName: "Football", aliases: ["FB"], confidenceScore: 95, sourceIds: ["graph-source-1"], createdAt: now, updatedAt: now, isMock: true }),
  graphEntity({ id: "graph-highschool-central", entityType: "HighSchool", displayName: "Mock Central High", aliases: ["Central Mock"], confidenceScore: 70, sourceIds: ["graph-source-4"], createdAt: now, updatedAt: now, isMock: true }),
  graphEntity({ id: "graph-recruiting-2026", entityType: "RecruitingClass", displayName: "Mock 2026 Class", aliases: ["2026 Mock Class"], confidenceScore: 72, sourceIds: ["graph-source-4"], createdAt: now, updatedAt: now, isMock: true }),
  graphEntity({ id: "graph-collective-north", entityType: "NILCollective", displayName: "Mock North Collective", aliases: ["North Collective"], confidenceScore: 45, sourceIds: ["graph-source-5"], createdAt: now, updatedAt: now, isMock: true }),
  graphEntity({ id: "graph-brand-spark", entityType: "Brand", displayName: "Mock Spark Brand", aliases: ["Spark"], confidenceScore: 44, sourceIds: ["graph-source-5"], createdAt: now, updatedAt: now, isMock: true }),
  graphEntity({ id: "graph-source-1", entityType: "Source", displayName: "Mock Official Source", aliases: ["Official Mock"], confidenceScore: 92, sourceIds: ["graph-source-1"], createdAt: now, updatedAt: now, isMock: true }),
  graphEntity({ id: "graph-claim-1", entityType: "Claim", displayName: "Mock relationship claim", aliases: ["Claim 1"], confidenceScore: 68, sourceIds: ["graph-source-1"], createdAt: now, updatedAt: now, isMock: true }),
  graphEntity({ id: "graph-visit-1", entityType: "Visit", displayName: "Mock Visit", aliases: ["Visit Alpha"], confidenceScore: 62, sourceIds: ["graph-source-2"], createdAt: now, updatedAt: now, isMock: true }),
  graphEntity({ id: "graph-prediction-1", entityType: "Prediction", displayName: "Mock Projection", aliases: ["Projection Alpha"], confidenceScore: 58, sourceIds: ["graph-source-3"], createdAt: now, updatedAt: now, isMock: true }),
  graphEntity({ id: "graph-timeline-1", entityType: "TimelineEvent", displayName: "Mock Timeline Event", aliases: ["Timeline Alpha"], confidenceScore: 76, sourceIds: ["graph-source-1"], createdAt: now, updatedAt: now, isMock: true }),
  graphEntity({ id: "graph-region-midwest", entityType: "Region", displayName: "Mock Midwest", aliases: ["Midwest"], confidenceScore: 82, sourceIds: ["graph-source-4"], createdAt: now, updatedAt: now, isMock: true }),
  graphEntity({ id: "graph-state-plain", entityType: "State", displayName: "Mock State Territory", aliases: ["MST"], confidenceScore: 80, sourceIds: ["graph-source-4"], createdAt: now, updatedAt: now, isMock: true }),
  graphEntity({ id: "graph-city-river", entityType: "City", displayName: "Mock River City", aliases: ["River City"], confidenceScore: 78, sourceIds: ["graph-source-4"], createdAt: now, updatedAt: now, isMock: true }),
  graphEntity({ id: "graph-transfer-class", entityType: "TransferClass", displayName: "Mock Transfer Class", aliases: ["Portal Class"], confidenceScore: 66, sourceIds: ["graph-source-2"], createdAt: now, updatedAt: now, isMock: true }),
  graphEntity({ id: "graph-roster-spot", entityType: "RosterSpot", displayName: "Mock QB1 Roster Spot", aliases: ["QB1"], confidenceScore: 60, sourceIds: ["graph-source-2"], createdAt: now, updatedAt: now, isMock: true })
];

export const mockGraphRelationships: GraphRelationship[] = [
  { id: "rel-player-school", relationshipType: "PLAYER_ATTENDED_SCHOOL", fromEntityId: "graph-player-alpha", toEntityId: "graph-school-state", direction: "directed", strengthScore: 82, confidenceScore: 78, evidenceIds: ["evidence-rel-player-school"], sourceIds: ["graph-source-1"], firstSeenAt: now, lastSeenAt: now, status: "verified", isInferred: false, isMock: true },
  { id: "rel-player-team", relationshipType: "PLAYER_PLAYED_FOR_TEAM", fromEntityId: "graph-player-alpha", toEntityId: "graph-team-state", direction: "directed", strengthScore: 76, confidenceScore: 74, evidenceIds: ["evidence-rel-player-team"], sourceIds: ["graph-source-1"], firstSeenAt: now, lastSeenAt: now, status: "proposed", isInferred: false, isMock: true },
  { id: "rel-player-portal", relationshipType: "PLAYER_ENTERED_PORTAL", fromEntityId: "graph-player-alpha", toEntityId: "graph-timeline-1", direction: "directed", strengthScore: 70, confidenceScore: 68, evidenceIds: ["evidence-rel-player-portal"], sourceIds: ["graph-source-2"], firstSeenAt: now, lastSeenAt: now, status: "needs_review", isInferred: false, isMock: true },
  { id: "rel-player-committed", relationshipType: "PLAYER_COMMITTED_TO", fromEntityId: "graph-player-alpha", toEntityId: "graph-team-state", direction: "directed", strengthScore: 35, confidenceScore: 30, evidenceIds: ["evidence-rel-conflict"], sourceIds: ["graph-source-5"], firstSeenAt: now, lastSeenAt: now, status: "disputed", isInferred: true, isMock: true },
  { id: "rel-player-visit", relationshipType: "PLAYER_VISITED_TEAM", fromEntityId: "graph-player-alpha", toEntityId: "graph-visit-1", direction: "directed", strengthScore: 66, confidenceScore: 61, evidenceIds: ["evidence-rel-player-visit"], sourceIds: ["graph-source-2"], firstSeenAt: now, lastSeenAt: now, status: "proposed", isInferred: false, isMock: true },
  { id: "rel-player-interest", relationshipType: "PLAYER_INTERESTED_IN_TEAM", fromEntityId: "graph-player-alpha", toEntityId: "graph-team-state", direction: "directed", strengthScore: 64, confidenceScore: 58, evidenceIds: ["evidence-rel-player-interest"], sourceIds: ["graph-source-3"], firstSeenAt: now, lastSeenAt: now, status: "proposed", isInferred: true, isMock: true },
  { id: "rel-player-coach", relationshipType: "PLAYER_LINKED_TO_COACH", fromEntityId: "graph-player-alpha", toEntityId: "graph-coach-river", direction: "bidirectional", strengthScore: 57, confidenceScore: 52, evidenceIds: ["evidence-rel-player-coach"], sourceIds: ["graph-source-3"], firstSeenAt: now, lastSeenAt: now, status: "needs_review", isInferred: true, isMock: true },
  { id: "rel-player-teammate", relationshipType: "PLAYER_TEAMMATE_OF", fromEntityId: "graph-player-alpha", toEntityId: "graph-player-alpha", direction: "bidirectional", strengthScore: 45, confidenceScore: 40, evidenceIds: ["evidence-rel-weak"], sourceIds: ["graph-source-4"], firstSeenAt: now, lastSeenAt: now, status: "needs_review", isInferred: true, isMock: true },
  { id: "rel-player-highschool", relationshipType: "PLAYER_FROM_HIGHSCHOOL", fromEntityId: "graph-player-alpha", toEntityId: "graph-highschool-central", direction: "directed", strengthScore: 69, confidenceScore: 64, evidenceIds: ["evidence-rel-player-highschool"], sourceIds: ["graph-source-4"], firstSeenAt: now, lastSeenAt: now, status: "proposed", isInferred: false, isMock: true },
  { id: "rel-player-region", relationshipType: "PLAYER_FROM_REGION", fromEntityId: "graph-player-alpha", toEntityId: "graph-region-midwest", direction: "directed", strengthScore: 60, confidenceScore: 62, evidenceIds: ["evidence-rel-player-region"], sourceIds: ["graph-source-4"], firstSeenAt: now, lastSeenAt: now, status: "proposed", isInferred: true, isMock: true },
  { id: "rel-player-position", relationshipType: "PLAYER_HAS_POSITION", fromEntityId: "graph-player-alpha", toEntityId: "graph-position-qb", direction: "directed", strengthScore: 84, confidenceScore: 84, evidenceIds: ["evidence-rel-player-position"], sourceIds: ["graph-source-1"], firstSeenAt: now, lastSeenAt: now, status: "verified", isInferred: false, isMock: true },
  { id: "rel-player-nil", relationshipType: "PLAYER_HAS_NIL_CONNECTION", fromEntityId: "graph-player-alpha", toEntityId: "graph-collective-north", direction: "directed", strengthScore: 38, confidenceScore: 32, evidenceIds: ["evidence-rel-nil"], sourceIds: ["graph-source-5"], firstSeenAt: now, lastSeenAt: now, status: "needs_review", isInferred: true, isMock: true },
  { id: "rel-team-conference", relationshipType: "TEAM_MEMBER_OF_CONFERENCE", fromEntityId: "graph-team-state", toEntityId: "graph-conference-mock", direction: "directed", strengthScore: 88, confidenceScore: 86, evidenceIds: ["evidence-rel-team-conference"], sourceIds: ["graph-source-1"], firstSeenAt: now, lastSeenAt: now, status: "verified", isInferred: false, isMock: true },
  { id: "rel-team-coach", relationshipType: "TEAM_HAS_COACH", fromEntityId: "graph-team-state", toEntityId: "graph-coach-river", direction: "directed", strengthScore: 72, confidenceScore: 70, evidenceIds: ["evidence-rel-team-coach"], sourceIds: ["graph-source-1"], firstSeenAt: now, lastSeenAt: now, status: "proposed", isInferred: false, isMock: true },
  { id: "rel-coach-school", relationshipType: "COACH_WORKED_AT_SCHOOL", fromEntityId: "graph-coach-river", toEntityId: "graph-school-state", direction: "directed", strengthScore: 74, confidenceScore: 72, evidenceIds: ["evidence-rel-coach-school"], sourceIds: ["graph-source-1"], firstSeenAt: now, lastSeenAt: now, status: "proposed", isInferred: false, isMock: true },
  { id: "rel-coach-recruited", relationshipType: "COACH_RECRUITED_PLAYER", fromEntityId: "graph-coach-river", toEntityId: "graph-player-alpha", direction: "directed", strengthScore: 50, confidenceScore: 48, evidenceIds: ["evidence-rel-coach-recruited"], sourceIds: ["graph-source-3"], firstSeenAt: now, lastSeenAt: now, status: "needs_review", isInferred: true, isMock: true },
  { id: "rel-coach-connected", relationshipType: "COACH_CONNECTED_TO_PLAYER", fromEntityId: "graph-coach-river", toEntityId: "graph-player-alpha", direction: "bidirectional", strengthScore: 56, confidenceScore: 52, evidenceIds: ["evidence-rel-player-coach"], sourceIds: ["graph-source-3"], firstSeenAt: now, lastSeenAt: now, status: "needs_review", isInferred: true, isMock: true },
  { id: "rel-team-needs-position", relationshipType: "TEAM_NEEDS_POSITION", fromEntityId: "graph-team-state", toEntityId: "graph-position-qb", direction: "directed", strengthScore: 62, confidenceScore: 58, evidenceIds: ["evidence-rel-team-needs-position"], sourceIds: ["graph-source-2"], firstSeenAt: now, lastSeenAt: now, status: "proposed", isInferred: true, isMock: true },
  { id: "rel-team-competing", relationshipType: "TEAM_COMPETING_FOR_PLAYER", fromEntityId: "graph-team-state", toEntityId: "graph-player-alpha", direction: "directed", strengthScore: 65, confidenceScore: 57, evidenceIds: ["evidence-rel-team-competing"], sourceIds: ["graph-source-3"], firstSeenAt: now, lastSeenAt: now, status: "proposed", isInferred: true, isMock: true },
  { id: "rel-team-gained", relationshipType: "TEAM_GAINED_PLAYER", fromEntityId: "graph-team-state", toEntityId: "graph-player-alpha", direction: "directed", strengthScore: 40, confidenceScore: 35, evidenceIds: ["evidence-rel-conflict"], sourceIds: ["graph-source-5"], firstSeenAt: now, lastSeenAt: now, status: "disputed", isInferred: true, isMock: true },
  { id: "rel-team-lost", relationshipType: "TEAM_LOST_PLAYER", fromEntityId: "graph-team-state", toEntityId: "graph-player-alpha", direction: "directed", strengthScore: 42, confidenceScore: 36, evidenceIds: ["evidence-rel-conflict"], sourceIds: ["graph-source-5"], firstSeenAt: now, lastSeenAt: now, status: "disputed", isInferred: true, isMock: true },
  { id: "rel-source-claim", relationshipType: "SOURCE_SUPPORTS_CLAIM", fromEntityId: "graph-source-1", toEntityId: "graph-claim-1", direction: "directed", strengthScore: 80, confidenceScore: 78, evidenceIds: ["evidence-rel-source-claim"], sourceIds: ["graph-source-1"], firstSeenAt: now, lastSeenAt: now, status: "verified", isInferred: false, isMock: true },
  { id: "rel-claim-relationship", relationshipType: "CLAIM_SUPPORTS_RELATIONSHIP", fromEntityId: "graph-claim-1", toEntityId: "rel-player-school", direction: "directed", strengthScore: 70, confidenceScore: 66, evidenceIds: ["evidence-rel-claim-relationship"], sourceIds: ["graph-source-1"], firstSeenAt: now, lastSeenAt: now, status: "proposed", isInferred: false, isMock: true },
  { id: "rel-prediction-player", relationshipType: "PREDICTION_INVOLVES_PLAYER", fromEntityId: "graph-prediction-1", toEntityId: "graph-player-alpha", direction: "directed", strengthScore: 61, confidenceScore: 55, evidenceIds: ["evidence-rel-prediction-player"], sourceIds: ["graph-source-3"], firstSeenAt: now, lastSeenAt: now, status: "proposed", isInferred: false, isMock: true },
  { id: "rel-prediction-team", relationshipType: "PREDICTION_INVOLVES_TEAM", fromEntityId: "graph-prediction-1", toEntityId: "graph-team-state", direction: "directed", strengthScore: 60, confidenceScore: 54, evidenceIds: ["evidence-rel-prediction-team"], sourceIds: ["graph-source-3"], firstSeenAt: now, lastSeenAt: now, status: "proposed", isInferred: false, isMock: true },
  { id: "rel-timeline-entity", relationshipType: "TIMELINE_EVENT_INVOLVES_ENTITY", fromEntityId: "graph-timeline-1", toEntityId: "graph-player-alpha", direction: "directed", strengthScore: 73, confidenceScore: 70, evidenceIds: ["evidence-rel-timeline-entity"], sourceIds: ["graph-source-1"], firstSeenAt: now, lastSeenAt: now, status: "proposed", isInferred: false, isMock: true }
];

export const mockGraphEvidence: GraphEvidence[] = mockGraphRelationships.map((relationship) => ({
  id: relationship.evidenceIds[0],
  relationshipId: relationship.id,
  summary: `Mock evidence supporting ${relationship.relationshipType}. This is not a real relationship claim.`,
  sourceIds: relationship.sourceIds,
  claimIds: ["graph-claim-1"],
  contradictionCount: relationship.status === "disputed" ? 2 : relationship.status === "needs_review" ? 1 : 0,
  reliabilityScore: relationship.confidenceScore,
  isMock: true
}));
