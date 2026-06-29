import { DataTable } from "@/components/ui/data-table";
import { IntelligenceCard } from "@/components/ui/intelligence-card";

export function StatisticsPanel() {
  return (
    <IntelligenceCard title="Statistics" subtitle="Future production and advanced metrics module">
      <DataTable
        headers={["Module", "Status", "Example Fields"]}
        rows={[
          ["Career", "Placeholder", "Games, starts, production"],
          ["Season", "Placeholder", "Year-by-year stats"],
          ["Advanced", "Placeholder", "Efficiency, usage, impact"],
          ["Transfer history", "Placeholder", "Schools, windows, outcomes"],
          ["Awards", "Placeholder", "Honors and academic notes"]
        ]}
      />
    </IntelligenceCard>
  );
}
