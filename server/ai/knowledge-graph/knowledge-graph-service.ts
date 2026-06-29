import type { KnowledgeGraphQuery } from "./graph-types";
import type { GraphEdge, GraphNode, KnowledgeGraphQueryResult } from "@/server/ai/types";

const mockNodes: GraphNode[] = [
  { id: "mock-player", type: "player", label: "Mock Player", isMock: true },
  { id: "mock-school", type: "school", label: "Mock State", isMock: true },
  { id: "mock-coach", type: "coach", label: "Mock Coach", isMock: true }
];

const mockEdges: GraphEdge[] = [
  {
    id: "mock-edge-player-school",
    fromNodeId: "mock-player",
    toNodeId: "mock-school",
    relationshipType: "player_school",
    confidenceScore: 35,
    sourceIds: ["mock-source"],
    isMock: true
  }
];

export const knowledgeGraphService = {
  async query(query: KnowledgeGraphQuery, _subjectId: string): Promise<KnowledgeGraphQueryResult> {
    return {
      nodes: mockNodes,
      edges: mockEdges,
      explanation: `Mock graph result for ${query}. Future implementation should query PostgreSQL relationship tables and optional graph indexes.`,
      isMock: true
    };
  },

  async findSchoolsConnectedToPlayer(playerId: string) {
    return knowledgeGraphService.query("schools_for_player", playerId);
  },

  async findCoachesConnectedToPlayer(playerId: string) {
    return knowledgeGraphService.query("coaches_for_player", playerId);
  },

  async findPlayersTransferredWithCoach(coachId: string) {
    return knowledgeGraphService.query("players_transferred_with_coach", coachId);
  },

  async findSchoolsCompetingForPlayer(playerId: string) {
    return knowledgeGraphService.query("schools_competing_for_player", playerId);
  },

  async findTeammatesEnteringPortal(playerId: string) {
    return knowledgeGraphService.query("teammates_entering_portal", playerId);
  },

  async findRecruitingPipelines(schoolId: string) {
    return knowledgeGraphService.query("recruiting_pipelines", schoolId);
  },

  async findCoachingTrees(coachId: string) {
    return knowledgeGraphService.query("coaching_trees", coachId);
  },

  async findConferenceMovementTrends(conferenceId: string) {
    return knowledgeGraphService.query("conference_movement_trends", conferenceId);
  }
};
