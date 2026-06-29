import { RealtimePipelineService } from "@/platform/realtime/ingestion/realtime-pipeline-service";
import { RealtimeSourceRegistry } from "@/platform/realtime/sources/realtime-source-registry";

export const RealtimeSDK = {
  sources: RealtimeSourceRegistry,
  pipeline: RealtimePipelineService,

  getDashboardSnapshot() {
    return RealtimePipelineService.getDashboardSnapshot();
  },

  getClaimCandidateStream() {
    return RealtimePipelineService.getClaimCandidateStream();
  },

  getMonitoringSnapshot() {
    return RealtimePipelineService.getMonitoringSnapshot();
  }
};
