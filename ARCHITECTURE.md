# Portal Pulse Architecture

Portal Pulse is designed to become the Bloomberg Terminal of College Athletics. The architecture starts with the NCAA Transfer Portal and is organized so future phases can add recruiting, NIL, rosters, depth charts, analytics, coaching changes, historical snapshots, source intelligence, predictions, alerts, premium dashboards, and public API access without collapsing the app into one tangled layer.

## Product Architecture Summary

The system is divided into:

- Frontend routes and reusable components in `app/` and `components/`
- Domain types in `types/`
- Config, constants, formatters, validators, and errors in `lib/`
- Service layer in `server/services/`
- Repository layer in `server/repositories/`
- Future ingestion, AI, search, analytics, notifications, and admin modules in `server/`
- Database schema in `prisma/`
- Mock data in `data/mock/`

The UI should never directly depend on Prisma models. Pages should request domain-oriented data through services. Services coordinate business logic. Repositories own database access and are currently mock-backed until the database phase.

## Frontend Structure

`app/` contains Next.js App Router pages and API routes. Product pages remain server components unless client interactivity is required.

`components/layout/` owns the app shell, navigation, footer, and page frame.

`components/ui/` owns reusable primitives such as badges, section headers, empty states, loading skeletons, and source display.

Feature components are grouped by domain:

- `components/dashboard/`
- `components/command-center/`
- `components/players/`
- `components/teams/`
- `components/rankings/`
- `components/nil/`
- `components/visits/`
- `components/predictions/`
- `components/admin/`

## Server And Service Structure

`server/services/` is the business logic layer. It exposes stable methods such as `getPlayers`, `getPlayerDetails`, `getTeamRankings`, `getNILReports`, and `getReviewQueue`.

Services are responsible for:

- Filtering and composing data
- Calling repositories
- Applying domain rules
- Preparing future claim/source workflows
- Keeping UI code away from persistence details

## Command Center Architecture

The Command Center is the future flagship dashboard layer. It composes high-level intelligence modules through `server/services/command-center-service.ts` and domain-specific analytics services:

- `server/analytics/market-movers-service.ts`
- `server/analytics/portal-momentum-service.ts`
- `server/analytics/conference-activity-service.ts`
- `server/ai/briefings/briefing-service.ts`

The Command Center should aggregate already verified or reviewable claim data. It should not become a second database access layer and should not let UI modules infer facts directly from raw sources.

## Team Intelligence Architecture

`server/services/team-intelligence-service.ts` composes the reusable `TeamIntelligenceProfile` view model used by `/teams/[id]`. The Team Intelligence Center is intentionally modular: score, roster, depth chart, needs, portal class, momentum, timeline, coaching, AI storylines, recruiting pipeline, conference comparison, and team comparison widgets all consume typed domain data instead of recalculating business logic in UI components.

Future phases should replace mock profile internals with data from team records, roster records, depth charts, player movement, source-backed claims, prediction history, NIL records, coaching records, and analytics services while preserving the component contracts.

## Rankings Intelligence Architecture

`server/rankings/` contains the modular rankings engine and category services. `server/services/ranking-service.ts` provides UI and future API consumers with shared summaries for players, teams, conferences, positions, NIL markets, and momentum. Ranking UI components in `components/rankings/` render tables, cards, rank movement, confidence, history placeholders, filters, tabs, explanations, and methodology without duplicating ranking logic.

The Command Center consumes ranking movers through `rankingService.getCommandCenterRankingMovers()`.

## Platform SDK Architecture

`platform/` is the shared intelligence layer for future websites, mobile apps, APIs, premium dashboards, AI assistants, analytics engines, and enterprise products. `platform/core/portal-pulse-platform.ts` composes SDK modules for players, teams, rankings, predictions, timeline, NIL, visits, insights, search, notifications, knowledge graph, analytics, history, maps, AI policy, and Command Center data.

Future features should consume SDK modules first, then domain services, and only repositories as an implementation detail.

## Intelligence Core Architecture

`platform/intelligence/` is the central reasoning layer for significance, confidence, priority, explanations, and recommendations. It separates facts, claims, evidence, intelligence, predictions, and recommendations. Future pages, widgets, API routes, AI features, and notifications should consume `PortalPulsePlatform.intelligence` instead of implementing local reasoning logic.

The core pipeline includes signal collection, normalization, evidence grouping, confidence calculation, conflict detection, importance scoring, reasoning, explanation generation, recommendation generation, and delivery.

## Constitution And Athena Architecture

`docs/PORTAL_PULSE_CONSTITUTION.md` defines the operating rules for product, engineering, data trust, AI, API, mobile, accessibility, performance, and enterprise readiness. The Constitution is binding on future feature work.

`platform/athena/` prepares the Athena Intelligence Network. Agents such as Athena, Oracle, Sentinel, Atlas, Vega, Mercury, Apollo, Hermes, Archivist, Cartographer, and Librarian produce mock proposals only. They attach evidence, confidence reasoning, and affected entities, then submit proposals to the Intelligence Core. Agents cannot publish conclusions directly.

`PortalPulsePlatform.athena` exposes network status, latest mock findings, briefing placeholders, orchestration, evaluation, and safety checks for future web, mobile, API, and enterprise consumers.

## Intelligence API Architecture

`app/api/v1/` exposes the internal versioned API foundation. Routes use standardized response wrappers from `platform/api/v1`, serializers from `platform/api/serializers`, and shared platform SDK/service methods. API middleware placeholders prepare request context, API consumers, scopes, rate limits, usage tracking, and future webhook delivery without exposing unsafe internal data.

## Repository Pattern

`server/repositories/` separates database access from business logic.

Repositories currently read from `data/mock/portal-data.ts`. This is temporary and clearly marked. In the database phase, repository internals should be replaced with Prisma queries while service and UI contracts remain stable.

## Claim Architecture

A claim is not the same as a fact. A future Portal Pulse claim includes:

- `id`
- `claimType`
- `subjectType`
- `subjectId`
- `value`
- `status`
- `confidenceLevel`
- `confidenceScore`
- `sourceIds`
- `firstSeenAt`
- `lastSeenAt`
- `reviewedBy`
- `reviewedAt`
- `notes`

Every future user-facing claim should flow through `claimService`.

## Source Intelligence Architecture

Sources have type, URL, confidence, and freshness metadata. Source scoring should eventually account for:

- Source type
- Historical reliability
- Recency
- Corroboration
- Conflict state
- Official versus reported versus rumored status

`sourceService` owns source reliability and stale-source detection.

## AI Placeholder Architecture

No AI extraction is implemented yet. Future AI flow:

1. Ingestion finds public content.
2. Parser extracts source text.
3. AI extraction creates structured claim candidates.
4. Confidence scorer evaluates claim reliability.
5. Claim service checks duplicates and conflicts.
6. Admin review handles low-confidence or conflicting claims.
7. Approved claims update product surfaces.

AI must not invent facts or sources.

## AI Insights Architecture

`server/ai/insights/` contains the explainable insight pipeline:

- `insight-engine.ts` orchestrates signal gathering, grouping, generation, validation, review routing, and approved insight output.
- `insight-generator.ts` converts grouped signals into structured insight candidates.
- `insight-ranker.ts` scores importance from recency, confidence, source count, prediction movement, NIL movement, conference impact, watchlist relevance, conflict severity, and historical significance.
- `insight-explainer.ts` creates structured explanation fields rather than free-form unsupported prose.
- `insight-validator.ts` routes low-confidence, weak-evidence, conflicting, NIL-sensitive, duplicate-risk, or high-impact insights to review.

UI surfaces consume insights through `server/services/insight-service.ts`. Future implementations should source signals from verified claims and admin-reviewed records, never directly from raw scraped text.

## Search Placeholder Architecture

`server/search/search-service.ts` provides local mock filtering for now. Future search should support players, teams, sources, NIL reports, predictions, and admin claims. The architecture should be able to move to a dedicated search index without changing UI contracts.

## Notification Placeholder Architecture

`server/notifications/notification-service.ts` prepares for watchlists and alerts. Future channels include email, in-app, and SMS. Alerts should be triggered by claim changes, prediction movement, NIL updates, visits, rankings, and watched entities.

## Scalability Notes

Future scale targets include millions of players, source records, claims, and historical snapshots. To support this:

- Keep services and repositories separated.
- Use typed domain models rather than raw database shapes in UI.
- Store claims as structured records.
- Index by player, team, source, claim type, timestamps, and confidence.
- Preserve historical snapshots instead of overwriting important changes.
- Use API validation and rate limiting before public API expansion.

## Future Technical Roadmap

Near-term:

- Replace mock repositories with Prisma queries.
- Add migrations and seed scripts.
- Add source and claim tables.
- Add service tests.

Mid-term:

- Add ingestion queues.
- Add admin authentication.
- Add AI extraction with review gates.
- Add search indexing.
- Add historical snapshots.

Long-term:

- Add premium accounts.
- Add watchlists and alerts.
- Add public API.
- Add real-time dashboards.
