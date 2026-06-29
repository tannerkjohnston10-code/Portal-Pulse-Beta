export function PortalGradeBadge({ grade }: { grade: string }) {
  return (
    <span className="inline-flex min-w-12 justify-center rounded-md border border-yellow-300/30 bg-yellow-300/12 px-2.5 py-1 text-sm font-black text-yellow-100">
      {grade}
    </span>
  );
}
