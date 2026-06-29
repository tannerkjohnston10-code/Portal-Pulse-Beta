# Master Product Catalog

This catalog links every core Portal Pulse module to its detailed Product Bible specification. Status labels distinguish product readiness from production readiness.

Status language:

- **Planned:** Product direction is defined, but implementation has not meaningfully started.
- **In Development:** Mock/demo foundation, architecture, route, services, or documentation exist. Production data and operational workflows may still be pending.
- **Complete:** Product specification or milestone is complete for the current documentation sprint, not necessarily production-ready software.

## Catalog

| Product | Purpose | Primary Users | Business Unit | Current Status | Specification |
| --- | --- | --- | --- | --- | --- |
| Command Center | Flagship mission-control dashboard for what matters right now. | Fans, media, analysts, power users | Portal Pulse Intelligence | In Development — mock/demo dashboard built | [Spec](specs/COMMAND_CENTER_SPEC.md) |
| Player Intelligence Center | Premium player dashboard for movement, confidence, sources, predictions, and fit. | Fans, media, coaches, analysts | Portal Pulse Intelligence / Pro | In Development — mock/demo foundation built | [Spec](specs/PLAYER_INTELLIGENCE_CENTER_SPEC.md) |
| Team Intelligence Center | Program operating dashboard for roster, needs, momentum, and team context. | Fans, media, coaches, athletic departments | Portal Pulse Intelligence / Pro | In Development — mock/demo foundation built | [Spec](specs/TEAM_INTELLIGENCE_CENTER_SPEC.md) |
| Rankings Intelligence Platform | Explainable rankings for players, teams, conferences, positions, NIL, and momentum. | Fans, media, analysts, partners | Portal Pulse Intelligence / Data | In Development — mock rankings foundation built | [Spec](specs/RANKINGS_INTELLIGENCE_PLATFORM_SPEC.md) |
| Athena | Chief Intelligence Officer and briefing coordinator. | All users, all workspaces | Platform / Portal Pulse Intelligence | In Development — mock briefing and network foundation built | [Spec](specs/ATHENA_SPEC.md) |
| Oracle | Prediction specialist for projection movement, risk, and uncertainty. | Fans, media, analysts, API consumers | Platform / Portal Pulse Intelligence | In Development — mock prediction specialist built | [Spec](specs/ORACLE_SPEC.md) |
| Sentinel | Intelligence intake coordinator for compliance, duplicates, conflicts, and routing. | Admin, Intelligence Core, internal operators | Platform | In Development — mock intake architecture built | [Spec](specs/SENTINEL_SPEC.md) |
| Librarian | Knowledge Graph analyst for entity and relationship intelligence. | Platform, AI agents, enterprise, analysts | Platform / Portal Pulse Data | In Development — mock graph analyst prepared | [Spec](specs/LIBRARIAN_SPEC.md) |
| Cartographer | Spatial intelligence analyst for maps, flows, regions, and pipelines. | Fans, media, coaches, enterprise | Portal Pulse Intelligence / Data | In Development — mock spatial engine built | [Spec](specs/CARTOGRAPHER_SPEC.md) |
| Apollo | Historical analyst for replay, snapshots, and prediction accuracy. | Fans, media, analysts, enterprise | Portal Pulse Intelligence / Data | In Development — mock historical analyst built | [Spec](specs/APOLLO_SPEC.md) |
| Mercury | Transfer market analyst for movement, momentum, and market commentary. | Fans, media, analysts, coaches | Portal Pulse Intelligence | In Development — mock market analyst built | [Spec](specs/MERCURY_SPEC.md) |
| Atlas | Roster intelligence analyst and front-office simulator. | Coaches, staffs, analysts, athletic departments | Portal Pulse Pro | In Development — mock Team Builder built | [Spec](specs/ATLAS_SPEC.md) |
| Knowledge Graph | Relationship memory connecting entities, claims, sources, and events. | Platform, agents, APIs, enterprise | Platform / Portal Pulse Data | In Development — mock graph architecture built | [Spec](specs/KNOWLEDGE_GRAPH_SPEC.md) |
| Historical Replay | Time-travel intelligence for what was known then versus now. | Fans, media, analysts, enterprise | Portal Pulse Intelligence / Data | In Development — mock replay foundation built | [Spec](specs/HISTORICAL_REPLAY_SPEC.md) |
| Transfer Market Exchange | Market-style dashboard for transfer activity, demand, and momentum. | Fans, media, analysts, coaches | Portal Pulse Intelligence | In Development — mock TMX dashboard built | [Spec](specs/TRANSFER_MARKET_EXCHANGE_SPEC.md) |
| API Platform | Versioned, safe, source-aware intelligence API foundation. | Developers, partners, mobile, enterprise | Portal Pulse Data | In Development — internal API foundation built | [Spec](specs/API_PLATFORM_SPEC.md) |
| Developer Platform | Developer-facing docs, examples, trust rules, and future access surface. | Developers, media partners, enterprise | Portal Pulse Data | In Development — placeholder route and docs built | [Spec](specs/DEVELOPER_PLATFORM_SPEC.md) |

## Catalog Principles

- Each module must consume shared services instead of duplicating intelligence logic.
- Every public output must be source-aware, confidence-aware, timestamped, and clear about mock/demo status.
- AI agents may propose findings, but Intelligence Core decides what can surface.
- Product readiness and production readiness are separate states.
- Planned and future capabilities should never be described as complete.
