import Link from "next/link";
import { PageFrame } from "@/components/layout/page-frame";
import { EmptyState } from "@/components/ui/empty-state";

export default function NotFoundPage() {
  return (
    <PageFrame
      eyebrow="Not found"
      title="Signal Not Found"
      description="The requested Portal Pulse page or record does not exist in the current foundation dataset."
    >
      <EmptyState title="No matching record" description="This may be a future route, a removed mock record, or a profile that has not been created yet." />
      <Link href="/" className="mt-4 inline-flex min-h-11 items-center rounded-md bg-cyan-300 px-4 text-sm font-black text-slate-950 hover:bg-white">
        Return home
      </Link>
    </PageFrame>
  );
}
