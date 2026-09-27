# AI / Machine Learning Portfolio

A content-driven portfolio foundation built with Next.js App Router, React,
strict TypeScript and Tailwind CSS. AI, Machine Learning and Data Science are the
primary identity; supporting engineering capabilities remain secondary.

## Current scope

Stages 1–5 are complete: project configuration, typed content, folder architecture,
centralized design tokens, fonts, reusable UI primitives, responsive navigation and
the Hero with a lightweight analytical SVG study. The Hero's text is explicitly
marked placeholder copy. Projects now supports editorial featured cards, compact cards,
category filtering, images, metrics and optional links. Stage 4.1 supplies three real
owner-provided projects; layout placeholders are disabled and drafts stay hidden.
Profile is server-rendered below Projects as a marked draft narrative. Centralized
skill data remains available for future portfolio content, but has no homepage
presentation. Other sections, case-study routes and integrations belong to later
stages. No personal achievements or qualifications are supplied.

## Getting started

Use Node.js 22.13 or newer and npm. Install the locked dependencies:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Dependency installation and the first font build need
internet access. Next.js downloads fonts at build time and serves them locally.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run lint` | ESLint with Next.js Web Vitals and TypeScript rules; zero warnings |
| `npm run typecheck` | Generate route types and check strict TypeScript |
| `npm run build` | Optimized production build, including Next.js type validation |
| `npm start` | Serve the production build |

Versions are pinned in `package.json` and `package-lock.json`. TypeScript and ESLint
use the newest compatible major versions supported by Next.js's lint plugins.
Motion, Lucide, shadcn/ui and Three.js are deferred until a feature needs them.
`agentRules: false` prevents Next.js development startup from appending generated
instructions to this repository's hand-written `AGENTS.md`.

## Architecture

```text
public/
  images/{projects,profile,certifications,og}/
  resume/                    # Add the actual PDF before enabling its link
  icons/
src/
  app/                       # App Router pages, root layout and global CSS
    projects/[slug]/         # Reserved for Stage 5; no active detail route yet
  components/
    layout/                  # Shared server-rendered container and section
    navigation/ hero/ about/ projects/ research/
    experience/ education/ contact/ visualizations/ animations/ ui/
  content/                   # All editable portfolio facts and configuration
  types/portfolio.ts         # Shared content contracts
  lib/fonts.ts               # next/font configuration
  hooks/                     # Reserved for future browser behavior
  utils/                     # Reserved for focused pure utilities
```

Empty directories contain `.gitkeep` so the architecture survives version control.
Components are Server Components by default. Add client boundaries only for actual
browser interactions. Data flows from typed content into components and then pages.
See [CONTENT_GUIDE.md](CONTENT_GUIDE.md) for personalization instructions and examples.
The full design and future stages are defined in [PORTFOLIO_SPEC.md](PORTFOLIO_SPEC.md).

## Design and performance

The presentation follows a Computational Research Journal direction: warm paper,
ink text, blue accents, thin rules and Newsreader display typography. Inter handles
body copy and JetBrains Mono is reserved for metadata. Tokens live in
`src/app/tokens.css`. This direction supersedes the original dark/neural visual
recommendations in PORTFOLIO_SPEC.md; its content and engineering rules still apply.

Existing sections are numbered Introduction, Selected Work and Profile. Projects
retain their editorial featured hierarchy in All; category filters use a consistent
result spread. Generated covers remain unchanged. Profile retains the `about` anchor;
centralized skill data is reserved for future content.

The sticky navigation uses a solid paper surface on scroll and a native modal dialog
below 1024px. Focus containment, Escape, scroll restoration and active-section
tracking are preserved. Unavailable destinations and resume remain disabled.

The Hero and its conceptual SVG are Server Components. A 900ms CSS line draw and
point reveal finish once; reduced motion renders them statically. No animation
runtime, pointer interaction, continuous loop or visualization client wrapper is
needed. Text and visual split from 896px and stack below. Social links appear only
when real URLs are supplied. Personalize through `profile.ts` and `hero.ts`.

## Deployment

Projects uses a server-rendered section and cards passed as slots to a small client
filter. Categories come only from visible entries; optional facts and links render
only when supplied. Featured cards alternate from 1024px, and compact cards use two
columns from 768px. Images use Next.js Image with intrinsic dimensions and contain
fitting to preserve screenshots. No extra dependencies are required. Configure
content and placeholder visibility in `src/content/projects.ts`.

Use a Node-compatible Next.js host: install with `npm ci`, build with `npm run build`,
and serve with `npm start` (the host may set `PORT`). Managed Next.js platforms can
use their standard framework preset. No environment variables or secrets are needed
for Stage 1. Deployment has not been performed.

Before public launch, replace TODO content, add actual assets, finish the planned
pages, configure the real site URL and SEO, and then enable indexing. The foundation
deliberately emits `noindex, nofollow` metadata until it is ready.
