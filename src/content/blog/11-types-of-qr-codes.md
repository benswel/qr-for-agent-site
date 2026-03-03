---
title: "11 Types of QR Codes You Can Create with an API"
description: "Beyond URLs: Learn about vCard, WiFi, email, SMS, calendar events, and 6 other QR code types. See which work offline and how to generate them programmatically."
date: 2026-03-03
slug: "11-types-of-qr-codes"
---

Most people think QR codes only store URLs. Scan a code, open a website. But the QR code specification supports multiple data formats, each optimized for a specific use case.

vCard codes transfer contact information. WiFi codes share network credentials. Event codes add calendar entries. Each type encodes structured data that devices know how to parse and act on.

For developers, this means you can build workflows that go beyond "scan to visit a webpage." A restaurant app can generate WiFi codes for guests. An event platform can create calendar codes for sessions. A CRM can produce vCard codes for sales teams.

Here's a complete tour of all 11 QR code types, what they do, and when to use them.

## 1. URL

**What it does:** Opens a web page when scanned.

**Encoding:** Plain URL string encoded in the matrix.

**Works offline:** No—requires internet to load the destination page.

**Use cases:** Marketing campaigns, product packaging, business cards with portfolio links, event posters, menu ordering systems.

**Dynamic or static:** Can be either. Static codes encode the URL directly. Dynamic codes encode a short redirect URL, letting you change the destination without regenerating the image.

This is the most common QR code type. When you see a code in the wild, it's probably a URL code.

## 2. vCard (Contact Card)

**What it does:** Adds a contact to the user's address book when scanned.

**Encoding:** vCard 3.0 or 4.0 format with name, phone, email, address, title, and organization fields.

**Works offline:** Yes—vCard data is embedded in the matrix and parsed locally.

**Use cases:** Business cards, conference badges, email signatures, networking events, real estate agents, sales teams.

**Dynamic or static:** Typically static, since contact info doesn't change frequently. You can make it dynamic by encoding a URL that serves vCard data, but this adds an extra step and requires internet.

vCard codes are underused but incredibly practical. Instead of manually typing someone's phone number and email, you scan once and everything imports automatically.

## 3. WiFi

**What it does:** Connects the device to a WiFi network when scanned.

**Encoding:** SSID, password, and encryption type (WPA, WPA2, WEP, or none) in a special `WIFI:` format.

**Works offline:** Yes—credentials are embedded in the code. But you need network access to actually connect.

**Use cases:** Coffee shops, hotels, coworking spaces, Airbnbs, restaurants, conferences, offices.

**Dynamic or static:** Always static. WiFi credentials can't redirect—they need to be parsed locally by the device.

This is one of the most useful non-URL code types. Guests scan a code on the wall and connect instantly without asking for the password or typing random characters.

## 4. Email

**What it does:** Opens the default email app with a pre-filled recipient, subject, and body.

**Encoding:** `mailto:` URL scheme with optional subject and body parameters.

**Works offline:** No—requires an email app and internet to send.

**Use cases:** Customer support contact cards, feedback forms, event RSVPs, "email us" buttons on print materials.

**Dynamic or static:** Can be either. Static codes embed the full `mailto:` link. Dynamic codes let you update the recipient or subject line without reprinting.

Useful for print materials where you want to capture feedback or inquiries without forcing users to type an email address.

## 5. SMS

**What it does:** Opens the default SMS app with a pre-filled recipient and message body.

**Encoding:** `sms:` or `smsto:` URL scheme with phone number and optional body text.

**Works offline:** No—requires cellular or internet-based SMS service.

**Use cases:** Contest entries ("text JOIN to 12345"), appointment reminders, event check-ins, campaign opt-ins, customer support shortcuts.

**Dynamic or static:** Can be either. Static codes embed the phone number and message. Dynamic codes let you rotate phone numbers or update the pre-filled text.

Particularly effective for marketing campaigns where you want users to send a keyword to a shortcode.

## 6. Phone

**What it does:** Opens the phone dialer with a pre-filled number.

**Encoding:** `tel:` URL scheme with the phone number.

**Works offline:** Yes on the dialing step, but you need cellular service to complete the call.

**Use cases:** Business cards, customer support hotlines, "call now" ads, service appointment booking, taxi/ride-hailing numbers.

**Dynamic or static:** Can be either. Static codes embed the number. Dynamic codes let you route calls to different numbers based on time, location, or campaign performance.

Simple but effective for reducing friction in call-based conversions.

## 7. Calendar Event (iCal/vEvent)

**What it does:** Adds an event to the user's calendar when scanned.

**Encoding:** iCalendar (`.ics`) format with event title, start/end times, location, and description.

**Works offline:** Yes—event data is embedded in the matrix and parsed locally.

**Use cases:** Conference sessions, webinar reminders, appointment confirmations, concert tickets, restaurant reservations, meeting invites.

**Dynamic or static:** Typically static, since event details are usually finalized before printing. You can make it dynamic by encoding a URL that serves an `.ics` file, allowing updates if the venue or time changes.

Great for event-heavy industries like conferences, entertainment, and professional services.

## 8. Plain Text

**What it does:** Displays raw text when scanned (no action taken, just shows the text).

**Encoding:** Plain string data encoded directly in the matrix.

**Works offline:** Yes—text is embedded in the code.

**Use cases:** Serial numbers, product IDs, instructions, codes/passwords, troubleshooting info, notes, multi-language labels.

**Dynamic or static:** Always static. Plain text can't redirect—it's just data.

This type is useful for non-interactive information that needs to be machine-readable but doesn't trigger an action. Think of it as a human-readable barcode.

## 9. Location (Geo)

**What it does:** Opens the default maps app with a pinned location or starts navigation.

**Encoding:** `geo:` URL scheme with latitude and longitude (e.g., `geo:37.7749,-122.4194`).

**Works offline:** No—requires maps app and internet for map tiles.

**Use cases:** Event venues, retail stores, real estate listings, hiking trailheads, delivery addresses, tourist attractions.

**Dynamic or static:** Can be either. Static codes embed the coordinates. Dynamic codes let you update the location (useful for multi-location businesses or rotating pop-ups).

Particularly effective for driving foot traffic from print ads or flyers.

## 10. Social Links

**What it does:** Opens a social media profile or action (follow, message, share).

**Encoding:** Platform-specific URL schemes (e.g., `https://instagram.com/username`, `https://twitter.com/intent/follow?screen_name=username`).

**Works offline:** No—requires internet to load the profile.

**Use cases:** Influencer marketing, business cards, event badges, storefront signage, product packaging, "follow us" campaigns.

**Dynamic or static:** Can be either. Static codes embed the profile URL. Dynamic codes let you switch platforms or usernames (useful for campaign testing or account migrations).

Often used in conjunction with URL codes, but calling it out as a distinct type since the intent and metrics differ.

## 11. App Store

**What it does:** Opens the App Store (iOS) or Play Store (Android) to a specific app's listing.

**Encoding:** Platform-specific URLs or universal links that detect the device OS and route accordingly.

**Works offline:** No—requires internet to load the store.

**Use cases:** App install campaigns, in-store displays, product packaging for apps with companion experiences, event check-in apps, retail loyalty programs.

**Dynamic or static:** Should be dynamic to handle cross-platform routing. A single QR code can redirect iOS users to the App Store and Android users to the Play Store based on user agent detection.

Critical for mobile-first products where the goal is driving installs.

## Summary Table

| Type | Encoding | Works Offline? | Primary Use Case |
|------|----------|----------------|------------------|
| **URL** | Plain URL or redirect | No | Marketing, campaigns, menus |
| **vCard** | vCard 3.0/4.0 | Yes | Business cards, contacts |
| **WiFi** | SSID + password | Yes (credentials) | Guest network access |
| **Email** | `mailto:` scheme | No | Support, feedback forms |
| **SMS** | `sms:` scheme | No | Campaign opt-ins, contests |
| **Phone** | `tel:` scheme | Partial | Call-to-action ads, hotlines |
| **Event** | iCalendar format | Yes | Conference sessions, RSVPs |
| **Text** | Plain string | Yes | Serial numbers, instructions |
| **Location** | `geo:` scheme | No | Venue directions, real estate |
| **Social** | Platform URLs | No | Follow campaigns, profiles |
| **App Store** | Store URLs | No | App install campaigns |

## Generating These with an API

Most QR code libraries and APIs only support URLs. If you want to create a vCard or WiFi code, you're on your own to format the data correctly according to the spec.

QR for Agent handles encoding for all 11 types. You pass structured data, and the API generates the appropriate format:

```bash
# vCard example
curl -X POST https://api.qrforagent.com/v1/qr \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "vcard",
    "data": {
      "firstName": "Jane",
      "lastName": "Doe",
      "email": "jane@example.com",
      "phone": "+1-555-0100",
      "company": "Acme Corp",
      "title": "VP of Engineering"
    }
  }'
```

```bash
# WiFi example
curl -X POST https://api.qrforagent.com/v1/qr \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "wifi",
    "data": {
      "ssid": "Guest_Network",
      "password": "welcome123",
      "encryption": "WPA"
    }
  }'
```

```bash
# Calendar event example
curl -X POST https://api.qrforagent.com/v1/qr \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "event",
    "data": {
      "title": "Product Launch",
      "start": "2026-04-15T10:00:00Z",
      "end": "2026-04-15T12:00:00Z",
      "location": "Convention Center",
      "description": "Join us for the unveiling of our new product line."
    }
  }'
```

The API validates the data, formats it correctly, and returns a scannable QR code image. You don't need to memorize vCard syntax or iCalendar quirks.

## Which Type Should You Use?

**Default to URL codes** for most use cases. They're flexible, trackable (when dynamic), and work across all devices.

**Use specialized types** when they directly match the user's intent:

- **Business cards → vCard** (one scan imports everything)
- **Guest WiFi → WiFi code** (no password typing)
- **Event tickets → Event code** (automatic calendar add)
- **Support contact → Phone or Email code** (one-tap action)

**Use dynamic URL codes** when you need analytics or the ability to update destinations. Even if you're encoding a vCard, you can serve it via a URL for dynamic control.

All 11 types are available through QR for Agent's API and MCP server. Free tier includes 10 codes and 1,000 scans per month—enough to test all types and see what works for your use case.

[Try it free](/get-started) and start generating codes beyond URLs.
