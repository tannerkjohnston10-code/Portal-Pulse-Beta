import { mockAtlasWorkspace } from "@/platform/roster/core/mock-roster-data";

export type RosterSimulationInput = {
  teamId: string;
  simulationType: string;
  playerId?: string;
  position?: string;
};

export const rosterSimulationService = {
  runRosterSimulation(input: RosterSimulationInput) {
    const simulation = mockAtlasWorkspace.simulations.find((item) => item.simulationType === input.simulationType) ?? mockAtlasWorkspace.simulations[0];
    return {
      ...simulation,
      input,
      simulationStatus: "simulated",
      isMock: true
    };
  },

  getSimulations() {
    return mockAtlasWorkspace.simulations;
  }
};

