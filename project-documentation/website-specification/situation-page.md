# Purpose

Create a consistent page template for content addressing different home seller situations, such as **Foreclosure**, **Inherited Property**, or **Tired Landlord**.

The goal is to provide users with information relevant to their specific situation, build trust, and gradually guide them toward the offer process.

# Hero

## Purpose

Immediately confirm that the user has reached a page relevant to their specific situation, establish relevance and trust, and encourage them to continue reading.

## Layout

- Simple, spacious two-column composition.
- **Left:** Primary Headline followed by Supporting Copy.
- **Right:** One Primary Image.
- On Desktop and Tablet, the text block and Primary Image are vertically centered relative to each other.
- On Desktop, uses a `5–2–5` composition: the text occupies Grid Columns `1–5`, Columns `6–7` remain empty, and the Primary Image occupies Columns `8–12`.

### Responsive Behavior

- On Tablet, uses a `4–4` composition: the text occupies Grid Columns `1–4`, and the Primary Image occupies Columns `5–8`.
- On Mobile, the text followed by the Primary Image forms one vertical flow, each occupying Grid Columns `1–4`. The text retains the Primary Headline and Supporting Copy order.

### Line System

- The outer System Lines bound the content area using the globally defined content padding.
- The center System Line may serve as the division between the text area on the left and the image on the right.
- The remaining internal System Lines stay visible but do not dictate the composition.

### Background Treatment

- Uses the global `Background Soft` (`#F7F9F7`) as its base, spanning the full viewport width.
- The lower edge slopes downward from right to left: higher at the right viewport edge and lower at the left viewport edge, revealing the following section's global `Background` (`#FFFFFF`) below it.
- The lower-edge angle is `3deg` steeper than the baseline slope defined by an endpoint height difference of `3XL` (`96px`) on Desktop, `2XL` (`64px`) on Tablet, and `L` (`32px`) on Mobile. At viewport width `W`, the endpoint height difference is `W × tan(atan(baseline height / W) + 3deg)`. The left endpoint stays fixed while the right endpoint moves upward.
- Two simple, elongated rectangular accents begin at the lower diagonal boundary of the Hero background and extend downward into the white area, partially overlapping, with their long edges parallel to the background's lower diagonal edge at every viewport width. Their rotation derives from the same responsive slope angle as the background. Position the group relative to the left outer System Line, with two thirds of its width extending outward to the left of that line and one third extending inward to the right. One uses `Brand Green` (`#4A8755`); the other uses `Brand Green Light` (`#EAF3EC`) as mint.
- Anchor the group's upper edge to the diagonal at the left outer System Line. Preserve true rectangular geometry and allow the accents to extend below the Hero's box with their edges and corners intact.
- The accent group has a minimum width of `240px` on Mobile and Tablet, increasing to `288px` on Desktop. Its height is `XL` (`48px`) across all Breakpoints. Each rectangle occupies `80%` of the group width and has a height of `L` (`32px`), preserving the partial overlap.
- The treatment is restrained and editorial. The accents occupy the lower whitespace, keeping the text and Primary Image visually dominant and unobstructed.
- The background and accents are decorative only, containing no text, icons, or images. They inherit the global decorative-content and Line System layering requirements and do not affect content layout or interaction.
- On Desktop, the diagonal and accents have their clearest presence. On Tablet and Mobile, reduce the accents' footprint while retaining their diagonal-boundary anchor and one-third extension inward from the left outer System Line. On Mobile, use a shallower diagonal and keep the accents below the stacked content, clipping decorative overflow at the viewport edges.

## Primary Headline

### Content

- **Inherited Property:** `What to know about inheriting a house`.

### Component and Semantics

- Uses `H1` semantics.

### Visual Design

- The headline is the dominant element in the section.
- Uses the global `H2` typography at all Breakpoints.

### Spacing After

- `M` (`24px`) separates the Primary Headline from Supporting Copy at all Breakpoints.

## Supporting Copy

### Content

- **Inherited Property:** `Inheriting a house can bring questions about the property, its upkeep, and what comes next. Explore the key considerations and your options for keeping, renting, or selling it.`

### Component and Semantics

- Uses paragraph semantics.

### Visual Design

- Uses the global `Body Large` typography and `Text Secondary` color at all Breakpoints.

### Spacing After

- On Mobile, `L` (`32px`) separates Supporting Copy from the Primary Image.

## Primary Image

### Content

- **Inherited Property:** [inherited-property-hero.jpg](assets/situations/inherited-property-hero.jpg).

### Visual Design

- Uses the global `Medium` Radius (`12px`).
- One authentic image relevant to the situation.

### Dimensions and Alignment

- Fills its allocated content width with a `3:2` Aspect Ratio at all Breakpoints.

### Accessibility

- **Inherited Property:** Alternative text: `Bedroom with a four-poster bed, floral bedding, and a rocking chair`.

# Situation Content

## Purpose

Present in-depth, situation-specific content in a clear and readable format, while allowing users to navigate quickly between the key questions and topics on the page.

## Content

- Sidebar containing a list of questions / topics covered on the page.
- Main content area containing a continuous sequence of questions and answers.
- The number, order, and wording of questions are determined during the content-writing stage for each Situation Page.
- Answers may include paragraphs, lists, images, callouts, and other relevant elements as needed.
- A small contact CTA appears at the bottom of the Sidebar.
- The main content area does not use a fixed Section structure.

## Structure

- The section is divided into a narrow Sidebar and a wider main content area.
- The Sidebar contains the page navigation and contact CTA.
- The main content area contains the complete sequence of questions and answers.
- Content elements such as images and callouts are incorporated only when justified by the content.

## Visual Direction

- The section uses a white background.
- The Sidebar is minimal and text-based, without circles or additional navigation indicators.
- The active Sidebar item receives subtle emphasis using the Brand color.
- Question headings are large and prominent, with their answers positioned directly below.
- Do not use divider lines between questions and answers.
- Maintain generous whitespace between questions.
- Images and additional visual elements are included only when the content justifies them.

## Behavior

- Each Sidebar item acts as an anchor to its corresponding question / topic.
- On Desktop, the Sidebar remains sticky while the user scrolls through the Situation Content area.
- The active Sidebar item receives subtle visual emphasis based on the user's current position within the page.

## Technical Specifications

No additional Situation Content-specific technical specifications are currently defined. Global typography, spacing, component, color, and layout rules apply unless explicitly overridden below.

## Responsive Behavior

No specific Tablet or Mobile behavior is currently defined for the Sidebar navigation.

The Desktop sticky Sidebar behavior applies only to Desktop. The exact navigation treatment, content ordering, and Sidebar behavior for Tablet and Mobile remain to be defined.

## Line System

- The responsive Line System remains visible throughout the section.
- The left internal System Line integrates with the Sidebar and serves as a navigation indicator. At the active item, the relevant portion of the line changes to Brand Green.
- The right outer System Line bounds the main content area.
- Text content maintains the globally defined padding from the right outer System Line.
- Images and media may extend to the right outer System Line and terminate directly on it.

# Final CTA

## Purpose

Conclude the Situation Page with a clear conversion point after the user has received the information relevant to their situation.

## Content

- Short headline tailored to the specific situation.
- Short supporting copy.
- Primary CTA: **Get My Cash Offer**.
- Short microcopy below the CTA when appropriate.

## Structure

- Headline and supporting copy.
- Primary CTA.
- Optional microcopy positioned below the CTA.
- Content is presented as a single focused composition.

## Visual Direction

- Keep the section simple and spacious with a strong visual hierarchy.
- Create clear visual separation from the preceding Q&A content.
- Do not add unnecessary cards or supporting elements.
- The section may use a different background treatment in accordance with the **Background System**.

## Behavior

- The Primary CTA leads to the offer process.
- Content may change according to the specific situation of the page.

## Technical Specifications

No additional Situation Final CTA-specific technical specifications are currently defined. Global typography, spacing, component, color, and layout rules apply unless explicitly overridden.

## Responsive Behavior

No specific Tablet or Mobile composition is currently defined.

The hierarchy between the headline, supporting copy, CTA, and optional microcopy should be preserved across breakpoints.

## Line System

- Content remains within the two outer System Lines using the globally defined content padding.
- The internal System Lines remain visible but are not required to dictate element alignment.
