import type { OrganizationalPlan } from "@/platform/gm-workspace/dashboard/gm-workspace-types";

export function ScenarioPlanningCard({ plan }: { plan: OrganizationalPlan }) {
  return (
    <article className="rounded-md border border-white/10 bg-slate-950/70 p-4">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">{plan.planningHorizon} · {plan.classification}</p>
      <h3 className="mt-2 text-base font-black text-white">{plan.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{plan.summary}</p>
      <p className="mt-3 text-sm font-bold text-cyan-100">{plan.recommendation}</p>
    </article>
  );
}
