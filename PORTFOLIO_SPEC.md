
# AI / MACHINE LEARNING PORTFOLIO
## Master Design, Architecture and Implementation Specification

---

# 1. Project Objective

Build a visually exceptional, production-quality personal portfolio website focused primarily on:

**1. Artificial Intelligence  
2. Machine Learning  
3. Data Science  
4. Data Analytics  
5. Supporting software engineering skills  
6. Linux / DevOps / Cloud as secondary capabilities**

The website should immediately communicate:

> This person is building toward becoming an AI / Machine Learning / Data Science professional who understands not only models and data, but also the engineering required to turn them into real systems.

This must NOT look like a generic web-developer portfolio.

Avoid the stereotypical developer portfolio consisting of:

- gradient blobs
- excessive glassmorphism
- random glowing cards
- huge technology-logo walls
- skill percentage bars
- generic “Hello, I am…” landing pages
- meaningless particle animations
- template-looking project cards

The final product should feel deliberate, sophisticated, technical and premium.

Visual inspiration can come from products such as:

- Linear
- Vercel
- OpenAI
- Apple
- GitHub
- Arc

Do not copy any of them directly.

The site needs its own identity centered around **data, intelligence and machine learning systems**.

---

# 2. Most Important Architectural Requirement

## CONTENT MUST BE SEPARATED FROM PRESENTATION

Personal information must NEVER be scattered throughout React components.

All editable portfolio information should live inside centralized content/data files.

I should be able to change:

- my name
- headline
- biography
- social links
- email
- education
- experiences
- projects
- skills
- research interests
- certifications
- statistics
- project metrics
- GitHub URL
- LinkedIn URL
- resume URL
- current areas of learning

without redesigning components.

The React components should consume data.

They should NOT contain portfolio facts.

For example:

```ts
export const profile = {
  name: "Your Name",
  headline: "Machine Learning • Data Science • Artificial Intelligence",
  shortBio: "...",
  email: "...",
  github: "...",
  linkedin: "...",
};
```

Projects should similarly be data driven:

```ts
export const projects = [
  {
    slug: "example-project",
    title: "Example ML Project",
    shortDescription: "...",
    description: "...",

    category: "Machine Learning",

    tags: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "FastAPI",
    ],

    problem: "...",
    approach: "...",
    outcome: "...",

    metrics: [
      {
        label: "Accuracy",
        value: "94.2%",
      },
    ],

    github: "...",
    liveDemo: null,

    featured: true,
  },
];
```

Adding another project should normally require only:

1. adding one object
2. adding its images/assets
3. optionally writing additional case-study content

The components should automatically adapt.

---

# 3. Technology Stack

Use the latest stable versions that are mutually compatible.

Primary technologies:

- Next.js
- React
- TypeScript
- App Router
- Tailwind CSS
- Motion for React
- shadcn/ui where useful
- Lucide icons
- next/font
- React Three Fiber / Three.js only where it creates genuine visual value

Do not introduce unnecessary dependencies.

Prefer native CSS, React and browser capabilities where reasonable.

Avoid installing libraries for trivial functionality.

---

# 4. Application Architecture

Use approximately the following structure:

```text
portfolio/
│
├── public/
│   ├── images/
│   │   ├── projects/
│   │   ├── profile/
│   │   ├── certifications/
│   │   └── og/
│   │
│   ├── resume/
│   └── icons/
│
├── src/
│   │
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   │
│   │   ├── projects/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── not-found.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── projects/
│   │   ├── skills/
│   │   ├── research/
│   │   ├── experience/
│   │   ├── education/
│   │   ├── contact/
│   │   ├── visualizations/
│   │   ├── animations/
│   │   └── ui/
│   │
│   ├── content/
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── experience.ts
│   │   ├── education.ts
│   │   ├── research.ts
│   │   ├── certifications.ts
│   │   ├── navigation.ts
│   │   └── site.ts
│   │
│   ├── types/
│   │   └── portfolio.ts
│   │
│   ├── hooks/
│   ├── lib/
│   └── utils/
│
├── CONTENT_GUIDE.md
├── README.md
├── package.json
└── ...
```

The exact structure may evolve if a cleaner solution exists, but preserve the fundamental separation between:

**data → components → pages**

---

# 5. Type Safety

Create reusable TypeScript interfaces/types.

Examples:

```ts
export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;

  category:
    | "Artificial Intelligence"
    | "Machine Learning"
    | "Data Science"
    | "Data Analytics"
    | "Software Engineering"
    | "Other";

  tags: string[];

  problem?: string;
  approach?: string;
  outcome?: string;

  metrics?: ProjectMetric[];

  github?: string;
  liveDemo?: string;

  featured: boolean;
}
```

Do the same for:

- Skill
- Experience
- Education
- Certification
- ResearchItem
- SocialLink

Avoid `any`.

---

# 6. Visual Identity

## Overall atmosphere

The website should feel like an **AI research environment combined with a premium software product**.

Dark-first visual design.

Base background:

```text
#05070A
```

Secondary surfaces should use subtle variations such as:

```text
#0A0D12
#0D1117
#11161D
```

Primary text:

```text
#F5F7FA
```

Muted text:

```text
#8B949E
```

Primary accent:

```text
Electric cyan / blue
```

Secondary accent:

```text
Controlled violet
```

Possible success/data accent:

```text
Emerald
```

Do NOT use every accent simultaneously.

The majority of the UI should remain neutral.

Color should highlight important elements.

---

# 7. Typography

Recommended roles:

## Display / Major headings

Space Grotesk

## Body

Inter

## Technical / Code

JetBrains Mono

Use `next/font` when possible.

Typography should provide strong hierarchy.

Desktop hero headline should feel dramatic but should use responsive scaling such as `clamp()` rather than fixed enormous text sizes.

---

# 8. Background System

Build a sophisticated but subtle background system.

Potential elements:

- faint mathematical/data grid
- subtle radial gradients
- soft noise texture
- occasional glowing regions
- extremely subtle moving data particles
- faint neural/network geometry

Animations must be slow and restrained.

The background must NEVER compete with content.

Avoid the appearance of a gaming website.

---

# 9. Navigation

Create a premium sticky navigation bar.

Desktop navigation:

```text
Logo/Initials

About
Projects
Skills
Experience
Research
Contact

Resume
```

Requirements:

- transparent initially
- subtle blurred dark surface after scrolling
- active-section indication
- smooth scrolling
- keyboard accessible
- responsive mobile menu
- excellent focus states
- no layout shifts

Mobile:

Use a compact hamburger or equivalent menu.

The menu should animate smoothly but remain simple.

---

# 10. Hero Section

The hero should be the strongest visual moment.

The user should understand the site's purpose within approximately 5 seconds.

## Content structure

Eyebrow:

```text
AI • MACHINE LEARNING • DATA SCIENCE
```

Primary headline:

```text
I build intelligent systems
from data to deployment.
```

This is placeholder copy and must be editable through `profile.ts`.

Supporting copy should briefly communicate the owner's focus.

Example:

```text
Computer Science student exploring machine learning,
data science and AI through practical systems,
experiments and research-driven projects.
```

Again, this text must be data driven.

Buttons:

```text
Explore Projects
View Resume
```

Secondary icon links:

```text
GitHub
LinkedIn
Email
```

---

# 11. Hero Visualization

Create an original AI-themed visual.

Preferred concept:

## Interactive Neural Constellation

Create a collection of nodes representing data points / neurons.

Nearby nodes form connections.

Some connections softly pulse.

Pointer movement causes extremely subtle parallax or attraction.

A slow wave can propagate through parts of the network.

The result should look scientific rather than decorative.

Possible labels occasionally appearing subtly:

```text
DATA
FEATURES
MODEL
INFERENCE
```

Do not fill the visualization with text.

It should remain abstract.

Desktop:

Visualization appears beside or behind the hero.

Mobile:

Use a simplified rendering.

If WebGL would significantly affect mobile performance, use an SVG/canvas fallback.

Respect:

```css
prefers-reduced-motion
```

---

# 12. Avoid a Forced Intro Animation

Do NOT make users watch a long boot sequence before seeing the portfolio.

Visitors should immediately access the hero.

The earlier terminal/boot concept can instead become a secondary interactive Easter egg or feature.

First-time visitors must never be trapped behind an animation.

---

# 13. About Section

Section heading:

```text
About
```

Do not simply display a giant biography paragraph.

Use a two-column desktop composition.

Possible left side:

```text
A short personal narrative
```

Possible right side:

```text
Currently exploring
Machine Learning
Deep Learning
NLP
Computer Vision
Data Science
```

Content remains configurable.

Include optional quick facts.

Example:

```text
Based in ...
Studying ...
Interested in ...
Currently learning ...
```

Do not invent facts.

---

# 14. Portfolio Statistics

Create optional statistics cards.

Examples:

```text
Projects Completed
Research Areas
Technologies Used
Years Learning
```

IMPORTANT:

NEVER generate fake impressive numbers.

If real values have not been provided, use obvious placeholder values or hide the section.

The content configuration should support:

```ts
showStats: false
```

---

# 15. Featured Projects

This is the most important content section.

Projects must not look like generic blog cards.

Design larger **case-study style project cards**.

Each featured card should potentially display:

- project title
- category
- short description
- major result
- technologies
- image/visualization
- GitHub
- live demo
- details link

Example layout:

```text
┌───────────────────────────────────────────────┐
│                                               │
│   PROJECT IMAGE          Machine Learning     │
│                          Project Name         │
│                          Description          │
│                          Metrics              │
│                          Python • XGBoost     │
│                                               │
└───────────────────────────────────────────────┘
```

Alternate card orientation between projects where appropriate.

Avoid monotony.

---

# 16. Project Filtering

Allow filtering by categories such as:

```text
All
Machine Learning
AI
Data Science
Analytics
Engineering
```

Do not show filters that have zero projects.

Filtering should animate smoothly.

---

# 17. Project Case Study Pages

Each major project should optionally get:

```text
/projects/[slug]
```

A project case study should support:

## Header

- title
- short description
- categories
- technologies
- GitHub
- live demo

## Problem

What problem was being solved?

## Dataset

Where did the data come from?

How large was it?

What preprocessing was required?

## Exploration

Important patterns or visualizations.

## Methodology

Models/techniques used.

## Evaluation

Metrics.

Examples:

- Accuracy
- Precision
- Recall
- F1
- ROC-AUC
- MAE
- RMSE

Only show metrics relevant to the project.

## Results

What worked?

## Challenges

What difficulties occurred?

## Improvements

What could be improved?

## Deployment

If applicable:

```text
Model
↓
API
↓
Container
↓
Cloud
```

## Lessons Learned

Short reflection.

All optional fields should degrade gracefully.

A simple project should not require every field.

---

# 18. Data Science Visualizations

Where project content includes real metrics, provide polished chart components.

Potential components:

- confusion matrix
- accuracy comparison
- model comparison
- feature importance
- distributions
- training curves

Do NOT generate fake charts.

Visualizations should only display actual provided data.

Chart components should be reusable.

---

# 19. Skills Section

Do NOT use:

```text
Python 95%
Machine Learning 90%
Docker 80%
```

Percentage-based skill bars are meaningless.

Instead organize skills into categories.

Example:

## Machine Learning

```text
Scikit-learn
Regression
Classification
Clustering
Feature Engineering
Model Evaluation
```

## Data Science

```text
Pandas
NumPy
Matplotlib
Data Cleaning
EDA
Statistics
```

## AI

```text
Deep Learning
NLP
Computer Vision
```

## Programming

```text
Python
Java
C++
JavaScript / TypeScript
```

## Data & Databases

```text
SQL
PostgreSQL
MySQL
MongoDB
```

## Engineering

```text
Git
GitHub
Linux
Docker
CI/CD
```

These are examples only.

Actual skill data must come from `skills.ts`.

---

# 20. Skill Interaction

Create clean skill chips/cards.

Hover may:

- slightly raise the component
- highlight the icon
- show a subtle glow
- reveal optional description

Do not create excessive motion.

---

# 21. AI / ML Pipeline Section

Create one technically interesting section explaining the lifecycle of an intelligent system.

Example:

```text
Raw Data
   ↓
Preprocessing
   ↓
Exploration
   ↓
Feature Engineering
   ↓
Model Training
   ↓
Evaluation
   ↓
API / Inference
   ↓
Deployment
```

Animate data progressing through the pipeline.

On hover/click, each stage may explain what it represents.

This should reinforce the portfolio owner's understanding of the full ML workflow.

The content should still be configurable.

---

# 22. Research / Learning Section

Create a section for intellectual interests.

Possible content:

```text
Machine Learning
Natural Language Processing
Computer Vision
Deep Learning
MLOps
Data Science
```

Research items may include:

```ts
{
  title: "...",
  type: "Research Interest",
  description: "...",
  status: "Exploring"
}
```

Possible types:

- Research Interest
- Current Study
- Paper
- Coursework
- Experiment

This section should be easy to expand later.

---

# 23. Experience

Use an elegant chronological timeline.

Each experience includes:

```ts
{
  role: "",
  organization: "",
  startDate: "",
  endDate: "",
  description: "",
  highlights: [],
  technologies: []
}
```

Desktop:

Vertical timeline or clean stacked layout.

Mobile:

Simple cards.

Avoid complicated overlapping timeline geometry on small screens.

---

# 24. Education

Create a compact education section.

Fields:

```text
Institution
Degree
Dates
Optional GPA
Relevant coursework
Optional activities
```

All should be data driven.

---

# 25. Certifications

Certifications should support:

```ts
{
  name: "",
  issuer: "",
  date: "",
  credentialUrl: "",
  image: "",
}
```

The section should hide automatically if no certifications exist.

---

# 26. GitHub Section

GitHub integration is optional.

Do not make the entire site dependent on the GitHub API.

Potential features:

- GitHub profile link
- featured repositories
- repository stars
- repository language
- recent activity

If live data is implemented:

- fetch server-side
- cache/revalidate
- gracefully handle API errors
- do not expose secrets
- prevent API failure from breaking page rendering

If no GitHub username exists in configuration, hide the dynamic section.

---

# 27. Interactive AI Console

Preserve the earlier terminal concept, but reposition it as an optional interactive feature rather than the main interface.

Possible heading:

```text
AI Console
```

Users could type predefined commands:

```text
help
about
projects
skills
research
experience
contact
clear
```

Example:

```text
> projects

Loading project index...

01  Customer Churn Prediction
02  Sentiment Analysis
03  ...
```

Do NOT implement unrestricted shell execution.

Only support safe predefined commands.

Mobile:

Either simplify the console or hide it behind an expandable interaction.

---

# 28. Contact Section

Create a strong final CTA.

Example:

```text
Let's build something intelligent.
```

Support:

- email
- LinkedIn
- GitHub
- resume

A contact form is optional.

Do not require a backend unless genuinely needed.

A well-designed `mailto:` CTA is acceptable initially.

---

# 29. Footer

Keep minimal.

Example:

```text
Designed & built by [Name]

GitHub • LinkedIn • Email
```

Optional:

```text
Built with Next.js
```

Do not overload the footer.

---

# 30. Motion Design

Use Motion for React.

Create reusable motion primitives instead of rewriting animation configuration everywhere.

Potential reusable components:

```text
FadeIn
Reveal
Stagger
SlideIn
ScaleIn
```

Animation guidelines:

## Page loading

Small fade.

## Section entrance

Soft upward transition.

## Cards

Minimal hover elevation.

## Buttons

Subtle scale/gradient movement.

## Navigation

Blur/background transition.

## Hero network

Slow continuous animation.

## Projects

Staggered reveal.

Avoid:

- aggressive bouncing
- constant rotation
- scroll hijacking
- excessively delayed content
- unnecessary parallax
- giant animations between every section

Animation should make the website feel responsive and alive, not slow.

---

# 31. Reduced Motion

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

Users requesting reduced motion should receive:

- no unnecessary particle movement
- minimal transitions
- no parallax
- no intensive animation

Core content must remain fully usable.

---

# 32. Responsive Design

Responsiveness is a core requirement, NOT a cleanup phase.

Build mobile-first.

Validate at approximately:

```text
320 px
375 px
430 px
768 px
1024 px
1280 px
1440 px
1920 px
```

Do not merely shrink desktop layouts.

Adapt them.

Example hero:

## Desktop

```text
TEXT            AI VISUALIZATION
```

## Tablet

```text
TEXT

AI VISUALIZATION
```

## Mobile

```text
TEXT
BUTTONS

SIMPLIFIED VISUAL
```

Project layouts must similarly collapse intelligently.

Navigation must be touch-friendly.

Buttons must have suitable touch targets.

No horizontal scrolling should occur.

---

# 33. Mobile Performance

Heavy visuals must not damage mobile performance.

Use techniques such as:

- lazy loading
- dynamic imports
- simplified visualizations
- disabling unnecessary pointer effects
- reduced particle counts
- Next.js image optimization
- conditional WebGL rendering

If a Three.js visual looks impressive on desktop but damages mobile performance, provide a lightweight fallback.

Performance wins.

---

# 34. Accessibility

Use semantic HTML.

Required considerations:

- headings in logical order
- visible keyboard focus
- keyboard-operable navigation
- accessible menus
- proper button elements
- labels for forms
- descriptive image alt text
- sufficient color contrast
- ARIA only where genuinely needed
- reduced motion support

Do not sacrifice accessibility for aesthetics.

---

# 35. SEO

Implement proper metadata through the Next.js metadata system.

Support:

```text
title
description
keywords
author
canonical
Open Graph
Twitter card
robots
sitemap
```

Create a reusable site configuration.

Example:

```ts
export const siteConfig = {
  name: "",
  title: "",
  description: "",
  url: "",
};
```

Also create a high-quality Open Graph image or an easily replaceable placeholder.

---

# 36. Performance Targets

Target approximately:

```text
Lighthouse Performance: 90+
Accessibility: 95+
Best Practices: 95+
SEO: 95+
```

Do not manipulate Lighthouse just to achieve numbers.

Actual user experience takes priority.

---

# 37. Image Handling

Use Next.js image optimization where appropriate.

Store local assets cleanly under:

```text
/public/images/
```

Projects:

```text
/public/images/projects/project-slug/
```

Each project may contain:

```text
cover.webp
architecture.webp
results.webp
dashboard.webp
```

The project data should reference these assets.

---

# 38. Configuration Flags

Create simple feature toggles.

Example:

```ts
export const features = {
  showResearch: true,
  showCertifications: true,
  showGithub: true,
  showConsole: true,
  showStats: true,
};
```

This allows sections to be removed without deleting components.

---

# 39. Empty-State Behaviour

Sections must NOT display broken UI when information is missing.

Examples:

If no live demo exists:

Do not render the Live Demo button.

If no certifications exist:

Do not render an empty Certifications section.

If metrics are unavailable:

Do not display fake metrics.

If an image is missing:

Use a tasteful fallback component.

If GitHub integration fails:

The rest of the website continues working.

---

# 40. No Invented Content

This requirement is extremely important.

Do NOT invent:

- projects
- job experience
- awards
- statistics
- model accuracy
- university information
- companies
- research
- certifications
- GitHub activity
- personal biography

If actual information has not been supplied:

Either use obviously marked placeholder data such as:

```text
TODO: Add project description
```

or hide the component.

Never make the portfolio owner appear to have experience they do not actually have.

---

# 41. Content Editing Experience

A non-expert should be able to maintain the portfolio.

Create:

```text
CONTENT_GUIDE.md
```

Explain exactly how to:

### Change personal details

Edit:

```text
src/content/profile.ts
```

### Add a project

Edit:

```text
src/content/projects.ts
```

### Add project images

Place them under:

```text
public/images/projects/<slug>/
```

### Add skills

Edit:

```text
src/content/skills.ts
```

### Add experience

Edit:

```text
src/content/experience.ts
```

### Add certification

Edit:

```text
src/content/certifications.ts
```

### Replace resume

Replace:

```text
public/resume/resume.pdf
```

Explain these processes for somebody who understands basic programming but should not need to understand the entire frontend architecture.

---

# 42. Component Design

Avoid giant components.

For example, do NOT build a 700-line `page.tsx`.

Use composition.

Possible structure:

```text
HomePage
│
├── Navbar
├── Hero
├── About
├── FeaturedProjects
├── MLWorkflow
├── Skills
├── Research
├── Experience
├── Education
├── AIConsole
├── Contact
└── Footer
```

Hero itself might be:

```text
Hero
│
├── HeroContent
├── HeroActions
├── SocialLinks
└── NeuralVisualization
```

Project card:

```text
ProjectCard
│
├── ProjectMedia
├── ProjectMeta
├── ProjectMetrics
├── TechnologyTags
└── ProjectLinks
```

---

# 43. Server vs Client Components

Use Server Components by default.

Only add:

```ts
"use client";
```

when browser interactivity actually requires it.

Examples requiring client components:

- animations
- interactive filters
- mobile menu
- neural visualization
- console
- pointer interactions

Static content should remain server-rendered where possible.

Do not turn the whole application into a client component.

---

# 44. Design Tokens

Define reusable CSS variables.

Example concepts:

```text
--background
--foreground
--surface
--surface-hover
--border
--muted
--accent
--accent-secondary
--radius
```

Do not scatter arbitrary hex values throughout components.

---

# 45. Borders and Glass Effects

Use borders extensively but subtly.

Preferred:

```text
1px low-opacity borders
```

Glass effects may be used for:

- navigation
- floating overlays
- small information cards

Do NOT put every section inside a glass card.

---

# 46. Custom Cursor

A fully replaced cursor is NOT required.

If implementing pointer enhancement:

- desktop only
- extremely subtle
- preserve native cursor usability
- disable on touch devices
- ensure no accessibility problems

Prefer simplicity.

---

# 47. Scroll Behaviour

Use standard browser scrolling.

Smooth anchor scrolling is acceptable.

Do NOT hijack scrolling.

Do NOT use artificial inertia that interferes with normal browser behavior.

---

# 48. Loading Behaviour

The homepage content should appear quickly.

Do not create a mandatory cinematic loading screen.

Individual heavy elements may show lightweight skeletons/placeholders.

---

# 49. Error Boundaries and Reliability

Interactive optional components should fail gracefully.

The hero, project content and contact information must remain visible even if:

- GitHub fails
- WebGL fails
- JavaScript enhancement fails
- external resources fail

---

# 50. Code Quality

Requirements:

- TypeScript strictness
- clear component names
- readable functions
- minimal duplication
- reusable utilities
- sensible comments
- no dead code
- no unused dependencies
- no TypeScript errors
- no lint errors

Avoid excessive abstractions.

Do not create an elaborate design system for components used once.

---

# 51. Testing Before Completion

At minimum run:

```bash
npm run lint
npm run build
```

If additional tests are configured, run those as well.

Fix errors rather than suppressing them.

Do not disable lint rules simply to make the build pass unless there is a legitimate documented reason.

---

# 52. Responsive Validation

Manually inspect:

```text
320x568
375x667
430x932
768x1024
1024x768
1366x768
1440x900
1920x1080
```

Check for:

- overflow
- clipped text
- oversized headings
- broken project layouts
- unusable navigation
- overflowing tags
- incorrect images
- excessive whitespace
- cramped elements

---

# 53. README

Create a professional:

```text
README.md
```

Include:

```text
Project overview
Technology stack
Getting started
Development commands
Folder structure
How content works
Deployment instructions
Performance considerations
```

---

# 54. Git Practices

Keep commits meaningful where possible.

Examples:

```text
chore: initialize portfolio architecture

feat: build responsive hero section

feat: add data-driven project system

feat: add project case study pages

feat: implement ML workflow visualization

feat: add responsive navigation

perf: optimize hero visualization

docs: add portfolio content guide
```

Do not create meaningless messages such as:

```text
update
stuff
changes
fix
```

---

# 55. Implementation Order

Build in this order.

## Stage 1 — Foundation

Create project.

Configure:

- Next.js
- TypeScript
- Tailwind
- fonts
- linting
- path aliases
- shadcn if required

Create base folder structure.

Create TypeScript schemas.

Create placeholder content.

---

## Stage 2 — Global Design

Implement:

- theme variables
- typography
- layout container
- backgrounds
- section spacing
- buttons
- badges
- basic cards

---

## Stage 3 — Navigation

Build responsive navigation.

Verify desktop and mobile behaviour before proceeding.

---

## Stage 4 — Hero

Implement hero content first.

Then build the AI visualization.

Do not allow the visualization to block completion of the functional hero.

---

## Stage 5 — Projects

Create:

- project schemas
- project cards
- filters
- featured project layout
- project details routing

---

## Stage 6 — AI/ML Workflow

Implement the animated ML lifecycle component.

---

## Stage 7 — About + Skills

Create these using centralized content.

---

## Stage 8 — Research + Experience + Education

Build remaining content sections.

---

## Stage 9 — Interactive Console

Build only after primary portfolio content works.

---

## Stage 10 — Contact + Footer

Complete primary navigation flow.

---

## Stage 11 — Motion Pass

Add animation carefully.

Do not animate everything while building components.

---

## Stage 12 — Responsiveness Pass

Test every breakpoint.

Fix layouts individually when needed.

---

## Stage 13 — Accessibility

Perform keyboard and screen-reader-oriented review.

---

## Stage 14 — Performance

Optimize:

- WebGL
- images
- JavaScript
- fonts
- client components
- lazy loading

---

## Stage 15 — SEO

Add metadata, sitemap, robots and Open Graph configuration.

---

## Stage 16 — Documentation

Write:

```text
README.md
CONTENT_GUIDE.md
```

---

## Stage 17 — Final Verification

Run:

```bash
npm run lint
npm run build
```

Resolve all errors.

Review the finished website on desktop and mobile.

---

# 56. Important Visual Standard

At every stage ask:

> Does this look like a custom portfolio designed for someone pursuing AI and machine learning, or does it look like a downloaded template?

If it looks generic, improve it.

The goal is not visual complexity.

The goal is visual identity.

---

# 57. User Experience Priority

The visitor should naturally understand the portfolio in this order:

```text
Who is this person?

↓

What area do they specialize in?

↓

What have they built?

↓

How technically deep is their work?

↓

What technologies do they understand?

↓

What are they currently exploring?

↓

What experience do they have?

↓

How can I contact them?
```

Design the page around this information hierarchy.

---

# 58. Final Quality Bar

The finished portfolio should be:

- visually impressive
- clearly AI/ML focused
- fast
- responsive
- accessible
- professional
- technically credible
- easy to edit
- easy to extend
- maintainable
- SEO-friendly
- deployable
- built with clean TypeScript
- usable without understanding the entire frontend codebase

Most importantly:

## The website must remain easy to maintain for years.

Adding a new project, certification, experience, skill or research interest should feel like updating data — not rebuilding the website.

---

# 59. Codex Working Instructions

Before making significant changes:

1. Inspect the existing repository.
2. Preserve working functionality unless the specification explicitly requires replacement.
3. Read this entire specification.
4. Break large implementation work into logical milestones.
5. Implement actual working functionality rather than mock screenshots.
6. Check responsive behaviour while developing, not only at the end.
7. Run lint/build verification after meaningful phases.
8. Fix issues discovered during verification.
9. Do not invent personal information.
10. Prefer maintainable solutions over quick hacks.

When a design detail is unspecified, make a strong professional design decision consistent with the design system described here instead of creating generic placeholder UI.

The objective is to produce the complete portfolio application, not merely provide code snippets describing how one could build it.

---

# 60. Definition of Done

The project is complete when:

- the homepage is fully implemented
- AI/ML is clearly the dominant identity
- featured projects work
- project detail pages work
- content is centralized
- navigation works
- mobile navigation works
- animations work
- reduced-motion mode works
- project filters work
- feature flags work
- sections gracefully handle missing content
- resume links work
- contact links work
- SEO metadata exists
- sitemap exists
- robots configuration exists
- desktop layouts work
- tablet layouts work
- mobile layouts work
- no obvious horizontal overflow exists
- TypeScript compiles
- lint passes
- production build succeeds
- documentation explains how to update everything

The final repository should be something its owner can continue evolving without needing to regenerate the entire website.