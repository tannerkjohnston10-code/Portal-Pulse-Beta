# Cross-Module Relationship Diagram

This document shows how Portal Pulse products connect as a single intelligence platform. The diagram is product-level, not an implementation dependency graph.

```mermaid
flowchart TD
  IC["Intelligence Core"] --> KG["Knowledge Graph"]
  KG --> ATH["Athena Intelligence Network"]
  ATH --> CC["Command Center"]
  CC --> PIC["Player Intelligence Center"]
  PIC --> TIC["Team Intelligence Center"]
  TIC --> RANK["Rankings Intelligence Platform"]
  RANK --> TMX["Transfer Market Exchange"]
  TMX --> ATLAS["Atlas Team Builder"]
  ATLAS --> API["API Platform"]
  API --> DEV["Developer Platform"]

  SENT["Sentinel Intake"] --> IC
  ORA["Oracle Predictions"] --> IC
  LIB["Librarian Relationships"] --> KG
  CART["Cartographer Spatial Intelligence"] --> KG
  APOLLO["Apollo Historical Replay"] --> IC
  MERC["Mercury Market Intelligence"] --> TMX

  HIST["Historical Replay"] --> APOLLO
  HIST --> RANK
  HIST --> TMX
  HIST --> PIC
  HIST --> TIC

  SDK["Platform SDK"] --> CC
  SDK --> PIC
  SDK --> TIC
  SDK --> RANK
  SDK --> TMX
  SDK --> ATLAS
  SDK --> API
```

## Relationship Overview

- **Intelligence Core** is the reasoning gate for significance, confidence, conflicts, explanations, and publication readiness.
- **Knowledge Graph** stores and explains relationships between entities, claims, sources, predictions, visits, teams, coaches, places, and timelines.
- **Athena Intelligence Network** coordinates specialized agents, but agents propose findings rather than publish conclusions.
- **Command Center** is the flagship user surface where approved intelligence becomes a live operating view.
- **Player Intelligence Center** and **Team Intelligence Center** provide deep entity-specific context.
- **Rankings Intelligence Platform** turns approved signals into explainable ranked products.
- **Transfer Market Exchange** packages market movement, momentum, and activity into a daily-use intelligence product.
- **Atlas** turns team and roster intelligence into coach-facing scenario planning and front-office simulation.
- **API Platform** exposes safe, versioned, confidence-aware intelligence for internal and future external consumers.
- **Developer Platform** educates and onboards future API and data partners.

## Cross-Module Product Rules

- No module independently decides whether an unsourced claim is true.
- No agent publishes directly to UI, API, notifications, or enterprise products.
- No score or recommendation should be shown without an Explain This path.
- Historical Replay should preserve what Portal Pulse believed at the time, even if later information changes.
- The Platform SDK should be the default integration surface for future web, mobile, API, and enterprise products.
