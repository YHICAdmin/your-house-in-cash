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
* On Desktop, the Introduction, City Search, and Popular Searches form the left content flow in Grid Columns `1–6`. The Local Illustration occupies Grid Columns `8–12`, with Grid Column `7` providing separation between the two areas.
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

* `XS` (`8px`) separates City Search from Popular Searches at all Breakpoints.

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

* The complete row uses global `Body Small` font size and line height (`14px / 1.5`) at all Breakpoints. The label uses `Text Secondary`; city links retain the Text Link weight, colors, and interaction states.
* City links have a persistent underline with a `3px` underline offset in all interaction states at every Breakpoint, as a local override of Text Link styling.

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

* A schematic dotted map of Cleveland and its surroundings, with Lake Erie to the northwest and the four cities defined in Popular Searches marked by name. City placement communicates their approximate relative positions.

### Visual Design

* The land uses fine Brand Green dots, a subtle shoreline, and soft fading at the outer edges and bottom. A pale Brand Green Light glow suggests the lake. Thin curved lines visually connect Cleveland with the other three cities.
* The map geometry, dot pattern, connecting curves, and fade masks are defined by the SVG in [Local Area Map](../../src/components/area/local-area-map.tsx).
* City labels use global Body typography and Brand Green Dark text, with `XS` (`8px`) horizontal padding and a soft white radial background for legibility.
* Each city marker has a `24px` circular halo with an `8px` Brand Green center. The halo uses a `1px` Brand Green border at `30%` opacity and Brand Green Light fill at `70%` opacity.

### Dimensions and Alignment

* The illustration fills its allocated width up to `600px`, is horizontally centered, and retains a `6:5` aspect ratio at all Breakpoints.
* Marker centers use the illustration frame as their positioning reference: Cleveland at `top: 48%; left: 42%`; Euclid at `top: 22%; left: 78%`; Lakewood at `top: 57%; left: 12%`; Parma at `top: 78%; left: 44%`. Labels are horizontally centered above their markers.

### Spacing

* `XS` (`8px`) separates each city label from its marker.

### Accessibility

* The illustration is decorative; its city names are already provided by the Popular Searches links.

# City Directory Section

## Purpose

Help sellers browse all supported cities and open a City Page.

## Layout

* Follows the Hero, with an Introduction above the City List across the full Content Grid width.
* Uses the global `Background` (`#FFFFFF`).

## Introduction

### Content

* Primary Headline: **Find your city**.
* Supporting Copy: **Explore the cities where we buy houses. Select your city to learn more about selling your house as-is.**

### Component and Semantics

* The headline uses `H2` semantics; Supporting Copy uses paragraph semantics.

### Visual Design

* The headline uses global H2 typography and Text Primary. Supporting Copy uses global Body Large typography and Text Secondary.

### Dimensions and Alignment

* Both elements are left-aligned and span the available Content Grid width.

### Spacing

* `M` (`24px`) separates the headline from Supporting Copy at all Breakpoints.

### Spacing After

* `L` (`32px`) separates the Introduction from the City List on Desktop and Tablet; `M` (`24px`) on Mobile.

## City List

### Content

* Display all 30 currently registered cities exactly once. Future registered cities appear automatically.
* City entries appear in English alphabetical document order by displayed city name.
* Group cities by their initial letter. Each populated letter appears once as its group's heading; groups and their cities follow alphabetical order.

### Component and Semantics

* Use one semantic unordered list of letter groups. Each group contains an `H3` letter heading and a nested unordered list of cities.
* Each city list item contains one native link wrapping the `MapPin` icon and the visible city name.

### Visual Design

* Reuse the city-entry treatment from the Area Page's [Nearby Areas](area-page.md#nearby-areas): open icon-and-name links, Body typography, Medium `MapPin` icons, and default colors.
* Letter headings use global H3 typography and Brand Green Dark.

### Dimensions and Alignment

* The list spans the full available Content Grid width.
* Letter groups occupy the spaces between the System Lines: four columns on Desktop (three Content Grid columns each), two on Tablet (four Content Grid columns each), and one on Mobile (the complete four-column Content Grid).
* Fill letter groups left to right across each row, then top to bottom. Cities within each group form one vertical list.
* Each link fills its grid cell's width. City names wrap naturally within the available text width, including at the supported minimum viewport width.

### Spacing

* Horizontal gaps between letter groups inherit the Content Grid gutters. `L` (`32px`) separates rows of letter groups.
* `S` (`16px`) separates a letter heading from its city list and adjacent city entries vertically. Icon-to-name spacing reuses Nearby Areas' `XS` (`8px`) gap.

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
