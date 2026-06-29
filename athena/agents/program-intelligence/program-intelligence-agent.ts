import { digitalTwinEngine } from "@/platform/program-intelligence/digital-twin/digital-twin-engine";

export const programIntelligenceAgent = {
  id: "program-intelligence-agent",
  name: "Program Intelligence Analyst",
  role: "Workspace summarization and Digital Twin coordination",
  async summarize(programId: string) {
    const workspace = await digitalTwinEngine.buildProgramWorkspace(programId);

    return {
      id: `program-summary-${programId}`,
      summary: workspace.intelligenceSummary.confidenceExplanation,
      confidenceScore: 69,
      evidenceIds: workspace.intelligenceSummary.evidenceIds,
      contentType: workspace.intelligenceSummary.contentType,
      status: "proposal_only",
      isMock: true
    };
  }
};
