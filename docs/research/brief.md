# Brief Client — QR Agent Core

## Contexte
- **Secteur :** SaaS / Developer tools / AI infrastructure
- **Marché géographique :** International (site en anglais)
- **Site actuel :** Aucun (landing page à créer)
- **Objectif du site :** Générer des sign-ups (obtenir une API key)
- **Repo :** https://github.com/benswel/qr-agent-core

## Business

### Offre
QR-as-a-Service infrastructure pour agents AI. Service cloud (hébergé sur Railway) qui permet de :
- Créer des QR codes dynamiques via API REST ou MCP
- Modifier la destination d'un QR code sans changer l'image
- Tracker les scans (analytics : timestamps, user agents, referrers)
- Intégrer directement dans des agents AI via le protocole MCP

Package npm publié : `qr-for-agent` — installable en une commande (`npx qr-for-agent`), compatible Claude Desktop, Cursor, et tout client MCP.

**Pricing :** À l'usage (modèle pas encore 100% défini). Probablement un free tier + plans payants.

**Dashboard :** Prévu mais pas encore construit. Actuellement API key seulement.

### Proposition de valeur
Le premier service de QR codes conçu pour les agents AI. Un agent peut créer, modifier et tracker des QR codes en langage naturel via MCP — sans code HTTP, sans dashboard, sans friction.

### Différenciateur
- **MCP-native** — les concurrents (Bitly, QR Code Generator, Beaconstac) n'ont aucune intégration MCP. QR Agent Core est le seul qui permet à un agent AI de gérer des QR codes comme un outil natif.
- **API-first** — pas de dashboard obligatoire, tout se fait par API
- **Multi-tenant isolé** — chaque API key a son propre espace, adapté pour des agents qui gèrent plusieurs clients
- **Léger** — SQLite, 3 dépendances pour le MCP server, déploiement en un clic

## Cible

### Client idéal
Créateurs d'agents AI — développeurs et entrepreneurs qui construisent des agents/assistants avec Claude, GPT, ou d'autres LLMs. Ils cherchent des "tools" que leurs agents peuvent appeler pour accomplir des actions concrètes dans le monde réel.

Profil type :
- Utilise Claude Desktop, Cursor, ou un framework d'agents (LangChain, CrewAI, etc.)
- Construit des agents pour le marketing, la gestion de campagnes, ou l'automatisation business
- Technique (sait ce qu'est une API) mais cherche la facilité d'intégration
- Early adopter, curieux des nouveaux outils AI

### Problème principal
Les agents AI ne peuvent pas facilement interagir avec le monde physique. Quand un agent doit créer un QR code pour une campagne, un event, ou un menu de restaurant, il n'a pas d'outil natif pour le faire. Il faut passer par des APIs tierces complexes sans intégration MCP.

### Parcours d'achat
1. Découverte : recherche "MCP tools", "QR code MCP", ou "QR code API for AI agents"
2. Évaluation : lit le README, essaye `npx qr-for-agent`
3. Adoption : obtient une API key, configure son agent
4. Expansion : augmente l'usage, passe au plan payant

## Analyse du site existant
Pas de site existant. Le README GitHub sert actuellement de documentation unique.

## Concurrents identifiés
- **QR Code Generator** (qr-code-generator.com) — leader grand public, pas d'API agent
- **Beaconstac** (beaconstac.com) — QR dynamiques pour entreprises, pricing élevé
- **Uniqode** (uniqode.com) — QR codes marketing, dashboard-centric
- **Bitly** (bitly.com) — short links + QR, pas de MCP
- Aucun concurrent n'offre d'intégration MCP ni de "QR-for-agents"

## Questions ouvertes
- Pricing exact (free tier limits, prix par QR ou par scan ?)
- Timeline du dashboard utilisateur
- Self-hosted vs cloud-only ? (le projet est open source sur GitHub)
- Quels agents/frameworks cibler en priorité dans le messaging ?
