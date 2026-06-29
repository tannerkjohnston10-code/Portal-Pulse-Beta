import type { ClaimCandidate } from "@/server/ingestion/types";
import { intelligenceJob } from "@/server/ai/jobs/intelligence-job";
import { knowledgeGraphService } from "@/platform/knowledge-graph/core/knowledge-graph-service";
import { predictionSignalModel } from "@/server/ai/models/prediction-signals";
import { promptLibrary } from "@/server/ai/prompts/prompt-library";

export const intelligenceService = {
  async processClaimCandidates(candidates: ClaimCandidate[]) {
    return intelligenceJob.processClaimCandidates(candidates);
  },

  async getKnowledgeGraphForPlayer(playerId: string) {
    return knowledgeGraphService.queries.findPlayerNetwork(playerId);
  },

  async getPredictionSignals() {
    return predictionSignalModel.describeSignals();
  },

  async getPromptLibrary() {
    return promptLibrary;
  }
};
