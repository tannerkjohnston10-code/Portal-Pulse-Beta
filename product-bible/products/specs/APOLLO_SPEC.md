# Apollo Specification

## Current Status

In Development — mock historical analyst services and replay integration exist. Persistent snapshots and verified outcome reconciliation are planned.

## Purpose

Apollo is the historical intelligence analyst. It preserves what Portal Pulse knew, when it knew it, how confident it was, what was predicted, and what changed later.

## Target Users

- Fans and media studying movement over time.
- Analysts measuring prediction accuracy.
- Coaches and athletic departments reviewing market history.
- Enterprise and API partners needing point-in-time intelligence.

## Primary Workflows

1. Select a player, team, ranking, prediction, or market.
2. Review what Portal Pulse believed at a past date.
3. Compare past and current snapshots.
4. Examine prediction accuracy and turning points.
5. Generate replay summaries through Athena or APIs.

## Core Features

- Snapshot interpretation.
- Replay summaries.
- Prediction accuracy analysis.
- Ranking history context.
- Entity version comparison.
- Historical turning-point identification.

## Inputs

- Historical snapshots, timeline events, rankings, predictions, claims, source counts, confidence at time, final outcomes, and model versions.

## Outputs

- Replay summaries, accuracy explanations, snapshot comparisons, and historical context cards.

## AI Responsibilities

Apollo may summarize historical changes and identify patterns. It must never rewrite history, overwrite records, or imply a past projection was known fact. Intelligence Core approval is required for surfaced findings.

## Explainability

Historical outputs must distinguish what was known then, what is known now, what was predicted then, what happened later, confidence at time, source count at time, and lessons learned.

## UI Components

- ApolloWidget
- ReplaySummaryCard
- PredictionAccuracyCard
- SnapshotComparisonCard
- HistoricalTurningPointCard
- ConfidenceOverTimeChartPlaceholder

## Platform Dependencies

- Historical Replay
- Intelligence Core
- Platform History SDK
- Oracle
- Rankings
- TMX
- API Platform

## Future Enhancements

- Daily and weekly automated snapshots.
- Model calibration reports.
- Season replay experiences.
- Enterprise historical exports.

## Success Metrics

- Replay sessions.
- Snapshot comparisons.
- Prediction accuracy views.
- Historical export/API usage.
- Return usage around major portal windows.
