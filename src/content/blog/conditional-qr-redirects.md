---
title: "Conditional QR Redirects: Route Users by Device, Country, or Language"
description: "One QR code, multiple destinations. Route scanners to different URLs based on device type, operating system, country, language, time of day, or A/B split."
date: 2026-03-03
slug: "conditional-qr-redirects"
---

You printed 5,000 flyers with a QR code. Two weeks later, you realize iOS users should go to the App Store, Android users to Google Play, and everyone else to your website. Normally, you're stuck. With conditional redirects, you just update the rules.

## The Problem

A QR code is a pointer. Once you print it, the pointer is frozen in ink. But the destination doesn't have to be.

If your QR code points to a dynamic short URL (like `qrf.ag/xyz123`), the server decides where to send each scanner at scan time. You can change that decision based on who's scanning.

Common scenarios:

- Mobile app downloads (iOS vs Android stores)
- Multi-language campaigns (FR vs EN landing pages)
- Business hours routing (booking form during the day, voicemail info at night)
- A/B testing (split traffic 50/50 between two pages)
- Regional content (UK users see prices in GBP, US users in USD)

## How Redirect Rules Work

When you create a dynamic QR code, you can add a `redirect_rules` array. Each rule has conditions and a target URL.

```json
{
  "type": "url",
  "data": { "url": "https://example.com/default" },
  "options": {
    "dynamic": true,
    "redirect_rules": [
      { "conditions": { "os": "iOS" }, "url": "https://apps.apple.com/app/myapp" },
      { "conditions": { "os": "Android" }, "url": "https://play.google.com/store/apps/details?id=com.myapp" }
    ]
  }
}
```

The redirect engine evaluates rules top to bottom. First match wins. If no rule matches, it falls back to the default `data.url`.

This happens server-side in the `/r/:shortId` endpoint. No cron jobs, no delay. Every scan is evaluated in real time.

## Available Conditions

You can route based on six properties:

- `device`: `mobile`, `desktop`, or `tablet`
- `os`: `iOS`, `Android`, `Windows`, `macOS`, `Linux`
- `country`: two-letter ISO code (`FR`, `US`, `GB`) derived from IP geolocation
- `language`: two-letter code (`fr`, `en`, `es`) from the `Accept-Language` header
- `time_range`: hour-based string like `9-17` (24-hour format, UTC)
- `ab_split`: integer 0-100 representing percentage of traffic

Multiple conditions in one rule are AND-ed together. If you want OR logic, add separate rules.

## Example 1: App Store Routing

The most common use case. Send iOS users to the App Store, Android users to Google Play, desktop users to a landing page.

```bash
curl -X POST https://api.qrforagent.com/api/qr \
  -H "X-API-Key: your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "url",
    "data": { "url": "https://myapp.com" },
    "options": {
      "dynamic": true,
      "redirect_rules": [
        {
          "conditions": { "os": "iOS" },
          "url": "https://apps.apple.com/app/id123456789"
        },
        {
          "conditions": { "os": "Android" },
          "url": "https://play.google.com/store/apps/details?id=com.myapp"
        }
      ]
    }
  }'
```

iOS scanners get the App Store. Android scanners get Google Play. Everyone else (desktop browsers, weird mobile OSes) gets `https://myapp.com`.

## Example 2: Language-Based Landing Pages

You're running a campaign in France and Belgium. French speakers should see the French site, everyone else gets English.

```json
{
  "redirect_rules": [
    {
      "conditions": { "language": "fr" },
      "url": "https://myapp.com/fr"
    }
  ]
}
```

The language is parsed from the `Accept-Language` header. If the browser sends `fr-FR,fr;q=0.9,en;q=0.8`, the scanner gets the French page. If it sends `en-US,en;q=0.9`, they get the default.

I've used this for bilingual event flyers. Print one QR code, let the phone's language settings do the routing.

## Example 3: Business Hours Routing

You're a restaurant. During business hours (9am to 5pm UTC), send people to the reservation form. After hours, send them to a page with your voicemail and hours.

```json
{
  "redirect_rules": [
    {
      "conditions": { "time_range": "9-17" },
      "url": "https://restaurant.com/book"
    }
  ]
}
```

Default URL is `https://restaurant.com/contact`. If someone scans at 3pm UTC, they get the booking page. If they scan at 8pm, they get contact info.

Time range is always in UTC. If you need local time zones, you'll have to calculate the offset yourself when setting the range.

## Example 4: A/B Testing

The A/B split is the one I use most. You have two landing page variants and want to see which converts better.

```json
{
  "redirect_rules": [
    {
      "conditions": { "ab_split": 50 },
      "url": "https://myapp.com/landing-a"
    }
  ]
}
```

Default URL is `https://myapp.com/landing-b`. The `ab_split` value is the percentage of traffic that should match this rule. 50 means half of all scans go to landing-a, the other half go to landing-b.

Behind the scenes, the server hashes the scanner's IP and user agent to assign them to a bucket. The same person scanning twice will see the same variant.

You can split traffic any way you want. `ab_split: 25` sends 25% to the rule's URL and 75% to the default. You can chain rules for multi-variant tests:

```json
{
  "redirect_rules": [
    { "conditions": { "ab_split": 33 }, "url": "https://myapp.com/variant-a" },
    { "conditions": { "ab_split": 50 }, "url": "https://myapp.com/variant-b" }
  ]
}
```

33% get variant A, 17% (50% of the remaining 67%) get variant B, 50% get the default.

## Example 5: Multi-Condition Rules

You can combine conditions. Send mobile users in France to a mobile-optimized French landing page.

```json
{
  "redirect_rules": [
    {
      "conditions": {
        "device": "mobile",
        "country": "FR"
      },
      "url": "https://myapp.com/fr/mobile"
    },
    {
      "conditions": { "country": "FR" },
      "url": "https://myapp.com/fr"
    }
  ]
}
```

If a mobile scanner in France hits the code, they get the mobile French page. If a desktop scanner in France hits it, they get the regular French page. Everyone else gets the default.

All conditions in a single rule must match. If you want "mobile OR tablet", add two separate rules.

## How It Works Server-Side

When someone scans your QR code, their phone sends an HTTP request to your short URL (like `https://qrf.ag/xyz123`).

The server:

1. Looks up the QR code by short ID
2. Extracts request metadata (user agent, IP, headers)
3. Parses device type, OS, country, language from that metadata
4. Evaluates `redirect_rules` from top to bottom
5. Returns a 302 redirect to the matched URL

This happens in 20-30ms. The scanner doesn't notice.

The rules are stored in the QR code's database record. You can update them anytime without reprinting the code.

## Combining with UTM Parameters

If you've set `utm_params` on your QR code, those get appended after the redirect rule matches.

```json
{
  "redirect_rules": [
    { "conditions": { "os": "iOS" }, "url": "https://apps.apple.com/app/id123456789" }
  ],
  "utm_params": {
    "utm_source": "flyer",
    "utm_medium": "qr",
    "utm_campaign": "spring2026"
  }
}
```

An iOS scanner gets redirected to:

```
https://apps.apple.com/app/id123456789?utm_source=flyer&utm_medium=qr&utm_campaign=spring2026
```

The UTM tags are applied after the redirect engine picks the URL. This lets you track which flyer the scan came from while still routing to different destinations.

## Updating Rules Later

You don't need to recreate the QR code to change rules. Use the PATCH endpoint.

```bash
curl -X PATCH https://api.qrforagent.com/api/qr/xyz123 \
  -H "X-API-Key: your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "options": {
      "redirect_rules": [
        { "conditions": { "os": "iOS" }, "url": "https://apps.apple.com/app/id999999999" }
      ]
    }
  }'
```

The short URL stays the same. The printed QR code stays the same. Only the routing logic changes.

I've used this mid-campaign when an app update changed the App Store URL. Flyers were already in circulation. Updated the rule, problem solved.

## Edge Cases

A few things to watch out for:

- If no `Accept-Language` header is sent, language conditions never match
- Country detection depends on IP geolocation, which isn't perfect (VPNs, proxies)
- Time range is always UTC, not local time
- If you have overlapping rules, order matters (first match wins)
- A/B split bucketing is stable per user but not cryptographically secure

For most campaigns, these don't matter. If you need perfect accuracy, you probably need a more complex system.

## When to Use This

Conditional redirects are overkill if everyone should see the same page. Just use a static URL.

They're worth it when:

- You're promoting an app (need App Store vs Google Play routing)
- You're targeting multiple countries or languages
- You want to A/B test without printing multiple codes
- Your offer changes based on time of day
- You need device-specific experiences

The best part is you set it up once and forget about it. The QR code handles the routing automatically. No manual intervention, no broken links.

## Getting Started

To create a QR code with conditional redirects:

```bash
curl -X POST https://api.qrforagent.com/api/qr \
  -H "X-API-Key: your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "url",
    "data": { "url": "https://default-destination.com" },
    "options": {
      "dynamic": true,
      "redirect_rules": [
        {
          "conditions": { "device": "mobile" },
          "url": "https://mobile-destination.com"
        }
      ]
    }
  }'
```

The response includes a `shortUrl` field. That's what you encode in your QR code.

Print it, distribute it, update the rules as needed. The QR code stays the same, but the destination can change based on who scans it.
