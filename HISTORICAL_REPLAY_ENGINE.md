# Historical Replay Engine

## Apollo Mission

Apollo is the historical intelligence analyst for Portal Pulse. Apollo preserves what Portal Pulse knew, when it knew it, how confident it was, what it predicted, and what changed later.

Apollo never rewrites history and never publishes directly.

## Snapshot Philosophy

Historical snapshots are immutable records of platform state at a point in time. They preserve entity data, confidence at time, source count at time, prediction state at time, and creation timestamp.

Snapshots distinguish:

- What was known then
- What is known now
- What was predicted then
- What actually happened later

## Time-Travel Model

The replay model combines snapshots, timeline events, source counts, confidence states, predictions, rankings, and later outcomes into replay sessions.

Current mock services support:

- `getEntitySnapshot(entityId, date)`
- `getPlayerReplay(playerId)`
- `getTeamReplay(teamId)`
- `getRankingHistory(rankingType)`
- `compareSnapshots(entityId, dateA, dateB)`
- `calculatePredictionAccuracy()`
- `generateReplaySummary()`

## Prediction Accuracy Rules

Predictions remain projections. Accuracy should compare archived prediction state against later verified outcomes without altering the original prediction. Unresolved outcomes must stay unresolved.

Prediction accuracy records include prediction made, confidence at time, final outcome, accuracy result, explanation, model version, source count, and lessons learned.

## Replay Dashboard

The `/replay` dashboard includes a date selector placeholder, timeline scrubber, player movement over time, team ranking movement, prediction movement, confidence movement, what changed, what Portal Pulse believed then, and what actually happened later placeholder.

## Historical Comparison

Historical comparisons should show confidence deltas, source count deltas, prediction state changes, and narrative differences between snapshots.

## Future Analytics Roadmap

Future Apollo work can add persistent snapshot storage, daily/weekly/monthly replay jobs, real outcome reconciliation, model calibration dashboards, prediction accuracy by sport/team/source, historical map animations, graph relationship history, and premium historical intelligence exports.

