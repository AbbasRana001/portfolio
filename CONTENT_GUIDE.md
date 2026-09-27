# Editing portfolio content

Stages 1–5 provide the data architecture, design primitives, responsive navigation,
Hero, Projects and About. The other portfolio sections are not built yet. The Hero uses explicitly
marked placeholder copy. No personal facts have been assumed.

## Where information lives

| File in `src/content/` | What to edit |
| --- | --- |
| `profile.ts` | Name, initials, headline, bio, email, location, social links, resume, portrait, current learning, quick facts, statistics and contact copy |
| `hero.ts` | Hero CTA labels, unavailable-state explanations, social navigation labels and visualization captions |
| `projects.ts` | Projects, tags, images, results, optional metrics and case studies |
| `skills.ts` | Ordered skill groups and their skills |
| `experience.ts` | Roles, organizations, periods, work arrangements and structured description points |
| `education.ts` | Degree, institution, campus, period, CGPA and optional focus or coursework |
| `research.ts` | Lab Notes: interests, studies, experiments, papers, coursework and preprints |
| `certifications.ts` | Earned credentials, issuer, date, verification link and image |
| `navigation.ts` | Navigation labels, section anchors, availability and menu UI copy |
| `workflow.ts` | Explanations for the future ML lifecycle section |
| `site.ts` | Site metadata, production URL and feature flags |

Shared interfaces live in `src/types/portfolio.ts`. Content files import these types
using `@/`, which maps to `src/`. Components import content; content never imports
components. Keep personal facts out of JSX.

## Placeholders and missing information

Search for `TODO` to find unfinished content. Projects now contains three published
owner-supplied projects; the draft and layout placeholders have been removed.
Other fact collections are empty instead of holding
invented experience, qualifications or statistics. Empty skill categories indicate
organization only, not claimed skills.

Use `[]` for missing collections, `null` for explicitly nullable profile links, and
omit optional fields. Do not use `#`, fake contact addresses, invented numbers or
asset paths for files that do not exist. Future components must omit missing links,
empty groups and sections, and use a visual fallback when a project has no image.

## Personal details and resume

Replace TODO strings in `profile.ts` with accurate information. Biography is an array
of paragraphs. Add a social link with a `label`, `platform` (`github`, `linkedin`, or
`other`) and real HTTPS `url`. Email is a plain address without `mailto:`.

Place your PDF at `public/resume/resume.pdf`, then set `resumeUrl` to
`"/resume/resume.pdf"`. Keep it `null` until the file exists. Assets in `public/` are
addressed from `/`, never with `/public/` in their URL.

The Contact chapter also reads `contactVisible`, `contactHeading`,
`contactDescription` and optional `contactAvailability` from `profile.ts`. It reuses
the same `email`, GitHub/LinkedIn `socialLinks`, and `resumeUrl` values; do not add
those destinations in a second content file. Missing destinations remain hidden.

## Personalize the Hero

Edit `eyebrow`, `headline` and `shortBio` in `profile.ts`. A `\n` in `headline`
creates a preferred line break; each line still wraps naturally on narrow screens.
The default headline is sample copy, not a claim of completed work. Keep
`heroIsPlaceholder: true` until both headline and introduction accurately describe
you; it displays a visible placeholder badge. Then set it to `false`.

The Hero uses the same Projects availability as navigation. The Projects section now
exists with `id="projects"`, and its navigation item is enabled in `navigation.ts`.
The CTA is otherwise a disabled button with a visible coming-soon explanation.
Resume uses `profile.resumeUrl` and follows the same missing-file rule described
above. No fake hrefs or files are generated.

Add real GitHub and LinkedIn entries to `profile.socialLinks`; those labels and URLs
are rendered as text links. Set `profile.email` to enable Email. Missing social values
produce no link or empty social row. `githubUsername` alone does not create a link.
Links use the same tab, so there is no unexpected new-window behavior.

Edit the numbered introduction label and analytical illustration captions in
`hero.ts`. The plotted marks are illustrative geometry, not a measured dataset.
`DataStudy` is a server-rendered SVG with a brief CSS reveal and a static
reduced-motion presentation. No metrics are inferred from the illustration.

## Add a project

Edit an existing object in `projects.ts`, or add an object inside the array:

```ts
{
  slug: "todo-replace-with-unique-slug",
  title: "TODO: Real project title",
  shortDescription: "TODO: One-sentence summary",
  description: "TODO: What you built and your contribution",
  category: "Data Science",
  tags: [],
  featured: false,
  status: "draft",
}
```

Use a unique lowercase hyphenated slug. Choose a category from the `ProjectCategory`
union. Add only technologies you used. Set `featured: true` for projects you want to
highlight. Change `status` to `"published"` only when the content is factual and ready.
Homepage lists and filters exclude drafts. Future sitemap entries and routes must too.

Mexico Real Estate Price Analysis is featured; Call Center Performance Analysis and
FastAPI Task Manager appear in the smaller grid. Edit their summaries, tags, category,
GitHub URL and featured flag directly in `projects.ts`. The only supplied metric is
the national size/price Pearson correlation (approximately 0.46), not model accuracy.
The projects currently reference generated conceptual covers through their `cover`
objects. These assets are preserved; replace `src`, `alt`, `width` and `height` with
real screenshots or charts when available. The original Mexico SVG is also retained
in its asset folder. No live demos or case-study links have been supplied.

`projectsConfig.showPlaceholders` is now `false`. Optional future entries with
`status: "placeholder"` remain hidden unless explicitly enabled for layout review.
Never publish TODO copy. If no entries are visible, the section shows an honest
empty state and hides filters. Categories are derived only from visible entries, so
draft-only categories never appear. The All filter resets the selection. UI headings,
labels, fallback messages and empty-state text live in `projectsCopy` in the same file.

Filters are native toggle buttons: use Tab to reach a category and Enter or Space to
select it. The visible count is announced politely. Results size naturally to the
selected category, so selecting a shorter category does not leave reserved blank
space before Profile. Without JavaScript, all visible entries remain readable. The
filter fade is disabled for reduced motion.

The All view uses the featured/compact editorial hierarchy. Selecting any category
uses one consistent result-card presentation, regardless of the stored `featured`
flag. Category results form a left-aligned list capped at 60rem, with media beside
content from 768px and stacked below that width. This does not change project data.

Use `AI / ML`, `Data Science`, `Data Analytics` or `Systems` for `category`. Use
`Systems` for supporting engineering projects. Set `featured: true` for the larger
editorial layout; featured entries alternate media sides on desktop in array order.
Other entries form a smaller responsive grid. No technology tags are invented: add
actual tool names to `tags`. Problem, approach and outcome stay in the content data
for future detail pages; they are not rendered on homepage cards.

Use optional `homepageSummary` for a concise one-sentence card description; without
it, the card uses `shortDescription`. Set `homepageTags` to a selected subset of the
project's real technologies. Cards show at most `projectsConfig.homepageTagLimit`
tags (currently four), falling back to the first entries in `tags` when no selection
exists. The full tag list and longer descriptions remain available for future pages.
Cards show only the first nonempty metric, including its evaluation context; put the
most useful verified metric first. Missing metrics render nothing. `caseStudyUrl`
continues to enable a View Case Study link only when a real destination is supplied.

Add `github` and `liveDemo` only with real HTTPS URLs. Add `caseStudyUrl` only when an
actual local page or external case study exists. No route is generated from the slug.
Missing links produce no button. Links stay in the same tab.

To add metrics, set `metrics` to an array of `{ label, value, context? }`. Use a measured
value and explain the test split, evaluation conditions or baseline in `context` where
applicable. There are no default numbers. Empty metric arrays render nothing.

Optional fields include `problem`, `approach`, `outcome`, `github`, `liveDemo`, `cover`,
`metrics`, `caseStudyUrl` and `caseStudy`. Metrics use `label`, `value` and optional `context`; include
evaluation conditions when possible. Leave metrics empty when you have no measured
results. Case studies support dataset, exploration, methodology, evaluation, results,
challenges, improvements, deployment, lessons learned and images. None is required
for a simple project. Structured `caseStudy` data is reserved for future detail pages;
it does not create a link or a route. Detail pages are not active yet.

## Images

Place project images in `public/images/projects/<slug>/`, for example `cover.webp`.
An image object has `src`, descriptive `alt`, and actual pixel `width` and `height`.
Use `/images/projects/<slug>/cover.webp` as the path. Other folders are reserved for
profile, certification and Open Graph images. No fake photographs or chart data ship
with this foundation.

Assign that image object to the project's `cover`. Use an actual screenshot, diagram,
dashboard or visualization and describe what it shows in `alt`. Next.js Image reserves
its dimensions, loads lazily and fits the full image without cropping evidence. When
`cover` is omitted, a simple schematic labeled as a visual placeholder appears. It is
not a chart or project evidence. Do not reference a file until it exists.

## Skills, experience, education and credentials

### About and retained skills data

Edit `profile.biography` in `src/content/profile.ts` for the About narrative. Keep it
to two short paragraphs. The current draft is based on the supplied project history;
review it in your own voice, then set `aboutIsPlaceholder: false` to remove the draft
badge. This is separate from the Hero's placeholder flag. `aboutCopy` in the same
file controls the section heading, direction labels and supporting copy. Direction
labels describe goals, not proficiency. `currentlyLearning` and `quickFacts` are
optional and render only when supplied; do not add unverified details.

`src/content/skills.ts` is retained for future project metadata, Lab Notes or other
portfolio content. It has no homepage presentation or navigation entry. Each group
has a stable `id`, display `index`, `title`, `emphasis` (`primary` or `supporting`),
short `description`, `process` stages, and a `skills` array. Each skill has `name`,
an `evidence` state (`demonstrated` or `developing`), and optional `description`.
Add `developing` only for a current owner-declared learning area.

About follows Projects. Skills data remains centralized but is not currently rendered.

- In `skills.ts`, add `{ name: "TODO: Actual skill", evidence: "developing", description: "TODO: Optional context" }`
  to the appropriate group's `skills` array, choosing `demonstrated` only for verified
  project work. Remove the optional description if unused. There are no percentage ratings.
- In `experience.ts`, add `id`, `role`, `organization`, `period`,
  `descriptionBullets` and `visible`. `workArrangement` and `link` are optional.
  Keep description points as separate strings so they remain structured in the
  editorial list. Set `visible: false` to retain an entry in content without
  rendering it or enabling the Experience navigation target.
- In `education.ts`, add `id`, `degree`, `institution`, `startYear`,
  `displayPeriod` and `visible`. Campus, end year, CGPA, focus areas and relevant
  coursework are optional. Set `visible: false` to retain a record without rendering it.
- In `certifications.ts`, add `id`, `name`, `issuer` and `date`. Add an actual
  `credentialUrl` and image only when available.
- In `research.ts`, edit `labNotes` to add, remove or update a Lab Note. Each note
  has an `id`, displayed `identifier`, `title`, `type`, `status`, `shortDescription`
  and `topics`; `link` and `date` are optional. Use a concise unique identifier such
  as `ML.01`; it is presented directly, so no note is specially handled in the UI.
  Describe open questions as directions, without
  implying results or completed work. An interest is not a publication: choose the
  correct `type` and status. Do not add a Paper or Preprint until it actually exists.

Use stable unique IDs. Keep periods factual and human-readable. Education years are
stored separately from the display period. Keep optional lists empty when appropriate. TypeScript checks
structure, but dates, factual accuracy, working links and unique slugs still need
your review.

## Site settings and future feature flags

In `site.ts`, replace the foundation title and description before launch. Add the
real HTTPS production origin to `url` and a real Open Graph image. Keep
`allowIndexing: false` while this is a setup preview; it controls metadata robots.
Canonical URLs, sitemap, robots file and full social metadata are deferred to SEO
implementation, so these reserved values do not create those features yet.

All optional feature flags default to false. When their sections are implemented,
they must check both the flag and the available content. Turning on `showStats` must
never create numbers; turning on `showGithub` also requires a real username. Flags
are configuration contracts at this stage and do not create homepage sections.
Navigation is implemented; Projects, About and Lab Notes are enabled. Other sections remain reserved.

## Navigation

Edit `navigation` in `src/content/navigation.ts` to change link labels and order.
Each item has `enabled: false` until its destination exists. Unavailable items are
marked disabled, excluded from keyboard tab order, and described as coming soon.
Do not enable an item before creating its corresponding section ID (for example,
`<Section id="about">`). These sections are intentionally not built in Stage 2.
Enabled links work from other pages using the `/#section` URL. Existing enabled
sections are tracked as you scroll and get `aria-current="location"`.

Menu labels, the brand descriptor and accessibility copy are in `navigationCopy`.
Replace the placeholder initials in `profile.ts` and update `navigationCopy.home`
when you add a real name. Resume is visibly disabled until `profile.resumeUrl` is
populated; once the actual file or URL exists, it becomes a link on both layouts.
The mobile note is editable; replace its coming-soon copy when sections are ready.

Desktop navigation starts at 70rem (normally 1120px). Below that, a native modal
dialog contains the navigation. It supports Escape, a close button, outside click,
focus containment and focus restoration. Body scrolling is locked while it is open,
then restored. Resizing to desktop closes the dialog automatically.

## Design and validation

Colors, surface levels, spacing, radii, typography, shadows and motion tokens live in
`src/app/tokens.css`. Global styles and Tailwind mappings in `@theme inline` live in
`src/app/globals.css`. Font configuration
lives in `src/lib/fonts.ts`: Inter for body text, Newsreader for headings and
JetBrains Mono for technical text, loaded with `next/font`.

Reusable components are `Container` and `Section` in `components/layout`, plus
`SectionHeading`, `Button`, `ButtonLink`, `Badge` and `Surface` in `components/ui`.
`Container` supports default and narrow widths. `Section` supplies consistent padding
and a container. Use `SectionHeading as="h1"` once per page; the default is `h2`.
Use buttons for actions and `ButtonLink` for navigation. Button variants are primary,
secondary and ghost; badges support neutral or accent tones. All accept the relevant
native HTML attributes where appropriate. Static components remain server-compatible.

The current visual direction is Computational Research Journal: warm paper, ink,
blue accent, editorial serif headings and thin rules. There are no page-wide grids,
glows or glass surfaces. The numbered labels live in `heroCopy`, `projectsCopy`,
`aboutCopy` and `labNotesCopy`; factual content and schemas are unchanged.

Profile is the presentation name for About and retains the `#about` anchor. Skill
data remains in `skills.ts` without a homepage anchor or presentation component.
Lab Notes is the dark, research-journal insert after Profile and uses the
`#lab-notes` anchor. Its editable note data and UI copy live in `research.ts`.

Hero layout and data-study SVG styles live in `components/hero/hero.css`.
The composition splits from 896px. The illustration is a Server Component, with
one 900ms line/point reveal and no continuous motion or pause control. Reduced motion
removes this animation. Navigation retains its 1024px breakpoint and native dialog.
Project covers are unchanged and can be replaced through each project's `cover`
object without changing its layout. The data model and filtering logic are intact.

After editing, run:

```sh
npm run lint
npm run typecheck
npm run build
```

Use `npm run dev` to preview. Review real content at mobile and desktop sizes before
publishing. Font downloads happen during build; visitors receive self-hosted fonts.
