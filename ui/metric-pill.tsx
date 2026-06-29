export function MetricPill({ label, value }: { label: string; value: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm">
      <span className="font-bold text-slate-500">{label}</span>
      <span className="font-black text-white">{value}</span>
    </span>
  );
}
