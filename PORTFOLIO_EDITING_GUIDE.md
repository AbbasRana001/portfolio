# Portfolio Editing Guide

This guide explains how to update the portfolio without changing its visual system or component code. Most routine edits happen in `src/content/` and `public/`.

## Safe editing workflow

1. Edit the relevant content file or asset described below.
2. Start the local site with `npm.cmd run dev`.
3. Check the changed page at desktop and mobile widths.
4. Before publishing, run:

   ```powershell
   npm run lint
   npm run typecheck
   npm run build
   git diff --check
   ```

5. Commit and push the verified change. A successful deployment of the `main` branch in Vercel publishes the change.

Use PowerShell commands from the repository root, `D:\Study\Study\Portfolio`.

## Quick map of editable content

| What you want to change | Canonical location |
| --- | --- |
| Name, biography, Hero text, email, social links, resume URLs | `src/content/profile.ts` |
| Projects and project visibility | `src/content/projects.ts` |
| Project cover image files | `public/images/projects/<project-slug>/cover.png` |
| Experience | `src/content/experience.ts` |
| Education | `src/content/education.ts` |
| Lab Notes | `src/content/research.ts` |
| Certificates | `src/content/certifications.ts` and `public/certifications/` |
| Navigation labels and conditional links | `src/content/navigation.ts` |
| Site title, descriptions, URL and social image metadata | `src/content/site.ts` |
| Open Graph image | `public/images/og/portfolio-og.png` |
| Browser icon/favicon | `src/app/icon.png` |
| Resume PDF | `public/documents/Abbas-Rana-Resume.pdf` |

## Projects

Project records live in `src/content/projects.ts`. Each record is the source of truth for its title, category, summaries, technologies, GitHub link, display order, and visibility.

### Add a project

1. Copy an existing project object in `src/content/projects.ts`.
2. Replace every placeholder with truthful project information.
3. Give it a unique lowercase, hyphen-separated `slug`.
4. Set its `category` to one of the supported categories:
   - `AI / ML`
   - `Data Science`
   - `Data Analytics`
   - `Systems`
5. Add its cover at `public/images/projects/<project-slug>/cover.png`.
6. Set `visible: true` and `status: "published"` when it is ready to appear.

Use the existing project objects as the field-level template. Do not add made-up outcomes, metrics, tools, or links.

### Remove or hide a project

To hide a project while retaining its data, set `visible: false`. To remove it permanently, remove its project object and, when no longer needed, its matching folder in `public/images/projects/`.

### Reorder projects

Projects are sorted by the numeric `order` field. Use sequential values such as `1`, `2`, `3`. Lower numbers appear first.

### Featured, homepage, archive, and filters

- `featured: true` identifies the featured project treatment. Keep this intentional; ordinarily only one project should be featured.
- `showOnHome: true` includes a published visible project in the homepage project area.
- All visible, published projects remain available on `/projects`.
- Category filters are derived from project data. A project placed in a supported category automatically participates in that filter.
- The homepage project limit and tag limit are configured in `projectsConfig` in `src/content/projects.ts`. Do not change them unless the intended editorial behavior changes.

The project components derive the cover from the slug and adapt automatically for an archive, filtered category, or a single matching result. Do not hard-code image paths in a project record or a component.

## Project cover images

Every project has exactly one cover image. Its required path is:

```text
public/images/projects/<project-slug>/cover.png
```

For example, a project with `slug: "example-project"` must use:

```text
public/images/projects/example-project/cover.png
```

The website resolves it as:

```text
/images/projects/<project-slug>/cover.png
```

The slug, folder name, and filename must match exactly. Keep `cover.png` lowercase. Although Windows is forgiving about casing, deployment environments may not be.

Prepare covers in a 16:9 composition. The site uses a 16:9 frame with `object-fit: cover`, so important content should not sit too close to an edge.

To replace a cover, overwrite that project's existing `cover.png`, then rebuild or redeploy. No project-data edit is required.

### Reusable cover-image prompt

Adapt this prompt to the real project, without adding claims that are not supported by the project:

> Create a refined editorial portfolio cover for a real AI, machine learning, data science, or software project about **[project subject]**. Use a warm ivory or light paper background, scientific/analytical visual language, near-black details, a restrained cobalt accent, and a small amount of restrained orange. Compose at 16:9. Keep it calm, intelligent, and legible as an image-only visual plate. Do not include a title, UI mockup, fake metrics, logos, dashboards, dense text, dark cyberpunk aesthetics, neon, or fabricated results.

## Profile and Hero

Edit `src/content/profile.ts` for identity and introductory content. Important fields include:

| Field | Purpose |
| --- | --- |
| `name` | Personal name used by content where applicable |
| `initials` | Current displayed navigation wordmark value; it contains `Muhammad Abbas Rana` |
| `eyebrow` | Hero metadata line |
| `headline` | Main Hero heading |
| `shortBio` and `biography` | Introductory and Profile copy |
| `email` | Contact email address |
| `socialLinks` | GitHub and LinkedIn destinations and display settings |
| `resumeUrl` | Public PDF path |
| `resumeViewerUrl` | Dedicated Resume route, currently `/resume` |

Keep personal facts in this file rather than placing them directly in components.

## Resume

The canonical resume PDF is:

```text
public/documents/Abbas-Rana-Resume.pdf
```

Replace that file with the updated PDF while keeping the same name and path. The `/resume` route displays it in the browser's native PDF viewer. The native viewer toolbar provides download behavior; there is intentionally no separate custom download button.

The viewer loads only on `/resume`. Do not move PDF data into the homepage or duplicate the file request.

## Experience

Experience entries are centralized in `src/content/experience.ts`.

Each entry uses these fields:

| Field | Purpose |
| --- | --- |
| `id` | Stable unique identifier |
| `role` | Position title |
| `organization` | Employer or organization |
| `period` | Displayed date range |
| `workArrangement` | Optional arrangement, such as remote or on-site |
| `descriptionBullets` | Array of truthful responsibility or outcome bullets |
| `link` | Optional relevant destination |
| `visible` | Set to `false` to hide an entry |

Experience is rendered in the order of the array. To reorder it, move the whole object up or down in `src/content/experience.ts`. Its chronology height, dividers, and mobile layout are content-driven; adding or removing records needs no component change.

## Education

Education records live in `src/content/education.ts`.

Useful fields include `degree`, `institution`, `campus`, `startYear`, `endYear`, `displayPeriod`, `cgpa`, `focusAreas`, `relevantCoursework`, and `visible`. Update the `cgpa` field to change the displayed CGPA. Keep coursework and academic details factual.

## Lab Notes

Lab Notes live in `src/content/research.ts`. Each note supports:

| Field | Purpose |
| --- | --- |
| `id` | Stable unique identifier |
| `identifier` | Short note identifier |
| `title` | Note title |
| `type` | One of the supported research-note types |
| `status` | Current status |
| `shortDescription` | Concise explanation |
| `topics` | Topic list |
| `link` and `date` | Optional supporting details |

Notes display in array order. Add, remove, or reorder objects directly in this file; the section grows and contracts naturally.

Supported types are `Research Interest`, `Current Study`, `Experiment`, `Paper`, `Coursework`, and `Preprint`. Supported statuses are `Exploring`, `Studying`, `Building`, `Writing`, and `Published`.

## Certificates

Certificate records are in `src/content/certifications.ts`; preview images are in `public/certifications/`.

Each record has an `id`, `title`, `issuer`, `issueDate`, optional `credentialUrl` and `credentialId`, image details (`src`, `alt`, `width`, `height`), optional `certificateFile`, `order`, and `visible`.

Use a public image path such as:

```text
/certifications/<certificate-file>.png
```

with its physical asset at:

```text
public/certifications/<certificate-file>.png
```

Provide accurate image dimensions and descriptive alt text. Certificate records sort by `order`; `visible: false` hides a record. The existing presentation automatically retains its desktop index/preview behavior and mobile stacked layout. Do not alter that layout just to add a certificate.

## Contact information

Contact destinations are derived from `src/content/profile.ts`:

- Set the email in `profile.email`. It is shown as a readable, copyable `mailto:` address.
- Add or update social destinations in `profile.socialLinks`.
- Use `openInNewTab: true` for external social links that should open a new tab.
- Keep the resume destination tied to `resumeViewerUrl`.

Do not hard-code a contact address or URL into the Contact component.

## Navigation and brand

Navigation data is in `src/content/navigation.ts`. Some navigation links appear only when their content exists: Experience appears when a visible experience entry exists, Certificates appears when a visible certificate exists, and Contact appears when contact information is available.

The brand is currently `Muhammad Abbas Rana`. It is a semantic link to:

```text
/#introduction
```

The destination anchor is the Introduction/Hero section in `src/components/hero/hero.tsx`, using `id="introduction"`. Keep that anchor intact. The brand should remain a home link, not a separate navigation destination.

The Resume navigation target comes from `profile.resumeViewerUrl`; keep it pointed to `/resume` unless the route architecture intentionally changes.

## Design tokens and global styles

The portfolio's shared color tokens live in `src/app/tokens.css`. Global base styles, typography behavior, focus treatment, responsive rules, and reduced-motion handling live in `src/app/globals.css`. Font definitions are in `src/lib/fonts.ts`.

Use these files only for carefully considered system-wide design changes. Reuse existing tokens rather than introducing close-but-different colors. In particular, preserve the warm background, near-black foreground, cobalt accent, restrained orange, muted text, and neutral rule color as a coherent system.

Routine content edits should not require touching these files.

## SEO, metadata, Open Graph, and favicon

Central site metadata is configured in:

```text
src/content/site.ts
```

Use this file for the site name, title, description, keywords, production URL, and Open Graph image settings. Page-specific metadata is supplied by the route pages for `/`, `/projects`, and `/resume`.

The Open Graph image is:

```text
public/images/og/portfolio-og.png
```

Its current intended size is 1200 × 630 pixels. The same image is used for Open Graph and social-card metadata when a production site URL is configured.

The favicon source is:

```text
src/app/icon.png
```

Next.js serves this App Router icon automatically. Do not add a duplicate competing favicon unless the platform creates a specific requirement.

Set the real production URL in Vercel as the environment variable:

```text
NEXT_PUBLIC_SITE_URL
```

Set it in Vercel's **Production** environment to the real `https://...` site URL, then redeploy. The repository's `.env.example` documents the variable but deliberately does not contain a real domain. Canonical URLs, Open Graph URLs, robots, and the sitemap become fully populated when this value is a valid HTTPS URL.

`src/app/robots.ts` and `src/app/sitemap.ts` generate the search-engine files. Public routes are `/`, `/projects`, and `/resume`.

## Deploying from Windows PowerShell

From `D:\Study\Study\Portfolio`:

```powershell
npm.cmd run dev
```

Use that command for local development. Before deployment, run:

```powershell
npm run lint
npm run typecheck
npm run build
git diff --check
```

Then review changes and publish them:

```powershell
git status
git add <the-files-you-intend-to-publish>
git commit -m "Describe the portfolio update"
git push
```

Confirm that the Vercel deployment for the intended `main` commit succeeds. If it does not, inspect the Vercel build log before assuming the live site has updated.

## Example: add a project from start to finish

1. Prepare only real project copy, tools, dates, links, and outcomes.
2. Choose a unique slug, such as `<project-slug>`.
3. Add a truthful project object to `src/content/projects.ts`, including a supported category, `order`, visibility, publication status, and homepage/featured choices.
4. Create the required asset path:

   ```text
   public/images/projects/<project-slug>/cover.png
   ```

5. Use a 16:9 cover that follows the editorial prompt above.
6. Run the local site and verify the project on the homepage, `/projects`, and its category filter.
7. Run lint, typecheck, build, and `git diff --check`.
8. Commit, push, and confirm the matching Vercel production deployment.

No component path edit is required: the slug automatically resolves to `/images/projects/<project-slug>/cover.png`.

## Implementation files not to edit for ordinary content updates

Avoid changing these for routine portfolio maintenance:

- `src/components/` — page presentation and interactions
- `src/hooks/` — interaction helpers
- `src/lib/` — shared utilities and font setup
- `src/types/portfolio.ts` — data contracts
- `src/app/api/resume-data/route.ts` — Resume PDF data endpoint
- `src/app/robots.ts` and `src/app/sitemap.ts` — search-engine route generation
- `next.config.ts` — Next.js configuration
- `src/app/globals.css` and `src/app/tokens.css` — shared visual system

If a routine content request seems to require editing one of these, first check whether an existing content field or public asset is the intended update point.

## Troubleshooting

### A project cover does not update

Confirm the physical file is exactly `public/images/projects/<project-slug>/cover.png` and that the folder matches the `slug` exactly, including lowercase casing. Restart the development server or run a production build after replacing it. If local development still shows an old asset, stop the server, remove only the generated `.next` build cache, restart with `npm.cmd run dev`, and recheck. Do not change the slug-to-cover convention to work around a cache.

### A project is missing from a filter or page

Check that it has `visible: true`, `status: "published"`, a supported exact category, and (for the homepage) `showOnHome: true`. Also check its `order` value and the homepage project limit.

### A certificate is missing or shows the wrong preview

Verify `visible`, `order`, the public image `src`, the physical file under `public/certifications/`, and the declared image dimensions. Check the credential URL separately from the preview image path.

### The Resume does not appear

Confirm `public/documents/Abbas-Rana-Resume.pdf` exists and that `resumeUrl` remains `/documents/Abbas-Rana-Resume.pdf`. Keep the `/resume` route and its native PDF viewer architecture intact.

### Favicon or Open Graph image looks stale

Confirm the exact paths `src/app/icon.png` and `public/images/og/portfolio-og.png`, rebuild, and redeploy. Browsers and social networks cache these assets aggressively; test favicon changes in a fresh browser session and use the relevant social platform's preview/debugger after deployment. Do not add arbitrary cache-busting paths to metadata.

### Vercel still shows an old version

Compare the commit displayed by Vercel with the commit you pushed to `main`. A successful deployment of a different or older commit will not contain your change. Also verify production environment variables, especially `NEXT_PUBLIC_SITE_URL`, then redeploy the intended commit.

### A browser console hydration warning appears

First test with browser extensions disabled or in a clean profile. Extensions can inject markup before React hydrates. Do not add `suppressHydrationWarning` merely to hide an extension-caused warning; investigate actual server/client markup differences if it persists in a clean browser.
