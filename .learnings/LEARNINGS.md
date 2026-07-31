# Learnings

## [LRN-20260727-001] correction

**Logged**: 2026-07-27T15:25:00+08:00
**Priority**: high
**Status**: in_progress
**Area**: frontend

### Summary
The B2B site should have exactly five primary pages: the homepage plus four focused buyer pages.

### Details
The initial B2B structure exposed too many separate navigation destinations. Wholesale should be
merged into the product portfolio, company information should be integrated into the factory or
quality story, and the inquiry form should live inside the OEM/ODM page rather than occupying a
separate primary page.

### Suggested Action
Keep the main navigation to Products, OEM / ODM, Manufacturing and Quality. Redirect legacy public
routes to the closest section and only publish claims supported by the project data or supplied
certificates.

### Metadata
- Source: user_feedback
- Related Files: components/site/Header.tsx, app/[locale]/(site)
- Tags: information-architecture, b2b, content-trust

### Resolution
- **Resolved**: 2026-07-28T00:20:00+08:00
- **Notes**: Main navigation now exposes only Home, Products, OEM/ODM, Manufacturing and Quality; legacy commercial pages redirect into those five destinations.

---

## [LRN-20260728-002] best_practice

**Logged**: 2026-07-28T00:20:00+08:00
**Priority**: high
**Status**: resolved
**Area**: seo

### Summary
Do not publish hreflang entries for untranslated copies of the same English B2B content.

### Details
The existing locale structure generated English content under five language paths. Indexing those
paths would create duplicate pages and misleading language targeting. Until professional
translations exist, the truthful SEO configuration is English-only.

### Suggested Action
Publish only the English locale in static parameters, sitemap alternates and visible language state.
Add languages back only when each of the five primary pages has reviewed translations.

### Metadata
- Source: optimization
- Related Files: lib/i18n/locales.ts, app/sitemap.ts, components/site/Header.tsx
- Tags: hreflang, duplicate-content, international-seo

### Resolution
- **Resolved**: 2026-07-28T00:20:00+08:00
- **Notes**: Reduced published locales to English and removed the non-functional language switcher from the primary header.
