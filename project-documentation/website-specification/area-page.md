**Purpose**

The primary page template for Cleveland and future city/area pages.

The primary goal is to generate leads from motivated home sellers.

Secondary goals are to build trust, demonstrate a local presence, and support organic and local search visibility.

**Page Structure**

1. Header
2. Hero
3. Situations
4. Reviews
5. How It Works
6. Cleveland / Local Section
7. FAQ
8. Final CTA
9. Footer

**Visual Direction**

Clean, modern, and spacious, with strong typography and clear visual hierarchy. Use generous whitespace to create the feel of a trustworthy local business rather than a generic cash-buyer website.

Visual elements and gradients may be used to create character and atmosphere, but should not compete with the content. Media should support the message while remaining secondary in the visual hierarchy.

Sections may use different compositions as long as a cohesive visual language is maintained throughout the website.

# Hero

## Purpose

Immediately communicate the location, offer, and credibility of the business.

Provide the seller with a clear path to begin the conversion process.

## Layout

### Desktop

* The content area occupies Grid Columns `1–6`.
* Grid Column `7` remains empty between the content and media areas.
* The media area occupies Grid Columns `8–12`.
* The content area and media area are vertically center-aligned within their shared Grid row.
* The media area contains the `Local Images` and `Local Trust Card`.

### Tablet

* The content area occupies all 8 columns.
* The media area occupies all 8 columns.
* The media area appears below the content area with a 64px gap.

### Mobile

* The content area occupies all 4 columns.
* The media area occupies all 4 columns.
* The media area appears below the content area with a 48px gap.

### Cross-Section Background Transition

* One cross-section transition layer owns the complete temporary green treatment.
* The transition begins within the lower Hero and extends `96px` (`3XL`) into the following Situations Section.
* The upper boundary begins at approximately `95%` of the Hero height on the left, `80%` near the center, and `65%` on the right.
* The boundary forms a smooth, continuous wave that is higher on the right and lower on the left, creating a strong diagonal descent from right to left without jagged edges or corners.
* The wave and Gradient scale smoothly across Breakpoints while preserving their direction, relative position, and visual continuity.
* The upper Hero remains `#FFFFFF`. Within the transition band, the color progresses from `#FFFFFF` through the temporary `#DFEEE2` green treatment and fades back to the global white Background by the end of the `96px` (`3XL`) depth inside the Situations Section.
* After the transition completes, the Situations Section retains its normal inherited global white Background and does not own or continue a persistent `#DFEEE2` background.
* The treatment spans the full viewport width without introducing horizontal overflow and is not constrained by the Content Container or Grid.
* The global System Lines remain visible above the treatment, and foreground content remains above both.
* The treatment must preserve foreground-content contrast and readability.

## Section Label

### Content

* Content template: `[City], Ohio`.
* `[City]` is the city name only, without the state.
* The content changes dynamically between Area Pages.
* Rendered example: `CLEVELAND, OHIO`.
* Includes the `MapPin` icon from `lucide-react`.

### Component and Semantics

* Uses the documented `Section Label` Component.

### Visual Design

* The `[City], Ohio` template renders in uppercase.

### Spacing After

* `16px` (`S`).

### Interaction

* Non-interactive.

## Primary Headline

### Content

* Content template: `Sell Your House Fast in [City]`.
* The city name changes dynamically between Area Pages.
* This Hero content template applies to City Area Pages; non-city Area Pages require a separately defined content template.

### Component and Semantics

* Uses `H1` semantics.

### Visual Design

* Uses the global `H1` typography.
* `Sell Your House Fast in` uses the global `Text Primary` color.
* `[City]` uses the same global `Text Primary` color as the rest of the headline.
* Acts as the primary visual focal point of the Hero.

### Dimensions and Alignment

* Wraps naturally according to the available width; do not add manual line breaks.
* `[City]` may wrap naturally at word boundaries but must not break within a word.
* The `[City]` text block follows the rendered width of the city name and is constrained to the available headline width.
* A single decorative hand-drawn stroke appears `4px` beneath the complete `[City]` text block.
* The stroke spans the complete rendered width of the `[City]` text block, with its rounded left and right ends aligned to the corresponding city-text edges.
* The stroke occupies a `16px`-high decoration area and is approximately `9–11px` thick, with slight natural variation across its length.
* The stroke's centerline is approximately `7.5px` from the top of the decoration area at the left, descends to approximately `10.5px` through the middle, and lifts to approximately `8px` near the right edge.
* The stroke uses Brand Green at `40%` opacity and forms one long, predominantly horizontal marker or brush shape with soft, rounded ends.
* When a multi-word city wraps, the stroke remains one decoration beneath the complete city block and does not repeat beneath individual lines.
* The stroke is decorative and does not affect text layout.

### Spacing After

* `24px` (`M`).

## Supporting Copy

### Content

* Content template: `We buy houses in [City] as-is, with no repairs, fees, or waiting for a traditional sale.`
* The city name changes dynamically between Area Pages.

### Visual Design

* Uses the global `Body Large` typography.
* Remains visually secondary to the Primary Headline.

### Spacing After

* `32px` (`L`).

## Button

### Content

* Label: `Get My Cash Offer`.

### Component and Semantics

* Uses the documented `Button` Component.
* Renders with anchor semantics because it navigates to a separate route.

### Dimensions and Alignment

* Minimum height: `64px`.
* Horizontal internal padding: `48px` (`XL`).

### Spacing After

* `8px` (`XS`).

### Interaction

* Navigates to the Seller Lead Form Flow at the canonical internal route `/get-cash-offer`.

### Responsive Behavior

* On Mobile, uses `100%` of the available content width.
* On Tablet and Desktop, uses `60%` of the available content width, up to a maximum width of `360px`.

## Supporting Microcopy

### Content

* Content: `100% free. No obligation.`

### Visual Design

* Uses the global `Body Small` typography.
* Uses the global `Text Secondary` color.
* Remains visually secondary to the `Button`.

### Dimensions and Alignment

* Horizontally centered relative to the `Button` rather than the full content area.

### Spacing After

* `32px` (`L`).

### Interaction

* Non-interactive.

## Benefits List

### Content

* Contains exactly three benefits in the documented order:

  * `House` — `Sell As-Is`.
  * `BadgeDollarSign` — `No Fees`.
  * `CalendarCheck` — `Choose Your Closing Date`.
* Each benefit consists of an `Icon Container` followed by a short text label.

### Component and Semantics

* Uses one semantic unordered list containing exactly three list items.
* Benefits are informational and non-interactive.
* Each benefit icon uses the documented `Icon Container` Component.

### Visual Design

* Benefit labels use the global `Body Small` typography.
* Outside the `Icon Container`, individual benefits do not use Cards, backgrounds, Borders, or Shadows.

### Dimensions and Alignment

* Each `Icon Container`-and-label pair remains together as one item.
* Labels may wrap naturally at word boundaries but must not break within words.
* The `Icon Container` and label are vertically center-aligned within each benefit item.
* The gap between the `Icon Container` and label is `8px`.

### Accessibility

* `House`, `BadgeDollarSign`, and `CalendarCheck` are decorative.

### Responsive Behavior

* On Desktop and Tablet, the benefits are displayed in a single horizontal row that does not wrap.
* On Mobile, the benefits are displayed vertically in the same document order.
* The inter-benefit gap is `24px` (`M`): horizontal on Desktop and Tablet, and vertical on Mobile.

## Local Images

### Content

* The media area contains exactly three rectangular images.
* The same three images are used across all City Area Pages and do not change according to `[City]`.
* The images provide general residential context and must not imply that they depict the named city.
* The currently selected image assets are temporary and will later be replaced by three final shared images.
* The final images retain the same asset paths, Aspect Ratios, composition geometry, and responsive behavior.
* Left Image temporary asset path: `/images/area-hero/local-left.png`.
* Top-Right Image temporary asset path: `/images/area-hero/local-right.png`.
* Bottom-Right Image temporary asset path: `/images/area-hero/local-bottom.png`.

### Visual Design

* All three images fill their frames without distortion and use the global Medium Border Radius and global Subtle Shadow.
* The three images form one cohesive rectangular mosaic.

### Dimensions and Alignment

* The complete image mosaic fills the available Grid Columns `8–12` media area and preserves a `541:328` Aspect Ratio.
* The Left Image is positioned on the left, occupies `50.0924%` of the mosaic width, and spans `100%` of its height.
* The Top-Right Image is positioned to the right of the Left Image, occupies `46.2107%` of the mosaic width and `46.9512%` of its height, and aligns with the mosaic's top edge.
* The Bottom-Right Image is positioned directly beneath the Top-Right Image, uses the same proportions, and aligns with the mosaic's bottom edge.
* The horizontal gap between the Left Image and both right-side images is `3.6969%` of the mosaic width.
* The vertical gap between the Top-Right and Bottom-Right Images is `6.0976%` of the mosaic height.
* The combined height of the two right-side images and their vertical gap equals the full height of the Left Image.
* The mosaic has no additional outer padding.

### Accessibility

* All three images are decorative.

### Responsive Behavior

* At narrower widths, the complete mosaic, image dimensions, horizontal and vertical gaps, and relative positions scale down proportionally as one visual unit.
* The Left, Top-Right, and Bottom-Right Image order and rectangular mosaic relationship remain unchanged across all Breakpoints, including the supported `320px` minimum width.

## Local Trust Card

### Content

* Uses the local portrait asset at `/images/local-trust-portrait.webp`.
* Primary headline:
  Local. Reliable.
  Cleveland’s Neighbor.
* The line break after `Reliable.` is preserved.
* Supporting text:
  We’re a local Cleveland
  company you can trust.
* The line break after `Cleveland` is preserved.
* Preserves the same content across all Area Pages.

### Component and Semantics

* The Primary Headline uses paragraph semantics rather than semantic heading semantics.

### Visual Design

* The portrait fills its crop without distortion and uses a circular crop with the global Pill Radius.
* The Primary Headline uses global `H3` typography and the global Text Primary color.
* The supporting text uses global `Body Large` typography and the global Text Secondary color.
* The card uses the global Surface color, Medium Border Radius, and Floating Shadow.

### Dimensions and Alignment

* The card spans `100%` of the Local Images row width and aligns with both outer edges.
* Uses `16px` (`S`) internal padding.
* The portrait is rendered at `125px × 125px` with a `1:1` Aspect Ratio.
* The portrait appears on the left, with the text block positioned to its right and separated by a `16px` (`S`) gap.
* The portrait and text block are vertically centered within the card.
* The complete portrait-and-text row is horizontally centered within the card.
* All text is left-aligned within the text block.
* The supporting text appears beneath the primary headline with an `8px` (`XS`) vertical gap.
* The card is centered beneath the Left and Right Images.
* `S` (`16px`) of vertical space separates the images' shared bottom edge from the card across all Breakpoints.

### Accessibility

* The portrait is decorative.

### Responsive Behavior

* The full-width card and horizontal portrait-and-text arrangement remain unchanged across all Breakpoints.
* Text wraps naturally when required by the available width while preserving the explicit line breaks after `Reliable.` and `Cleveland`.

# Situations — Situations We Can Help With

## Purpose

Help sellers identify the situation that best matches their circumstances and understand that the company has relevant experience.

Provide entry points to dedicated Situation Pages for each documented situation.

## Layout

On Desktop, the main content area:

* Spans the complete Desktop Grid from Column `1` through Column `12`.
* Uses the second System Line from the left to separate the two areas between Grid Columns `3` and `4`.
* Places the Situation Selector and Selected Situation Content in one content-driven row whose two areas share the same top and bottom edges.

## Section Label

### Content

* Text: `We Help With`.
* Includes the canonical Lucide `House` icon.

### Component and Semantics

* Uses the documented `Section Label` Component.

### Spacing After

* `16px` (`S`) across all Breakpoints.

## Primary Headline

### Content

* Text: `What brings you here?`

### Component and Semantics

* Serves as the Situations Section's semantic `H2`.

### Spacing After

* `24px` (`M`) across all Breakpoints.

## Supporting Copy

### Content

* Text: `Every homeowner’s situation is different. Choose what best describes yours to see how we can help.`

### Component and Semantics

* Uses paragraph semantics.

### Visual Design

* Uses the global `Body Large` typography.

### Spacing After

* `48px` (`XL`) on Desktop and Tablet.
* `32px` (`L`) on Mobile.

## Situation Selector

### Content

* Contains the following options in canonical order:
  1. `Foreclosure`.
  2. `Inherited Property`.
  3. `Tired Landlord`.
  4. `Major Repairs`.
  5. `Vacant Property`.
  6. `Problem Tenants`.
  7. `Relocation`.
  8. `Divorce`.
  9. `Behind on Property Taxes`.
  10. `Code Violations`.

### Component and Semantics

* The Situation Selector uses independent selection buttons.
* Exactly one option is selected at a time.
* `Foreclosure` is selected by default when the Section first loads.

### Visual Design

* Across all Breakpoints, the Situation Selector remains visually open and transparent, without a surrounding Card, background, Border, Radius, or Shadow.
* Each option uses the global `Body` typography and `Text Primary` color.
* The default state does not use a background, Border, Divider, Radius, or Shadow.
* Across all Breakpoints, the selected option uses Brand Green Dark text at `600` font weight.
* A persistent `2px` solid Brand Green Dark indicator appears beneath the selected option.
* The selected option does not use a background, Card treatment, Radius, or Shadow.
* When an unselected option is hovered, its text changes to Brand Green Dark while its font weight remains unchanged.
* Hovering an unselected option does not display the persistent selected indicator or add a background, Card treatment, Radius, or Shadow.

### Dimensions and Alignment

* On Desktop, occupies Grid Columns `1–3`.
* Text is left-aligned.
* Each option has a minimum interactive height of `48px`, with `8px` vertical and `16px` horizontal internal padding.
* The indicator follows the rendered option text width only, excluding the option's padding and available row width.
* The indicator appears `4px` below the text.
* The indicator's geometry remains unchanged across all Breakpoints.

### Spacing After

* On Tablet, `48px` (`XL`) separates the Situation Selector from the Selected Situation Content.
* On Mobile, `32px` (`L`) separates the Situation Selector from the Selected Situation Content.

### Interaction

* Selecting an option updates the Selected Situation Content within the Section and keeps keyboard focus on the selected option.
* `Enter` or `Space` selects the focused option.

### Accessibility

* The visible Primary Headline provides the Situation Selector's accessible name.
* The visible Supporting Copy provides the Situation Selector's accessible description.
* Each option is reached individually with `Tab` and `Shift + Tab`.
* The selected state is communicated to assistive technologies.
* Selected Situation Content updates are announced politely without interrupting other assistive-technology output.
* Update announcement template: `[Situation] details are now available.`
* Keyboard focus remains visible when navigating the Mobile strip.

### Responsive Behavior

* On Tablet and Mobile, uses the available content width.
* On Desktop, displays all situation options simultaneously in a vertical Selector.
* On Tablet and Mobile, displays the situation options in one manually scrollable horizontal strip above the Selected Situation Content.
* When additional options extend beyond the visible Tablet or Mobile area, part of the next option remains visible to indicate horizontal continuation.
* The Tablet and Mobile strip does not advance automatically.
* On Desktop, each option uses its content-based width, with an `8px` (`XS`) vertical gap between options.
* On Tablet and Mobile, each option uses its content-based width, with an `8px` (`XS`) gap between options in the horizontal strip.

## Selected Situation Content

### Component and Semantics

* Forms an identifiable content region associated with the currently selected Situation option.
* Its accessible name is derived from the selected option and updates when the selection changes.
* Displays content corresponding to the selected Situation Selector option.

### Visual Design

* Uses Background Soft with the global Medium Radius and no Border or Shadow.

### Dimensions and Alignment

* On Desktop, occupies Grid Columns `4–12`.
* On Desktop and Tablet, the Situation Image occupies the left `4/9` of the panel and the remaining content occupies the right `5/9`.
* The content area uses `32px` (`L`) internal padding on Desktop and Tablet and `24px` (`M`) on Mobile.

### Responsive Behavior

* On Tablet and Mobile, uses the available content width.
* On Desktop and Tablet, presents the Situation Image on the left and the selected situation heading, Situation Explanation, Situation Benefits, and Situation CTA vertically on the right in that order.
* On Mobile, presents the Situation Image first, followed by the selected situation heading, Situation Explanation, Situation Benefits, and Situation CTA in one vertical composition.
* On Mobile, remains a stationary content area and does not participate in the Selector's horizontal scrolling.

### Selected Situation Heading

#### Content

* Displays the currently selected situation name.

#### Component and Semantics

* Serves as the Selected Situation Content's semantic `H3`.

#### Spacing After

* `24px` (`M`) across all Breakpoints.

### Situation Image

#### Content

* Uses the following temporary asset for each situation:
  1. `Foreclosure`: `/images/situations/foreclosure.webp`.
  2. `Inherited Property`: `/images/situations/inherited-property.webp`.
  3. `Tired Landlord`: `/images/situations/tired-landlord.webp`.
  4. `Major Repairs`: `/images/situations/major-repairs.webp`.
  5. `Vacant Property`: `/images/situations/vacant-property.webp`.
  6. `Problem Tenants`: `/images/situations/problem-tenants.webp`.
  7. `Relocation`: `/images/situations/relocation.webp`.
  8. `Divorce`: `/images/situations/divorce.webp`.
  9. `Behind on Property Taxes`: `/images/situations/behind-on-property-taxes.webp`.
  10. `Code Violations`: `/images/situations/code-violations.webp`.
* Final images will replace the temporary assets at the same paths and preserve the same dimensions, Aspect Ratio, and rendering behavior.

#### Visual Design

* Each temporary asset is `1200 × 675px` with a `16:9` Aspect Ratio.

#### Accessibility

* All Situation Images are decorative.

#### Responsive Behavior

* On Desktop and Tablet, fills the complete height of the panel's left area and crops as needed without stretching or distortion; the primary subject remains visible wherever possible.
* On Mobile, spans the panel width and preserves its `16:9` Aspect Ratio without distortion.

### Situation Explanation

#### Content

* Uses the following content for each situation:
  1. `Foreclosure`: `Facing foreclosure can feel overwhelming. We offer a straightforward way to sell your house as-is and work around your timeline.`
  2. `Inherited Property`: `An inherited property can bring repairs, belongings, and decisions you did not plan for. We make it easier to sell as-is without preparing the house for the traditional market.`
  3. `Tired Landlord`: `Managing tenants, maintenance, and ongoing expenses can become exhausting. We buy rental properties as-is so you can move on without another traditional listing.`
  4. `Major Repairs`: `A house that needs major repairs can be difficult to sell traditionally. We buy properties as-is, so you can sell without completing the repairs first.`
  5. `Vacant Property`: `A vacant house can create ongoing costs, maintenance, and security concerns. We provide a straightforward way to sell it as-is.`
  6. `Problem Tenants`: `Selling a property with tenant issues can feel complicated. We can evaluate the property as-is and discuss a sale that fits its current occupancy situation.`
  7. `Relocation`: `When you need to relocate, timing matters. We offer a flexible, straightforward sale without requiring you to prepare the house for the market.`
  8. `Divorce`: `Selling a house during a divorce can add stress to an already difficult transition. We provide a simple and discreet way to sell the property as-is.`
  9. `Behind on Property Taxes`: `Falling behind on property taxes can create increasing pressure. We offer a straightforward as-is sale so you can explore your next step.`
  10. `Code Violations`: `Code violations can make repairs and a traditional listing more difficult. We buy houses as-is, including properties with unresolved violations.`

#### Component and Semantics

* Uses paragraph semantics.

#### Visual Design

* Uses the global `Body Large` typography.

#### Spacing After

* `32px` (`L`) across all Breakpoints.

### Situation Benefits

#### Content

* Uses the following benefits for each situation:
  1. `Foreclosure`:
     * `Sell without making repairs`.
     * `Choose a flexible closing date`.
     * `Avoid a traditional listing`.
  2. `Inherited Property`:
     * `Sell the inherited property as-is`.
     * `Leave unwanted belongings behind`.
     * `Simplify the sale process`.
  3. `Tired Landlord`:
     * `Sell an occupied or vacant rental`.
     * `Skip repairs and another listing`.
     * `Choose a timeline that works for you`.
  4. `Major Repairs`:
     * `Sell without completing repairs`.
     * `Skip cleaning and staging`.
     * `Avoid traditional buyer financing`.
  5. `Vacant Property`:
     * `Reduce ongoing holding costs`.
     * `Sell without preparing the property`.
     * `Choose a flexible closing date`.
  6. `Problem Tenants`:
     * `Sell the property in its current condition`.
     * `Discuss options for an occupied property`.
     * `Avoid another traditional listing`.
  7. `Relocation`:
     * `Choose a closing date around your move`.
     * `Skip repairs and staging`.
     * `Coordinate the sale after relocating`.
  8. `Divorce`:
     * `Use a simple, discreet sale process`.
     * `Choose a flexible timeline`.
     * `Sell the property as-is`.
  9. `Behind on Property Taxes`:
     * `Sell the property as-is`.
     * `Avoid preparing for a traditional listing`.
     * `Choose a closing date that fits your situation`.
  10. `Code Violations`:
      * `Sell with existing code violations`.
      * `Avoid completing repairs before the sale`.
      * `Use a straightforward sale process`.

#### Component and Semantics

* Uses one semantic unordered list whose three items appear in the documented order.
* Each list item includes the canonical Lucide `Check` icon using the documented `Icon Container` Component.

#### Visual Design

* Each item uses the global `Body` typography and `Text Primary` color.
* The gap between each `Icon Container` and its text is `12px`.
* The vertical gap between items is `16px` (`S`).
* The `Icon Container` and text are vertically center-aligned within each benefit item.

#### Spacing After

* `32px` (`L`) across all Breakpoints.

#### Accessibility

* The icons are decorative.

#### Responsive Behavior

* The list remains vertical across all Breakpoints.

### Situation CTA

#### Content

* Visible label template: `Learn More About [Situation]`.
* Uses the following destination for each situation:
  1. `Foreclosure`: `/situations/foreclosure`.
  2. `Inherited Property`: `/situations/inherited-property`.
  3. `Tired Landlord`: `/situations/tired-landlord`.
  4. `Major Repairs`: `/situations/major-repairs`.
  5. `Vacant Property`: `/situations/vacant-property`.
  6. `Problem Tenants`: `/situations/problem-tenants`.
  7. `Relocation`: `/situations/relocation`.
  8. `Divorce`: `/situations/divorce`.
  9. `Behind on Property Taxes`: `/situations/behind-on-property-taxes`.
  10. `Code Violations`: `/situations/code-violations`.
* These paths establish the canonical route convention for dedicated Situation Pages.

#### Component and Semantics

* Uses the documented `Text Link` Component and inherits its approved visual styling, interaction states, and accessibility behavior.
* Uses link semantics.

## Contact Us Option

### Content

* Sentence: `Not sure which situation fits? Contact us and we'll point you in the right direction.`
* Includes the canonical Lucide `MessageCircle` icon before the sentence.
* Only `Contact us` uses the Text Link treatment.

### Component and Semantics

* Uses the documented `Text Link` Component and inherits its approved visual styling, interaction states, and accessibility behavior.
* The `MessageCircle` icon uses the documented `Icon Container` Component.
* `Contact us` uses link semantics.

### Visual Design

* The sentence uses the global `Body Small` typography and `Text Primary` color.
* Outside the `Icon Container`, the Contact Us Option remains visually open and transparent, without a background, Border, Card treatment, Radius, or Shadow.

### Dimensions and Alignment

* At every Breakpoint, occupies a separate row using the complete available content width.
* On Desktop, occupies Grid Columns `1–12`.
* The `Icon Container` appears before the sentence with a `12px` gap and is vertically centered with it.
* The sentence is left-aligned.

### Spacing Before

* `48px` (`XL`) across all Breakpoints.

### Interaction

* Activating `Contact us` navigates to the Contact Page at `/contact`.

### Accessibility

* The icon is decorative.

### Responsive Behavior

* On narrow Mobile widths, the sentence wraps naturally within the available width.

# Reviews

## Purpose

Strengthen trust and social proof through authentic reviews demonstrating that the local business has helped sellers throughout the service area.

## Layout

* Uses the global `Background Neutral` token as the Section background.

## Section Label

### Content

* Text: `Customer Reviews`.
* Includes the Lucide `Star` icon.

### Component and Semantics

* Uses the documented `Section Label` Component.

### Spacing After

* `16px` (`S`) across all Breakpoints.

## Primary Headline

### Content

* Text: `What local homeowners say`.

### Component and Semantics

* Serves as the Reviews Section's semantic `H2`.

### Spacing After

* `24px` (`M`) across all Breakpoints.

## Supporting Copy

### Content

* Text: `Read what local homeowners have shared about their experience working with us.`

### Component and Semantics

* Uses paragraph semantics.

### Visual Design

* Uses the global `Body Large` typography.

### Spacing After

* `24px` (`M`) across all Breakpoints.

## Google Rating

### Content

* Visible review-count text: `(127 reviews)`.
* Displays the approved rating of `4.9` and review count of `127` from the business’s official Google Business Profile as manually maintained static content.

### Component and Semantics

* Uses paragraph semantics.

### Visual Design

* Uses a compact horizontal composition containing, in order:
  1. Visible text: `Google`.
  2. Numeric rating.
  3. Visual star rating.
  4. Total review count.
* `Google` uses the global `Body Small` typography.
* The numeric rating uses the global `Body Large` typography.
* The review count uses the global `Body Small` typography and inherits the global secondary-text color.
* The visual star rating uses exactly five canonical Lucide `Star` icons at the approved `20px` icon size, with a `4px` gap between adjacent stars.
* The filled portion of each star uses Brand Green Dark.
* The unfilled portion remains transparent and uses the global Border color for its outline.
* Fractional ratings are represented proportionally within the next star. For example, `4.7` displays four fully filled stars and a fifth star filled to `70%`.

### Dimensions and Alignment

* Items are vertically centered within the horizontal composition.
* Uses an `8px` (`XS`) gap between each adjacent primary item across all Breakpoints.

### Spacing After

* `48px` (`XL`) on Desktop and Tablet.
* `32px` (`L`) on Mobile.

### Accessibility

* The complete rating is communicated as: `Google rating: 4.9 out of 5 based on 127 reviews.`
* The visual stars are decorative.

### Responsive Behavior

* On Desktop and Tablet, all four primary items remain on one horizontal line.
* On Mobile, `Google`, the numeric rating, and the five-star group remain together on the first line.
* The review count may wrap as one complete item onto a second line when the available width is insufficient.
* When wrapped, the review count remains left-aligned with the complete Google Rating composition and uses an `8px` (`XS`) vertical gap after the first line.

## Reviews Carousel

### Carousel

#### Content

* Contains exactly ten Review Cards and the Carousel Controls.

#### Component and Semantics

* The complete Reviews Carousel is an identifiable content region.
* Its accessible name is derived from the visible Primary Headline.
* The Review Card collection uses list semantics.

#### Interaction

* Displays reviews in a horizontal carousel.
* The carousel has finite endpoints and does not loop.
* Movement between carousel positions uses a `300ms` horizontal transition with `cubic-bezier(0.22, 1, 0.36, 1)` easing that follows the navigation direction.
* When reduced motion is preferred, the position changes immediately without animation.

#### Accessibility

* After a Carousel Control advances the carousel, assistive technologies receive a non-urgent status announcement of the newly visible position or range.
* When multiple Review Cards are visible, the announcement uses the template `Reviews [First]–[Last] of 10`, such as `Reviews 2–5 of 10` on Desktop or `Reviews 3–4 of 10` on Tablet.
* When one Review Card is visible, the announcement uses the template `Review [Position] of 10`, such as `Review 4 of 10` on Mobile.
* Automatic announcements consist only of the approved position or range message.

#### Spacing After

* `32px` (`L`) across all Breakpoints.

#### Responsive Behavior

* On Desktop, displays four complete Review Cards simultaneously, with one card within each System Line division.
* On Tablet, displays two complete Review Cards simultaneously, with one card within each System Line division.
* On Mobile, displays one complete Review Card within the single System Line division.

### Review Card

#### Content

* Each Review Card contains:
  * Top row containing:
    * Five-star review rating.
    * Decorative quotation-mark icon using the canonical Lucide `Quote` icon.
  * Review text.
  * Bottom row containing:
    * Customer attribution with a circular customer portrait and Customer Name.
    * Review Source with the source platform mark and visible platform name.
* Customer portraits use different temporary representative reviewer images during development and are replaced when approved reviewer assets are available.
* Review Source uses the official identity mark for Google, Facebook, BBB, or another documented source when an approved asset is available. A temporary representative platform asset may be used during development until the approved asset is available.
* Uses the following temporary content in canonical display order for layout testing:
  1. Customer name: `Customer Name 01`; source: `Google`; review text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  2. Customer name: `Customer Name 02`; source: `Facebook`; review text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.`
  3. Customer name: `Customer Name 03`; source: `BBB`; review text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.`
  4. Customer name: `Customer Name 04`; source: `Google`; review text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.`
  5. Customer name: `Customer Name 05`; source: `Facebook`; review text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.`
  6. Customer name: `Customer Name 06`; source: `BBB`; review text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum donec ullamcorper nulla non metus.`
  7. Customer name: `Customer Name 07`; source: `Google`; review text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum.`
  8. Customer name: `Customer Name 08`; source: `Facebook`; review text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur.`
  9. Customer name: `Customer Name 09`; source: `BBB`; review text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur.`
  10. Customer name: `Customer Name 10`; source: `Google`; review text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod.`
* The temporary content is replaced with approved authentic reviews before production publication.

#### Component and Semantics

* Each Review Card uses list-item semantics.
* The review text uses block quotation semantics.
* The customer name forms the attribution for the review text.
* The review source identifies the external platform from which the review text in the same Review Card originates.
* The review source uses non-interactive metadata semantics.

#### Visual Design

* Each Review Card uses the global `Surface` background color.
* Each Review Card uses the global default Border.
* Each Review Card uses the global `Large` Radius.
* The five-star rating uses exactly five filled canonical Lucide `Star` icons at the global Medium Icon size (`20px`) with Brand Green Dark fill.
* The `Quote` icon uses the global Medium Icon size (`20px`) and Brand Green Light color.
* The review text uses the global `Body Large` typography and `Text Primary` color.
* The customer name uses the global `Body` typography and `Text Primary` color.
* The review source uses the global `Body Small` typography and `Text Muted` color.
* Customer portraits fill their circular crop without distortion.

#### Dimensions and Alignment

* Each Review Card uses `M` (`24px`) internal padding on all sides across all Breakpoints.
* Each Review Card aligns with the canonical Grid content edges within its System Line division and inherits the applicable global Grid and System Line geometry at each Breakpoint.
* All Review Cards use a uniform fixed height of `320px` across all Breakpoints.
* The top row spans the available card width, with the five-star rating aligned left and the `Quote` icon aligned right; both are vertically center-aligned.
* Review Text displays a maximum of four lines across all Breakpoints and truncates overflow with an ellipsis (`…`).
* The bottom row spans the available card width and remains positioned toward the bottom of the Review Card consistently across cards.
* Within the bottom row, Customer Attribution aligns left and Review Source aligns right; both groups are vertically center-aligned.
* Customer portraits use `48px × 48px` dimensions, a `1:1` Aspect Ratio, and the global `Pill` Radius across all Breakpoints.
* Review Source marks use a `20px` height and automatic width that preserves the asset's Aspect Ratio across all Breakpoints.

#### Spacing

* `4px` separates adjacent stars within the five-star rating.
* `M` (`24px`) separates the top row from the Review Text.
* At least `M` (`24px`) separates the Review Text from the bottom row; any additional available space remains above the bottom row.
* `XS` (`8px`) separates the customer portrait from the Customer Name.
* `XS` (`8px`) separates the source platform mark from the visible platform name.
* `S` (`16px`) separates Customer Attribution from Review Source within the bottom row.
* These spacing values remain unchanged across all Breakpoints.

#### Accessibility

* The five-star rating is communicated as `5 out of 5 stars`; the individual `Star` icons are decorative.
* Customer portraits are decorative; the Customer Name communicates the reviewer identity.
* Review-platform marks are decorative; the visible platform name communicates the review source.
* The `Quote` icon is decorative.

### Carousel Controls

#### Content

* The previous Carousel Control uses the canonical Lucide `ChevronLeft` icon.
* The next Carousel Control uses the canonical Lucide `ChevronRight` icon.

#### Component and Semantics

* Each Carousel Control uses native button semantics.

#### Visual Design

* Each Carousel Control uses the global `Surface` color as its default background.
* Each Carousel Control uses the global default Border.
* Each Carousel Control uses the global `Pill` Radius.
* Carousel Control icons use the global Medium Icon size (`20px`) across all Breakpoints.
* Carousel Control icons use the global `Text Primary` color.
* Disabled Carousel Controls use `40%` opacity.

#### Dimensions and Alignment

* Each Carousel Control uses a `40px × 40px` square interactive area across all Breakpoints.
* The icon is centered within the Carousel Control.
* The Carousel Controls appear below the carousel viewport and align with its right edge across all Breakpoints.
* An `8px` (`XS`) horizontal gap separates the Carousel Controls.
* A `16px` (`S`) vertical gap separates the Review Cards from the Carousel Control group.

#### Interaction

* Each Carousel Control activation advances the carousel by one Review Card across all Breakpoints.
* On Hover, an enabled Carousel Control uses the global `Brand Green` background and a `#FFFFFF` icon.
* In the Active state, an enabled Carousel Control uses the global `Brand Green Dark` background and a `#FFFFFF` icon.
* Hover and Active states preserve the existing Border and control geometry.
* At the first Review Card position, the previous Carousel Control is disabled.
* At the last valid Review Card position, the next Carousel Control is disabled.
* Disabled Carousel Controls have pointer interaction disabled and do not use hover or active states.

#### Accessibility

* The previous Carousel Control has the accessible name `Previous reviews`.
* The next Carousel Control has the accessible name `Next reviews`.
* The Carousel Control icons are decorative.
* Keyboard focus remains on the activated Carousel Control after the update.

## Reviews Footer

### Content

* Contains, in document order:
  1. Trust icon using the canonical Lucide `ShieldCheck` icon within an `Icon Container`.
  2. Trust message.
  3. Divider.
  4. Reviews Link.
* Trust Message: `Real people. Real experiences. Real results.`
* Reviews Link label: `See more reviews on Google`.

### Component and Semantics

* The Reviews Link uses the documented `Text Link` Component.
* The Trust icon uses the documented `Icon Container` Component.

### Visual Design

* The Trust Message uses the global `Body Small` typography and `Text Primary` color.
* On Desktop and Tablet, the Divider is vertical, `24px` long, and uses the global default `1px` Border with the global Border color.

### Dimensions and Alignment

* An `8px` (`XS`) horizontal gap separates the `Icon Container` from the Trust Message across all Breakpoints.
* On Desktop and Tablet, a `16px` (`S`) horizontal gap separates the Trust Message from the Divider and the Divider from the Reviews Link.
* On Desktop and Tablet, all items in the horizontal Footer row are vertically center-aligned.
* On Mobile, the `Icon Container` and Trust Message in the first row are vertically center-aligned.
* On Mobile, a `16px` (`S`) vertical gap separates the trust row from the Reviews Link row.

### Interaction

* The Reviews Link leads to the official Google Business Profile; exact URL pending.

### Accessibility

* The `ShieldCheck` icon is decorative.
* The Divider is decorative, hidden from assistive technologies, and does not create a separate semantic boundary.

### Responsive Behavior

* On Desktop and Tablet, the Trust icon, Trust Message, Divider, and Reviews Link form one horizontal row.
* On Mobile, the Trust icon followed by the Trust Message form the first row, and the Reviews Link forms the second row.
* The Divider is omitted on Mobile.

# How It Works

## Purpose

Present the home-selling process as a simple, clear three-step experience and guide the user toward requesting a cash offer.

## Section Intro

### Content

Contains, in document order:

1. Section Label: `HOW IT WORKS`, with the canonical Lucide `Cog` icon.
2. Primary Headline: `Selling your house can be simple.`
3. Supporting Copy: `See how easy it is to sell your house for cash in just three simple steps.`

### Component and Semantics

* The Section Label uses the shared `Section Label` Component.
* The Primary Headline uses `H2` semantics.

### Visual Design

* The Primary Headline uses the global `H2` typography.
* The Supporting Copy uses the global `Body Large` typography.

### Dimensions and Alignment

* The complete Section Intro is left-aligned and uses the available Section content width.

### Spacing

* `S` (`16px`) separates the Section Label from the Primary Headline.
* `M` (`24px`) separates the Primary Headline from the Supporting Copy.

### Spacing After

* `M` (`24px`) on Desktop and Tablet.
* `S` (`16px`) on Mobile.

## Process Cards

### Composition

* The Section contains exactly three primary process Cards in this order: Card 1, Card 2, and Card 3.
* Each Card contains, in document order, a Top Meta Row, Step Title, and Body Copy.

### Content

1. Card 1: Step number `01`; eyebrow `A FEW MINUTES`; title `Tell Us About Your House`; Body Copy: `We take the time to understand your situation, learn about your property, and discuss your needs. You do not need to prepare the house, make repairs, or have every answer ready. We just want to understand what is going on and what would make a sale work for you.`
2. Card 2: Step number `02`; eyebrow `NO OBLIGATION`; title `Get Your Cash Offer`; Body Copy: `We review the information you shared, take a closer look at the property, and put together a fair, no-obligation cash offer. We explain the offer clearly so you can decide whether it works for your situation. There are no fees and no pressure to move forward.`
3. Card 3: Step number `03`; eyebrow `YOUR TIMELINE`; title `Choose Your Closing Date`; Body Copy: `If the offer works for you, you choose when you want to close. Whether you need to move quickly or need additional time, we work around your schedule and handle the details needed to complete the sale. Once closing is complete, you can move forward on your timeline.`

### Component and Semantics

* The Card collection uses ordered-list semantics, and each Card uses list-item semantics.
* The Step Title uses `H3` semantics.
* Each Step number is plain text within a local circular treatment and does not use the `Icon Container` Component or icon semantics.
* The visible Step number is decorative for assistive technologies because the ordered-list semantics communicate the same sequence.

### Visual Design

* All three Cards use the Section-specific background color `#123527`.
* All three Cards use the global `Large` Radius (`16px`).
* The Cards do not use a Border, Shadow, photograph, Gradient, or other decorative treatment.
* The Step number uses the global `H4` typography, the Section-specific `#123527` color, and a Brand Green Light circular background.
* The eyebrow uses the global `Label` typography, uppercase content, and Brand Green Light color.
* The Step Title uses the global `H4` typography and `#FFFFFF` color.
* The Body Copy uses the global `Body Small` typography and Brand Green Light color.

### Dimensions and Alignment

* Each Process Card aligns with the canonical Grid content edges within its System Line division and inherits the applicable global Grid and System Line geometry at each Breakpoint.
* The Card geometry derives directly from the global content Grid and a `M` (`24px`) horizontal Card gap without per-Card positions, widths, margins, or corrections.
* Each Card uses `M` (`24px`) internal padding on all sides across all Breakpoints.
* All Card content is left-aligned.
* The Step number and eyebrow form one horizontal Top Meta Row, align to opposite sides of the available Card content width, and align vertically at the top.
* The Step number's circular treatment uses `48px × 48px` dimensions and the global `Pill` Radius across all Breakpoints.

### Spacing

* `L` (`32px`) separates the Top Meta Row from the Step Title.
* `S` (`16px`) separates the Step Title from the Body Copy.

#### Desktop

* The three Cards form one row.
* Card 1 occupies the first System Line division, between the left outer System Line and the first internal System Line.
* Card 2 occupies the second System Line division, between the first and second internal System Lines.
* Card 3 occupies the third System Line division, between the second and third internal System Lines.
* All three Cards have a minimum height of `360px` and may grow when future content requires additional height.

#### Tablet

* Card 1 and Card 2 form the first row, occupy one System Line division each, and use equal widths.
* Card 3 forms the second row and occupies its left System Line division only.
* Card 1 and Card 2 have a minimum height of `320px`; Card 3 has a minimum height of `360px`. Each Card may grow when future content requires additional height.
* `S` (`16px`) separates the two Card rows.

#### Mobile

* Card 1, Card 2, and Card 3 form one vertical stack in that order.
* All three Cards span the complete Mobile Grid content width.
* All three Cards have a minimum height of `220px` and may grow when their content requires additional height.
* `S` (`16px`) separates adjacent Cards.

## Closing Visual

### Content

* Uses the canonical photograph `/images/how-it-works/sold.png`, showing a homeowner holding house keys in front of the sold property.
* Contains one floating Status Card with, in document order:
  1. Canonical Lucide `CircleCheck` icon.
  2. Eyebrow: `READY TO CLOSE`.
  3. Status message: `On your timeline`.

### Component and Semantics

* The Closing Visual is a separate visual payoff after the three Process Cards and is not a fourth Step.
* The status Card is informational and non-interactive.
* The status icon uses the documented `Icon Container` Component at its Default size.

### Visual Design

* The photograph fills the complete Closing Visual without distortion and may crop as needed, with its focal placement centered to preserve the homeowner, keys, and relevant sold-property context.
* The Closing Visual uses the global `Large` Radius (`16px`) and clips the photograph to that Radius.
* The floating Status Card uses the global Surface background, Medium Radius (`12px`), and Floating Shadow.
* The status eyebrow uses the global `Label` typography and Brand Green Dark color.
* The status message uses the global `Body Small` typography and Text Primary color.

### Dimensions and Alignment

* The Closing Visual uses the same responsive System-Line alignment model as the Process Cards and Review Cards.
* The floating Status Card is positioned at the bottom-right of the Closing Visual with an `S` (`16px`) inset from both edges.
* The Status Card uses `S` (`16px`) internal padding, and `XS` (`8px`) separates the Icon Container from the status text group.
* The status text group is left-aligned, and its two text lines form a vertical stack.

#### Desktop

* The Closing Visual occupies the fourth System Line division, directly after Card 3 in the same row.
* It uses the same `360px` minimum height as the three Process Cards and may grow with its row.

#### Tablet

* The Closing Visual occupies the right System Line division of the second row, directly beside Card 3.
* It uses the same `360px` minimum height as Card 3 and may grow with its row.

#### Mobile

* The Closing Visual appears after Card 3 in the vertical stack.
* It uses the same width, horizontal alignment, `220px` minimum height, and `S` (`16px`) vertical separation as the Process Cards.

### Spacing After

* `M` (`24px`) separates the complete process composition from the Section CTA on Desktop and Tablet.
* `S` (`16px`) separates the complete process composition from the Section CTA on Mobile.

### Accessibility

* The photograph is decorative because the Step 3 copy and visible Status Card communicate the completed-sale and customer-timeline meaning; it uses empty alternative text.
* The `CircleCheck` icon is decorative because the visible Status Card text communicates the same completion meaning.

## Section CTA

### Content

* Label: `Get My Cash Offer`.

### Component and Semantics

* Uses the shared `Button` Component with link semantics.

### Interaction

* Navigates to the Seller Lead Form Flow at the canonical internal route `/get-cash-offer`.

# Local / Area Section

## Purpose

Create a meaningful local Section that differentiates individual Area Pages while preserving a consistent overall design structure between locations such as Cleveland, Cleveland Heights, and South Euclid.

The Section:

* Establishes local familiarity and credibility.
* Provides useful information about the specific area.
* Highlights nearby cities and neighborhoods where the company buys houses.
* Provides unique, meaningful local content for each Area Page.

## Layout

### Visual Design

* The Section is intentionally long and spacious and is not compressed into a single viewport.
* Generous whitespace and intentionally unoccupied areas are part of the composition.
* The number of elements remains restrained; columns and empty areas are not filled merely because space is available.

### Desktop

* The left area occupies Grid Columns `1–6`.
* The right area occupies Grid Columns `7–12`.
* Neither area must be fully occupied at every point.

### Tablet and Mobile

* Exact visual stacking and column allocation remain to be defined.

## Section Intro

### Content

Contains, in document order:

1. Section Label: `LOCATION`, with the canonical Lucide `MapPin` icon.
2. Large area-specific Primary Headline; exact content remains to be defined for each Area Page.
3. Short area-specific Supporting Copy; exact content remains to be defined for each Area Page.

### Component and Semantics

* The Section Label uses the documented `Section Label` Component.
* The Primary Headline uses `H2` semantics.
* The Supporting Copy uses paragraph semantics.

### Visual Design

* The Primary Headline uses the global `H2` typography.
* The Supporting Copy uses the global `Body Large` typography.

### Dimensions and Alignment

* All Section Intro content is left-aligned.
* On Desktop, the Section Intro occupies the left area.

### Spacing

* `S` (`16px`) separates the Section Label from the Primary Headline.
* `M` (`24px`) separates the Primary Headline from the Supporting Copy.

### Spacing After

* Exact spacing after the Section Intro remains to be defined.

## Local Map

### Content

* Shows the current area and relevant surrounding areas.
* The exact map content, data source, and presentation format remain to be defined for each Area Page.

### Visual Design

* Uses a simple, understated treatment that supports the local content without competing with it.

### Dimensions and Alignment

* On Desktop, appears only within the left area.
* Remains relatively compact and does not dominate the Section.
* Exact dimensions remain to be defined.

### Spacing After

* Exact spacing after the Local Map remains to be defined.

### Accessibility

* The accessible representation of the map and its local information remains to be defined with the final map format and content.

### Responsive Behavior

* Exact Tablet and Mobile dimensions and composition remain to be defined.

## Local Statistics

### Content

* Contains a small number of useful, area-specific data points.
* The exact number and data points vary according to what is relevant to each Area Page and remain to be defined.
* Statistics are not added merely to fill available space.
* Individual statistics may include simple icons; exact icon presence and identities remain to be defined with the final data points.

### Component and Semantics

* The statistics collection uses semantic list and list-item elements.

### Visual Design

* The statistics form a distinct visual moment within the Section.
* Individual statistics may receive greater visual emphasis than others to create hierarchy.
* Statistics Cards use bold, solid background colors and may intentionally extend beyond the global Brand Greens and Neutral Palette.
* Multiple colors may be used within one statistics composition, including treatments such as purple, turquoise, and different shades of blue.
* This color treatment is a local visual accent and is not required elsewhere on the website.
* Exact Statistics Card colors remain to be defined.
* Statistics Card text and icons use light or white high-contrast foreground treatments.
* Statistics Cards use the global `Medium` Radius (`12px`).
* Exact statistics typography remains to be defined with the final content hierarchy.

### Dimensions and Alignment

* On Desktop, the complete composition remains within the left area.
* Statistics Cards use varying dimensions and proportions to create controlled asymmetry and are not made identical.
* An `XS` (`8px`) consistent gap separates adjacent Statistics Cards.
* Exact Card dimensions and asymmetric arrangement remain to be defined.

### Spacing After

* Exact spacing after Local Statistics remains to be defined.

### Accessibility

* Accessibility treatment for any statistics icons remains to be defined with their final content and purpose.

### Responsive Behavior

* Exact Tablet and Mobile statistics composition remains to be defined.

## Data Sources

### Content

* Identifies the sources for the area-specific Local Statistics.
* Exact source content remains to be defined with the final data points for each Area Page.

### Component and Semantics

* Exact semantics remain to be defined with the final source content and presentation.

### Visual Design

* Uses the global `Body Small` typography.

### Dimensions and Alignment

* On Desktop, occupies the left area.
* On Desktop, appears directly below the Local Statistics composition.

### Spacing After

* Exact spacing after Data Sources remains to be defined.

## Nearby Areas

### Content

* Presents nearby cities and neighborhoods through area names accompanied by simple icons rather than as a conventional visible text list.
* The exact nearby-area entries vary by Area Page and remain to be defined.
* The collection concludes with the link label `See all areas we buy in` and the canonical Lucide `ArrowRight` icon.
* Exact icons for the individual nearby areas remain to be defined with the final entries.

### Component and Semantics

* The nearby-area collection uses semantic list and list-item elements.
* Whether individual nearby-area entries are interactive remains to be defined.
* The concluding link uses the documented `Text Link` Component with link semantics.

### Visual Design

* The nearby-area collection uses a subtle visual grid with simple icons and area names.
* Nearby-area names use the global `Body` typography.

### Dimensions and Alignment

* On Desktop, occupies the right area.
* Exact grid dimensions and column count remain to be defined.

### Spacing After

* Exact spacing after Nearby Areas remains to be defined.

### Interaction

* The concluding link navigates to the canonical internal route `/areas-we-buy-in`.

### Accessibility

* Each nearby-area icon is decorative when its accompanying visible area name communicates the same identity.
* The `ArrowRight` icon is decorative because the visible link label communicates the complete destination.

### Responsive Behavior

* Exact Tablet and Mobile grid composition remains to be defined.

## Local Market Content

### Content

* Contains a short, editorial-style local-market headline and Supporting Copy that reinforce familiarity with the local market.
* Example headline, shown on two lines: `We live and work here.` followed by `This is our market.`
* The example is not canonical copy; the final headline and Supporting Copy are specific to each individual area rather than generic company messaging and remain to be defined.

### Component and Semantics

* The local-market headline uses `H3` semantics.
* The Supporting Copy uses paragraph semantics.

### Visual Design

* The local-market headline uses the global `H3` typography.
* The Supporting Copy uses the global `Body` typography.

### Dimensions and Alignment

* On Desktop, occupies the right area.
* All content is left-aligned.

### Spacing After

* Exact spacing after the Local Market Content remains to be defined.

## Optional Section CTA

### Content

* Appears at the end of the Section only when an Area Page requires an additional CTA.
* CTA presence, label, and destination remain to be defined for each Area Page.

### Component and Semantics

* The CTA Component and semantics remain to be defined if the CTA is included.

### Dimensions and Alignment

* Exact placement and alignment remain to be defined if the CTA is included.

### Responsive Behavior

* Exact Tablet and Mobile treatment remains to be defined if the CTA is included.

# FAQ

#### Purpose

Provide clear and quick answers to the main questions sellers may have, reduce uncertainty and objections, and help users understand the process without overloading the rest of the page with information.

#### Content

- Section Label: **FAQ**, no icon.
- Headline: **Questions? We’ve got answers.**
- Short supporting copy.
- **Contact us** link for users who did not find the answer they were looking for.
- List of frequently asked questions.

##### Example Questions

- How does the process work?
- Do I need to make any repairs?
- Are there any fees or commissions?
- How quickly can I sell my house?
- How do you determine your offer?
- Am I obligated to accept the offer?

#### Structure

- Two-column asymmetric layout.
- Left column is relatively narrow and contains:
  - Section Label above the primary headline.
  - Headline.
  - Supporting copy.
  - Contact us link.
- The right column is wider and contains the Accordion.

#### Visual Direction

- Keep the section highly minimal and primarily driven by typography, whitespace, and subtle lines.
- The Accordion should feel wide, clean, and visually light.
- Do not add icons, illustrations, cards, or decorative elements that are not required.
- Preserve generous whitespace and do not attempt to fill empty areas.
- The FAQ should feel editorial rather than component-heavy.
- Visual hierarchy should come primarily from typography, spacing, and the Accordion interaction rather than from cards or decorative UI.

#### Behavior

- Questions are displayed using the **Accordion** defined in the Component Library.
- One question may be open by default.

#### Technical Specifications

No additional FAQ-specific technical specifications are currently defined. Global typography, spacing, component, color, and layout rules apply unless explicitly overridden.

#### Responsive Behavior

No specific Tablet or Mobile composition is currently defined.

The relationship between the content block and Accordion should remain clear on smaller viewports. Exact stacking, ordering, and Accordion width behavior remain to be defined.

#### Line System

- The outer System Lines bound the content area using the globally defined content padding.
- The center System Line serves as the primary division between the headline/content area and the Accordion.
- The two additional internal System Lines remain visible but do not dictate the positioning of content within either area.

# Final CTA

#### Purpose

Conclude the page with a clear and simple conversion path.

At this stage, the user has already received the necessary information throughout the page, so the section does not introduce new information. Instead, it focuses attention on the primary action — receiving an offer for their house.

#### Content

- Section Label: **Ready When You Are**, no icon.
- Headline: **Ready to sell your Cleveland house?**
- Short supporting copy.
- Component: **Button**
- Short reassurance row below the button, for example: **100% Free • No Obligation • Secure**

#### Structure

- Section Label positioned above the primary headline.
- Headline and supporting copy.
- Primary CTA.
- Reassurance row positioned below the CTA.
- Content is centered and presented as a single focused composition.

#### Visual Direction

- Keep the section simple and focused, using a minimal number of elements.
- The headline is the primary visual focal point.
- Position the Section Label above the primary headline.
- Preserve generous whitespace around the content.
- Do not add cards, statistics, or additional supporting elements.

#### Behavior

- The Primary CTA leads to the same **Seller Lead Form Flow** used by the Hero and Header CTAs.
- On Area Pages, the headline and supporting content adapt to the current city / area.

#### Technical Specifications

No additional Final CTA-specific technical specifications are currently defined. Global typography, spacing, component, color, and layout rules apply unless explicitly overridden.

#### Responsive Behavior

No specific Tablet or Mobile composition is currently defined.

The centered hierarchy of the Section Label, headline, supporting copy, CTA, and reassurance row should be preserved across breakpoints.

#### Line System

- The outer System Lines bound the content area using the globally defined content padding.
- The centered content — headline, supporting copy, and CTA — is not constrained by the internal System Lines.
- The internal System Lines remain visible as part of the visual system but do not dictate the composition.
