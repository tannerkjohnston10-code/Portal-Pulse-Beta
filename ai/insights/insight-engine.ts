import { mockApprovedInsights, mockInsightSignals } from "@/data/mock/insights/insight-data";
import { insightGenerator } from "@/server/ai/insights/insight-generator";
import { insightRanker } from "@/server/ai/insights/insight-ranker";
import { insightValidator } from "@/server/ai/insights/insight-validator";
import type { AIInsight, InsightEngineResult, InsightSignal } from "@/types/insights";

export const insightEngine = {
  async gatherCandidateSignals(): Promise<InsightSignal[]> {
    // TODO: Gather verified claim deltas, source velocity, prediction movement, NIL labels, and watchlist relevance.
    return mockInsightSignals;
  },

  async groupRelatedSignals(signals: InsightSignal[]): Promise<InsightSignal[]> {
    // TODO: Cluster by subject, team, conference, claim type, and time window.
    return insightRanker.rankSignals(signals);
  },

  async generateInsightCandidates(): Promise<AIInsight[]> {
    const signals = await this.gatherCandidateSignals();
    const grouped = await this.groupRelatedSignals(signals);
    return insightGenerator.generateFromSignals(grouped);
  },

  async getApprovedInsights(): Promise<AIInsight[]> {
    // TODO: Replace curated mock insights with persisted approved insight records.
    return [...mockApprovedInsights].sort((a, b) => b.importanceScore - a.importanceScore);
  },

  async run(): Promise<InsightEngineResult> {
    const candidates = await this.generateInsightCandidates();
    return {
      insights: insightValidator.approveMockInsights(candidates),
      reviewQueue: insightValidator.getReviewQueue(candidates),
      generatedAt: "2026-06-28T12:20:00.000Z",
      isMock: true
    };
  }
};
