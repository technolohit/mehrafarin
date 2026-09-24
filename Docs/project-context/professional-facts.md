# Professional & Business Facts

Stable Fact IDs. Do not reuse an ID for a different fact. Wording may change; IDs must not.

States: `VERIFIED` | `UNKNOWN` | `PROVISIONAL` | `FORBIDDEN`

**Intake source:** Stakeholder answers applied 2026-09-24. License number remains **22018** ([PRO-004]) despite a `2201` typo in one stakeholder message.

---

## Professional facts

- [PRO-001][VERIFIED] Clinical psychologist / روان‌شناس بالینی
- [PRO-002][VERIFIED] Psychotherapist / روان‌درمانگر
- [PRO-003][VERIFIED] Psychotherapist with an analytical orientation / روان‌درمانگر با رویکرد تحلیلی
- [PRO-004][VERIFIED] Psychology Organization License: 22018 / پروانه نظام روان‌شناسی: ۲۲۰۱۸
- [PRO-005][VERIFIED] Legal/display name: Mehrafarin Kolahdoozan / مهرآفرین کلاهدوزان
- [PRO-006][UNKNOWN] Education / degrees / universities
- [PRO-007][UNKNOWN] Years of professional experience
- [PRO-008][UNKNOWN] Professional memberships / associations (beyond license string)
- [PRO-009][VERIFIED] Therapeutic orientation / framework terminology approved for public use (not certifications, degrees, or invented credentials; not treatment guarantees): Lacanian; analytical orientation; psychodynamic; psychoanalytic / لاکانی؛ رویکرد تحلیلی؛ روان‌پویشی؛ روانکاوانه
- [PRO-010][VERIFIED] Client groups: adults and couples / بزرگسالان و زوج‌ها
- [PRO-011][VERIFIED] Therapy language: Persian (Farsi). Website English does not imply English-language therapy. / زبان جلسات: فارسی
- [PRO-012][VERIFIED] Session format: online only. Do not imply an in-person clinic location. / جلسات فقط آنلاین
- [PRO-013][UNKNOWN] Supervision / training roles (if any)
- [PRO-014][VERIFIED] Typical session duration: 45 minutes / مدت معمول جلسه: ۴۵ دقیقه

## Business / practice facts

- [BUS-001][UNKNOWN] Practice city (do not invent; online-only practice)
- [BUS-002][UNKNOWN] Practice country / jurisdiction
- [BUS-003][UNKNOWN] Exact public email address (channel type approved: see [BUS-013])
- [BUS-004][UNKNOWN] Public contact phone (not an approved primary channel in intake)
- [BUS-005][VERIFIED] Fees are not published on the website (no Fees page; no prices)
- [BUS-006][VERIFIED] Instagram exists; public reference handle aligns with [BUS-007] `mehrafarin_kolahdoozan` (exact profile URL not separately verified beyond handle)
- [BUS-007][VERIFIED] Public username reference: `mehrafarin_kolahdoozan`
- [BUS-008][UNKNOWN] Insurance / payment model (not for public site per fees policy)
- [BUS-009][VERIFIED] Cancellation / rescheduling policy is not published on the website
- [BUS-010][UNKNOWN] Contact-form field set, retention, and privacy requirements
- [BUS-011][UNKNOWN] Production canonical domain / `NEXT_PUBLIC_SITE_URL`
- [BUS-012][UNKNOWN] Legal entity / trading name for footers and privacy notices
- [BUS-013][VERIFIED] Approved public contact channel *types*: Email and Telegram (specific addresses/usernames for those channels: UNKNOWN until supplied)
- [BUS-014][UNKNOWN] Exact Telegram username / URL

## Safety / forbidden claims

- [SAFE-001][FORBIDDEN] Guaranteed treatment outcomes / ادعاهای تضمینی درباره نتیجه درمان
- [SAFE-002][FORBIDDEN] Invented credentials, degrees, certifications, or licenses
- [SAFE-003][FORBIDDEN] Invented specialties, diagnoses, or condition-specific treatment landing pages without separate research and professional-scope approval
- [SAFE-004][FORBIDDEN] Publishing unverified contact details (email, phone, address, Telegram handle) as fact
- [SAFE-005][FORBIDDEN] Publishing fees, insurance panels, or payment terms as fact (aligned with [BUS-005])
- [SAFE-006][FORBIDDEN] Presenting PROVISIONAL service copy as final verified offerings
- [SAFE-007][FORBIDDEN] Soliciting unnecessary sensitive clinical/medical detail through a general website form
- [SAFE-008][FORBIDDEN] Implying English-language therapy solely because an English website locale exists
- [SAFE-009][FORBIDDEN] Implying in-person sessions or a physical clinic address

## Notes

- Runtime mirrors still null for unpublished contact/fee fields until an implementation phase updates `content/profile.ts`.
- Evidence class for rows here: **professional / business facts**. Medical/educational explanations of Lacanian/psychoanalytic theory need external sources or must stay as practitioner framing only — see `content-guardrails.md`.
