import { mockLabsWorkspace } from "@/platform/labs/core/mock-labs-data";

export const labsHistoryService = {
  listRecentRuns() {
    return mockLabsWorkspace.recentSimulations;
  }
};
