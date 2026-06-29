import { insightEngine } from "@/server/ai/insights/insight-engine";
import type { AIInsight, InsightCategory, InsightEngineResult } from "@/types/insights";

export const insightService = {
  async getTopInsights(limit = 5): Promise<AIInsight[]> {
    const insights = await insightEngine.getApprovedInsights();
    return insights.slice(0, limit);
  },

  async getInsightFeed(filters?: { category?: InsightCategory; query?: string }): Promise<AIInsight[]> {
    const insights = await insightEngine.getApprovedInsights();
    const query = filters?.query?.trim().toLowerCase();

    return insights.filter((insight) => {
      const matchesCategory = filters?.category ? insight.category === filters.category : true;
      const matchesQuery = query
        ? `${insight.title} ${insight.summary} ${insight.relatedPlayers.join(" ")} ${insight.relatedTeams.join(" ")}`.toLowerCase().includes(query)
        : true;

      return matchesCategory && matchesQuery;
    });
  },

  async getEngineResult(): Promise<InsightEngineResult> {
    return insightEngine.run();
  }
};
