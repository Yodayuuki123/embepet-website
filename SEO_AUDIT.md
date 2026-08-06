# SEO Audit Report — EMBEPET Website

**Date**: 2026-08-05  
**Scope**: Full-site B2B SEO and GEO optimization for pet supplement OEM/ODM manufacturer

---

## Executive Summary

### Current State
- **Strong foundation**: Metadata system, structured data helpers, robots.txt, sitemap, and llms.txt are already implemented
- **Architecture**: B2B-focused with proper redirects from retail patterns to inquiry flow
- **Technical SEO**: Canonical, hreflang, Open Graph all functional
- **GEO**: llms.txt and llms-full.txt exist with product catalog

### Critical Issues Found

1. **SITE_URL defaults to localhost** when `NEXT_PUBLIC_SITE_URL` is unset → canonical/sitemap pollution
2. **Missing pages in sitemap**: `/shop`, `/private-label`, `/contact`, `/science` not in sitemap.ts
3. **Account pages lack explicit noindex**: `/account/*` need `robots: { index: false, follow: false }`
4. **Redirects lack metadata**: `/factory`, `/about`, `/wholesale`, `/products/*` redirect without SEO consideration
5. **Homepage lacks Organization/Manufacturer Schema**: Core structured data missing
6. **No keyword strategy documented**: Pages compete for same terms
7. **Factory certificates reference 2026/2027**: Need verification — dates are in future (current year is 2026)
8. **Internal linking gaps**: No systematic cross-linking between services/products/quality
9. **Multi-language incomplete**: No strategy for untranslated locales (should be noindex)

---

## Detailed Findings

### 1. Technical SEO

#### ❌ SITE_URL Configuration
```typescript
// lib/seo.ts:4-7
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")
).replace(/\/$/, "");
```
**Impact**: All canonical URLs, sitemap entries, and Schema point to localhost in dev
**Fix Required**: Set `NEXT_PUBLIC_SITE_URL` in production .env

#### ❌ Incomplete Sitemap
**Missing from sitemap.ts**:
- `/shop` (wholesale catalog)
- `/private-label` (OEM/ODM service page)
- `/contact` (high-value conversion page)
- `/science` (quality/certifications — SEO-critical)
- `/learn` (knowledge hub index)
- `/privacy`, `/terms`, `/returns`, `/shipping`

**Current sitemap only includes**:
- Home `/`
- Static pages: `/wholesale` (→ redirects), `/factory` (→ redirects), `/about` (→ redirects)
- `/news` + articles

#### ⚠️ Account/Private Pages Lack Explicit noindex
- `/account`, `/account/login`, `/account/register`, `/account/orders`, `/account/wishlist`, `/account/addresses` → hardcoded `{ index: false }` in metadata but should be `{ index: false, follow: false }`
- `/cart`, `/checkout`, `/checkout/success` → redirects to inquiry form, but metadata should confirm noindex

#### ✅ robots.txt is Correct
- Disallows `/admin`, `/api/`, `/*/account`, `/*/cart`, `/*/checkout`
- Explicitly allows AI bots (GPTBot, ClaudeBot, PerplexityBot, etc.)
- Points to sitemap

---

### 2. Structured Data (JSON-LD)

#### ❌ Homepage Missing Core Schema
**Required but absent**:
- `Organization` with `@id: #organization`
- `Manufacturer` with `@id: #manufacturer` (Taizhou Beno Biotech)
- `WebSite` with search action
- `BreadcrumbList`

**Current**: Only minimal `WebPage` schema

#### ✅ Schema Helpers Exist
- `organizationJsonLd()` — ✅ well-structured
- `websiteJsonLd()` — ✅ includes search action
- `breadcrumbJsonLd()` — ✅ correct
- `faqJsonLd()` — ✅ correct
- `articleJsonLd()` — ✅ correct
- `productJsonLd()` — ✅ comprehensive (but no live products page uses it)

#### ⚠️ Certificate Claims Need Verification
**In lib/seo.ts and app/[locale]/(site)/science/page.tsx**:
- GMP audit: "12–14 June 2026", expires "14 June 2027", cert ID "ACCB8AAA422_1"
- SQF Food Safety: audit "14 June 2026", expires "28 August 2027", SIN "105690"
- SQF Quality: same dates

**Action Required**: Verify these are real certificates or placeholders. Current year is 2026-08-05, so June 2026 audit is recent but validate authenticity.

---

### 3. Metadata & Keywords

#### ❌ No Documented Keyword Strategy
**Current title patterns**:
- Home: "Pet Supplement OEM, Private Label & Wholesale Manufacturer"
- /private-label: "Private Label Pet Supplements & OEM/ODM Manufacturing"
- /shop: "Wholesale Pet Supplements: 30-Product B2B Catalog"
- /science: "GMP Certified Pet Supplement Manufacturer | Quality & Certifications"
- /news: "Pet Supplement News & Insights for Brands"
- /contact: "Contact Us | EMBEPET — Pet Supplement Manufacturer"

**Issue**: Multiple pages target "pet supplement manufacturer" + "OEM" → keyword cannibalization

**Recommended Strategy**:
- Home: brand + manufacturing capability overview → "pet supplement manufacturer", "OEM ODM"
- /private-label: service-focused → "private label pet supplements", "pet supplement OEM service"
- /shop: product catalog → "wholesale pet supplements", "bulk pet supplements"
- /science: quality/factory → "GMP pet supplement factory", "SQF certified manufacturer"
- /factory: redirect to /science, no separate target
- /about: redirect to /science#company
- /contact: conversion page → "contact pet supplement manufacturer"

#### ✅ Meta Descriptions Are Unique
All reviewed pages have distinct, keyword-rich descriptions under 160 chars.

---

### 4. Internal Linking

#### ❌ Weak Cross-Linking
**Current state**:
- Homepage links: products, OEM/ODM, factory, quality, contact ✅
- /shop: no links to /private-label or /science
- /private-label: no links to /shop catalog or /science quality
- /science: no links to /shop or /private-label
- /news articles: no systematic product/service links

**Fix Required**: Add contextual internal links with descriptive anchor text

#### ⚠️ Redirects Without Metadata
**Pages that redirect**:
- `/factory` → `/science` (no metadata, no 301 in middleware)
- `/about` → `/factory#company` → ultimately `/science` (double redirect)
- `/wholesale` → `/shop#wholesale`
- `/products/[slug]` → `/shop#catalog`
- `/cart` → `/private-label#inquiry`
- `/checkout` → `/private-label#inquiry`

**Issue**: Redirects are client-side (Next.js `redirect()`), not 301. Google may not follow properly.

---

### 5. Multi-Language & Hreflang

#### ✅ Hreflang Implemented
- `buildMetadata()` outputs all locales + `x-default`
- Locales: `zh`, `en`, `es`, `ja`, `ko`, `ar` (from LOCALES)

#### ❌ Untranslated Locales Not Blocked
**Current**: All locales indexed by default  
**Issue**: If `/es`, `/ja`, `/ko`, `/ar` are English content clones → duplicate content penalty

**Fix Required**: Add `noIndex: true` for incomplete locales OR complete translations

---

### 6. GEO & AI Search (llms.txt)

#### ✅ llms.txt Structure is Correct
- Company identity clear: "EMBEPET supports global brand operations. Taizhou Beno Biotech Co., Ltd. is the manufacturing entity"
- Buyer info: MOQ, formats, quality evidence, catalog size
- Five primary pages listed
- Points to llms-full.txt for product index

#### ✅ llms-full.txt Includes Product Catalog
- Certificate details (GMP, SQF) with IDs and expiry dates
- 30-product catalog with species, format, category, reference pricing, MOQ
- Links to inquiry form

#### ⚠️ Certificate Dates (Again)
Same dates as in Schema — need verification. If placeholder, AI engines will index false claims.

---

### 7. Core Web Vitals & Performance

**Not directly audited (requires Lighthouse run)**, but recommendations:
- Homepage loads large images (`/images/b2b/beno-factory-exterior.png`)
- GSAP animations → check for layout shift
- 30 product cards in /shop → lazy load below fold
- Video player on homepage → defer until interaction

---

## Priority Fixes (Ordered by Impact)

### P0 — Critical (Blocks Indexing or Causes Canonical Issues)

1. **Set NEXT_PUBLIC_SITE_URL in production .env**
2. **Add missing pages to sitemap**: /shop, /private-label, /contact, /science, /learn, legal pages
3. **Add Organization + Manufacturer Schema to homepage**
4. **Verify certificate claims or replace with real data**

### P1 — High (SEO Effectiveness)

5. **Fix redirects**: Convert client-side redirects to proper 301 (middleware or route handlers)
6. **Add breadcrumb Schema to all service pages** (/shop, /private-label, /science, /contact)
7. **Implement keyword strategy**: Adjust titles/H1s to avoid cannibalization
8. **Add FAQ Schema to /shop, /private-label, /science**

### P2 — Medium (User Experience & Conversions)

9. **Strengthen internal linking**: Add contextual links between /shop ↔ /private-label ↔ /science
10. **Add "Request Quote" CTAs to /shop product cards**
11. **noindex incomplete locales** (es, ja, ko, ar if not translated)

### P3 — Low (Nice to Have)

12. **Add LocalBusiness Schema** (if physical address is public)
13. **Add VideoObject Schema** to factory tour video
14. **Optimize images**: Next.js Image already used, but consider WebP/AVIF
15. **Add "Related Articles" section to /news/[slug]**

---

## Keyword Strategy Proposal

| Page | Primary Keyword | Secondary Keywords | Search Intent |
|------|----------------|-------------------|---------------|
| `/` (Home) | pet supplement manufacturer | OEM ODM, wholesale, private label | Commercial investigation |
| `/private-label` | private label pet supplements | pet supplement OEM, ODM service, custom formula | Commercial comparison |
| `/shop` | wholesale pet supplements | bulk pet supplements, B2B catalog | Transactional (quote request) |
| `/science` | GMP pet supplement factory | SQF certified, quality control, factory audit | Trust/verification |
| `/contact` | contact pet supplement manufacturer | inquiry, quote request, factory visit | Transactional |
| `/news` | pet supplement OEM guide | dosage form comparison, GMP certification | Informational |

**Avoid**: Do not use "pet supplement manufacturer" in title of /private-label AND /science. Home owns the brand term; services own the long-tail.

---

## Multi-Language Indexing Strategy

| Locale | Status | Action |
|--------|--------|--------|
| `en` | ✅ Fully translated | Index normally |
| `zh` | ✅ Fully translated | Index normally |
| `es` | ⚠️ Check translation completeness | If incomplete: `noIndex: true` |
| `ja` | ⚠️ Check translation completeness | If incomplete: `noIndex: true` |
| `ko` | ⚠️ Check translation completeness | If incomplete: `noIndex: true` |
| `ar` | ⚠️ Check translation completeness | If incomplete: `noIndex: true` |

**Implementation**: Add locale check in `buildMetadata()`:
```typescript
const INCOMPLETE_LOCALES = ['es', 'ja', 'ko', 'ar'];
const noIndex = input.noIndex || INCOMPLETE_LOCALES.includes(locale);
```

---

## Next Steps

1. ✅ **You provide**: Confirm certificate authenticity and production SITE_URL
2. ⚠️ **I will fix**: All P0 and P1 issues in code
3. ⚠️ **I will verify**: Build passes, sitemap valid, Schema correct
4. ✅ **You approve**: Final review before considering commit

---

**End of Audit Report**
