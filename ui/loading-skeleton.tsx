export function LoadingSkeleton() {
  return (
    <div className="grid gap-3" aria-label="Loading">
      <div className="h-5 w-40 animate-pulse rounded bg-white/10" />
      <div className="h-28 animate-pulse rounded-lg bg-white/10" />
      <div className="h-28 animate-pulse rounded-lg bg-white/10" />
    </div>
  );
}
