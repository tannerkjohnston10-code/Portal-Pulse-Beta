import { complianceValidator } from "@/platform/athena/agents/sentinel/compliance/compliance-validator";
import { sentinelConflictEngine } from "@/platform/athena/agents/sentinel/conflicts/conflict-engine";
import { duplicateEngine } from "@/platform/athena/agents/sentinel/deduplication/duplicate-engine";
import { claimRouter } from "@/platform/athena/agents/sentinel/intake/claim-router";
import { sourceMonitor } from "@/platform/athena/agents/sentinel/intake/source-monitor";
import { sentinelPriorityEngine } from "@/platform/athena/agents/sentinel/priority/priority-engine";
import type { SentinelPipelineRecord, SentinelSourceItem } from "@/platform/athena/agents/sentinel/types/sentinel-types";

export const intakePipeline = {
  processItem(item: SentinelSourceItem): SentinelPipelineRecord {
    const compliance = complianceValidator.validate(item);
    const duplicate = duplicateEngine.check(item);
    const conflict = sentinelConflictEngine.scan(item);
    const priority = sentinelPriorityEngine.score(item, conflict);
    const claimCandidate = claimRouter.createCandidate(item, compliance, duplicate, conflict, priority);

    return {
      id: `mock-pipeline-record-${item.id}`,
      sourceItem: item,
      compliance,
      duplicate,
      conflict,
      priority,
      claimCandidate,
      submittedToCore: claimCandidate.routeTo === "intelligence_core",
      adminReviewRequired: claimCandidate.routeTo === "admin_review",
      auditLog: [
        "source_detected",
        "compliance_validated",
        "normalized",
        "duplicate_checked",
        "conflict_scanned",
        "priority_scored",
        "claim_candidate_created",
        "evidence_attached",
        claimCandidate.routeTo
      ],
      isMock: true
    };
  },

  runMockPipeline(): SentinelPipelineRecord[] {
    return sourceMonitor.detectMockSourceItems().map((item) => this.processItem(item));
  }
};

