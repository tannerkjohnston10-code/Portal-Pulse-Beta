import { TimelineEvent } from "@/components/ui/timeline-event";
import type { ConfidenceLevel } from "@/types/portal";
import { formatDateTime } from "@/lib/format";

export function TimelineItem({ title, detail, timestamp, confidence }: { title: string; detail: string; timestamp: string; confidence: ConfidenceLevel }) {
  return <TimelineEvent title={title} detail={detail} timestamp={formatDateTime(timestamp)} confidence={confidence} />;
}
