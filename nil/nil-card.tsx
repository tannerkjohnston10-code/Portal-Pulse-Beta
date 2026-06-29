import Link from "next/link";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";
import { NILStatusBadge } from "@/components/ui/nil-status-badge";
import { SourceLine } from "@/components/ui/source-line";
import { cardStyles } from "@/lib/design-tokens";
import type { NILReport } from "@/types/portal";

export function NILCard({ report }: { report: NILReport }) {
  return (
    <article className={`${cardStyles} p-5`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <Link href={`/players/${report.playerId}`} className="text-lg font-black text-white hover:text-cyan-200">{report.playerName}</Link>
          <p className="mt-1 text-sm font-semibold text-slate-400">{report.position} · {report.school}</p>
        </div>
        <NILStatusBadge status={report.status} />
      </div>
      <p className="mt-5 text-2xl font-black text-white">{report.rangeLabel}</p>
      <p className="mt-2 text-sm leading-6 text-slate-400">Mock NIL intelligence label. No real compensation number is presented as fact.</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <ConfidenceBadge level={report.confidence} score={report.confidenceScore} />
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-bold text-slate-300">Mock report</span>
      </div>
      <div className="mt-4">
        <SourceLine source={report.source} />
      </div>
    </article>
  );
}
