import type { AIInsight } from "@/types/insights";

export const insightValidator = {
  shouldRouteToReview(insight: AIInsight): boolean {
    return (
      insight.confidenceScore < 50 ||
      insight.evidenceCount < 1 ||
      insight.sourceCount < 2 ||
      insight.contradictingClaimIds.length > 0 ||
      insight.category === "nil_movement" ||
      insight.importanceScore >= 90
    );
  },

  approveMockInsights(insights: AIInsight[]): AIInsight[] {
    return insights.filter((insight) => !this.shouldRouteToReview(insight));
  },

  getReviewQueue(insights: AIInsight[]): AIInsight[] {
    return insights.filter((insight) => this.shouldRouteToReview(insight));
  }
};
