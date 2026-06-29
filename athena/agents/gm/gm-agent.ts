import { gmWorkspaceService } from "@/platform/gm-workspace/dashboard/gm-workspace-service";

export const gmAgent = {
  id: "gm-agent",
  name: "GM Workspace Executive Analyst",
  getLatestFinding() {
    const brief = gmWorkspaceService.getExecutiveBrief();
    return {
      id: "mock-gm-agent-finding",
      agentName: "GM",
      summary: brief.aiExecutiveSummary,
      confidence: brief.confidence,
      evidenceCount: brief.evidenceCount,
      submittedToIntelligenceCore: true,
      isMock: true as const
    };
  }
};
