# Docs Page -- QR for Agent

## SEO

- **Meta title:** QR Code API Documentation -- QR for Agent
- **Meta description:** API reference, MCP setup, and curl examples for QR for Agent. Create dynamic QR codes in 30 seconds with REST or MCP.
- **H1:** QR for Agent Documentation
- **Target keywords:** QR code API documentation, MCP server setup, QR code API reference

---

## Section 1: Quick Start
### Intention
Get the developer from zero to a working QR code in 30 seconds. No preamble, no theory. Install, configure, create. The code IS the documentation.
### Content
**Title (H1):** QR for Agent Documentation

**Subtitle:** Everything you need to create, update, and track dynamic QR codes -- via MCP or REST API.

**Title (H2):** Quick Start

**Body:**

From zero to your first QR code in 30 seconds.

**Step 1 -- Install the MCP server**

```bash
npx qr-for-agent
```

Works with Claude Desktop, Cursor, and any MCP-compatible client.

**Step 2 -- Get your API key**

[Get Your API Key](#get-started)

Your key follows the format `qr_` + 32-character random string. Keep it in your environment variables.

**Step 3 -- Create your first QR code**

Ask your agent:

```
Create a dynamic QR code for https://example.com
```

Or call the REST API directly:

```bash
curl -X POST https://api.qragentcore.com/api/qr \
  -H "Content-Type: application/json" \
  -H "X-API-Key: qr_YOUR_KEY_HERE" \
  -d '{"target_url": "https://example.com", "label": "My first QR"}'
```

Response:

```json
{
  "id": 1,
  "short_id": "wkQ5W-fm",
  "short_url": "https://api.qragentcore.com/r/wkQ5W-fm",
  "target_url": "https://example.com",
  "label": "My first QR",
  "format": "svg",
  "image_data": "<svg>...</svg>",
  "created_at": "2026-02-24T10:00:00.000Z"
}
```

That's it. One command, one API call, one QR code. The short URL redirects to your target -- and you can change the target later without regenerating the image.

### Notes visuelles
Terminal-style rendering for all code blocks (dark background, monospace). The three steps should be visually numbered (large step numbers). The curl command and JSON response should be displayed in a split or stacked code block pair. Consider a "copy" button on each code block.

---

## Section 2: MCP Setup
### Intention
Give exact, copy-pasteable JSON configurations for the two most popular MCP clients. No ambiguity, no guesswork. "It just works -- users avoid editing JSON config files, hunting for Python paths, and debugging environment variables."
### Content
**Title (H2):** MCP Setup

**Body:**

QR for Agent ships as a standalone MCP server on npm. One package, 6 tools, 3 dependencies.

### Claude Desktop

Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "qr-for-agent": {
      "command": "npx",
      "args": ["-y", "qr-for-agent"],
      "env": {
        "API_KEY": "your-api-key",
        "BASE_URL": "https://api.qragentcore.com"
      }
    }
  }
}
```

Restart Claude Desktop. Your agent now has 6 QR code tools available.

### Cursor

Add to `.cursor/mcp.json` in your project root:

```json
{
  "mcpServers": {
    "qr-for-agent": {
      "command": "npx",
      "args": ["-y", "qr-for-agent"],
      "env": {
        "API_KEY": "your-api-key",
        "BASE_URL": "https://api.qragentcore.com"
      }
    }
  }
}
```

Reload the window. The tools appear in Cursor's MCP panel.

### Any MCP client

The server runs via `npx qr-for-agent` and communicates over stdio. Any client that supports the MCP standard can use it. Set `API_KEY` and `BASE_URL` as environment variables.

### Notes visuelles
Two side-by-side cards: "Claude Desktop" and "Cursor", each with its JSON config in a code block. Below, a smaller "Any MCP client" block. Use tabs or a toggle if the design supports it. "Copy" button on every JSON block.

---

## Section 3: API Reference
### Intention
Complete REST API reference. Every endpoint, every method, with curl examples for the most common operations. Developers evaluate APIs by their docs -- "quality of the documentation" is a top decision criterion for this audience.
### Content
**Title (H2):** API Reference

**Body:**

All `/api/*` endpoints require an `X-API-Key` header. Public endpoints (`/r/*`, `/i/*`) don't require auth.

### QR Code Endpoints

| Method | Path | Description | Auth |
|--------|------|-------------|------|
| `POST` | `/api/qr` | Create a new dynamic QR code | Yes |
| `GET` | `/api/qr` | List all QR codes (paginated) | Yes |
| `GET` | `/api/qr/:shortId` | Get QR code details | Yes |
| `PATCH` | `/api/qr/:shortId` | Update target URL or label | Yes |
| `DELETE` | `/api/qr/:shortId` | Delete QR code and analytics | Yes |
| `GET` | `/api/qr/:shortId/image` | Download QR image | Yes |

### Analytics Endpoint

| Method | Path | Description | Auth |
|--------|------|-------------|------|
| `GET` | `/api/analytics/:shortId` | Scan count and recent events | Yes |

### Public Endpoints

| Method | Path | Description | Auth |
|--------|------|-------------|------|
| `GET` | `/r/:shortId` | Redirect to target URL (records scan) | No |
| `GET` | `/i/:shortId` | Serve QR image (cacheable) | No |
| `GET` | `/health` | Health check | No |
| `GET` | `/documentation` | Swagger UI (OpenAPI docs) | No |

### POST /api/qr -- Create a QR code

**Request body:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `target_url` | string | Yes | -- | The destination URL. Must be a fully-qualified absolute URL. |
| `label` | string | No | `null` | A human-readable label for organizing QR codes. |
| `format` | string | No | `"svg"` | Image format: `"svg"` (recommended) or `"png"`. |

```bash
curl -X POST https://api.qragentcore.com/api/qr \
  -H "Content-Type: application/json" \
  -H "X-API-Key: qr_YOUR_KEY" \
  -d '{
    "target_url": "https://conf.example.com/2026",
    "label": "Conference landing page",
    "format": "svg"
  }'
```

**Response (201):**

```json
{
  "id": 1,
  "short_id": "wkQ5W-fm",
  "short_url": "https://api.qragentcore.com/r/wkQ5W-fm",
  "target_url": "https://conf.example.com/2026",
  "label": "Conference landing page",
  "format": "svg",
  "image_data": "<svg>...</svg>",
  "created_at": "2026-02-24T10:00:00.000Z"
}
```

### PATCH /api/qr/:shortId -- Update destination

The QR image stays the same. Only the redirect target changes. This is the core dynamic link feature.

```bash
curl -X PATCH https://api.qragentcore.com/api/qr/wkQ5W-fm \
  -H "Content-Type: application/json" \
  -H "X-API-Key: qr_YOUR_KEY" \
  -d '{"target_url": "https://new-destination.com"}'
```

### GET /api/qr -- List QR codes

**Query parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `limit` | integer | `20` | Max results (1-100). |
| `offset` | integer | `0` | Number of records to skip. |

```bash
curl https://api.qragentcore.com/api/qr?limit=10&offset=0 \
  -H "X-API-Key: qr_YOUR_KEY"
```

### GET /api/analytics/:shortId -- Scan analytics

Returns total scan count and the 50 most recent scan events.

```bash
curl https://api.qragentcore.com/api/analytics/wkQ5W-fm \
  -H "X-API-Key: qr_YOUR_KEY"
```

**Response:**

```json
{
  "short_id": "wkQ5W-fm",
  "total_scans": 142,
  "recent_scans": [
    {
      "scanned_at": "2026-02-24T14:32:00.000Z",
      "user_agent": "Mozilla/5.0 ...",
      "referer": null
    }
  ]
}
```

### DELETE /api/qr/:shortId -- Delete a QR code

Permanently removes the QR code and all associated scan analytics. The short URL stops working immediately. This cannot be undone.

```bash
curl -X DELETE https://api.qragentcore.com/api/qr/wkQ5W-fm \
  -H "X-API-Key: qr_YOUR_KEY"
```

### Authentication

All `/api/*` endpoints require an `X-API-Key` header.

- **Format:** `qr_` + 32-character random string
- **Multi-tenant:** each API key only sees its own QR codes
- **Isolation:** no data leaks between API keys -- build agents for multiple clients safely

### Notes visuelles
Endpoint tables should be styled with monospace font for paths and methods. Each detailed endpoint section (POST, PATCH, GET, DELETE) should be a collapsible/expandable block or clearly separated card. Code blocks with "copy" buttons. Consider syntax highlighting for curl commands and JSON.

---

## Section 4: MCP Tools
### Intention
Document every MCP tool with its exact parameters. Developers evaluating MCP servers check tool count and parameter schemas. 6 tools, clearly documented -- no bloat, no ambiguity. Addresses the "context windows filling up with tool definitions" concern directly.
### Content
**Title (H2):** MCP Tools

**Body:**

6 tools. That's it. No context bloat, no "too many tools" problem. Each tool maps 1:1 to a REST endpoint.

| Tool | Parameters | Description |
|------|-----------|-------------|
| `create_qr_code` | `target_url` (string, required), `label` (string, optional), `format` ("svg" or "png", default "svg") | Create a new dynamic QR code. Returns the QR image and short URL. |
| `get_qr_code` | `short_id` (string, required) | Retrieve details and metadata for an existing QR code. |
| `update_qr_destination` | `short_id` (string, required), `target_url` (string, required), `label` (string, optional) | Change where a QR code redirects without regenerating the image. |
| `list_qr_codes` | `limit` (number, default 20), `offset` (number, default 0) | List all QR codes with pagination. |
| `delete_qr_code` | `short_id` (string, required) | Permanently delete a QR code and its scan analytics. |
| `get_qr_analytics` | `short_id` (string, required) | Get total scan count and recent scan events with timestamps. |

### Tool details

**create_qr_code**

Creates a new managed QR code. The QR code points to a short URL that redirects to your target URL. You can change the target URL later without regenerating the QR image. Returns the QR image data (SVG or PNG) and the short URL.

**update_qr_destination**

This is the key "dynamic link" feature: the QR image stays the same, but scanning it goes to the new URL. Use it to update campaigns, fix broken links, or A/B test landing pages.

**get_qr_analytics**

Returns aggregated scan statistics and recent scan events. Your agent can pull analytics and adjust campaigns without opening a dashboard.

### Notes visuelles
The tools table should use monospace font for tool names and parameter names. Consider expandable rows for the detailed descriptions. The "6 tools" headline could be a visual callout (large number + supporting text).

---

## Section 5: Environment Variables
### Intention
Quick reference for configuration. Two variables for the MCP server, five for self-hosting. No guessing.
### Content
**Title (H2):** Environment Variables

**Body:**

### MCP Server (qr-for-agent)

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `API_KEY` | Yes | -- | Your QR for Agent API key. Format: `qr_` + 32 chars. |
| `BASE_URL` | No | `http://localhost:3100` | The URL of your QR for Agent instance. Use `https://api.qragentcore.com` for the hosted service. |

### Self-Hosted Server

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `PORT` | No | `3100` | HTTP port. |
| `HOST` | No | `0.0.0.0` | Bind address. |
| `BASE_URL` | No | `http://localhost:3100` | Public URL used in generated short URLs. Set this to your domain. |
| `DATABASE_URL` | No | `./data/qr-agent.db` | SQLite file path. |
| `SHORT_ID_LENGTH` | No | `8` | Length of generated short IDs. |

### Notes visuelles
Two distinct tables, clearly labeled. Variable names in monospace. Consider color-coding required vs optional variables. Keep this section compact -- it's a reference, not a tutorial.

---

## Section 6: Self-Hosting
### Intention
Show that self-hosting is real, not just a marketing claim. Docker compose and Railway -- exact commands. Address the "why not just self-host?" objection by making it dead simple.
### Content
**Title (H2):** Self-Hosting

**Body:**

QR for Agent is open source and MIT-licensed. Run it on your own infrastructure or use the hosted service. Your call.

### Docker

```bash
git clone https://github.com/benswel/qr-agent-core.git
cd qr-agent-core
docker compose up -d
```

The database is persisted in a Docker volume. Your server runs at `http://localhost:3100`.

On first startup, an API key is auto-generated and printed to the console. Use `docker compose logs` to retrieve it.

**docker-compose.yml:**

```yaml
services:
  qr-agent-core:
    build: .
    ports:
      - "3100:3100"
    volumes:
      - qr-data:/app/data
    environment:
      - PORT=3100
      - HOST=0.0.0.0
      - BASE_URL=https://your-domain.com
      - DATABASE_URL=/app/data/qr-agent.db
    restart: unless-stopped

volumes:
  qr-data:
```

### Railway

The project includes `railway.toml` and a multi-stage `Dockerfile`. Deploy in three steps:

1. Fork the repo on GitHub
2. Connect it to Railway
3. Railway builds and deploys automatically with health checks on `/health`

Set `BASE_URL` to your Railway domain in the environment variables.

### Without Docker

```bash
git clone https://github.com/benswel/qr-agent-core.git
cd qr-agent-core
npm install
npm run dev
```

On first startup, an API key is auto-generated and printed to the console.

**Managing API keys:**

```bash
npm run key:create "my-label"   # Create a new API key
npm run key:list                 # List all API keys
```

Teams keep rebuilding small but critical utilities -- QR codes, short URLs, tokens -- over and over again. We built it once, correctly, and opened the source.

**CTA:** [View on GitHub](https://github.com/benswel/qr-agent-core)

### Notes visuelles
Two or three tabbed sections: "Docker", "Railway", "Manual". Each tab shows only the relevant commands. The docker-compose.yml should be displayed in a full-width code block. The GitHub CTA at the bottom should be a prominent button. Consider a subtle GitHub repo card showing stars, language (TypeScript), and license (MIT).

---

## Section 7: CTA
### Intention
Close the page. One clear action. Reinforce that this is an open source project with a free tier.
### Content
**Title (H2):** Start building

**Body:**

Free tier. Full API access. No credit card.

```bash
npx qr-for-agent
```

**CTA primary:** [Get Your API Key](#get-started)
**CTA secondary:** [View on GitHub](https://github.com/benswel/qr-agent-core)

Questions? Open an issue on [GitHub](https://github.com/benswel/qr-agent-core/issues) or check the [OpenAPI docs](https://api.qragentcore.com/documentation) (Swagger UI).

### Notes visuelles
Full-width section with dark background. Terminal snippet centered. Two buttons side by side (primary filled, secondary outlined). Mirrors the hero section of the homepage for visual consistency. Keep it minimal -- no new information, just conviction.

---

## Internal Links Checklist
- [x] / (home) -- referenced implicitly through navigation; no in-body link needed (header handles it)
- [x] /pricing -- linked in Section 3 could be added; deferred to navigation for now since docs is a reference page
- [x] GitHub repo -- linked in Section 6 (Self-Hosting) and Section 7 (CTA)
- [x] #get-started -- linked in Section 1 (Quick Start) and Section 7 (CTA)

## Verbatims Used
1. "It just works -- users avoid editing JSON config files, hunting for Python paths, and debugging environment variables." -- MCPB review (Section 2: MCP Setup, contextual reference)
2. "Teams keep rebuilding small but critical utilities -- QR codes, short URLs, tokens -- over and over again." -- DEV Community (Section 6: Self-Hosting)

## Word Count
Approximately 1,400 words (body copy, excluding code snippets, tables, and JSON examples).
