import type { DepthChartPosition } from "@/platform/roster/core/roster-types";
import { PositionGroupCard } from "@/components/team-builder/position-group-card";
import { SportCapabilityRegistry } from "@/platform/sports";

export function DepthChartBoard({ positions }: { positions: DepthChartPosition[] }) {
  const representation = SportCapabilityRegistry.getDepthRepresentation(positions[0]?.sportId);

  return (
    <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">{representation.label} board</p>
      <p className="mt-2 text-sm leading-6 text-slate-400">Interactive-style mock sport-specific roster board. No real lineup, rotation, or depth chart claims.</p>
      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {positions.map((position) => <PositionGroupCard key={position.id} position={position} />)}
      </div>
    </section>
  );
}
