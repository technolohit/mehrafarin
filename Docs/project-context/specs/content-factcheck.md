# Spec (future) — content-factcheck

**Status:** Specification only. Not installed as a Cursor skill.  
**Donor:** Selective adaptation from TechnoloHit claude-blog fork / upstream factcheck patterns.  
**Do not** install the full claude-blog skill tree.

## Purpose

Verify that draft or production-bound copy only asserts Fact IDs in state `VERIFIED`, does not infer `UNKNOWN`, does not publish `PROVISIONAL`, and contains zero `FORBIDDEN` claims. Separately check medical/educational claims against external sources.

## Inputs

- Draft path under `Docs/content-drafts/`
- Matching `content-map.yaml` entry
- `professional-facts.md`, `services.md`, `content-guardrails.md`
- Page brief (when present)

## Outputs

- Claim table: quote → Fact ID or EXTERNAL_SOURCE → state → pass/fail
- Evidence-class tag per claim (`professional_business` | `medical_educational`)
- P0 blockers vs P1 notes

## Hard fail conditions

- Any `[FORBIDDEN]` / SAFE-* assertion
- UNKNOWN presented as fact
- PROVISIONAL presented as final public offering
- Medical/educational statistic or mechanism claim without source

## Ownership

- Complements TechnoloHit `content-brief`; does not replace `seo-research` or `geo-aio-audit`
- Implement as skill after first real page workflow proves architecture
