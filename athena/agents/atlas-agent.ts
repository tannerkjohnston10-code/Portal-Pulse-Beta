import { athenaAgents } from "@/platform/athena/agents/agent-registry";
import { createMockFinding } from "@/platform/athena/agents/agent-finding-factory";
import { atlasRosterAgent } from "@/platform/athena/agents/atlas/atlas-agent";

const agent = athenaAgents.find((item) => item.id === "atlas-roster")!;

export const atlasAgent = {
  agent,
  observe() {
    const finding = atlasRosterAgent.getFinding();
    return createMockFinding(agent, `${finding.title}: ${finding.summary} Submitted to Intelligence Core for review.`, "team_storyline");
  },

  getFinding() {
    return atlasRosterAgent.getFinding();
  },

  getWorkspace(teamId = "mock-team-state") {
    return atlasRosterAgent.getWorkspace(teamId);
  }
};
