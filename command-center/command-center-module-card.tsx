import type { LucideIcon } from "lucide-react";
import { IntelligenceCard } from "@/components/ui/intelligence-card";

export function CommandCenterModuleCard({
  icon: Icon,
  title,
  description,
  metric
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  metric?: string;
}) {
  return (
    <IntelligenceCard
      title={title}
      subtitle={description}
      meta={
        <span className="grid h-10 w-10 place-items-center rounded-md bg-cyan-300/12 text-cyan-200">
          <Icon size={18} aria-hidden />
        </span>
      }
    >
      {metric && <p className="text-3xl font-black text-white">{metric}</p>}
      <p className="mt-3 text-xs font-bold text-yellow-100">Mock module placeholder</p>
    </IntelligenceCard>
  );
}
