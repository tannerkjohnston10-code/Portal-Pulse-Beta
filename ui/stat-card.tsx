import type { LucideIcon } from "lucide-react";
import { cardStyles, motion, typography } from "@/lib/design-tokens";

export function StatCard({ icon: Icon, label, value, note }: { icon: LucideIcon; label: string; value: string; note?: string }) {
  return (
    <article className={`${cardStyles} ${motion.hoverLift} p-5`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-slate-400">{label}</p>
          <p className={`mt-2 ${typography.statNumber}`}>{value}</p>
        </div>
        <span className="grid h-10 w-10 place-items-center rounded-md bg-cyan-300/12 text-cyan-200">
          <Icon size={19} aria-hidden />
        </span>
      </div>
      {note && <p className="mt-4 text-xs font-semibold text-yellow-100">{note}</p>}
    </article>
  );
}
