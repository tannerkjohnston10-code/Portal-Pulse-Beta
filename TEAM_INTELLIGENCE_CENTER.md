# Team Intelligence Center

## Page Philosophy

The Team Intelligence Center is not a team page. It is the operating dashboard for a college program: roster quality, portal movement, depth chart pressure, position needs, coaching context, recruiting pipeline, momentum, and AI storylines in one source-aware experience.

Every module is built as reusable intelligence infrastructure that can later power the Command Center, Player Intelligence Center, mobile apps, APIs, analytics products, and premium dashboards.

## Module Architecture

The page consumes `TeamIntelligenceProfile` from `teamIntelligenceService`. UI components do not calculate business logic directly. Future implementations should replace mock view models with service-composed data from teams, rosters, depth charts, claims, sources, predictions, NIL records, coaching records, and analytics engines.

Current modules:

- `TeamHero`
- `TeamScoreCard`
- `RosterWidget`
- `DepthChartWidget`
- `TeamTimelineWidget`
- `TeamNeedsWidget`
- `PortalClassWidget`
- `MomentumWidget`
- `CoachingWidget`
- `AIStorylinesWidget`
- `RecruitingPipelineWidget`
- `ConferenceComparisonWidget`
- `TeamComparisonWidget`

## Portal Pulse Team Score

Portal Pulse Team Score is a placeholder proprietary score from 0 to 100. Future inputs may include:

- Portal additions
- Portal losses
- Returning production
- Roster balance
- Positional needs filled
- Coaching stability
- Recruiting momentum
- NIL market strength
- Prediction confidence
- Depth chart quality

The current mock implementation displays overall score, weekly trend, monthly trend, factors, and a historical chart placeholder.

## Roster Intelligence

Roster Intelligence tracks returning starters, incoming transfers, outgoing transfers, freshmen, graduating seniors, scholarship count, open scholarships, position breakdown, and experience distribution. Future drill-downs should connect each number to roster records and source-backed movement claims.

## Depth Chart Intelligence

Depth Chart Intelligence now depends on Sport Engine context. Football uses offense, defense, and special teams depth. Basketball uses rotations. Baseball and softball use lineup and pitcher-depth structures. Future drag-and-drop simulations must preserve source-backed roster data and sport-specific terminology.

Each position shows projected starter, competition level, experience, transfer additions, roster confidence, and AI confidence.

## Team Needs Engine

The Team Needs Engine scores each position by urgency:

- Critical
- High
- Moderate
- Stable
- Surplus

Future calculations should combine depth chart quality, returning production, scholarship availability, portal targets, recruiting pipeline, injury context, and coaching scheme.

## Timeline

Team timelines should preserve the history of roster and program changes. Events include portal entries, commitments, coaching changes, NIL developments, roster updates, ranking changes, and prediction changes.

Every future event should cite supporting claims, sources, confidence, and timestamps.

## Future Recruiting Integration

The Recruiting & Pipeline module prepares for:

- Recruiting class
- Transfer class
- High school pipeline
- State pipeline
- Junior college pipeline
- Coaching relationships
- Coach-player relationship graph

Recruiting and transfer intelligence should eventually share the same source and claim verification infrastructure.

## Extensibility

Future phases should add:

- API route for team intelligence
- Team watchlist alerts
- Depth chart simulator
- Historical roster replay
- Conference peer filters
- Multi-team comparison mode
- NIL strength model
- Recruiting relationship graph
- Coaching tree intelligence
- Mobile-optimized team dashboard

Mock records are fictional and include `isMock: true`. Do not introduce real claims without source URLs, confidence, evidence, and timestamps.
