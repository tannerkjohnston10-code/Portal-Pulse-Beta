import { athenaAgents } from "@/platform/athena/agents/agent-registry";
import { createMockFinding } from "@/platform/athena/agents/agent-finding-factory";

const agent = athenaAgents.find((item) => item.id === "vega-basketball")!;

export const vegaAgent = {
  agent,
  observe() {
    return createMockFinding(agent, "Mock basketball rotation-fit signal is held as a proposal until verified by the Intelligence Core.", "team_storyline");
  }
};

