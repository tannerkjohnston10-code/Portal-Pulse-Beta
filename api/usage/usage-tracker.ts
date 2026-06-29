export type ApiUsageRecord = {
  consumerId: string;
  endpoint: string;
  requestCount: number;
  responseTimeMs: number;
  errorCount: number;
  dataTypeAccessed: string;
  timestamp: string;
  isMock: true;
};

export function trackApiUsage(record: Omit<ApiUsageRecord, "timestamp" | "isMock">): ApiUsageRecord {
  // TODO: Persist usage records for billing, analytics, partner reporting, and abuse prevention.
  return {
    ...record,
    timestamp: new Date().toISOString(),
    isMock: true
  };
}
