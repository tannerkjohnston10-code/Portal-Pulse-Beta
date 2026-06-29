import { mockReplayEvents } from "@/platform/history/snapshots/mock-history-data";

export const timelineReplayService = {
  getReplayEvents: () => mockReplayEvents,
  getTimelineScrubber() {
    return {
      startDate: mockReplayEvents[0]?.eventDate,
      endDate: mockReplayEvents[mockReplayEvents.length - 1]?.eventDate,
      ticks: mockReplayEvents.map((event) => ({ id: event.id, date: event.eventDate, label: event.title, isMock: true })),
      isMock: true
    };
  }
};

