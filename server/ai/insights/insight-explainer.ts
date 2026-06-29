import type { InsightSignal } from "@/types/insights";

export const insightExplainer = {
  explain(signal: InsightSignal) {
    return {
      whyThisMatters:
        signal.signalType === "nil_movement"
          ? "NIL-related signals require extra care because reported, estimated, rumored, and unknown values carry different trust levels."
          : "This matters because multiple fictional signals changed together, which is the kind of pattern Portal Pulse should eventually surface before users have to hunt for it manually.",
      whatChanged: `${signal.title}. ${signal.summary}`,
      whatToWatchNext:
        signal.contradictingClaimIds.length > 0
          ? "Watch for conflict resolution, independent corroboration, or admin review before treating this as a stable signal."
          : "Watch for additional independent mock sources, official confirmations, or a reversal in confidence."
    };
  }
};
