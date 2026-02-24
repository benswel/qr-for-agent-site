# Brief stratégique — QR Agent Core

## 1. Résumé exécutif

QR Agent Core est le premier service de QR codes dynamiques conçu nativement pour les agents AI. Le marché QR SaaS ($13B en 2025, CAGR 16.8%) est dominé par des acteurs marketing-centric (Uniqode, QR Tiger, QR Code Generator) avec une réputation toxique (Trustpilot 1.6/5 pour le leader). L'écosystème MCP explose (100 → 16,000+ serveurs en un an) mais manque d'outils "real world" — les agents savent écrire du code et envoyer des emails mais ne peuvent pas créer un objet physique comme un QR code. QR Agent Core occupe cet espace vacant : **le pont entre les agents AI et le monde physique, via des QR codes dynamiques installables en une commande**. La landing page doit convertir des AI agent builders en sign-ups (API keys) en capitalisant sur la simplicité radicale (`npx qr-for-agent`), le pricing transparent, et l'open source.

## 2. Positionnement recommandé

### Positionnement actuel
Aucun site, uniquement un README GitHub technique. Perçu comme un side project open source, pas comme un service.

### Positionnement recommandé
**"The first QR code service built for AI agents."**

API-first. MCP-native. One command to install. Free to start. Open source.

### Justification
- Aucun concurrent ne revendique ce positionnement (Bitly a un MCP mais se positionne comme "Connections Platform")
- L'écosystème MCP cherche activement des outils "real world" — c'est l'angle de découverte #1
- Les créateurs d'agents AI sont un segment en explosion (97M+ téléchargements SDK MCP/mois) et complètement ignoré par les services QR existants

### Ce qui change
De "QR-as-a-Service infrastructure" (technique, générique) → **"QR codes for AI agents"** (spécifique, mémorable, différenciant). Le messaging passe de features techniques à un bénéfice concret : "your agent can now create real-world objects."

## 3. Proposition de valeur

### Promesse principale
**"Give your AI agent the power to create, update, and track QR codes — in one command."**

### Preuves à l'appui
- `npx qr-for-agent` : installation en 30 secondes, testé et vérifié
- 6 outils MCP légers (vs 27 chez Bitly) : pas de context bloat
- API REST complète : alternative pour les non-MCP
- Multi-tenant : isolation par API key pour gérer plusieurs clients
- Open source : code visible sur GitHub, self-hostable

### Mécanisme unique
Un serveur MCP standalone ultra-léger (3 dépendances, 5 kB) qui se connecte à une API REST robuste. L'agent appelle les outils en langage naturel : "Crée un QR code pour mon event" → le QR est créé, trackable, et modifiable sans changer l'image. Le pont digital-physique manquant dans l'écosystème agent.

## 4. Audience cible

### Profil principal : AI Agent Builder
- **Qui :** Développeur ou entrepreneur technique (25-45 ans) qui construit des agents/assistants AI
- **Situation :** Utilise Claude Desktop, Cursor, ou un framework d'agents (LangChain, CrewAI). Construit des agents pour le marketing, l'automatisation, ou des clients
- **Problème :** Son agent peut tout faire en digital mais ne peut pas créer un objet physique (QR code imprimable, lien trackable). Les APIs QR existantes sont chères ($49+/mois pour l'API), complexes (dashboard obligatoire), et sans intégration MCP
- **Désir :** Un outil que son agent peut appeler nativement pour créer, modifier et tracker des QR codes — comme Slack MCP ou GitHub MCP mais pour le monde physique
- **Déclencheur :** Découverte dans un directory MCP (PulseMCP, MCP Market), recommandation Reddit/HN, ou besoin immédiat ("mon agent doit créer un QR pour un event")

### Profil secondaire : Developer API-first
- **Qui :** Développeur qui a besoin de QR codes dynamiques dans son app/workflow
- **Situation :** Frustré par les services QR existants (prix, complexité, bait-and-switch)
- **Problème :** Les APIs QR sont overpriced ($50+/mois), overcomplicated, ou forcent un dashboard
- **Désir :** "One GET request for one QR code" — API simple, transparente, pas de piège
- **Déclencheur :** Migration après une mauvaise expérience (QR code expiré, pricing shock)

### Langage de l'audience

#### Mots de la douleur
> "Most QR code APIs are either overpriced ($50+/month for basic generation), overcomplicated (multiple API calls just to get an image), or require using their hosted dashboard." — Hacker News

> "Teams keep rebuilding small but critical utilities — QR codes, short URLs, tokens — over and over again." — DEV Community

> "95% of MCP servers are utter garbage." — Reddit/DEV Community

> "Context windows filling up with tool definitions — loading 50 tools meant burning 100K+ tokens before the conversation started." — StackOne

#### Mots du désir
> "One GET request for one QR code." — Hacker News

> "It just works — users avoid editing JSON config files, hunting for Python paths, and debugging environment variables." — MCPB review

> "AI agents are no longer just answering questions. They read code, deploy apps, run workflows, move money, search the web." — Desktop Commander

> "Anyone will be able to run npx @package-name and spin it up immediately." — Dev community

#### Objections à adresser
> "88% of MCP servers require credentials to operate, and 53% rely on long-lived static secrets." — Astrix Security (→ réponse : API key simple et isolée)

> "Pourquoi ne pas self-host ?" (→ réponse : open source ET cloud hosted)

> "Est-ce que ça va durer ?" (→ réponse : open source = pas de vendor lock-in)

> "Est-ce que ça consomme trop de tokens ?" (→ réponse : 6 outils légers, pas de bloat)

## 5. Différenciateurs clés

| Différenciateur | Pourquoi c'est fort | Concurrent le plus proche |
|----------------|--------------------|-----------------------|
| **MCP-native** — serveur MCP dédié aux QR codes | Aucun service QR n'est nativement MCP. L'écosystème MCP (16K+ serveurs) cherche des outils "real world". | Bitly a un MCP mais c'est un généraliste avec 27 outils — pas spécialisé QR. |
| **One-command install** — `npx qr-for-agent` | Le gold standard dans l'écosystème MCP. 30 secondes entre la découverte et l'usage. Aucun concurrent QR ne propose ça. | Aucun. Uniqode = lire 6 pages de docs API. Bitly = configurer OAuth. |
| **Open source** — code visible, self-hostable | Signal de confiance #1 pour les développeurs. Élimine le vendor lock-in. Aucun concurrent QR n'est open source. | Aucun concurrent n'est open source. |
| **API-first, no dashboard required** | Les devs veulent "no dashboard, API-first". Tous les concurrents sont dashboard-first avec API en add-on payant. | Uniqode a la meilleure API mais nécessite $49/mois et un dashboard. |
| **Lightweight** — 6 outils, 3 deps, 5 kB | Le "too many tools problem" en MCP est réel (25-30% context window brûlé). Un serveur léger est un avantage technique concret. | Bitly MCP = 27 outils. Surdimensionné pour du QR. |

## 6. Angles de messaging

### Angle principal : "Your agent's bridge to the physical world"
- **Message :** "Your AI agent can write code, send emails, and manage projects. Now it can create QR codes too. Give your agent the power to act in the real world."
- **Appuyé par :** L'écosystème MCP manque d'outils "real world". Le consensus 2026 = "l'année où les agents font des choses dans le vrai monde". Les QR codes sont le pont digital-physique le plus simple.
- **Cible :** AI agent builders qui cherchent à étendre les capacités de leurs agents

### Angle secondaire : "One command, infinite QR codes"
- **Message :** "`npx qr-for-agent` — your agent creates, updates, and tracks QR codes in 30 seconds. No dashboard. No bloat. No surprises."
- **Appuyé par :** Le désir de simplicité radicale est le pattern #1. "One GET request = one QR code" est le verbatim le plus fréquent. Le "too many tools problem" rend les serveurs légers attractifs.
- **Cible :** Développeurs qui évaluent des outils MCP, frustrés par la complexité

### Angle tertiaire : "The anti-bait-and-switch QR service"
- **Message :** "Open source. Free tier with API access. Your QR codes never expire silently. See exactly what you're paying for."
- **Appuyé par :** Le marché QR SaaS a une réputation toxique (Trustpilot 1.6/5). Les reviews sont remplies de "scam", "bait and switch", "deactivated without warning". Un positionnement de transparence radicale serait un contraste puissant.
- **Cible :** Développeurs méfiants envers les services QR après de mauvaises expériences

## 7. Structure de contenu recommandée

### Pages prioritaires

1. **Landing page (home)** — la page de conversion principale
2. **Docs / API reference** — redirige vers le README GitHub ou une page docs
3. **Pricing** — free tier + plans (même si le pricing n'est pas 100% finalisé, montrer la transparence)

Pour le MVP du site, **une seule landing page suffit** avec des sections bien structurées.

### Hiérarchie de l'information (landing page)

1. **Hero** — Positionnement + `npx qr-for-agent` comme CTA principal. Montrer un snippet de code ou un terminal, pas un screenshot de dashboard.
2. **Demo visuelle** — Un prompt Claude qui crée un QR code → résultat affiché. "See it in action."
3. **How it works** — 3 étapes : Install (`npx`) → Configure (API key) → Your agent creates QR codes
4. **Features** — Les 6 outils MCP avec descriptions courtes. Dynamic QR, analytics, multi-tenant.
5. **Why not [competitor]** — Tableau comparatif subtil : QR Agent Core vs "Traditional QR services". Angles : MCP, pricing, open source, simplicity.
6. **Use cases** — Marketing campaigns, event management, restaurant menus, business cards — tout en mode "your agent handles it"
7. **Pricing** — Free tier generous + plans. Transparent, pas de "Contact Sales".
8. **Open source** — Lien GitHub, "See the code. Self-host if you want. No vendor lock-in."
9. **Get started** — CTA final : "Get your API key" + `npx qr-for-agent`

### Types de preuve sociale à utiliser

La preuve sociale classique (logos clients, témoignages) n'est pas disponible (produit nouveau). Alternatives crédibles pour les développeurs :

1. **GitHub stars & repo activity** — signe de projet vivant
2. **npm download count** — traction mesurable
3. **Code snippets** — "le code parle pour lui-même"
4. **MCP directory listings** — présence sur PulseMCP, MCP Market
5. **"Built with" section** — stack technique (Fastify, SQLite, TypeScript) = crédibilité technique
6. **Terminal demo** — montrer `npx qr-for-agent` qui marche en live

## 8. Ce qu'il faut éviter

### Messages à éviter
- "Best QR code generator" — saturé, tous les concurrents le disent
- "Enterprise-grade" / "SOC2 compliant" — trop tôt, pas crédible pour un nouveau produit
- "Branded QR codes" / "Custom design" — c'est un commodity, pas le différenciateur
- "10M+ users" / faux chiffres de traction — les devs détectent le bullshit
- "Free" sans clarifier les limites — c'est exactement ce que les concurrents toxiques font

### Tons à éviter
- **Corporate-marketing** — le ton de Uniqode/Bitly. Les devs décrochent.
- **Hype AI** — "revolutionizing", "game-changing", "powered by AI". L'audience est allergique au buzzword.
- **Agressif-comparatif** — le ton de QR Tiger. Dire du mal des concurrents directement est perçu comme desperate.

### Erreurs à ne pas reproduire
- Dashboard-first messaging (montrer des screenshots de dashboard plutôt que du code)
- Cacher les prix ou forcer un "Contact Sales"
- Free tier piégé (QR codes qui expirent, scans limités sans avertissement)
- Trop de features sur la landing page — rester focalisé sur MCP + API + simplicité

## 9. Prochaines étapes

- [ ] Approbation du brief stratégique
- [ ] Lancer `/website-copywriting` avec ce brief comme input
- [ ] Finaliser le pricing (free tier limits, plans payants)
- [ ] Soumettre `qr-for-agent` aux directories MCP (PulseMCP, MCP Market, Awesome MCP Servers)
- [ ] Lancer `/website-design` après le copywriting
