import { buildIntelligenceCards } from "@/platform/intelligence/core/intelligence-cards";
import { conflictEngine } from "@/platform/intelligence/conflicts/conflict-engine";
import { evidenceEngine } from "@/platform/intelligence/evidence/evidence-engine";
import { explanationEngine } from "@/platform/intelligence/explanations/explanation-engine";
import type { IntelligenceCoreOutput } from "@/platform/intelligence/interfaces/intelligence-types";
import { importanceEngine } from "@/platform/intelligence/priority/importance-engine";
import { reasoningEngine } from "@/platform/intelligence/reasoning/reasoning-engine";
import { recommendationEngine } from "@/platform/intelligence/recommendations/recommendation-engine";
import { signalEngine } from "@/platform/intelligence/signals/signal-engine";
import { watchlistIntelligence } from "@/platform/intelligence/watchlists/watchlist-intelligence";

function generate(subjectId: string, subjectType: IntelligenceCoreOutput["subjectType"]): IntelligenceCoreOutput {
  const signals = signalEngine.normalizeSignals(signalEngine.collectSignals(subjectId));
  const evidence = evidenceEngine.groupEvidence(signals);
  const reasoning = reasoningEngine.reason(subjectId, signals, evidence);
  const explanation = explanationEngine.explain(signals, evidence, reasoning);
  const importanceScore = importanceEngine.calculateImportance(signals);
  const recommendations = recommendationEngine.recommendNextActions(subjectId, reasoning);
  const base = {
    id: `mock-intelligence-${subjectType}-${subjectId}`,
    subjectId,
    subjectType,
    signals,
    evidence,
    reasoning,
    explanation,
    importanceScore,
    recommendations,
    generatedAt: "2026-06-28T13:00:00.000Z",
    isMock: true
  } satisfies Omit<IntelligenceCoreOutput, "cards">;

  return {
    ...base,
    cards: buildIntelligenceCards(base)
  };
}

export const IntelligenceCore = {
  generatePlayerIntelligence(playerId: string) {
    return generate(playerId, "player");
  },

  generateTeamIntelligence(teamId: string) {
    return generate(teamId, "team");
  },

  generateCommandCenterSnapshot() {
    return generate("command-center", "command_center");
  },

  generateDailyBriefing(userId = "mock-user") {
    const output = generate(userId, "briefing");
    const watchlistSummary = watchlistIntelligence.summarizeWatchlistActivity(output.signals);
    return { ...output, watchlistSummary };
  },

  generateConferenceSummary(conferenceId: string) {
    return generate(conferenceId, "conference");
  },

  generateRankingExplanation(rankingId: string) {
    return generate(rankingId, "ranking");
  },

  generateInsight(subjectId: string) {
    return generate(subjectId, "insight");
  },

  explainPrediction(predictionId: string) {
    return generate(predictionId, "prediction");
  },

  calculateImportance(subjectId: string) {
    const signals = signalEngine.normalizeSignals(signalEngine.collectSignals(subjectId));
    return importanceEngine.calculateImportance(signals);
  },

  recommendNextActions(subjectId: string) {
    const output = generate(subjectId, "recommendation");
    return output.recommendations;
  },

  detectConflicts(subjectId: string) {
    const signals = signalEngine.normalizeSignals(signalEngine.collectSignals(subjectId));
    const evidence = evidenceEngine.groupEvidence(signals);
    return conflictEngine.detectConflicts(signals, evidence);
  }
};
