import type { IntelligenceSignal } from "@/platform/intelligence/interfaces/intelligence-types";

export const watchlistIntelligence = {
  summarizeWatchlistActivity(signals: IntelligenceSignal[]) {
    return {
      title: "Mock watchlist intelligence",
      summary: `${signals.length} fictional watched signals changed in the current intelligence window.`,
      meaningfulActivityCount: signals.filter((signal) => signal.importance >= 60).length,
      isMock: true
    };
  }
};
