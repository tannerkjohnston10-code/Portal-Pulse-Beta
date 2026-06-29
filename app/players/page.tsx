import { PageFrame } from "@/components/layout/page-frame";
import { PlayerCard } from "@/components/players/player-card";
import { PlayerTable } from "@/components/players/player-table";
import { FilterBar } from "@/components/ui/filter-bar";
import { MockDataNotice } from "@/components/ui/mock-data-notice";
import { SearchInput } from "@/components/ui/search-input";
import { SectionHeader } from "@/components/ui/section-header";
import { playerService } from "@/server/services/player-service";

const filters = ["Sport", "Position", "Previous school", "Current status", "Conference", "Commitment probability", "NIL status"];

export default async function PlayersPage() {
  const players = await playerService.getPlayers();

  return (
    <PageFrame
      eyebrow="Player database"
      title="Searchable Transfer Portal Database"
      description="A foundation shell for filtering players by sport, position, school, status, conference, commitment probability, and NIL status."
    >
      <div className="grid gap-6">
        <MockDataNotice />
        <section className="grid gap-3">
          <SearchInput placeholder="Search mock players, schools, positions..." />
          <FilterBar filters={filters} />
        </section>
        <section>
          <SectionHeader title="Player Cards" description="Mobile-friendly scan cards for the initial player intelligence workflow." />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {players.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </section>
        <section>
          <SectionHeader title="Database Table" description="Desktop-ready structure for future sorting, saved views, and premium filters." />
          <PlayerTable players={players} />
        </section>
      </div>
    </PageFrame>
  );
}
