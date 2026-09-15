# Purpose

Provide a central directory of the cities where the company buys houses, helping sellers find their city and open its City Page.

# Page Routing

* Canonical route: `/areas-we-buy-in`.
* The existing Header navigation and the `See all areas we buy in` links on City Pages lead here.

# Hero

## Purpose

Introduce the service area and help sellers find and open their City Page.

## Layout

* Uses the global `Background` (`#FFFFFF`).
* On Desktop, the Introduction, City Search, and Popular Searches form the left content flow in Grid Columns `1–6`. The Local Illustration occupies Grid Columns `7–12`.
* On Tablet and Mobile, the elements form one full-width vertical flow in this order: Introduction, City Search, Popular Searches, Local Illustration.
* A wide, static diagonal gradient band rises from left to right across the bottom of the Hero, following the supplied Stripe screenshot reference. It passes behind the lower part of the Local Illustration while the text and search remain on white.
* The band combines a base gradient, two overlapping curved waves, and two soft radial highlights. The wave geometry and gradient stops are defined by the gradient SVG in [Areas Hero](../../src/components/area/areas-hero.tsx).
* Its darker tone mixes `70%` Brand Green Dark with `30%` Brand Green Light; its middle tone mixes `65%` Brand Green with `35%` Brand Green Light, both in sRGB. Highlights use Brand Green Light. The complete band renders at `55%` opacity over white.
* The band spans the full Hero width with parallel diagonal edges. Its vertical thickness is `3XL + 2XL + M` (`184px`) on Desktop and Tablet, and `3XL + S` (`112px`) on Mobile.
* The band's lower-left corner anchors to the Hero's bottom-left corner. Its upward slope angle is `atan2(depth, viewport width) + 9deg`, where depth is `3XL` (`96px`) on Desktop, `2XL` (`64px`) on Tablet, and `L` (`32px`) on Mobile.
* Hero bottom padding adds `3XL + 2XL + 2 × XL + L` (`288px`) on Desktop and `2 × XL + 2XL` (`160px`) on Tablet and Mobile to the global Section padding, positioning the band below the text. Total bottom padding is `384px` on Desktop, `256px` on Tablet, and `232px` on Mobile.
* Desktop content and illustration are vertically center-aligned.

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

* Both elements are left-aligned and span the available content-area width.
* Text wraps naturally.

### Spacing

* Use the existing Area Page introduction spacing: `M` (`24px`) between headline and supporting copy.

### Spacing After

* Use the existing Area Page introduction spacing: `L` (`32px`) after the introduction on Desktop and Tablet, and `M` (`24px`) on Mobile.

## City Search

### Content

* Visible label: **Find your city**.
* Placeholder: **Enter city name**.
* Suggestions use the registered city names and canonical slugs defined in [Area Data](content/areas.md#city-list).
* Empty-results message: **No matching cities found.**
* Loading message: **Searching cities…**.

### Component and Semantics

* Uses the shared [Autocomplete](../component-library.md#autocomplete) in standalone use.

### Visual Design

* The input and its visible label reuse the presentation defined by [Text Field](../form.md#text-field) and [Field](../form.md#field). Search behavior remains governed by Autocomplete and this element's Interaction requirements.

### Dimensions and Alignment

* The search fills the available content-area width.
* Label placement and input minimum height follow Text Field.

### Spacing

* Label-to-input spacing and input padding follow Text Field.

### Spacing After

* `S` (`16px`) separates City Search from Popular Searches at all Breakpoints.

### Interaction

* Typing displays cities whose names contain the entered text, ignoring letter case.
* Selecting a suggestion opens that city's canonical City Page.
* Minimum query length: one character. Debounce delay: `0ms`.
* Display all matching registered cities in English alphabetical order by city name. The maximum suggestion count follows the registered city count.
* When no suggestion is active, Enter opens the City Page only when the input exactly matches a registered city name, ignoring letter case. Otherwise, focus remains in the input so the user can continue typing or select a suggestion.

## Popular Searches

### Content

* Label: **Popular searches:**.
* City links, in order: **Cleveland**, **Euclid**, **Lakewood**, **Parma**.

### Component and Semantics

* Each city uses the shared [Text Link](../component-library.md#text-link) Component.

### Visual Design

* The label uses global `Body` typography and `Text Secondary` color.

### Dimensions and Alignment

* The label precedes the four links in a horizontal flow that wraps naturally as space requires.

### Spacing

* `XS` (`8px`) separates the label and city links, adjacent city links, and wrapped rows at all Breakpoints.

### Spacing After

* On Tablet and Mobile, `L` (`32px`) separates Popular Searches from the Local Illustration.

### Interaction

* Each link opens its city's canonical City Page.

## Local Illustration

### Content

* A house at the center, surrounded by four location pins labeled with the cities defined in Popular Searches.

### Visual Design

* Uses an isometric house illustration viewed slightly from above and from the side, with clean shapes, the brand's green palette, and subtle depth.
* The isometric scene contains a white house with green roof planes, windows and a door, on a pale diamond-shaped plot with paths and two trees. The illustration geometry is defined by the SVG in [Areas Hero](../../src/components/area/areas-hero.tsx).
* Floating city labels use global Body typography, Brand Green Dark text, Surface background, the default Border, Small Radius, and Subtle Shadow. Their padding is `XS` (`8px`) vertically and `S` (`16px`) horizontally. Each label sits `XS` (`8px`) above a Large (`24px`) Lucide `MapPin` in Brand Green Dark with Brand Green Light fill.

### Dimensions and Alignment

* The illustration fills its allocated width up to `600px`, is horizontally centered, and retains a `6:5` aspect ratio at all Breakpoints.
* City markers use the illustration frame as their positioning reference: Cleveland at `top: 2%; left: 4%`; Euclid at `top: 10%; right: 2%`; Lakewood at `bottom: 14%; left: 0`; Parma at `bottom: 4%; right: 5%`.

### Accessibility

* The illustration is decorative; its city names are already provided by the Popular Searches links.

# City Directory Section

## Purpose

Help sellers browse all supported cities and open a City Page.

## Layout

* Follows the Hero and presents the City List across the full Content Grid width.
* Uses the global `Background` (`#FFFFFF`).

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
