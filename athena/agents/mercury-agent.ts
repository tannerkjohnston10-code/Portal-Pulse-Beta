import { athenaAgents } from "@/platform/athena/agents/agent-registry";
import { createMockFinding } from "@/platform/athena/agents/agent-finding-factory";
import { mercuryMarketAgent } from "@/platform/athena/agents/mercury/mercury-agent";

const agent = athenaAgents.find((item) => item.id === "mercury-market")!;

export const mercuryAgent = {
  agent,
  observe() {
    const finding = mercuryMarketAgent.getFinding();
    return createMockFinding(agent, `${finding.title}: ${finding.whatChanged} Submitted to Intelligence Core for review.`, "market_shift");
  },

  getFinding() {
    return mercuryMarketAgent.getFinding();
  },

  getDashboard() {
    return mercuryMarketAgent.getDashboard();
  },

  getCommandCenterWidget() {
    return mercuryMarketAgent.getCommandCenterWidget();
  }
};
