# Homepage — QR for Agent

## SEO

- **Meta title:** QR Code MCP Server for AI Agents — QR for Agent
- **Meta description:** Give your AI agent the power to create, update, and track dynamic QR codes. MCP-native. One command to install. Open source.
- **H1:** The first QR code MCP server built for AI agents
- **Target keywords:** QR code MCP, QR code AI agent, dynamic QR code API

---

## Section 1: Hero
### Intention
Establish what QR for Agent is, who it's for, and give the visitor a way to try it in 30 seconds. The code snippet IS the pitch.
### Content
**Title (H1):** The first QR code MCP server built for AI agents

**Subtitle:** Your AI agent can write code, send emails, and manage projects. Now it can create, update, and track dynamic QR codes too. One command. No dashboard. No bloat.

**Code snippet:**
```bash
npx qr-for-agent
```

**Supporting line:** 30 seconds from install to your first QR code.

**CTA primary:** Get Your API Key → #get-started
**CTA secondary:** View on GitHub → https://github.com/benswel/qr-agent-core
### Notes visuelles
Full-width hero with dark background. The terminal snippet is the visual centerpiece -- render it as a real terminal window (dark theme, monospace font). No illustrations, no stock photos. The code speaks for itself. Below the terminal: two buttons side by side (primary filled, secondary outlined).

---

## Section 2: Demo
### Intention
Show -- don't tell -- what happens when an AI agent uses QR for Agent. A real prompt-to-result flow that makes the value instantly tangible.
### Content
**Title (H2):** See it in action

**Subtitle:** Ask your agent to create a QR code. It does.

**Demo flow:**

*Prompt:*
```
Create a dynamic QR code for our event page at
https://conf.example.com/2026 and give me the scan tracking URL.
```

*Agent response (JSON):*
```json
{
  "id": "qr_8x7k2m",
  "type": "dynamic",
  "target_url": "https://conf.example.com/2026",
  "qr_code_url": "https://api.qragentcore.com/qr/qr_8x7k2m.png",
  "scan_tracking": "https://api.qragentcore.com/qr/qr_8x7k2m/scans",
  "created_at": "2026-02-24T10:30:00Z"
}
```

**Body:** Your agent calls the MCP tools in natural language. No SDK to learn. No multiple API calls to chain. One prompt, one QR code -- dynamic, trackable, and updatable without changing the image.

**CTA:** Read the Docs → /docs
### Notes visuelles
Split layout: left side shows a chat-style prompt bubble (Claude or generic agent UI), right side shows the JSON response in a code block. Subtle animation: the response appears after the prompt, simulating a real interaction. Keep it minimal -- the data IS the demo.

---

## Section 3: How It Works
### Intention
Remove friction. Show the three steps between "I found this" and "my agent creates QR codes." Keep it dead simple.
### Content
**Title (H2):** Three steps. That's it.

**Step 1 -- Install**
```bash
npx qr-for-agent
```
Works with Claude Desktop, Cursor, and any MCP-compatible client. No config files. No Python paths. No environment variable debugging.

**Step 2 -- Configure**
Add your API key:
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

**Step 3 -- Create**
Your agent now has 6 QR code tools. Ask it to create, read, update, list, delete, or track scans on dynamic QR codes -- in plain language.

**CTA:** Get Your API Key → #get-started
### Notes visuelles
Three columns (or stacked on mobile). Each step has a number, a bold label, and a code block. Minimal text around the code. The visual hierarchy is: number > code > explanation. No icons needed -- the terminal commands are the icons.

---

## Section 4: Features
### Intention
Detail what the product does. Lead with the MCP-native angle, then cover the technical specs that matter to developers evaluating tools.
### Content
**Title (H2):** Built for AI agents. Not retrofitted.

**Subtitle:** Most QR code services bolt on an API as an afterthought. QR for Agent is MCP-native from line one.

**6 MCP Tools**
Your agent gets exactly 6 tools -- no more, no less:
- **create_qr_code** -- Generate a dynamic QR code with a target URL
- **get_qr_code** -- Retrieve details and metadata for any QR code
- **update_qr_destination** -- Change the destination URL without reprinting
- **list_qr_codes** -- List all QR codes under an API key
- **delete_qr_code** -- Remove a QR code permanently
- **get_qr_analytics** -- Get scan count, timestamps, and referrer data

6 tools. 3 dependencies. 5 kB package. Your context window stays clean.

**Dynamic QR Codes**
Update where a QR code points after it's printed. No new image needed. Your agent handles it with a single prompt.

**Scan Analytics**
Track every scan: count, timestamp, referrer. Your agent can pull analytics and adjust campaigns in real time.

**Multi-Tenant Isolation**
One API key per client. Build agents for multiple customers without data leaking between them. Agencies and consultants: this is for you.

**REST API + MCP**
Not using MCP? The full REST API works standalone. Every MCP tool maps 1:1 to an HTTP endpoint. Use whichever protocol fits your stack.

**Lightweight by Design**
The "too many tools" problem is real -- "context windows filling up with tool definitions, loading 50 tools meant burning 100K+ tokens before the conversation started." QR for Agent ships 6 tools at 5 kB. Your agent keeps its focus.

**CTA:** Read the Docs → /docs
### Notes visuelles
Grid layout: 6 feature cards (2x3 or 3x2). Each card has a bold title and 2-3 lines of text. The "6 MCP Tools" section could use a small code-style list. No feature icons -- keep it text-forward. Consider a subtle monospace font for the tool names.

---

## Section 5: Comparison
### Intention
Position QR for Agent against the status quo without naming competitors directly. Use data from the research to make the contrast undeniable.
### Content
**Title (H2):** QR for Agent vs. traditional QR code services

**Subtitle:** "Most QR code APIs are either overpriced, overcomplicated, or require using their hosted dashboard." Here's how we compare.

| Feature | Traditional QR Services | QR for Agent |
|---------|------------------------|---------------|
| MCP integration | None (or via Zapier) | Native -- 6 dedicated tools |
| Installation | Read 6 pages of docs, configure OAuth | `npx qr-for-agent` |
| API access | Pro plans only ($49+/month) | Free tier includes full API |
| QR codes after trial | Deactivated without warning | Your QR codes never expire silently |
| Context footprint | 27+ tools, 60K tokens burned | 6 tools, 5 kB total |
| Source code | Closed | Open source on GitHub |
| Dashboard required | Yes | No. API-first. |
| Pricing | "Contact Sales" or bait-and-switch | Free to start. Transparent. See [pricing](/pricing). |

**CTA:** View pricing → /pricing
### Notes visuelles
Full-width comparison table. QR for Agent column highlighted (subtle brand color background). Checkmarks and crosses are fine here but keep it typographic (use text, not emoji). On mobile, consider a stacked card format instead of a table.

---

## Section 6: Use Cases
### Intention
Make the abstract concrete. Show AI agent builders exactly what their agent can do with QR codes in real scenarios.
### Content
**Title (H2):** What your agent builds with QR codes

**Subtitle:** AI agents are no longer just answering questions. They deploy apps, run workflows, and now -- they create real-world objects.

**Use Case 1 -- Marketing Campaigns**
Your agent generates a unique dynamic QR code for each campaign, tracks scan analytics daily, and updates the destination URL when the landing page changes. No manual dashboard work. No broken links on printed flyers.

**Use Case 2 -- Event Management**
"Create a QR code for the conference registration page." Done. Venue changes? Your agent updates the URL. After the event, it pulls scan data to measure attendance conversion.

**Use Case 3 -- Restaurant Menus**
Generate a QR code per location. When the menu changes, your agent updates the link -- the printed QR on the table stays the same. Multi-tenant isolation keeps each restaurant's data separate.

**Use Case 4 -- Business Cards & Collateral**
Your agent creates a dynamic QR code that points to a vCard or portfolio. When the contact changes jobs, update the destination. The printed card still works.

**CTA:** Read the Docs → /docs
### Notes visuelles
Four cards in a 2x2 grid. Each card has a bold title and a short paragraph. No illustrations -- keep it text-driven. Consider a subtle terminal-style callout for the "agent prompt" in each use case (e.g., the event management example).

---

## Section 7: Open Source
### Intention
Build trust. For developers, open source is not a feature -- it's a prerequisite. Address the "will this last?" objection head-on.
### Content
**Title (H2):** Open source. No vendor lock-in.

**Body:** The code is on GitHub. Read it. Fork it. Self-host it if you want.

QR for Agent is MIT-licensed. If we disappear tomorrow, your QR codes keep working. Teams keep rebuilding small but critical utilities -- QR codes, short URLs, tokens -- over and over again. We built it once, correctly, and opened the source.

Self-host on your infrastructure with Docker or Railway. Or use the hosted API and skip the ops work. Your call.

**CTA primary:** View on GitHub → https://github.com/benswel/qr-agent-core
**CTA secondary:** Read the Docs → /docs
### Notes visuelles
Centered layout. Minimal. A GitHub repo card embed (or a styled link to the repo showing stars, language, license). Dark background to set it apart from other sections. No decorative elements -- the GitHub link is the visual anchor.

---

## Section 8: CTA Final
### Intention
Close the page. Restate the core promise. Give one clear action. No new information -- just conviction.
### Content
**Title (H2):** Give your agent the power to create QR codes

**Subtitle:** MCP-native. API-first. Open source. Free to start.

**Code snippet:**
```bash
npx qr-for-agent
```

**CTA primary:** Get Your API Key → #get-started
**CTA secondary:** View on GitHub → https://github.com/benswel/qr-agent-core
### Notes visuelles
Full-width section with a dark or brand-colored background. Large centered text. Terminal snippet below the subtitle. Two buttons side by side, same layout as the hero. This section should feel like a bookend -- visually echoing the hero to create closure.

---

## Internal Links Checklist
- [x] /docs -- linked in Demo, How It Works, Features, Use Cases, Open Source sections
- [x] /pricing -- linked in Comparison section

## Verbatims Used
1. "Most QR code APIs are either overpriced, overcomplicated, or require using their hosted dashboard." -- Hacker News (Section 5: Comparison subtitle)
2. "Context windows filling up with tool definitions -- loading 50 tools meant burning 100K+ tokens before the conversation started." -- StackOne (Section 4: Features, Lightweight)
3. "Teams keep rebuilding small but critical utilities -- QR codes, short URLs, tokens -- over and over again." -- DEV Community (Section 7: Open Source)
4. "AI agents are no longer just answering questions." -- Desktop Commander (Section 6: Use Cases subtitle)

## Word Count
Approximately 1,200 words (body copy, excluding code snippets and table content).
