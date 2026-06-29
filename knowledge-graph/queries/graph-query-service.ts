import { mockGraphEntities, mockGraphRelationships } from "@/platform/knowledge-graph/core/mock-graph-data";
import { relationshipService } from "@/platform/knowledge-graph/relationships/relationship-service";
import type { GraphNetwork } from "@/platform/knowledge-graph/core/graph-types";

function network(subjectId: string, title: string): GraphNetwork {
  const relationships = relationshipService.getRelationshipsForEntity(subjectId);
  const entityIds = new Set([subjectId, ...relationships.flatMap((relationship) => [relationship.fromEntityId, relationship.toEntityId])]);
  const entities = mockGraphEntities.filter((entity) => entityIds.has(entity.id));
  return {
    id: `mock-network-${subjectId}`,
    subjectId,
    title,
    entities,
    relationships,
    summary: `Mock graph network for ${title}. Relationships are source-backed placeholders or clearly marked inferred/mock.`,
    sourceCount: new Set(relationships.flatMap((relationship) => relationship.sourceIds)).size,
    evidenceCount: relationships.reduce((sum, relationship) => sum + relationship.evidenceIds.length, 0),
    confidenceScore: relationships.length ? Math.round(relationships.reduce((sum, relationship) => sum + relationship.confidenceScore, 0) / relationships.length) : 0,
    isMock: true
  };
}

export const graphQueryService = {
  findPlayerNetwork: (playerId: string) => network(playerId, "Mock player network"),
  findTeamNetwork: (teamId: string) => network(teamId, "Mock team network"),
  findCoachNetwork: (coachId: string) => network(coachId, "Mock coach network"),
  findRecruitingPipeline: (teamId: string) => network(teamId, "Mock recruiting pipeline"),
  findSharedTargets: (teamAId: string, teamBId: string) => ({
    id: `mock-shared-targets-${teamAId}-${teamBId}`,
    teams: [teamAId, teamBId],
    players: mockGraphRelationships.filter((relationship) => relationship.relationshipType === "TEAM_COMPETING_FOR_PLAYER").map((relationship) => relationship.toEntityId),
    isMock: true
  }),
  findPlayersConnectedToCoach: (coachId: string) => mockGraphRelationships.filter((relationship) => relationship.fromEntityId === coachId || relationship.toEntityId === coachId).filter((relationship) => relationship.relationshipType.includes("PLAYER")),
  findPlayersFromRegion: (regionId: string) => mockGraphRelationships.filter((relationship) => relationship.relationshipType === "PLAYER_FROM_REGION" && relationship.toEntityId === regionId),
  findTeamsCompetingForPlayer: (playerId: string) => mockGraphRelationships.filter((relationship) => relationship.relationshipType === "TEAM_COMPETING_FOR_PLAYER" && relationship.toEntityId === playerId),
  findConferenceTransferFlow: (conferenceId: string) => network(conferenceId, "Mock conference transfer flow"),
  findRelationshipPath: (fromEntityId: string, toEntityId: string) => mockGraphRelationships.filter((relationship) => relationship.fromEntityId === fromEntityId || relationship.toEntityId === toEntityId),
  findStrongestRelationships: (entityId: string) => relationshipService.getStrongestRelationships(entityId),
  findWeakOrConflictingRelationships: (entityId: string) => relationshipService.getWeakOrConflictingRelationships(entityId)
};

