import { mockTimelineEvents } from "@/data/mock/portal-data";
import type { TimelineEvent } from "@/types/portal";

// Temporary mock-backed repository. Replace internals with claim/history queries later.
export const timelineRepository = {
  async findBySubjectId(subjectId: string): Promise<TimelineEvent[]> {
    return mockTimelineEvents.filter((event) => event.subjectId === subjectId);
  }
};
