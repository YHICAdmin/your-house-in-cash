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
* The media area occupies all 8 columns and appears below the content area.
* The media area appears below the content area with a 64px gap.

### Mobile

* Uses the global 4-column Grid.
* The content area occupies all 4 columns.
* The media area occupies all 4 columns and appears below the content area.
* The document order remains unchanged.
* The media area appears below the content area with a 48px gap.

### Background Gradient

* The Hero begins with a white background at the top and gradually transitions into a subtle light green toward the bottom.
* The gradient spans the full viewport width and is not constrained by the Grid or Line System.
* Its direction is primarily vertical, with a slight diagonal bias toward the media area.
* The green intensity may be slightly stronger behind the media area but should not appear as a separate color block.
* The Line System remains visible above the gradient.
* The gradient must not reduce text contrast or readability.
* Final color values, opacity, and gradient stops are determined during visual design or implementation.

## Section Label

* Uses the documented `Section Label` Component.
* Displays the name of the location represented by the Area Page.
* The content changes dynamically between Area Pages.
* Example: `Cleveland, Ohio`.
* Includes a Location icon before the text.
* Positioned above the Primary Headline.
* Non-interactive.
* Remains visually secondary to the Primary Headline.
* Spacing After: `16px` (`S`).

## Primary Headline

* Uses the global `H1` typography.
* Content template: `Sell Your House Fast in [City], Ohio`.
* The city name changes dynamically between Area Pages.
* Serves as the only `H1` on the page.
* Acts as the primary visual focal point of the Hero.
* Wraps naturally according to the available width; do not add manual line breaks.
* A decorative, hand-drawn-style stroke appears beneath the location name.
* The stroke uses Brand Green and follows the width of the location name.
* The stroke is decorative only, does not affect the text layout, and is hidden from assistive technologies.
* Spacing After: `24px` (`M`).

## Supporting Copy

* Appears directly below the Primary Headline.
* Uses the global supporting-copy typography.
* Content template: `We buy houses in [City] as-is, with no repairs, fees, or waiting for a traditional sale.`
* The city name changes dynamically between Area Pages.
* Remains visually secondary to the Primary Headline.
* Spacing After: `32px` (`L`).

## Button

* Uses the documented `Button` Component.
* Label: `Get My Cash Offer`.
* Appears below the Supporting Copy.
* Navigates to the seller and property information form flow.
* Renders with anchor semantics because it navigates to a separate route.
* Preserves the same content and behavior across all Breakpoints.
* Spacing After: `8px` (`XS`).

## Supporting Microcopy

* Content: `100% free. No obligation.`
* Appears directly below the `Button`.
* Uses the global Microcopy typography.
* Uses the global muted text color.
* Non-interactive.
* Remains visually secondary to the `Button`.
* Preserves the same content and behavior across all Breakpoints.
* Spacing After: `32px` (`L`).

## Benefits List

* Contains exactly three benefits:

  * House icon — `Sell As-Is`.
  * Dollar sign with a slash icon — `No Fees`.
  * Calendar with checkmark icon — `Choose Your Closing Date`.
* Appears below the Supporting Microcopy.
* Each benefit consists of a Line Icon followed by a short text label.
* Icons use the global Medium Icon size.
* The gap between the icon and label is `8px`.
* The gap between benefits is `24px`.
* Benefits are informational and non-interactive.
* On Desktop and Tablet, the benefits are displayed in a single horizontal row.
* On Mobile, the benefits are displayed vertically in the same document order.
* Individual benefits do not use Cards, backgrounds, borders, or shadows.

## Local Media Composition

* Occupies the media area defined in the Hero Layout.
* Contains three property/location images and one `Local Trust Card`.
* Uses an asymmetric, editorial composition.
* The images and `Local Trust Card` read as a single visual unit.
* The composition does not form a symmetrical Grid or a complete rectangular outer boundary.
* Remains visually secondary to the Primary Headline.
* On Desktop, the composition uses the maximum available overflow beyond the right outer System Line, up to 48px, while preserving the minimum Horizontal Page Padding.
* On Tablet and Mobile, it remains within the Content Container.
* Its internal arrangement and document order remain unchanged across Breakpoints.

## Local Images

* The `Local Media Composition` contains exactly three rectangular images with different dimensions and Aspect Ratios.
* Image content changes between Area Pages and features properties, streets, landmarks, or recognizable residential context from the represented location.
* All images use `object-fit: cover`, the global Medium Border Radius, and the global Subtle Shadow.
* A consistent `5px` gap is maintained where the images approach one another.
* The images do not overlap or form a symmetrical Grid or complete rectangular boundary.

### Left Image

* Wide, horizontal format.
* Positioned in the upper-left portion of the composition.
* Begins lower than the `Right Image`.

### Right Image

* Tall, vertical format.
* Positioned in the upper-right portion of the composition.
* Begins above the other images and acts as the vertical anchor.

### Bottom Image

* Wide, horizontal format.
* Positioned below and between the two upper images.
* Visually connects the `Left Image` and `Right Image`.
* Does not align with both outer edges of the images above it.

### Responsive Behavior

* The three images preserve the same asymmetric relationship across all Breakpoints.
* The composition scales according to the available width without changing the image order.
* The images remain within the viewport at all Breakpoints.

## Local Trust Card

* Appears as part of the `Local Media Composition`.
* Uses a temporary generic personal image until the final portrait is available.
* Displays the name `Noah Lubko`.
* Displays the title `Founder & Home Buyer`.
* Trust message: `I’ll personally review your property and guide you through the process—no pressure, no obligation.`
* Is smaller and visually secondary to the three local images.
* Reinforces direct, personal involvement in the seller’s experience.
* Uses the global Surface color, Medium Border Radius, and Floating Shadow.
* Does not contain a CTA.
* Does not cause the overall media composition to form a rigid rectangular block.
* Preserves the same content and role across all Area Pages.
* Remains integrated with the image composition across all Breakpoints.

### Situations — Situations We Can Help With

#### Purpose

Allow sellers to quickly identify the situation that best matches their circumstances and understand that we know how to handle it.

The section also provides entry points to dedicated content and SEO pages for each situation.

#### Structure

- Section Label: **We Help With**, with House icon.
- Headline: **What brings you here?**
- Supporting copy.
- List of situations.
- Dynamic content area for the selected situation, including:
  - Relevant image.
  - Short explanation.
  - Relevant benefits.
  - CTA linking to the dedicated situation page.
- **Contact Us** option for users who are unsure which situation applies to them.

#### Visual Direction

- The headline and supporting copy appear above the main content area rather than inside it.
- The Section Label is positioned above the primary headline.
- The main content area occupies a relatively limited portion of the available width, preserving generous whitespace.
- The internal composition uses an approximate **35% Situation Selector / 65% Content** split.
- Keep the visual language minimal. Do not present every situation as a large card.
- The active situation receives a subtle visual distinction.
- The image supports the selected situation but should not become the dominant visual element.

#### Behavior

- Selecting a situation on the left updates the dynamic content area on the right.
- Each situation can link to its own dedicated SEO page.
- **Foreclosure** may be used as the default selected situation.
- All primary situation options should remain visible without requiring a carousel.

#### Technical Specifications

No additional Situations-specific technical specifications are currently defined. Global typography, spacing, color, component, and layout rules apply unless explicitly overridden.

#### Responsive Behavior

No specific Tablet or Mobile composition is currently defined.

The section should preserve access to all primary situations and the relationship between the Situation Selector and the selected content. Exact stacking, ordering, and interaction behavior on smaller viewports remain to be defined.

#### Line System

- The outer System Lines bound the main content area.
- On Desktop, the **second System Line from the left** also serves as the divider between the Situation Selector and the dynamic content area.
- Content on both sides of the dividing line maintains appropriate padding.
- The headline and supporting copy are not required to follow this internal division.

### Reviews

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

### How It Works

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

### Local / Area Section

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

### FAQ

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

### Final CTA

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
