# Explain This

Explain This is a reusable interaction for every score, chart, prediction, recommendation, AI insight, and simulation.

## User Goal

The user should understand why the system is showing something and how much to trust it.

## Reveal Content

- evidence summary
- confidence level
- contributing signals
- conflicting signals
- source count
- last updated timestamp
- assumptions if simulated
- model/version placeholder when applicable
- next suggested action

## Interaction Pattern

- Button label: `Explain This`
- Compact surfaces may use an icon plus tooltip.
- Opens a drawer, popover, or inline expansion depending on workspace density.
- Keyboard accessible.
- Screen reader label must name the explained object.

## Rules

- Explanation must never invent evidence.
- If evidence is unavailable, say so.
- If confidence is low, explain why.
- If output is simulated, assumptions are mandatory.

