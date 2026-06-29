import { athenaAgents } from "@/platform/athena/agents/agent-registry";
import { createMockFinding } from "@/platform/athena/agents/agent-finding-factory";

const agent = athenaAgents.find((item) => item.id === "archivist-replay")!;

export const archivistAgent = {
  agent,
  observe() {
    return createMockFinding(agent, "Mock replay context is prepared for future historical comparison and snapshot review.", "historical_context");
  }
};

