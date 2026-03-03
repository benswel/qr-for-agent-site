---
title: "11 Types of QR Codes You Can Create with an API"
description: "QR codes do more than open URLs. vCard, WiFi, calendar events, and 8 other types that encode structured data your users' devices already know how to handle."
date: 2026-03-03
slug: "11-types-of-qr-codes"
---

The QR code spec has 11 different data types, but 99% of codes you see in the wild are just URLs. Open a website, that's it.

Which is fine. URLs are flexible. But if you're building something where the user's intent is specific—connect to WiFi, add a contact, dial a number—you can encode that action directly. No landing page, no extra tap. Scan and done.

Here's the full list of what you can encode, starting with the ones that actually get used.

## URL

This is the baseline. Encode a web address, user scans it, browser opens. You already know how this works.

The reason URL codes dominate is they're easy to generate and they work everywhere. When you want analytics or the ability to change the destination without reprinting, you use a dynamic URL (short redirect link). When you just need a static pointer to a page, you encode the full URL directly.

If you're not sure which type to use, default to URL. You can always serve other data types (vCard, iCal) from a URL endpoint if you want the flexibility later.

## vCard (Contact Cards)

Encodes contact info in vCard format. Scan it and your phone offers to save the contact with name, email, phone, company, title—whatever fields you included. No typing.

This is the best upgrade from paper business cards. Print a vCard QR code on your card and people can import your contact in one scan instead of manually entering 6 fields. Conference badges, email signatures, real estate signs—anywhere you'd hand out contact info.

The data lives in the code, so it works offline. Most phones parse vCard 3.0 and 4.0 without needing an app.

## WiFi

Guest network credentials encoded in a `WIFI:` format your phone knows how to read. Scan the code, phone connects. No "what's the password?" conversation.

Coffee shops, hotels, Airbnbs, coworking spaces—this is the easiest WiFi onboarding you can offer. Print the code on the wall or on table tents. Guests connect without asking staff or digging through a welcome email.

Works offline in the sense that the credentials are embedded in the code. But obviously you need the network to be in range.

## The Communication Triad: Email, SMS, Phone

These three types do basically the same thing: pre-fill an action in your phone's default app.

**Email codes** encode a `mailto:` link with recipient, subject, and body. Scan it and your mail app opens with everything filled in. Useful for "contact us" buttons on flyers or feedback forms where you want to reduce typing friction.

**SMS codes** encode an `sms:` link with a phone number and optional message. Used a lot for contest entries ("text JOIN to 12345") or campaign opt-ins. The user still has to tap send, but you control what message they start with.

**Phone codes** just encode a `tel:` link. Tap to dial. That's it. Business cards, support hotlines, "call now" ads. You can make them dynamic if you want to route calls to different numbers based on time or location, but most are static.

None of these work offline—they need cellular or internet to actually send the message or complete the call. But they're dead simple to implement and they do what they say.

## Calendar Events (iCal)

Encodes event details in iCalendar format. Scan it and your phone offers to add the event to your calendar with title, time, location, description.

This one is huge for conferences and webinars. Instead of hoping people manually add your session to their calendar, you generate a QR code for each session and print it on the program or badge. They scan it, event is saved.

Restaurants use this for reservation confirmations. Concert venues put them on tickets. Anywhere you're scheduling something and you want it to show up in the user's calendar without them typing anything.

Works offline—the event data is in the code. If you need to update the venue or time after printing, you can make it dynamic by encoding a URL that serves an `.ics` file instead of embedding the event directly. But most people just embed it.

## Plain Text

This one is just raw text. Scan the code and your phone displays the string. No action, no app launch, just text on screen.

Why would you use this? Serial numbers, product IDs, multi-language instructions, passwords for initial setup. Anything where you need machine-readable data but don't want the code to do anything interactive.

It's basically a barcode that humans can also read if they have a QR scanner. Always static.

## Location (Geo Coordinates)

Encodes latitude and longitude in a `geo:` URL scheme. Scan it and your maps app opens with the location pinned, ready for navigation.

Event venues, retail stores, real estate listings, hiking trailheads—anywhere you want to make it easy to navigate to a physical location without typing an address.

You can make these dynamic if you run a multi-location business or pop-up shop and need to update the coordinates. But usually you just hardcode the lat/long.

Requires internet to load the map tiles, so not offline.

## Social Links

This is technically just a URL, but the intent is different enough that most people call it out separately. You're encoding a link to a social profile (Instagram, Twitter, LinkedIn) or an action link (follow, message, share).

Influencer marketing, event badges, storefront signage—anywhere you want to drive follows or engagement. You can encode platform-specific URLs like `https://instagram.com/username` or intent URLs like `https://twitter.com/intent/follow?screen_name=username`.

If you're running a campaign where you might switch platforms or test different accounts, make it dynamic so you can update the destination without reprinting.

## App Store Links

Opens the App Store (iOS) or Play Store (Android) to your app's listing. The smart way to do this is to use a dynamic URL that detects the user's OS and routes accordingly—one QR code works for both platforms.

In-store displays, product packaging, event check-in apps, retail loyalty programs. Anywhere your goal is driving installs.

You can encode direct store URLs like `https://apps.apple.com/app/idXXXXXX`, but that only works on iOS. Better to use a service or API that handles cross-platform routing.

## Summary Table

Here's the full list with key details:

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

Most QR libraries only support URLs. If you want a vCard or WiFi code, you're responsible for formatting the data correctly according to the spec. Which means reading the vCard RFC or the WiFi QR format docs and hoping you got the syntax right.

QR for Agent handles the encoding for all 11 types. You pass structured JSON, the API formats it, returns a scannable image.

Here's a vCard example:

```bash
curl -X POST https://api.qrforagent.com/api/qr \
  -H "X-API-Key: YOUR_API_KEY" \
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

WiFi credentials:

```bash
curl -X POST https://api.qrforagent.com/api/qr \
  -H "X-API-Key: YOUR_API_KEY" \
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

Calendar event:

```bash
curl -X POST https://api.qrforagent.com/api/qr \
  -H "X-API-Key: YOUR_API_KEY" \
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

The API validates your data, formats it to spec, and returns the QR code. You don't memorize vCard syntax or figure out how to escape special characters in WiFi passwords.

## Which Type to Use

Default to URL for most things. It's flexible, trackable (if dynamic), and works everywhere.

Use specialized types when they directly match what the user is trying to do:

- Handing out your contact info? vCard.
- Sharing WiFi credentials? WiFi code.
- Promoting an event? Calendar code.
- Driving app installs? App Store link with OS detection.

If you're not sure, start with a URL. You can always serve vCard or iCal data from a URL endpoint if you want dynamic control.

All 11 types are available through QR for Agent's API and MCP server. Free tier is 10 codes and 1,000 scans per month—enough to test everything and see what fits your use case.

[Try it free](/get-started) and start generating codes that do more than open a webpage.
