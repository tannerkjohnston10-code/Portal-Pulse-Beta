import type { IntelligenceSignal } from "@/platform/intelligence/interfaces/intelligence-types";

export const importanceEngine = {
  calculateImportance(signals: IntelligenceSignal[]) {
    const affectedEntities = new Set(signals.flatMap((signal) => signal.affectedEntities.map((entity) => entity.id))).size;
    const sourceWeight = signals.reduce((sum, signal) => sum + signal.sourceCount * 4, 0);
    const signalWeight = signals.reduce((sum, signal) => sum + signal.importance, 0) / Math.max(signals.length, 1);
    return Math.round(Math.min(100, signalWeight + sourceWeight + affectedEntities * 3));
  }
};
