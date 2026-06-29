# Knowledge Graph Specification

## Current Status

In Development — mock graph types, services, queries, visualization placeholders, and route exist. Persistent graph storage and production inference are planned.

## Purpose

Knowledge Graph is the relationship memory of Portal Pulse. It connects players, teams, schools, coaches, sources, claims, predictions, visits, regions, rosters, and timeline events so intelligence can explain context, influence, and relationships.

## Target Users

- All Portal Pulse product surfaces.
- Athena agents and Intelligence Core.
- Developers and enterprise partners.
- Coaches, analysts, and media using relationship intelligence.

## Primary Workflows

1. Resolve entities and relationships from verified claims and sources.
2. Query player, team, coach, recruiting, and conference networks.
3. Explain why entities are connected and how strong the connection is.
4. Surface relationship modules in player, team, map, prediction, and API products.
5. Preserve relationship history for future replay and auditing.

## Core Features

- Graph entity model.
- Relationship type model.
- Relationship scoring.
- Entity resolution architecture.
- Query services.
- Evidence services.
- Visualization placeholders.

## Inputs

- Claims, sources, entity records, aliases, timeline events, visits, predictions, coach records, team data, region data, and historical snapshots.

## Outputs

- Entity networks, relationship paths, strength labels, evidence-backed relationships, duplicate warnings, and API-safe graph responses.

## AI Responsibilities

AI agents may propose relationships or duplicate resolutions. The graph must mark inferred and mock relationships clearly. Intelligence Core verifies evidence and conflicts before surfacing relationships as trusted intelligence.

## Explainability

Relationships must include type, direction, strength, confidence, evidence IDs, source IDs, first seen, last seen, status, inferred flag, and mock flag.

## UI Components

- KnowledgeGraphViewer
- EntityNodeCard
- RelationshipEdgeCard
- RelationshipStrengthBadge
- GraphLegend
- MiniRelationshipMap
- NetworkSummaryCard

## Platform Dependencies

- Intelligence Core
- Librarian
- Source/Claim systems
- Player Intelligence
- Team Intelligence
- Cartographer
- API Platform
- Apollo

## Future Enhancements

- Dedicated graph database evaluation.
- Advanced path queries and graph embeddings.
- Coaching trees and recruiting pipelines.
- Enterprise relationship APIs and graph exports.

## Success Metrics

- Graph query volume.
- Relationship module engagement.
- Entity resolution accuracy.
- Duplicate reduction.
- Enterprise/API graph adoption.
