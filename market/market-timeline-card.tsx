import type { MarketTimelineEvent } from "@/platform/market/exchange/market-types";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";

export function MarketTimelineCard({ event }: { event: MarketTimelineEvent }) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-wide text-slate-500">{new Date(event.timestamp).toLocaleString()}</p>
          <h3 className="mt-2 text-base font-black text-white">{event.title}</h3>
        </div>
        <ConfidenceBadge level={event.confidence} />
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-400">{event.summary}</p>
      <p className="mt-3 text-xs font-bold text-slate-500">
        {event.evidenceCount} evidence · {event.sourceCount} sources · {event.apolloReplayEventId ? "Apollo linked" : "Apollo pending"} · Mock
      </p>
    </article>
  );
}

