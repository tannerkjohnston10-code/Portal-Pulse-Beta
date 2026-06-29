import { PlusCircle } from "lucide-react";

export function DashboardEmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg border border-dashed border-white/15 bg-white/[0.03] p-6 text-center">
      <PlusCircle className="mx-auto text-slate-500" size={26} aria-hidden />
      <h3 className="mt-3 text-base font-black text-white">{title}</h3>
      <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-400">{description}</p>
    </div>
  );
}
