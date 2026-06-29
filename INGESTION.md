# Portal Pulse Ingestion Architecture

Portal Pulse ingestion is designed to organize public information into source-backed claims. It must not bypass paywalls, logins, CAPTCHAs, robots.txt, private databases, or other access controls. It must not copy full articles.

## Ingestion Philosophy

The ingestion system should collect only legally accessible public information and transform it into structured, reviewable claim candidates.

The product goal is not to scrape everything. The goal is to build a compliant intelligence workflow:

1. Discover public source items.
2. Check compliance before fetching or parsing.
3. Normalize source metadata and short summaries.
4. Detect duplicates.
5. Create source records.
6. Create claim candidates.
7. Score confidence.
8. Route risky items to admin review.
9. Preserve audit logs.

## Compliance Rules

The compliance layer rejects sources marked:

- private
- login required
- paywalled without license
- robots disallowed
- unknown compliance status requiring review

Compliance checks include:

- allowed source type
- paywall status
- robots.txt placeholder
- rate limit settings
- terms and compliance notes
- content usage rules

## Source Registry

The source registry describes approved and rejected source candidates. Each registered source includes:

- source id
- source name
- base URL
- source type
- sport coverage
- school coverage
- conference coverage
- crawl frequency
- reliability score
- terms and compliance notes
- robots.txt status placeholder
- paywall status
- last checked
- enabled flag

The current registry is fictional and mock-only.

## Parser Architecture

Parser interfaces exist for:

- RSS feed parser
- official school release parser
- news article parser
- social post parser
- podcast transcript parser
- generic text parser

Each parser returns normalized content:

- title
- author
- publisher
- published date
- retrieved date
- canonical URL
- short summary
- raw text placeholder
- detected player names placeholder
- detected teams placeholder
- detected claim candidates placeholder

## Deduplication Rules

Duplicate detection checks:

- canonical URL
- title similarity placeholder
- source URL
- article fingerprint
- content hash
- same player plus same claim plus same date placeholder

Duplicate articles should not create duplicate claims.

## Reliability Scoring

Base reliability scores:

- official school release: 95
- player public statement: 95
- coach public statement: 90
- verified reporter: 85
- established recruiting site: 75
- local news article: 70
- podcast transcript: 60
- social media post: 55
- message board: 20
- unknown: 10

Future admin overrides can adjust source reliability.

## Claim Candidate Flow

Claim candidates are not published claims. They are pending-review objects with:

- claim type
- subject guess
- extracted value
- source id
- source URL
- confidence score
- `pending_review` status
- extraction method
- created timestamp

Supported candidate types include portal entry, commitment, team interest, visit, offer, NIL report, roster change, ranking update, prediction signal, and coaching connection.

## Admin Review Flow

Route these items to admin review:

- low-confidence claims
- NIL claims
- conflicting claims
- message board claims
- unsourced claims
- social-media-only claims
- duplicate uncertainty
- player identity uncertainty

The current implementation returns mock review-routing results. Future phases should persist candidates and review decisions.

## Future AI Extraction Connection

AI extraction should plug in after parsing and before claim candidate creation.

Future flow:

1. Parser creates normalized content.
2. AI extraction identifies structured claim candidates.
3. Confidence scorer evaluates candidate reliability.
4. Claim service checks duplicates and conflicts.
5. Admin review handles risky items.
6. Approved claims become source-backed records.

AI must not invent facts or cite nonexistent sources.
