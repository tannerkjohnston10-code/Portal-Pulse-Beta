# Oracle Specification

## Current Status

In Development — mock prediction specialist services and prediction page improvements exist. Real model calibration and outcome tracking are planned.

## Purpose

Oracle is the Prediction Specialist in the Athena Intelligence Network. It explains projection movement, uncertainty, risk factors, and prediction signals while treating predictions as projections, never facts.

## Target Users

- Fans and power users following likely outcomes.
- Media and analysts explaining movement.
- Coaches and staffs monitoring public momentum.
- API partners consuming prediction intelligence.

## Primary Workflows

1. Review top prediction movers from Command Center or Predictions.
2. Open an Oracle explanation to see supporting signals and risks.
3. Compare previous probability, current probability, confidence, and uncertainty.
4. Follow related players, teams, sources, and timeline events.
5. Track outcome accuracy in future Apollo integrations.

## Core Features

- Prediction signal types.
- Prediction mover cards.
- Risk and uncertainty panel.
- Why this prediction changed explanation.
- Methodology disclaimer.
- Intelligence Core recommendation output.

## Inputs

- Visits, offers, team interest, roster needs, depth chart openings, coaching connections, hometown signals, NIL activity, source volume, prediction movement, and contradicting reports.

## Outputs

- Structured prediction findings.
- Supporting reasons, risk factors, uncertainty labels, evidence count, source count, and recommended Intelligence Core decision.

## AI Responsibilities

Oracle may propose projection intelligence and explain uncertainty. Oracle must not invent outcomes, commitments, visits, NIL values, or probabilities as facts. Intelligence Core verifies and approves before publication.

## Explainability

Each prediction output should show what moved, why it moved, what supports it, what weakens it, confidence, uncertainty, source count, and what could change the projection.

## UI Components

- OracleOverviewCard
- PredictionMoverCard
- PredictionRiskPanel
- PredictionSignalList
- PredictionExplanationPanel
- ProjectionDisclaimer

## Platform Dependencies

- Intelligence Core
- Prediction SDK
- Apollo
- Knowledge Graph
- Team Intelligence
- Player Intelligence
- API Platform

## Future Enhancements

- Model calibration and backtesting.
- Prediction accuracy dashboards.
- Sport-specific prediction models.
- Personalized prediction alerts.

## Success Metrics

- Prediction page engagement.
- Explanation expansion rate.
- Prediction alert adoption.
- Outcome calibration accuracy.
- Media and API usage of prediction endpoints.
