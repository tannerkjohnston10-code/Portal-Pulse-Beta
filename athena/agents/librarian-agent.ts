import { athenaAgents } from "@/platform/athena/agents/agent-registry";
import { createMockFinding } from "@/platform/athena/agents/agent-finding-factory";
import { librarianGraphAgent } from "@/platform/athena/agents/librarian/librarian-agent";

const agent = athenaAgents.find((item) => item.id === "librarian-graph")!;

export const librarianAgent = {
  agent,
  observe() {
    const finding = librarianGraphAgent.proposeRelationships();
    return createMockFinding(agent, `${finding.title}: ${finding.weakRelationshipIds.length} weak or conflicting graph relationships require Core review.`, "graph_relationship");
  },

  proposeRelationships() {
    return librarianGraphAgent.proposeRelationships();
  },

  explainConnection(fromEntityId: string, toEntityId: string) {
    return librarianGraphAgent.explainConnection(fromEntityId, toEntityId);
  }
};
