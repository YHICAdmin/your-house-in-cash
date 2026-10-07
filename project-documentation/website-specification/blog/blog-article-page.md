# Purpose

Define a consistent, reading-focused template for individual blog articles. The template presents the article's title, publication date, related topics, and full content clearly, then offers the site's established final CTA. The supplied Stripe article is a reference for whitespace, type hierarchy, and column proportions; the website's own visual design system governs the finished page.

# Page Routing

- Blog articles use `/blog/{article-slug}`. The article slug matches the content filename. The current article URL is `/blog/maple-heights-rental-market-snapshot-2026`.
- The topic slug is derived from the article's main topic by lowercasing it and replacing non-alphanumeric runs with hyphens. It is used for the topic-index link, not as part of the article URL.
- Blog links to `/blog` and the main-topic breadcrumb links to `/blog/{topic-slug}`. The topic index page is not part of this article-template implementation.

# Page Composition

## Purpose

Give readers a clear path from the article title through its content and final CTA.

## Layout

- The page content flows in this order: Breadcrumbs, Article Header, Reading Layout, Final CTA. The article template has no FAQ Section.
- Use global `Background` (`#FFFFFF`), the centered Content Container, global Section spacing, and the Line System behind the foreground content. Foreground reading content remains visually open rather than enclosed in Cards.
- On Desktop, the Article Header and Reading Layout share a `3–9` Grid composition. The left area occupies Columns `1–3`; the right area begins at Column `4` and occupies Columns `4–12`. The Article Header occupies the right area, leaving the left area open above the Topics Covered card. The Article Body begins at the same right-area edge as the title and publication date.
- Constrain the article text column within the right area to a comfortable measure of approximately `65–75ch`. Keep its left edge aligned with the title and date. The title may wrap naturally within this same reading area.
- On Tablet and Mobile, use one column across all available Grid columns. The Article Header, Topics Covered, and Article Body follow each other in that order and share the same left edge.
- The Final CTA follows the complete Reading Layout as a separate full-width Section using the Content Container, rather than occupying the article column.

# Breadcrumbs

## Purpose

Show the article's main topic and provide paths back to the Blog and its topic index.

## Layout

- Place Breadcrumbs within the Content Container above the Article Header. On Desktop, start Breadcrumbs at Grid Column `4`, aligned with the Article Title, Publication Date, and Article Body. On Tablet and Mobile, keep Breadcrumbs at the full-width content edge.
- Use `L` (`32px`) of space below the Header before Breadcrumbs, then `2XL` (`64px`) between Breadcrumbs and the Article Header on Desktop and Tablet. On Mobile, use `XL` (`48px`) between Breadcrumbs and the Article Header.

## Breadcrumb Trail

### Content

- Display `Blog → {Main topic}` in that order. Do not repeat the article title in the breadcrumb; it appears as the page's `h1`.

### Component and Semantics

- Use a breadcrumb navigation landmark with an ordered list. Blog and the main topic are links. The breadcrumb has no current-page item because the article title is omitted.
- Use the documented Text Link treatment for both links. The arrow is a separator, not part of either link label.

### Visual Design

- Use global `Body Small` typography. Keep linked items recognizable through the shared Text Link states; use `Text Secondary` for the separator.

### Dimensions and Alignment

- Allow long topic names to wrap within the available width without clipping or horizontal page overflow.

# Article Header

## Purpose

Identify the article and establish when it was published before the reader begins the body.

## Layout

- Place the Article Header after Breadcrumbs and before the Reading Layout.
- On Desktop, align it to the right Grid area used by the Article Body. On Tablet and Mobile, align it to the full-width reading flow.
- Keep the header limited to the article title and publication date. It has no author portrait, social links, or decorative hero image.

## Article Title

### Content

- Use the article's title verbatim.

### Component and Semantics

- Render the title as the page's only `h1`.

### Visual Design

- Use global `Display / H1` typography and `Text Primary` color. Let the title wrap naturally, without manual line breaks.

### Spacing After

- `S` (`16px`) separates the title from the Publication Date at every Breakpoint.

## Publication Date

### Content

- Display the article's actual publication date, supplied with the article content.

### Component and Semantics

- Use a `time` element with a machine-readable date value.

### Visual Design

- Use global `Body Small` typography and `Text Secondary` color.

### Spacing After

- `XL` (`48px`) separates the date from the Reading Layout on Desktop. On Tablet and Mobile, it separates the date from Topics Covered.

# Reading Layout

## Purpose

Show the article's subject and related topics while keeping the article itself the primary focus.

## Layout

- On Desktop, place Topics Covered in Grid Columns `1–3` and Article Body in Columns `4–12`. Align the top of Topics Covered with the top of Article Body.
- On Tablet and Mobile, stack Topics Covered above Article Body in one column. Use `L` (`32px`) between the complete Topics Covered element and Article Body.
- The page uses normal document scrolling at every Breakpoint.

## Topics Covered

### Content

- Display the article's main topic prominently and centered in the card's upper area.
- Beneath it, display an `Also covered` label followed by the article's explicitly supplied related topics in their supplied order. These topics are metadata, not copies of the Article Body's `h2` headings.

### Component and Semantics

- Use an `aside` labelled as article topics. Present the main topic as a heading and the related topics as a semantic list of plain text.
- No topic is a link or a jump target. Do not apply current-section state, sticky positioning, or an expandable control.

### Visual Design

- Follow the supplied related-topics reference's visual hierarchy: a prominent main topic above a quieter `Also covered` label and list, separated by a subtle divider. Use the website's Background Soft, Border, typography, spacing, and radius tokens rather than the reference's colors or branding.
- Use global `Body Small` (`14px`) typography for the `Also covered` label and its topic items.

### Spacing

- Use the site's spacing scale for card padding and list-item separation. Keep the full list visible at every Breakpoint.

## Article Body

### Content

- Render the article's supplied content in document order, preserving its wording, links, lists, quotations, images, captions, and attributions where present.

### Component and Semantics

- Use an `article` element. The page title supplies the single `h1`; major article sections use `h2`, with `h3` for subsections.
- Preserve native semantics for paragraphs, lists, quotations, links, figures, and other supplied content. Use the shared Content Table for article comparison tables when present.

### Visual Design

- Use global `Body Large` typography for the opening paragraph or opening group of paragraphs and global `Body` typography for subsequent prose and list items. Use `Text Primary` for reading text.
- Use global `H3` typography for article `h2` headings and global `H4` typography for article `h3` headings, following the existing Situation Article hierarchy.
- Use the shared Text Link treatment for links. Style existing quotations, images, captions, and tables consistently with the site's global typography, color, media, and component rules. Paragraphs remain directly on the page background.

### Dimensions and Alignment

- Keep body text within the `65–75ch` reading measure on Desktop. On Tablet and Mobile, use the available reading width within the Content Container.
- Display existing images within the article flow at a size that preserves their proportions and does not create horizontal page overflow. Preserve their supplied alternative text, captions, and attribution.
- For the current single-image article format, render the supplied image after the opening paragraphs and before the first `h2`, with the supplied photographer credit beneath it in global `Caption` typography.

### Spacing

- `XL` (`48px`) separates the opening text from the first `h2` and adjacent major `h2` sections. `L` (`32px`) precedes `h3` headings within a section.
- `S` (`16px`) separates a heading from its content and consecutive paragraphs, lists, quotations, or images. `XS` (`8px`) separates list items.

# Final CTA

## Purpose

Provide the established next step after the reader has completed the article.

## Layout

- Reuse the [shared Final CTA](../../shared-sections.md#final-cta) after the Reading Layout, across its standard full Content Container composition on all Breakpoints.
- The article supplies the CTA's Section Label, headline, supporting copy, reassurance text, and two supporting benefits under the shared component contract. The primary button retains the established `/get-cash-offer` destination and shared `conversion` styling.
- The CTA content should relate to the article's subject and provide a relevant next step without interrupting the reading flow.
