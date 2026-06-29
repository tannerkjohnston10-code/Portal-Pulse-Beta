export const platformJobTypes = [
  "ai_summary",
  "relationship_indexing",
  "knowledge_graph_update",
  "notification_delivery",
  "report_generation",
  "scheduled_job",
  "search_index_update",
  "future_scraping_pipeline",
  "future_etl_job"
] as const;

export type PlatformJobType = (typeof platformJobTypes)[number];

export type PlatformJob = {
  id: string;
  type: PlatformJobType;
  status: "queued" | "running" | "completed" | "failed" | "paused";
  priority: "low" | "normal" | "high" | "critical";
  payload: Record<string, unknown>;
  scheduledFor?: string;
  createdAt: string;
  updatedAt: string;
  isMock: true;
};

const mockJobs: PlatformJob[] = [
  {
    id: "mock-job-search-index",
    type: "search_index_update",
    status: "queued",
    priority: "normal",
    payload: { reason: "Production foundation placeholder" },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isMock: true
  }
];

export const JobQueue = {
  listJobs() {
    return mockJobs;
  },

  enqueue(job: Omit<PlatformJob, "id" | "status" | "createdAt" | "updatedAt" | "isMock">): PlatformJob {
    return {
      ...job,
      id: `mock-job-${job.type}`,
      status: "queued",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isMock: true
    };
  },

  getQueueHealth() {
    return {
      queued: mockJobs.filter((job) => job.status === "queued").length,
      running: mockJobs.filter((job) => job.status === "running").length,
      failed: mockJobs.filter((job) => job.status === "failed").length,
      isMock: true
    };
  }
};
