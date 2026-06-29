# Atlas Specification

## Current Status

In Development — mock Team Builder, roster intelligence services, and Atlas workspace exist. Real private roster data, permissions, and coach workflows are planned.

## Purpose

Atlas is the roster intelligence analyst and front-office simulator. It helps users understand roster needs, depth pressure, scholarship balance, transfer fit, roster chemistry, future risk, and what-if scenarios.

## Target Users

- Coaches and recruiting staffs.
- Personnel departments and athletic directors.
- Power users and analysts.
- Future enterprise and GM Workspace customers.

## Primary Workflows

1. Open Team Builder and choose a team and sport.
2. Review roster snapshot, depth chart, Roster DNA, Team Genome, and Roster Chemistry.
3. Inspect positional needs, Scholarship IQ, Transfer Fit, and opportunities.
4. Run mock simulations and compare before/after states.
5. Generate strategy recommendations and future roster forecasts.

## Core Features

- Atlas workspace.
- Depth chart board.
- Roster DNA, Team Genome, Roster Chemistry.
- Scholarship IQ.
- Transfer Fit.
- Opportunity Engine and Strategy Engine.
- Simulation Panel and Roster Forecast.
- Coach Workspace preview.

## Inputs

- Team roster, player profiles, depth chart, scholarships, eligibility, movement, rankings, roster needs, transfer targets, historical context, and simulation assumptions.

## Outputs

- Roster intelligence summary, need labels, transfer fit scores, opportunity cards, strategy recommendations, simulation results, and forecast placeholders.

## AI Responsibilities

Atlas may generate simulations, projections, and strategic recommendations. It must label outputs as mock, simulated, projected, or assumption-based and cannot invent real roster facts, commitments, NIL values, or scholarship certainty.

## Explainability

Every Atlas recommendation should show assumptions, confidence, evidence, affected positions, projected impact, risk, and Intelligence Core approval state.

## UI Components

- AtlasWorkspace
- TeamSelector
- SportSelector
- RosterSnapshot
- DepthChartBoard
- PositionGroupCard
- PositionNeedCard
- ScholarshipTracker
- RosterDNACard
- TeamGenomeCard
- RosterChemistryCard
- TransferFitCard
- OpportunityCard
- StrategyRecommendationCard
- SimulationPanel
- BeforeAfterRosterView
- RosterForecastChart
- AtlasInsightCard
- CoachWorkspacePreview

## Platform Dependencies

- Platform SDK roster interfaces.
- Intelligence Core.
- Team Intelligence Center.
- Knowledge Graph.
- Apollo.
- Oracle.
- API Platform.

## Future Enhancements

- Protected coach/team workspaces.
- Private notes and staff collaboration.
- Recruiting board and visit planning.
- Real roster imports and enterprise permissions.

## Success Metrics

- Team Builder sessions.
- Simulation runs.
- Transfer Fit engagement.
- Strategy card saves.
- Coach workflow completion.
- Enterprise conversion and retention.
