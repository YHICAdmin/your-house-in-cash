# Purpose

Create a consistent page template for content addressing different home seller situations, such as **Foreclosure**, **Inherited Property**, or **Landlords**.

The goal is to provide users with information relevant to their specific situation, build trust, and gradually guide them toward the offer process.

# Content Loading

- Each situation page uses the root-level URL `/{slug}`, such as `/foreclosure`, `/inherited-property`, or `/landlords`.
- Each situation loads its Hero, Article, FAQ, and Final CTA content from `content/situations/{slug}.md`.
- Landlords uses `/landlords` and `content/situations/landlords.md`.
- Missing or empty Article, FAQ, and Final CTA sections are omitted independently.
- If the content file or a Hero text field is missing or empty, the corresponding existing Hero text from the situation data is used. The page remains available with its shared Header and Footer.

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

- **Foreclosure:** [Primary Headline](content/situations/foreclosure.md#primary-headline) under `Hero`.
- **Inherited Property:** [Primary Headline](content/situations/inherited-property.md#primary-headline) under `Hero`.
- **Landlords:** [Primary Headline](content/situations/landlords.md#primary-headline) under `Hero`.
- **Major Repairs:** [Primary Headline](content/situations/major-repairs.md#primary-headline) under `Hero`.
- **Vacant Property:** [Primary Headline](content/situations/vacant-property.md#primary-headline) under `Hero`.
- **Problem Tenants:** [Primary Headline](content/situations/problem-tenants.md#primary-headline) under `Hero`.
- **Relocation:** [Primary Headline](content/situations/relocation.md#primary-headline) under `Hero`.
- **Divorce:** [Primary Headline](content/situations/divorce.md#primary-headline) under `Hero`.
- **Behind on Property Taxes:** [Primary Headline](content/situations/behind-on-property-taxes.md#primary-headline) under `Hero`.
- **Code Violations:** [Primary Headline](content/situations/code-violations.md#primary-headline) under `Hero`.

### Component and Semantics

- Uses `H1` semantics.

### Visual Design

- The headline is the dominant element in the section.
- Uses the global `H2` typography at all Breakpoints.

### Spacing After

- `M` (`24px`) separates the Primary Headline from Supporting Copy at all Breakpoints.

## Supporting Copy

### Content

- **Foreclosure:** [Supporting Copy](content/situations/foreclosure.md#supporting-copy) under `Hero`.
- **Inherited Property:** [Supporting Copy](content/situations/inherited-property.md#supporting-copy) under `Hero`.
- **Landlords:** [Supporting Copy](content/situations/landlords.md#supporting-copy) under `Hero`.
- **Major Repairs:** [Supporting Copy](content/situations/major-repairs.md#supporting-copy) under `Hero`.
- **Vacant Property:** [Supporting Copy](content/situations/vacant-property.md#supporting-copy) under `Hero`.
- **Problem Tenants:** [Supporting Copy](content/situations/problem-tenants.md#supporting-copy) under `Hero`.
- **Relocation:** [Supporting Copy](content/situations/relocation.md#supporting-copy) under `Hero`.
- **Divorce:** [Supporting Copy](content/situations/divorce.md#supporting-copy) under `Hero`.
- **Behind on Property Taxes:** [Supporting Copy](content/situations/behind-on-property-taxes.md#supporting-copy) under `Hero`.
- **Code Violations:** [Supporting Copy](content/situations/code-violations.md#supporting-copy) under `Hero`.

### Component and Semantics

- Uses paragraph semantics.

### Visual Design

- Uses the global `Body Large` typography and `Text Secondary` color at all Breakpoints.

### Spacing After

- On Mobile, `L` (`32px`) separates Supporting Copy from the Primary Image.

## Primary Image

### Content

- **Foreclosure:** [foreclosure-hero.jpg](../../public/images/situations/foreclosure-hero.jpg).
- **Inherited Property:** [inherited-property-hero.jpg](../../public/images/situations/inherited-property-hero.jpg).
- **Landlords:** [landlords-hero.jpg](../../public/images/situations/landlords-hero.jpg).
- **Major Repairs:** [major-repairs-hero.jpg](../../public/images/situations/major-repairs-hero.jpg).
- **Vacant Property:** [vacant-property-hero.jpg](../../public/images/situations/vacant-property-hero.jpg).
- **Problem Tenants:** [problem-tenants-hero.jpg](../../public/images/situations/problem-tenants-hero.jpg).
- **Relocation:** [relocation-hero.jpg](../../public/images/situations/relocation-hero.jpg).
- **Divorce:** [divorce-hero.jpg](../../public/images/situations/divorce-hero.jpg).
- **Behind on Property Taxes:** [behind-on-property-taxes-hero.jpg](../../public/images/situations/behind-on-property-taxes-hero.jpg).
- **Code Violations:** [code-violations-hero.jpg](../../public/images/situations/code-violations-hero.jpg).

### Visual Design

- Uses the global `Medium` Radius (`12px`).
- One authentic image relevant to the situation.

### Dimensions and Alignment

- Fills its allocated content width with a `3:2` Aspect Ratio at all Breakpoints.

### Accessibility

- **Foreclosure:** Alternative text: `Wooden model house and keys resting on a document`.
- **Inherited Property:** Alternative text: `Bedroom with a four-poster bed, floral bedding, and a rocking chair`.
- **Landlords:** Alternative text: `Lease agreement with a pen and key on a dark table`.
- **Major Repairs:** Alternative text: `Room under renovation with exposed masonry, a concrete mixer, and buckets`.
- **Vacant Property:** Alternative text: `Empty room with a hardwood floor and a window, viewed through an open doorway`.
- **Problem Tenants:** Alternative text: `Brass keys hanging from a ring against a wooden surface`.
- **Relocation:** Alternative text: `Moving boxes beside covered furniture in a bright room`.
- **Divorce:** Alternative text: `Two empty wooden chairs beside a small table with a vase`.
- **Behind on Property Taxes:** Alternative text: `Hands reviewing documents with a pen and calculator at a desk`.
- **Code Violations:** Alternative text: `Person wearing a hard hat checking an unfinished wall with a spirit level`.

# Situation Content

## Purpose

Present in-depth, situation-specific content in a clear and readable format, while allowing users to navigate quickly between the key questions and topics on the page.

## Layout

- On Desktop, uses a `3–9` composition: the Sidebar occupies Grid Columns `1–3`, and the Article occupies Grid Columns `4–12`.
- The section uses a white background.

### Responsive Behavior

- On Tablet and Mobile, the Sidebar appears above the Article in a single vertical flow.
- On Tablet, both elements occupy Grid Columns `1–8`; on Mobile, both occupy Grid Columns `1–4`.

### Line System

- On Desktop, the left outer System Line serves as a navigation indicator, to the left of the Sidebar labels. At the active item, the relevant portion of the line changes to Brand Green.

## Sidebar

### Content

- Navigation entries use the `##` section headings within the content file's `# Article` portion verbatim and in document order. The heading text is maintained in the article content file.

### Component and Semantics

- Uses a navigation landmark containing a list of anchor links.

### Visual Design

- Minimal and text-based.
- Entries use global `Body Small` typography with font weight `600` and `Text Primary`. The active entry uses `Brand Green` across all Breakpoints.
- Long entry labels wrap within the Sidebar width.

### Spacing

- `S` (`16px`) separates navigation entries at all Breakpoints.

### Spacing After

- On Tablet and Mobile, `L` (`32px`) separates the Sidebar from the Article.

### Interaction

- Each navigation item acts as an anchor to its corresponding question / topic in the Article.
- The active item follows the user's current position within the page.

- On Desktop, the Sidebar remains sticky within the Situation Content area when its full height fits between the Header and the bottom of the viewport, allowing `M` (`24px`) below the Header and `M` (`24px`) above the viewport bottom. Its sticky top offset is the Header height plus `M` (`24px`).
- When the Sidebar exceeds that available height, it scrolls with the page in normal document flow so every navigation entry remains reachable. Reevaluate the fit when the viewport or Sidebar dimensions change.

### Responsive Behavior

- On Tablet and Mobile, navigation is presented as a visible table-of-contents list. The Sidebar scrolls with the page in normal document flow.

## Article

### Content

- **Inherited Property:** [Article content](content/situations/inherited-property.md#article), comprising the content beneath `# Article` through the next top-level heading, with its associated source references. The `# Article` heading is a content-group identifier; rendering begins with its opening paragraphs.
- **Foreclosure:** [Article content](content/situations/foreclosure.md#article), using the same content-group structure and associated source references.
- **Landlords:** [Article content](content/situations/landlords.md#article), using the same content-group structure and associated source references.
- Render the elements in that Article portion in their document order. The `# FAQ` portion supplies the separate FAQ Section.

### Component and Semantics

- Uses an `article` element. Within the content file's `# Article` portion, `##` headings render as `h2`, and `###` headings render as `h3`, preserving the article hierarchy below the Hero's `h1`.
- Paragraphs, lists, quotations, emphasis, and source links retain their corresponding native HTML semantics.
- Markdown comparison tables use [Content Table](../component-library.md#content-table), with data from the Article content and the preceding topic heading as their label.

### Visual Design

- Main article headings use global `H3` typography; subsection headings use global `H4` typography. Their content follows directly below.
- Opening paragraphs use global `Body Large`; subsequent paragraphs, list items, and quotations use global `Body`. Text uses `Text Primary`.

### Dimensions and Alignment

- Images and media may extend to the right outer System Line and terminate directly on it.

### Spacing

- At all Breakpoints, `XL` (`48px`) separates major article sections, including the opening text from the first section; `L` (`32px`) precedes subsection headings within a section.
- `S` (`16px`) separates headings from their content and consecutive prose blocks, lists, or quotations. `XS` (`8px`) separates list items.

# FAQ

## Purpose

Answer practical, situation-specific questions that complement the Article and help the reader understand their remaining options.

## Layout

- On Desktop, the left flow contains Section Intro followed by Contact Us Link across Grid Columns `1–5`, Column `6` provides composition whitespace, and FAQ Accordion occupies Grid Columns `7–12`.
- On Tablet, the left flow occupies Grid Columns `1–4`, and FAQ Accordion occupies Grid Columns `5–8`.
- On Desktop and Tablet, the complete left flow and FAQ Accordion are vertically centered relative to each other. This alignment is maintained as answers open and close.
- On Mobile, Section Intro, Contact Us Link, and FAQ Accordion form one full-width flow in that order.
- On Desktop and Tablet, the center System Line serves as the boundary at which FAQ Accordion begins.
- Uses the global `Background Soft` (`#F7F9F7`) across all Breakpoints.

## Section Intro

### Content

- **Inherited Property:** [FAQ Section Intro](content/situations/inherited-property.md#section-intro), containing Section Label, Primary Headline, and Supporting Copy in that order.
- **Foreclosure:** [FAQ Section Intro](content/situations/foreclosure.md#section-intro), containing Section Label, Primary Headline, and Supporting Copy in that order.

### Component and Semantics

- The Section Label uses the documented `Section Label` Component in its text-only configuration.
- The Primary Headline uses `H2` semantics.
- The Supporting Copy uses paragraph semantics.

### Visual Design

- The Primary Headline uses global `H2` typography.
- The Supporting Copy uses global `Body Large` typography.

### Spacing

- `S` (`16px`) separates the Section Label from the Primary Headline across all Breakpoints.
- `M` (`24px`) separates the Primary Headline from the Supporting Copy across all Breakpoints.

### Spacing After

- `M` (`24px`) separates the complete Section Intro from Contact Us Link across all Breakpoints.

## Contact Us Link

### Content

- Decorative `MessageCircle` icon to the left of a compact text block containing, in order:
  - **Still have a question?**
  - **Can’t find what you’re looking for?**
  - **Contact us** with a trailing right arrow.

### Component and Semantics

- Uses the documented `Icon Container` in its Default size. The icon is decorative.
- The title uses paragraph semantics with strong emphasis; the supporting copy uses paragraph semantics.
- The action uses the documented `Text Link` Component with link semantics and a decorative `16px` `ArrowRight` icon.

### Visual Design

- The icon and text form an unenclosed composition directly within the FAQ's left flow.
- The title uses `Body` typography at weight `600`; supporting copy uses `Body Small` and `Text Secondary`.
- The Text Link uses `Brand Green Dark` as a local default color override and inherits its documented active state.

### Dimensions and Alignment

- The icon and text block remain horizontally arranged and vertically centered across Breakpoints. The text block wraps naturally.

### Spacing

- `S` (`16px`) separates the icon and text block across all Breakpoints.
- The text block stacks its three lines with `XS` (`8px`) gaps.

### Spacing After

- On Mobile, `L` (`32px`) separates Contact Us Link from FAQ Accordion.

### Interaction

- Activating the link navigates to `/contact`.

## FAQ Accordion

### Content

- **Inherited Property:** [Questions and Answers](content/situations/inherited-property.md#questions-and-answers) under `FAQ`.
- **Foreclosure:** [Questions and Answers](content/situations/foreclosure.md#questions-and-answers) under `FAQ`.
- Within `FAQ → Questions and Answers`, each `###` heading supplies an Item's Question, and the following answer content supplies its Answer, in document order. Source references belong to their respective answers.

### Component and Semantics

- Uses the shared [Accordion](../component-library.md#accordion) Component.

# Final CTA

- Uses the [shared Final CTA](shared-sections.md#final-cta).

## Content

- **Inherited Property:** [Final CTA content](content/situations/inherited-property.md#final-cta), including the Section Label, Primary Headline, Supporting Copy, Primary CTA label and destination, Reassurance Row, and two Supporting Benefits in document order.
- **Foreclosure:** [Final CTA content](content/situations/foreclosure.md#final-cta), including the Section Label, Primary Headline, Supporting Copy, Primary CTA label and destination, Reassurance Row, and two Supporting Benefits in document order.

# Footer

- Uses the [shared Footer](shared-sections.md#footer).

## Visual Design

- Uses the global `Background Soft` (`#F7F9F7`) across all Breakpoints, matching the Hero's base background color.
