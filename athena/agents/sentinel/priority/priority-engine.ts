import type { SentinelConflictResult, SentinelPriorityResult, SentinelSourceItem } from "@/platform/athena/agents/sentinel/types/sentinel-types";

function label(score: number): SentinelPriorityResult["priorityLabel"] {
  if (score >= 90) return "critical";
  if (score >= 75) return "high";
  if (score >= 55) return "medium";
  if (score >= 35) return "low";
  return "background";
}

export const sentinelPriorityEngine = {
  score(item: SentinelSourceItem, conflict: SentinelConflictResult): SentinelPriorityResult {
    const reliability = item.reliabilityScore * 0.35;
    const impact = (item.affectedPlayers.length + item.affectedTeams.length + item.affectedConferences.length) * 8;
    const conflictBoost = conflict.conflictDetected ? 16 : 0;
    const nilBoost = item.summary.toLowerCase().includes("nil") ? 10 : 0;
    const score = Math.min(100, Math.round(reliability + impact + conflictBoost + nilBoost));

    return {
      itemId: item.id,
      priorityScore: score,
      priorityLabel: label(score),
      factors: ["source reliability", "entity impact", conflict.conflictDetected ? "conflict detected" : "no conflict", nilBoost ? "NIL-sensitive" : "non-NIL"],
      isMock: true
    };
  }
};

