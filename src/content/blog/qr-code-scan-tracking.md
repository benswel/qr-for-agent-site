---
title: "How to Track QR Code Scans with UTM Parameters and Conversion Pixels"
description: "Connect QR code scans to your analytics pipeline. Auto-append UTM parameters, drop a tracking pixel for conversions, and pipe everything into Google Analytics or your CRM."
date: 2026-03-03
slug: "qr-code-scan-tracking"
---

You generate a QR code. You print it on flyers, stick it on posters, embed it in emails. People scan it. Then what?

If you're like most people, you check Google Analytics and see a spike in traffic. But you can't tell which QR code drove it, which campaign it came from, or whether those scans turned into actual conversions. Google Analytics doesn't magically know a visit came from a QR code unless you tag the URL.

This is the gap. You're flying blind.

The fix is simple: UTM parameters on QR codes, plus a conversion tracking pixel or API call. This article shows you how to wire it up.

## The Problem with Untagged QR Codes

When someone scans a QR code, they land on your page. Google Analytics records the visit. But without UTM parameters, GA can't tell you:

- Which QR code they scanned (you might have 10 different ones in the wild)
- Which campaign it belonged to (spring sale vs. summer promotion)
- Which creative variant performed better (poster A vs. poster B)
- Which channel it came from (print ad vs. email vs. trade show booth)

You're left guessing. UTM tagging is boring but it's the difference between guessing and knowing.

## Auto-Append UTM Parameters to QR Codes

The QR for Agent API accepts a `utm_params` object when you create a dynamic QR code. These parameters are automatically appended to the redirect URL via URLSearchParams. When the user lands on your page, Google Analytics sees the full UTM string and attributes the visit correctly.

Here's how to create a QR code with UTM parameters:

```bash
curl -X POST https://api.qrforagent.com/api/qr \
  -H "X-API-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "url",
    "data": {
      "url": "https://example.com/landing"
    },
    "options": {
      "dynamic": true,
      "utm_params": {
        "source": "qr",
        "medium": "print",
        "campaign": "spring-2026",
        "content": "poster-a"
      }
    }
  }'
```

When someone scans this QR code, they're redirected to:

```
https://example.com/landing?utm_source=qr&utm_medium=print&utm_campaign=spring-2026&utm_content=poster-a
```

Now Google Analytics knows exactly where this traffic came from. You can segment by campaign, compare poster-a vs. poster-b, and see which QR codes are worth printing more of.

### UTM Parameter Breakdown

- **utm_source**: Where the traffic originated (qr, qr-flyer, qr-billboard)
- **utm_medium**: The marketing medium (print, digital, email)
- **utm_campaign**: The campaign name (spring-2026, black-friday)
- **utm_term**: Paid search keywords (usually empty for QR codes)
- **utm_content**: Creative variant (poster-a, email-v2, booth-left)

I always set `utm_source=qr` at minimum. If you have multiple QR codes in the same campaign, differentiate them with `utm_content`.

## Google Tag Manager for Advanced Tracking

Sometimes you need to fire a pixel or event on QR scans without modifying the destination page. Maybe you don't control that page. Maybe it's a third-party landing page. Maybe you just don't want to mess with it.

That's where GTM container support comes in.

When you create a QR code with a `gtm_container_id`, the redirect serves an intermediate HTML page with Google Tag Manager head and noscript snippets. The page fires your GTM tags (pixels, custom events, data layer pushes), then meta-refreshes to the destination after 1 second.

Here's how to enable it:

```bash
curl -X POST https://api.qrforagent.com/api/qr \
  -H "X-API-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "url",
    "data": {
      "url": "https://example.com/landing"
    },
    "options": {
      "dynamic": true,
      "gtm_container_id": "GTM-XXXXXX",
      "utm_params": {
        "source": "qr",
        "medium": "print",
        "campaign": "spring-2026"
      }
    }
  }'
```

Now every scan fires your GTM container. You can configure GTM to send events to Facebook Pixel, Google Ads conversion tracking, your CRM, or anywhere else. The user sees a 1-second intermediate page, then lands on the destination with UTM parameters intact.

## Conversion Tracking with a 1x1 Pixel

Scans are one thing. Conversions are another.

You need to know if people who scanned your QR code actually bought something, signed up, or completed whatever action you care about. That's where the conversion tracking pixel comes in.

The tracking pixel is a simple GET request that returns a 1x1 transparent GIF. Zero JavaScript. You embed it on your thank-you page, order confirmation email, or wherever conversions happen.

Here's the pixel URL:

```html
<img src="https://api.qrforagent.com/t/abc123?event=purchase&value=49.99" width="1" height="1" alt="" />
```

Replace `abc123` with your QR code's short ID. The `event` parameter is the conversion event name (purchase, signup, lead). The `value` parameter is optional but useful for tracking revenue.

When the pixel loads, the API records the conversion in the `conversion_events` table and fires the `qr.conversion` webhook event. You can query conversion stats later via the analytics API.

### Pixel vs. API for Conversion Tracking

The pixel works great for web conversions. But sometimes you can't use a pixel. Maybe the conversion happens offline (someone calls your sales team). Maybe it happens server-side (a background job processes a payment). Maybe you're tracking a mobile app event.

In those cases, use the conversion tracking API instead:

```bash
curl -X POST https://api.qrforagent.com/api/conversions \
  -H "X-API-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "short_id": "abc123",
    "event": "purchase",
    "value": 49.99,
    "metadata": {
      "order_id": "12345",
      "customer_id": "67890"
    }
  }'
```

Both the pixel and the API fire the same `qr.conversion` webhook event. Pick whichever fits your architecture.

## Pull Analytics and Conversion Stats

Once you have UTM-tagged QR codes and conversion tracking in place, you need to pull the data.

The analytics endpoint returns scans by day, top devices, top browsers, top countries, and top referers:

```bash
curl https://api.qrforagent.com/api/analytics/abc123?period=30d \
  -H "X-API-Key: YOUR_API_KEY"
```

Response:

```json
{
  "scans_by_day": [
    {"date": "2026-02-15", "count": 42},
    {"date": "2026-02-16", "count": 38}
  ],
  "top_devices": [
    {"device": "mobile", "count": 312},
    {"device": "desktop", "count": 45}
  ],
  "top_browsers": [
    {"browser": "Chrome Mobile", "count": 198},
    {"browser": "Safari", "count": 114}
  ],
  "top_countries": [
    {"country": "US", "count": 267},
    {"country": "CA", "count": 45}
  ],
  "top_referers": [
    {"referer": "direct", "count": 312}
  ]
}
```

The conversion endpoint returns totals, by event, by day, and recent conversions:

```bash
curl https://api.qrforagent.com/api/conversions/abc123?period=30d \
  -H "X-API-Key: YOUR_API_KEY"
```

Response:

```json
{
  "totals": {
    "count": 23,
    "total_value": 1147.77
  },
  "by_event": [
    {"event": "purchase", "count": 18, "total_value": 1097.82},
    {"event": "signup", "count": 5, "total_value": 49.95}
  ],
  "by_day": [
    {"date": "2026-02-15", "count": 4, "total_value": 199.96},
    {"date": "2026-02-16", "count": 3, "total_value": 149.97}
  ],
  "recent": [
    {
      "event": "purchase",
      "value": 49.99,
      "timestamp": "2026-02-16T14:32:18Z",
      "metadata": {"order_id": "12345"}
    }
  ]
}
```

Now you have the full picture. Scans, conversions, revenue, all tied back to a specific QR code and campaign.

## Practical Walkthrough

Let's wire this up from scratch.

1. **Create a QR code with UTM parameters.** Set `utm_source=qr`, `utm_medium=print`, `utm_campaign=spring-2026`, and `utm_content=flyer-a`.

2. **Print the QR code on a flyer.** Distribute 500 copies at a trade show.

3. **Embed the conversion pixel on your thank-you page.** Replace `abc123` with your QR code's short ID. Add `event=purchase` and `value=49.99`.

4. **Wait a week.** Let people scan the QR code and make purchases.

5. **Pull analytics.** Check `GET /api/analytics/abc123?period=7d` to see scan volume, devices, and countries.

6. **Pull conversion stats.** Check `GET /api/conversions/abc123?period=7d` to see how many scans converted and how much revenue they generated.

7. **Compare campaigns.** Create another QR code with `utm_content=flyer-b`. Distribute 500 copies. After a week, compare the two. Which flyer drove more scans? Which drove more conversions? Double down on the winner.

That's the loop. Tag, distribute, track, optimize.

## Wrapping Up

UTM parameters and conversion pixels are simple but they unlock the entire analytics pipeline. Without them, QR codes are a black box. With them, you know which campaigns work, which creatives convert, and where to spend your next marketing dollar.

I've seen teams run 10 different QR code campaigns without tagging a single one. Then they wonder why they can't prove ROI. Don't be that team.

Tag your QR codes. Track your conversions. Pull the data. Make better decisions.
