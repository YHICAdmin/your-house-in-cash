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
- Use the global Line System.
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

- Place this section immediately after the Hero on a white background, using the site's existing content width, section spacing, and global Line System.
- Begin directly with the four cards as the section's only visible content.
- Desktop: four equal-width cards in one row.
- Tablet: two equal-width columns and two rows.
- Mobile: one column with the cards stacked in the order below.
- Keep cards equal in height within each row. Align icons at the top and core values at the bottom of their cards.

## Value Cards

### Content

Each card presents an icon, paragraph, and emphasized core value, in that order:

1. **Clarity** — `Offers and next steps are explained in plain language, so you understand what you’re considering.`
2. **Respect** — `Your priorities guide the conversation, with space to make the decision that feels right for you.`
3. **Honesty** — `The offer, its limitations, and whether a direct sale fits are discussed upfront.`
4. **Accountability** — `Commitments are carried through, and changes are communicated clearly when they arise.`

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

# What You Can Expect From Me

## Purpose

Show how Noah follows through during a potential sale: clear expectations, a complete explanation before a decision, practical coordination, direct communication, and steady progress.

## Layout

- Place this section immediately after Core Values. Use `Background Neutral` (`#F8F8F8`) to distinguish it gently from the preceding white section, with the global content width, section spacing, and global Line System.
- Desktop: use a `5 / 1 / 6` Grid composition. Place the Heading and Commitment Paragraphs in the left five columns, leave the center column open, and place the Supporting Photograph in the right six columns. Visually center the text group against the photograph.
- Place the Benefit Cards below both columns, separated from the upper composition by `2XL` (`64px`). Display two equal-width cards side by side across the content width.
- Tablet: retain two balanced four-column areas for the upper composition and two equal-width Benefit Cards below it. Align the text group and photograph at their top edges.
- Mobile: stack the Heading and Commitment Paragraphs, Supporting Photograph, then the two Benefit Cards in that order. Use `L` (`32px`) between the text group and photograph, and `XL` (`48px`) between the photograph and Benefit Cards. Stack the cards with an `S` (`16px`) gap.

## Heading

### Content

`What you can expect from me`

### Component and Semantics

Use H2 semantics.

### Visual Design

Use the global H2 typography.

### Spacing After

Separate the Heading from the first Commitment Paragraph by `L` (`32px`) at each Breakpoint.

## Commitment Paragraphs

### Content

Present these four paragraphs in order, with each bold lead-in immediately followed by its regular-weight explanation:

1. **Clear follow-through.** You stay updated, and commitments are carried through.
2. **Upfront communication.** Terms, costs, and timing are discussed early. Changes are explained promptly.
3. **The full picture.** You understand how the offer works, who is involved, and what you’re agreeing to before deciding.
4. **Steady progress.** Questions, paperwork, and timing issues are kept moving forward.

### Component and Semantics

Use four paragraphs. Emphasize each lead-in inline within its paragraph.

### Visual Design

Use the global Body typography; the lead-ins use its existing semibold weight.

### Spacing

Separate consecutive paragraphs by `M` (`24px`) at each Breakpoint.

## Supporting Photograph

### Content

- Use `/images/about-us/clear-communication-kitchen-table.png`, sourced from the approved `Clear communication at the kitchen table.png` image. Preserve its natural colors.
- Alt text: `Two people reviewing home-sale paperwork together at a table.`

### Visual Design

Display the photograph directly with the global Medium Radius (`12px`).

### Dimensions and Alignment

Keep its square composition and fill its assigned Grid width.

## Benefit Cards

### Content

Present two informational cards in this order. Each has a compact graphic area on the left and one paragraph on the right, with its bold lead-in inline:

1. **Heavy lifting handled.** Paperwork, title coordination, and closing details are managed so you have fewer things to handle.
2. **Direct communication.** You can ask questions, raise concerns, and stay informed as the sale moves forward.

### Component and Semantics

- Present the two cards as a semantic list of static informational items, each containing its graphic and paragraph.
- Use the canonical Lucide `FileCheck2` icon for the first card and `MessageCircle` for the second. Treat both icons as decorative because the adjacent text conveys their meaning.

### Visual Design

- Use white `Surface` interiors, the global `Border` (`1px solid #E4E7E4`), and Medium Radius (`12px`).
- Use a compact `Brand Green Light` graphic panel along the left edge of each card, with a centered `Brand Green Dark` line icon. Keep the text area white and to the right, following the horizontal composition of the approved reference.
- Use global Body typography for the paragraphs, with each inline lead-in at the existing semibold weight.

### Dimensions and Alignment

- Keep the two cards equal in height on Desktop and Tablet.
- Preserve the graphic-left, text-right arrangement at every Breakpoint, including when the cards stack on Mobile.

### Spacing

- Use `M` (`24px`) padding for the text area on Desktop and Tablet, and `S` (`16px`) on Mobile.

# Final CTA

## Purpose

Offer a calm, direct next step once the visitor has learned Noah’s approach and what working together involves.

## Layout

- Place this section after `What You Can Expect From Me` and before the Footer.
- Use `Background` (`#FFFFFF`) with the global content width, section spacing, and global Line System. Keep the section composition limited to the CTA copy and Primary CTA.
- Use the centered Final CTA composition established by the Sell a Portfolio page: Headline, Supporting Text, then Primary CTA in one centered vertical flow.
- Desktop: center the composition across Grid columns 3 through 10. Tablet: center it across Grid columns 2 through 7. Mobile: use the full content width.

## Headline

### Content

`Let’s talk about what works for you.`

### Component and Semantics

Use H2 semantics.

### Visual Design

Use the global H2 typography. Center the headline and let it wrap naturally within the composition.

### Spacing After

Separate the Headline from the Supporting Text by `M` (`24px`) at each Breakpoint.

## Supporting Text

### Content

`Whether you’re ready to sell or still weighing your options, tell me about your property and what matters to you. We can talk through whether working together makes sense.`

### Component and Semantics

Use paragraph semantics.

### Visual Design

Use global Body Large typography with `Text Secondary` color. Center the copy and limit its line length to `680px`.

### Spacing After

Separate the Supporting Text from the Primary CTA by `L` (`32px`) at each Breakpoint.

## Primary CTA

### Content

- Label: `Talk Through Your Options`
- Destination: `/get-cash-offer`

### Component and Semantics

- Use the shared Button Component with its `conversion` variant as a link.

### Visual Design

Use the shared Button Component’s black background, white text, subtle radius, hover state, and keyboard-focus treatment.

### Dimensions and Alignment

- Use the shared conversion Button width and center it beneath the Supporting Text at every Breakpoint.
