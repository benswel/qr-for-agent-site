# QR for Agent — Marketing Site Context for Claude

## What is this?

Marketing site for **QR for Agent** (qrforagent.com) — a QR-as-a-Service API built for AI agents. This is the static site, not the API backend (separate repo: `benswel/qr-agent-core`).

## Live URLs

- **Production:** https://qrforagent.com
- **Cloudflare Pages:** https://qr-for-agent.pages.dev
- **GitHub:** https://github.com/benswel/qr-for-agent-site

## Tech stack

- **Framework:** Astro 5 (static output)
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/vite`)
- **Interactive islands:** React 19 (`@astrojs/react`)
- **Fonts:** Geist Sans + Geist Mono (via `@fontsource`)
- **UI primitives:** Radix UI (accordion), CVA, clsx, tailwind-merge
- **Deploy:** Cloudflare Pages (auto-deploy from GitHub not yet connected — currently manual `wrangler pages deploy dist/`)

## Pages

| Route | File | Description |
|-------|------|-------------|
| `/` | `src/pages/index.astro` | Landing page — hero, features, how-it-works, comparison, CTA |
| `/docs` | `src/pages/docs.astro` | Documentation — API reference, MCP setup, code examples |
| `/pricing` | `src/pages/pricing.astro` | Pricing plans with FAQ accordion |

## Project structure

```
src/
├── pages/                 # Astro pages (index, docs, pricing)
├── layouts/
│   └── BaseLayout.astro   # Shared layout (head, navbar, footer)
├── components/
│   ├── Navbar.astro       # Responsive nav with logo
│   ├── Hero.astro         # Hero with terminal window + CTAs
│   ├── TerminalWindow.astro
│   ├── FeatureCard.astro
│   ├── StepCard.astro
│   ├── ComparisonTable.astro
│   ├── CTAButton.astro    # Button variants (primary/outline/ghost)
│   ├── CTASection.astro
│   ├── Section.astro      # Section wrapper (default/muted background)
│   ├── SectionHeading.astro
│   ├── Container.astro    # max-w-6xl centered wrapper
│   ├── Footer.astro
│   ├── MobileMenu.tsx     # React island (client:load)
│   ├── FAQ.tsx            # React island (client:visible)
│   └── ui/Button.tsx      # React button primitive
├── styles/
│   └── global.css         # Tailwind v4 @theme tokens
├── lib/
│   └── utils.ts           # cn() helper (clsx + tailwind-merge)
public/
└── favicon.svg
docs/                      # Planning artifacts (research, copywriting, design)
```

## Key commands

```bash
npm run dev       # Local dev server
npm run build     # Build to dist/
npm run preview   # Preview built site locally
```

## Deploy

```bash
npm run build
npx wrangler pages deploy dist/ --project-name=qr-for-agent
```

## Design direction

- **Dark theme only** — monochrome (black/white/gray), no color except terminal green (`oklch(0.72 0.17 155)`)
- **Code as hero** — terminal windows and code snippets are the visual elements, no illustrations or stock images
- **Vercel-inspired** — Geist fonts, generous spacing, subtle borders (no shadows)
- **Developer-first tone** — direct, technical, no marketing fluff

## Color tokens (in global.css @theme)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-background` | `oklch(0.11 0 0)` | Page background (near-black) |
| `--color-foreground` | `oklch(0.98 0 0)` | Primary text (near-white) |
| `--color-muted` | `oklch(0.18 0 0)` | Card/section backgrounds |
| `--color-muted-foreground` | `oklch(0.55 0 0)` | Secondary text |
| `--color-border` | `oklch(0.25 0 0)` | Borders, separators |
| `--color-code-green` | `oklch(0.72 0.17 155)` | Terminal prompt, success |

## Planning docs

The `docs/` folder contains the strategic artifacts that produced this site:
- `docs/research/` — market research, competitor analysis, strategic brief
- `docs/copywriting/` — content plan, page copy, foundations
- `docs/design/` — design direction, design system

These are reference documents for understanding the positioning and design rationale.
