# Transfer Market Exchange Specification

## Current Status

In Development — mock TMX dashboard and market services exist. Real-time market metrics and premium saved screens are planned.

## Purpose

Transfer Market Exchange, or TMX, is a market-style intelligence dashboard for college athletics movement. It tracks activity, attention, momentum, demand, competition, confidence, position scarcity, and source activity without implying players are financial assets.

## Target Users

- Fans and power users checking movement throughout the day.
- Media, analysts, and podcasts.
- Coaches and athletic departments monitoring public market pressure.
- Future premium and enterprise customers.

## Primary Workflows

1. Open TMX to scan market summary, movers, and heat index.
2. Explore trending players, teams, conferences, positions, and prediction movers.
3. Review market commentary and market timeline.
4. Filter by sport, conference, position, watchlist, or time window.
5. Follow links to players, teams, rankings, maps, and Historical Replay.

## Core Features

- Market Summary.
- Today's Movers.
- Trending Players and Teams.
- Conference Activity.
- Position Markets.
- Prediction Movers.
- Interest Leaders.
- Source Activity.
- Market Timeline.
- Heat Index.
- Watchlist Activity.
- Structured Market Commentary.

## Inputs

- Portal activity, rankings, prediction movement, team momentum, source activity, watchlist events, position demand, NIL movement, conference movement, and historical snapshots.

## Outputs

- Market dashboards, movement rankings, heat labels, commentary, timeline events, and Command Center widgets.

## AI Responsibilities

Mercury generates structured commentary and market explanations. It must explain the market, not create claims, and must route findings through Intelligence Core.

## Explainability

Each market metric should explain input signals, confidence, evidence, source count, time window, and whether it is mock, projected, or historical.

## UI Components

- MarketDashboard
- MarketSummaryCard
- MarketMoverWidget
- PositionMarketGrid
- ConferenceActivityWidget
- MarketTimeline
- HeatIndexCard
- MarketCommentaryPanel

## Platform Dependencies

- Mercury
- Intelligence Core
- Rankings Platform
- Apollo
- Command Center
- Knowledge Graph
- API Platform

## Future Enhancements

- Live market updates.
- Saved market screens.
- Premium market alerts.
- Historical market replay and enterprise market feeds.

## Success Metrics

- Daily TMX opens.
- Repeat intraday visits.
- Market filter usage.
- Alert subscriptions.
- Click-through to entity pages.
- Premium conversion from market tools.
