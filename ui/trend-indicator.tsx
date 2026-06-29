import { MovementBadge } from "./movement-badge";

export function TrendIndicator({ delta }: { delta: number }) {
  if (delta > 0) return <MovementBadge movement="up" value={`+${delta}`} />;
  if (delta < 0) return <MovementBadge movement="down" value={`${delta}`} />;
  return <MovementBadge movement="flat" value="0" />;
}
