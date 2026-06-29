# Historical Replay Specification

## Current Status

In Development — mock replay route, snapshot models, and Apollo services exist. Automated persistent snapshots are planned.

## Purpose

Historical Replay lets users time-travel through Portal Pulse intelligence. It shows what was known then, what is known now, what was predicted then, and what actually happened later.

## Target Users

- Fans and media reviewing stories over time.
- Analysts evaluating predictions and rankings.
- Coaches and athletic departments studying movement.
- API and enterprise customers needing historical data.

## Primary Workflows

1. Select a date, entity, or ranking type.
2. Use the timeline scrubber to move through snapshots.
3. Compare what changed across players, teams, rankings, predictions, confidence, and sources.
4. Review prediction accuracy and lessons learned.
5. Export or consume replay data through future API products.

## Core Features

- Replay dashboard.
- Date selector and timeline scrubber placeholder.
- Player movement over time.
- Team ranking movement.
- Prediction and confidence movement.
- What Portal Pulse believed then vs what happened later.
- Prediction accuracy module.

## Inputs

- Historical snapshots, entity snapshots, ranking snapshots, prediction snapshots, source snapshots, timeline events, and outcome data.

## Outputs

- Replay sessions, snapshot comparisons, historical summaries, prediction accuracy cards, and versioned history records.

## AI Responsibilities

Apollo may summarize historical changes and propose lessons. AI must not rewrite history or convert past projections into facts. Intelligence Core verifies any surfaced historical insight.

## Explainability

Replay screens must label the snapshot date, confidence at time, source count at time, prediction state at time, current knowledge, final outcome placeholder, and mock/demo status.

## UI Components

- ReplayDashboard
- DateSelectorPlaceholder
- TimelineScrubber
- SnapshotComparisonCard
- PredictionAccuracyCard
- ConfidenceMovementChartPlaceholder
- WhatChangedPanel

## Platform Dependencies

- Apollo
- Platform History SDK
- Intelligence Core
- Rankings
- Oracle
- TMX
- API Platform

## Future Enhancements

- Automated daily snapshots.
- Historical replay videos and shareable timelines.
- Model accuracy reports.
- Historical data products for enterprise and research.

## Success Metrics

- Replay sessions.
- Snapshot comparison usage.
- Prediction accuracy module engagement.
- Historical API usage.
- Media references and exported reports.
