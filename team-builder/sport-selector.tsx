import type { SportId } from "@/platform/sports/sport-types";
import { SportCapabilityRegistry } from "@/platform/sports";

export function SportSelector({ sport, sportId }: { sport: string; sportId?: SportId }) {
  const capabilities = SportCapabilityRegistry.getProfile(sportId);

  return (
    <div className="rounded-lg border border-white/10 bg-slate-950/70 p-4">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">Sport selector</p>
      <p className="mt-2 text-lg font-black text-white">{sport}</p>
      <p className="mt-1 text-xs font-bold text-slate-500">{capabilities.depthRepresentationLabel} · {capabilities.starters} starters/active lineup slots</p>
    </div>
  );
}
