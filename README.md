# Muhammad Abbas Rana — Portfolio

Personal portfolio for Muhammad Abbas Rana, focused primarily on Artificial Intelligence, Machine Learning, and Data Science, with supporting software and systems engineering work.

**Live site:** [portfolio-roan-sigma-35.vercel.app](https://portfolio-roan-sigma-35.vercel.app/)

## Overview

This is a finished, responsive portfolio built around project work, technical learning, experience, education, certifications, and contact details. Its editorial interface is designed to make the work and supporting evidence easy to explore across desktop and mobile devices.

## Features

- Responsive editorial interface and navigation
- Selected projects on the homepage and a filterable `/projects` archive
- Centralized, data-driven portfolio content
- Lab Notes, Experience, Education, and Certifications sections
- Credential verification links and responsive certificate previews
- Contact links, `mailto:` email support, and copy-to-clipboard email feedback
- Dedicated responsive `/resume` page
- Desktop resume presentation with a native PDF frame and mobile PDF.js page rendering
- Keyboard-accessible navigation, visible focus states, skip link, semantic structure, and reduced-motion support
- SEO metadata, Open Graph metadata, favicon, sitemap, and robots configuration
- Vercel deployment

## Tech stack

- [Next.js](https://nextjs.org/) App Router
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PDF.js](https://mozilla.github.io/pdf.js/) for mobile Resume rendering
- ESLint for code quality checks
- Vercel for hosting and deployment

## Project structure

```text
public/
  certifications/                  # Certificate images and PDFs
  documents/Abbas-Rana-Resume.pdf  # Canonical resume PDF
  images/
    og/                            # Open Graph image
    projects/                      # Project cover images

src/
  app/                             # Routes, metadata, sitemap, robots, global styles
    api/resume-data/               # Resume data endpoint
    projects/                      # Project archive route
    resume/                        # Resume route and styles
  components/                      # Portfolio sections, navigation, Resume UI, shared UI
  content/                         # Centralized portfolio facts and site configuration
  hooks/                           # Client interaction hooks
  lib/                             # Fonts and Resume utilities
  types/                           # Shared TypeScript contracts

PORTFOLIO_EDITING_GUIDE.md         # Authoritative content maintenance guide
```

## Local development

Requires Node.js 22.13 or newer.

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`.

On Windows PowerShell, use the following if needed:

```powershell
npm.cmd run dev
```

### Checks

```sh
npm run lint
npm run typecheck
npm run build
```

## Content management

Portfolio content is centralized in `src/content/`, while public assets such as project covers, certificates, the Resume PDF, and the Open Graph image live in `public/`.

See [PORTFOLIO_EDITING_GUIDE.md](PORTFOLIO_EDITING_GUIDE.md) for the authoritative instructions for updating content and assets.

## Resume

The canonical Resume PDF is stored at:

```text
public/documents/Abbas-Rana-Resume.pdf
```

The `/resume` route fetches this asset through the in-app Resume data endpoint. On desktop it is shown in a native PDF frame; on narrower viewports, PDF.js renders accessible page canvases within the page.

## Deployment

Changes merged into `main` are pushed to GitHub and deployed automatically by Vercel.

Set `NEXT_PUBLIC_SITE_URL` in Vercel to the production HTTPS origin. It provides the base URL used by canonical metadata, Open Graph metadata, `robots.txt`, and `sitemap.xml`.
