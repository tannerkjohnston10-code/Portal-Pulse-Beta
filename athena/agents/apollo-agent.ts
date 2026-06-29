import { athenaAgents } from "@/platform/athena/agents/agent-registry";
import { createMockFinding } from "@/platform/athena/agents/agent-finding-factory";
import { apolloHistoricalAgent } from "@/platform/athena/agents/apollo/apollo-agent";

const agent = athenaAgents.find((item) => item.id === "apollo-history")!;

export const apolloAgent = {
  agent,
  observe() {
    const finding = apolloHistoricalAgent.getFinding();
    return createMockFinding(agent, `${finding.title}: ${finding.thisWeekVsLastWeek} Submitted to Intelligence Core for review.`, "historical_context");
  },

  getFinding() {
    return apolloHistoricalAgent.getFinding();
  },

  getReplayDashboard() {
    return apolloHistoricalAgent.getReplayDashboard();
  }
};
