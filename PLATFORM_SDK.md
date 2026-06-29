# Portal Pulse Platform SDK

## Platform Philosophy

Portal Pulse is transitioning from an application into a shared intelligence platform. Every product surface should consume reusable platform services instead of duplicating business logic in pages, widgets, mobile apps, APIs, AI tools, or enterprise dashboards.

The platform exists to make players, teams, rankings, predictions, NIL, visits, timelines, knowledge graph data, command center snapshots, AI insights, search, notifications, history, market intelligence, maps, and roster intelligence available through consistent interfaces.

## SDK Architecture

The SDK lives in `/platform` and is composed by `PortalPulsePlatform`:

- `players`
- `teams`
- `rankings`
- `predictions`
- `timeline`
- `nil`
- `visits`
- `insights`
- `search`
- `notifications`
- `knowledgeGraph`
- `analytics`
- `history`
- `market`
- `maps`
- `roster`
- `commandCenter`
- `ai`
- `intelligence`
- `athena`

The SDK delegates to existing shared services such as `playerService`, `teamIntelligenceService`, `rankingService`, `commandCenterService`, and `insightService`.

The Intelligence Core is exposed as `PortalPulsePlatform.intelligence` and should be used for shared significance, confidence, priority, reasoning, explanations, and recommendations.

Athena is exposed as `PortalPulsePlatform.athena` and should be used for agent network status, mock findings, Chief Intelligence Officer status, daily briefings, latest verified mock intelligence, safety evaluation, orchestration, Oracle prediction specialist outputs, Sentinel intake coordinator outputs, and Librarian graph findings. Athena agents may propose intelligence, but they cannot publish directly.

Knowledge Graph is exposed as `PortalPulsePlatform.knowledgeGraph` and powers entity networks, relationship queries, scoring, evidence summaries, inference placeholders, and future graph-backed API/mobile products.

Maps are exposed as `PortalPulsePlatform.maps` and power Cartographer dashboards, spatial flows, map layers, heat zones, geographic analytics, replay hooks, and future GIS/mobile/enterprise map products.

History is exposed as `PortalPulsePlatform.history` and powers Apollo replay dashboards, snapshots, point-in-time views, prediction accuracy, ranking history, and future historical analytics products.

Market intelligence is exposed as `PortalPulsePlatform.market` and powers Mercury TMX dashboards, market movers, momentum, signal strength, position scarcity, conference activity, watchlist market updates, and future market-style API/mobile products.

Roster intelligence is exposed as `PortalPulsePlatform.roster` and powers Atlas Team Builder, Roster DNA, Team Genome, Roster Chemistry, Scholarship IQ, Transfer Fit, opportunity engine, strategy engine, simulations, and future coach-facing enterprise products.

GM Workspace is exposed as `PortalPulsePlatform.gmWorkspace` and powers executive front-office intelligence for Roster Health, Scholarship IQ, Transfer Portfolio, Recruiting Pipeline, Organizational Planning, AI Executive Council recommendations, Investment Board, reports, and Command Center executive widgets.

## Shared Services

Future developers should consume platform SDK modules before reaching for lower-level service files. UI components should never access database logic directly.

Recommended flow:

1. UI or API calls a platform SDK method.
2. SDK delegates to a domain service.
3. Domain service composes repositories, analytics, AI, claims, and sources.
4. UI receives typed domain data.

## Event Bus

`platform/events` defines an internal event bus for:

- `PlayerUpdated`
- `ClaimVerified`
- `PredictionChanged`
- `VisitAdded`
- `CommitmentRecorded`
- `NILUpdated`
- `RankingChanged`
- `TeamUpdated`
- `TimelineUpdated`
- `ConferenceUpdated`
- `InsightGenerated`
- `HistoricalSnapshotCreated`

Future modules should publish events when domain data changes and subscribe for cache invalidation, notifications, snapshots, and analytics refreshes.

## Caching Strategy

`platform/cache` prepares an in-memory mock cache that can later be replaced by Redis or an equivalent store. Cache namespaces include player profiles, team dashboards, command center snapshots, rankings, AI insights, conference dashboards, search results, and prediction summaries.

Cache invalidation should eventually be event-driven.

## Analytics SDK

`platform/analytics` centralizes reusable calculations:

- Portal Pulse Score
- Momentum
- Roster strength
- Team need
- Prediction confidence
- Source reliability
- Conference movement
- Portal velocity

Current methods are placeholders or adapters over existing mock services.

## History SDK

`platform/history` prepares point-in-time queries, daily snapshots, weekly snapshots, replay, historical comparisons, ranking history, and prediction history. Future entities should preserve snapshots automatically rather than overwriting important facts.

## Search SDK

`platform/search` wraps the existing shared search service. All future modules should use this unified search interface instead of implementing their own search logic.

## Notification SDK

`platform/notifications` prepares publish, subscribe, unsubscribe, route-by-preference, and multi-channel notification delivery for website, mobile, email, SMS, push, Discord, Slack, and public API consumers.

## Future API Strategy

`platform/api` defines versioned resource contracts for future API exposure:

- Players
- Teams
- Rankings
- Predictions
- NIL
- Timeline
- Insights
- Search
- Statistics
- Historical Replay

Full API route implementation is intentionally deferred.

The first internal versioned API foundation now lives under `/app/api/v1` and uses shared platform SDK/services plus standardized response wrappers, serializers, error payloads, auth placeholders, rate-limit placeholders, usage tracking placeholders, and webhook contracts.

## Versioning Strategy

`platform/versioning` keeps SDK module versions explicit. Future `v2` modules can coexist with `v1` contracts to avoid breaking consumers.

## Extensibility Principles

- Reuse SDK modules before adding new service logic.
- Keep business logic out of UI components.
- Keep AI review-gated and source-aware.
- Route AI agent findings through Athena and the Intelligence Core.
- Publish events for important domain changes.
- Preserve history for important entities.
- Cache shared snapshots through platform cache.
- Add contracts before exposing public APIs.
- Prefer typed platform results over raw database models.
