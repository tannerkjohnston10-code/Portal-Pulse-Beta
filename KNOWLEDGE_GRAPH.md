# Knowledge Graph

## Graph Philosophy

The Portal Pulse Knowledge Graph is the memory and relationship engine of the platform. It connects players, teams, schools, coaches, conferences, claims, sources, predictions, visits, timelines, NIL collectives, regions, roster spots, and transfer classes.

No graph relationship should be treated as fact unless it is source-backed or clearly marked as inferred/mock. Librarian may propose relationships, but the Intelligence Core verifies evidence, confidence, conflicts, and publication readiness.

## Entity Model

Graph entities include Player, Team, School, Conference, Coach, Position, Sport, HighSchool, RecruitingClass, NILCollective, Brand, Source, Claim, Visit, Prediction, TimelineEvent, Region, State, City, TransferClass, and RosterSpot.

Each entity includes id, entity type, display name, aliases, confidence score, source IDs, created/updated timestamps, and `isMock: true` in this phase.

## Relationship Model

Relationship types cover player-school history, team membership, portal events, visits, interest, coach links, teammates, high schools, regions, positions, NIL connections, conference membership, coaching tenures, team needs, competition for players, transfer gains/losses, source-to-claim support, prediction involvement, and timeline involvement.

Each relationship includes id, relationship type, from/to entity IDs, direction, strength score, confidence score, evidence IDs, source IDs, first/last seen timestamps, status, inferred flag, and `isMock: true`.

## Scoring

Relationship strength considers supporting source count, source reliability, recency, directness, repeated mentions, official confirmation, historical connection, contradiction count, and relationship type.

Labels:

- Strong
- Moderate
- Weak
- Inferred
- Conflicting
- Unknown

## Evidence Rules

Relationships should link to graph evidence, claims, and source IDs. Inferred or disputed relationships must stay labeled and reviewable. NIL-related graph edges require extra caution.

## Inference Rules

Inference can propose relationships but cannot publish them. Inferred edges must remain marked with `isInferred: true`, include confidence, cite evidence placeholders, and pass through Intelligence Core review.

## Query Examples

The graph query service prepares:

- `findPlayerNetwork(playerId)`
- `findTeamNetwork(teamId)`
- `findCoachNetwork(coachId)`
- `findRecruitingPipeline(teamId)`
- `findSharedTargets(teamAId, teamBId)`
- `findPlayersConnectedToCoach(coachId)`
- `findPlayersFromRegion(regionId)`
- `findTeamsCompetingForPlayer(playerId)`
- `findConferenceTransferFlow(conferenceId)`
- `findRelationshipPath(fromEntityId, toEntityId)`
- `findStrongestRelationships(entityId)`
- `findWeakOrConflictingRelationships(entityId)`

## Librarian Role

Librarian is the Knowledge Graph analyst in Athena. Librarian proposes new relationships, detects duplicate entities, detects weak relationships, identifies important networks, summarizes relationship context, explains why entities are connected, and submits findings to the Intelligence Core.

Librarian never publishes directly.

## Future Graph Database Options

PostgreSQL remains the primary database. Future graph execution can use PostgreSQL recursive queries, materialized relationship tables, pgvector-assisted entity resolution, Neo4j, Memgraph, or a graph index optimized for traversal and relationship scoring.

## Integration Roadmap

The Knowledge Graph should power Player Intelligence, Team Intelligence, Athena, Oracle, Sentinel, Command Center, transfer maps, recruiting maps, coaching trees, comparisons, AI explanations, API products, and enterprise dashboards.

Current UI includes `/knowledge-graph`, Athena Librarian panel, and reusable graph visualization placeholders.

