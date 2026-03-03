---
title: "QR Code Webhooks: Real-Time Scan Notifications for Your App"
description: "Set up webhooks to get notified every time a QR code is scanned. HMAC-SHA256 verification, event filtering, and delivery logging included."
date: 2026-03-03
slug: "qr-code-webhooks"
---

Polling is terrible. You're hitting an endpoint every few seconds asking "any new scans?" and 99% of the time the answer is "nope, still nothing." You're wasting API calls, adding latency, and burning server resources on both ends.

Webhooks fix this. When someone scans one of your QR codes, we hit your endpoint immediately with the scan data. You get device type, location, browser, timestamp, all of it. No polling, no delay.

## Why webhooks for QR codes

Most QR code platforms make you poll their API to check for new scans. That means you're either checking constantly (expensive, slow) or checking every minute (which means your real-time dashboard is actually showing minute-old data).

With webhooks, the moment someone scans a code, you know about it. Build real-time dashboards, trigger workflows, send notifications to Slack, update your CRM. The scan happens, you get the data within milliseconds.

I've found this especially useful for event check-ins. You scan a badge QR code, the webhook fires, and the attendee's name appears on the screen before they've even lowered their phone. That's the experience polling can't deliver.

## Setting up a webhook endpoint

First, you need somewhere to receive the webhooks. Any HTTPS endpoint works. Here's a minimal Express example:

```javascript
const express = require('express');
const crypto = require('crypto');

const app = express();
app.use(express.raw({ type: 'application/json' }));

app.post('/webhooks/qr-scans', (req, res) => {
  const signature = req.headers['x-webhook-signature'];
  const body = req.body;

  // Verify signature (we'll get to this)
  if (!verifySignature(body, signature)) {
    return res.status(401).send('Invalid signature');
  }

  const payload = JSON.parse(body);
  console.log('QR scanned:', payload);

  res.status(200).send('OK');
});

app.listen(3000);
```

Note the `express.raw()` middleware. You need the raw request body to verify the signature, not the parsed JSON. This trips people up.

Once your endpoint is live, register it with the QR for Agent API:

```bash
curl -X POST https://api.qrforagent.com/api/webhooks \
  -H "X-API-Key: your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://yourdomain.com/webhooks/qr-scans",
    "events": ["qr.scanned"]
  }'
```

The response looks like this:

```json
{
  "id": "wh_abc123",
  "url": "https://yourdomain.com/webhooks/qr-scans",
  "events": ["qr.scanned"],
  "secret": "whsec_x8jKp2mN..."
}
```

Save that secret immediately. It's shown once, never again. You'll need it to verify webhook signatures.

## Events you can subscribe to

Right now there are two event types:

**qr.scanned** fires every time someone scans a QR code. You get device metadata, location data, and referrer information. This is what most people use.

**qr.conversion** fires when a scan results in a conversion (if you've set up conversion tracking on your QR codes). Useful for tracking ROI on marketing campaigns.

You can subscribe to both by passing `["qr.scanned", "qr.conversion"]` in the events array.

## What the webhook payload looks like

When a QR code gets scanned, we POST this to your endpoint:

```json
{
  "event": "qr.scanned",
  "data": {
    "shortId": "abc123",
    "timestamp": "2026-03-03T14:32:18.492Z",
    "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)...",
    "device_type": "mobile",
    "browser": "Safari",
    "os": "iOS",
    "country": "FR",
    "city": "Paris",
    "referer": "https://instagram.com"
  }
}
```

The `shortId` is the QR code identifier. Everything else is parsed from the request that hit our redirect endpoint when the code was scanned.

Location data (country, city) comes from IP geolocation. It's accurate to city-level most of the time, but don't use it for anything that requires precise coordinates.

## Verifying webhook signatures

Anyone can POST to your webhook endpoint. You need to verify that the request actually came from QR for Agent, not some random script kiddie.

We sign every webhook with HMAC-SHA256 using your webhook secret as the key. The signature goes in the `X-Webhook-Signature` header.

Here's how to verify it:

```javascript
function verifySignature(body, signature) {
  const secret = process.env.WEBHOOK_SECRET; // whsec_x8jKp2mN...
  const hmac = crypto.createHmac('sha256', secret);
  const digest = hmac.update(body).digest('hex');

  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(digest)
  );
}
```

You compute the HMAC of the raw request body using your secret, then compare it to the signature header. If they match, the webhook is legitimate.

Use `crypto.timingSafeEqual()` to prevent timing attacks. Don't use `===` for signature comparison.

If the signature doesn't match, return 401. Don't process the webhook. In my experience, most signature failures are from forgetting to use the raw body instead of parsed JSON.

## Delivery logging and retries

We log every webhook delivery attempt with the response status code and any error message. You can see this in the dashboard under each webhook.

If your endpoint returns anything other than a 2xx status code, we'll retry with exponential backoff. First retry after 1 minute, then 5 minutes, then 30 minutes, then we give up. You get three attempts total.

Most failures are timeouts or 5xx errors. Make sure your webhook handler responds quickly (under 5 seconds). If you need to do heavy processing, return 200 immediately and queue the work for later.

## Full working example

Putting it all together:

```javascript
const express = require('express');
const crypto = require('crypto');

const app = express();
app.use(express.raw({ type: 'application/json' }));

function verifySignature(body, signature) {
  const secret = process.env.WEBHOOK_SECRET;
  const hmac = crypto.createHmac('sha256', secret);
  const digest = hmac.update(body).digest('hex');

  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(digest)
  );
}

app.post('/webhooks/qr-scans', (req, res) => {
  const signature = req.headers['x-webhook-signature'];
  const body = req.body;

  if (!verifySignature(body, signature)) {
    console.error('Invalid webhook signature');
    return res.status(401).send('Invalid signature');
  }

  const payload = JSON.parse(body);

  if (payload.event === 'qr.scanned') {
    console.log(`QR ${payload.data.shortId} scanned from ${payload.data.city}, ${payload.data.country}`);
    console.log(`Device: ${payload.data.device_type}, Browser: ${payload.data.browser}`);

    // Do something with the scan data
    // Update dashboard, send notification, trigger workflow, etc.
  }

  res.status(200).send('OK');
});

app.listen(3000, () => {
  console.log('Webhook receiver running on port 3000');
});
```

Deploy this, register the webhook with the API, scan a QR code, and you'll see the scan data logged in real time.

## Pricing

Free tier gives you one webhook endpoint. That's enough for most side projects and MVPs.

If you need multiple webhooks (different endpoints for different QR codes, or separate dev/staging/prod webhooks), the Pro plan at $19/month gives you unlimited endpoints.

## What I'd build with this

Real-time event dashboards are the obvious use case, but there's more interesting stuff you can do.

Trigger SMS notifications when a code gets scanned in a specific location. Track which Instagram stories drive the most scans. Auto-update inventory in your CRM when someone scans a product QR code. Send a Slack message when a high-value lead scans your business card QR.

The webhook fires, you have all the scan metadata, and you can route it anywhere. That's more useful than most people realize when they first set up webhooks.

The scan data is there. Build something with it.