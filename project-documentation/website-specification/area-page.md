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

Immediately communicate the location, offer, and credibility of the business, while providing the seller with a clear path to begin the conversion process.

## Layout

### Desktop

* Uses the global 12-column Grid.
* The content area occupies 5 columns.
* One column remains empty between the content and media areas.
* The media area occupies 6 columns.
* Grid distribution: `5 / 1 empty / 6`.

### Tablet

* Uses the global 8-column Grid.
* The content area occupies all 8 columns.
* The media area occupies all 8 columns.
* The media area appears below the content area with a 64px gap.

### Mobile

* Uses the global 4-column Grid.
* The content area occupies all 4 columns.
* The media area occupies all 4 columns.
* The media area appears below the content area with a 48px gap.

### Cross-Section Background Transition

* The lower Hero transitions into the upper portion of the following Situations Section through one continuous wavy Gradient treatment.
* The upper boundary begins at approximately `95%` of the Hero height on the left, `80%` near the center, and `65%` on the right.
* The boundary forms a smooth, continuous wave that is higher on the right and lower on the left, creating a strong diagonal descent from right to left without jagged edges or corners.
* The wave and Gradient scale smoothly across Breakpoints while preserving their direction, relative position, and visual continuity.
* The upper Hero remains `#FFFFFF`. Within the transition band, the color progresses gradually from `#FFFFFF` to `#DFEEE2`.
* The transition crosses the physical boundary between the Hero and Situations Section and reaches solid `#DFEEE2` exactly `96px` (`3XL`) into the Situations Section.
* The Situations Section remains solid `#DFEEE2` below that completion depth.
* The treatment spans the full viewport width without introducing horizontal overflow and is not constrained by the Content Container or Grid.
* The global System Lines remain visible above the treatment, and foreground content remains above both.
* The treatment must preserve foreground-content contrast and readability.

## Section Label

* Uses the documented `Section Label` Component.
* Content template: `[City], Ohio`.
* The `[City], Ohio` template renders in uppercase.
* `[City]` is the city name only, without the state.
* The content changes dynamically between Area Pages.
* Rendered example: `CLEVELAND, OHIO`.
* Includes the `MapPin` icon from `lucide-react` before the text.
* `MapPin` is decorative, is hidden from assistive technologies, and does not receive keyboard focus.
* Positioned above the Primary Headline.
* Non-interactive.
* Remains visually secondary to the Primary Headline.
* Spacing After: `16px` (`S`).

## Primary Headline

* Uses the global `H1` typography.
* Content template: `Sell Your House Fast in [City], Ohio`.
* `Sell Your House Fast in` uses the global `Text Primary` color.
* The complete location phrase, `[City], Ohio`, uses the global `Brand Green` color.
* The city name changes dynamically between Area Pages.
* This Hero content template applies to City Area Pages; non-city Area Pages require a separately defined content template.
* Serves as the only `H1` on the page.
* Acts as the primary visual focal point of the Hero.
* Wraps naturally according to the available width; do not add manual line breaks.
* `[City]` may wrap naturally at word boundaries but must not break within a word.
* Spacing After: `24px` (`M`).

## Supporting Copy

* Appears directly below the Primary Headline.
* Uses the global `Body Large` typography.
* Content template: `We buy houses in [City] as-is, with no repairs, fees, or waiting for a traditional sale.`
* The city name changes dynamically between Area Pages.
* Remains visually secondary to the Primary Headline.
* Spacing After: `32px` (`L`).

## Button

* Uses the documented `Button` Component.
* Label: `Get My Cash Offer`.
* Appears below the Supporting Copy.
* Navigates to the Seller Lead Form Flow at the canonical internal route `/get-cash-offer`.
* Renders with anchor semantics because it navigates to a separate route.
* Spacing After: `8px` (`XS`).

## Supporting Microcopy

* Content: `100% free. No obligation.`
* Appears directly below the `Button`.
* Horizontally centered relative to the `Button` rather than the full content area.
* Uses the global `Body Small` typography.
* Uses the global `Text Secondary` color.
* Non-interactive.
* Remains visually secondary to the `Button`.
* Preserves the same content and behavior across all Breakpoints.
* Spacing After: `32px` (`L`).

## Benefits List

* Uses one semantic unordered list (`<ul>`) containing exactly three list items (`<li>`) in the documented order.
* Contains exactly three benefits using the canonical `lucide-react` export names:

  * `House` — `Sell As-Is`.
  * `BadgeDollarSign` — `No Fees`.
  * `CalendarCheck` — `Choose Your Closing Date`.
* `House`, `BadgeDollarSign`, and `CalendarCheck` are decorative, are hidden from assistive technologies, and do not receive keyboard focus.
* Appears below the Supporting Microcopy.
* Each benefit consists of a Line Icon followed by a short text label.
* Benefit labels use the global `Body Small` typography.
* Each icon-and-label pair remains together as one item.
* Labels may wrap naturally at word boundaries but must not break within words.
* Icons align with the first line of multiline labels.
* Icons use the global Medium Icon size.
* The gap between the icon and label is `8px`.
* The inter-benefit gap is `24px` (`M`): horizontal on Desktop and Tablet, and vertical on Mobile.
* Benefits are informational and non-interactive.
* On Desktop and Tablet, the benefits are displayed in a single horizontal row that does not wrap.
* On Mobile, the benefits are displayed vertically in the same document order.
* Individual benefits do not use Cards, backgrounds, borders, or shadows.

## Local Media Composition

* Occupies the media area defined in the Hero Layout.
* Contains two property/location images and one `Local Trust Card`.
* Uses an asymmetric, editorial composition.
* The images and `Local Trust Card` read as a single visual unit.
* The composition does not form a symmetrical Grid or a complete rectangular outer boundary.
* Remains visually secondary to the Primary Headline.
* The complete composition remains within the Content Container at every Breakpoint and preserves the globally defined content inset from the outer System Lines.

## Local Images

* The `Local Media Composition` contains exactly two rectangular images with different dimensions and Aspect Ratios.
* The same two images are used across all City Area Pages and do not change according to `[City]`.
* The images provide general residential context and must not imply that they depict the named city.
* The currently selected image assets are temporary and will later be replaced by two final shared images.
* The final images retain the same asset paths, Aspect Ratios, composition geometry, and responsive behavior.
* Both images are decorative and use `alt=""`.
* Both images fill their frames without distortion and use the global Medium Border Radius and global Subtle Shadow.
* At the approved Desktop reference size, the Left and Right Images form a `541px`-wide row with approximately `20px` of horizontal space between them.
* Their bottom edges align, and the images do not overlap.

### Left Image

* Temporary asset path: `/images/area-hero/local-left.webp`.
* Desktop reference size: `271px × 202px`.
* Positioned on the left side of the image row with its bottom edge aligned to the Right Image.

### Right Image

* Temporary asset path: `/images/area-hero/local-right.webp`.
* Desktop reference size: `250px × 328px`.
* Positioned on the right side of the image row with its bottom edge aligned to the Left Image.

### Responsive Behavior

* At narrower widths, the approved image sizes, horizontal gap, and relative positions scale down proportionally as one visual unit without changing the image order or bottom alignment.
* The complete image-and-card composition remains within the Content Container at all Breakpoints.

## Local Trust Card

* Appears as part of the `Local Media Composition`.
* Uses the local portrait asset at `/images/local-trust-portrait.webp`.
* On Desktop and Tablet, the card is `57.6%` of the media composition width; on Mobile, it is `92.16%` of the media composition width.
* Uses `16px` (`S`) internal padding.
* The portrait is rendered at `69.12px × 69.12px` with a `1:1` Aspect Ratio and fills its crop without distortion.
* The portrait uses a circular crop with the global Pill Radius.
* The portrait is decorative and uses `alt=""`.
* The final portrait will replace the file at the same path and retain the same `1:1` Aspect Ratio and rendering rules.
* The portrait appears on the left of the card's identity row, with a `16px` (`S`) gap before the name-and-title group.
* The name-and-title group is vertically centered relative to the portrait and left-aligned.
* The name `Noah Lubko` uses the global `Label` typography and `Text Primary` color.
* The title `Founder & Home Buyer` appears directly beneath the name with an `8px` (`XS`) vertical gap and uses the global `Caption` typography and `Text Secondary` color.
* The trust message `We’re local to Northeast Ohio and understand the communities we serve.` appears beneath the complete identity row with an `8px` (`XS`) vertical gap.
* The trust message spans the card's content width, is left-aligned, and uses the global `Body Small` typography and `Text Secondary` color.
* Remains visually secondary to the two Local Images.
* Reinforces direct, personal involvement in the seller’s experience.
* Uses the global Surface color, Medium Border Radius, and Floating Shadow.
* Does not contain a CTA.
* Preserves the same content and role across all Area Pages.
* Remains integrated with the image composition across all Breakpoints.
* Centered beneath the Left and Right Images without overlapping them.
* At the approved Desktop reference size, approximately `20px` of vertical space separates the images' shared bottom edge from the card.
* At narrower widths, this vertical space scales proportionally with the complete media composition.
* The card contributes to the composition's total height at every Breakpoint.

# Situations — Situations We Can Help With

## Purpose

Help sellers identify the situation that best matches their circumstances and understand that the company has relevant experience.

Provide entry points to dedicated content and SEO pages for each documented situation.

## Layout

The Section Label, Primary Headline, and Supporting Copy appear above the main content area.

On Desktop, the main content area:

- Is bounded by the outer System Lines.
- Spans the complete Desktop Grid from Column `1` through Column `12`.
- Places the Situation Selector in Grid Columns `1–3`.
- Places the Selected Situation Content in Grid Columns `4–12`.
- Uses the second System Line from the left to separate the two areas between Grid Columns `3` and `4`.
- Preserves spacing between foreground content and the dividing System Line on both sides.

The Primary Headline and Supporting Copy are not constrained by the main content area's internal division.

On Tablet:

- The Situation Selector appears above the Selected Situation Content.
- Both areas use the available content width.
- The Situation Selector uses a two-column arrangement.
- The internal System Line does not divide the two stacked areas.

On Mobile:

- The Situation Selector appears above the Selected Situation Content.
- Both areas use the available content width.
- The Situation Selector appears as a single horizontal strip.
- No internal System Line divides the two stacked areas.

The Contact Us Option follows the Selected Situation Content at every Breakpoint.

## Section Label

- First element in the Section.
- Content: `We Help With`.
- Includes a House icon.
- Appears above the Primary Headline.
- Spacing After: `16px` (`S`) across all Breakpoints.

## Primary Headline

- Follows the Section Label.
- Content: `What brings you here?`
- Appears above the main content area.
- Spacing After: `24px` (`M`) across all Breakpoints.

## Supporting Copy

- Follows the Primary Headline.
- Appears above the main content area.
- Content remains pending.
- Spacing After: `48px` (`XL`) on Desktop and Tablet, and `32px` (`L`) on Mobile.

## Situation Selector

- Follows the Supporting Copy in document order.
- Occupies Grid Columns `1–3` on Desktop.
- On Desktop, displays all situation options simultaneously in a vertical Selector.
- On Tablet, displays all situation options simultaneously in a two-column arrangement.
- On Mobile, displays the situation options in one horizontally scrollable strip.
- When additional Mobile options extend beyond the visible area, part of the next option remains visible to indicate horizontal continuation.
- The Mobile selector does not advance automatically.
- Does not present every situation as a large Card.
- Selecting an option updates the Selected Situation Content below the Selector; the Selected Situation Content does not scroll horizontally with the Mobile strip.
- On Tablet, `48px` (`XL`) separates the Situation Selector from the Selected Situation Content.
- On Mobile, `32px` (`L`) separates the Situation Selector from the Selected Situation Content.
- No vertical gap applies between the Situation Selector and Selected Situation Content on Desktop because they appear side by side.
- The active option receives a subtle visual distinction.
- Every option is keyboard focusable and operable, with a clear focus-visible state.
- Keyboard focus remains visible when navigating the Mobile strip.
- The selected option and its selected state are communicated to assistive technologies.
- The complete list of situations remains pending.
- The default selected situation remains pending; `Foreclosure` is the proposed default.

## Selected Situation Content

- Follows the Situation Selector in document order.
- Occupies Grid Columns `4–12` on Desktop.
- On Tablet and Mobile, appears below the Situation Selector and uses the available content width.
- On Mobile, remains a stationary content area and does not participate in the Selector's horizontal scrolling.
- Displays content corresponding to the active Situation Selector option.
- Contains the following elements in order:
  1. Situation Image.
  2. Situation Explanation.
  3. Situation Benefits.
  4. Situation CTA.

### Situation Image

- Displays an image relevant to the selected situation.
- Supports the content without becoming the dominant visual element.
- Approved assets, dimensions, Aspect Ratio, and alternative-text treatment remain pending.

### Situation Explanation

- Provides a short explanation relevant to the selected situation.
- Exact content and typography remain pending.

### Situation Benefits

- Displays benefits relevant to the selected situation.
- Content, quantity, structure, typography, and semantics remain pending.

### Situation CTA

- Links to the dedicated content or SEO page for the selected situation.
- Label, Component, variant, and situation-specific destinations remain pending.

## Contact Us Option

- Follows the Selected Situation Content in document order.
- Follows the Selected Situation Content at every Breakpoint.
- Spacing Before: `32px` (`L`) across all Breakpoints.
- Provides an alternative path for users who are unsure which situation applies to them.
- Content, Component, destination, placement, and responsive behavior remain pending.

# Reviews

#### Purpose

Strengthen trust and social proof through authentic reviews from sellers who have worked with us.

Demonstrate that the business is local, credible, and has already helped homeowners throughout the Cleveland area.

#### Structure

- Section Label: **Customer Reviews**, with Star icon.
- Headline: **What Cleveland homeowners say**
- Short supporting copy.
- Google rating, including star rating and total number of reviews.
- Review cards containing:
  - Customer name.
  - Customer location.
  - Review source — Google, Facebook, BBB, etc.
- Link to view additional reviews.
- Short trust message at the bottom of the section.

#### Visual Direction

- Keep the section clean, minimal, and spacious.
- Position the Section Label above the primary headline.
- Use a large, prominent headline consistent with the site's overall typographic language.
- Display the Google rating below the supporting copy in a compact format that does not compete with the headline.
- Review cards should be large enough for comfortable reading without dominating the section.
- Cards use a very subtle border and avoid unnecessary visual decoration.
- The review source is displayed as secondary information.
- The carousel extends toward the side to reveal part of the next card.
- Preserve generous whitespace around the content.

#### Behavior

- Reviews are displayed in a horizontal carousel.
- On Desktop, multiple review cards are visible simultaneously.
- A portion of the next card remains visible at the edge to indicate additional content.
- Navigation arrows allow users to move through the reviews.
- Each review clearly identifies its source.
- The **See more reviews on Google** link leads to the external Google reviews profile.
- On Mobile, the number of visible cards adapts to the available viewport width.

#### Technical Specifications

No additional Reviews-specific technical specifications are currently defined. Global typography, spacing, color, component, and layout rules apply unless explicitly overridden.

#### Responsive Behavior

- Desktop displays multiple review cards simultaneously.
- Mobile adjusts the number of visible cards according to the available viewport width.
- The exact Tablet behavior, card widths, number of visible cards, and carousel movement increments are not currently defined.

#### Line System

- The outer System Lines bound the primary content area with the globally defined content padding.
- The headline, supporting copy, and Google rating remain within the area defined by the outer System Lines.
- The Carousel is not constrained by the internal System Lines and may extend beyond the right outer System Line to reveal part of the next card.

# How It Works

#### Purpose

Present the home-selling process as a simple, fast, and clear three-step process, while guiding the user toward starting the process.

#### Structure

- Section Label: **HOW IT WORKS**, with Gear icon.
- Headline: **Selling your house can be simple.**
- Short supporting copy.
- Three process steps:
  1. **Tell us about your house**
  2. **Get your cash offer**
  3. **Choose your closing date**
- Component: **Button**
- Compact benefits row below the CTA.

#### Visual Direction

- Use an asymmetric composition rather than three identical cards.
- The headline and supporting copy are positioned on the left as an independent content block.
- The three process steps appear to the right of the headline block.
- **Step 02 is the dominant element in the composition**, displayed as a larger and taller card.
- Steps 01 and 03 are smaller and serve as supporting elements around Step 02.
- Subtle circular arrows connect the steps and clarify the direction of the process.
- The numbers **01 / 02 / 03** act as prominent visual elements and are integrated with the icons.
- Brand Green is used to emphasize the numbers, icons, and small details, while the cards themselves remain light and understated.
- The Primary CTA is positioned below the step composition and uses the system's **Button** component.
- A compact horizontal benefits row appears below the CTA.
- Preserve generous whitespace and a clear hierarchy between the headline, process steps, and CTA.
- Do not turn the three steps into three symmetrical, identical cards. The difference in size and visual weight between the steps is an intentional part of the composition.
- Position the Section Label above the primary headline.

#### Behavior

- The Primary CTA leads the user into the conversion process.

#### Technical Specifications

No additional How It Works-specific technical specifications are currently defined. Global typography, spacing, color, component, and layout rules apply unless explicitly overridden.

#### Responsive Behavior

No specific Tablet or Mobile composition is currently defined.

The section should preserve the sequence and hierarchy of the three steps on smaller viewports. The exact stacking, positioning of the CTA and benefits, and treatment of the asymmetric step composition remain to be defined.

#### Line System

- The main composition containing the headline and three process steps is not constrained by the internal System Lines.
- The Benefits row is divided according to the four visual areas, with one Benefit in each area and appropriate padding from the outer System Lines.
- The three internal System Lines serve as dividers between the Benefits and may use a subtle Brand Green treatment within this area only.

# Local / Area Section

#### Purpose

Create a meaningful local section that differentiates the individual Area Pages across the website.

The overall design structure remains consistent between pages, while the content changes according to the specific area — Cleveland, Cleveland Heights, South Euclid, etc.

Primary goals:

- Establish local familiarity and credibility.
- Provide useful information about the specific area.
- Highlight nearby cities and neighborhoods where we buy houses.
- Create unique and meaningful local content for each Area Page.

#### Content

- Section Label: **Location**, with Location icon.
- Large area-specific headline.
- Short supporting copy.
- Local map.
- Nearby cities / neighborhoods.
- Link to all areas where we buy houses.
- Local statistics.
- Short local-market familiarity content.
- Data sources.
- Optional CTA at the end of the section.

#### Structure

This is intentionally a relatively long and spacious section. Do not attempt to compress all content into a single viewport.

The section uses a two-column composition, but neither column needs to be fully occupied at every point.

##### Left Column

- Introductory content.
- Local map.
- Local statistics.

##### Right Column

- Nearby cities / neighborhoods.
- Local market familiarity content.

Whitespace and intentionally unoccupied areas are part of the composition.

#### Visual Direction

- Use generous whitespace.
- Keep the number of elements restrained.
- Do not fill columns or empty areas simply because space is available.
- Use subtle cards and dividers.
- Position the Section Label above the primary headline.
- Maintain the site's overall design language through consistent typography, border radius, spacing, and iconography.

#### Behavior

- Content changes according to the specific Area Page.
- The **See all areas we buy in →** link leads to the complete list of areas where we buy houses.
- Local statistics may vary between Area Pages according to what is relevant to each location.
- The CTA at the end of the section is optional.

#### Technical Specifications

No additional Local / Area Section-specific technical specifications are currently defined. Global typography, spacing, component, color, and layout rules apply unless explicitly overridden below.

#### Responsive Behavior

No specific Tablet or Mobile composition is currently defined.

The section should preserve the hierarchy and relationship between the introductory content, local map, nearby areas, statistics, and local-market content on smaller viewports.

Exact column stacking, content ordering, map dimensions, and statistics composition for Tablet and Mobile remain to be defined.

#### Line System

- The outer System Lines bound the content area.
- The center System Line serves as the primary division between the left and right columns.
- The two additional internal System Lines remain visible but do not dictate the positioning of elements within either column.

#### Local Map

- Appears only within the left column.
- Remains relatively compact and does not dominate the section.
- Shows the current area and relevant surrounding areas.
- Uses a simple and understated visual treatment that supports the content rather than competing with it.

#### Nearby Areas

Nearby cities and neighborhoods are presented visually rather than as a conventional text list.

- Use a subtle grid with simple icons and area names.
- Conclude the group with a clear link:

**See all areas we buy in →**

#### Local Statistics

Display a small number of useful, area-specific data points in a format that is easy to scan and creates a distinct visual moment within the section.

The statistics use an asymmetric composition of blocks/cards with varying sizes and proportions, inspired by Stripe, rather than a generic grid of identical cards.

- Keep the overall statistics composition relatively small and compact compared with the rest of the section.
- Keep the statistics within the left column.
- Use varying card sizes and heights to create hierarchy and controlled asymmetry.
- Individual statistics may receive greater visual emphasis than others.
- Do not make the cards identical in size or proportion.
- Maintain a small and consistent gap between cards.
- Cards use **bold, solid background colors** and may intentionally extend beyond the Brand Greens and Neutral Palette.
- Multiple colors may be used within the same statistics group, such as purple, turquoise, and different shades of blue.
- The color treatment acts as an intentional **visual accent** within the page and does not require the same palette to be used elsewhere.
- Text and icons on the cards should be light/white with high contrast.
- Maintain the site's overall design language through consistent typography, border radius, spacing, and iconography.
- Do not add statistics simply to fill available space.
- Data sources appear discreetly below the statistics composition.
- The specific data points may vary between Area Pages according to what is relevant to each location.

#### Local Market Content

A short editorial-style content block appears in the right column to reinforce familiarity with the local market.

Examples:

**We live and work here.  
This is our market.**

The supporting copy should be specific to the individual area rather than generic company messaging.

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
