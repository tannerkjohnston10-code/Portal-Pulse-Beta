export function MockDataNotice({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`rounded-lg border border-yellow-300/20 bg-yellow-300/10 text-yellow-100 ${compact ? "px-3 py-2 text-xs" : "px-4 py-3 text-sm"}`}>
      Mock data only. Fictional names, placeholder sources, confidence labels, and timestamps are used to validate the product structure.
    </div>
  );
}
