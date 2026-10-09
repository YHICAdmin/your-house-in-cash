# Purpose

Present all published articles associated with a blog topic and give readers a concise introduction to that subject.

# Page Routing

- Topic pages use `/blog/{topic-slug}`.
- A topic slug is derived from the topic name by lowercasing it and replacing non-alphanumeric runs with hyphens.
- A topic page exists only when its topic is the main topic of at least one published blog article. Unknown topic slugs return the site's not-found response.
- Article routes and topic routes share this route pattern. When a slug matches a published article, it resolves to that article; otherwise, it resolves to an existing topic page.

# Page Composition

- The page content flows in this order: Topic Introduction, Topic Articles.
- Use the global Background, centered Content Container, and Line System behind the foreground content.
- The Topic Introduction and Topic Articles use the same content-grid alignment.

# Topic Introduction

## Purpose

Identify the topic and establish the editorial context for the article collection.

## Layout

- Place the Topic Introduction at the beginning of the page below the shared site Header.
- On Desktop, place the introduction in Grid Columns `1–6`, leaving the remaining columns open.
- On Tablet and Mobile, use the full-width reading flow.
- Use `3XL` (`96px`) top spacing before the Topic Label on Desktop and Tablet, and `XL` (`48px`) on Mobile.

## Topic Label

### Content

- Display `Blog`.

### Component and Semantics

- Render the label as plain text above the Topic Title.

### Visual Design

- Use global Label typography and Brand Green.

### Spacing After

- Use `M` (`24px`) between the Topic Label and Topic Title.

## Topic Title

### Content

- Display the topic name supplied by the topic content.

### Component and Semantics

- Render the Topic Title as the page's only `h1`.

### Visual Design

- Use global Display / H1 typography and Text Primary.

### Spacing After

- Use `M` (`24px`) between the Topic Title and Topic Description.

## Topic Description

### Content

- Display the description supplied for the current topic in `content/blog/topics.md`.

### Component and Semantics

- Render the description as a paragraph.

### Visual Design

- Use global Body Large typography and Text Secondary.

### Dimensions and Alignment

- Keep the description within the Topic Introduction's Desktop Grid allocation.

### Spacing After

- Use `3XL` (`96px`) between the Topic Description and Topic Articles on Desktop and Tablet, and `2XL` (`64px`) on Mobile.

# Topic Articles

## Purpose

Give readers direct access to every published article whose main topic matches the current topic.

## Layout

- Render the matching articles in publication-date order, newest first.
- On Desktop, each Article Preview spans all 12 Grid columns. Its copy and action occupy Grid Columns `1–6`; its publication date and optional media occupy Grid Columns `7–12`.
- On Desktop, the publication date aligns to the top of the preview's right area. When present, media appears below the date with `L` (`32px`) spacing.
- Previews without an image retain the same copy and publication-date alignment, leaving the rest of the right area open.
- On Tablet and Mobile, stack the copy and action, followed by the publication date and optional media, in document order.
- Use `XL` (`48px`) between Article Previews on Desktop and Tablet, and `L` (`32px`) on Mobile.
- Use `3XL` (`96px`) bottom spacing after the final Article Preview on Desktop and Tablet, and `2XL` (`64px`) on Mobile.

## Article Preview

### Content

- Render one Article Preview for every matching article.
- Display the article's main topic, title, opening paragraph, publication date, and `Read article` Text Link.
- When the article supplies an image, display it with its supplied alternative text.
- The title and `Read article` link both use `/blog/{article-slug}`.

### Component and Semantics

- Render each preview as an `article`.
- Render the article title as an `h2`.
- Render the publication date in a `time` element with its supplied machine-readable date value.
- The preview content order is topic, title, opening paragraph, action, publication date, and optional image. On Desktop, the Grid places the copy and action in the left area and the publication date and image in the right area while preserving this document order.

### Visual Design

- Use global Label typography and Brand Green for the article topic.
- Use global H2 typography and Text Primary for the title.
- Use global Body typography and Text Secondary for the opening paragraph.
- Use global Body Small typography and Text Muted for the publication date.
- Use the shared Text Link treatment for `Read article`.
- When present, the image fills the media area using `object-fit: cover` and the global Medium radius (`12px`).

### Dimensions and Alignment

- The preview has no card Surface, padding, border, or shadow; its content aligns directly to the Topic Articles Grid.
- On Desktop, the copy and action occupy Grid Columns `1–6`; the date and media occupy Grid Columns `7–12`.
- Media uses a `3 / 2` aspect ratio at every Breakpoint.

### Spacing

- Use `M` (`24px`) between the topic and title.
- Use `L` (`32px`) between the title and opening paragraph.
- Use `L` (`32px`) between the opening paragraph and action.
- On Tablet and Mobile, use `M` (`24px`) between the action and publication date.
- On Desktop, use `L` (`32px`) between the date and media.

### Responsive Behavior

- On Tablet and Mobile, the image appears after the action and spans the preview's full width.
