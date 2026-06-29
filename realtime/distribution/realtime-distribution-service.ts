import type { RealtimeDistributionTarget } from "@/platform/realtime/core/realtime-types";

export type RealtimeDistributionPlan = {
  targets: RealtimeDistributionTarget[];
  refreshMode: "request_only_until_core_approval";
  cacheInvalidationRequired: boolean;
  isMock: true;
};

export const RealtimeDistributionService = {
  createDistributionPlan(targets: RealtimeDistributionTarget[]): RealtimeDistributionPlan {
    return {
      targets,
      refreshMode: "request_only_until_core_approval",
      cacheInvalidationRequired: true,
      isMock: true
    };
  }
};
