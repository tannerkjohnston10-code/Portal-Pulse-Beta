import { IntelligenceCore } from "@/platform/intelligence/core/intelligence-core";
import { RosterSDK } from "@/platform/roster/roster-sdk";
import type { AtlasFinding } from "@/platform/roster/core/roster-types";

export const atlasRosterAgent = {
  getFinding(teamId = "mock-team-state"): AtlasFinding {
    const workspace = RosterSDK.getRosterIntelligence(teamId);
    const topOpportunity = workspace.opportunities[0];
    const biggestNeed = workspace.needs[0];
    const coreOutput = IntelligenceCore.generateTeamIntelligence(teamId);

    return {
      id: "mock-atlas-finding",
      title: topOpportunity.title,
      summary: "Atlas identifies mock roster opportunity from depth, Scholarship IQ, Transfer Fit, and simulation signals.",
      topRosterOpportunity: topOpportunity,
      biggestTeamNeed: biggestNeed,
      rosterStabilityScore: workspace.rosterChemistry.overallScore,
      suggestedSimulation: workspace.simulations[0],
      submittedToCore: true,
      confidence: coreOutput.reasoning.confidence,
      evidenceCount: workspace.insights.reduce((sum, insight) => sum + insight.evidenceCount, 0),
      isMock: true
    };
  },

  getWorkspace(teamId = "mock-team-state") {
    return RosterSDK.getRosterIntelligence(teamId);
  }
};
