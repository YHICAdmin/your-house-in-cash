# Purpose

Give real estate investors a direct entry point for receiving off-market investment opportunities in Greater Cleveland.

# Page Routing

- Canonical route: `/buyers`.
- The page uses the shared site Header and Footer.
- The primary CTA uses the in-page fragment destination `#buyer-registration`. The Buyer Registration Form Section that owns this target is intentionally not part of the current page scope.

# Hero

## Purpose

Immediately establish the page as an investor-focused opportunity flow and encourage visitors to join the buyers list.

## Content

1. Primary Headline: `Find Your Next Investment Property in Greater Cleveland`
2. Supporting Copy: `Join our buyers list to receive off-market investment opportunities that match your buying criteria.`
3. Primary CTA: `Join Our Buyers List`

## Component and Semantics

- The Primary Headline uses `h1` semantics.
- The Supporting Copy uses paragraph semantics.
- The Primary CTA uses the shared Button Component with the `conversion` variant and link semantics.
- The CTA links to `#buyer-registration`; the future registration section must expose that exact ID when it is implemented.

## Layout

- Use the global Content Grid, Section spacing, and System Lines.
- On Desktop, the content occupies Grid Columns `1–6`, Grid Column `7` remains open, and the media occupies Grid Columns `8–12`. The content and media are vertically center-aligned.
- On Tablet, the content occupies all eight columns. The media occupies Grid Columns `2–7` and follows the content.
- On Mobile, the content and media each occupy all four columns, with the media following the content.
- Vertically center the content within a generously spaced Hero composition. Do not add cards, badges, secondary CTAs, microcopy, or benefit lists.

## Visual Design

- Use the global Display typography for the Primary Headline and global Body Large typography with Text Secondary color for the Supporting Copy.
- Use the shared dark conversion-button treatment so the CTA remains the Hero’s prominent action.
- Keep the Hero’s base Background neutral and light. Add a restrained Brand Green Light gradient treatment toward the lower portion of the Hero, consistent with the site-wide Hero background system.
- Preserve the global System Lines above the background treatment and below foreground content.

## Hero Media

- Use `/images/buyers/cleveland-brick-duplex-fixer-upper.png` in the Hero’s media area.
- Use the supplied brick duplex image as a real-estate-investment visual, with the alt text `Brick duplex investment property exterior`.
- Preserve a `3:2` media frame using the global Medium Radius and Subtle Shadow. The image fills the frame with `object-fit: cover`.

## Spacing

- Separate the Primary Headline from the Supporting Copy by `M` (`24px`).
- Separate the Supporting Copy from the Primary CTA by `L` (`32px`).
- Use the global Section spacing at every breakpoint.

## Responsive Behavior

- Preserve the same semantic content order at all breakpoints: headline, supporting copy, CTA.
- Keep the CTA at full available content width on Mobile through the shared conversion-button behavior.
- On Tablet and Desktop, use the shared conversion-button width behavior: 60% of the available content width, up to `360px`.
- Preserve the lower gradient treatment and System Lines across breakpoints.

# Footer

- Use the shared Site Footer with its `Background Soft` variant.
