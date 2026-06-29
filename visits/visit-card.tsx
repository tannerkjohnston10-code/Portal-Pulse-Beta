import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";
import { SourceLine } from "@/components/ui/source-line";
import { cardStyles } from "@/lib/design-tokens";
import { formatDate } from "@/lib/format";
import type { Visit } from "@/types/portal";

export function VisitCard({ visit }: { visit: Visit }) {
  return (
    <article className={`${cardStyles} p-5`}>
      <CalendarDays className="text-cyan-200" size={22} aria-hidden />
      <Link href={`/players/${visit.playerId}`} className="mt-4 block text-lg font-black text-white hover:text-cyan-200">{visit.playerName}</Link>
      <p className="mt-1 text-sm font-semibold text-slate-400">{visit.team} · {visit.type.replace(/_/g, " ")}</p>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-md bg-white/5 p-3">
          <p className="text-xs font-black uppercase tracking-wide text-slate-500">Date</p>
          <p className="mt-1 font-black text-white">{formatDate(visit.date)}</p>
        </div>
        <div className="rounded-md bg-white/5 p-3">
          <p className="text-xs font-black uppercase tracking-wide text-slate-500">Status</p>
          <p className="mt-1 font-black capitalize text-white">{visit.status}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <ConfidenceBadge level={visit.confidence} score={visit.confidenceScore} />
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-bold text-slate-300">Mock visit</span>
      </div>
      <div className="mt-4">
        <SourceLine source={visit.source} />
      </div>
    </article>
  );
}
