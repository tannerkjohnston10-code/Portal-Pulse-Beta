import { IntelligenceCore } from "@/platform/intelligence/core/intelligence-core";
import { atlasAgent } from "@/platform/athena/agents/atlas-agent";
import { librarianAgent } from "@/platform/athena/agents/librarian-agent";
import { mercuryAgent } from "@/platform/athena/agents/mercury-agent";
import { oracleAgent } from "@/platform/athena/agents/oracle-agent";
import { sentinelAgent } from "@/platform/athena/agents/sentinel-agent";
import type { AgentEvidence, IntelligenceCoreDecision, IntelligenceProposal } from "@/platform/athena/types/athena-types";

const activeAgents = [sentinelAgent, oracleAgent, mercuryAgent, atlasAgent, librarianAgent];

function evidenceFor(agentId: string): AgentEvidence {
  return {
    id: `mock-evidence-${agentId}`,
    evidenceType: "mock",
    summary: "Mock evidence placeholder. Future versions will reference verified claims and source records.",
    confidenceScore: 64,
    isMock: true
  };
}

export const agentOrchestrator = {
  runMockWorkflow() {
    const findings = activeAgents.map((agentService) => agentService.observe());
    const proposals: IntelligenceProposal[] = findings.map((finding) => ({
      id: `mock-proposal-${finding.id}`,
      finding: { ...finding, status: "sent_to_core" },
      evidence: [evidenceFor(finding.agentId)],
      signals: [],
      submittedToCoreAt: "2026-06-28T14:00:00.000Z",
      isMock: true
    }));
    const decisions: IntelligenceCoreDecision[] = proposals.map((proposal) => {
      const coreOutput = IntelligenceCore.generateInsight(proposal.finding.id);
      return {
        id: `mock-core-decision-${proposal.id}`,
        proposalId: proposal.id,
        decision: proposal.finding.proposedConfidence === "low" ? "admin_review" : "approved",
        reason: "Mock Core decision: agent proposals cannot surface until evidence, confidence, and conflict checks are applied.",
        finalConfidence: coreOutput.reasoning.confidence,
        finalImportance: coreOutput.importanceScore,
        coreOutput,
        decidedAt: coreOutput.generatedAt,
        isMock: true
      };
    });

    return {
      workflowId: "mock-athena-workflow",
      findings,
      proposals,
      decisions,
      isMock: true
    };
  }
};

