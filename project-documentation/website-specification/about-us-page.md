# Purpose

Introduce Noah as the person behind Your House in Cash and establish a clear, direct, homeowner-first approach to selling a Cleveland home.

# Page Routing

- Canonical route: `/about-us`
- The Hero primary CTA navigates to the Contact Us page at `/contact`.

# Hero

## Purpose

Create a personal first impression of Noah and make clear that Your House in Cash offers a straightforward conversation about a homeowner’s options.

## Content

### Primary Headline

- `Hi, I’m Noah. I make Cleveland home sales clearer.`
- Use H1 semantics and the global Display typography.

### Supporting Copy

- `My Cleveland real estate journey began in 2021. I believe homeowners deserve a straightforward conversation about their options—not pressure, confusing sales language, or a one-size-fits-all answer.`
- Use global Body Large typography.

### Primary CTA

- Label: `Talk Through Your Options`
- Destination: `/contact`
- Use the shared Button Component with its `conversion` variant.

## Layout

### Desktop

- Use a spacious two-column Hero.
- Use a `5 / 1 / 6` composition: the left five columns contain the Primary Headline, Supporting Copy, and Primary CTA in that order; the center column remains open; the right six columns contain the Founder Photograph.
- Align the top of the photograph with the top of the text column.
- Keep the text composition as the Hero’s primary focal point.
- Use `2XL` (`64px`) vertical padding.

### Mobile

- Stack the text composition first and the Founder Photograph second.
- Keep the photograph proportional and visually supporting the copy.
- Use `XL` (`48px`) vertical padding.

## Founder Photograph

### Purpose

Show Noah beside a residential home in a direct, personal photograph.

### Design Direction

- Use `/images/about-us/noah-founder-hero.png` in a full-width rounded `3:2` frame.
- Preserve the photo's wide house-and-street context and keep Noah clearly visible.

# Core Values

## Purpose

Show the principles Noah brings to each homeowner conversation through four concise, first-person statements.

## Layout

- Place this section immediately after the Hero on a white background, using the site's existing content width and section spacing.
- Begin directly with the four cards as the section's only visible content.
- Desktop: four equal-width cards in one row.
- Tablet: two equal-width columns and two rows.
- Mobile: one column with the cards stacked in the order below.
- Keep cards equal in height within each row. Align icons at the top and core values at the bottom of their cards.

## Value Cards

### Content

Each card presents an icon, paragraph, and emphasized core value, in that order:

1. **Clarity** — `I explain the offer and the next steps in plain language, so you understand what you’re considering.`
2. **Respect** — `I listen to your priorities and give you space to make the decision that feels right for you.`
3. **Honesty** — `I’m upfront about what I can offer, any limitations, and whether we’re a good fit.`
4. **Accountability** — `I take responsibility for my part of the process and communicate when something changes.`

### Component and Semantics

- Present the cards as a semantic list of four informational items.
- Use paragraph semantics for each statement. Render the core value as emphasized text at the bottom of its card.
- Use simple outline icons from the existing icon library: `MessageCircle` for Clarity, `Handshake` for Respect, `ShieldCheck` for Honesty, and `ClipboardCheck` for Accountability. Treat the icons as decorative for assistive technology.

### Visual Design

- Use white card interiors, the existing medium corner radius, and a subtle resting shadow. Match the reference's restrained card proportions and padding using the site's spacing tokens.
- Use the global Body typography for paragraphs. Style each bottom core value in brand green at a slightly heavier weight.
- Keep icon sizing and stroke treatment consistent across all four cards, using the existing brand green.
- Keep the card composition limited to the icon, paragraph, and core value.

### Dimensions and Alignment

- Give all cards within a row the same height and padding, with enough flexible space between the paragraph and the bottom core value to align the values consistently.
- Maintain the same icon position across cards in each row.

### Interaction

- On hover, animate a thin highlight around the card border in existing brand-green tones and slightly strengthen the shadow. Keep the animation confined to the border; the card interior stays white.
- Reserve the border's space in the resting state so hovering never changes card dimensions or moves content. Keep the default cursor because the cards are informational.
- For reduced-motion preferences, show the green border highlight statically, without the border animation.
