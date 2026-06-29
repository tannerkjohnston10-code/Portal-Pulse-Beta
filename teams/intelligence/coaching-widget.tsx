import { Network } from "lucide-react";
import type { CoachingIntelligence } from "@/types/team-intelligence";
import { TeamPanel } from "@/components/teams/intelligence/team-panel";

export function CoachingWidget({ coaching }: { coaching: CoachingIntelligence }) {
  return (
    <TeamPanel title="Coaching Intelligence" subtitle="Staff context, transfer tendencies, recruiting profile, and coaching tree placeholders." icon={Network}>
      <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
          <p className="text-xs font-black uppercase tracking-wide text-slate-500">Head Coach</p>
          <h3 className="mt-2 text-2xl font-black text-white">{coaching.headCoach}</h3>
          <p className="mt-1 text-sm font-bold text-slate-400">{coaching.tenure}</p>
          <div className="mt-4">
            <div className="mb-1 flex justify-between text-xs font-bold text-slate-400">
              <span>Transfer success</span>
              <span>{coaching.transferSuccessScore}</span>
            </div>
            <div className="h-2 rounded-full bg-white/10">
              <div className="h-full rounded-full bg-cyan-300" style={{ width: `${coaching.transferSuccessScore}%` }} />
            </div>
          </div>
        </div>
        <div className="grid gap-3">
          <Info label="Coordinators" items={coaching.coordinators} />
          <Info label="Portal tendencies" items={coaching.portalTendencies} />
          <Info label="Coaching tree" items={coaching.coachingTree} />
          <p className="rounded-md border border-white/10 bg-white/[0.04] p-3 text-sm font-semibold leading-6 text-slate-300">{coaching.recruitingProfile}</p>
        </div>
      </div>
    </TeamPanel>
  );
}

function Info({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.04] p-3">
      <p className="text-xs font-black uppercase tracking-wide text-slate-500">{label}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-full bg-white/5 px-2.5 py-1 text-xs font-bold text-slate-300">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
