# Errors

## [ERR-20260727-004] missing-image-reference

**Logged**: 2026-07-27T14:00:00+08:00
**Priority**: low
**Status**: resolved
**Area**: frontend

### Summary
An attempted visual review referenced `ai_science_lab.jpg`, which does not exist in the asset library.

### Error
```text
unable to locate image at public/images/buda/ai_science_lab.jpg
```

### Context
- Operation attempted: local image inspection
- The actual available lab assets are `ai_lab.jpg`, `ai_lab_research.jpg`, and `ai_science_qc.jpg`.

### Suggested Fix
Verify asset filenames with the existing inventory before visual inspection or page implementation.

### Metadata
- Reproducible: yes
- Related Files: public/images/buda

### Resolution
- **Resolved**: 2026-07-27T14:01:00+08:00
- **Notes**: Switched to verified existing asset names.

---

## [ERR-20260727-005] powershell-parenthesized-path

**Logged**: 2026-07-27T14:20:00+08:00
**Priority**: low
**Status**: resolved
**Area**: config

### Summary
PowerShell parsed the unquoted Next.js route folder `(site)` as an expression while listing files.

### Error
```text
site : The term 'site' is not recognized as the name of a cmdlet
```

### Context
- Command attempted: `rg --files app/[locale]/(site) ...`
- Environment: PowerShell on Windows

### Suggested Fix
Wrap route-group paths containing parentheses or brackets in single quotes.

### Metadata
- Reproducible: yes
- Related Files: app/[locale]/(site)

### Resolution
- **Resolved**: 2026-07-27T14:21:00+08:00
- **Notes**: All subsequent route-path arguments are quoted.

---

## [ERR-20260727-006] missing-catalog-helper

**Logged**: 2026-07-27T14:23:00+08:00
**Priority**: low
**Status**: resolved
**Area**: frontend

### Summary
A batch inspection attempted to read a guessed `lib/catalog.ts` file that is not part of this project.

### Error
```text
Cannot find path 'lib/catalog.ts' because it does not exist.
```

### Context
- Operation attempted: inspect shared catalog helpers and Prisma schema
- The product catalog is queried directly through `lib/db.ts`.

### Suggested Fix
Verify helper paths with `rg --files lib` before opening them.

### Metadata
- Reproducible: yes
- Related Files: lib, prisma/schema.prisma

### Resolution
- **Resolved**: 2026-07-27T14:24:00+08:00
- **Notes**: Continued using the verified database and formatting helpers.

---

## [ERR-20260727-007] next-turbopack-sandbox-spawn

**Logged**: 2026-07-27T14:50:00+08:00
**Priority**: medium
**Status**: resolved
**Area**: tests

### Summary
The Next.js production build could not spawn its pooled CSS worker inside the Windows sandbox.

### Error
```text
creating new process - spawning node pooled process - Access denied (os error 5)
```

### Context
- Operation attempted: Next.js 16 production build with Turbopack
- The failure occurred while processing the Fraunces font CSS, before application type checking.

### Suggested Fix
Rerun the same build command with the required process-spawn permission.

### Metadata
- Reproducible: yes
- Related Files: app/globals.css, node_modules/@fontsource-variable/fraunces

### Resolution
- **Resolved**: 2026-07-27T14:51:00+08:00
- **Notes**: Retried the build outside the restricted process sandbox.

---

## [ERR-20260727-008] git-status-non-repository

**Logged**: 2026-07-27T15:05:00+08:00
**Priority**: low
**Status**: resolved
**Area**: config

### Summary
The website subfolder is not inside an initialized Git repository, so a status check was unavailable.

### Error
```text
fatal: not a git repository (or any of the parent directories): .git
```

### Context
- Operation attempted: inspect the final changed-file list with Git
- Project folder: `embepet_website_final/web_site_new`

### Suggested Fix
Use direct file and build verification unless the user later initializes version control.

### Metadata
- Reproducible: yes
- Related Files: embepet_website_final/web_site_new

### Resolution
- **Resolved**: 2026-07-27T15:06:00+08:00
- **Notes**: Continued with filesystem inventory and successful production-build output.

---

## [ERR-20260727-009] in-app-browser-bootstrap-timeout

**Logged**: 2026-07-27T15:15:00+08:00
**Priority**: low
**Status**: in_progress
**Area**: tests

### Summary
The in-app browser runtime did not finish connecting within the default 30-second window.

### Error
```text
js execution timed out; kernel reset
```

### Context
- Operation attempted: connect the in-app browser to the locally running production site
- Local site health check returned HTTP 200 before browser setup.

### Suggested Fix
Retry browser runtime setup with a longer timeout; otherwise use route and asset response checks.

### Metadata
- Reproducible: unknown
- Related Files: app/[locale]/(site)

---

## [ERR-20260727-010] root-layout-path-assumption

**Logged**: 2026-07-27T15:18:00+08:00
**Priority**: low
**Status**: resolved
**Area**: frontend

### Summary
The metadata layout was assumed to be `app/layout.tsx`, but this localized project places it at `app/[locale]/layout.tsx`.

### Error
```text
Cannot find path 'app/layout.tsx' because it does not exist.
```

### Context
- Operation attempted: inspect the remaining EMBEPET title suffix found during browser verification

### Suggested Fix
List layout files before opening the metadata owner in localized App Router projects.

### Metadata
- Reproducible: yes
- Related Files: app/[locale]/layout.tsx

### Resolution
- **Resolved**: 2026-07-27T15:19:00+08:00
- **Notes**: Located and updated the localized root metadata layout.

---

## [ERR-20260727-011] image-generation-network

**Logged**: 2026-07-27T15:40:00+08:00
**Priority**: medium
**Status**: in_progress
**Area**: frontend

### Summary
The second B2B image generation request failed due to a transient network error.

### Error
```text
image generation failed: network error
```

### Context
- Operation attempted: generate a raw-material quality-control image for the five-page B2B site
- The first product-portfolio image completed successfully.

### Suggested Fix
Retry the built-in generation once; if unavailable, keep the successful asset and use vetted existing project images.

### Metadata
- Reproducible: unknown
- Related Files: public/images/b2b

---

## [ERR-20260727-012] npm-not-on-path

**Logged**: 2026-07-27T17:50:00+08:00
**Priority**: low
**Status**: resolved
**Area**: tooling

### Summary
The project shell did not expose `npm` on PATH during the final verification run.

### Error
```text
npm : The term 'npm' is not recognized as the name of a cmdlet
```

### Context
- Operation attempted: run the project typecheck before the production build
- The Codex workspace provides a bundled Node runtime at an explicit path.

### Suggested Fix
Use the bundled Node executable directly with the local TypeScript and Next.js entry points.

### Metadata
- Reproducible: yes
- Related Files: package.json, node_modules/typescript

### Resolution
- **Resolved**: 2026-07-27T17:51:00+08:00
- **Notes**: Switched verification to the bundled Node executable and local project binaries.

---

## [ERR-20260727-013] next-build-log-lock

**Logged**: 2026-07-27T17:55:00+08:00
**Priority**: low
**Status**: in_progress
**Area**: tooling

### Summary
The production build could not clean `.next` because the active local preview server held its error log open.

### Error
```text
EBUSY: resource busy or locked, unlink '.next\b2b-server-error.log'
```

### Context
- Operation attempted: create the final production build while the earlier preview server was still running
- The locked file is a local preview log, not project source or user data.

### Suggested Fix
Stop the known local preview process, rerun the build, then start a fresh preview from the new output.

### Metadata
- Reproducible: yes
- Related Files: .next/b2b-server-error.log

---

## [ERR-20260728-014] browser-networkidle-unsupported

**Logged**: 2026-07-28T00:05:00+08:00
**Priority**: low
**Status**: resolved
**Area**: tests

### Summary
The in-app browser backend rejected the documented `networkidle` load-state option.

### Error
```text
playwright_wait_for_load_state does not support networkidle
```

### Context
- Operation attempted: wait for the local production preview before visual verification

### Suggested Fix
Use the supported `load` state and then verify the rendered DOM directly.

### Metadata
- Reproducible: yes
- Related Files: local preview

### Resolution
- **Resolved**: 2026-07-28T00:05:00+08:00
- **Notes**: Switched to the supported load state and DOM-based readiness checks.

---

## [ERR-20260728-015] mobile-header-overflow

**Logged**: 2026-07-28T00:12:00+08:00
**Priority**: medium
**Status**: resolved
**Area**: frontend

### Summary
The 390px responsive check found a 38px horizontal overflow in the site header.

### Error
```text
viewport: 390px; document scrollWidth: 428px
```

### Context
- The quote link combined Tailwind's `hidden` class with the later-declared `.b2b-btn-primary { display: inline-flex }`.
- The component class overrode the responsive visibility utility, leaving the desktop CTA visible on mobile.

### Suggested Fix
Apply responsive visibility to a neutral wrapper and keep the button component class on the inner link.

### Metadata
- Reproducible: yes
- Related Files: components/site/Header.tsx, app/globals.css

### Resolution
- **Resolved**: 2026-07-28T00:13:00+08:00
- **Notes**: Wrapped the CTA in `hidden sm:block` and prevented menu-button shrinkage.

---

## [ERR-20260728-016] published-locale-type-narrowing

**Logged**: 2026-07-28T00:23:00+08:00
**Priority**: low
**Status**: resolved
**Area**: seo

### Summary
Reducing the published locale array to English also narrowed the shared TypeScript `Locale` type, which conflicted with existing translation dictionaries.

### Error
```text
Object literal may only specify known properties, and 'es' does not exist in type 'Record<"en", ...>'
```

### Context
- The project retains draft translations internally, but only English should be statically published and indexed.

### Suggested Fix
Separate the complete locale type from the narrower list of published locales.

### Metadata
- Reproducible: yes
- Related Files: lib/i18n/locales.ts, lib/i18n/index.ts

### Resolution
- **Resolved**: 2026-07-28T00:24:00+08:00
- **Notes**: Added `ALL_LOCALES` for type coverage while keeping `LOCALES` English-only for routes, sitemap and hreflang.

---

## [ERR-20260728-017] certificate-pdf-locale-redirect

**Logged**: 2026-07-28T00:30:00+08:00
**Priority**: high
**Status**: resolved
**Area**: frontend

### Summary
Direct certificate PDF requests were treated as localized page routes and received a 308 redirect.

### Error
```text
GET /certificates/taizhou-beno-gmp-2026.pdf -> 308
GET /certificates/taizhou-beno-sqf-2026.pdf -> 308
```

### Context
- The proxy's public-file extension allowlist included images and text assets but omitted PDF.
- Certificate links must open the original documents directly for procurement review.

### Suggested Fix
Add `pdf` to the public-file pattern so certificate documents bypass locale routing.

### Metadata
- Reproducible: yes
- Related Files: proxy.ts, public/certificates

### Resolution
- **Resolved**: 2026-07-28T00:31:00+08:00
- **Notes**: Added PDF to the static-file allowlist; final checks verify both original certificate files return HTTP 200.

---

## [ERR-20260728-018] generated-image-copy-launch-canceled

**Logged**: 2026-07-28T00:42:00+08:00
**Priority**: low
**Status**: in_progress
**Area**: tooling

### Summary
The first attempt to copy a newly generated image into the project was canceled while the shell helper launched.

### Error
```text
orchestrator_helper_launch_canceled: ShellExecuteExW failed to launch setup helper: 1223
```

### Context
- Operation attempted: copy a generated wholesale-buyer image into `public/images/b2b`
- The source image remains intact in the generated-images directory.

### Suggested Fix
Retry the same non-destructive copy operation after the helper is available.

### Metadata
- Reproducible: unknown
- Related Files: public/images/b2b

---

## [ERR-20260728-019] image-generation-network-retry

**Logged**: 2026-07-28T00:47:00+08:00
**Priority**: medium
**Status**: in_progress
**Area**: frontend

### Summary
The warehouse/export image generation request failed after a long-running network request.

### Error
```text
image generation failed: network error
```

### Context
- Operation attempted: create a unique B2B warehouse image for the wholesale page
- The preceding buyer-review and transparent-logo generations completed successfully.

### Suggested Fix
Retry once with the built-in image generator; if it remains unavailable, use another already-generated unique project asset for that single placement and do not duplicate it.

### Metadata
- Reproducible: unknown
- Related Files: public/images/b2b
