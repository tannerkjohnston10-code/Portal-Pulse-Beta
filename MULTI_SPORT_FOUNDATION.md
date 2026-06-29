# Multi-Sport Foundation

## Platform Philosophy

Portal Pulse is a multi-sport college athletics intelligence platform. Football is one supported context, not the platform architecture.

Version 1 supports:

- Football
- Men's Basketball
- Women's Basketball
- Baseball
- Softball

No page, service, AI agent, API, search feature, ranking model, roster module, or Knowledge Graph workflow should assume one sport's roster structure, scholarship model, positions, metrics, or terminology.

## Universal Architecture

Portal Pulse separates universal concepts from sport-specific interpretation.

Universal entities:

- Athlete
- Program
- Season
- Sport
- Conference
- TransferEvent
- Visit
- Recruitment
- NILOpportunity
- RosterSlot
- Scholarship
- Eligibility

Sport-specific context lives in Sport Engine configuration. Services should ask the Sport Engine for rules rather than hardcoding values.

## Sport Engine

Sport Engine lives under `platform/sports/`.

Each supported sport has its own engine:

- `platform/sports/football/football-engine.ts`
- `platform/sports/mens-basketball/mens-basketball-engine.ts`
- `platform/sports/womens-basketball/womens-basketball-engine.ts`
- `platform/sports/baseball/baseball-engine.ts`
- `platform/sports/softball/softball-engine.ts`

Each engine owns roster rules, scholarship rules, eligibility rules, transfer windows, recruiting calendar, position definitions, lineup/depth structure, historical metrics, and sport-specific terminology.

The shared registry is `platform/sports/sport-registry.ts`. Future modules should consume `PortalPulsePlatform.sports` or `getSportEngine()` instead of creating local sport constants.

## Sport Capability Registry

Feature code should not inspect raw sport-engine internals when it needs product behavior. It should ask the Sport Capability Registry.

The registry lives in `platform/sports/sport-capability-registry.ts` and is exposed through:

- `PortalPulsePlatform.sports.capabilities`
- `SportsSDK.capabilities`
- `SportCapabilityRegistry`

Supported questions include:

- `usesScholarshipEquivalencies(sportId)`
- `getScholarshipModel(sportId)`
- `getScholarshipLimit(sportId)`
- `getTypicalRosterSpots(sportId)`
- `getPositionGroups(sportId)`
- `getTransferWindows(sportId)`
- `getDepthRepresentation(sportId)`
- `getTerminology(sportId)`
- `getProfile(sportId)`

This keeps sport-specific behavior out of UI components, AI agents, roster services, search services, ranking models, and future API serializers. If a new sport rule is needed, add it to the sport engine and expose it through the capability registry before using it elsewhere.

## Scholarship Rules

Scholarship logic must come from the Sport Capability Registry.

- Football: head-count scholarship placeholder.
- Men's Basketball: head-count scholarship placeholder.
- Women's Basketball: head-count scholarship placeholder.
- Baseball: equivalency scholarship placeholder.
- Softball: equivalency scholarship placeholder.

Future real scholarship data must be source-backed, timestamped, confidence-scored, and reviewable. Mock scholarship values cannot be treated as facts.

## Roster And Lineup Rules

The platform now distinguishes sport-specific roster structures:

- Football: depth chart.
- Basketball: rotation.
- Baseball: lineup, rotation, bullpen, and bench.
- Softball: lineup, pitcher depth, and bench.

Atlas and GM Workspace should use sport labels such as depth chart, lineup, or rotation from the active sport context.

## Knowledge Graph

Every graph entity now carries:

- sport ID
- season ID
- conference ID
- division
- program ID

This lets the graph answer multi-sport questions without mixing contexts.

## AI Network

Athena, Oracle, Sentinel, Atlas, Vega, Mercury, Apollo, Cartographer, Librarian, Hermes, and Archivist must understand active sport, sport terminology, sport rules, sport metrics, and sport-specific explanations.

Agents may propose findings, but the Intelligence Core remains the approval authority. Sport-specific reasoning must be explainable and evidence-linked.

Atlas is now a multi-sport roster intelligence analyst. Vega remains basketball-focused through sport coverage, not through a separate architecture.

## Search

Platform search now supports filter architecture for sport, position, conference, program, athlete, transfer status, and portal year.

Future UI search surfaces should reuse `SearchSDK.searchAll(query, filters)`.

## Sport Switcher

`components/sports/sport-switcher.tsx` is the reusable sport context control. It supports global sport, favorite sports, recent sports, and future multi-sport comparison.

Current implementation is a mock/local selector. Future versions should connect to platform state and user preferences.

## Backward Compatibility

Existing mock football data remains valid as one sport context. The architecture no longer requires football-specific assumptions to support roster, scholarship, search, graph, GM, Atlas, or Command Center surfaces.

## Future Expansion

New sports should be added by creating a sport engine, registering it, defining positions and rules, updating mock data, extending agent sport coverage, and adding tests. No major architecture changes should be required.
