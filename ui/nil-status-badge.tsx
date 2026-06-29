import type { NILStatus } from "@/types/portal";
import { nilStatusStyles, typography } from "@/lib/design-tokens";

export function NILStatusBadge({ status }: { status: NILStatus }) {
  return <span className={`inline-flex rounded-full border px-2.5 py-1 ${typography.badge} ${nilStatusStyles[status]}`}>{status}</span>;
}
