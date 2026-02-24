# Design System — QR for Agent

## Tokens CSS (@theme)

Copier-coller dans `src/styles/global.css` a l'interieur du bloc `@theme { }`.

### Couleurs

```css
--color-background: oklch(0.11 0 0);
--color-foreground: oklch(0.98 0 0);
--color-primary: oklch(0.98 0 0);
--color-primary-foreground: oklch(0.11 0 0);
--color-muted: oklch(0.18 0 0);
--color-muted-foreground: oklch(0.55 0 0);
--color-accent: oklch(0.55 0 0);
--color-accent-foreground: oklch(0.98 0 0);
--color-border: oklch(0.25 0 0);
--color-ring: oklch(0.55 0 0);
--color-destructive: oklch(0.65 0.2 25);
--color-code-bg: oklch(0.14 0 0);
--color-code-green: oklch(0.72 0.17 155);
```

### Typographie

```css
--font-heading: "Geist Sans Variable", "Inter", system-ui, sans-serif;
--font-body: "Geist Sans Variable", "Inter", system-ui, sans-serif;
--font-mono: "Geist Mono Variable", "JetBrains Mono", ui-monospace, monospace;

--text-h1: 3.5rem;
--text-h2: 2.25rem;
--text-h3: 1.5rem;
--text-body: 1.125rem;
--text-body-lg: 1.25rem;
--text-small: 0.875rem;
--text-code: 0.9375rem;
```

### Espacement

```css
--spacing-section: 7rem;
--spacing-section-lg: 10rem;
--spacing-element: 2rem;
```

### Rayons de bordure

```css
--radius-sm: 0.25rem;
--radius-md: 0.5rem;
--radius-lg: 0.75rem;
--radius-xl: 1rem;
--radius-full: 9999px;
```

## Polices

- Heading + Body : `@fontsource-variable/geist-sans` — Geist Sans (Vercel)
- Code : `@fontsource-variable/geist-mono` — Geist Mono (Vercel)

## Composants du site

### Composants Astro (statiques, 0 JS)

| Composant | Role |
|-----------|------|
| `Container.astro` | Wrapper centre max-w-6xl avec padding horizontal |
| `Section.astro` | Section avec padding vertical et fond (default/muted) |
| `SectionHeading.astro` | Titre H2 + subtitle optionnel |
| `Hero.astro` | Hero centre avec H1, subtitle, terminal window, 2 CTAs |
| `CTAButton.astro` | Bouton avec variants (primary/outline/ghost) et tailles |
| `CTASection.astro` | Bloc CTA final avant le footer |
| `TerminalWindow.astro` | Fenetre terminal stylisee avec barre de titre et contenu code |
| `FeatureCard.astro` | Carte feature (titre + description) pour grille |
| `ComparisonTable.astro` | Tableau comparatif 2 colonnes |
| `StepCard.astro` | Carte etape numerotee pour "How it works" |
| `Navbar.astro` | Navigation responsive avec logo wordmark |
| `Footer.astro` | Footer minimal avec liens |

### Composants React (islands interactifs)

| Composant | Directive | Role |
|-----------|-----------|------|
| `MobileMenu.tsx` | `client:load` | Menu mobile overlay |
| `FAQ.tsx` | `client:visible` | Accordion FAQ (page pricing) |
| `ui/Accordion.tsx` | — | Primitive Radix pour FAQ |
