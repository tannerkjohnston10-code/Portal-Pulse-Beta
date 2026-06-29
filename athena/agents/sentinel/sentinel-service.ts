import { sentinelWorkflowManager } from "@/platform/athena/agents/sentinel/workflows/workflow-manager";
import type { SentinelDashboardSnapshot } from "@/platform/athena/agents/sentinel/types/sentinel-types";

export const sentinelService = {
  runIntakeWorkflow() {
    return sentinelWorkflowManager.runIntakeWorkflow();
  },

  getDashboardSnapshot(): SentinelDashboardSnapshot {
    const workflow = sentinelWorkflowManager.runIntakeWorkflow();
    const records = workflow.records;
    const conflictsDetected = records.filter((record) => record.conflict.conflictDetected).length;
    const duplicatesRemoved = records.filter((record) => record.duplicate.duplicateDetected).length;
    const awaitingCoreReview = records.filter((record) => record.submittedToCore).length;
    const awaitingAdminReview = records.filter((record) => record.adminReviewRequired).length;

    return {
      id: "mock-sentinel-dashboard-snapshot",
      itemsMonitored: 128,
      newSourceItems: records.length,
      claimCandidates: records.length,
      conflictsDetected,
      duplicatesRemoved,
      awaitingCoreReview,
      awaitingAdminReview,
      priorityAlerts: records.filter((record) => record.priority.priorityLabel === "high" || record.priority.priorityLabel === "critical"),
      latestVerifiedIntakeTimestamp: "2026-06-28T16:10:00.000Z",
      recentRecords: records,
      isMock: true
    };
  }
};

