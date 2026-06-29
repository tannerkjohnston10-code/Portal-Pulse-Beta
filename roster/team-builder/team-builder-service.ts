import { rosterIntelligenceService } from "@/platform/roster/core/roster-intelligence-service";
import { rosterSimulationService } from "@/platform/roster/simulation/roster-simulation-service";
import { strategyEngine } from "@/platform/roster/strategy/strategy-engine";

export const teamBuilderService = {
  getWorkspace(teamId = "mock-team-state") {
    return rosterIntelligenceService.getRosterIntelligence(teamId);
  },

  getDefaultSimulation(teamId = "mock-team-state") {
    return rosterSimulationService.runRosterSimulation({ teamId, simulationType: "add_transfer_player" });
  },

  getStrategy(teamId = "mock-team-state") {
    return strategyEngine.generateRosterStrategy(teamId);
  }
};

