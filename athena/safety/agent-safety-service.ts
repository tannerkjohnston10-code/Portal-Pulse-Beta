import type { AgentFinding } from "@/platform/athena/types/athena-types";

export const agentSafetyService = {
  canSendToCore(finding: AgentFinding) {
    return {
      allowed: finding.supportingEvidenceIds.length > 0,
      reason: finding.supportingEvidenceIds.length > 0 ? "Finding has mock evidence references and may be submitted to the Intelligence Core." : "Finding lacks evidence and must remain hidden.",
      mayPublishDirectly: false,
      constitutionRule: "No AI agent may publish a conclusion directly.",
      isMock: true
    };
  }
};

