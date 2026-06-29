# Cartographer Specification

## Current Status

In Development — mock spatial intelligence engine and maps page exist. Real GIS data, geocoding, and historical map replay are planned.

## Purpose

Cartographer is the Spatial Intelligence analyst. It visualizes verified and explainable geographic relationships across transfer movement, recruiting pipelines, conference activity, coaching footprints, NIL geography, and regional trends.

## Target Users

- Fans and media exploring geography of movement.
- Coaches and recruiting staffs analyzing territories.
- Enterprise partners needing regional intelligence.
- Command Center and Team Intelligence consumers.

## Primary Workflows

1. Open Maps or a Command Center map widget.
2. Toggle layers such as transfer activity, recruiting pipelines, visits, NIL, or heat maps.
3. Inspect a region, state, campus, or flow.
4. Review confidence, evidence, and source counts.
5. Jump to related players, teams, graph relationships, or replay views.

## Core Features

- Spatial entity types.
- Transfer flow layers.
- Recruiting pipeline layers.
- Heat map placeholders.
- Layer selector and legend.
- Timeline slider placeholder.
- Cartographer findings.

## Inputs

- Knowledge Graph relationships, regions, states, cities, campuses, transfer flows, recruiting territories, source-backed claims, timeline events, and historical snapshots.

## Outputs

- Map layers, flow models, geographic trend summaries, region cards, and spatial analytics placeholders.

## AI Responsibilities

Cartographer may summarize geographic patterns and propose spatial findings. It must not create claims or treat inferred geography as fact. Intelligence Core verifies findings before publication.

## Explainability

Every map layer and flow should show confidence, strength, evidence count, source count, related entities, and mock/inferred status.

## UI Components

- SpatialMap
- TransferFlowLayer
- RecruitingPipelineLayer
- HeatMapLayer
- StateSummaryCard
- RegionSummaryCard
- GeographicLegend
- LayerSelector
- TimelineSliderPlaceholder
- MapFilterPanel

## Platform Dependencies

- Knowledge Graph
- Intelligence Core
- Maps SDK
- Apollo
- Command Center
- Team Intelligence
- API Platform

## Future Enhancements

- Geospatial database integration.
- Historical animated movement.
- Regional pipeline scoring.
- Mobile map experiences and partner map embeds.

## Success Metrics

- Map page usage.
- Layer toggle usage.
- Region expansion rate.
- Click-through into teams/players.
- Spatial API and embed usage.
