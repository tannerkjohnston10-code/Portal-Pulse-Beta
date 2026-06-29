import { intakePipeline } from "@/platform/athena/agents/sentinel/intake/intake-pipeline";

export const sentinelWorkflowManager = {
  runIntakeWorkflow() {
    const records = intakePipeline.runMockPipeline();
    return {
      id: "mock-sentinel-intake-workflow",
      stages: [
        "source_detected",
        "compliance_validation",
        "normalization",
        "duplicate_detection",
        "conflict_scan",
        "priority_scoring",
        "claim_candidate_creation",
        "evidence_attachment",
        "intelligence_core_submission",
        "admin_review_if_required"
      ],
      records,
      isMock: true
    };
  }
};

