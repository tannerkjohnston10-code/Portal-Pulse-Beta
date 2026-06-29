import type { PlatformEvent } from "@/platform/events/platform-events";
import type { RealtimePipelineEvent } from "@/platform/realtime/core/realtime-types";

export const RealtimeEventService = {
  toPlatformEvent(event: RealtimePipelineEvent): PlatformEvent<RealtimePipelineEvent> {
    return {
      id: event.id,
      type: event.eventName,
      entityType: "claim",
      entityId: event.entityLabel,
      payload: event,
      occurredAt: event.occurredAt,
      source: "platform",
      isMock: true
    };
  }
};
