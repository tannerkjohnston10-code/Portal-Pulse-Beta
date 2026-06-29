import type { LucideIcon } from "lucide-react";
import { StatCard } from "@/components/ui/stat-card";

export function DashboardCard({ label, value, note, icon: Icon }: { label: string; value: string; note: string; icon: LucideIcon }) {
  return <StatCard icon={Icon} label={label} value={value} note={note} />;
}
