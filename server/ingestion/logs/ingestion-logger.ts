import type { IngestionLogEntry } from "@/server/ingestion/types";

const logs: IngestionLogEntry[] = [];

export const ingestionLogger = {
  info(message: string, metadata?: IngestionLogEntry["metadata"]) {
    logs.push({ id: `log-${logs.length + 1}`, level: "info", message, metadata, createdAt: new Date().toISOString(), isMock: true });
  },

  warn(message: string, metadata?: IngestionLogEntry["metadata"]) {
    logs.push({ id: `log-${logs.length + 1}`, level: "warn", message, metadata, createdAt: new Date().toISOString(), isMock: true });
  },

  error(message: string, metadata?: IngestionLogEntry["metadata"]) {
    logs.push({ id: `log-${logs.length + 1}`, level: "error", message, metadata, createdAt: new Date().toISOString(), isMock: true });
  },

  list(): IngestionLogEntry[] {
    return logs;
  },

  reset() {
    logs.length = 0;
  }
};
