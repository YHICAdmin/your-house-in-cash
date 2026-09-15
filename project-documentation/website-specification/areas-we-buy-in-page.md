# Purpose

Provide a central directory of the cities where the company buys houses, helping sellers find their city and open its City Page.

# Page Routing

* Canonical route: `/areas-we-buy-in`.
* The existing Header navigation and the `See all areas we buy in` links on City Pages lead here.

# City Directory Section

## Purpose

Help sellers find their city and open its City Page.

## Layout

The Introduction appears above the City List in one full-width vertical flow across all Breakpoints.

* Uses the global `Background` (`#FFFFFF`).

## Introduction

### Content

1. Primary Headline: **Areas We Buy Houses In**
2. Supporting Copy: **We buy houses as-is across Cleveland and the surrounding communities. Find your city below to learn more.**

### Component and Semantics

* The Primary Headline uses `H1` semantics.
* Supporting Copy uses paragraph semantics.

### Visual Design

* The Primary Headline uses global Display / H1 typography and Text Primary.
* Supporting Copy uses global Body Large typography and Text Secondary.

### Dimensions and Alignment

* Both elements are left-aligned and span the available Content Grid width.
* Text wraps naturally.

### Spacing

* Use the existing Area Page introduction spacing: `M` (`24px`) between headline and supporting copy.

### Spacing After

* Use the existing Area Page introduction spacing: `L` (`32px`) after the introduction on Desktop and Tablet, and `M` (`24px`) on Mobile.

## City List

### Content

* Display all 30 currently registered cities exactly once. Future registered cities appear automatically.
* City entries appear in English alphabetical document order by displayed city name.

### Component and Semantics

* Use one semantic unordered list.
* Each list item contains one native link wrapping the `MapPin` icon and the visible city name.

### Visual Design

* Reuse the city-entry treatment from the Area Page's [Nearby Areas](area-page.md#nearby-areas): open icon-and-name links, Body typography, Medium `MapPin` icons, and default colors.

### Dimensions and Alignment

* The list spans the full available Content Grid width.
* Desktop: three equal-width columns.
* Tablet: two equal-width columns.
* Mobile: one full-width column.
* Fill left to right across each row, then top to bottom.
* Each link fills its grid cell's width. City names wrap naturally within the available text width, including at the supported minimum viewport width.

### Spacing

* Reuse the Nearby Areas city-entry spacing: `XS` (`8px`) icon-to-name gap and `S` (`16px`) horizontal and vertical gaps between entries.

### Interaction

* Reuse the Nearby Areas city-entry hover and active states and color transitions.

### Accessibility

* The city name is the link's accessible name.
* The `MapPin` icon is decorative.
* Preserve the same alphabetical DOM and keyboard order at every Breakpoint.

### Technical Requirements

* The directory reads the registered cities from `src/data/areas.ts`. The approved city inventory is documented in [Area Data](content/areas.md#city-list).
* Sort without mutating the canonical dataset.
* Derive each destination from its canonical slug using the existing `getAreaPagePath` function.

# Final CTA

Use the [shared Final CTA](../shared-sections.md#final-cta).

## Layout

* Uses the global `Background Soft` (`#F7F9F7`).

## Content

* Primary CTA: **Get My Cash Offer**, linking to `/get-cash-offer`.
* Reuse the Area Page Final CTA's Section Label (**Ready When You Are**), Reassurance Row (**100% free. No obligation.**), and two Supporting Benefits in their existing order and wording: **Sell As-Is**, then **Close on Your Timeline**. Their content is defined in [Area Page — Final CTA](area-page.md#final-cta).
* Primary Headline: **Ready to sell your house?**
* Supporting Copy: **Tell us about your house and receive a fair, no-obligation cash offer built around your situation and timeline.**
