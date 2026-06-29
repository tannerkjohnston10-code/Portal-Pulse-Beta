# Portal Pulse

Portal Pulse is a premium AI-powered college athletics intelligence platform. The first product focus is the NCAA Transfer Portal, with a long-term goal of becoming the Bloomberg Terminal of College Athletics.

Primary tagline:

**The Transfer Portal, Decoded.**

## Product Vision

Portal Pulse organizes public reporting, structured data, confidence scoring, and timestamps into a trusted intelligence dashboard for college athletics. The foundation starts with transfer portal tracking and is designed to expand into recruiting, NIL intelligence, rosters, depth charts, team analytics, player movement, coaching changes, conference trends, historical data, alerts, prediction models, premium dashboards, public accounts, private accounts, and admin verification workflows.

## Current Phase

Completed:

- Volume 1, Prompt 1 — App Foundation
- Volume 1, Prompt 2 — Architectural Foundation
- Volume 1, Prompt 3 — Enterprise Database & Data Model
- Volume 1, Prompt 4 — Source Intelligence & Data Ingestion Architecture
- Volume 1, Prompt 5 — AI Intelligence Engine, Knowledge Graph & Claim Verification
- Volume 1.5 — UX Vision & Design System
- Volume 2, Prompt 1 — Elite Player Intelligence Center
- Roadmap Alignment & Command Center Preparation
- Volume 2, Prompt 2 — Portal Pulse Command Center
- Volume 2, Prompt 3 — AI Insights Engine
- Volume 2, Prompt 4 — Elite Team Intelligence Center
- Volume 2, Prompt 5 — Rankings Intelligence Platform
- Volume 2, Prompt 6 — Portal Pulse Platform SDK
- Volume 2, Prompt 7 — Intelligence API & Developer Platform
- Volume 2, Prompt 8 — Portal Pulse Intelligence Core
- Volume 2, Prompt 9 — Portal Pulse Constitution & Athena Intelligence Network Preparation
- Volume 3, Prompt 1 — Athena Chief Intelligence Officer
- Volume 3, Prompt 2 — Oracle Prediction Specialist
- Volume 3, Prompt 3 — Sentinel Intelligence Intake Coordinator
- Volume 3, Prompt 4 — Librarian Knowledge Graph & Relationship Intelligence
- Volume 3, Prompt 5 — Cartographer Spatial Intelligence Engine
- Volume 3, Prompt 6 — Apollo Historical Replay Engine
- Volume 3, Prompt 7 — Mercury Transfer Market Exchange
- Volume 3, Prompt 8.5 — Atlas Roster Intelligence, Team Builder & Front Office Simulator
- Founder Book Sprint 1 — Founder Book Structure & Master Company Blueprint
- Founder Book Sprint 2 — Volume I: The Vision
- Product Bible Sprint 1 — Product Bible Structure
- Initiative 5 — Portal Pulse Design Operating System
- Product Bible Sprint 2 — Complete Product Specifications
- Founder Book Sprint 1 — Build the Portal Pulse Founder Book
- Initiative 5 — Technical Architecture Bible
- Initiative 5.4 — Engineering Standards Manual
- Initiative 6 — Portal Pulse Design Operating System
- Initiative 7 — Portal Pulse Labs
- Initiative 8 — Program Intelligence Workspace
- Initiative 10 — GM Workspace
- Initiative 10.5 — Multi-Sport Foundation
- Initiative 11 — Portal Pulse Network
- Initiative 12 — Production Readiness & Enterprise Foundation
- Initiative 13 — Real-Time Intelligence Pipeline
- Initiative 14 — Portal Pulse Experience / Beta Experience & Launch Readiness

The app now has centralized config, domain constants, typed validation helpers, typed errors, service and repository layers, API route shells, architecture documentation, an enterprise Prisma/PostgreSQL schema with fictional seed data, a compliant mock ingestion architecture, a modular AI intelligence architecture, a reusable design system, an Elite Player Intelligence Center, the flagship Portal Pulse Command Center, an AI Insights Engine, an Elite Team Intelligence Center, a Rankings Intelligence Platform, the Portal Pulse Platform SDK, an Intelligence API & Developer Platform foundation, the Portal Pulse Intelligence Core, the Portal Pulse Constitution, Athena Intelligence Network preparation, the Athena Chief Intelligence Officer foundation, Oracle Prediction Specialist preparation, Sentinel Intelligence Intake Coordinator preparation, Librarian Knowledge Graph preparation, Cartographer Spatial Intelligence preparation, Apollo Historical Replay preparation, the Mercury Transfer Market Exchange foundation, the Atlas Team Builder foundation, Portal Pulse Labs, the Program Intelligence Workspace, GM Workspace, the Multi-Sport Foundation, Portal Pulse Network, the Production Readiness & Enterprise Foundation, the Real-Time Intelligence Pipeline, the Portal Pulse Experience beta layer, the Portal Pulse Founder Book, the expanded Founder Book Volume I vision narrative, the Portal Pulse Product Bible structure, the Portal Pulse Design Operating System, complete Product Bible specifications for core modules, the Portal Pulse Technical Architecture Bible, and the Portal Pulse Engineering Standards Manual.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Prisma ORM
- PostgreSQL/Supabase-ready schema
- React Server Components where useful
- Vercel-ready deployment structure

`shadcn/ui` is not installed in this environment, so the foundation uses local reusable components with Tailwind design tokens.

## Install

```bash
npm install
```

Create an environment file:

```bash
cp .env.example .env
```

Generate Prisma client:

```bash
npm run prisma:generate
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Database Setup

The Prisma schema is PostgreSQL/Supabase-ready and now contains enterprise models for players, teams, schools, sports, rosters, depth charts, portal entries, player movement, NIL, predictions, rankings, claims, sources, admin review, alerts, notifications, recruiting relationships, coaches, and historical snapshots.

Set these variables in `.env`:

- `DATABASE_URL`
- `DIRECT_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Run migrations after connecting a database:

```bash
npm run prisma:migrate
```

Seed fictional mock data:

```bash
npm run prisma:seed
```

## Folder Structure

```text
app/
  api/
  admin/
  athena/
  command-center/
  coach/
  developers/
  design-system/
  insights/
  nil/
  players/
  predictions/
  rankings/
  realtime/
  platform/
    admin/
      beta/
  teams/
  visits/
components/
  admin/
  athena/
  command-center/
  beta/
  dashboard/
  insights/
  layout/
  nil/
  players/
  predictions/
  rankings/
  realtime/
  teams/
  ui/
  visits/
data/
  mock/
    command-center/
    insights/
    rankings/
    team-intelligence/
docs/
lib/
  config/
  constants/
  errors/
  formatters/
  validators/
prisma/
platform/
  ai/
  analytics/
  api/
    v1/
  athena/
  auth/
  backups/
  cache/
  config/
  core/
  deployment/
  errors/
  events/
  feature-flags/
  history/
  hooks/
  intelligence/
  jobs/
  knowledge-graph/
  labs/
  logging/
  market/
  maps/
  metrics/
  monitoring/
  program-intelligence/
  organizations/
  permissions/
  recovery/
  realtime/
  roster/
  notifications/
  sdk/
  search/
  security/
  state/
  testing/
  types/
  users/
  utils/
  versioning/
server/
  admin/
  ai/
  analytics/
  ingestion/
  notifications/
  repositories/
  rankings/
  search/
  services/
tests/
types/
founder-book/
product-bible/
  products/
    specs/
design-system/
technical-bible/
engineering-standards/
```

## Architecture Overview

Portal Pulse uses a layered architecture:

- **Production Foundation:** `AuthService`, `PermissionService`, `OrganizationService`, `ApiGateway`, `JobQueue`, `FeatureFlagService`, observability services, security services, deployment config, backup policies, and recovery plans prepare the platform for SaaS and enterprise operation.
- **Real-Time Intelligence Pipeline:** `RealtimeSDK`, source registry, claim candidate stream, pipeline stages, event bus taxonomy, Knowledge Graph proposals, AI agent notifications, dashboard distribution hooks, alert queue placeholders, and monitoring snapshots prepare Portal Pulse for living intelligence updates.
- **Portal Pulse Experience:** Demo Mode, beta feedback, walkthrough guidance, polished homepage discovery, Coach Workspace entry, Beta Ops metrics, navigation improvements, and beta readiness documentation prepare the platform for internal beta review.

- UI routes and components render domain data.
- Platform SDK modules in `platform/` expose reusable intelligence contracts for current and future consumers.
- Services in `server/services/` handle business logic.
- Repositories in `server/repositories/` isolate persistence access.
- Mock repositories currently read from `data/mock/`.
- API routes in `app/api/` call services, not raw mock data.
- Config, navigation, feature flags, constants, validators, and errors live in `lib/`.

Future database work should replace repository internals with Prisma queries while preserving service and UI contracts.

## Technical Architecture Bible

`technical-bible/PORTAL_PULSE_TECHNICAL_ARCHITECTURE.md` is the primary engineering architecture document. It explains the platform overview, data flow, Knowledge Graph, AI architecture, Platform SDK, API Platform, intended infrastructure, security model, testing strategy, scalability path, future expansion, and architecture diagram placeholders.

New engineers should read the Technical Architecture Bible before writing platform code, especially when touching shared services, Intelligence Core, Platform SDK, AI agents, APIs, ingestion, data trust, or enterprise-facing systems.

## Engineering Standards Manual

`engineering-standards/ENGINEERING_STANDARDS.md` is the mandatory engineering playbook for Portal Pulse. It defines engineering philosophy, repository standards, coding standards, naming conventions, architecture rules, UI standards, AI standards, API standards, testing, security, performance, documentation, pull request requirements, Definition of Done, and engineering culture.

Future contributors and AI coding assistants should follow the Engineering Standards Manual before designing, writing, reviewing, testing, or documenting code.

## Portal Pulse Labs

`/labs` is the Portal Pulse Labs workspace for mock simulations, scenario analysis, projections, user configurations, and experimentation. Labs is separate from verified reporting. All Labs outputs must be labeled as simulation-only and must not be treated as real transfer, roster, NIL, prediction, or source claims.

Labs architecture lives under `platform/labs/`, reusable UI components live under `components/labs/`, and documentation lives in `docs/PORTAL_PULSE_LABS.md`.

## Program Intelligence Workspace

`/programs/[programId]` is the Program Intelligence Workspace powered internally by the Digital Twin Engine. It unifies mock program overview, roster intelligence, transfer activity, recruiting, portal pipeline, coaching, scholarship planning, depth chart, Knowledge Graph, Historical Replay, market context, rankings, timeline, AI insights, and evidence summaries.

Every module labels whether it displays verified information, analysis, historical context, predictions, or simulations. The architecture lives under `platform/program-intelligence/`, UI components live under `components/program-intelligence/`, and documentation lives in `docs/PROGRAM_INTELLIGENCE_WORKSPACE.md`.

## Platform SDK

Future developers should consume `PortalPulsePlatform` from `platform/` before adding new app-specific logic. The SDK exposes players, teams, rankings, predictions, timeline, NIL, visits, insights, search, notifications, knowledge graph, analytics, history, market, maps, roster, AI policy, and Command Center modules.

The platform also includes shared events, cache, state, API contracts, versioning, observability, and testing utilities. New features should prefer SDK methods, shared services, shared types, and shared events over duplicate business logic.

## Intelligence API

Versioned internal API routes live under `/api/v1`. They use standardized response wrappers, API errors, serializers, auth placeholders, rate-limit placeholders, usage tracking placeholders, and webhook contracts. Current routes are mock/demo only and consume the Platform SDK or shared services rather than raw mock data.

## Intelligence Core

`platform/intelligence/` is the shared reasoning layer for significance, confidence, priority, explanations, evidence, conflicts, recommendations, watchlist intelligence, and personalization placeholders. Future pages, widgets, APIs, notifications, and AI features should consume `PortalPulsePlatform.intelligence` rather than deciding importance or confidence locally.

## Portal Pulse Constitution

`docs/PORTAL_PULSE_CONSTITUTION.md` is the operating charter for the product and engineering system. It defines non-negotiables for source-backed intelligence, explainable AI, claim vs fact vs prediction separation, NIL caution, API safety, accessibility, performance, mobile readiness, and enterprise readiness.

Core rule: no AI agent may publish a conclusion directly. Agents may propose findings; the Intelligence Core verifies evidence, applies confidence scoring, checks conflicts, and determines what can surface.

## Founder Book

`founder-book/PORTAL_PULSE_FOUNDER_BOOK.md` is the internal company blueprint for Portal Pulse. It defines why the company exists, the official mission, long-term vision, company values, product philosophy, customer promises, ten-year ambition, and decision principles for founders, engineers, designers, investors, advisors, partners, and early employees.

## Product Bible

`product-bible/PORTAL_PULSE_PRODUCT_BIBLE.md` is the central product reference for Portal Pulse. It defines product philosophy, business units, product catalog, personas, workspace navigation, documentation standards, roadmap, and glossary. Future features should be documented in the Product Bible before implementation.

The complete module specification library lives under `product-bible/products/specs/`. It currently documents Command Center, Player Intelligence Center, Team Intelligence Center, Rankings Intelligence Platform, Athena, Oracle, Sentinel, Librarian, Cartographer, Apollo, Mercury, Atlas, Knowledge Graph, Historical Replay, Transfer Market Exchange, API Platform, and Developer Platform. The master catalog is `product-bible/products/MASTER_PRODUCT_CATALOG.md`, and the cross-module relationship diagram is `product-bible/platform/CROSS_MODULE_RELATIONSHIP_DIAGRAM.md`.

## Design Operating System

`design-system/PORTAL_PULSE_DESIGN_OS.md` is the Portal Pulse Design Operating System. PP-DOS defines the visual language, semantic tokens, color system, typography, iconography, layout system, component library, data visualization rules, motion principles, accessibility standards, responsive behavior, design review checklist, Intelligence Stream, Explain This interaction, and future design expansion rules.

## Athena Intelligence Network

`platform/athena/` prepares specialized AI analyst shells for Athena, Oracle, Sentinel, Atlas, Vega, Mercury, Apollo, Hermes, Archivist, Cartographer, and Librarian. These agents produce mock proposals only. They do not call external AI, scrape sources, publish findings, or bypass the Intelligence Core.

Athena now has a Chief Intelligence Officer foundation with `platform/athena/athena-core.ts`, a daily briefing generator, safety rules, evaluation, orchestration, latest verified mock intelligence, and SDK access through `PortalPulsePlatform.athena`.

Oracle lives under `platform/athena/agents/oracle/` and prepares projection-only prediction intelligence with mock signals, supporting reasons, risk factors, history placeholders, uncertainty explanations, and Intelligence Core recommendations.

Sentinel lives under `platform/athena/agents/sentinel/` and prepares the public information intake pipeline: source detection, compliance validation, normalization, duplicate detection, conflict scan, priority scoring, claim candidate routing, evidence attachment, Intelligence Core submission, and admin review routing.

Librarian and the Knowledge Graph live under `platform/knowledge-graph/` and `platform/athena/agents/librarian/`. The graph connects mock entities and relationships with evidence IDs, source IDs, confidence, inferred flags, and Core-gated relationship findings.

Cartographer and Spatial Intelligence live under `platform/maps/` and `platform/athena/agents/cartographer/`. Maps visualize graph-backed mock relationships, transfer flows, recruiting pipelines, heat zones, layer controls, and replay hooks without creating claims.

Apollo and Historical Replay live under `platform/history/` and `platform/athena/agents/apollo/`. Replay preserves mock snapshots, prediction states, source counts, confidence at time, timeline events, comparison records, and prediction accuracy placeholders without rewriting history.

TMX and Mercury live under `platform/market/` and `platform/athena/agents/mercury/`. The Transfer Market Exchange is a flagship market-style intelligence dashboard for activity, momentum, demand, competition, confidence, source activity, position scarcity, conference activity, and watchlist movement. This is an analytical metaphor only and never treats athletes as financial assets.

Atlas and Team Builder live under `platform/roster/` and `platform/athena/agents/atlas/`. Atlas prepares Roster DNA, Team Genome, Roster Chemistry, Scholarship IQ, Transfer Fit, opportunity, strategy, simulation, and forecast modules using mock, projected, assumption-based data only.

GM Workspace lives under `platform/gm-workspace/` and exposes executive front-office intelligence through `PortalPulsePlatform.gmWorkspace`. It prepares Roster Health Score, Scholarship IQ, Transfer Portfolio, Recruiting Pipeline, Organizational Planning, AI Executive Council, Investment Board, reports, and a `/gm` executive dashboard using mock, projected, and simulation-labeled data only.

## Multi-Sport Foundation

Portal Pulse now supports Sport Engine architecture under `platform/sports/` for football, men's basketball, women's basketball, baseball, and softball. Future services should consume `PortalPulsePlatform.sports.capabilities` for questions such as scholarship equivalencies, roster spots, position groups, transfer windows, and depth/lineup representation.

Universal sport-aware types include Athlete, Program, Season, Sport, Conference, TransferEvent, Visit, Recruitment, NILOpportunity, RosterSlot, Scholarship, and Eligibility. The Knowledge Graph scopes nodes by sport, season, conference, division, and program. Search supports sport, position, conference, program, athlete, transfer status, and portal year filters.

## Portal Pulse Network

Portal Pulse Network lives under `platform/network/` and exposes collaboration intelligence through `PortalPulsePlatform.network`. It prepares professional profiles, Reputation Engine, Intelligence Feed, structured reports, shared watchlists, sport communities, Network search, notifications, moderation placeholders, Knowledge Exchange, and workspace-sharing placeholders. It is not social media, a forum, or a message board.

The `/athena` route shows the polished CIO dashboard with agent cards, mock findings, network status, daily briefing, verified mock intelligence, a disabled Ask Athena input, suggested questions, and evidence-first disclaimers.

## Command Center

Portal Pulse is now aligned around the Command Center as the flagship product surface. The Command Center is the homepage-grade intelligence terminal for live-style portal movement, AI briefings, market movers, prediction movers, team momentum, NIL movement, conference activity, watchlists, global search, transfer map views, an AI assistant dock, and future personalized morning briefings.

Command Center assets include:

- `types/command-center.ts` for dashboard module contracts.
- `data/mock/command-center/command-center-data.ts` for clearly labeled fictional mock records.
- `server/services/command-center-service.ts` for snapshot composition.
- `server/analytics/market-movers-service.ts`
- `server/analytics/portal-momentum-service.ts`
- `server/analytics/conference-activity-service.ts`
- `server/ai/briefings/briefing-service.ts`
- `components/command-center/` for the modular widget system.
- `/command-center` flagship dashboard route.

Future personalization should add drag-and-drop widgets, resize controls, saved layouts, multiple dashboard views, premium module visibility, and user-specific watchlist briefings. UI components should continue consuming service-shaped data and must not depend directly on raw database models.

## Mock Data Disclaimer

This phase uses fictional mock records only. Mock players, teams, updates, NIL reports, visits, predictions, rankings, and admin claims include `isMock: true` and placeholder source URLs.

Do not treat any mock record as a real NCAA transfer portal claim. Future real data must include source URLs, confidence levels, timestamps, and verification status.

## Data Trust Principles

- A claim is not the same as a fact.
- Every claim should have source URLs, confidence, timestamps, and review status.
- NIL values must be labeled as confirmed, reported, estimated, rumored, or unknown.
- Predictions are projections, not reports.
- Conflicting information should be flagged and routed to review.
- AI must never invent facts or cite nonexistent sources.

## Current Routes

- `/` home dashboard
- `/players` player database shell
- `/players/[id]` player profile shell
- `/command-center` flagship Command Center
- `/athena` Athena Intelligence Network placeholder
- `/knowledge-graph` Knowledge Graph relationship intelligence
- `/maps` Cartographer spatial intelligence
- `/replay` Apollo historical replay
- `/market` Mercury Transfer Market Exchange
- `/market/positions/[position]` position market intelligence
- `/team-builder` Atlas roster intelligence and simulator
- `/gm` GM Workspace executive front-office intelligence
- `/network` Portal Pulse Network collaboration intelligence
- `/labs` Portal Pulse Labs simulation workspace
- `/programs/[programId]` Program Intelligence Workspace
- `/insights` AI Insights Engine feed
- `/teams/[id]` Team Intelligence Center
- `/rankings` Rankings Intelligence overview
- `/rankings/players` player transfer rankings
- `/rankings/teams` team transfer rankings
- `/rankings/conferences` conference transfer rankings
- `/rankings/positions` position group rankings
- `/rankings/nil` NIL market rankings
- `/rankings/momentum` momentum rankings
- `/nil` NIL intelligence shell
- `/visits` visits tracker
- `/predictions` prediction center
- `/admin` admin verification shell
- `/developers` developer platform placeholder

## Future Phases Roadmap

1. App Foundation
2. Architectural Foundation
3. Enterprise Database
4. Source Intelligence
5. AI Intelligence Engine
6. UX Design System
7. Player Intelligence Center
8. Command Center Preparation
9. Command Center Build
10. AI Insights Engine
11. Team Intelligence Center
12. Rankings Intelligence Platform
13. Portal Pulse Platform SDK
14. Intelligence API & Developer Platform
15. Portal Pulse Intelligence Core
16. Prediction Center
17. NIL Intelligence
18. Alerts and Personalization
19. Historical Replay
20. Transfer Market Exchange
21. Atlas Team Builder
22. Founder Book
23. Product Bible
24. Design Operating System
25. Product Bible Complete Specifications
26. Technical Architecture Bible
27. Engineering Standards Manual
28. Portal Pulse Design Operating System
29. Portal Pulse Labs
30. Program Intelligence Workspace
31. Premium Features
32. Mobile App

## North Star

Future prompts should begin with:

> Follow the Portal Pulse North Star Design Document.

See `docs/PORTAL_PULSE_NORTH_STAR_DESIGN_DOCUMENT.md`.

## Architecture Docs

- `docs/ARCHITECTURE.md`
- `docs/DATA_TRUST.md`
- `docs/DATABASE.md`
- `docs/INGESTION.md`
- `docs/AI/INTELLIGENCE_ENGINE.md`
- `docs/DESIGN_SYSTEM.md`
- `docs/PLAYER_INTELLIGENCE_CENTER.md`
- `docs/COMMAND_CENTER.md`
- `docs/AI_INSIGHTS_ENGINE.md`
- `docs/TEAM_INTELLIGENCE_CENTER.md`
- `docs/RANKINGS_INTELLIGENCE.md`
- `docs/PLATFORM_SDK.md`
- `docs/API_PLATFORM.md`
- `docs/INTELLIGENCE_CORE.md`
- `docs/PORTAL_PULSE_CONSTITUTION.md`
- `docs/ATHENA_INTELLIGENCE_NETWORK.md`
- `docs/ATHENA_CHIEF_INTELLIGENCE_OFFICER.md`
- `docs/ORACLE_PREDICTION_SPECIALIST.md`
- `docs/SENTINEL.md`
- `docs/KNOWLEDGE_GRAPH.md`
- `docs/SPATIAL_INTELLIGENCE.md`
- `docs/HISTORICAL_REPLAY_ENGINE.md`
- `docs/TRANSFER_MARKET_EXCHANGE.md`
- `docs/ATLAS_ROSTER_INTELLIGENCE.md`
- `docs/PORTAL_PULSE_LABS.md`
- `docs/PROGRAM_INTELLIGENCE_WORKSPACE.md`
- `docs/GM_WORKSPACE.md`
- `docs/MULTI_SPORT_FOUNDATION.md`
- `docs/PORTAL_PULSE_NETWORK.md`
- `docs/founder-book/README.md`
- `docs/ROADMAP.md`

## Design System

The design system is dark-mode first and optimized for dense, trustworthy sports intelligence. It includes tokens for color, typography, spacing, shadows, radius, borders, motion, confidence states, NIL states, and movement states.

Design showcase route:

- `/design-system`

## AI Intelligence Architecture

Portal Pulse AI is review-gated. It can extract structured entities, propose claim candidates, score confidence, detect conflicts, summarize source-backed information, assemble timelines, and expose knowledge graph queries. It must not invent facts, write directly to trusted records, fabricate NIL values, fabricate commitments, or cite nonexistent sources.

Confidence is explainable and should account for source reliability, independent corroboration, official confirmation, historical source accuracy, recency, consistency, duplicate reporting, player or coach statements, and future model scores.

## Next Prompt

Recommended next prompt:

**Initiative 9 — Coach Workspace™**
