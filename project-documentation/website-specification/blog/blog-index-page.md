# Purpose

Present the blog as an editorial destination and direct readers to one featured article. The Hero gives the featured article visual priority while keeping its topic, title, summary, and destination immediately clear.

# Page Routing

- The Blog index uses `/blog`.
- The Hero links to the designated featured article at `/blog/{article-slug}`.

# Page Composition

- The Blog Hero begins the page content below the shared site Header.
- It uses the global Line System and the centered Content Container.
- The Hero contains the page heading followed by the Featured Article card.

# Blog Hero

## Purpose

Orient readers to the blog and make the featured article the primary entry point.

## Layout

- The Hero uses `Background Soft` behind the foreground content.
- On Desktop, the page heading appears above the Featured Article card. The card spans all 12 Grid columns and divides into equal text and media areas.
- The Featured Article card is a floating Surface with the global `Large` radius (`16px`) and `Floating` shadow (`0 8px 24px rgba(16, 17, 20, 0.08)`).
- On Tablet and Mobile, the card stacks its text area above its media area. The document and visual order remain topic, title, summary, action, then image.
- Use `3XL` (`96px`) top spacing before the page heading on Desktop and Tablet, and `XL` (`48px`) on Mobile. Use `XL` (`48px`) between the heading and card on Desktop and Tablet, and `L` (`32px`) on Mobile.

## Page Heading

### Content

- Display `Blog`.

### Component and Semantics

- Render the page heading as the page's only `h1`.

### Visual Design

- Use global `H3` typography and Brand Green for the editorial, secondary treatment established by the reference composition.

## Featured Article

### Content

- The Hero displays one designated featured article.
- Display the article's main topic, title, opening paragraph, and image.
- The article image must have supplied alternative text.
- Display the Text Link label `Read article`.

### Component and Semantics

- Render the article title as an `h2`.
- Render the title and `Read article` Text Link as links to the featured article route.
- Group the topic, title, summary, and action in the card's text area. The image belongs to the same article card.

### Visual Design

- The topic uses the global Label typography and Brand Green.
- The title uses global `H2` typography and Text Primary.
- The opening paragraph uses global Body typography and Text Secondary.
- Use the shared Text Link for `Read article`.
- The image fills the media area using `object-fit: cover` and preserves the card's right-side rounded corners on Desktop. On stacked layouts, it preserves the card's lower rounded corners.

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
