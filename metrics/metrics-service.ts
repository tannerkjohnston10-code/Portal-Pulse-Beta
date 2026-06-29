export type MetricName =
  | "api_latency_ms"
  | "page_render_ms"
  | "job_duration_ms"
  | "cache_hit_rate"
  | "search_latency_ms"
  | "ai_validation_count"
  | "error_count";

export type PlatformMetric = {
  name: MetricName;
  value: number;
  unit: "milliseconds" | "count" | "ratio";
  tags: Record<string, string>;
  measuredAt: string;
  isMock: true;
};

export const MetricsService = {
  record(metric: Omit<PlatformMetric, "measuredAt" | "isMock">): PlatformMetric {
    return {
      ...metric,
      measuredAt: new Date().toISOString(),
      isMock: true
    };
  },

  getProductionTargets() {
    return {
      apiP95LatencyMs: 300,
      commandCenterInitialLoadMs: 2500,
      cacheHitRateTarget: 0.85,
      errorRateTarget: 0.01,
      isMock: true
    };
  }
};
