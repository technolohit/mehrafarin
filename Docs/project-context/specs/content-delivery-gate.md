# Spec (future) — content-delivery-gate

**Status:** Specification only. Not installed as a Cursor skill.  
**Donor:** Delivery-contract *architecture* from claude-blog; criteria rewritten for professional website pages (not blog PDF/hero artifact packs).

## Purpose

Block publish/implementation of page content until deterministic + review gates pass, especially YMYL.

## Proposed gates

1. Context/fact compliance (binary)  
2. Content completeness vs brief  
3. Source/claim verification (`content-factcheck`)  
4. Brand/voice quality (`voice.md`; final polish via `humanizer` / `no-ai-slop`)  
5. SEO/GEO quality (notes from `content-brief` + optional `geo-aio-audit`)  
6. Internal linking vs content-map  
7. Schema/metadata consistency (no fabricated schema)  
8. Accessibility/readability  
9. Visual/render (post-implement: `website-qa`)  
10. No unsupported YMYL claims (binary)

Gates 1, 3, and 10 are blockers. Others may use a score threshold (e.g. ≥90) only after blockers pass. Human publish approval remains mandatory.

## Inputs / outputs

- Inputs: draft, brief, content-map row, facts files, review notes  
- Outputs: `review.md`, `preflight.json` under draft folder; `gate_status` / `publish_approved` updates to content-map (human-approved)

## Out of scope for this skill

- Site-wide technical SEO (`technical-seo-audit`)
- Site-wide GEO (`geo-aio-audit`)
- GSC/GA4/decay measurement
- Full claude-blog install

## Ownership

Implement after first page workflow; keep TechnoloHit skills authoritative for research/IA/QA.
