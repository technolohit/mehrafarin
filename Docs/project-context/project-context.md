# Project Context

## Identity
- Project: Mehrafarin Kolahdoozan — bilingual psychotherapist portfolio website
- Business / legal entity: Independent professional practice (entity legal name: UNKNOWN)
- Primary domain: UNKNOWN (local development uses `http://localhost:2580`)
- Repository: `technolohit/mehrafarin` (local: `c:\culturebox\Mehrafarin`)
- Project type: Next.js bilingual professional website
- Technical stack: Next.js App Router, TypeScript, Tailwind CSS 4

## Business
- Business model: Independent psychotherapist professional presence (portfolio + contact), not a clinic marketplace or booking SaaS
- Products/services: See `services.md` (PROVISIONAL until human-approved)
- Commercial priority: Discover → Understand → Trust → Contact
- Differentiation: Calm, analytical orientation; explicit rejection of outcome guarantees ([SAFE-001])
- Proof/evidence available: License number 22018 ([PRO-004]); professional titles ([PRO-001]–[PRO-003]); portraits in `/public/images/portrait/`

## Audience
- ICP / target customers: Adults and couples ([PRO-010]) seeking analytical / psychoanalytic-oriented psychotherapy online in Persian
- Key needs/problems: Who she is; orientation; how online work begins; how to contact
- Decision factors: Trust, clarity, professional legitimacy, emotional safety, practical process
- Buying stage(s): Awareness → consideration → contact (no ecommerce)

## Market
- Countries: UNKNOWN ([BUS-002]); practice is online-only ([PRO-012]) — do not invent a city clinic
- Languages (site): Persian (`fa`, default, RTL) and English (`en`, LTR)
- Languages (therapy sessions): Persian / Farsi ([PRO-011]); English site locale does not imply English therapy ([SAFE-008])
- Cities/service areas: UNKNOWN ([BUS-001]); no in-person location implied ([SAFE-009])
- Local vs national vs international: Online Persian-language practice (geography UNKNOWN)

## Conversion
- Primary conversion: Contact via Email or Telegram channel types ([BUS-013]; exact addresses UNKNOWN)
- Secondary conversions: Learn more (About), understand services/process
- Important forms/CTAs: Structural Contact page; exact handles TBD; avoid soliciting clinical detail ([SAFE-007])
- Sales/contact flow: Contact → conversation about suitability → ongoing online sessions (45 minutes typical [PRO-014]); no public fees ([BUS-005])

## Brand and claims
- Brand voice: See `voice.md`
- Allowed claims: Only Fact IDs marked `[VERIFIED]` in `professional-facts.md`, `services.md` (after promotion), and this hub
- Claims requiring evidence: Any medical/educational explanation of psychology concepts (external sources — see `content-guardrails.md`)
- Forbidden/unsafe claims: See Fact IDs `[SAFE-*]` in `professional-facts.md` / `content-guardrails.md`
- Required terminology: Prefer verified bilingual titles; do not invent alternate clinical labels

## Competitors
- Known business competitors: UNKNOWN
- Search competitors: UNKNOWN (to be researched via `seo-research` when briefs begin)

## Compliance
- Legal/privacy constraints: Mental-health / YMYL caution; privacy pages required before production contact-data collection
- Regulated topics: Psychotherapy, clinical psychology claims, health advice
- Required disclaimers: No outcome guarantees ([SAFE-001]); do not solicit unnecessary clinical detail via general forms (policy in master build brief; implement when form ships)

## Data and measurement
- Search Console: UNKNOWN / not configured in repo
- Analytics: UNKNOWN / not configured in repo
- Tag manager: UNKNOWN
- CRM/lead tracking: UNKNOWN

## Technical notes
- CMS: None — TypeScript content dictionaries (`content/fa`, `content/en`) + `content/profile.ts`
- Rendering: Next.js App Router
- Localization: Locale-first routes `/fa/*`, `/en/*`; middleware redirects `/` → `/fa`
- Existing SEO implementation: `lib/metadata/seo.ts`, `app/sitemap.ts`, `app/robots.ts`, home Person JSON-LD
- Existing project rules: `.cursor/rules/project-core.mdc`
- Deployment constraints: UNKNOWN

## Content Intelligence pointers
- Professional facts: `Docs/project-context/professional-facts.md`
- Services: `Docs/project-context/services.md`
- Voice: `Docs/project-context/voice.md`
- Guardrails: `Docs/project-context/content-guardrails.md`
- Site architecture: `Docs/project-context/site-architecture.md`
- Content map: `Docs/project-context/content-map.yaml`
- SEO/GEO profile: `Docs/project-context/seo-geo-profile.md`
- Stakeholder intake: `Docs/project-context/stakeholder-questionnaire.md`
- Future skill specs: `Docs/project-context/specs/`

## Runtime sync policy
- Editorial source of truth: `Docs/project-context/*`
- Runtime published facts/nulls: `content/profile.ts` and locale dictionaries
- Agents must not invent into either. Promotion path: VERIFIED in Docs → human approve → then update runtime files in an approved implementation phase.

## Unknowns / decisions pending
- See Fact IDs marked `[UNKNOWN]` and `[PROVISIONAL]` in `professional-facts.md` and `services.md`
- Stakeholder questionnaire (≤12): `stakeholder-questionnaire.md`
