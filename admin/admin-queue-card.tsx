import { AlertTriangle } from "lucide-react";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";
import { cardStyles } from "@/lib/design-tokens";
import { formatDateTime } from "@/lib/format";
import type { AdminClaim } from "@/types/portal";

export function AdminQueueCard({ claim }: { claim: AdminClaim }) {
  return (
    <article className={`${cardStyles} p-5`}>
      <div className="flex items-start gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-md bg-rose-400/12 text-rose-200">
          <AlertTriangle size={18} aria-hidden />
        </span>
        <div>
          <p className="text-xs font-black uppercase tracking-wide text-slate-500">{claim.category.replace(/_/g, " ")}</p>
          <h3 className="mt-1 font-black text-white">{claim.title}</h3>
          <p className="mt-1 text-sm text-slate-400">{claim.entity} · {formatDateTime(claim.timestamp)}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <ConfidenceBadge level={claim.confidence} />
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-black uppercase text-slate-300">
          {claim.priority} priority
        </span>
        <span className="rounded-full border border-yellow-300/20 bg-yellow-300/10 px-2.5 py-1 text-xs font-bold text-yellow-100">Mock queue</span>
      </div>
    </article>
  );
}
