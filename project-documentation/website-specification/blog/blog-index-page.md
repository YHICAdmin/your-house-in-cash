# Purpose

Present the blog as an editorial destination and direct readers to one featured article. The Hero gives the featured article visual priority while keeping its topic, title, summary, and destination immediately clear.

# Page Routing

- The Blog index uses `/blog`.
- The Hero links to the designated featured article at `/blog/{article-slug}`.

# Page Composition

- The Blog Hero begins the page content below the shared site Header.
- It uses the global Line System and the centered Content Container.
- The Hero contains Blog Navigation followed by the Featured Article card.

# Blog Hero

## Purpose

Orient readers to the blog and make the featured article the primary entry point.

## Layout

- The Hero uses `Background Soft` behind the foreground content.
- Use the repository-owned Blog ribbon SVG as a decorative background behind the Hero at 40% opacity. It remains below the global Line System, foreground content, and Featured Article card. The ribbon drifts slowly across the Hero; it is static when reduced motion is preferred.
- On Desktop, Blog Navigation appears above the Featured Article card, aligned to the right edge of the Content Container. The card spans all 12 Grid columns and divides into equal text and media areas.
- The card's outer edges align with the outer System Lines.
- The Featured Article card is a floating Surface with the global `Large` radius (`16px`) and `Floating` shadow (`0 8px 24px rgba(16, 17, 20, 0.08)`).
- On Tablet and Mobile, the card stacks its text area above its media area. The document and visual order remain topic, title, summary, action, then image.
- Use `3XL` (`96px`) top spacing before Blog Navigation on Desktop and Tablet, and `XL` (`48px`) on Mobile. Use `XL` (`48px`) between navigation and card on Desktop and Tablet, and `L` (`32px`) on Mobile.

## Blog Navigation

### Purpose

Give readers a direct way to find and navigate to a topic page. Do not display a visible `Blog` page heading in the Hero.

### Layout

- Place Search Topics to the left of the topic dropdown.
- On Desktop and Tablet, align the control group to the right. On Mobile, stack the topic dropdown above Search Topics at full width.

### Search Topics

- Search matches published topic names.
- Start searching after one entered character. Show at most five matching topic suggestions.
- Selecting a suggestion navigates to the matching `/blog/{topic-slug}` page.
- The input uses the shared Text Field visual treatment, with a visible search icon and the placeholder `Search topics`. Its accessible label is `Search topics`.

### Topic Dropdown

- Render a native select with the accessible label `Browse topics`.
- Its initial option is `All topics`, followed by every published topic in alphabetical order.
- Selecting a topic navigates to `/blog/{topic-slug}`. `All topics` represents the Blog index and does not navigate.
- The select uses the shared Text Field visual treatment.

## Featured Article

### Content

- The Hero displays **How Much Money Will You Net When You Sell Your House?** as the designated featured article.
- Its route is `/blog/how-much-money-will-you-net-when-you-sell-your-house`.
- Display the article's main topic, title, opening paragraph, and image.
- Link the article's main topic to `/blog/{topic-slug}`.
- The article image must have supplied alternative text.
- Display the Text Link label `Read article`.

### Component and Semantics

- Render the article title as an `h2`.
- Render the topic as a link to its topic route. Render the title and `Read article` Text Link as links to the featured article route.
- Group the topic, title, summary, and action in the card's text area. The image belongs to the same article card.

### Visual Design

- The topic uses global Body typography, 600 weight, and Brand Green.
- The title uses global `H2` typography and Text Primary.
- The opening paragraph uses global Body typography and Text Secondary.
- Use the shared Text Link for `Read article`.
- The media area uses `S` (`16px`) padding. The image fills the remaining media area using `object-fit: cover` and has the global `Medium` radius (`12px`).

### Dimensions and Alignment

- On Desktop, the text area occupies Grid Columns `1–6` and the media area occupies Grid Columns `7–12` within the card.
- The text area uses `XL` (`48px`) padding on Desktop and Tablet and `L` (`32px`) on Mobile.
- On Desktop, the media area matches the full height of the card.

### Spacing

- Use `M` (`24px`) between the topic and title.
- Use `L` (`32px`) between the title and summary.
- Use `L` (`32px`) between the summary and action.

### Responsive Behavior

- On Tablet and Mobile, stack the text and media areas. The image appears after the action and spans the card's full width.
