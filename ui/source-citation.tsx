import { ExternalLink, ShieldCheck } from "lucide-react";
import type { Source } from "@/types/portal";
import { formatDateTime } from "@/lib/format";

export function SourceCitation({ source, verified = false }: { source: Source; verified?: boolean }) {
  return (
    <a href={source.url} target="_blank" rel="noreferrer" className="inline-flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-200">
      {verified && <ShieldCheck size={13} className="text-emerald-300" aria-hidden />}
      <span>{source.label}</span>
      <span>Updated {formatDateTime(source.lastUpdated)}</span>
      <ExternalLink size={13} aria-hidden />
    </a>
  );
}
