import { ArrowDown, ArrowRight, ArrowUp, Sparkles } from "lucide-react";
import type { RankMovement } from "@/types/rankings";

export function RankChangeIndicator({ movement, change }: { movement: RankMovement; change: number }) {
  const Icon = movement === "up" ? ArrowUp : movement === "down" ? ArrowDown : movement === "new" ? Sparkles : ArrowRight;
  const tone = movement === "up" || movement === "new" ? "text-emerald-300" : movement === "down" ? "text-rose-300" : "text-slate-400";

  return (
    <span className={`inline-flex items-center gap-1 text-sm font-black ${tone}`}>
      <Icon size={15} aria-hidden />
      {movement === "new" ? "New" : Math.abs(change)}
    </span>
  );
}
