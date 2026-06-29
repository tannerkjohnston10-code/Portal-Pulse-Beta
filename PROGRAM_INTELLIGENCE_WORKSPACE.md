# Program Intelligence Workspace

## Mission

The Program Intelligence Workspace is the unified intelligence view of an athletic program.

Externally, users interact with the Program Intelligence Workspace. Internally, the workspace is powered by the Digital Twin Engine, which assembles mock program state from existing Portal Pulse intelligence layers.

The workspace must always distinguish:

- Verified Information
- Analysis
- Historical Context
- Predictions
- Simulations

## Workspace Philosophy

Program Intelligence is not a replacement for Team Intelligence, Atlas, TMX, Knowledge Graph, Historical Replay, or Command Center. It is the cohesive program-level workspace that unifies those capabilities into one view.

Every module should answer:

- What type of information is this?
- How confident is Portal Pulse?
- What evidence placeholder supports it?
- Is this historical, analytical, predictive, simulated, or verified?
- What should the user inspect next?

## Architecture

Current architecture:

- `platform/program-intelligence/core/` defines program intelligence types, mock data, and service access.
- `platform/program-intelligence/digital-twin/` contains the internal `digital-twin-engine.ts`.
- `platform/program-intelligence/workspace/` prepares workspace composition services.
- `platform/program-intelligence/widgets/` prepares reusable widget services.
- `platform/program-intelligence/testing/` prepares mock validation helpers.
- `platform/athena/agents/program-intelligence/` prepares the Program Intelligence agent shell.
- `components/program-intelligence/` contains reusable workspace UI components.
- `app/programs/[programId]/` exposes the main program workspace route.

## Relationship To Digital Twin Engine

The Digital Twin Engine is the internal aggregation layer. In this phase it uses mock data only.

Responsibilities:

- aggregate data
- build unified program state
- track relationships
- provide reusable summaries
- support future simulations
- support future forecasting
- avoid inventing data

Future Digital Twin work may add deeper simulations, state versioning, forecasting, scenario comparison, and enterprise program models. Those outputs must remain clearly labeled.

## Workspace Modules

The workspace currently prepares placeholder modules for:

- Program Overview
- Roster Intelligence
- Transfer Activity
- Recruiting Overview
- Portal Pipeline
- Coach Intelligence
- Scholarship Planning
- Depth Chart
- Knowledge Graph
- Historical Replay
- Market Intelligence
- Conference Position
- Rankings
- Timeline
- AI Insights
- Evidence Summary

## AI Integrations

AI contributions remain distinct by agent and information type:

- Athena summarizes the workspace.
- Atlas provides roster intelligence.
- Mercury provides market context.
- Apollo provides historical context.
- Librarian provides relationship context.
- Cartographer provides geographic context.
- Oracle provides clearly labeled projections.

No AI contribution may publish directly. Intelligence Core remains the authority for verification, confidence, conflict checks, and publication readiness.

## Separation Rules

- Verified Information may describe mock source-backed structure.
- Analysis may explain mock intelligence patterns.
- Historical Context may summarize Apollo-style mock snapshots.
- Predictions must be labeled as projections, never facts.
- Simulations must not be mixed with reporting.

## Command Center Integration

The Command Center includes a Program Intelligence widget for recently viewed programs, notable mock changes, pinned programs, and a link to `/programs/mock-state`.

The widget should not imply that program changes are live verified reports.

## Future Roadmap

Future phases may add:

- persistent program workspaces
- real program data integration
- Digital Twin state history
- deeper Atlas roster and scholarship planning
- Apollo time-travel program snapshots
- Mercury market overlays
- Knowledge Graph relationship exploration
- Cartographer geographic context
- Oracle projection history
- enterprise and coach-specific program views

## Non-Negotiables

- Mock data only in this phase.
- Verified, analytical, historical, prediction, and simulation sections stay visibly separated.
- Simulations never become reporting.
- AI agents never bypass Intelligence Core.
- Future real program claims require sources, confidence, timestamps, and review status.
