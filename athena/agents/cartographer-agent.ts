import { athenaAgents } from "@/platform/athena/agents/agent-registry";
import { createMockFinding } from "@/platform/athena/agents/agent-finding-factory";
import { cartographerSpatialAgent } from "@/platform/athena/agents/cartographer/cartographer-agent";

const agent = athenaAgents.find((item) => item.id === "cartographer-map")!;

export const cartographerAgent = {
  agent,
  observe() {
    const finding = cartographerSpatialAgent.getFinding();
    return createMockFinding(agent, `${finding.title}: ${finding.geographicTrendSummary} Submitted to Intelligence Core for review.`, "map_signal");
  },

  getFinding() {
    return cartographerSpatialAgent.getFinding();
  },

  getDashboard() {
    return cartographerSpatialAgent.getDashboard();
  }
};
