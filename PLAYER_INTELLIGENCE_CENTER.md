# Player Intelligence Center

The Portal Pulse Player Intelligence Center is designed to be the most complete college athletics player page in the market. It is not a traditional profile. It is a command center for understanding who a player is, where they have been, what is happening now, who wants them, how confident Portal Pulse is, what changed recently, where the player may go, why, and which sources support the view.

## Architecture

The route lives at `/players/[id]` and composes existing service-layer data:

- player details from `playerService`
- timeline data from `playerService.buildPlayerTimeline`
- predictions from `predictionService`
- NIL context from `nilService`
- visits from `visitService`
- source references from `sourceService`

The page builds a view model with `buildPlayerIntelligence`, which creates mock-safe placeholder intelligence for:

- Portal Pulse Score™
- school fit cards
- roster fit categories
- news intelligence summaries
- relationship graph nodes
- historical replay placeholders

Future phases should replace this view model with real services rather than hardcoding logic into the route.

## Page Philosophy

The page should immediately answer:

- Who is this player?
- Where has the player been?
- What is happening now?
- Who wants the player?
- How confident are we?
- What changed today?
- Where is the player most likely going?
- Why?
- What sources support that?

The page should feel dense but elegant: Bloomberg-level intelligence with Apple-level readability on mobile.

## Portal Pulse Score™

Portal Pulse Score™ is an intelligence score, not a recruiting ranking.

Future score inputs may include:

- demand
- source activity
- official visits
- prediction movement
- roster fit
- transfer momentum
- NIL activity
- coach relationships
- recent news volume
- source confidence

Current implementation uses mock placeholder factors only and is clearly labeled.

## Prediction Philosophy

Predictions are projections, not facts.

The prediction panel must show:

- probability bars
- confidence
- movement
- reasons supporting the projection
- reasons against the projection
- unknown probability
- historical accuracy placeholder

No prediction should imply a commitment.

## Relationship Graph

The relationship graph is a future interactive graph surface. It should connect:

- player
- schools
- coaches
- teammates
- recruiting class
- high school
- conference
- visits
- NIL collectives
- transfer competitors
- source articles

The current graph is a visual placeholder using mock nodes only.

## Timeline

The timeline should eventually support:

- recruitment
- signing
- roster changes
- portal entry
- offers
- visits
- NIL reports
- predictions
- commitment
- enrollment
- source updates

Every timeline event should cite supporting claims and sources.

## Future Enhancements

Near term:

- Replace mock score model with service-backed score engine.
- Add source drawer for every claim.
- Add responsive chart primitives.
- Add player comparison route.
- Add source and prediction history.

Mid term:

- Add roster fit model.
- Add real depth chart intelligence.
- Add relationship graph interactions.
- Add watchlist alerts.
- Add historical replay data snapshots.

Long term:

- Add premium player dashboards.
- Add exportable scouting/intelligence reports.
- Add personalized player monitoring.
- Add predictive model explainability panels.
