import type { ReputationProfile } from "@/platform/network/network-types";

export function ReputationCard({ reputation }: { reputation: ReputationProfile }) {
  return (
    <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Reputation Engine™</p>
      <div className="mt-3 flex items-end justify-between gap-4">
        <div>
          <p className="text-4xl font-black text-white">{reputation.score}</p>
          <p className="mt-1 text-sm font-bold capitalize text-slate-400">{reputation.contributionLevel.replaceAll("_", " ")}</p>
        </div>
        <span className="rounded-md border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-xs font-black uppercase text-emerald-100">
          {reputation.verificationStatus.replaceAll("_", " ")}
        </span>
      </div>
      <div className="mt-4 grid gap-3">
        {reputation.factors.map((factor) => (
          <div key={factor.label}>
            <div className="flex items-center justify-between gap-3 text-sm font-bold">
              <span className="text-white">{factor.label}</span>
              <span className="text-cyan-200">{factor.score}</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-800">
              <div className="h-full rounded-full bg-cyan-300" style={{ width: `${factor.score}%` }} />
            </div>
            <p className="mt-1 text-xs leading-5 text-slate-500">{factor.explanation}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
