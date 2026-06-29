# Mercury Specification

## Current Status

In Development — mock market analyst services and TMX integration exist. Production market metrics and real-time movement are planned.

## Purpose

Mercury is the Transfer Market Intelligence Analyst. It explains market movement as an analytical metaphor for attention, activity, demand, competition, confidence, relationship strength, and evidence volume.

## Target Users

- Fans and media tracking daily movement.
- Analysts comparing position and conference markets.
- Coaches and staffs monitoring market pressure.
- Command Center and TMX users.

## Primary Workflows

1. Review today's market summary and top movers.
2. Inspect player, team, conference, and position momentum.
3. Read structured market commentary.
4. Jump into TMX, rankings, maps, players, teams, or historical replay.
5. Track watchlist market changes in future versions.

## Core Features

- Market commentary.
- Momentum explanation.
- Position scarcity interpretation.
- Conference activity summaries.
- Source activity context.
- Market heat and trend labels.

## Inputs

- Portal activity, source volume, ranking movement, prediction movement, team momentum, watchlist activity, position demand, conference activity, and historical market snapshots.

## Outputs

- Market summaries, mover lists, structured commentary, heat index context, and Command Center market widgets.

## AI Responsibilities

Mercury may explain the market and propose commentary. It must not invent claims, confirm commitments, or imply players are financial assets. Intelligence Core verifies evidence and publication readiness.

## Explainability

Market metrics must show contributing signals, confidence, evidence count, recency, source activity, and whether the metric is mock, projected, or historical.

## UI Components

- MarketSummaryCard
- MarketMoverList
- HeatIndexCard
- PositionMarketCard
- ConferenceMarketCard
- MarketCommentaryCard
- MarketTimelineCard

## Platform Dependencies

- Transfer Market Exchange
- Intelligence Core
- Rankings
- Apollo
- Command Center
- Platform Market SDK
- API Platform

## Future Enhancements

- Real-time market pulse.
- Premium market alerts.
- Saved market screens.
- Market history and volatility analytics.

## Success Metrics

- TMX visits driven by Mercury widgets.
- Commentary expansion rate.
- Market alert subscriptions.
- Position/conference market filter usage.
- Repeat daily market opens.
