# Team Intelligence Center Specification

## Current Status

In Development — mock/demo team dashboard foundation exists. Real roster, depth chart, and team analytics ingestion are planned.

## Purpose

Team Intelligence Center is the operating dashboard for a college program. It explains roster strength, portal class impact, team needs, depth chart pressure, momentum, coaching context, conference position, and AI storylines.

## Target Users

- Fans and media following a program.
- Coaches, recruiting staffs, and athletic departments.
- Analysts comparing teams and conferences.
- Enterprise partners needing program intelligence.

## Primary Workflows

1. Select a team from search, rankings, Command Center, TMX, or maps.
2. Scan Team Score, rankings, momentum, and last updated timestamp.
3. Review roster intelligence, depth chart, needs engine, portal class, and team timeline.
4. Explore coaching intelligence, AI storylines, recruiting pipeline, and conference comparison.
5. Compare teams or open Atlas for deeper roster simulation.

## Core Features

- Team hero and Portal Pulse Team Score.
- Roster Intelligence and Depth Chart Intelligence.
- Team Timeline and Team Needs Engine.
- Portal Class Dashboard and Team Momentum Engine.
- Coaching Intelligence, AI Storylines, Recruiting Pipeline, Conference Comparison, and Team Comparison placeholders.

## Inputs

- Team, school, roster, depth chart, movement, rankings, claims, sources, coach, conference, prediction, and timeline data.
- Atlas roster intelligence, Mercury market signals, Apollo history, and Librarian relationships.

## Outputs

- Program-level intelligence dashboard.
- Position needs, depth confidence, roster score, momentum, and comparison outputs.
- Future API-safe team profile and dashboard responses.

## AI Responsibilities

AI may identify storylines, summarize roster risks, explain movement, and recommend follow-up views. AI must not assert real roster facts, scholarship counts, commitments, or depth chart certainty without verified evidence and Intelligence Core approval.

## Explainability

Every team score, need label, momentum signal, and roster recommendation should disclose evidence count, confidence, inputs, contradictions, and whether it is mock, projected, or verified.

## UI Components

- TeamHero
- TeamScoreCard
- RosterWidget
- DepthChartWidget
- TeamTimelineWidget
- TeamNeedsWidget
- PortalClassWidget
- MomentumWidget
- CoachingWidget
- AIStorylinesWidget
- ConferenceComparisonWidget
- TeamComparisonWidget

## Platform Dependencies

- Intelligence Core
- Platform SDK TeamSDK
- Atlas
- Mercury
- Apollo
- Knowledge Graph
- Rankings Engine
- API Platform

## Future Enhancements

- Sport-specific roster models.
- Private Coach Workspace and GM Workspace integration.
- Real scholarship, eligibility, and returning production data.
- Conference and historical comparison models.

## Success Metrics

- Team dashboard views.
- Team comparison usage.
- Need module engagement.
- Atlas click-through rate.
- Repeat visits during portal windows.
- Enterprise workflow completion rate.
