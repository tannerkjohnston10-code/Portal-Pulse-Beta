import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react";
import { movementStateStyles, typography } from "@/lib/design-tokens";

export function MovementBadge({ movement, value }: { movement: "up" | "down" | "flat"; value?: string }) {
  const Icon = movement === "up" ? ArrowUp : movement === "down" ? ArrowDown : ArrowRight;
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 ${typography.badge} ${movementStateStyles[movement]}`}>
      <Icon size={14} aria-hidden />
      {value ?? movement}
    </span>
  );
}
