import type { ConfidenceLevel } from "@/types/portal";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";

export function ConfidenceIndicator({ confidence, score }: { confidence: ConfidenceLevel; score: number }) {
  return <ConfidenceBadge level={confidence} score={score} />;
}
