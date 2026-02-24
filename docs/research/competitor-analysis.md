# Analyse concurrentielle -- QR Agent Core

## Resume executif

**5 insights concurrentiels cles :**

1. **Bitly est le seul concurrent direct sur l'angle MCP.** Bitly a lance un MCP server complet (27 outils) compatible Claude, ChatGPT, Cursor et VS Code. Il permet de creer des short links, generer des QR codes, et consulter les analytics -- tout en langage naturel. C'est le concurrent le plus dangereux pour QR Agent Core sur le positionnement "AI-native". Cependant, Bitly est un generaliste (links + QR + landing pages) et facture cher ($29-199/mois pour les fonctionnalites utiles).

2. **Aucun concurrent ne se positionne comme "QR-for-agents" ou "QR infrastructure for AI".** Meme Bitly positionne son MCP comme un add-on a sa plateforme de link management, pas comme un service QR dedie aux agents. L'espace "QR-as-a-Service pour agents AI" est completement vacant. C'est l'opportunite strategique majeure de QR Agent Core.

3. **L'API est un feature, pas un produit chez les concurrents.** Uniqode, QR Code Generator et QR Tiger traitent l'API comme un feature premium disponible uniquement sur les plans chers ($49+/mois). Aucun ne se presente comme "API-first" -- ils sont tous "dashboard-first" avec une API en supplement. QR Agent Core peut se differencier radicalement avec un positionnement API-first et developer-first.

4. **Le marche est sature de solutions marketing-centric.** Tous les concurrents ciblent les equipes marketing avec du messaging autour du "branding", "engagement", "campaigns". Le segment developer/builder d'agents AI est completement ignore. Le ton de voix dominant est corporate-marketing, laissant un espace pour un ton technique, developer-friendly.

5. **Les prix sont eleves pour ce que ca offre.** Les plans avec API commencent a $29-49/mois minimum chez les leaders. Un free tier genereux avec API access (ce que personne n'offre) serait un differenciateur massif pour capter les early adopters et les builders d'agents.

---

## Concurrents analyses

### 1. Bitly

- **Site :** https://bitly.com
- **Positionnement :** "The Connections Platform" -- plateforme tout-en-un de gestion de liens, QR codes et landing pages. Se definit comme le "embedded connection layer powering links and QR codes worldwide".
- **Proposition de valeur :** Un seul outil pour creer, gerer et mesurer tous les points de contact digitaux (short links, QR codes, landing pages). Emphasis sur la marque (branded links) et les analytics.
- **Offre et tarifs :**
  - **Free** : $0/mois -- 5 links/mois, 2 QR codes/mois, pas d'API, pas d'integrations
  - **Core** : $10/mois -- liens de base, QR limites
  - **Growth** : $29/mois -- plan le plus populaire, branded links, 10 QR codes personnalisables/mois, analytics avances
  - **Premium** : $199/mois -- fonctionnalites avancees, plus de volume
  - **Enterprise** : Prix sur devis -- SSO, custom domain, SLA
  - API disponible a partir du plan Core ($10/mois) mais avec des limites
- **Messaging :** Ton corporate-professionnel, oriente marketing et marque. Arguments cles : "create, share, and track", "branded connections", "real-time insights". Vocabulaire recurrent : "connections", "engagement", "branded", "scale", "performance".
- **Preuve sociale :** Chiffres impressionnants -- 500,000+ clients dans 190+ pays, 5.7M utilisateurs actifs mensuels, 10 milliards de connexions digitales par mois, $100M+ ARR (2022), la moitie du Fortune 100 comme clients. Enorme credibilite.
- **Differenciateur revendique :** "The most comprehensive MCP for short link and QR Code creation and management". Plateforme tout-en-un qui couvre links + QR + landing pages + analytics. 27 outils MCP. Integrations avec Shopify, Zapier, etc.
- **Audience ciblee :** Equipes marketing, marques, entreprises de toute taille. De plus en plus, les utilisateurs d'AI assistants (Claude, ChatGPT, Cursor).
- **CTA principal :** "Get started for free" / "Sign up free"
- **Forces :**
  - MCP server deja lance et fonctionnel (concurrent direct de QR Agent Core sur ce point)
  - Marque reconnue mondialement, confiance etablie
  - Ecosystem complet (links + QR + pages + analytics)
  - Free tier disponible
  - Integrations avec Claude, ChatGPT, Cursor, VS Code, Windsurf
  - Documentation developer solide (dev.bitly.com)
- **Faiblesses :**
  - Pas specialise QR -- c'est un generaliste du link management
  - Pricing eleve pour acceder aux features QR utiles ($29+/mois)
  - QR codes limites meme sur les plans payants (10 QR/mois sur Growth)
  - MCP couvre trop de choses (links, analytics, org management) -- pas optimise pour l'usage QR specifique
  - Pas de focus "agent AI builder" -- le MCP est un add-on marketing, pas le coeur du produit
  - Lourd et complexe pour quelqu'un qui veut juste des QR codes pour son agent

---

### 2. Uniqode (ex-Beaconstac)

- **Site :** https://www.uniqode.com
- **Positionnement :** "QR Code Management Platform for modern businesses" -- plateforme complete de gestion QR pour les entreprises. Vision : "connect the planet, one unique code at a time" en "breaking through physical and digital barriers".
- **Proposition de valeur :** "Engage and convert offline audiences with branded, dynamic QR codes that connect, captivate, and deliver real-time insights for any use case." Bridge entre le monde physique et digital.
- **Offre et tarifs :**
  - **Starter** : $5/mois (annuel) -- 3 QR dynamiques, 25,000 scans, analytics basiques
  - **Lite** : $15/mois -- 50 QR dynamiques, creation en masse, QR Code Forms
  - **Pro** : $49/mois -- 250 QR dynamiques, GPS tracking, **API access**, personnalisation avancee
  - **Plus** : $99/mois -- 500 codes, 3 users, gestion multi-equipe, custom domain optionnel
  - **Enterprise** : Devis -- Illimite, SSO, white-label, CSM dedie
  - **API disponible uniquement a partir du plan Pro ($49/mois)**
  - Essai gratuit 14 jours sur tous les plans
- **Messaging :** Ton professionnel-corporate, oriente marketing et entreprise. Arguments cles : "dynamic", "branded", "track", "engage", "convert". Vocabulaire recurrent : "offline audiences", "real-time insights", "brand control", "seamless connection". Emphasis sur la securite et la conformite.
- **Preuve sociale :** 50,000+ entreprises clientes. Certifications SOC 2 Type 2, GDPR, HIPAA, ISO 27001. Clients notables : Flipkart (2M+ scans), Rose Marketing. Case studies detailles. Reviews positives sur G2.
- **Differenciateur revendique :** Meilleure API du marche (REST, 6 langages, webhooks, rate limit 1000/h). Securite enterprise (SOC2, HIPAA). Bulk operations via CSV. 15+ types de QR codes (PDF, vCard, Wi-Fi, coupon...). Digital Business Cards integrees.
- **Audience ciblee :** Equipes marketing enterprise, retail, hospitality, real estate. Entreprises qui gerent des campagnes physiques-digitales a grande echelle.
- **CTA principal :** "Start free trial" / "Try for free"
- **Forces :**
  - API la mieux documentee du marche (REST, 6 langages, webhooks)
  - Securite et conformite enterprise (SOC2, HIPAA, GDPR, ISO 27001)
  - Large choix de types de QR (15+)
  - Bulk operations solides
  - Analytics avances avec GPS tracking
  - Digital Business Cards comme second produit
- **Faiblesses :**
  - **Pas de MCP, pas d'integration AI agent**
  - API reservee au plan Pro a $49/mois -- inaccessible pour un developer individuel ou un hobby project
  - Dashboard-centric : tout est pense autour du dashboard, l'API est secondaire
  - Pas de focus developer -- messaging 100% marketing
  - Prix elevee pour un usage API uniquement
  - Pas de free tier avec API
  - Pas de package npm ou d'installation en une commande

---

### 3. QR Code Generator (qr-code-generator.com / Bitly Europe)

- **Site :** https://www.qr-code-generator.com
- **Positionnement :** "Create Your Free QR Codes" -- le leader grand public de la creation de QR codes. Positionne comme l'outil le plus simple et accessible pour creer des QR codes.
- **Proposition de valeur :** Simplicite et accessibilite -- n'importe qui peut creer un QR code en quelques clics. Dashboard intuitif avec analytics et personnalisation.
- **Offre et tarifs :**
  - **Free** : QR codes statiques gratuits, fonctionnalites limitees
  - **Starter** : ~$5/user/mois (annuel) -- QR dynamiques basiques
  - **Advanced** : ~$12.50/2 users/mois (annuel) -- analytics avances, Google Analytics integration
  - **Professional** : ~$37.50/5 users/mois (annuel) -- white labeling, redirection conditionnelle, multi-users, API access
  - API disponible uniquement sur le plan Professional
- **Messaging :** Ton simple, accessible, grand public. Arguments cles : "free", "easy", "create", "customize", "track". Emphasis sur la facilite d'utilisation. Vocabulaire marketing grand public plutot que technique.
- **Preuve sociale :** 10,000,000+ clients dans 190 pays, 5M+ utilisateurs actifs, 10 milliards de clicks/scans par mois. Clients : Elle, Monster, Gap, Sky Media. Acquis par Bitly en 2021 (validation du marche).
- **Differenciateur revendique :** Le plus grand nombre d'utilisateurs, la simplicite ultime, le meilleur rapport qualite/prix pour les non-techniciens. White labeling sur le plan Pro.
- **Audience ciblee :** Grand public, PME, equipes marketing non-techniques, restaurateurs, evenementiel. Tous ceux qui veulent un QR code sans complexite.
- **CTA principal :** "Create QR Code" / "Sign up free"
- **Forces :**
  - Base d'utilisateurs massive (10M+ clients)
  - SEO dominant -- "qr-code-generator.com" est le nom de domaine ideal
  - Interface tres simple et accessible
  - Adosse a Bitly (stabilite financiere)
  - Multiples types de QR codes supportes
  - Plans d'entree abordables ($5/mois)
- **Faiblesses :**
  - **Aucune integration MCP ou AI**
  - API uniquement sur le plan le plus cher
  - Documentation API limitee comparee a Uniqode
  - Pas de focus developer
  - Analytics percus comme limites (feedbacks G2)
  - Pas de bulk creation
  - Grand public = pas adapte aux use cases techniques/agents

---

### 4. QR Tiger (QRTIGER)

- **Site :** https://www.qrcode-tiger.com
- **Positionnement :** "Advanced QR code generator for Enterprise" -- generateur QR avance avec emphasis sur la personnalisation et le branding. "Best QR code generator" (positionnement agressif).
- **Proposition de valeur :** QR codes illimites (statiques et dynamiques) sans limite de scans ni d'expiration. 20+ types de QR codes avec personnalisation poussee (patterns, couleurs, logos, frames).
- **Offre et tarifs :**
  - **Free** : Fonctionnalites limitees
  - **Regular** : $5.40/mois -- basique
  - **Advanced** : $16/mois -- fonctionnalites etendues
  - **Premium** : $37/mois -- API access, analytics avances
  - **Professional** : $89/mois -- API bulk, multi-users, integrations CRM
  - **Enterprise** : Devis -- securite avancee, SSO
  - API disponible a partir du plan Premium ($37/mois)
- **Messaging :** Ton marketing agressif, beaucoup de comparaisons directes avec les concurrents. Arguments cles : "unlimited", "no expiry", "no scan limits", "branded", "enterprise-grade". Vocabulaire : "best", "advanced", "trusted by", "powerful".
- **Preuve sociale :** Clients enterprise : Sephora, TikTok, Lululemon, Universal, Publicis. Reviews positives sur G2. Se presente comme "trusted by" de grandes marques.
- **Differenciateur revendique :** 31 types de QR codes (plus que Uniqode qui en a 24). API avec bulk generation. Integrations CRM. Templates QR personnalisables. Application mobile.
- **Audience ciblee :** Equipes marketing enterprise, agences (Publicis), marques retail (Sephora, Lululemon). Focus sur les campagnes marketing a grande echelle.
- **CTA principal :** "Generate QR code" / "Get started"
- **Forces :**
  - Large variete de types de QR (31 solutions)
  - QR illimites sans expiration ni limite de scans
  - API avec documentation et bulk generation
  - Bons clients enterprise (Sephora, TikTok, Lululemon)
  - Pricing competitif (commence a $5.40/mois)
  - GitHub presence (repo QR code generator)
- **Faiblesses :**
  - **Aucune integration MCP ou AI agent**
  - Messaging agressif et marketing-centric, peut repousser les developers
  - API reservee aux plans $37+/mois
  - Pas de focus developer/API-first
  - Interface chargee, UX criticable
  - Pas de package npm ou d'outil CLI
  - Comparaisons concurrentielles agressives sur le site (peut sembler desperate)

---

### 5. QR.io

- **Site :** https://qr.io
- **Positionnement :** Generateur de QR codes dynamiques avec API pour les developers et les marketeurs. Interface simple et moderne.
- **Proposition de valeur :** Plateforme user-friendly et feature-rich, offrant a la fois une interface manuelle simple et une API capable pour les developers. QR codes dynamiques avec analytics detailles.
- **Offre et tarifs :**
  - **Essai gratuit** : 7 jours avec acces a toutes les fonctionnalites premium
  - **Plan mensuel** : ~$35/mois
  - **Plan annuel** : ~$350/an (~$29/mois)
  - API : 2,000 requetes/mois incluses
  - Pas de free tier permanent
- **Messaging :** Ton clean et moderne, oriente developer mais aussi accessible aux non-techniciens. Arguments cles : "automate", "API", "dynamic", "customize", "track".
- **Preuve sociale :** Moins de preuve sociale que les leaders. Reviews sur G2 et SourceForge. Pas de logos clients majeurs visibles.
- **Differenciateur revendique :** API bien documentee et accessible. Design moderne et propre. Personnalisation avancee (couleurs, patterns, logos). Landing pages dynamiques modifiables apres impression.
- **Audience ciblee :** Mix de developers et de marketeurs. PME qui veulent une API sans la complexite enterprise.
- **CTA principal :** "Start free trial" / "Try for free"
- **Forces :**
  - API relativement accessible avec documentation claire
  - 2,000 requetes API/mois incluses
  - Interface moderne et epuree
  - QR dynamiques avec analytics
  - Essai gratuit de 7 jours
  - JSON API bien structuree (parametres en body JSON)
- **Faiblesses :**
  - **Aucune integration MCP ou AI**
  - Pas de free tier permanent
  - Preuve sociale faible comparee aux leaders
  - Limite a 2,000 requetes API/mois
  - Pas de bulk operations avancees
  - Pas de certifications securite enterprise
  - Marque moins connue
  - Pas de package npm ou d'outil CLI

---

## Matrice comparative

| Critere | QR Agent Core | Bitly | Uniqode | QR Code Generator | QR Tiger | QR.io |
|---------|--------------|-------|---------|-------------------|----------|-------|
| **Positionnement** | QR-as-a-Service pour agents AI | Connections Platform (links + QR + pages) | QR Management Platform pour entreprises | QR code generator grand public | Advanced QR generator pour enterprise | QR dynamique avec API |
| **Pricing** | Free tier + usage-based (a definir) | $0-199/mois (QR limites meme en payant) | $5-99/mois (API a $49+) | $5-37.50/mois (API au max) | $5.40-89/mois (API a $37+) | $35/mois (pas de free tier) |
| **API quality** | API-first, REST + MCP natif | API solide, bien documentee (dev.bitly.com) | Meilleure API (REST, 6 langages, webhooks) | API limitee, plan Pro only | API correcte, bulk, CRM integration | API correcte, 2000 req/mois |
| **MCP support** | Natif, coeur du produit | Oui, 27 outils MCP, Claude/ChatGPT/Cursor | Non | Non | Non | Non |
| **Developer experience** | npm package, install en 1 commande, CLI | MCP server, documentation dev | Documentation API en 6 langages | Minimal | GitHub repo, documentation API | Documentation API JSON |
| **QR dynamiques** | Oui | Oui (limites par plan) | Oui (15+ types) | Oui | Oui (31 types, illimites) | Oui |
| **Analytics** | Scans, timestamps, user agents, referrers | Clicks, locations, devices, channels | GPS tracking, analytics avances | Analytics basiques | Analytics par scan, device, location | Analytics dynamiques |
| **Multi-tenant** | Oui (isolation par API key) | Non (1 compte = 1 espace) | Oui (multi-users, equipes) | Oui (multi-users) | Oui (sub-users) | Non mentionne |
| **Preuve sociale** | Aucune (nouveau produit) | 500K+ clients, Fortune 100, $100M ARR | 50K+ entreprises, SOC2, Flipkart | 10M+ clients, Elle, Gap | Sephora, TikTok, Lululemon | Faible |
| **Differenciateur** | Premier QR service MCP-natif pour agents AI | MCP + ecosystem complet links/QR/pages | API enterprise + securite (SOC2/HIPAA) | Simplicite + base utilisateurs massive | 31 types QR, illimite, pas d'expiry | API accessible, design moderne |
| **CTA** | Get API key | Sign up free | Start free trial | Create QR Code | Generate QR code | Start free trial |
| **Audience** | AI agent builders, developers | Marketing teams, brands, AI users | Enterprise marketing | Grand public, PME | Enterprise marketing, agences | Developers, PME |

---

## Patterns du marche

### Arguments universels (table stakes)

Ce que TOUS les concurrents mettent en avant -- le minimum attendu par le marche :

1. **QR codes dynamiques** -- possibilite de changer la destination sans reimprimer
2. **Personnalisation visuelle** -- couleurs, logos, frames, patterns
3. **Analytics de base** -- nombre de scans, quand, ou, quel device
4. **Multiple types de QR** -- URL, vCard, PDF, Wi-Fi, etc.
5. **API REST** -- au moins une API basique pour la generation programmatique
6. **Dashboard de gestion** -- interface web pour creer et gerer les QR codes
7. **Support multi-users** -- collaboration en equipe (sur les plans premium)

### Positionnements satures

Les angles marketing ou tout le monde se bat -- difficile de se demarquer :

1. **"Best QR code generator"** -- Tous les concurrents rivalisent sur ce terrain. QR Tiger va jusqu'a mettre "Best" dans son meta title.
2. **"Branded/customized QR codes"** -- La personnalisation visuelle est devenue un commodity. Couleurs, logos, frames... tout le monde le fait.
3. **"Enterprise-grade security"** -- Uniqode, Bitly et QR Tiger se battent sur SOC2, GDPR, SSO.
4. **"Marketing campaigns + analytics"** -- 100% des concurrents ciblent les equipes marketing avec le meme vocabulaire (engagement, conversion, campaigns).
5. **"Easy to use / simple"** -- Tous revendiquent la simplicite, c'est devenu invisible.

### Espaces vacants

Positionnements, segments ou arguments que personne n'occupe :

1. **"QR infrastructure pour agents AI"** -- PERSONNE ne se positionne sur ce creneau. Bitly a un MCP mais le positionne comme un add-on, pas comme son identite.
2. **"API-first QR service"** -- Tous sont dashboard-first. Aucun ne dit "pas besoin de dashboard, tout se fait par API/CLI".
3. **"Developer-first pricing"** -- Aucun free tier n'offre un acces API. Le meilleur free tier (Bitly) limite a 2 QR/mois sans API.
4. **"Multi-tenant QR isolation"** -- Aucun concurrent ne met en avant l'isolation par API key pour des agents qui gerent plusieurs clients.
5. **"Install en une commande"** -- Personne ne propose un `npx` ou un `npm install` pour commencer en 30 secondes.
6. **"Lightweight / minimal dependencies"** -- Les concurrents sont tous des plateformes lourdes. Personne ne revendique la legerete.
7. **"Open source QR backend"** -- Aucun concurrent n'est open source (code visible sur GitHub).
8. **"Natural language QR management"** -- Bitly s'en rapproche avec son MCP, mais ne le positionne pas clairement comme "manage QR codes in natural language".
9. **"Pay-per-scan / pay-per-QR"** -- Tous les concurrents vendent des abonnements mensuels avec des limites arbitraires. Aucun ne propose un vrai usage-based pricing transparent.

---

## Opportunites de differenciation

### 1. Positionnement : "The QR code service built for AI agents"

Aucun concurrent ne revendique ce positionnement. Meme Bitly (le plus proche) se positionne comme "connections platform" avec un MCP en add-on. QR Agent Core doit s'ancrer fermement comme **le premier et le seul service QR concu nativement pour les agents AI**. Ce n'est pas un generateur QR avec un MCP ajoute apres coup -- c'est un service QR pense MCP-first.

**Messaging suggere :** "Your AI agent's QR code toolkit" ou "QR codes that your AI agent can create, edit, and track -- in natural language."

### 2. Angle developer-first vs marketing-first

Tous les concurrents parlent a des marketeurs. QR Agent Core parle a des **builders** -- des gens qui construisent des agents, des automatisations, des workflows. Le ton doit etre technique, concis, avec du code, pas des screenshots de dashboards.

**Concretement :**
- Mettre du code sur la landing page (pas des mockups de QR codes)
- Montrer un prompt Claude qui cree un QR code en 1 message
- Remplacer "Start free trial" par "Get your API key" ou "npx qr-for-agent"

### 3. Free tier avec API access

C'est le differenciateur pricing le plus fort. Aucun concurrent n'offre d'API dans son free tier. Bitly limite a 2 QR/mois sans API. Uniqode demande $49/mois pour l'API.

**Recommandation :** Free tier genereux (ex: 50 QR dynamiques, 10,000 scans/mois, API + MCP illimites). Les developers adoptent d'abord, paient ensuite quand leur agent scale.

### 4. One-command install

`npx qr-for-agent` est un avantage competitif enorme. Aucun concurrent ne propose ca. Bitly demande de configurer OAuth ou une API key manuellement. Uniqode demande de lire une documentation API en 6 langages.

**Recommandation :** Mettre l'install en une commande comme hero element de la landing page. "Add QR codes to your agent in 30 seconds."

### 5. Contrer Bitly specifiquement

Bitly est le concurrent le plus dangereux (MCP existant, marque forte). La strategie contre Bitly :

- **Specialisation vs generalisme** : "Bitly does everything. We do QR codes -- perfectly." QR Agent Core est un outil specialise, pas une plateforme de link management.
- **Pricing** : Bitly facture $29/mois pour 10 QR codes. QR Agent Core offre beaucoup plus dans son free tier.
- **Simplicite** : Le MCP Bitly a 27 outils (links, analytics, org management...). QR Agent Core a quelques outils QR focuses. Moins de bruit, plus de precision.
- **Open source** : Le code est sur GitHub. Bitly est closed-source.
- **Multi-tenant** : QR Agent Core isole par API key. Bitly non.

### 6. Open source comme differenciateur de confiance

Aucun concurrent n'est open source. C'est un argument de confiance fort pour les developers : "See exactly what runs behind your QR codes." Ca permet aussi la contribution communautaire et le self-hosting.

### 7. Usage-based pricing transparent

Tous les concurrents vendent des abonnements avec des limites arbitraires (X QR codes/mois, Y scans/mois). Un pricing usage-based transparent (pay per QR created, pay per scan tracked) serait unique sur le marche et parfaitement adapte a la nature on-demand des agents AI.

---

## Synthese strategique

### Positionnement recommande pour QR Agent Core :

> **"The first QR code service built for AI agents."**
>
> API-first. MCP-native. One command to install. Free to start.

### Les 3 batailles a gagner :

| Bataille | Contre qui | Comment gagner |
|----------|-----------|----------------|
| MCP/AI-native | Bitly | Specialisation QR vs generalisme. Free tier. Simplicite. Open source. |
| API-first | Uniqode, QR Tiger | Free tier avec API. npm package. Developer docs. Pas de dashboard obligatoire. |
| Pricing | Tous | Free tier genereux. Usage-based. Pas de limites arbitraires. |

### Ce que QR Agent Core ne doit PAS faire :

- Se battre sur la personnalisation visuelle (couleurs, logos, frames) -- c'est un commodity
- Se battre sur le nombre de types de QR (31 types chez QR Tiger) -- les agents ont besoin d'URL QR codes, pas de vCard QR
- Se battre sur la preuve sociale enterprise -- c'est trop tot
- Cibler les equipes marketing grand public -- c'est le terrain des 5 concurrents

---

## Sources

### Sites des concurrents
- [Bitly](https://bitly.com)
- [Bitly Pricing](https://bitly.com/pages/pricing)
- [Bitly MCP Server](https://bitly.com/pages/marketplace/bitly-model-context-protocol-mcp)
- [Bitly MCP Announcement](https://bitly.com/blog/bitly-mcp-announcement/)
- [Bitly MCP Tools Reference](https://dev.bitly.com/bitly-mcp/using-the-bitly-mcp-server/mcp-tools-reference/)
- [Bitly on Claude](https://claude.com/connectors/bitly)
- [Bitly 2026 Press Release](https://bitly.com/pages/resources/press/bitly-connection-layer-links-qr-codes-2026/)
- [Uniqode](https://www.uniqode.com)
- [Uniqode Pricing](https://www.uniqode.com/pricing)
- [Uniqode API Documentation](https://docs.uniqode.com/en/articles/6725065-introduction-to-uniqode-s-qr-code-api)
- [QR Code Generator](https://www.qr-code-generator.com)
- [QR Code Generator Pricing](https://www.qr-code-generator.com/pricing/)
- [QR Code Generator About (Bitly Europe)](https://www.qr-code-generator.com/about/)
- [QR Tiger](https://www.qrcode-tiger.com)
- [QR Tiger Enterprise](https://enterprise.qrcode-tiger.com/)
- [QR Tiger API Documentation](https://www.qrcode-tiger.com/api-documentation)
- [QR.io](https://qr.io)
- [QR.io API Documentation](https://qr.io/api-documentation)
- [QR.io Pricing](https://qr.io/pricing)

### Articles et comparatifs
- [Best QR Code API Platforms: Developer-Friendly Generators 2026 (Nerdbot)](https://nerdbot.com/2025/11/26/best-qr-code-api-platforms-developer-friendly-generators-2026/)
- [12 Best QR Code API Platforms for Developers (ShortPen)](https://shortpen.com/qr-code-api/)
- [How Much Do QR Codes Cost in 2026 (Scanova)](https://scanova.io/blog/qr-codes-cost-guide/)
- [7 Best QR Code Generator Platforms for 2026 (ShortPen)](https://shortpen.com/best-qr-code-generator/)
- [Uniqode Review 2025 (TodayTesting)](https://todaytesting.com/uniqode-review/)
- [Uniqode Platform Analysis 2026 (ProgrammingInsider)](https://programminginsider.com/uniqode-platform-analysis-complete-business-features-review-2026/)
- [Beaconstac becomes Uniqode (PR Newswire)](https://www.prnewswire.com/news-releases/beaconstac-becomes-uniqode-with-a-vision-to-unite-the-physical-and-digital-worlds-302030890.html)

### Directories et ecosysteme MCP
- [MCP Official Servers (GitHub)](https://github.com/modelcontextprotocol/servers)
- [MCP Server Finder](https://www.mcpserverfinder.com/)
- [MCP Directory](https://directorymcp.com/)

### Reviews et evaluations
- [Uniqode on G2](https://www.g2.com/products/uniqode/pricing)
- [QR Tiger on G2](https://www.g2.com/products/qr-tiger/reviews)
- [QR Code Generator Pro vs Uniqode on G2](https://www.g2.com/compare/qr-code-generator-pro-vs-uniqode-formerly-beaconstac)
- [QR.io on G2](https://www.g2.com/products/qr-io/pricing)
- [Bitly on G2](https://www.g2.com/products/bitly/pricing)
