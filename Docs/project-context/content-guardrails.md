# Content Guardrails

YMYL-aware rules for all content workflows on this project.

---

## Fact states

| State | Public production use |
|-------|------------------------|
| `VERIFIED` | May be asserted |
| `UNKNOWN` | Must not be inferred or filled by model invention |
| `PROVISIONAL` | Planning/drafts only until human promotes to VERIFIED |
| `FORBIDDEN` | Hard failure if present in public content |

Fact IDs live in `professional-facts.md` and `services.md`. IDs stay stable when wording changes.

---

## Two evidence classes

### A. Professional / business facts

Examples: credentials, license, education, services offered, fees, location, session languages, client groups, session format, contact channels.

**Evidence required:** Client approval and/or authoritative professional documentation.  
**Not sufficient:** Model prior knowledge, generic psychology websites, or “sounds plausible.”

### B. Medical / educational claims

Examples: explanations of psychological concepts, descriptions of therapeutic approaches in general, research findings, health-related statistics.

**Evidence required:** Appropriate external sources (primary literature, professional guidelines, reputable institutions)—tracked in briefs/drafts.  
**Not sufficient:** The client’s profile alone, or inventing citations.

Writers must label which class a claim belongs to. Mixing classes without the right evidence is a gate failure.

---

## Hard prohibitions (non-exhaustive)

- [SAFE-001] Outcome guarantees  
- [SAFE-002] Invented credentials  
- [SAFE-003] Condition/specialty landing-page expansion without separate approval  
- [SAFE-004] Unverified contact details as fact  
- [SAFE-005] Unverified fees/insurance as fact  
- [SAFE-006] Publishing PROVISIONAL services as final  
- [SAFE-007] Soliciting unnecessary sensitive clinical detail via general forms  

---

## Workflow constraints

- Do not mutate `app/`, production dictionaries, sitemap, robots, metadata, or schema without the approved implementation phase.
- Editorial truth: `Docs/project-context/*` → human approval → then runtime (`content/profile.ts`, dictionaries).
- Page briefs: TechnoloHit `content-brief`. SERP: `seo-research`. IA: `site-architecture`. GEO: `geo-aio-audit`. Humanize: `humanizer` / `no-ai-slop`.
- Future (not installed yet): `content-factcheck`, `content-delivery-gate` — see `specs/`.

---

## Placeholder / indexation caution

Inner routes that are placeholders must not be treated as finished public content. Indexation policy for placeholders is an architecture decision pending implementation approval (`site-architecture.md`).
