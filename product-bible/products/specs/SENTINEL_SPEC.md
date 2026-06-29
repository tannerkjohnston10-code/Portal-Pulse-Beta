# Sentinel Specification

## Current Status

In Development — mock intake coordinator architecture exists. Real monitoring, approved integrations, and production queues are planned.

## Purpose

Sentinel is the Intelligence Intake Coordinator. It organizes public information entering Portal Pulse by validating compliance, detecting duplicates, scanning conflicts, scoring priority, and routing candidates for Intelligence Core review.

## Target Users

- Internal admin and review teams.
- Intelligence Core and Athena agents.
- Future media, API, and enterprise consumers indirectly through trusted intake.

## Primary Workflows

1. Detect a public source item from an approved source registry.
2. Run compliance validation and normalization.
3. Check duplicates and conflicts.
4. Score priority and create claim candidates.
5. Attach evidence and route to Intelligence Core or admin review.

## Core Features

- Intake pipeline stages.
- Source monitoring placeholders.
- Compliance validation.
- Duplicate detection.
- Conflict detection.
- Priority Score and labels.
- Claim candidate routing.
- Admin escalation dashboard metrics.

## Inputs

- Source registry entries, public source items, normalized content, detected entities, claim candidates, evidence, source metadata, and compliance rules.

## Outputs

- Prioritized intake items.
- Duplicate and conflict reports.
- Claim candidates with evidence.
- Admin review queue items.
- Audit log payloads.

## AI Responsibilities

Sentinel may organize and prioritize incoming information. It is not a scraper, does not confirm facts, and never publishes intelligence directly. Intelligence Core decides what can surface.

## Explainability

Each intake item should show why it was accepted, rejected, escalated, deduplicated, or marked conflicting. Priority labels should explain source reliability, impact, confidence, and watchlist relevance.

## UI Components

- SentinelStatusPanel
- IntakeVolumeCard
- PriorityAlertCard
- ConflictQueueSummary
- DuplicateRemovalSummary
- ComplianceStatusBadge

## Platform Dependencies

- Source Registry
- Claim Service
- Intelligence Core
- Athena
- Admin Review
- Knowledge Graph
- API Platform

## Future Enhancements

- Approved RSS and official release monitoring.
- Partner source integrations.
- Advanced duplicate identity resolution.
- Review workflow analytics.

## Success Metrics

- Intake throughput.
- Duplicate prevention rate.
- Conflict detection rate.
- Admin review resolution time.
- False-positive and false-negative review rates.
