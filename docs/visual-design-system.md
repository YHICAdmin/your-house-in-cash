## Typography

Font Family

The primary typeface for the website is Inter.

Font Loading: Inter via next/font/google. Include only the font weights defined and used in the typography system.

The website uses a single font family consistently throughout. Typographic hierarchy is created through font size, font weight, line height, and letter spacing, rather than by combining multiple typefaces.

| Style | Desktop | Tablet | Mobile | Weight | Line Height |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | 72px | 60px | 44px | 600 | 1.05 |
| H2 | 52px | 44px | 36px | 600 | 1.10 |
| H3 | 28px | 26px | 24px | 600 | 1.20 |
| Body Large | 20px | 19px | 18px | 400 | 1.50 |
| Body | 16px | 16px | 16px | 400 | 1.60 |
| Body Small | 14px | 14px | 14px | 400 | 1.50 |
| Label | 13px | 13px | 13px | 600 | 1.30 |
| Button | 16px | 16px | 16px | 600 | 1.00 |
| Caption | 13px | 13px | 13px | 400 | 1.40 |

Headlines

Headlines use 600 font weight.

Use slightly tight letter spacing of approximately -0.025em.

Large headlines use a relatively tight line height to maintain a modern, compact appearance.

Headlines are one of the primary elements used to establish the page's visual hierarchy.

Section Label

The Section Label is used to identify, contextualize, or categorize a Section or content area and always remains visually secondary to the primary headline.

The website uses the Section Label defined in the Component Library, which defines its typography, spacing, icon behavior, responsive behavior, and customization options.

Body Copy

Standard body text: 16px.

Introductory text / prominent supporting copy: Body Large.

Secondary information: 14px.

Maintain generous line height for readability and reasonable line lengths.

Buttons

16px / 600.

Used for primary CTA buttons throughout the website.

Responsive Typography

Typography sizes are fixed at each Breakpoint according to the values defined in the Typography table. Do not use fluid scaling or clamp() between Breakpoints.

Specific adjustments may be made during implementation when required by the composition.

General Principle

Typography should feel clean, modern, and direct. Avoid creating unnecessary typographic variations. A restrained set of recurring styles should be used consistently throughout all Sections.

## Layout & Grid

Purpose

Create a consistent layout system across the entire website that maintains reliable alignment, generous whitespace, and a clear hierarchy between elements.

The Grid is not only a technical tool for aligning content, but also an integral part of the website’s visual language.

| Definition | Desktop | Tablet | Mobile |
| --- | --- | --- | --- |
| Max Page Width | 1440px | 100% | 100% |
| Content Container | 1248px max | 100% | 100% |
| Horizontal Page Padding | 96px → 16px minimum | 16px | 16px |
| Columns | 12 | 8 | 4 |
| Gutter | 24px | 24px | 16px |

Content Container

All primary website content remains within a Content Container with a maximum width of 1248px.

On Desktop, when the page width allows, the Content Container is centered within a maximum page width of 1440px, leaving 96px on each side.

When the viewport is not wide enough to accommodate a 1248px Content Container, the Container contracts while maintaining a minimum Horizontal Page Padding of 16px on each side.

The Content Container must never extend directly to the viewport edges.

Grid

The Content Container is divided into a Grid according to the Breakpoint:

Desktop: 12 columns with a 24px Gutter.

Tablet: 8 columns with a 24px Gutter.

Mobile: 4 columns with a 16px Gutter.

The columns serve as flexible alignment points for building compositions. Not every Section needs to occupy all available columns.

Different column divisions may be used depending on the content and viewport width. On Desktop, for example:

6 / 6

4 / 8

5 / 7

Columns may also be intentionally left empty.

Whitespace is part of the Layout and should not be treated as space that needs to be filled.

Vertical Section Spacing

The default vertical spacing for a Section is:

| Breakpoint | Vertical Spacing |
| --- | --- |
| Desktop | 144px |
| Tablet | 96px |
| Mobile | 72px |

Vertical Section Spacing

The default vertical spacing for a Section is:

The value refers to the Section’s default vertical padding. It may be overridden at the Section level when required by the content or composition.

Sections do not have a fixed height. Section height continues to be determined by its content.

General Principle

The Grid is intended to create consistency without making the website rigid.

Elements may span different numbers of columns, begin at different alignment points, and intentionally leave areas unoccupied.

The goal is to create varied compositions across Sections while maintaining the same underlying alignment system.

## Line System

The Line System is a global structural-visual layer composed of subtle vertical lines that run throughout the page, creating a consistent visual framework for content and composition.

The system is overlaid on the 12-Column Grid and is based on selected alignment points within it. It is not a separate Grid and does not replace the 12-Column Grid. Instead, it adds a visible structural-visual layer on top of the existing Grid system.

The lines are intended primarily to introduce a design element and establish a cohesive visual language throughout the website. At the same time, because they are derived from the existing Grid system, they may serve as alignment points, boundaries, or compositional axes for specific Sections and elements.

The Line System does not need to be used identically in every Section. Its role is defined according to the composition and purpose of each Section. The lines remain visible even when certain elements are not aligned to them or intentionally cross them as part of the composition.

The system adapts according to the Breakpoint while preserving the same underlying structural and visual principle. The lines themselves remain subtle and visually secondary to the content and should never compete with it.

The lines continue uninterrupted throughout the page, including through the Header and Sections, and do not stop or restart between different areas.

| Breakpoint | Number of Lines | Visual Columns | Outer Line Position | Internal Line Position | Content Distance from Outer Lines |
| --- | --- | --- | --- | --- | --- |
| Desktop | 5 | 4 | At the boundaries of the 1248px Content Container | Center of the Gutters between Columns 3–4, 6–7, and 9–10 | 16px |
| Tablet | 3 | 2 | At the boundaries of the content area | Center of the Gutter between Columns 4–5 | 16px |
| Mobile | 2 | 1 | At the boundaries of the content area | — | 16px |

Behavior & Override

The Line System is a visual layer only and does not occupy space within the Layout. Elements may be positioned over or across the lines when required by the composition.

The distance between content and the outer System Lines may be overridden at the Component level when required by the composition.

Layering

The Line System sits above Section backgrounds and Background Treatments, including gradients, so the lines remain continuously visible throughout the page.

All foreground content renders above the Line System, including text, images, cards, buttons, icons, and separators.

The Line System is non-interactive and must not intercept pointer events.

Spacing System

| Token | Spacing | Typical Use |
| --- | --- | --- |
| XS | 8px | Small spacing / compact elements |
| S | 16px | Small spacing |
| M | 24px | Medium spacing |
| L | 32px | Standard spacing between groups |
| XL | 48px | Significant spacing |
| 2XL | 64px | Large spacing |
| 3XL | 96px | Significant whitespace |

Spacing Scale

Margin, padding, and gap values should use the defined Spacing Scale by default. Explicit values defined at the Component or Section level may override the scale when required by the composition.

Values are not assigned in advance to specific pairs of elements. Their usage is determined according to the individual Component and Layout requirements.

Whitespace Is Structural

Whitespace is an intentional part of the composition. It should not be filled or reduced when it contributes to the hierarchy, rhythm, and clarity of the Section.

## Color System

| Token | Color | Usage |
| --- | --- | --- |
| Background | #FFFFFF | Primary website background |
| Background Soft | #F7F9F7 | Sections with a subtle background variation |
| Surface | #FFFFFF | Cards / floating elements |
| Text Primary | #101114 | Headlines and primary text |
| Text Secondary | #555B63 | Supporting copy |
| Text Muted | #777D85 | Microcopy / metadata |
| Border | #E4E7E4 | Cards and dividers |
| Line System | #F2F0F0 | Visual lines used by the Line System. 1px thickness. Remains subtle and visually secondary to the content. |

## Brand Palette

#2C6B3D

#3F8750

#5CA469

Usage Principle

The website remains predominantly neutral and light. Brand colors are used minimally and intentionally as accents rather than as dominant colors that fill the interface.

CTA

The Primary CTA remains dark / near-black. There is no need to make all action buttons green.

Guiding Principle

Neutral colors lead the design; green reinforces the brand identity.

## Background System

Default Behavior

By default, visual separation and rhythm between Sections are created by alternating between the two background colors defined in the Color System: Background and Background Soft.

Adjacent Sections generally do not use the same background color, ensuring that the transition between them remains clear without requiring a Border or additional separator.

Exceptions

The alternating pattern may be overridden when a Section uses a Background Treatment that already creates clear visual separation from the adjacent Section.

Hero Gradient

The Hero is a consistent exception to the system and uses a dedicated Gradient treatment toward its lower portion.

The Gradient does not serve as the full Section background. Instead, it acts as a visual treatment that adds depth and character while creating a natural transition into the following Section.

The Gradient should remain subtle and should not compete with the headline, content, or media. Its specific design may vary between Hero types according to their composition and content.

Because the Gradient creates its own visual separation, the Section immediately following the Hero may use Background even when the Hero's base color is also Background.

Responsive Behavior

Background Treatments and Gradients are preserved across all Breakpoints as part of the website's visual language.

Their dimensions, positioning, and proportions may be adjusted according to the composition at each Breakpoint, but they should not be automatically removed on smaller screens..

## Buttons & CTAs

General Principle

The website’s action system remains simple and restrained. Not every action needs to appear as a full button.

The Primary CTA is reserved for the most important actions, while secondary actions generally use the Text Link / Secondary Action.

Primary CTA

The Primary CTA uses the Primary CTA defined in the Component Library.

Remains dark / near-black by default.

Used for the website’s primary conversion actions.

Appears consistently in areas such as the Header, Hero, How It Works, and Final CTA.

Secondary Actions

Secondary actions use the Text Link / Secondary Action defined in the Component Library.

Component Details

Typography, dimensions, spacing, colors, states, responsive behavior, accessibility, and customization are defined in the Component Library.

Hierarchy Principle

Within each area, the distinction between the primary and secondary action should be clear.

Do not add buttons simply to fill the composition.

## Cards & Surfaces

General Principle

Cards are used only when there is a genuine need to group information or visually separate an element from its surroundings.

Do not place content inside a Card simply to introduce an additional design element.

Visual Direction

Use a white or subtle neutral background.

Use a thin, subtle Border.

Use minimal or no Shadow, depending on the composition.

Maintain a consistent, moderate Border Radius.

Use generous internal Padding.

Preserve ample whitespace within the Card.

There is no need to use a distinct Border, Shadow, and Background simultaneously when one treatment is sufficient to create the necessary separation.

Composition

Cards do not need to be identical in size.

When appropriate for the content, different sizes and proportions may be used to create a less generic composition — as defined for the statistics composition in the Local / Area Section.

Hierarchy

The content is the focal point of the Card. The Card itself should remain visually quiet and should not become the dominant element.

Where the same separation can be achieved using whitespace or a subtle line alone, prefer the simpler treatment.

## Borders, Shadows & Radius

General Principle

Borders, Shadows, and rounded corners are used only to create subtle separation and hierarchy. They should not become dominant visual elements.

Borders

Use thin, subtle lines.

Primarily used to separate Cards, Accordion items, and different content areas.

Default Border: 1px solid #E4E7E4.

Prefer a subtle Border over a Shadow when the Border alone provides sufficient separation.

Shadows

Use Shadows sparingly.

Shadows should be soft and low-contrast.

The Sticky Header receives a subtle Shadow to separate it from the content while scrolling.

Shadows may be used on floating Cards such as the Local Trust Card.

Not every Card requires a Shadow.

Border Radius

Use moderately rounded corners consistently.

Cards, images, and buttons use the same family of Radius values.

Avoid highly rounded corners as the default treatment.

Small elements such as Labels may use a larger Radius or Pill treatment when appropriate.

Border Radius Scale

| Token | Value | Typical Use |
| --- | --- | --- |
| Small | 8px | Buttons and compact elements |
| Medium | 12px | Cards, Images, and Surfaces |
| Large | 16px | Large elements or more prominent visual treatments |
| Pill | 999px | Labels and Pill-shaped elements |

Shadow Scale

| Token | Value | Typical Use |
| --- | --- | --- |
| Subtle | 0 2px 8px rgba(16, 17, 20, 0.06) | Sticky Header, subtle separation |
| Floating | 0 8px 24px rgba(16, 17, 20, 0.08) | Floating Cards such as the Local Trust Card |

The default treatment for Cards is no Shadow. A Shadow should only be used when the Component or composition requires additional separation or a sense of elevation.

Guiding Principle

When a Border, Shadow, or Radius does not contribute clear hierarchy or meaning, it is not necessary.

## Images & Media

General Principle

Media is intended to support the message and composition rather than compete with the headline or primary content. Prefer a restrained number of visual elements, each with a clear purpose.

Placement & Grid

Do not use media simply to fill empty space.

Text and media generally remain in separate areas and do not overlap.

Text and media may overlap only in exceptional cases where the overlap is an intentional part of the composition and does not compromise readability.

Images

Prefer authentic images relevant to the business and local area over generic Stock imagery.

On Area Pages, media should help create a sense of local specificity and presence.

Images do not need to use identical sizes or Aspect Ratios.

Asymmetric compositions may be used when they add visual interest.

Images remain visually secondary to the typography and primary message.

Graphics & Maps

Graphics should remain simple and clean.

Maps are used to communicate local presence rather than as purely decorative elements.

Avoid placing excessive amounts of information within the graphic itself.

Image Behavior

Images preserve their defined Aspect Ratio and fill their media area using object-fit: cover without distortion.

When the complete image needs to remain visible, alternative behavior may be defined at the Component or Section level.

Guiding Principle

If media does not add information, credibility, local context, or compositional value, it should not be added.

## Icons

General Principle

Icons are used to support content and enable quick understanding, not as decoration. Their use should remain restrained and consistent.

Style

Use simple, minimal icons.

Maintain a consistent icon style throughout the website.

Line Icons are the default.

Maintain consistent stroke weight.

Avoid unnecessary detail or complexity.

Brand Green may be used as a subtle accent.

Icons do not need to be placed inside a circle or Card by default.

Icon Size Scale

| Token | Size | Typical Use |
| --- | --- | --- |
| Small | 16px | Labels, metadata, and compact elements |
| Medium | 20px | Default icon size |
| Large | 24px | Icons requiring greater visual presence |

The default icon size is 20px. Alternative sizes are defined at the Component or Section level when required.

Icon sizes do not change automatically between Breakpoints.

Guiding Principle

If the text communicates the same meaning just as clearly without the icon, the icon is not necessary.

## Responsive System

Breakpoints

| Device | Viewport | Grid |
| --- | --- | --- |
| Mobile | Less than 768px | 4 columns / 16px gutter |
| Tablet | 768px to 1199px | 8 columns / 24px gutter |
| Desktop | 1200px and above | 12 columns / 24px gutter |

1440px is the Max Page Width and is not a Breakpoint.

Minimum Layout Width

The minimum supported layout width is 320px. Below 320px, the layout does not continue to compress and horizontal scrolling is allowed.

Content Container

Max width: 1248px

Width: fluid

Minimum horizontal page padding: 16px

Alignment: centered

Responsive Behavior

The Layout remains fluid within each Breakpoint.

The Grid defines the alignment system only. Column distribution, stacking, element order, and structural changes between Breakpoints are defined at the Section or Component level.
