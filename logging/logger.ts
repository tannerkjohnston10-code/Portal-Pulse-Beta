export type LogLevel = "debug" | "info" | "warn" | "error" | "audit";

export type PlatformLogEntry = {
  level: LogLevel;
  message: string;
  context?: Record<string, unknown>;
  requestId?: string;
  createdAt: string;
  isMock: true;
};

export const PlatformLogger = {
  log(level: LogLevel, message: string, context?: Record<string, unknown>): PlatformLogEntry {
    return {
      level,
      message,
      context,
      createdAt: new Date().toISOString(),
      isMock: true
    };
  },

  getLogStreams() {
    return [
      "application_logs",
      "error_logs",
      "ai_logs",
      "api_logs",
      "job_logs",
      "cache_logs",
      "audit_logs"
    ] as const;
  }
};
