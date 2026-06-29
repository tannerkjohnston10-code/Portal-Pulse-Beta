import { mockIngestionJob } from "./mock-ingestion-job";

export const ingestionJob = {
  async runMock() {
    return mockIngestionJob.run();
  }
};
