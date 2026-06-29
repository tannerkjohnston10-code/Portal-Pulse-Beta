import type { RealtimeMonitoringSnapshot } from "@/platform/realtime/core/realtime-types";
import { RealtimePipelineService } from "@/platform/realtime/ingestion/realtime-pipeline-service";

export const RealtimeMonitoringService = {
  getSnapshot(): RealtimeMonitoringSnapshot {
    return RealtimePipelineService.getMonitoringSnapshot();
  },

  getIncidentPolicy() {
    return {
      alertOnPipelineFailure: true,
      alertOnHighConflictRate: true,
      alertOnStaleSources: true,
      isMock: true
    };
  }
};
