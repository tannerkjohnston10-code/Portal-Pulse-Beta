# Rankings Intelligence Platform Specification

## Current Status

In Development — mock/demo rankings pages and service architecture exist. Production scoring, historical snapshots, and sourced ranking inputs are planned.

## Purpose

Rankings Intelligence Platform turns rankings into explainable intelligence products. It ranks players, teams, conferences, positions, NIL markets, momentum, roster strength, and portal classes based on source-aware signals rather than popularity alone.

## Target Users

- Fans and power users tracking movement.
- Media and analysts needing explainable rankings.
- Coaches and athletic departments comparing markets.
- API and enterprise partners consuming ranked data.

## Primary Workflows

1. Choose a ranking type: players, teams, conferences, positions, NIL, or momentum.
2. Filter by sport, conference, position, status, school, time window, and confidence.
3. Review rank, movement, score, explanation, source count, and confidence.
4. Open history placeholders or jump into player, team, TMX, or Command Center views.
5. Compare ranking snapshots in future historical products.

## Core Features

- Player transfer rankings.
- Team transfer rankings.
- Conference rankings.
- Position group rankings.
- NIL market rankings with disclaimers.
- Momentum rankings.
- Methodology cards and ranking history placeholders.

## Inputs

- Claims, sources, predictions, movements, rankings, NIL reports, team data, player data, confidence scores, and historical snapshots.
- Intelligence Core evidence and Mercury market signals.

## Outputs

- Ranking lists, rank movement, score explanations, confidence labels, and source counts.
- Command Center ranking widgets.
- Future API ranking responses and historical ranking snapshots.

## AI Responsibilities

AI may explain ranking movement and propose factors. It may not create unsupported scores or present rankings as facts. Intelligence Core gates evidence and confidence before publication.

## Explainability

Every ranking item should answer why it is ranked there, what changed, how confident Portal Pulse is, what evidence supports it, and what factors are driving movement.

## UI Components

- RankingsLayout
- RankingTabs
- RankingTable
- RankingCard
- RankChangeIndicator
- RankingScoreBadge
- RankingExplanation
- RankingFilters
- RankingHistoryMiniChart
- RankingConfidenceBadge
- RankingMethodologyCard

## Platform Dependencies

- Intelligence Core
- Ranking SDK
- Mercury
- Apollo
- Knowledge Graph
- API Platform
- Command Center

## Future Enhancements

- Persistent ranking history and date comparison.
- Sport-specific scoring models.
- Premium rank alerts.
- Partner and media ranking embeds.

## Success Metrics

- Ranking page views.
- Filter usage.
- Explanation expansion rate.
- Click-through to player/team pages.
- Ranking alert subscriptions.
- API ranking request volume.
