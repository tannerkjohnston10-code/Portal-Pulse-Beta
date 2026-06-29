# Command Center Specification

## Current Status

In Development — mock/demo flagship dashboard foundation exists. Production data, personalization, saved layouts, and live updates are planned.

## Purpose

Command Center answers the user's first question: what matters right now? It turns scattered college athletics movement into one trusted mission-control surface for breaking updates, AI briefings, market movement, team momentum, watchlists, maps, and next actions.

## Target Users

- Fans and power users who want the fastest read on the day.
- Media, analysts, and podcasters who need research context.
- Coaches and athletic departments who need a public-market view.
- Enterprise partners who may consume dashboard modules later.

## Primary Workflows

1. Open Command Center and scan the AI briefing, breaking feed, and market movers.
2. Filter by sport, conference, team, position, or watchlist.
3. Expand a widget to see evidence, confidence, and source counts.
4. Jump into a player, team, ranking, map, TMX, or Atlas surface for deeper analysis.
5. Save or personalize layouts in future premium versions.

## Core Features

- AI Morning Briefing with evidence and confidence summary.
- Breaking Portal Feed with source count and confidence badges.
- Market Movers, Prediction Movers, and NIL Market Watch.
- Team Momentum and Conference Activity widgets.
- Interactive Transfer Map placeholder.
- Watchlist panel and AI Assistant dock placeholder.
- Dashboard customization architecture for future saved views.

## Inputs

- Verified and pending claims from the Intelligence Core.
- Signals from Sentinel, Oracle, Mercury, Cartographer, Apollo, Atlas, and Librarian.
- Watchlist preferences, sport filters, and dashboard layout preferences.
- Ranking, prediction, NIL, source, map, and timeline data.

## Outputs

- Ranked daily intelligence snapshot.
- Widget-level summaries, confidence, source counts, and links to deeper products.
- Recommended next actions and exploration paths.
- Future notification and briefing payloads.

## AI Responsibilities

Athena summarizes what matters and coordinates agent findings. Agents may propose briefings, movements, and risks. The Intelligence Core must verify evidence, score confidence, check conflicts, and decide what can surface.

## Explainability

Every widget should show what changed, why it matters, confidence level, source count, last updated timestamp, and an Explain This interaction when scores, predictions, or recommendations appear.

## UI Components

- CommandCenterLayout
- DashboardGrid
- DashboardWidget
- GlobalSearch
- MorningBriefingCard
- BreakingFeedWidget
- MarketMoversWidget
- TransferMapWidget
- TeamMomentumWidget
- ConferenceActivityWidget
- PredictionMoversWidget
- NILMarketWidget
- WatchlistWidget
- AIAssistantDock
- IntelligenceStream
- ExplainThisButton

## Platform Dependencies

- Intelligence Core
- Platform SDK
- Athena Intelligence Network
- Knowledge Graph
- Rankings Engine
- TMX
- Historical Replay
- API Platform
- PP-DOS design system

## Future Enhancements

- Real-time updates through polling, SSE, or WebSockets.
- Saved dashboards, draggable widgets, and role-specific layouts.
- Personalized morning briefings and watchlist alerts.
- Premium modules for media, coaches, and enterprise users.

## Success Metrics

- Daily active users.
- Repeat daily opens.
- Average time in dashboard.
- Widget expansion rate.
- Click-through rate into player, team, rankings, TMX, and maps.
- Watchlist creation and notification engagement.
