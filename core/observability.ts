export const platformObservability = {
  log(message: string, context: Record<string, unknown> = {}) {
    return { level: "info", message, context, timestamp: new Date().toISOString(), isMock: true };
  },

  metric(name: string, value: number, tags: Record<string, string> = {}) {
    return { name, value, tags, timestamp: new Date().toISOString(), isMock: true };
  },

  trace(operation: string, metadata: Record<string, unknown> = {}) {
    return { operation, metadata, traceId: `mock-trace-${Date.now()}`, isMock: true };
  },

  health() {
    return { status: "ok", service: "portal-pulse-platform", timestamp: new Date().toISOString(), isMock: true };
  }
};
