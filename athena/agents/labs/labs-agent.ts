import { mockLabsWorkspace } from "@/platform/labs/core/mock-labs-data";

export const labsAgent = {
  id: "labs-agent",
  name: "Labs Simulation Assistant",
  role: "Simulation guidance analyst",
  getGuidance() {
    return mockLabsWorkspace.assistant;
  },
  getLatestFinding() {
    return {
      id: "labs-finding-mock",
      summary: "Mock Labs finding: scenario outputs remain separated from verified intelligence and require clear simulation labels.",
      confidenceScore: 72,
      evidenceCount: 3,
      status: "proposal_only",
      isMock: true
    };
  }
};
