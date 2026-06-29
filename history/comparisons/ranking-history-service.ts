import { mockSnapshots } from "@/platform/history/snapshots/mock-history-data";

export const rankingHistoryService = {
  getRankingHistory(rankingType: string) {
    return {
      rankingType,
      snapshots: mockSnapshots.filter((snapshot) => snapshot.entityType === "ranking"),
      movementSummary: "Mock team transfer ranking moved from 18 to 12 in the placeholder data.",
      isMock: true
    };
  }
};

