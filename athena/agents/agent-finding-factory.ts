import type { AgentFinding, AthenaAgent } from "@/platform/athena/types/athena-types";

export function createMockFinding(agent: AthenaAgent, summary: string, findingType: AgentFinding["findingType"]): AgentFinding {
  return {
    id: `mock-finding-${agent.id}`,
    agentId: agent.id,
    agentName: agent.name,
    findingType,
    summary,
    proposedImportance: 72,
    proposedConfidence: "medium",
    confidenceReasoning: "Mock proposal based on placeholder signals, source-count structure, and evidence-first review rules.",
    supportingEvidenceIds: [`mock-evidence-${agent.id}`],
    contradictingEvidenceIds: [],
    affectedPlayers: ["Mock Player"],
    affectedTeams: ["Mock University"],
    affectedConferences: ["Mock Conference"],
    status: "proposed",
    createdAt: "2026-06-28T14:00:00.000Z",
    isMock: true
  };
}

