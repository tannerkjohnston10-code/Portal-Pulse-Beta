import type { PortalStatus } from "@/types/portal";

const statusStyles: Record<PortalStatus, string> = {
  entered: "bg-cyan-400/12 text-cyan-200 ring-cyan-400/30",
  available: "bg-blue-400/12 text-blue-200 ring-blue-400/30",
  committed: "bg-emerald-400/12 text-emerald-200 ring-emerald-400/30",
  signed: "bg-violet-400/12 text-violet-200 ring-violet-400/30",
  withdrawn: "bg-rose-400/12 text-rose-200 ring-rose-400/30",
  enrolled: "bg-blue-400/12 text-blue-200 ring-blue-400/30",
  unknown: "bg-slate-500/12 text-slate-300 ring-slate-500/30"
};

export function StatusBadge({ status }: { status: PortalStatus }) {
  return (
    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-black uppercase tracking-wide ring-1 ${statusStyles[status]}`}>
      {status}
    </span>
  );
}
