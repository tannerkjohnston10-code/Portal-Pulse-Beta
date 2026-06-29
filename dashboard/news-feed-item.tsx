import { Radio } from "lucide-react";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";
import type { NewsUpdate } from "@/types/portal";
import { formatDateTime } from "@/lib/format";

export function NewsFeedItem({ item }: { item: NewsUpdate }) {
  return (
    <article className="grid gap-3 border-b border-white/10 py-4 last:border-b-0 sm:grid-cols-[auto_1fr_auto] sm:items-center">
      <span className="grid h-9 w-9 place-items-center rounded-md bg-red-400/12 text-red-300">
        <Radio size={16} aria-hidden />
      </span>
      <div>
        <p className="font-black text-white">{item.playerName}</p>
        <p className="text-sm text-slate-400">
          Mock {item.movementType} update · {item.team} · {item.sourceLabel}
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-2 sm:justify-end">
        <ConfidenceBadge level={item.confidence} />
        <span className="text-xs font-semibold text-slate-500">{formatDateTime(item.timestamp)}</span>
      </div>
    </article>
  );
}
