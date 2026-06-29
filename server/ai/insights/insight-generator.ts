import type { AIInsight, InsightSignal, InsightType } from "@/types/insights";
import { insightExplainer } from "@/server/ai/insights/insight-explainer";
import { insightRanker } from "@/server/ai/insights/insight-ranker";

function inferInsightType(signal: InsightSignal): InsightType {
  if (signal.signalType === "nil_movement") return "nil";
  if (signal.signalType === "prediction_shift") return "prediction";
  if (signal.signalType === "roster_impact") return "team";
  if (signal.signalType === "conference_movement") return "conference";
  if (signal.signalType === "risk" || signal.signalType === "conflict") return "risk";
  if (signal.signalType === "watchlist_alert") return "watchlist";
  return "trend";
}

function confidenceLevel(score: number): AIInsight["confidenceLevel"] {
  if (score >= 75) return "high";
  if (score >= 55) return "medium";
  if (score >= 35) return "low";
  return "unknown";
}

export const insightGenerator = {
  generateFromSignals(signals: InsightSignal[]): AIInsight[] {
    return signals.map((signal) => {
      const explanation = insightExplainer.explain(signal);
      const insightType = inferInsightType(signal);

      return {
        id: `generated-${signal.id}`,
        title: `Mock insight: ${signal.title}`,
        summary: signal.summary,
        insightType,
        category: signal.signalType,
        subjectType: signal.subjectType,
        subjectId: signal.subjectId,
        importanceScore: insightRanker.scoreSignal(signal),
        confidenceLevel: confidenceLevel(signal.confidenceScore),
        confidenceScore: signal.confidenceScore,
        evidenceCount: signal.evidence.length,
        sourceCount: signal.sourceCount,
        relatedPlayers: signal.relatedPlayers,
        relatedTeams: signal.relatedTeams,
        relatedConferences: signal.relatedConferences,
        supportingClaimIds: signal.supportingClaimIds,
        contradictingClaimIds: signal.contradictingClaimIds,
        evidence: signal.evidence,
        whyThisMatters: explanation.whyThisMatters,
        whatChanged: explanation.whatChanged,
        whatToWatchNext: explanation.whatToWatchNext,
        generatedAt: signal.generatedAt,
        expiresAt: "2026-06-29T12:20:00.000Z",
        reviewStatus: "approved_mock",
        isMock: true
      } as AIInsight;
    });
  }
};
