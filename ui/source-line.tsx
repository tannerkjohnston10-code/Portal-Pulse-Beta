import { ExternalLink } from "lucide-react";
import type { Source } from "@/types/portal";
import { formatDateTime } from "@/lib/format";

export function SourceLine({ source }: { source: Source }) {
  return (
    <a href={source.url} target="_blank" rel="noreferrer" className="inline-flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-200">
      <span>{source.label}</span>
      <span>Updated {formatDateTime(source.lastUpdated)}</span>
      <ExternalLink size={13} aria-hidden />
    </a>
  );
}
