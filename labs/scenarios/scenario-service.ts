import { mockLabsWorkspace } from "@/platform/labs/core/mock-labs-data";

export const scenarioService = {
  listRecentScenarios() {
    return mockLabsWorkspace.recentSimulations;
  },

  listSavedScenarioPlaceholders() {
    return mockLabsWorkspace.savedScenarios;
  }
};
