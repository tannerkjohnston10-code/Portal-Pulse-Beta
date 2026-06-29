import { IntelligenceCore } from "@/platform/intelligence/core/intelligence-core";

export const IntelligenceSDK = {
  version: "v1",
  core: IntelligenceCore,
  generatePlayerIntelligence: (playerId: string) => IntelligenceCore.generatePlayerIntelligence(playerId),
  generateTeamIntelligence: (teamId: string) => IntelligenceCore.generateTeamIntelligence(teamId),
  generateCommandCenterSnapshot: () => IntelligenceCore.generateCommandCenterSnapshot(),
  generateDailyBriefing: (userId?: string) => IntelligenceCore.generateDailyBriefing(userId),
  generateConferenceSummary: (conferenceId: string) => IntelligenceCore.generateConferenceSummary(conferenceId),
  generateRankingExplanation: (rankingId: string) => IntelligenceCore.generateRankingExplanation(rankingId),
  generateInsight: (subjectId: string) => IntelligenceCore.generateInsight(subjectId),
  explainPrediction: (predictionId: string) => IntelligenceCore.explainPrediction(predictionId),
  calculateImportance: (subjectId: string) => IntelligenceCore.calculateImportance(subjectId),
  recommendNextActions: (subjectId: string) => IntelligenceCore.recommendNextActions(subjectId)
};
