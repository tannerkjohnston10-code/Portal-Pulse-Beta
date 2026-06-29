# Portal Pulse North Star Design Document

Every future product, design, data, and engineering decision for Portal Pulse should begin with:

> Follow the Portal Pulse North Star Design Document.

Portal Pulse is the Bloomberg Terminal of College Athletics: fast, source-aware, data-dense, addictive to use, and built for people who need to understand player movement before the market fully sees it.

## 1. Product Mission

Portal Pulse exists to turn the chaos of college athletics movement into trusted, actionable intelligence.

The first wedge is the NCAA Transfer Portal. The broader mission is to become the operating system for modern college sports decision-making across transfer portal activity, recruiting, NIL, rosters, depth charts, coaching changes, team analytics, player movement, conference trends, historical data, AI predictions, alerts, and premium dashboards.

Portal Pulse should help serious users answer three questions faster than anyone else:

- What changed?
- Why does it matter?
- What is likely to happen next?

## 2. Long-Term Vision

Portal Pulse should become the default intelligence layer for college athletics.

The product should evolve from a best-in-class transfer portal website into a real-time decision platform used by fans, analysts, collectives, agents, journalists, athletic departments, bettors where legally appropriate, and industry insiders.

Long-term, Portal Pulse should support:

- Live transfer portal intelligence
- Recruiting boards and commitment timelines
- NIL market estimates and deal context
- Roster management and scholarship tracking
- Depth chart projections
- Coaching carousel intelligence
- Team and conference trend analysis
- Historical player movement databases
- AI-powered forecasts and alerts
- Premium dashboards for power users
- Saved boards, watchlists, and custom alerts
- Institutional-grade source verification workflows

The product should feel less like a news site and more like a command center.

## 3. Core User Types

**Power Fans**

Fans who follow roster construction daily. They want fast updates, confidence levels, team needs, visit activity, and realistic predictions without digging through message boards, social media, and scattered articles.

**Recruiting and Portal Analysts**

Media professionals, independent analysts, podcasters, newsletter writers, and data-driven commentators. They need source-backed claims, clean player pages, context, comparison tools, and timelines they can trust.

**Collectives and NIL Operators**

People involved in NIL strategy, budget allocation, market analysis, and player value assessment. They need careful NIL ranges, disclaimers, confidence levels, market comps, and evidence trails.

**Agents, Advisors, and Player Families**

Users who need to understand opportunity, fit, roster competition, NIL climate, and market perception. The product must be careful, transparent, and never present speculation as certainty.

**Coaches and Staff**

Team personnel who need roster intelligence, depth chart movement, positional supply, transfer windows, and competitive benchmarking. Premium versions should support private boards and alerts.

**Journalists and Researchers**

Users who care about provenance, timestamps, and change history. They need to see where a claim came from, when it changed, and how confident Portal Pulse is in it.

**Casual Fans**

Users who want a clean, fast way to understand the portal without becoming insiders. They should get simple summaries, rankings, and player pages that are easy to scan.

## 4. Primary Use Cases

Portal Pulse should prioritize these jobs:

- Track who entered the portal, committed, withdrew, visited, or received major interest.
- Understand the best available players by position, rating, production, fit, and market demand.
- Compare team portal classes by quality, needs addressed, roster impact, and net movement.
- View a player profile that explains status, history, timeline, NIL context, fit, predictions, and evidence.
- Monitor team roster construction across transfers, recruits, returning players, departures, and depth chart changes.
- Identify market inefficiencies such as underrated players, crowded position rooms, and teams with urgent needs.
- Receive alerts when watched players, teams, positions, or conferences change.
- Evaluate NIL market movement with appropriate caution and transparent confidence.
- See prediction logic without mistaking it for fact.
- Review historical movement patterns by team, conference, position, coaching staff, and transfer window.

## 5. Design Philosophy

Portal Pulse should feel premium, fast, serious, and alive.

The product is an intelligence surface, not a magazine, not a generic sports blog, and not a marketing landing page. It should be dense enough for experts and clear enough for casual users.

Design priorities:

- Speed over spectacle.
- Clarity over decoration.
- Evidence over hype.
- Dense information with disciplined hierarchy.
- Professional sports-finance energy, not fan-site clutter.
- Every page should answer a real user question immediately.
- Every claim should visually communicate confidence and freshness.
- Interaction should reward repeated daily use.

The interface should feel like a modern terminal for college athletics: clean panels, strong tables, compact cards, live indicators, filters, watchlists, sortable rankings, and source drawers.

## 6. Visual Identity

Portal Pulse should look like a premium intelligence product.

**Personality**

- Trustworthy
- Fast
- Sharp
- Analytical
- Modern
- Competitive
- Addictive

**Color System**

Use a restrained, high-contrast palette with enough accent color to signal status and movement.

- Ink: primary text and dark surfaces
- White: clean panels and data surfaces
- Field: soft app background
- Pulse teal: verified signals, positive confidence, primary actions
- Signal red: urgent changes, risk, negative movement
- Gold: premium, NIL, high-value alerts
- Slate: secondary text, borders, quiet metadata

Avoid one-note palettes, especially all-purple, all-blue, beige-heavy, or overused gradient systems. The product should not look like a SaaS template.

**Typography**

Use crisp sans-serif typography. Headlines should be confident but not oversized except for true homepage-level identity. Tables, dashboards, and profile pages should use compact, highly readable type.

**UI Shape**

Cards and panels should have modest radius, generally 8px or less. Avoid decorative nesting and unnecessary floating-card layouts. Use tables, lists, tabs, segmented controls, filters, drawers, and compact metric blocks.

**Data Signals**

Core visual atoms:

- Confidence badge
- Last updated timestamp
- Source count
- Mock/live status
- Movement indicator
- Watchlist state
- Prediction probability bar
- NIL range band
- Roster impact score
- Team need tag

## 7. Homepage Experience

The homepage should be the daily command center.

It should not be a marketing page. The first screen should immediately show useful portal intelligence.

Homepage goals:

- Show what changed recently.
- Show the most important players.
- Show team movement.
- Show high-confidence predictions.
- Show NIL market signals.
- Show upcoming or completed visits.
- Make source quality visible.
- Move users quickly into player, team, prediction, NIL, and visit workflows.

Recommended homepage modules:

- Breaking movement feed
- Top available players
- Team portal ranking snapshot
- Prediction market movers
- NIL watch
- Visit board
- Position supply and demand
- Conference trend pulse
- Saved watchlist for signed-in users
- Premium alert preview

The homepage should be refreshed by data, not rewritten by hand. Editorial framing may exist, but the product's core power should come from structured intelligence.

## 8. Player Profile Experience

The player profile is the most important product surface.

It should tell the complete story of a player in the portal and be useful to fans, analysts, collectives, and staff.

A premium player profile should include:

- Name, position, class, size, previous school, current status
- Portal entry date and timeline
- Commitment status and destination if applicable
- Eligibility and remaining years where verified
- Ratings and rankings with source attribution
- Production profile and advanced stats
- Injury notes only when sourced and appropriate
- Recruiting history
- Transfer interest list
- Visit history
- NIL estimate range and confidence
- Fit analysis by destination
- Depth chart opportunity by team
- Prediction panel with probability and rationale
- Comparable players
- Source-backed claim timeline
- Last updated timestamp
- Watch button and alert controls

Profile design should make uncertainty legible. A user should instantly know what is confirmed, what is reported, what is modeled, and what is speculative.

## 9. Team Dashboard Experience

Team pages should become command centers for roster construction.

A team dashboard should answer:

- Who joined?
- Who left?
- Who is visiting?
- What positions are still needed?
- How does the portal class compare nationally and within conference?
- How does the roster look now?
- What is the projected depth chart?
- Where are the NIL resources likely being concentrated?
- Which players are at risk of leaving?
- Which targets are realistic?

Recommended team dashboard modules:

- Portal class rank and score
- Additions, departures, commits, withdrawals
- Position need matrix
- Roster and scholarship tracker
- Projected depth chart
- Transfer target board
- Recruiting class integration
- NIL allocation signals
- Coaching staff changes
- Conference comparison
- Historical portal performance
- Alerts and watched targets

Team dashboards should support both public fan views and future premium power-user dashboards.

## 10. Trust and Source Verification Principles

Portal Pulse must be built on trust.

Every claim that could influence user belief must include:

- Source URL
- Source name
- Claim text or summary
- Confidence score
- Last updated timestamp
- Claim type
- Entity relationships
- Mock/live status

Claims should be categorized as:

- Official: school, player, coach, NCAA, conference, verified public announcement
- Reported: credible journalist, publication, or insider report
- Aggregated: multiple independent sources support the claim
- Modeled: generated by Portal Pulse from structured inputs
- Rumor: unconfirmed and clearly labeled, if allowed at all
- Mock: placeholder data used only in non-production or clearly labeled demos

Never visually present a modeled, rumored, or mock claim as confirmed fact.

Source quality should be part of the product, not hidden in metadata. Users should be able to inspect why Portal Pulse believes something.

## 11. AI Rules and Boundaries

AI should make Portal Pulse faster, clearer, and more predictive without weakening trust.

AI may:

- Summarize sourced information.
- Extract entities from source material.
- Suggest tags, positions, teams, and relationships.
- Generate fit analysis from structured data.
- Produce predictions from transparent inputs.
- Detect unusual movement patterns.
- Draft alerts for human or automated review.
- Explain why a model changed.

AI must not:

- Invent facts.
- Cite nonexistent sources.
- Present speculation as reporting.
- Create NIL claims without evidence or clear modeling labels.
- Make defamatory, medical, legal, or eligibility claims without strong sourcing.
- Hide uncertainty.
- Remove timestamps, confidence scores, or source URLs.

AI-generated content must be labeled when the label changes user interpretation. AI summaries should link back to underlying claims.

Prediction models must expose at least the high-level drivers behind each forecast.

## 12. Data Accuracy Standards

Portal Pulse should distinguish between correctness, confidence, and freshness.

Accuracy standards:

- Confirmed facts require reliable sourcing.
- All claim records require timestamps.
- Data freshness should be visible on every major page.
- Conflicting claims should not be silently collapsed.
- Corrections should preserve history where possible.
- User-facing pages should distinguish live, stale, disputed, modeled, and mock data.
- Production data ingestion should reject unsourced claims by default.
- Ranking and scoring formulas should be documented internally.

Each claim should have a lifecycle:

1. Captured
2. Parsed
3. Linked to entities
4. Scored for confidence
5. Reviewed or automatically validated
6. Published
7. Updated, confirmed, contradicted, or archived

## 13. NIL Reporting Rules

NIL reporting requires extra caution.

NIL values should be shown as estimates or ranges unless confirmed by reliable documentation or direct public reporting. The product should avoid implying exact compensation when exact compensation is not verified.

NIL modules must include:

- Estimate or range
- Confidence score
- Source URL
- Last updated timestamp
- Methodology note or category
- Clear label for modeled values
- Disclaimer that estimates are not verified contract values unless explicitly sourced

Portal Pulse should avoid publishing sensitive private financial details without a strong public source and clear user value.

NIL reporting should focus on market intelligence, not gossip.

## 14. Prediction Rules

Predictions are product features, not facts.

Every prediction must include:

- Probability
- Destination or outcome
- Rationale
- Model or analyst name
- Confidence score or model confidence
- Last updated timestamp
- Source inputs or evidence links
- Change history when probability moves materially

Predictions should be framed as forecasts, not reports. Use language such as "projected," "lean," "forecast," and "model view." Avoid language that suggests certainty unless the outcome is confirmed.

Prediction drivers may include:

- Team need
- Depth chart opportunity
- Visit activity
- Coaching relationships
- Geography
- NIL market fit
- Scheme fit
- Prior recruitment
- Public reporting
- Timing
- Historical patterns

Prediction pages should show why probabilities changed.

## 15. Mobile Experience

Mobile should feel like a fast intelligence app, not a squeezed desktop site.

Mobile priorities:

- Fast load
- Sticky navigation or compact tab access
- Scannable feeds
- Expandable evidence drawers
- Swipe-friendly rankings and boards
- Compact player cards
- Search-first workflows
- Watchlist and alert access
- Tables transformed into readable stacked rows where needed

The mobile homepage should show recent movement, watched entities, top players, and alerts quickly. Dense data is welcome, but it must remain readable and tappable.

## 16. Accessibility Standards

Portal Pulse should meet WCAG 2.2 AA standards as a baseline.

Accessibility requirements:

- Strong color contrast
- Keyboard navigability
- Visible focus states
- Semantic HTML
- Proper table structure
- Descriptive labels for filters, buttons, and controls
- Screen-reader-friendly status changes
- No reliance on color alone for confidence or movement
- Reduced-motion support
- Mobile tap targets large enough for repeated use

Premium feel must never come at the cost of accessibility.

## 17. Performance Expectations

Portal Pulse should feel instant.

Performance expectations:

- Core pages should target sub-2-second perceived load on typical broadband.
- Important dashboards should stream or progressively load where useful.
- Search and filters should feel immediate.
- Avoid heavy decorative assets.
- Data tables should be virtualized when large.
- Cache stable historical data aggressively.
- Revalidate live intelligence frequently.
- Use skeleton states only when they reduce uncertainty.
- Keep mobile payloads disciplined.

The product should be addictive partly because it is fast enough to check repeatedly throughout the day.

## 18. Premium Feature Roadmap

Portal Pulse should support a freemium path without making the free product feel broken.

Potential premium features:

- Custom team dashboards
- Saved player and team watchlists
- Real-time alerts by player, team, position, conference, and claim type
- Advanced filters and comparison tools
- Historical portal database
- NIL market dashboards
- Roster and scholarship management tools
- Depth chart projections
- Prediction change alerts
- Analyst notes and private boards
- Exportable reports
- API access
- Conference trend dashboards
- Coaching carousel tracker
- Staff-facing roster intelligence
- Multi-user workspaces

Premium should sell speed, depth, customization, and workflow power.

## 19. Product Principles

Portal Pulse should follow these principles:

- Trust is the product.
- Show the evidence.
- Speed matters.
- Uncertainty must be visible.
- Structured data beats loose text.
- The player profile is sacred.
- Every dashboard should answer a real decision question.
- Make daily use rewarding.
- Model outputs must explain themselves.
- Premium means power, not confusion.
- Never sacrifice accuracy for virality.
- Design for experts, but welcome casual users.
- Keep claims, sources, and timestamps inseparable.
- Build the transfer portal wedge in a way that can support all college athletics intelligence.

## 20. Competitive Difference

Portal Pulse is not trying to be another recruiting site.

**Compared with On3**

On3 has strong recruiting coverage, NIL visibility, and industry media presence. Portal Pulse should differentiate through structured intelligence, faster workflows, source transparency, model explanations, roster dashboards, and a terminal-like product experience.

**Compared with 247Sports**

247Sports has deep recruiting rankings, team communities, and long-standing coverage. Portal Pulse should differentiate by focusing on real-time movement intelligence, evidence-linked claims, team roster construction tools, alerts, and cross-domain analytics beyond traditional recruiting coverage.

**Compared with ESPN**

ESPN has broad reach and mainstream authority. Portal Pulse should differentiate by being narrower, faster, deeper, more interactive, and more data-native for college athletics power users.

**Compared with Traditional Recruiting Sites**

Traditional sites are often article-first, forum-first, or ranking-first. Portal Pulse should be intelligence-first.

Portal Pulse should win by combining:

- Real-time structured data
- Source verification
- Confidence scoring
- Player and team context
- NIL caution and clarity
- Prediction transparency
- Premium dashboards
- Alerts
- Historical analysis
- A fast, modern, addictive interface

The ambition is simple: when a serious college athletics user wants to understand what is happening, what it means, and what might happen next, Portal Pulse should be the first tab they open.
