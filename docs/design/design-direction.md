# Direction artistique — QR for Agent

## Ambiance

Un site sombre, epure et technique — comme un terminal qui parle. L'esthetique de Vercel appliquee a un outil developer : le code est l'interface, les snippets terminaux sont les heros visuels, et chaque pixel respire la precision. Pas d'illustrations, pas de screenshots de dashboards, pas de mockups de QR codes decoratifs. Le code parle pour lui-meme.

## Palette de couleurs

### Couleurs principales
- **Primary** : `oklch(0.98 0 0)` — blanc pur — CTAs, boutons remplis, elements d'emphase sur fond sombre
- **Primary foreground** : `oklch(0.11 0 0)` — noir profond — texte sur boutons blancs

### Couleurs neutres
- **Background** : `oklch(0.11 0 0)` — noir profond (#0a0a0a) — fond principal, hero, CTA final
- **Foreground** : `oklch(0.98 0 0)` — blanc — texte principal sur fond sombre
- **Muted** : `oklch(0.18 0 0)` — gris tres sombre (#1a1a1a) — fond des sections alternees, cards
- **Muted foreground** : `oklch(0.55 0 0)` — gris moyen (#737373) — texte secondaire, labels, metadata

### Couleurs d'accent
- **Accent** : `oklch(0.55 0 0)` — gris moyen — bordures de boutons outlined, elements secondaires
- **Border** : `oklch(0.25 0 0)` — gris sombre (#2e2e2e) — bordures, separateurs, contours de cards

### Couleurs fonctionnelles
- **Code background** : `oklch(0.14 0 0)` — fond des blocs de code, plus sombre que muted
- **Code green** : `oklch(0.72 0.17 155)` — vert terminal (#4ade80) — prompt `$`, succes, accents dans le code
- **Destructive** : `oklch(0.65 0.2 25)` — rouge doux — erreurs, warnings

### Rationale
Palette 100% monochrome inspiree de Vercel, avec un unique accent vert terminal pour les prompts de code et les etats de succes. Le vert n'est jamais utilise pour des CTAs ou des elements UI — il est reserve au code pour renforcer l'identite "terminal-first". Le monochrome radical differencie QR for Agent de tous les concurrents QR qui utilisent des couleurs vives (bleu Bitly, violet Uniqode, vert QR Tiger). Le noir profond communique la technicite et la confiance, le blanc pur donne aux CTAs une presence maximale.

## Typographie

### Heading : Geist Sans
- Source : `@fontsource-variable/geist-sans` (npm package disponible, pas besoin de CDN externe)
- Style : Sans-serif geometrique, clean, contemporain — la police de Vercel
- Utilisee pour : H1, H2, H3, navigation, boutons, logo textuel
- Poids : 700 (bold) pour H1/H2, 600 (semibold) pour H3/nav

### Body : Geist Sans
- Meme famille que les headings — coherence maximale
- Poids : 400 (regular) pour le corps, 500 (medium) pour les labels importants
- Utilisee pour : paragraphes, descriptions, metadata

### Code : Geist Mono
- Source : `@fontsource-variable/geist-mono`
- Style : Monospace geometrique assortie a Geist Sans
- Utilisee pour : blocs de code, commandes terminal, noms d'outils MCP, noms d'endpoints, inline code

### Echelle typographique
- H1 : 3.5rem (56px) — pages heros, impact maximal
- H2 : 2.25rem (36px) — titres de section
- H3 : 1.5rem (24px) — sous-titres, labels de features
- Body : 1.125rem (18px) — texte courant (legerement plus grand que le standard pour la lisibilite)
- Body large : 1.25rem (20px) — subtitles heros, introductions
- Small : 0.875rem (14px) — labels, metadata, notes
- Code : 0.9375rem (15px) — blocs de code

### Rationale
Geist est la police de Vercel — le site d'inspiration directe. Elle est geometrique, lisible, et immediatement associee a l'ecosysteme developer tools. Utiliser la meme famille pour headings et body cree une coherence visuelle forte. Geist Mono pour le code assure une harmonie parfaite entre texte et code. L'echelle typographique est genereuse (body a 18px) pour la lisibilite sur ecran et pour donner de l'air au contenu technique.

## Principes visuels

1. **Code as hero** — Les blocs de code et snippets terminaux sont les elements visuels principaux. Pas d'illustrations, pas d'images stock. Le `npx qr-for-agent` est le hero visuel, pas un mockup de QR code.

2. **Monochrome radical** — Noir, blanc, gris. Le seul accent de couleur est le vert terminal dans les blocs de code. Cette contrainte cree une identite visuelle forte et differencie du marche QR colore.

3. **Densite maitrisee** — Beaucoup d'espace blanc (noir, en l'occurrence). Les sections respirent. Le contenu technique (tableaux, listes de features) est aere, pas compresse. Padding genereux entre les sections (120-160px vertical).

4. **Bordures subtiles, pas d'ombres** — Les cards et conteneurs utilisent des bordures fines (`1px solid border`) au lieu d'ombres portees. Style flat, technique, precis. Les seuls effets visuels autorises : des hover transitions douces sur les boutons et les liens.

5. **Terminal windows authentiques** — Les blocs de code sont rendus comme des fenetres de terminal (barre de titre avec dots, fond plus sombre, police Geist Mono). Pas de code generique — chaque snippet est fonctionnel et copiable.

## Differenciation visuelle vs concurrents

| Concurrent | Leur style | Notre differenciation |
|-----------|-----------|----------------------|
| Bitly | Bleu/orange corporate, illustrations marketing, screenshots de dashboard | Monochrome pur, zero illustration, code et terminal comme heros visuels |
| Uniqode | Violet/blanc enterprise, QR codes decoratifs partout, ton corporate | Noir/blanc technique, pas de QR decoratif, ton developer-first |
| QR Code Generator | Bleu/blanc generic, templates, interface simple grand public | Sombre et technique, esthetique developer tools, pas de templates |
| QR Tiger | Vert/multicolore, charge visuellement, comparaisons agressives | Minimalisme radical, monochrome, espace et precision |
| QR.io | Clean moderne mais dashboard-centric, couleurs variees | Terminal-centric, code-forward, pas de dashboard |

## Images (direction)

- **Pas d'images** — Le site n'utilise pas de photos, illustrations ou mockups. Les elements visuels sont exclusivement typographiques et code-based.
- **Terminal windows** — Chaque section avec du code utilise un composant terminal stylise (barre de titre, fond sombre, syntax highlighting minimal).
- **QR code fonctionnel** — Le seul QR code visible sur le site est un vrai QR code genere par l'API, pas un mockup. Il apparait dans la section Demo comme resultat d'une requete.
- **GitHub repo card** — Section Open Source : un embed stylise du repo GitHub (stars, language, license) plutot qu'une image.
