import { Clock } from "lucide-react";
import { ConfidenceBadge } from "./confidence-badge";
import type { ConfidenceLevel } from "@/types/portal";

export function TimelineEvent({ title, detail, timestamp, confidence }: { title: string; detail: string; timestamp: string; confidence: ConfidenceLevel }) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-3">
      <span className="mt-1 grid h-8 w-8 place-items-center rounded-full bg-cyan-300/12 text-cyan-200">
        <Clock size={15} aria-hidden />
      </span>
      <div className="border-b border-white/10 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="font-black text-white">{title}</h3>
          <ConfidenceBadge level={confidence} />
        </div>
        <p className="mt-1 text-sm leading-6 text-slate-400">{detail}</p>
        <p className="mt-2 text-xs font-semibold text-slate-500">{timestamp}</p>
      </div>
    </div>
  );
}
