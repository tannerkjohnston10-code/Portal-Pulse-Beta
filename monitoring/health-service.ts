export type HealthCheckStatus = "healthy" | "degraded" | "down" | "unknown";

export type ServiceHealthCheck = {
  service: string;
  status: HealthCheckStatus;
  latencyMs?: number;
  checkedAt: string;
  notes: string;
  isMock: true;
};

export const HealthService = {
  getHealthChecks(): ServiceHealthCheck[] {
    return [
      {
        service: "web_app",
        status: "healthy",
        latencyMs: 42,
        checkedAt: new Date().toISOString(),
        notes: "Mock health check only.",
        isMock: true
      },
      {
        service: "database_placeholder",
        status: "unknown",
        checkedAt: new Date().toISOString(),
        notes: "Production database monitoring is not connected yet.",
        isMock: true
      }
    ];
  },

  getServiceStatus() {
    return {
      status: "healthy" as HealthCheckStatus,
      checkedAt: new Date().toISOString(),
      isMock: true
    };
  }
};
