export function SkeletonWidget() {
  return (
    <div className="rounded-lg border border-white/10 bg-slate-950/70 p-4" aria-label="Widget loading placeholder">
      <div className="h-5 w-40 animate-pulse rounded bg-white/10" />
      <div className="mt-5 grid gap-3">
        <div className="h-16 animate-pulse rounded bg-white/10" />
        <div className="h-16 animate-pulse rounded bg-white/10" />
        <div className="h-16 animate-pulse rounded bg-white/10" />
      </div>
    </div>
  );
}
