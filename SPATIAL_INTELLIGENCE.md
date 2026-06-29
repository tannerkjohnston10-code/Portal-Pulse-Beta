# Spatial Intelligence

## Map Philosophy

Cartographer is the spatial intelligence engine for Portal Pulse. It does not create claims. It visualizes verified, explainable, or clearly marked mock/inferred relationships from the Knowledge Graph and Intelligence Core.

Every geographic visualization must be source-aware, confidence-aware, and future-ready.

## Layer Architecture

Map layers are independently toggleable and reusable. Current mock layers include transfer activity, recruiting activity, conference movement, coaching connections, player hometowns, high school pipelines, portal entries, commitments, official visits, NIL activity, prediction activity, watchlist activity, heat maps, and relationship density.

Each layer includes ID, layer type, display name, description, default state, confidence, entity IDs, source IDs, and `isMock: true`.

## Flow Model

Spatial flows represent direction and strength between mock geographic entities:

- Player to school
- School to school
- Conference to conference
- State to school
- High school to college
- Coach to region

Each flow includes origin, destination, confidence, strength, evidence count, source count, timeline support, related graph relationship IDs, and `isMock: true`.

## Spatial Analytics

The analytics service prepares placeholder answers for:

- Which states produced the most portal entries?
- Which conferences gained the most talent?
- Which schools recruit nationally?
- Which regions lost the most talent?
- Which schools expanded their recruiting footprint?
- Which states have the strongest talent retention?

No real values are computed in this phase.

## Replay Roadmap

Future historical replay should support date sliders, weekly replay, monthly replay, season replay, transfer animation, and pipeline evolution. Current replay hooks are placeholders only.

## Cartographer Responsibilities

Cartographer identifies spatial patterns, summarizes geographic trends, detects hot regions, highlights recruiting pipelines, and prepares map intelligence for the Intelligence Core. Cartographer never publishes directly and never creates claims.

## Knowledge Graph Integration

Spatial Intelligence uses Knowledge Graph relationship IDs and graph overview data to connect maps with players, teams, coaches, schools, regions, predictions, timelines, and source-backed relationships.

## Future GIS Opportunities

Future versions can add real GIS boundaries, school campus coordinates, region clustering, animated transfer paths, state retention metrics, mobile map gestures, mapbox/deck.gl rendering, spatial indexing, geofenced alerts, and enterprise territory dashboards.

