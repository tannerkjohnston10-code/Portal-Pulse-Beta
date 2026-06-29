# Rankings Intelligence Platform

## Ranking Philosophy

Portal Pulse rankings are intelligence products, not popularity lists. Every ranking should eventually answer:

- Why is this entity ranked here?
- What changed?
- How confident is Portal Pulse?
- What evidence supports the ranking?
- What factors are driving movement?

This phase uses fictional mock data only. Every mock ranking item includes `isMock: true`.

## Ranking Types

The platform is prepared to rank:

- Transfer portal players
- Transfer portal teams
- Conferences
- Position groups
- NIL markets
- Momentum
- Roster strength
- Portal class impact

Shared ranking contracts live in `types/rankings.ts`.

## Scoring Architecture

The modular ranking engine lives in `server/rankings/ranking-engine.ts`. Category services compose ranking summaries:

- `player-ranking-service.ts`
- `team-ranking-service.ts`
- `conference-ranking-service.ts`
- `position-ranking-service.ts`
- `nil-ranking-service.ts`
- `momentum-ranking-service.ts`

The engine prepares for:

- Score calculation
- Score explanation
- Rank movement comparison
- Rising and falling entity detection
- Source confidence attachment
- Future ranking history persistence

## Ranking History

Each ranking item includes a history placeholder. Future snapshots should store:

- Rank over time
- Score over time
- Movement over time
- Previous snapshot
- Date comparison

No ranking should be overwritten without history.

## Confidence Model

Each ranking item includes:

- Confidence score
- Source count
- Explanation
- Last updated timestamp
- Factors

Future confidence should account for source quality, corroboration, recency, conflict state, official confirmations, and admin review status.

## NIL Ranking Rules

NIL rankings must never present estimates as facts. NIL ranking items should clearly label:

- Confirmed
- Reported
- Estimated
- Rumored
- Unknown

NIL market rankings require disclaimers and should route sensitive or low-confidence claims through admin review.

## Command Center Integration

`rankingService.getCommandCenterRankingMovers()` exposes reusable hooks for:

- Top rising players
- Top rising teams
- Biggest rank changes
- Conference movers
- NIL market movers

The Command Center uses `RankingMoversWidget` without duplicating ranking logic.

## Future ML Opportunities

Future ranking models may incorporate:

- Player quality signals
- Team fit scores
- Roster balance
- Returning production
- Prediction movement
- NIL market strength
- Coaching transfer success
- Conference-level movement
- Historical outcome tracking
- Source reliability history
