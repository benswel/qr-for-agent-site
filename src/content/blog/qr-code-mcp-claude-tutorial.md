---
title: "Build a QR Code Automation with Claude and MCP"
description: "Step-by-step: install the QR for Agent MCP server, create styled QR codes, set up scan webhooks, and let Claude handle the whole workflow autonomously."
date: 2026-03-03
slug: "qr-code-mcp-claude-tutorial"
---

You know that feeling when you're building something and realize you're about to manually generate 50 QR codes? That's what happened to me last week. Instead of clicking through a web UI or writing custom API code, I set up an MCP server and let Claude handle the whole thing.

Here's how to do it. You'll have a working setup in about 10 minutes.

## Get your API key

First thing: go to [qrforagent.com/get-started](https://qrforagent.com/get-started) and sign up. The free tier gives you 10 QR codes and 1,000 scans per month, which is plenty to test things out.

Once you're in, grab your API key. It starts with `qr_` and you'll need it in a minute.

## Add the MCP server to Claude

The part that tripped me up initially was figuring out where to put the config. It depends on which editor you're using.

If you're on Claude Desktop (macOS), open `~/Library/Application Support/Claude/claude_desktop_config.json` and add this:

```json
{
  "mcpServers": {
    "qr-for-agent": {
      "command": "npx",
      "args": ["-y", "qr-for-agent"],
      "env": { "QR_API_KEY": "qr_your_key_here" }
    }
  }
}
```

For Cursor, create or edit `.cursor/mcp.json` in your project root:

```json
{
  "mcpServers": {
    "qr-for-agent": {
      "command": "npx",
      "args": ["-y", "qr-for-agent"],
      "env": { "QR_API_KEY": "qr_your_key_here" }
    }
  }
}
```

VS Code users: same idea, but the file is `.vscode/mcp.json`:

```json
{
  "servers": {
    "qr-for-agent": {
      "command": "npx",
      "args": ["-y", "qr-for-agent"],
      "env": { "QR_API_KEY": "qr_your_key_here" }
    }
  }
}
```

Replace `qr_your_key_here` with your actual key. Restart Claude after saving.

## Create your first QR code

Open a chat with Claude and type:

> "Create a QR code for https://example.com"

Claude calls the `create_qr` tool behind the scenes. You'll get back:
- A QR code ID (something like `qr_abc123`)
- The image URL where your QR code lives
- A short link (like `qr.ag/abc123`) that redirects to your destination

Claude will show you the image right in the chat. That's it. No forms, no downloading, no API docs to read.

## Style it

Plain black-and-white QR codes work fine, but you can make them match your brand. Try this:

> "Make it rounded dots with a blue-to-purple gradient"

Claude updates the QR code with those styles. You can also ask for:
- Different patterns (squares, dots, rounded)
- Custom colors and gradients
- Embedded logos
- Corner styles
- Background colors

The styling happens instantly. If you don't like it, just ask Claude to change it again.

## Set up a webhook

Here's where it gets useful. Say you want to know every time someone scans your QR code. Type:

> "Set up a webhook to notify https://myapp.com/hooks/qr when this code is scanned"

Claude calls `create_webhook` and registers your endpoint. Now every scan triggers a POST request to your server with scan data: timestamp, location, device type, IP address, all that stuff.

You can use this to:
- Send a Slack message when someone scans
- Log analytics in your database
- Trigger automated follow-ups
- Update your CRM

The webhook payload includes everything you need to build on top of it.

## Check analytics

A week later, you want to see how many scans you got. Ask Claude:

> "How many times was my QR code scanned today?"

Claude calls `get_qr_analytics` and breaks it down for you: total scans, unique scans, top locations, device types, browsers. You get a full report without opening a dashboard.

You can also ask for:
- Scans by date range
- Geographic breakdowns
- Device and OS stats
- Referrer data

## Bulk operations

Remember those 50 QR codes I mentioned? Here's how that actually worked.

I had a spreadsheet with product URLs. I copied the URLs and told Claude:

> "Create QR codes for these 5 product URLs: [list of URLs]"

Claude used `bulk_create_qr` to generate all of them at once. I got back a list with each QR code's ID, image URL, and short link. Then I had Claude export the list as a CSV so I could send it to the print shop.

You can bulk update too. Say you need to change the destination URL for 20 QR codes at once. Just give Claude the list of IDs and the new URL. It handles the rest.

## Go further

The MCP server has 37 tools total. Here are a few more things you can do:

**Conditional redirects:** Send iOS users to the App Store and Android users to Google Play using the same QR code. Claude can set this up with `update_qr` and the redirect rules.

**UTM tracking:** Automatically append UTM parameters to your URLs so you can track which QR codes drive conversions in Google Analytics.

**Conversion pixels:** Use `create_tracking_pixel` to drop a Facebook or Google pixel when someone scans. Track conversions without touching your website code.

**Dynamic QR codes:** Update the destination URL anytime without reprinting. The QR code image stays the same, but it points wherever you want.

**Different content types:** QR codes aren't just for URLs. You can generate:
- vCards (contact info)
- WiFi credentials
- Email compose prompts
- SMS messages
- Calendar events
- Phone numbers
- App Store links
- Social media profiles
- Geographic locations

All of these work the same way. Just tell Claude what you want and it calls the right tool.

## Why this works

The thing I like about MCP is that you don't need to learn an API. You just tell Claude what you want and it figures out which tools to use and in what order.

Want to create 10 QR codes, apply custom styles to each, set up webhooks, and download them as SVG files? That's four different API endpoints. With MCP, it's one sentence to Claude.

The server handles authentication, rate limiting, error handling, all the stuff you'd normally write wrapper code for. Claude just uses the tools like they're built-in commands.

## One more thing

If you're building a product that generates QR codes (event tickets, restaurant menus, loyalty cards, whatever), you can give your users access to Claude with this MCP server pre-configured. They get an AI assistant that already knows how to work with your QR codes.

That's a much better UX than "here's our API docs, figure it out."

You can try this yourself right now. Get an API key, add the MCP config, and ask Claude to create a QR code. Takes about two minutes.

The free tier is enough to test everything. If you end up using it for real, the Pro plan is $19/month with unlimited QR codes and scans.

Full tool list and docs: [qrforagent.com/docs](/docs)
