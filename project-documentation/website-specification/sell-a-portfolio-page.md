# Purpose

Provide Cleveland landlords and property owners with a direct path to sell a rental portfolio as one coordinated transaction rather than managing a separate buyer and process for every house.

The page immediately establishes that Your House in Cash can evaluate and acquire a package of several properties together, including portfolios of three, five, ten, or twenty properties.

# Page Routing

- Canonical route: `/sell-property-portfolio`
- The primary CTA navigates to the existing Seller Lead Form Flow at `/get-cash-offer`.

# Hero

## Purpose

Immediately communicate the ability to purchase a Cleveland rental portfolio in one transaction.

The Hero should make the direct, package-level alternative clear: fewer buyer conversations, less coordination, and one organized process for the portfolio as a whole.

## Layout

### Desktop

- Reuse the Area Page Hero content structure and spacing.
- The content area occupies Grid Columns `1–6`.
- Grid Column `7` remains empty between the content and media areas.
- The media area occupies Grid Columns `8–12`.
- The content and media areas are vertically center-aligned within their shared Grid row.

### Tablet

- Reuse the Area Page Hero responsive content structure.
- The content area occupies all eight columns.
- The media area occupies Grid Columns `2–7`, is horizontally centered, and follows the content with the Area Page Hero’s existing Tablet spacing.

### Mobile

- Reuse the Area Page Hero responsive content structure.
- The content and media areas each occupy all four columns.
- The media follows the complete content flow with the Area Page Hero’s existing Mobile spacing.

### Background and Section Transition

- Use the existing soft brand-neutral background and global System Lines.
- Finish the lower Hero edge with one clean, full-width diagonal skew that rises toward the right, based on the supplied composition reference.
- Do not use the rectangular green accent blocks that appear at the end of the Situation Hero transition.
- The skew is structural only: do not add gradients, decorative shapes, or additional illustrations.

## Section Intro

### Content

1. Section Label: `SELL A PORTFOLIO`
2. Primary Headline: `Sell your Cleveland rental portfolio in one transaction.`
3. Supporting Copy: `Whether you own three properties or twenty, we can evaluate the portfolio as a whole and coordinate a direct, practical path to sell—without managing a separate buyer and process for every house.`

### Component and Semantics

- Use the shared Section Label Component with the canonical Lucide `Layers` icon.
- The Primary Headline uses H1 semantics.

### Visual Design

- Reuse the Area Page Hero’s existing title hierarchy, typography, spacing, and left-aligned content treatment.
- The Primary Headline uses the global Display typography and remains the Hero’s visual focal point.
- The Supporting Copy uses the global Body Large typography.
- Do not add a location pin, decorative headline underline, or manual line breaks.

## Primary CTA

### Content

- `Tell Us About Your Portfolio`

### Component and Semantics

- Use the shared Button Component with its `conversion` variant and link semantics.
- Navigate to `/get-cash-offer`.

### Supporting Microcopy

- Use the Area Page Hero microcopy: `100% free. No obligation.`
- Reuse the Area Page Hero’s existing alignment and spacing beneath the button.

## Portfolio Image Composition

### Purpose

Visually communicate several properties being considered together as one transaction.

### Content

- Use the following three residential property images:
  - Upper-left landscape image: `/images/portfolio-hero/single-family-rental.png`
  - Upper-right portrait image: `/images/portfolio-hero/cleveland-duplex.png`
  - Lower, widest landscape image: `/images/portfolio-hero/portfolio-street.png`
- The images are decorative and must not imply that any depicted property is part of a real portfolio for sale.

### Visual Design

- Use the supplied Stripe screenshot as composition inspiration only. Do not copy its typography, colors, spacing, image subjects, or exact layout.
- Arrange the three images as one staggered, editorial composition: a landscape image toward the center-left, a taller image at the upper right, and a wider image below.
- The image group should suggest multiple homes gathering into one coordinated whole, not a dashboard, sales-card grid, or house-image collage.
- Use the existing Medium Radius and Subtle Shadow. Keep the composition restrained, with no text, badges, address markers, overlays, or controls on the images.

### Dimensions and Alignment

- The complete gallery uses an approximately `541:590` width-to-height frame.
- The center-left landscape image uses an approximately `4:3` aspect ratio and occupies about `50%` of the gallery width and `34%` of its height.
- The upper-right portrait image uses an approximately `3:4` aspect ratio and occupies about `46%` of the gallery width and `56%` of its height.
- The lower wide image uses an approximately `7:5` aspect ratio and occupies about `63%` of the gallery width and `41%` of its height.
- Use gaps of approximately `4%` of the gallery width between adjacent non-overlapping image edges.
- The lower image overlaps the landscape image vertically and sits below the portrait image with the documented gap.

### Responsive Behavior

- Preserve the image group as one coherent composition while scaling it down across breakpoints.
- On Mobile, maintain a clear multi-property reading without turning the images into a uniform grid or showing them as separate cards.

# Selling a Portfolio Should Mean Fewer Moving Parts

## Purpose

Show that selling a portfolio together can replace the repeated conversations, coordination, and uncertainty of selling each house separately, while letting the portfolio continue working during the sale.

## Layout

- Use the existing Background (`#FFFFFF`) with the global faint System Lines and restrained pale-green accents.
- On Desktop, use a `5 / 1 / 6` composition. The left content area occupies Grid Columns `1–5`, Grid Column `6` remains empty, and the right benefit area occupies Grid Columns `7–12`. On the eight-column Tablet Grid, use the proportional `3 / 1 / 4` equivalent.
- The left area contains the Label, Section Heading, and Running Text in one vertical flow.
- The right area contains the eight benefit cards in a two-column internal-scrolling grid.
- On Desktop and Tablet, the section occupies at least the visible viewport below the shared Header: `min-height: calc(100svh - header height)`.
- While the section is active, hold the section in view as the visitor explores its benefits. The left area remains static/sticky beneath the shared Header, and the next section or footer must not enter the viewport before the final benefit row is reached.
- The right area is a fixed-height viewport with `overflow: hidden`. It contains a two-column card track that moves vertically inside the clipped viewport; it must not use native scrolling or expose a scrollbar.
- Capture vertical wheel and trackpad movement while the active section has unpublished track progress. Use it to move the card track only. Once the track reaches its final position, release downward scrolling to the page; when scrolling upward, move back through the track before releasing upward page scrolling.
- Use smooth, restrained movement only. Do not create a carousel effect, abrupt jumps, or heavy animation.
- Keep the visible top and bottom edges of the right area clean: cards are clipped within the viewport and do not overlap the section.
- On Mobile, return to one normal page scroll: stack the left content area followed by the eight cards. Do not use sticky positioning or an internal scroll area.

## Left Content Area

### Label

- `PORTFOLIO BENEFITS`
- Use the shared Section Label Component in its text-only treatment.

### Section Heading

- `Selling a portfolio should mean fewer moving parts.`
- Use H2 semantics and the global H2 typography.

### Running Text

- `A portfolio sale can bring several properties into one organized process, so you can spend less time coordinating separate buyers, agreements, and closing plans.`
- Use the global Body Large typography.

## Benefit Cards

### Component and Semantics

- Use one semantic unordered list containing eight benefit cards in the documented order.
- Each card is one list item containing a decorative Icon Container and H3 Card Headline on one horizontal row, followed by one semantic unordered list of two short bullets.
- Use the canonical Lucide icon assigned to each card.

### Visual Design

- Use the existing Surface background, Medium Radius, and a `1px` Border for every card. Do not use Shadows.
- Use the shared default Icon Container treatment.
- Card Headlines use the global H4 typography.
- Bullets use the global Body Small typography and remain concise; each begins with a decorative Brand Green `Check` icon. Do not add paragraphs or extra explanatory copy.
- Keep card padding, icon placement, headline spacing, and bullet spacing consistent across all eight cards.

### Card Content

1. `Building2` — **One buyer**
   - One conversation for the full portfolio
   - No need to field offers property by property
2. `FileCheck` — **One agreement**
   - One set of terms for the package
   - Clearer planning across every property
3. `MessageCircle` — **One point of contact**
   - A single person to work with
   - Less back-and-forth between buyers
4. `CalendarCheck` — **One planned closing**
   - Plan dates around your timeline
   - Coordinate the properties as one sale
5. `Combine` — **No need to sell house by house**
   - Avoid separate listings and negotiations
   - Keep decisions connected across the portfolio
6. `UsersRound` — **Occupied rentals can be included**
   - Tenants can remain in place
   - No need to wait for every lease to end
7. `WalletCards` — **Keep collecting rent while you sell**
   - Rental income can continue during the process
   - Explore a sale without pausing operations
8. `DoorOpen` — **No need to empty properties first**
   - Avoid clearing out units for showings
   - Evaluate properties in their current condition

### Responsive Behavior

- On Desktop and Tablet, show two cards per row within the right scrolling area.
- On Mobile, show one full-width card per row in the documented order.
