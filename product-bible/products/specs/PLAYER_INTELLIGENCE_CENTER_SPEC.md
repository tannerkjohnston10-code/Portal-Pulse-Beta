# Player Intelligence Center Specification

## Current Status

In Development — mock/demo player intelligence dashboard foundation exists. Real source-backed player data, statistics, and production workflows are planned.

## Purpose

Player Intelligence Center gives every player a premium intelligence dashboard that explains identity, movement, interest, predictions, NIL context, timeline, sources, relationships, and roster fit without treating projections as facts.

## Target Users

- Fans and power users tracking transfer movement.
- Media and analysts researching player context.
- Coaches, recruiting staffs, and personnel teams evaluating fit.
- Enterprise partners consuming player intelligence through APIs.

## Primary Workflows

1. Search or click into a player from Command Center, rankings, TMX, or team pages.
2. Review the hero summary, Portal Pulse Score, status, confidence, and last update.
3. Explore timeline, interested schools, prediction center, NIL intelligence, and source intelligence.
4. Use relationship graph, roster fit, replay, and comparison placeholders for deeper context.
5. Watch, share, compare, or save the player for future alerts.

## Core Features

- Premium player hero with profile context and trust indicators.
- Portal Pulse Score with movement placeholders.
- Transfer timeline with confidence and source count.
- Prediction panel with supporting and contradicting factors.
- Interested school cards and roster fit scoring.
- NIL intelligence, visit tracker, source intelligence, news summaries, relationship graph, statistics, replay, and comparison placeholders.

## Inputs

- Player profile data, movement records, claims, sources, visits, NIL reports, predictions, rankings, statistics, relationships, and timeline events.
- Oracle prediction signals, Librarian relationships, Apollo snapshots, Atlas roster-fit outputs, and Sentinel intake status.

## Outputs

- Source-aware player intelligence summary.
- Timeline, prediction, NIL, visit, source, and relationship modules.
- Watchlist and comparison payloads.
- Future API-safe player profile response.

## AI Responsibilities

AI may summarize updates, explain prediction movement, propose relationships, and identify what changed. AI may not invent commitments, NIL values, eligibility facts, statistics, or confidence. Intelligence Core approval is required before any AI-generated insight surfaces.

## Explainability

Scores and predictions must show contributing signals, confidence, source count, last updated, contradictions, and assumptions if simulated. Each major claim should connect to citations or placeholder evidence.

## UI Components

- PlayerHero
- PortalPulseScoreCard
- PlayerTimeline
- PredictionPanel
- InterestedSchoolCard
- RosterFitCard
- NILSnapshot
- SourceIntelligencePanel
- RelationshipGraphPlaceholder
- HistoricalReplayPanel
- ComparePlayersPanel
- TrustNotice

## Platform Dependencies

- Intelligence Core
- Knowledge Graph
- Oracle
- Atlas
- Apollo
- Sentinel
- Platform SDK PlayerSDK
- API Platform

## Future Enhancements

- Real player statistics and production history.
- Verified source citations and article summaries.
- Alerts, personalized watchlists, and player comparison engine.
- Mobile-first player cards and coach/private evaluation mode.

## Success Metrics

- Player page views.
- Time on player page.
- Watch and compare actions.
- Source expansion rate.
- Prediction explanation engagement.
- Conversion to premium player alerts.
