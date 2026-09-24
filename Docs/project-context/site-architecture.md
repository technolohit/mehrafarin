# Site Architecture — Decision Log

Phase 3 materialization (2026-09-24). Analysis and decisions only — no route implementation changes in this phase.

Authority skill for future IA revisions: TechnoloHit `site-architecture`.

---

## Approved page decisions

| Page | Decision | Notes |
|------|----------|--------|
| Home | **KEEP** | Primary hub; substantive EN/FA content |
| About | **KEEP** | Standalone; body currently placeholder |
| Services | **KEEP** | Single services page; no specialty landers |
| Process | **KEEP** | Includes first-session narrative; fees only as section after VERIFIED facts |
| Contact | **KEEP** | Primary conversion; form after privacy rules |
| Blog / Insights | **KEEP AS DEFERRED EDITORIAL SURFACE** | Route may remain; no posts until editorial workflow; treat as non-substantive until then |

## Candidate page decisions

| Candidate | Decision | Notes |
|-----------|----------|--------|
| Approach | **Keep inside Home for now** | Do not spin out unless depth requires |
| First Session | **Keep inside Process for now** | Merge, not standalone |
| Fees | **Do not add** | [BUS-005] VERIFIED: fees are not published; no Fees page |
| FAQ | **Defer standalone page** | Optional embedded Q&A later if real questions exist |
| Legal / Privacy | **Required as appropriate before production contact-data collection** | Utility pages; not SEO growth |

## Explicit prohibitions

- No condition/specialty SEO landing-page expansion until separate research **and** professional-scope approval ([SAFE-003]).
- Do not invent therapy specialties or diagnosis menus.

## Locale model

- Locale-first: `/fa/*` (default), `/en/*`
- Equivalent routes should maintain parity when content is live
- Hreflang already intended in metadata helpers; content parity is editorial, not automatic

## Navigation model (current product)

- Primary nav: About, Services, Process, Blog, Contact
- Note: Nav label currently includes “Fees” in dictionaries while fees are not published ([BUS-005]). On implementation, rename nav to “Process” (or equivalent) so UI matches policy.

## Internal linking principles

- Home → About, Services, Process, Contact (existing CTAs)
- Avoid orphan important pages
- Preserve locale in all internal links
- No keyword-stuffed anchors

## Indexation (decision pending implementation)

Recommendation for a later approved phase: placeholders → `noindex` or sitemap exclusion until Delivery Gate + publish approval. Not implemented in Phase 3.

## Open decisions

- Production domain ([BUS-011])
- Whether Blog route stays publicly crawlable while empty
- Exact Legal/Privacy set for jurisdiction ([BUS-002], [BUS-010], [BUS-012])
