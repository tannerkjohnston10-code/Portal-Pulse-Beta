# Portal Pulse Labs

## Mission

Portal Pulse Labs is the dedicated environment for simulations, scenario analysis, and experimentation across college athletics.

Labs helps users explore possible outcomes without presenting those outcomes as verified reporting. It is designed for learning, comparison, and decision support, not certainty.

## Simulation Philosophy

Labs outputs must always be labeled as one or more of:

- Simulation
- Scenario Analysis
- Projection
- Mock Data
- User Configuration

Labs never confirms commitments, roster facts, NIL values, visits, source claims, or predictions. The Intelligence Core remains responsible for separating verified intelligence from simulation artifacts.

## User Expectations

Users should understand:

- Labs scenarios are exploratory.
- Inputs may be mock, user-configured, projected, or assumption-based.
- Confidence inside Labs is visual and educational unless backed by future verified systems.
- Exports and saved scenarios must remain labeled as simulation artifacts.
- Labs should support better thinking, not pretend to know the future.

## Transparency Principles

Every simulation should include:

- purpose
- assumptions
- inputs
- variables
- outputs
- confidence
- limitations
- disclaimer
- reset control
- save/export placeholders where relevant

## Separation From Verified Intelligence

Labs is separate from live intelligence products such as Command Center, Player Intelligence Center, Team Intelligence Center, TMX, Rankings, and Athena briefings.

Labs may consume mock or approved platform context, but Labs outputs should not flow back into verified surfaces as facts. If a future Labs output becomes useful as a recommendation, it must be routed through Intelligence Core with evidence, confidence, conflict checks, and review status.

## Architecture

Current Labs architecture includes:

- `platform/labs/core/` for types, mock data, and service access.
- `platform/labs/simulations/` for simulation framework placeholders.
- `platform/labs/scenarios/` for scenario listing and saved placeholder flows.
- `platform/labs/models/` for future model registry placeholders.
- `platform/labs/history/` for recent simulation history placeholders.
- `platform/labs/workspaces/` for workspace composition.
- `platform/labs/components/` for UI contract expectations.
- `platform/athena/agents/labs/` for the Labs Simulation Assistant shell.
- `components/labs/` for reusable simulation UI components.
- `app/labs/` for the Labs workspace route.

## Current Simulation Categories

- Transfer Simulator
- Roster Builder
- Depth Chart Simulator
- Conference Realignment Simulator
- Recruiting Pipeline Simulator
- Historical Replay Lab
- Transfer Class Builder
- Market Impact Simulator
- Scholarship Planner
- Coach Strategy Simulator
- NIL Scenario Explorer
- Future Modules

## AI Simulation Assistant

The Labs-specific AI assistant may:

- explain assumptions
- summarize simulations
- identify trade-offs
- suggest additional scenarios
- explain limitations

It must never:

- present simulations as facts
- fabricate real player claims
- fabricate NIL values
- publish verified intelligence
- bypass the Intelligence Core

## Command Center Integration

The Command Center may show a Labs widget for recent simulations, suggested scenarios, learning resources, and a link to `/labs`.

This widget must clearly label Labs outputs as simulation-only and must not mix simulation results with verified breaking intelligence.

## Future Roadmap

Future Labs phases may include:

- persistent saved scenarios
- authenticated user workspaces
- team-specific private simulations
- Digital Twin integration
- simulation comparison reports
- scenario export with labels and assumptions
- Apollo historical replay experiments
- Mercury market impact experiments
- Atlas roster planning experiments
- enterprise and coach-facing scenario libraries

## Non-Negotiables

- Labs never presents simulated outcomes as factual reporting.
- Labs never fabricates real claims.
- Labs never publishes directly into verified intelligence.
- Labs always labels simulation, projection, mock, and user-configured outputs.
- Labs remains explainable, resettable, and auditable.
