import { knowledgeGraphService } from "@/platform/knowledge-graph/core/knowledge-graph-service";

export const KnowledgeGraphSDK = {
  version: "v1",
  overview: knowledgeGraphService.getOverview,
  entities: knowledgeGraphService.getEntities,
  relationships: knowledgeGraphService.getRelationships,
  findPlayerNetwork: knowledgeGraphService.queries.findPlayerNetwork,
  findTeamNetwork: knowledgeGraphService.queries.findTeamNetwork,
  findCoachNetwork: knowledgeGraphService.queries.findCoachNetwork,
  findRecruitingPipeline: knowledgeGraphService.queries.findRecruitingPipeline,
  findSharedTargets: knowledgeGraphService.queries.findSharedTargets,
  findPlayersConnectedToCoach: knowledgeGraphService.queries.findPlayersConnectedToCoach,
  findPlayersFromRegion: knowledgeGraphService.queries.findPlayersFromRegion,
  findTeamsCompetingForPlayer: knowledgeGraphService.queries.findTeamsCompetingForPlayer,
  findConferenceTransferFlow: knowledgeGraphService.queries.findConferenceTransferFlow,
  findRelationshipPath: knowledgeGraphService.queries.findRelationshipPath,
  findStrongestRelationships: knowledgeGraphService.queries.findStrongestRelationships,
  findWeakOrConflictingRelationships: knowledgeGraphService.queries.findWeakOrConflictingRelationships,
  resolveAlias: knowledgeGraphService.resolution.resolveAlias
};
