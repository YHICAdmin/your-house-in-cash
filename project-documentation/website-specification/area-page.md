**Purpose**

The primary page template for Cleveland and future city/area pages.

The primary goal is to generate leads from motivated home sellers.

Secondary goals are to build trust, demonstrate a local presence, and support organic and local search visibility.

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
* The media area occupies Grid Columns `2–7` and is horizontally centered within the Tablet Grid.
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

## Section Intro

### Content

Contains, in document order:

1. Section Label:
   * Content template: `[City], Ohio`.
   * `[City]` is the city name only, without the state.
   * The content changes dynamically between Area Pages.
   * Rendered example: `CLEVELAND, OHIO`.
   * Includes the `MapPin` icon from `lucide-react`.
2. Primary Headline:
   * Content template: `Sell Your House Fast in [City]`.
   * The city name changes dynamically between Area Pages.
   * This Hero content template applies to City Area Pages; non-city Area Pages require a separately defined content template.
3. Supporting Copy:
   * Content template: `We buy houses in [City] as-is, with no repairs, fees, or waiting for a traditional sale.`
   * The city name changes dynamically between Area Pages.

### Component and Semantics

* The Section Label uses the documented `Section Label` Component.
* The Primary Headline uses `H1` semantics.

### Visual Design

* The Section Label's `[City], Ohio` template renders in uppercase.
* The Primary Headline uses the global `H1` typography.
* `Sell Your House Fast in` uses the global `Text Primary` color.
* `[City]` uses the same global `Text Primary` color as the rest of the Primary Headline.
* The Primary Headline acts as the primary visual focal point of the Hero.
* The Supporting Copy uses the global `Body Large` typography.
* The Supporting Copy remains visually secondary to the Primary Headline.

### Dimensions and Alignment

* The Primary Headline wraps naturally according to the available width; do not add manual line breaks.
* `[City]` may wrap naturally at word boundaries but must not break within a word.
* The `[City]` text block follows the rendered width of the city name and is constrained to the available Primary Headline width.
* A single decorative hand-drawn stroke appears `4px` beneath the complete `[City]` text block.
* The stroke spans the complete rendered width of the `[City]` text block, with its rounded left and right ends aligned to the corresponding city-text edges.
* The stroke occupies a `16px`-high decoration area and is approximately `9–11px` thick, with slight natural variation across its length.
* The stroke's centerline is approximately `7.5px` from the top of the decoration area at the left, descends to approximately `10.5px` through the middle, and lifts to approximately `8px` near the right edge.
* The stroke uses Brand Green at `40%` opacity and forms one long, predominantly horizontal marker or brush shape with soft, rounded ends.
* When a multi-word city wraps, the stroke remains one decoration beneath the complete city block and does not repeat beneath individual lines.
* The stroke is decorative and does not affect text layout.

### Spacing

* `16px` (`S`) separates the Section Label from the Primary Headline.
* `24px` (`M`) separates the Primary Headline from the Supporting Copy.

### Spacing After

* `32px` (`L`).

### Interaction

* The Section Label is non-interactive.

## Button

### Content

* Label: `Get My Cash Offer`.

### Component and Semantics

* Uses the documented `Button` Component with its `conversion` variant.
* Renders with anchor semantics because it navigates to a separate route.

### Spacing After

* `8px` (`XS`).

### Interaction

* Navigates to the Seller Lead Form Flow at the canonical internal route `/get-cash-offer`.

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

* The complete image mosaic fills its allocated media area and preserves a `541:328` Aspect Ratio.
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

On Desktop and Tablet, the main content composition uses two allocated areas that form independent top-to-bottom flows:

* On Desktop, the left area occupies Grid Columns `1–5`, Grid Column `6` remains intentionally empty, and the right area occupies Grid Columns `7–12`.
* On Tablet, the left area occupies Grid Columns `1–4`, and the right area occupies Grid Columns `5–8`.
* The left area contains the Supporting Points.
* The right area contains the Situation Selector, Selected Situation Content, and Contact Us Option.
* The top edges of the left- and right-area flows align.

On Mobile, the main content composition forms one full-width flow in canonical element order.

## Section Intro

### Content

Contains, in document order:

1. Section Label: `We Help With`, with the canonical Lucide `House` icon.
2. Primary Headline: `What brings you here?`
3. Supporting Copy: `Every homeowner’s situation is different. Choose what best describes yours to see how we can help.`

### Component and Semantics

* The Section Label uses the documented `Section Label` Component.
* The Primary Headline serves as the Situations Section's semantic `H2`.
* The Supporting Copy uses paragraph semantics.

### Visual Design

* The Supporting Copy uses the global `Body Large` typography.

### Dimensions and Alignment

* Spans the complete Content Grid width across all Breakpoints: Grid Columns `1–12` on Desktop, Grid Columns `1–8` on Tablet, and the complete available Content Grid width on Mobile.

### Spacing

* `16px` (`S`) separates the Section Label from the Primary Headline across all Breakpoints.
* `24px` (`M`) separates the Primary Headline from the Supporting Copy across all Breakpoints.

### Spacing After

* `64px` (`2XL`) on Desktop and Tablet.
* `48px` (`XL`) on Mobile.

## Supporting Points

### Content

* Contains informational points that provide additional context about how the company can help homeowners in the documented situations.
* Each point contains, in document and visual order:
  1. Icon.
  2. Short heading.
  3. Supporting paragraph.
* Uses the following points in canonical order:
  1. `What Can Affect a Home Sale`:
     * Uses the canonical Lucide `ListChecks` icon.
     * Supporting Copy: `Property condition, ownership, occupancy, liens, and important deadlines can all influence the steps required before a home can be sold.`
  2. `Information Worth Gathering`:
     * Uses the canonical Lucide `FileText` icon.
     * Supporting Copy: `Documents related to ownership, mortgages, property taxes, repairs, tenants, and timing can help clarify the available options and next steps.`

### Component and Semantics

* The two points form one semantic unordered list, and each point forms one list item.
* Each icon uses the documented `Icon Container` Component at its Default size.
* Each point heading uses `H3` semantics.
* Each supporting paragraph uses paragraph semantics.

### Visual Design

* Each point heading uses local `16px / 700 / 1.25` typography with the global headline letter-spacing treatment.
* Each supporting paragraph uses the global `Body` typography.
* The points remain visually open and transparent, without a Card, background, Border, Radius, or Shadow.
* Each point heading is accompanied by a decorative `1px` wide vertical separator in global `Brand Green`; the separator sits on the left System Line, begins at the heading's top edge, and matches the heading's `20px` line-box height.

### Dimensions and Alignment

* Uses the complete width of the left area on Desktop and Tablet.
* Uses the complete available content width on Mobile.
* Each icon, heading, and supporting paragraph form a left-aligned vertical content flow.

### Spacing

* `24px` (`M`) separates each `Icon Container` from its point heading across all Breakpoints.
* `16px` (`S`) separates each point heading from its supporting paragraph across all Breakpoints.
* `32px` (`L`) separates the two complete points across all Breakpoints.

### Spacing After

* On Mobile, `32px` (`L`) separates the complete Supporting Points composition from the Situation Selector.
* No Spacing After relationship applies on Desktop or Tablet because the Supporting Points and Situation Selector belong to separate parallel flows.

### Accessibility

* The icons are decorative because the adjacent visible headings communicate each point's identity.
* The vertical separators are decorative.

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
* A subtle right-edge fade using the owning Section's background color overlays the final `24px` (`M`) of the carousel viewport whenever additional options remain beyond the visible area.
* The fade uses the established `150ms ease` opacity transition.
* The carousel does not display a persistent scrollbar.
* Each option uses the global `Body` typography and `Text Primary` color.
* The default state does not use a background, Border, Divider, Radius, or Shadow.
* Across all Breakpoints, the selected option's visible label uses global Surface text at `600` font weight on a Brand Green Dark background with the global Pill Radius, without a Border or Shadow.
* When an unselected option is hovered, its text changes to Brand Green Dark while its font weight remains unchanged.
* Hovering an unselected option does not add a background, Border, Radius, or Shadow.

### Dimensions and Alignment

* Uses the complete width of the right area on Desktop and Tablet.
* Uses the complete available content width on Mobile.
* Text is left-aligned.
* Each option has a minimum interactive height of `48px`.
* Each option's visible label uses `6px` vertical and `12px` horizontal internal padding so the selected pill remains compact within the larger interactive target.

### Spacing After

* `24px` (`M`) separates the Situation Selector from the Selected Situation Content across all Breakpoints.

### Interaction

* Selecting an option updates the Selected Situation Content within the Section and keeps keyboard focus on the selected option.
* `Enter` or `Space` selects the focused option.
* A pointer cursor is displayed when a pointing device hovers over an option.
* Users can move through the overflowed carousel using touch swipe, trackpad scrolling, or pointer dragging.
* The carousel viewport uses a `grab` cursor where it is draggable and a `grabbing` cursor during pointer dragging; the options retain their pointer cursor.
* When keyboard focus reaches an option outside the visible carousel viewport, that option scrolls into view.
* The carousel does not use separate previous or next controls.

### Accessibility

* The visible Primary Headline provides the Situation Selector's accessible name.
* The visible Supporting Copy provides the Situation Selector's accessible description.
* Each option is reached individually with `Tab` and `Shift + Tab`.
* The selected state is communicated to assistive technologies.
* Selected Situation Content updates are announced politely without interrupting other assistive-technology output.
* Update announcement template: `[Situation] details are now available.`
* Keyboard focus remains visible when navigating the carousel across all Breakpoints.

### Responsive Behavior

* Across all Breakpoints, displays the situation options as one manually scrollable horizontal carousel.
* The carousel does not advance automatically.
* Each option uses its content-based width, with an `8px` (`XS`) gap between options.

## Selected Situation Content

### Component and Semantics

* Forms an identifiable content region associated with the currently selected Situation option.
* Its accessible name is derived from the selected option and updates when the selection changes.
* Displays content corresponding to the selected Situation Selector option.

### Visual Design

* Uses the global `Surface` background with the global Medium Radius and Floating Shadow, without a Border.

### Dimensions and Alignment

* Uses the complete width of the right area on Desktop and Tablet.
* Uses the complete available content width on Mobile.
* The content area uses `32px` (`L`) internal padding on Desktop and Tablet and `24px` (`M`) on Mobile.
* The Situation Icon, Selected Situation Heading, Situation Explanation, and Situation CTA form a vertical content flow across all Breakpoints.

### Spacing After

* `48px` (`XL`) separates the Selected Situation Content from the Contact Us Option across all Breakpoints.

### Responsive Behavior

* On Mobile, remains a stationary content area and does not participate in the Selector's horizontal scrolling.

### Situation Icon

#### Content

* Uses the following canonical Lucide icon for each situation:
  1. `Foreclosure`: `Gavel`.
  2. `Inherited Property`: `ScrollText`.
  3. `Tired Landlord`: `Building2`.
  4. `Major Repairs`: `Hammer`.
  5. `Vacant Property`: `House`.
  6. `Problem Tenants`: `Users`.
  7. `Relocation`: `Truck`.
  8. `Divorce`: `Scale`.
  9. `Behind on Property Taxes`: `ReceiptText`.
  10. `Code Violations`: `ClipboardX`.

#### Component and Semantics

* Uses the documented `Icon Container` Component at its Default `40px` size with the global Medium `20px` icon size.

#### Spacing After

* `24px` (`M`) across all Breakpoints.

#### Accessibility

* The icon is decorative because the adjacent Selected Situation Heading communicates the situation identity.

### Selected Situation Heading

#### Content

* Displays the contextual heading associated with the currently selected situation:
  1. `Foreclosure`: `Understanding Your Timeline Before Foreclosure`.
  2. `Inherited Property`: `What to Consider With an Inherited Property`.
  3. `Tired Landlord`: `When Landlord Responsibilities Become Unsustainable`.
  4. `Major Repairs`: `Selling a Home That Needs Major Repairs`.
  5. `Vacant Property`: `Managing the Costs of a Vacant Property`.
  6. `Problem Tenants`: `What to Consider When Tenants Are Involved`.
  7. `Relocation`: `Coordinating a Home Sale With Relocation`.
  8. `Divorce`: `Handling a Property During Divorce`.
  9. `Behind on Property Taxes`: `Understanding Delinquent Property Taxes`.
  10. `Code Violations`: `Selling a Home With Code Violations`.

#### Component and Semantics

* Serves as the Selected Situation Content's semantic `H3`.

#### Visual Design

* Uses the global `H4` typography: `24px` on Desktop, `22px` on Tablet, and `20px` on Mobile.

#### Spacing After

* `24px` (`M`) across all Breakpoints.

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

* Uses the global `Body` typography at `16px` across all Breakpoints.

#### Spacing After

* `32px` (`L`) across all Breakpoints.

### Situation CTA

#### Content

* Visible label template: `Learn More About [Situation]`.
* Includes the canonical Lucide `ArrowRight` icon after the visible label.
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

* Uses the documented `Text Link` Component.
* Uses link semantics.

#### Accessibility

* The `ArrowRight` icon is decorative because the visible link label communicates the complete destination.

## Contact Us Option

### Content

* Sentence: `Not sure which situation fits? Contact us and we'll point you in the right direction.`
* Includes the canonical Lucide `MessageCircle` icon before the sentence.
* Only `Contact us` uses the Text Link treatment.

### Component and Semantics

* Uses the documented `Text Link` Component.
* The `MessageCircle` icon uses the documented `Icon Container` Component.
* `Contact us` uses link semantics.

### Visual Design

* The sentence uses the global `Body Small` typography and `Text Primary` color.
* Outside the `Icon Container`, the Contact Us Option remains visually open and transparent, without a background, Border, Card treatment, Radius, or Shadow.

### Dimensions and Alignment

* Uses the complete width of the right area on Desktop and Tablet.
* Uses the complete available content width on Mobile.
* A `12px` gap separates the `Icon Container` and sentence, which are vertically center-aligned.
* The sentence is left-aligned.

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

## Section Intro

### Content

Contains, in document order:

1. Section Label: `Customer Reviews`, with the Lucide `Star` icon.
2. Primary Headline: `What local homeowners say`.
3. Supporting Copy: `Read what local homeowners have shared about their experience working with us.`

### Component and Semantics

* The Section Label uses the documented `Section Label` Component.
* The Primary Headline serves as the Reviews Section's semantic `H2`.
* The Supporting Copy uses paragraph semantics.

### Visual Design

* The Supporting Copy uses the global `Body Large` typography.

### Spacing

* `16px` (`S`) separates the Section Label from the Primary Headline across all Breakpoints.
* `24px` (`M`) separates the Primary Headline from the Supporting Copy across all Breakpoints.

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
    * Review Source with the source platform mark.
* Customer portraits use different temporary representative reviewer images during development and are replaced when approved reviewer assets are available.
* Review Source uses the approved official identity mark for Google, Facebook, BBB, or another documented source.
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
* The review text uses the global `Body` typography and `Text Primary` color.
* The customer name uses the global `Body` typography and `Text Primary` color.
* Customer portraits fill their circular crop without distortion.

#### Dimensions and Alignment

* Each Review Card uses `M` (`24px`) internal padding on all sides across all Breakpoints.
* Each Review Card aligns with the canonical Grid content edges within its System Line division and inherits the applicable global Grid and System Line geometry at each Breakpoint.
* All Review Cards use a uniform fixed height of `320px` across all Breakpoints.
* The top row spans the available card width, with the five-star rating aligned left and the `Quote` icon aligned right; both are vertically center-aligned.
* Review Text occupies a uniform six-line text region across all Breakpoints.
* When the rendered Review Text exceeds the six-line region, the final visible line fades over `1lh` into the Card background and the remaining overflow stays hidden.
* When the complete Review Text fits within the six-line region, no fade is applied.
* Review Text displays no truncation ellipsis and provides no `Read more` control.
* The bottom row spans the available card width and remains positioned toward the bottom of the Review Card consistently across cards.
* Within the bottom row, Customer Attribution aligns left and Review Source aligns right; both groups are vertically center-aligned.
* Customer portraits use `48px × 48px` dimensions, a `1:1` Aspect Ratio, and the global `Pill` Radius across all Breakpoints.
* Review Source marks use `32px × 32px` dimensions across all Breakpoints.

#### Spacing

* `4px` separates adjacent stars within the five-star rating.
* `M` (`24px`) separates the top row from the Review Text.
* At least `M` (`24px`) separates the Review Text from the bottom row; any additional available space remains above the bottom row.
* `XS` (`8px`) separates the customer portrait from the Customer Name.
* `S` (`16px`) separates Customer Attribution from Review Source within the bottom row.
* These spacing values remain unchanged across all Breakpoints.

#### Accessibility

* The five-star rating is communicated as `5 out of 5 stars`; the individual `Star` icons are decorative.
* Customer portraits are decorative; the Customer Name communicates the reviewer identity.
* Review-platform marks are decorative; a visually hidden platform name communicates the review source.
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
* The Reviews Link opens in a new tab, following the global [Link Destinations](../implementation-guidelines.md#link-destinations) rule for external web destinations.

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

## Layout

The Process Steps and Step Content areas together form the Interactive Process Composition.

* The composition contains two coordinated areas: a Process Steps area on the left and a Step Content area on the right.
* On Desktop and Tablet, the Process Steps area forms one top-to-bottom flow and the Step Content area changes in coordination with the active Process Step.
* On Desktop, the Process Steps area occupies Grid Columns `1–5`, Grid Column `6` remains intentionally empty, and the Step Content area occupies Grid Columns `7–12`.
* On Tablet, the Process Steps area occupies Grid Columns `1–4` and the Step Content area occupies Grid Columns `5–8`.
* On Mobile, the composition forms one full-width flow containing each Step immediately followed by its corresponding Step Content, in canonical Step order.

### Spacing

* On Mobile, `S` (`16px`) separates each Step from its corresponding Step Content, and `L` (`32px`) separates one complete Step-and-content pair from the next.

## Section Intro

### Content

Contains, in document order:

1. Section Label: `HOW IT WORKS`, with the canonical Lucide `Cog` icon.
2. Primary Headline: `Selling your house can be simple.`
3. Supporting Copy: `See how easy it is to sell your house for cash in just three simple steps.`

### Component and Semantics

* The Section Label uses the shared `Section Label` Component.
* The Primary Headline uses `H2` semantics.
* The Supporting Copy uses paragraph semantics.

### Visual Design

* The Primary Headline uses the global `H2` typography.
* The Supporting Copy uses the global `Body Large` typography.

### Dimensions and Alignment

* The complete Section Intro is left-aligned and uses the available Section content width.

### Spacing

* `S` (`16px`) separates the Section Label from the Primary Headline.
* `M` (`24px`) separates the Primary Headline from the Supporting Copy.

### Spacing After

* `XL` (`48px`) on Desktop and Tablet.
* `L` (`32px`) on Mobile.

## Process Steps

### Content

The Process Steps area contains exactly three Steps in this order:

1. Step number `01`; title `Tell Us About Your House`; Body Copy: `Tell us about your property and situation. No repairs or preparation are needed.`
2. Step number `02`; title `Get Your Cash Offer`; Body Copy: `We’ll review the details and present a fair cash offer with no fees or obligation.`
3. Step number `03`; title `Choose Your Closing Date`; Body Copy: `Choose the closing date that works for you, and we’ll handle the remaining details.`

### Component and Semantics

* The Step collection uses ordered-list semantics, and each Step uses list-item semantics.
* On Desktop and Tablet, each complete Step uses native button semantics and activates its corresponding Step Content.
* The Step Title uses `H3` semantics.
* Each Step number is plain text within a local circular treatment and does not use the `Icon Container` Component or icon semantics.

### Visual Design

* The Steps use an open presentation without a Card background, Border, Radius, or Shadow.
* On Desktop and Tablet, one Step is visually active at a time.
* The active Step number uses Brand Green Dark text on a Brand Green Light circular background. A Brand Green vertical indicator appears beside the active Step content.
* Inactive Step numbers use Text Secondary on a Background Neutral circular background.
* On Mobile, all Step numbers use the inactive neutral treatment, and the Steps do not use active or inactive visual states.
* Each Step number uses the global `H4` typography.
* The Step Title uses the local `16px / 600 / 1.5` typography treatment with the default letter spacing and Text Primary color across all Breakpoints.
* The Body Copy uses the global `Body` typography and Text Secondary color.

### Dimensions and Alignment

* All Step content is left-aligned.
* On Desktop and Tablet, each Step control spans the complete available width of the Process Steps area.
* Within each Step, the Step number appears above the Step Title and Body Copy.
* The Step Title and Body Copy form a vertical text flow.
* Each Step number uses `48px × 48px` dimensions and the global `Pill` Radius.
* On Desktop and Tablet, the active-Step indicator uses `1px × 16px` dimensions and sits directly on the left outer System Line.
* The indicator is vertically centered against the Step Title's `24px` line box.
* The indicator does not occupy layout space, so changing the active Step does not shift the Step content.
* On Mobile, the indicator is not rendered and does not reserve layout space.

### Spacing

* `S` (`16px`) separates the Step number from the Step text flow.
* `S` (`16px`) separates the Step Title from the Body Copy.
* On Desktop and Tablet, `L` (`32px`) separates adjacent Steps.

### Interaction

* The following interaction model applies on Desktop and Tablet.
* Each Step control uses `cursor: pointer`.
* When an inactive Step is hovered, its Step number and Step Title use Brand Green Dark while the number's Background Neutral circle remains unchanged.
* Step color changes use a `150ms ease` transition.
* The active Step retains its active visual treatment when hovered.
* Step `01` is active when the composition first loads.
* The active Step advances automatically in the sequence `01` to `02` to `03`, then returns to `01`.
* Automatic advancement occurs every `7 seconds`.
* Activating a Step manually makes it the active Step, displays its corresponding Step Content, and stops automatic advancement for the remainder of the current page view.
* Each automatic or manual Step change replaces the content displayed in the Step Content area.
* On Desktop and Tablet, automatic and manual illustration changes use a `300ms ease` crossfade in which the outgoing illustration fades out and the incoming illustration fades in.
* The transition does not slide, scale, or otherwise move the illustrations spatially.
* Automatic advancement pauses while the pointer is over the Interactive Process Composition, while keyboard focus is within it, and while the document is not visible. It resumes when the applicable pause condition ends unless the user has activated a Step manually.
* When `prefers-reduced-motion: reduce` applies, automatic advancement is disabled, Step `01` remains active until the user selects another Step, and manual illustration changes occur immediately without animation.
* On Mobile, all three Steps and their corresponding Step Content are displayed simultaneously and the composition has no automatic advancement, active Step, or Step-selection interaction.

### Accessibility

* The visible Step number is decorative for assistive technologies because the ordered-list semantics communicate the same sequence.
* On Desktop and Tablet, the active Step is exposed programmatically.
* On Desktop and Tablet, the Step controls and Step Content use an accessible relationship so the active control identifies the content it displays.
* The active-Step indicator is decorative and is not exposed to assistive technologies.
* Step changes do not trigger live announcements.
* On Mobile, each Step and its corresponding Step Content form one non-interactive semantic group within the ordered list.

## Step Content

### Content

* On Desktop and Tablet, the area displays content corresponding to the active Process Step.
* Step `01` uses `/images/how-it-works/property-form.svg`. The illustrated form contains:
  1. Heading: `Tell us about your house`.
  2. Field label: `Property address`.
  3. Property-condition choices: `Move-in ready` and `Needs some work`.
  4. Field label: `Contact information`.
  5. Visual action label: `Continue`.
* Step `02` uses `/images/how-it-works/cash-offer.svg`. The illustrated offer contains:
  1. Heading: `Your cash offer is ready`.
  2. Clearly illustrative amount: `$172,541`.
  3. Status label: `No obligation`.
  4. Reassurance rows: `No agent fees` and `No repairs required`.
  5. Visual action label: `Review offer`.
* Step `03` uses `/images/how-it-works/closing-calendar.svg`. The illustrated calendar contains:
  1. Heading: `Choose your closing date`.
  2. A generic calendar without a fixed month or year.
  3. One date selected using Brand Green emphasis.
  4. Confirmation text: `Closing date selected`.
  5. Visual action label: `Confirm date`.
* The illustration content is fixed and reused across Area Pages; it does not vary by Area.

### Component and Semantics

* Each Step Content is a static SVG image rather than an interactive form, offer interface, or calendar.

### Visual Design

* The three illustrations use one cohesive, Stripe-inspired visual language without reproducing Stripe branding, logos, or proprietary interface content.
* Each illustration uses a global Surface white canvas with `2XL` (`64px`) internal Padding on all sides.
* One primary illustrated interface surface is centered within each canvas and remains within its bounds.
* The primary illustrated interface surface uses global Surface, the global Medium Radius (`12px`), and a local SVG drop shadow with `dx="0"`, `dy="16"`, `stdDeviation="14"`, `#101114` color, and `10%` opacity.
* Illustrated fields and internal regions use the global `1px` Border and global Small Radius (`8px`).
* Illustrated primary text uses Text Primary, supporting text uses Text Secondary, and actions and selected states use Brand Green with Brand Green Light where a supporting accent surface is required.
* The interface treatment remains visually lightweight and does not resemble a photographic scene.
* The Step Content does not add an outer Border, Shadow, or Radius; the white canvas, internal whitespace, rounded interface surfaces, and subtle depth are rendered within each SVG.

### Dimensions and Alignment

* On Desktop and Tablet, the Step Content fills its allocated Grid area.
* On Mobile, each Step Content instance fills the complete available Content Grid width.
* All three SVG illustrations use a `540 × 490` `viewBox` and a shared `54:49` Aspect Ratio.
* Each illustration uses `100%` of the available Step Content width, and its rendered height derives from the shared Aspect Ratio.
* The Step Content preserves the same geometry when its displayed illustration changes.
* On Desktop and Tablet, the top edge of the Step Content aligns with the top edge of the Process Steps area.
* The Step Content remains top-aligned and does not stretch or vertically center when the Process Steps area is taller.

### Accessibility

* The illustrations are decorative because the corresponding Process Step provides the complete meaningful content.
* All meaningful Step information remains in the adjacent Process Step; text or controls depicted within an illustration are visual details and do not introduce additional product information or interaction.

### Technical Requirements

* The three illustrations are repository-owned SVG assets loaded as images.
* Each SVG preserves its approved `540 × 490` coordinate system.
* The illustrations do not require client-side form controls, embedded third-party interfaces, or external runtime assets.

# Local / Area Section

## Purpose

Create a local Section that uses this documented structure across Area Pages while its area-specific content varies by location.

The Section:

* Establishes local familiarity and credibility.
* Provides useful information about the specific area.
* Highlights nearby cities where the company buys houses.

## Area Page Routing

* Every Area Page uses the canonical route pattern `/sell-your-house-fast-as-is-{city-slug}`.
* Each Area Page's canonical city slug is supplied by the canonical Area dataset, and its route is derived from that slug rather than stored as an independently authored URL.
* The current Cleveland Area Page uses the canonical slug `cleveland` and route `/sell-your-house-fast-as-is-cleveland`.
* `/areas-we-buy-in` remains the broader service-area inventory route and is not the parent path for individual Area Pages.

## Layout

On Desktop and Tablet, the Section Intro spans the complete available Content Grid width above the left and right areas. Beneath it, the left-area elements form one top-to-bottom content flow and the right-area elements form a separate top-to-bottom content flow; the two flows begin from the same baseline and appear in parallel within their allocated Grid columns.

### Desktop

* The Section Intro occupies Grid Columns `1–12`.
* The left area occupies Grid Columns `1–5`.
* Grid Column `6` remains intentionally empty as composition whitespace between the two content flows.
* The right area occupies Grid Columns `7–12`.

### Tablet

* The Section Intro occupies Grid Columns `1–8`.
* The left area occupies Grid Columns `1–4`.
* The right area occupies Grid Columns `5–8`.

### Mobile

* The left and right areas collapse into one column spanning the complete available Content Grid width.
* Canonical document and Mobile visual order: Section Intro, Local Map (including its information note), Nearby Areas, Local Statistics (including Data Sources), Local Market Content (the house photograph).
* This order also defines screen-reader and keyboard traversal. Desktop and Tablet retain their existing two-column visual composition through explicit Grid placement, without duplicate content or JavaScript reordering.

## Section Intro

### Content

Contains, in document order:

1. Section Label: `LOCAL EXPERTISE`, with the canonical Lucide `MapPin` icon.
2. Area-specific Primary Headline.
3. Area-specific Supporting Copy.

The Primary Headline and Supporting Copy are dynamic Area Page content. Each future Area Page provides its own approved area-specific values while preserving the same Section structure and content roles. No generic automated copy formula is defined.

For the current Cleveland Area Page:

* Primary Headline: `We Know Cleveland`
* Supporting Copy: `Every local market has its own character. We understand the communities, housing landscape, and local factors that can shape a home sale in Cleveland.`

### Component and Semantics

* The Section Label uses the documented `Section Label` Component.
* The Primary Headline uses `H2` semantics.
* The Supporting Copy uses paragraph semantics.

### Visual Design

* The Primary Headline uses the global `H2` typography.
* The Supporting Copy uses the global `Body Large` typography.

### Dimensions and Alignment

* All Section Intro content is left-aligned.
* The Section Intro occupies the complete available Content Grid width across all Breakpoints.

### Spacing

* `S` (`16px`) separates the Section Label from the Primary Headline.
* `M` (`24px`) separates the Primary Headline from the Supporting Copy.

### Spacing After

* `L` (`32px`) on Desktop and Tablet.
* `M` (`24px`) on Mobile.

## Local Map

### Content

* The current Area Page location is the primary geographic focus.
* `Nearby Areas` is the dedicated Section element for explicitly presenting the Area Page's approved surrounding locations.
* Information note: `We buy houses throughout {Area Name} and nearby cities.`, generated dynamically from the current Area Page data.
* For the current Cleveland Area Page, the information note is `We buy houses throughout Cleveland and nearby cities.`.
* The repository-owned canonical Area dataset supplies the Google Maps embed URL for each Area Page. Each URL displays that page's approved current location, so the shared Section is not hardcoded for Cleveland or any other individual location.
* For the current Cleveland Area Page, the approved embed URL is `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191251.91240052145!2d-81.70586405!3d41.497532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830ef2ee3686b2d%3A0xed04cb55f7621842!2sCleveland%2C%20OH%2C%20USA!5e0!3m2!1sen!2sil!4v1788783140965!5m2!1sen!2sil`.

### Component and Semantics

* The information note uses paragraph semantics and contains the canonical Lucide `Info` icon before the text.

### Visual Design

* Google Maps owns the embedded Map's internal presentation, labels, controls, and geographic detail.
* The Map container uses the global `Medium` Radius (`12px`) and clips the Google Map content to that Radius.
* The Map uses no Border or Shadow; the Map surface provides its separation from the surrounding Section background.
* Required Google Maps branding and attribution remain visible and unmodified.
* The information note uses global `Body Small` typography and global `Text Secondary` for both its icon and text.
* The information note remains visually open without a background, Border, Shadow, or separate surface.

### Dimensions and Alignment

* On Desktop, fills the complete left Grid area across Columns `1–5`.
* On Tablet, fills the complete left Grid area across Columns `1–4`.
* On Mobile, fills the complete available Content Grid width.
* Uses a `16:9` Aspect Ratio where the resulting height is at least `200px`. Width is determined by the applicable Grid allocation, and height is derived from the Aspect Ratio.
* Uses a `200px` minimum height. At narrow widths where `16:9` would produce a shorter Map, the minimum height takes precedence.
* The information note forms a horizontal icon-and-text flow below the Map, vertically center-aligns the icon and text, and uses the global Small icon size (`16px`).

### Spacing

* `M` (`24px`) separates the Map from the information note on Desktop and Tablet.
* `S` (`16px`) separates the Map from the information note on Mobile.
* `XS` (`8px`) separates the `Info` icon from the note text across all Breakpoints.

### Spacing After

* `2XL` (`64px`) on Desktop.
* `L` (`32px`) on Tablet.
* `M` (`24px`) on Mobile.

### Interaction

* The Map remains interactive through the native embedded Google Maps experience.
* Google Maps owns the embedded controls and interaction behavior; the Section adds no custom JavaScript Map interaction layer.

### Accessibility

* The iframe title is `Interactive map of {Area Name}`, generated dynamically from the current Area Page data.
* Google Maps' embedded accessible interface remains unmodified.
* The `Info` icon is decorative because the adjacent note text communicates the complete information; the icon is hidden from assistive technologies and does not receive an accessible name.

### Technical Requirements

* Each Area Page's embed URL is generated through Google Maps' standard Share or embed map workflow and stored in the canonical Area dataset.
* The iframe uses lazy loading and the `strict-origin-when-cross-origin` referrer policy.

## Local Statistics

### Content

* Headline: `{AREA NAME} AT A GLANCE`, generated dynamically from the current Area Page data.
* For the current Cleveland Area Page, the headline is `CLEVELAND AT A GLANCE`.
* Every Area Page uses the following fixed set of four statistic roles in this canonical order:
  1. `Median Sale Price`
  2. `Homes Sold`
  3. `Median Price per Sq. Ft.`
  4. `Median Days on Market`
* Redfin housing-market data is the canonical source for all four statistics.
* Their values and applicable data period are area-specific and time-dependent.
* The repository-owned Area data provides the four statistic values, applicable data period, and source reference required by Data Sources.
* For the current Cleveland Area Page, the approved July 2026 snapshot is:
  * `Median Sale Price`: `$149,925`
  * `Homes Sold`: `1,202`
  * `Median Price per Sq. Ft.`: `$100/sq ft`
  * `Median Days on Market`: `33 days`
  * Data period: `July 2026`
  * Source: `Redfin`
* Every Statistics Card includes the canonical Lucide icon assigned to its statistic role:
  * `Median Sale Price`: `BadgeDollarSign`
  * `Homes Sold`: `House`
  * `Median Price per Sq. Ft.`: `Ruler`
  * `Median Days on Market`: `CalendarDays`
* Every Statistics Card includes Supporting Copy below its statistic label.
* For the current Cleveland Area Page, the approved Supporting Copy is:
  * `Median Sale Price`: `See what homes are selling for across Cleveland and get a quick sense of the local market.`
  * `Homes Sold`: `Recent sales activity across Cleveland.`
  * `Median Price per Sq. Ft.`: `Compare Cleveland home values by square foot.`
  * `Median Days on Market`: `See how long Cleveland homes typically stay on the market before selling.`

### Component and Semantics

* The headline uses `h3` semantics.
* The statistics collection uses semantic list and list-item elements.
* Within each Statistics Card, the icon and statistic value form the initial content group, followed in document and visual order by the statistic label and Supporting Copy.
* Supporting Copy uses paragraph semantics.

### Visual Design

* Each Statistics Card uses the solid local background color assigned to its canonical statistic role:
  * `Median Sale Price`: Purple (`#9966FF`)
  * `Homes Sold`: Dark Navy (`#002C59`)
  * `Median Price per Sq. Ft.`: Turquoise (`#00C4C4`)
  * `Median Days on Market`: Royal Blue (`#1959E6`)
* The Purple and Turquoise Cards use global `Text Primary` (`#101114`) for their text and icons.
* The Dark Navy and Royal Blue Cards use white (`#FFFFFF`) for their text and icons.
* Statistics Cards use the global `Medium` Radius (`12px`).
* The headline uses a local `18px` font size and `700` weight across all Breakpoints while retaining the global `H3` line height and letter spacing.
* The headline is displayed in uppercase and uses global `Brand Green Dark`.
* Statistic values use global `H3` typography.
* Statistic labels use global `Body` typography.
* Supporting Copy uses global `Body Small` typography.

### Dimensions and Alignment

* On Desktop, the complete composition remains within the left area across Grid Columns `1–5`.
* On Tablet, the complete composition remains within the left area across Grid Columns `1–4`.
* On Mobile, the complete composition occupies the complete available Content Grid width.
* Across all Breakpoints, the composition uses two equal-width columns.
* The left column forms an independent top-to-bottom Card flow containing `Median Sale Price` followed by `Homes Sold`.
* The right column forms an independent top-to-bottom Card flow containing `Median Price per Sq. Ft.` followed by `Median Days on Market`.
* A Card's height in one column does not determine the vertical position of either Card in the other column.
* No Statistics Card spans both columns.
* On Desktop and Tablet, the icon and statistic value form a horizontal row and are vertically center-aligned within each Card.
* On Mobile, the icon appears above the statistic value in a vertical flow, and both are left-aligned.
* On Desktop and Tablet, each Statistics Card uses `M` (`24px`) internal padding on all sides.
* On Mobile, each Statistics Card uses `S` (`16px`) internal padding on all sides.
* Across all Breakpoints, Statistics Card height is content-driven; no fixed height or minimum height is specified.

### Spacing

* `M` (`24px`) separates the headline from the Statistics Cards across all Breakpoints.
* On Desktop and Tablet, an `M` (`24px`) horizontal and vertical gap separates adjacent Statistics Cards.
* On Mobile, an `S` (`16px`) horizontal and vertical gap separates adjacent Statistics Cards.
* `XS` (`8px`) separates the icon from the statistic value within their initial content group.
* `S` (`16px`) separates the initial content group from the statistic label.
* `XS` (`8px`) separates the statistic label from Supporting Copy.
* `S` (`16px`) separates the Statistics Cards from Data Sources.

### Accessibility

* Each statistics icon is decorative because its visible statistic label communicates the same meaning; the icon is hidden from assistive technologies and does not receive an accessible name.

### Data Sources

#### Content

* Visible content follows the pattern `Data from Redfin · Updated {Data Period}`.
* For the current Cleveland July 2026 snapshot, the visible content is `Data from Redfin · Updated July 2026`.
* `Redfin` links to the canonical Redfin housing-market source for the current Area Page statistics.
* The source destination is area-specific. For the current Cleveland Area Page, the destination is `https://www.redfin.com/city/4145/OH/Cleveland/housing-market`.
* `{Data Period}` reflects the period associated with the currently displayed statistic values.
* The four statistic values, source destination, and data period are updated together as one data snapshot.

#### Component and Semantics

* Data Sources uses paragraph semantics.
* `Redfin` uses the documented `Text Link` Component with link semantics.

#### Interaction

* Activating `Redfin` opens the current Area Page's source destination in a new tab, following the global [Link Destinations](../implementation-guidelines.md#link-destinations) rule for external web destinations.

#### Visual Design

* Uses the global `Body Small` typography.

### Spacing After

* On Mobile, `L` (`32px`) separates the complete Local Statistics composition from Local Market Content.

## Nearby Areas

### Content

* Heading, preserving the documented two-line presentation:
  * Line 1: `CITIES WE KNOW.`
  * Line 2: `MARKET WE BUY IN.`
* Every Area Page presents exactly six nearby-city entries.
* The city names, their order, and their canonical city slugs are area-specific, are supplied by the canonical Area dataset, and use the same dataset as the Local Map where their geographic content overlaps.
* For the current Cleveland Area Page, the six cities appear in this canonical order:
  1. `Lakewood`
  2. `Cleveland Heights`
  3. `Euclid`
  4. `Parma`
  5. `Shaker Heights`
  6. `Garfield Heights`
* The collection concludes with the link label `See all areas we buy in` and the canonical Lucide `ArrowRight` icon.
* Every nearby-city entry uses the canonical Lucide `MapPin` icon; city-specific icons or symbolism are not introduced without approved city-specific content that justifies them.

### Component and Semantics

* The heading uses `h3` semantics.
* The nearby-city collection uses semantic list and list-item elements.
* Each list item contains one native link wrapping its complete nearby-city entry, including the decorative `MapPin` and visible city name.
* The concluding link uses the documented `Text Link` Component with link semantics and places the decorative `ArrowRight` after its visible label.

### Visual Design

* The heading uses the same local typography and visual treatment as the Local Statistics headline: `18px`, `700` weight, the global `H3` letter spacing, uppercase presentation, and global `Brand Green Dark`.
* The heading uses a local `1.4` line height to provide clear separation between its two intentional lines.
* The nearby-city collection uses a visual grid of `MapPin`-and-city-name links.
* The semantic list has no visible list markers.
* Each complete linked entry remains visually open and does not use a background, Border, Shadow, or surrounding Card surface.
* Nearby-city names use the global `Body` typography.
* By default, each city name uses global `Text Primary`, each `MapPin` uses global `Brand Green`, and the link has no underline.

### Dimensions and Alignment

* On Desktop and Tablet, occupies the right area.
* On Mobile, occupies the complete available Content Grid width.
* Across all Breakpoints, the six city entries form a two-column-by-three-row Grid with two equal-width columns.
* The Grid fills in canonical city order from left to right across each row, then from top to bottom across the three rows.
* Each nearby-city link spans the complete width of its Grid cell, which forms the complete pointer and keyboard-focus target.
* Within each link, the `MapPin` appears before the city name in a horizontal flow, and the icon and city name are vertically center-aligned.

### Spacing

* `M` (`24px`) separates the heading from the six-city Grid across all Breakpoints.
* An `S` (`16px`) horizontal and vertical gap separates adjacent city entries across all Breakpoints.
* An `XS` (`8px`) gap separates the `MapPin` from the city name within each linked entry.
* `M` (`24px`) separates the six-city Grid from the concluding `See all areas we buy in` Text Link across all Breakpoints.

### Spacing After

* On Desktop and Tablet, `XL` (`48px`) separates the complete Nearby Areas composition from Local Market Content.
* On Mobile, `XL` (`48px`) separates the complete Nearby Areas composition from Local Statistics. Nearby Areas follows the complete Local Map with its documented `M` (`24px`) spacing.

### Interaction

* Each complete nearby-city entry derives its destination from the city's canonical slug using `/sell-your-house-fast-as-is-{city-slug}`.
* For the current Cleveland Area Page, the destinations are:
  1. `Lakewood`: `/sell-your-house-fast-as-is-lakewood`
  2. `Cleveland Heights`: `/sell-your-house-fast-as-is-cleveland-heights`
  3. `Euclid`: `/sell-your-house-fast-as-is-euclid`
  4. `Parma`: `/sell-your-house-fast-as-is-parma`
  5. `Shaker Heights`: `/sell-your-house-fast-as-is-shaker-heights`
  6. `Garfield Heights`: `/sell-your-house-fast-as-is-garfield-heights`
* On Hover, the city name and `MapPin` use global `Brand Green Dark`.
* In the Active state, the city name and `MapPin` use `#245A33`, matching the established Text Link active color.
* Color transitions use `150ms ease`.
* The concluding link navigates to the canonical internal route `/areas-we-buy-in`.

### Accessibility

* Each `MapPin` icon is decorative because its accompanying visible city name communicates the entry's identity.
* The `ArrowRight` icon is decorative because the visible link label communicates the complete destination.

## Local Market Content

### Content

* A real local residential photograph replaces the former text Card, House icon, dot field, and two explanatory content groups.
* A compact white overlay retains the shared headline on two lines: **Local Knowledge.** followed by **Straightforward Offers.**
* The repository-owned Area dataset supplies the photograph, descriptive alternative text, title, photographer, source URL, and license for each Area Page.
* For Cleveland, use **East Boulevard Historic District, Glenville, Cleveland, OH**, photographed by **Warren LeMay**. The image illustrates an actual Cleveland neighborhood; it is not presented as a company-owned property or completed purchase.
* Local asset: `/images/local-area/cleveland-east-boulevard.jpg` (1024 by 768 pixels).
* Source and verified license record: https://www.flickr.com/photos/warrenlemay/28439607087/
* License: **CC0 1.0**, https://creativecommons.org/publicdomain/zero/1.0/ (verified 10 September 2026). Visible attribution is not required; source and license information remain in the Area dataset and project documentation.

### Component and Semantics

* Uses a `figure` containing the photograph and overlaid `H3` headline, without a visible credit or license row.

### Visual Design

* On Mobile and Tablet, the image frame uses a `4:3` Aspect Ratio. On Desktop, its height fills the available space below Nearby Areas, aligning its bottom with the left column's Local Statistics content. The photo's intrinsic aspect ratio does not determine Desktop row height.
* The image frame uses global Medium Radius (`12px`), no Border, and no Shadow. The photograph fills the frame with `object-fit: cover` and centered positioning, allowing a taller Desktop crop without distortion.
* The overlay uses global Surface, Small Radius (`8px`), no Border or Shadow, and global Body typography at weight `600` with Text Primary color.
* The photograph remains above the global System Lines; no additional System Line is drawn through it.

### Dimensions and Alignment

* On Desktop and Tablet, occupies the full width of the right area, visually directly after Nearby Areas. On Mobile, follows Local Statistics.
* On Desktop, the photograph stretches to the bottom of the Local Statistics composition. Left-column content remains top-aligned at its documented spacing; explicit Grid placement preserves the independent column flows without JavaScript measurement.
* The compact, content-sized overlay sits inside the lower-left corner of the photograph. It preserves the two-line headline where space permits and wraps naturally at narrow widths.
* On Mobile, uses its independent `4:3` ratio and retains the overlay placement within the canonical document flow.

### Spacing

* On Desktop and Tablet, the existing `XL` (`48px`) gap after Nearby Areas is retained. On Mobile, `L` (`32px`) separates Local Statistics from the photograph.
* The overlay uses `S` (`16px`) internal Padding and `S` insets from the left and bottom image edges. It also preserves at least `S` clearance from the right edge.

### Accessibility and Image Use

* The photograph is informative and uses descriptive alternative text from the Area dataset.
* The image and headline are not links.
* Only photographs verified as Cleveland or Northeast Ohio may be used here. Any replacement must permit commercial use without visible attribution; verify and document its source and license before removing any required credit.

# FAQ

## Purpose

Provide clear and quick answers to the main questions sellers may have, reduce uncertainty and objections, and help users understand the process without overloading the rest of the page with information.

## Layout

- On Desktop, the left flow contains the Section Intro followed by the Contact Us Link across Grid Columns `1–5`, Grid Column `6` remains intentionally empty as composition whitespace, and the FAQ Accordion occupies Grid Columns `7–12`.
- On Tablet, the left flow contains the Section Intro followed by the Contact Us Link across Grid Columns `1–4`, and the FAQ Accordion occupies Grid Columns `5–8`.
- On Mobile, the elements form one full-width flow in canonical document order: Section Intro, Contact Us Link, then FAQ Accordion.
- On Desktop and Tablet, the center System Line serves as the boundary at which the FAQ Accordion begins.

## Section Intro

### Content

Contains, in document order:

1. Section Label: **FAQ**, no icon.
2. Primary Headline: **Questions? We’ve got answers.**
3. Supporting Copy: **Get clear answers about how our process works, how we determine your offer, and what to expect when selling your house as-is.**

### Component and Semantics

- The Section Label uses the documented `Section Label` Component.
- The Primary Headline uses `H2` semantics.
- The Supporting Copy uses paragraph semantics.

### Visual Design

- The Primary Headline uses the global `H2` typography.
- The Supporting Copy uses the global `Body Large` typography.

### Spacing

- `S` (`16px`) separates the Section Label from the Primary Headline across all Breakpoints.
- `M` (`24px`) separates the Primary Headline from the Supporting Copy across all Breakpoints.

### Spacing After

- `M` (`24px`) separates the complete Section Intro from the Contact Us Link across all Breakpoints.

## Contact Us Link

### Content

- Decorative `MessageCircle` icon to the left of a compact text block containing:
  - **Still have a question?**
  - **Can’t find what you’re looking for?**
  - **Contact us** with a trailing right arrow.

### Component and Semantics

- Uses the default documented `Icon Container` with a `20px` icon inside a `40px` Brand Green Light circle. The icon is decorative and hidden from assistive technology.
- The title uses paragraph semantics with strong emphasis; the supporting copy uses paragraph semantics.
- The action uses the documented `Text Link` Component with link semantics and a decorative `16px` `ArrowRight` icon.

### Visual Design and Internal Spacing

- Remains part of the FAQ's left flow, without a Card, enclosing background, Border, Shadow, or internal Padding.
- The icon and text block remain horizontally arranged and vertically centered across Breakpoints, separated by `S` (`16px`). The text block can wrap naturally.
- The text block stacks its three lines with `XS` (`8px`) gaps.
- The title uses `Body` typography at weight `600`; supporting copy uses `Body Small` and Text Secondary.
- The Text Link uses Brand Green Dark as a Section-specific default color override and retains its documented active color.

### Spacing After

- On Mobile, `L` (`32px`) separates the Contact Us Link from the FAQ Accordion.

### Interaction

- Activating the link navigates to the Contact Page at `/contact`.

## FAQ Accordion

### Content

- The FAQ uses the following fixed set of six questions in canonical order.

#### Questions and Answers

1. Question: **How does the process work?**
   Answer: **Start by telling us about your house and your situation. We review the information, take a closer look at the property, and prepare a no-obligation cash offer. If the offer works for you, you choose the closing date and we handle the details needed to complete the sale.**
2. Question: **Do I need to make any repairs?**
   Answer: **No. We buy houses as-is, so you do not need to make repairs, complete updates, stage the property, or prepare it for a traditional listing before selling.**
3. Question: **Are there any fees or commissions?**
   Answer: **No. We do not charge fees or commissions for selling your house to us. The cash offer is presented clearly so you can understand it before deciding whether to move forward.**
4. Question: **How quickly can I sell my house?**
   Answer: **The timeline depends on your situation and the details of the property. If you need to move quickly, we can work toward an earlier closing. If you need more time, you can choose a closing date that better fits your schedule.**
5. Question: **How do you determine your offer?**
   Answer: **We consider the property’s condition, location, layout, and any updates or repairs it may need. We also review recent sales, local buyer demand, and how similar properties are performing in the surrounding market before preparing the cash offer.**
6. Question: **Am I obligated to accept the offer?**
   Answer: **No. The offer is completely optional, and there is no pressure to accept it. We explain the offer clearly so you can decide whether it is right for your situation.**

### Component and Semantics

- Questions are displayed using the **Accordion** defined in the Component Library.

# Final CTA

## Purpose

Conclude the page with a clear and simple conversion path.

At this stage, the user has already received the necessary information throughout the page, so the section does not introduce new information. Instead, it focuses attention on the primary action — receiving an offer for their house.

## Layout

- The Section Intro, Primary CTA, and Reassurance Row form one left-aligned composition.
- On Desktop, the CTA composition occupies Grid Columns `1–6`; the Supporting Benefits occupy Grid Columns `7–12`, with each benefit occupying three columns.
- On Tablet, the CTA composition occupies Grid Columns `1–4`; the Supporting Benefits occupy Grid Columns `5–8`, with each benefit occupying two columns.
- On Desktop and Tablet, the CTA composition and Supporting Benefits form parallel left- and right-area content flows whose top edges align.
- On Mobile, the CTA composition occupies the full available Content Grid width, followed by the Supporting Benefits in canonical document order.

## Section Intro

### Content

Contains, in document order:

1. Section Label: **Ready When You Are**, no icon.
2. Primary Headline: **Ready to sell your {Area Name} house?** For the current Cleveland Area Page: **Ready to sell your Cleveland house?**
3. Supporting Copy: **Tell us about your {Area Name} house and receive a fair, no-obligation cash offer built around your situation and timeline.** For the current Cleveland Area Page: **Tell us about your Cleveland house and receive a fair, no-obligation cash offer built around your situation and timeline.**

- `{Area Name}` is supplied dynamically by the current Area Page data.

### Component and Semantics

- The Section Label uses the documented `Section Label` Component.
- The Primary Headline uses `H2` semantics.
- The Supporting Copy uses paragraph semantics.

### Visual Design

- The Primary Headline uses the global `H2` typography.
- The Supporting Copy uses the global `Body Large` typography.

### Dimensions and Alignment

- The complete Section Intro is left-aligned.

### Spacing

- `S` (`16px`) separates the Section Label from the Primary Headline across all Breakpoints.
- `M` (`24px`) separates the Primary Headline from the Supporting Copy across all Breakpoints.

### Spacing After

- `L` (`32px`) separates the complete Section Intro from the Primary CTA across all Breakpoints.

## Primary CTA

### Content

- Label: **Get My Cash Offer**.

### Component and Semantics

- Uses the documented **Button** Component with its `conversion` variant.

### Spacing After

- `XS` (`8px`) separates the Primary CTA from the Reassurance Row across all Breakpoints.

### Interaction

- Navigates to the Seller Lead Form Flow at the canonical internal route `/get-cash-offer`.

## Reassurance Row

### Content

- **100% free. No obligation.**

### Component and Semantics

- Uses paragraph semantics.

### Visual Design

- Uses the global `Body Small` typography.

### Dimensions and Alignment

- Horizontally centered relative to the Primary CTA rather than the complete Final CTA composition.

### Spacing After

- On Mobile, `L` (`32px`) separates the Reassurance Row from the Supporting Benefits.

## Supporting Benefits

### Content

Contains exactly two benefits in this canonical order:

1. `House` icon; heading **Sell As-Is**; Supporting Copy: **Skip repairs, cleaning, and staging. We buy your house in its current condition.**
2. `CalendarCheck` icon; heading **Close on Your Timeline**; Supporting Copy: **Choose the closing date that works for you, whether you need to move quickly or need more time.**

The Supporting Benefits are shared across Area Pages and do not vary by location.

### Component and Semantics

- The benefits use one semantic unordered list with one list item per benefit.
- Each icon uses the documented `Icon Container` Component at its Default size.
- Each benefit heading uses `H3` semantics.
- Each Supporting Copy uses paragraph semantics.

### Visual Design

- Each benefit heading uses a local `16px / 600 / 1.25` typography treatment.
- Each Supporting Copy uses the global `Body` typography.
- The benefits remain visually open without a Card, background, Border, Radius, or Shadow.
- On Desktop and Tablet, each benefit is preceded by a `1px` global `Brand Green` vertical separator aligned with the top of its heading and matching the heading's `20px` line-box height; the first separator sits between the CTA composition and the first benefit, and the second sits between the two benefits.

### Dimensions and Alignment

- The benefits are left-aligned.
- On Desktop and Tablet, each icon, heading, and Supporting Copy form a vertical content flow in that order.

### Spacing

- `M` (`24px`) separates each `Icon Container` from its benefit heading across all Breakpoints.
- `S` (`16px`) separates each benefit heading from its Supporting Copy across all Breakpoints.

### Accessibility

- The `House` and `CalendarCheck` icons are decorative because their adjacent visible headings communicate the same benefit meaning.
- The separators are decorative.

### Responsive Behavior

- On Mobile, the two benefits form one full-width vertical flow in canonical order with an `L` (`32px`) gap.
- The vertical separators are not displayed on Mobile.

## Responsive Behavior

- The left-aligned hierarchy of the Section Intro, Primary CTA, and Reassurance Row is preserved across Breakpoints.
