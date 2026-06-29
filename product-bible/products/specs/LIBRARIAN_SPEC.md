# Librarian Specification

## Current Status

In Development — mock Knowledge Graph analyst architecture exists. Production graph inference and persistent relationship scoring are planned.

## Purpose

Librarian is the Knowledge Graph analyst. It proposes relationships, detects duplicate entities, explains networks, identifies weak or conflicting relationships, and helps Portal Pulse understand how people, schools, teams, sources, and claims connect.

## Target Users

- Player and team intelligence users.
- Athena, Oracle, Sentinel, Cartographer, Apollo, and Atlas.
- API and enterprise graph consumers.
- Internal data quality and admin review teams.

## Primary Workflows

1. Analyze graph entities and relationships.
2. Detect duplicate or ambiguous entities.
3. Propose or weaken relationships with evidence.
4. Send relationship proposals to Intelligence Core.
5. Surface approved network context in profiles, maps, predictions, and APIs.

## Core Features

- Relationship proposal.
- Duplicate entity detection.
- Relationship strength scoring.
- Weak and conflicting relationship identification.
- Network summaries.
- Relationship path explanations.

## Inputs

- Entities, aliases, claims, sources, timeline events, visits, predictions, schools, coaches, teams, regions, and historical relationship snapshots.

## Outputs

- Proposed graph relationships.
- Relationship explanations.
- Duplicate entity warnings.
- Network summaries and graph query results.

## AI Responsibilities

Librarian may infer and propose relationships. It must clearly mark inferred or mock relationships and cannot publish them as facts without Intelligence Core approval and source-backed evidence.

## Explainability

Every relationship should show strength, confidence, direction, evidence IDs, source IDs, first seen, last seen, contradictions, and inferred/mock status.

## UI Components

- KnowledgeGraphViewer
- EntityNodeCard
- RelationshipEdgeCard
- RelationshipStrengthBadge
- GraphLegend
- MiniRelationshipMap
- NetworkSummaryCard
- LibrarianFindingCard

## Platform Dependencies

- Knowledge Graph
- Intelligence Core
- Source and Claim Architecture
- Apollo
- Cartographer
- API Platform

## Future Enhancements

- Graph database backend.
- Advanced entity resolution.
- Recruiting pipeline and coaching tree products.
- Relationship alerts and enterprise graph APIs.

## Success Metrics

- Relationship explanation views.
- Duplicate entity resolution rate.
- Graph query usage.
- Relationship confidence improvement.
- API graph request volume.
