import { IntelligenceCard } from "@/components/ui/intelligence-card";
import { MovementBadge } from "@/components/ui/movement-badge";

const windows = [
  ["Profile last week", "+3 score movement", "Source activity increased"],
  ["Profile last month", "+12 score movement", "Timeline expanded"],
  ["Profile last year", "Not available", "Future historical replay"],
  ["Prediction history", "Chart placeholder", "Probability changes preserved"],
  ["Source evolution", "Timeline placeholder", "Reliability changes tracked"]
];

export function HistoricalReplayPanel() {
  return (
    <IntelligenceCard title="Historical Replay" subtitle="Rewind future player intelligence state">
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
        {windows.map(([label, value, detail], index) => (
          <div key={label} className="rounded-lg border border-white/10 bg-white/5 p-4">
            <p className="text-xs font-black uppercase tracking-wide text-slate-500">{label}</p>
            <p className="mt-2 font-black text-white">{value}</p>
            <p className="mt-2 text-xs leading-5 text-slate-400">{detail}</p>
            <div className="mt-3">{index < 2 ? <MovementBadge movement="up" value="+ mock" /> : <MovementBadge movement="flat" value="future" />}</div>
          </div>
        ))}
      </div>
    </IntelligenceCard>
  );
}
