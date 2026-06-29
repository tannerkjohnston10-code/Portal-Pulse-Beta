import { athenaAgents } from "@/platform/athena/agents/agent-registry";
import { agentOrchestrator } from "@/platform/athena/orchestration/agent-orchestrator";
import { AthenaCore } from "@/platform/athena/athena-core";
import { athenaBriefingService } from "@/platform/athena/briefings/briefing-service";
import type { BriefingRequest } from "@/platform/athena/types/athena-types";

export const athenaService = {
  getAgents() {
    return athenaAgents;
  },

  getNetworkStatus() {
    return {
      status: "mock_operational",
      onlineAgents: athenaAgents.filter((agent) => agent.status === "online").length,
      standbyAgents: athenaAgents.filter((agent) => agent.status === "standby").length,
      reviewOnlyAgents: athenaAgents.filter((agent) => agent.status === "review_only").length,
      coreApprovalRequired: true,
      lastChecked: "2026-06-28T14:00:00.000Z",
      isMock: true
    };
  },

  getLatestFindings() {
    return agentOrchestrator.runMockWorkflow().findings;
  },

  createDailyBriefing(_request?: Partial<BriefingRequest>) {
    return athenaBriefingService.getDailyBriefing();
  },

  getCIOStatus() {
    return AthenaCore.getStatus();
  },

  getLatestVerifiedMockIntelligence() {
    return AthenaCore.getLatestVerifiedMockIntelligence();
  },

  answerPlaceholder(question: string) {
    return AthenaCore.answerPlaceholder(question);
  }
};
