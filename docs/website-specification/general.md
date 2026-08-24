# Visual Direction

*** Element Restraint / Visual Simplicity ***

Each section should be built around a limited number of elements, each serving a clear purpose. Do not add cards, icons, badges, text, statistics, or decorative elements simply to fill empty space.

The default structure is: label, headline, supporting copy, CTA when needed, and one primary media or content element.

Whitespace is an intentional part of the design and should not be filled unnecessarily. Each section should have one clear visual concept.

*** Note ***

Mockups and visual references serve as design guidance and are not Pixel-Perfect implementation specifications. In the event of a conflict between a concept image and the Website Specification or Visual Design System, the written documentation is the source of truth.

## Global Site Structure

### Header

#### Purpose

Provide clear, accessible navigation while keeping the primary conversion path available to the user at all times.

#### Structure

The Header consists of three primary areas:

- Logo — positioned on the left.
- Navigation — How It Works / Situations / Areas We Buy In / Reviews / FAQ / About Us.
- Primary CTA — Get My Cash Offer, positioned on the right.

#### Visual Direction

- Quiet and minimal, with generous whitespace.
- The Primary CTA is clear and accessible but does not compete with the page content.
- Do not use a persistent Active Page Indicator in the primary navigation.

#### Behavior

##### Sticky & Scroll Behavior

- There is no additional trigger and no hide/reveal behavior while scrolling.
- In the default state, the Header uses the bottom border defined below and no shadow.
- In the sticky state, the bottom border is removed and replaced by the global Subtle Shadow.
- Scrolled State Trigger: activates as soon as the page is scrolled (`scrollY > 0`).
Opening the Menu does not change the Header’s border or shadow state.

#### Technical Specifications

##### Header

- Height:
  - Desktop: 80px
  - Tablet: 72px
  - Mobile: 64px
- Position: sticky
- Top: 0
- Background: #FFFFFF
- Default Bottom Border: 1px dashed #ECEEF4
- Sticky Shadow: Subtle Shadow
- Vertical Alignment: center

##### Logo

- Height:
  - Desktop: 56px
  - Tablet: 48px
  - Mobile: 44px
- Width: auto
- Aspect Ratio: preserved

##### Navigation

- Desktop alignment: left, directly after the Logo
- Typography:
  - Desktop: Body Small
  - Tablet: —
  - Mobile: —
- Gap:
  - Desktop: 24px
  - Tablet: —
  - Mobile: —
- Gap from Logo on Desktop: 24px

#### Responsive Behavior

- On Tablet and Mobile, the Primary CTA and Hamburger are grouped on the right.
- The Primary CTA remains visible and does not move inside the Hamburger Menu.

#### Accessibility

- Header navigation and controls must remain keyboard accessible.
- Interactive controls use their appropriate semantic elements.
- Menu transitions are disabled when prefers-reduced-motion: reduce is enabled.

#### Line System

- The outer system lines bound the Header content according to the global definition.
- The internal system lines remain visible but do not dictate the placement of the Logo, Navigation, or Primary CTA.
- The global Line System remains visible over the open Menu background.

#### Menu

##### Open Menu Behavior

- The menu fills the entire screen below the Header.
- The panel uses a solid white background.
- The Hamburger icon changes to a Close icon while the menu is open.
- The panel closes when:
  - the Close button is pressed;
  - a navigation item is selected;
  - the user presses `Escape`.
- The panel should feel spacious and minimal, similar in behavior and hierarchy to the provided Stripe reference, without copying Stripe-specific content or styling.
- If the viewport changes to Desktop while the Menu is open, the Menu closes and its state resets.

##### Navigation Rows

- Navigation items are displayed vertically in rows aligned to the Header content area.
- Typography: Inter / 16px / 600 / 1.5.
- Text alignment: left.
- Vertical padding: 24px.
- Horizontal padding follows the Header / panel content alignment.
- Divider: 1px solid #E4E7E4 between navigation rows.
- No individual item background, Card treatment, or Radius.
- The entire row is clickable, not only the text.
- Hover / Focus-visible: text changes to Brand Green Dark.

##### Menu Scroll Behavior

- While the navigation panel is open, page scrolling is locked.
- If the navigation content exceeds the available viewport height, the panel itself becomes vertically scrollable.

##### Menu Focus Behavior

- When the navigation panel opens, focus moves to the first navigation item.
- While the panel is open, keyboard focus is contained within the Header and navigation panel.
- `Tab` and `Shift + Tab` cycle only through interactive elements within the open Header/menu state.
- Pressing `Escape` closes the panel and returns focus to the Hamburger / Close control.
- Content behind the open navigation panel is not keyboard-interactive while the panel is open.
- The Hamburger / Close control exposes its state using `aria-expanded`.

##### Menu Transition

- Use a short, subtle open/close transition.
- Animate opacity and a small downward vertical offset of 8px only.
- Open duration: approximately 200ms with `ease-out`.
- Close duration: approximately 180ms with `ease-in`.
- Do not animate individual navigation items separately.
- Do not use side-slide, scale, or exaggerated motion.

##### Hamburger / Close Control

- Closed state: 3 horizontal lines.
- Open state: X.
- Icon size: 24px.
- Hit area: 40 × 40px.
- Background: transparent.
- Border: none.
- Color: #101114.
- Gap from Primary CTA: 16px.
- Hover: icon color changes to Brand Green Dark.
- Focus-visible: 2px solid Brand Green Dark outline with 3px offset.
- Active: no additional visual treatment.

### Footer

#### Purpose

Provide secondary navigation, company information, legal information, and contact details in a clear and unobtrusive way, while creating a structured conclusion to the page.

#### Structure

The Footer is divided into several content areas:

- **Company** — Logo and short company description.
- **Navigation** — Primary navigation and company links.
- **Legal**
  - Privacy Policy
  - Terms of Service
- **Contact** — Contact details and location / service area.

A separate bottom row contains the copyright notice and any additional secondary information.

#### Visual Direction

- Clean, minimal, and spacious.
- Maintain a clear but understated typographic hierarchy.
- Navigation links and contact information should not compete visually with the Final CTA above.
- Use subtle separators only when necessary.
- Preserve generous whitespace.
- Do not add elements solely to fill available space.

#### Behavior

No specific interactive behavior is currently defined beyond standard link behavior.

#### Technical Specifications

No Footer-specific technical specifications are currently defined. Global typography, spacing, color, container, and component rules apply unless explicitly overridden.

#### Responsive Behavior

The Footer should adapt its multi-column structure to smaller viewports while preserving clear content grouping and hierarchy.

The exact Tablet and Mobile layout is not currently specified.

#### Line System

- The outer System Lines bound the Footer content, using the globally defined content padding.
- On Desktop, the four visual areas may be used as the basis for organizing **Company / Navigation / Legal / Contact**.
- Internal System Lines serve as alignment axes between content areas; each visual area does not need to be fully occupied.
- The bottom copyright row may span the full content width across all four visual areas.
