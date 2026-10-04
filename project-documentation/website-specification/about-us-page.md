# Purpose

Introduce Your House in Cash and explain its approach. The page gives homeowners a clear understanding of why the company exists, the direct-sale option it provides, and what they can expect when they reach out.

The page is structured as four sections, excluding the shared Header and Footer:

1. Introduction.
2. Belief and Process.
3. What You Can Expect.
4. Final CTA.

Normal paragraph copy uses the global primary text color. The shared Footer uses its default white Background on this page.

# Page Routing

- Canonical route: `/about-us`
- The primary CTA navigates to the standard Seller Lead Form Flow at `/get-cash-offer`.

# Introduction

## Purpose

Give the visitor a calm, credible first understanding of Your House in Cash and its approach. This is not a sales Hero and does not reuse the Area or Situation Hero patterns.

## Layout

- Use the existing white Background as a full-width section background.
- On Desktop, use a `6 / 1 / 5` composition: the left six columns contain the Label and Introduction Copy, the center column is empty, and the right five columns contain Noah's photograph.
- Use `2XL` (`64px`) Desktop vertical padding. Vertically center the text composition relative to the photograph.
- On Mobile, retain one simple, airy flow: Label and text first, photograph second.
- Do not add a CTA, house collage, trust badges, benefit rows, testimonials, statistics, deal counts, or decorative mobile-only elements.

## Label

- Content: `ABOUT US`
- Use the shared Section Label Component with the canonical Lucide `House` icon.

## Heading

- Content: `Hi, I’m Noah, the person behind Your House in Cash.`
- Use H1 semantics with global H2 visual typography.

## Introduction Copy

- Content: `My Cleveland real estate journey began in 2021, and I work with Cleveland-area homeowners who want a clear, direct option for selling a house.`
- Use global Body typography.

## Founder Photograph

- Use the Introduction-specific founder photo at `/images/about-us/noah-founder-introduction.png`.
- Keep `/images/about-us/noah-founder.png` available for use elsewhere on the page.
- Use a simple rounded-rectangle treatment with no overlays, filters, text, badges, or decorative elements.
- On Desktop, use a wide `3:2` landscape frame with `object-position: 55% 50%`. Keep Noah recognizable from roughly mid-thigh up while preserving the Cleveland house and residential-street context.
- On Tablet and Mobile, use a smaller contextual `3:2` frame; do not create a close portrait crop.

# Belief and Process

## Purpose

Show the belief behind Your House in Cash and how that belief changes the first conversation with Noah. This section combines the former `What I Believe` and `A Direct Answer, Early` content into one concise composition.

## Layout

- Use the existing Background Neutral (`#F8F8F8`) with the global faint System Lines.
- Remove the former section labels. Use one Main Title above two equal-width, tall editorial cards.
- On Desktop and Tablet, place the cards side by side in one row. On Mobile, stack the Main Title, left card, then right card.
- Each card contains a Title, one running-text block, and an image. Use the same founder image in both cards for now: `/images/about-us/noah-founder.png`.
- Use existing Surface, Medium Radius, and restrained card styling. The cards should read as one paired editorial composition, not a feature grid.
- Use `Screenshot 2026-10-04 153527.png` as composition inspiration only. Do not copy its typography, colors, spacing, imagery, or interface elements.
- Do not add labels, CTA buttons, testimonials, statistics, badges, icons, or extra decorative elements.

## Main Title

- Content: `You deserve a clear, honest option.`
- Use centered H2 semantics and global H2 typography. Keep the title on one line where the available width supports it; allow natural wrapping on narrower screens.

## Left Card: Belief

### Title

- `There isn’t one right path.`
- Use H3 semantics and global H3 typography.

### Running Text

- `Sometimes listing with an agent is the best path. Other times, the work, time, showings, uncertainty, or condition of the property make an as-is sale more practical. Either way, you should be able to understand the real options before deciding what comes next. That’s why I started Your House in Cash.`
- Use global Body typography at its default size. The final sentence remains the ending of the running text.

### Image

- Use `/images/about-us/noah-founder.png` in a centered rounded-rectangle frame at 80% of the reserved image-area width and height. Preserve the complete image area so the card height remains unchanged. Do not add overlays, filters, text, badges, or decorative elements.

## Right Card: Direct Answer

### Title

- `A Direct Answer, Early`
- Use H3 semantics and global H3 typography.

### Running Text

- `When you contact Your House in Cash, you speak directly with me. I take the time to understand the property and your situation before making an offer. My goal is not to force every house into a deal. It is to identify whether there is a realistic path to a completed sale. If there is a realistic path, I’ll explain the offer and the next steps clearly. If there is not, I’ll be upfront about that too. Either way, you get a clear answer without pressure.`
- Use global Body typography at its default size. The final sentence remains the ending of the running text.

### Image

- Use the same `/images/about-us/noah-founder.png` treatment as the Left Card.

# What You Can Expect

## Purpose

Turn the earlier promises into two practical standards for working with Your House in Cash. This is how Noah works, not a generic benefits or features section.

## Layout

- Use the existing white Background with the existing five Desktop background lines as subtle structural framework.
- On Desktop and Tablet, the Label and Heading span the section above the two standards, which share one row.
- On Mobile, stack the Label, Heading, then standards in order.
- Do not use separate cards, bordered boxes, shadows, or a generic feature grid. Do not add a CTA, testimonials, statistics, badges, review stars, or claims that the business is local or large.

## Label

- Content: `HOW I WORK`
- Use the shared Section Label Component with the canonical Lucide `ListChecks` icon.

## Heading

- Content: `What you can expect.`
- Use global H2 typography.

## Clear Communication

- Standard number: `01`
- Title: `Clear communication`
- Copy: `You will know what the offer is, what it is based on, and what the next steps would look like before you decide anything.`

## A Practical As-Is Option

- Standard number: `02`
- Title: `A practical as-is option`
- Copy: `You do not need to repair the house, prepare it for showings, or make it look perfect just to explore a direct sale.`

# Final CTA

## Purpose

Close the page with a calm, clear next step after the visitor has met Noah, understood the approach, and knows what to expect.

## Layout

- Use the shared Final CTA with the existing soft brand-neutral Background and established responsive behavior.
- The CTA is the natural conclusion of the page, not a high-pressure marketing push.

## Content

- Section Label: `READY WHEN YOU ARE`
- Heading: `Let’s Start With a Clear Number`
- Supporting Copy: `If you are considering selling a Cleveland-area house, tell me a little about the property and your situation. I will review it and provide a no-obligation as-is cash offer, so you can decide whether it is the right fit.`
- Primary CTA: `Get My Cash Offer`
- CTA destination: `/get-cash-offer`
- Reassurance Row: `100% free. No obligation.`

## Supporting Benefits

1. `House` icon; heading `A practical as-is option`; supporting copy: `You do not need to repair the house, prepare it for showings, or make it look perfect just to explore a direct sale.`
2. `CircleCheck` icon; heading `No obligation`; supporting copy: `An offer is simply one option. You should choose the path that works best for you.`
