import type { ConfidenceLevel } from "@/types/portal";
import { confidenceStateStyles, typography } from "@/lib/design-tokens";

export function ConfidenceBadge({ level, score }: { level: ConfidenceLevel; score?: number }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 ${typography.badge} ${confidenceStateStyles[level]}`}>
      {level}{score !== undefined ? ` · ${score}%` : ""}
    </span>
  );
}
