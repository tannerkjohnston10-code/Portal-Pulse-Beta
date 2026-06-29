import type { ClaimVerificationPacket, ConfidenceExplanation, ConfidenceFactor } from "@/server/ai/types";
import type { Claim, ConfidenceLevel } from "@/types/portal";

const levelFromScore = (score: number): ConfidenceLevel => {
  if (score >= 80) return "high";
  if (score >= 55) return "medium";
  if (score >= 30) return "low";
  return "unknown";
};

export const confidenceEngine = {
  calculate(packet: ClaimVerificationPacket): ConfidenceExplanation {
    const factors: ConfidenceFactor[] = [
      {
        name: "Source reliability",
        weight: 0.25,
        score: packet.sourceReliabilityScore,
        explanation: "Higher scores require trusted source types or strong historical source performance."
      },
      {
        name: "Independent source count",
        weight: 0.2,
        score: Math.min(packet.independentSourceCount * 30, 100),
        explanation: "Independent corroboration increases confidence; duplicates do not."
      },
      {
        name: "Official or direct statement",
        weight: 0.2,
        score: packet.officialConfirmation || packet.playerStatement || packet.coachStatement ? 95 : 20,
        explanation: "Official, player, or coach statements are strong signals."
      },
      {
        name: "Recency",
        weight: 0.1,
        score: packet.recencyScore,
        explanation: "Recent public information is more useful for fast-moving portal intelligence."
      },
      {
        name: "Consistency",
        weight: 0.15,
        score: packet.consistencyScore,
        explanation: "Consistent reports raise confidence; conflicts reduce it."
      },
      {
        name: "Conflict penalty",
        weight: 0.1,
        score: Math.max(0, 100 - packet.conflictCount * 35),
        explanation: "Contradictions reduce confidence and can force admin review."
      }
    ];

    const weightedScore = Math.round(factors.reduce((total, factor) => total + factor.score * factor.weight, 0));
    const cappedScore = packet.independentSourceCount <= 1 && !packet.officialConfirmation ? Math.min(weightedScore, 54) : weightedScore;

    return {
      level: levelFromScore(cappedScore),
      score: cappedScore,
      factors,
      why: "Confidence is based on source reliability, corroboration, official confirmation, recency, consistency, and conflict penalties.",
      limitations: cappedScore < 80 ? ["Not enough independent or official support to treat this as high confidence."] : [],
      isMock: true
    };
  },

  async scoreClaim(_claim: Claim): Promise<{ level: ConfidenceLevel; score: number }> {
    // Future implementation should load claim sources, conflicts, and historical source trust.
    return { level: "unknown", score: 0 };
  }
};
