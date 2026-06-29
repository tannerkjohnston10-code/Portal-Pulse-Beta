import { athenaAgents } from "@/platform/athena/agents/agent-registry";
import { createMockFinding } from "@/platform/athena/agents/agent-finding-factory";

const agent = athenaAgents.find((item) => item.id === "hermes-notifications")!;

export const hermesAgent = {
  agent,
  observe() {
    return createMockFinding(agent, "Mock notification candidate is prepared for priority scoring and user-preference checks.", "notification_candidate");
  }
};

