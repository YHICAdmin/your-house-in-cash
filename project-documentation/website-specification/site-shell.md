# Header

## Purpose

Provide clear, accessible navigation.

## Layout

* Sticky at the top of the viewport with no hide-and-reveal behavior while scrolling.
* Height: `80px` on Desktop, `72px` on Tablet, and `64px` on Mobile.
* Uses a solid `#FFFFFF` background, matching the global Background color, with all Header content vertically centered.
* In its default state, uses a `1px` dashed `#ECEEF4` bottom border, matching the global Line System color, and no Shadow.
* As soon as the page is scrolled from its top position by any amount, the bottom border is removed and replaced by the global Subtle Shadow.
* Opening the Menu does not change the Header's current border or Shadow state.
* Internal System Lines remain visible but do not dictate the placement of Header elements.

## Logo

### Content

* Displays the company Logo.
* The homepage currently uses the Area Page template with Cleveland as its location.

### Component and Semantics

* Links to the canonical homepage at `/` from every page and does not change according to the current Area Page.
* Accessible name: `Your House in Cash home`.

### Dimensions and Alignment

* Positioned on the left and preserves its original Aspect Ratio.
* Height: `56px` on Desktop, `48px` on Tablet, and `44px` on Mobile.

## Navigation

* Contains the Desktop Navigation on Desktop and the Menu Control and Open Menu Panel on Tablet and Mobile.

### Desktop Navigation

* Contains links in this order: `How It Works`, `Situations`, `Areas We Buy In`, `Reviews`, `FAQ`, `About Us`.
* Displayed only on Desktop.
* Links use the global `Body Small` typography and have a `24px` (`M`) gap between them.
* Does not use a persistent Active Page Indicator.
* Hover and focus-visible text color changes to Brand Green Dark.
* Navigation and links remain keyboard accessible and use the appropriate navigation and link semantics.

#### Spacing Before

* `24px` (`M`) after the Logo.

### Menu Control

* Displayed on Tablet and Mobile and not displayed on Desktop.
* On Tablet, this is an explicit Breakpoint-specific order change: the Header CTA precedes the Menu Control in document, reading, and focus order.
* On Mobile, follows the Logo in document, reading, and focus order because the Header CTA is not displayed in the Header.
* Positioned on the right; on Mobile it is the only element in the Header's right-side control area.
* Uses a semantic button with an accessible name that communicates whether it opens or closes the navigation Menu.
* Communicates its expanded or collapsed state to assistive technologies.
* Closed state: three horizontal lines. Open state: an `X`.
* Icon size: `24px`; interactive area: `40px × 40px`.
* Uses a transparent background, no Border, and `#101114` icon color.
* Hover changes the icon to Brand Green Dark.
* Uses the global Focus-Visible Treatment.
* Active state has no additional visual treatment.
* Activating the closed control opens the Menu; activating the open control closes it.

### Open Menu Panel

* Displayed only while the Tablet or Mobile Menu is opening, open, or closing.
* On Tablet, follows the Header CTA and Menu Control in document, reading, and focus order.
* On Mobile, follows the Menu Control in document, reading, and focus order.
* Fills the remaining viewport below the Header and uses an uninterrupted solid `#FFFFFF` background with no System Lines visible through it.
* While the panel is displayed, page scrolling is locked and background page content is non-interactive. If the Menu content exceeds the available viewport height, the panel becomes vertically scrollable.
* Closes when the Menu Control is activated, a Menu Navigation link is selected, or `Escape` is pressed.
* If the viewport changes to Desktop while open, the Menu closes and resets.
* When opened, keyboard focus moves to the first Menu Navigation link.
* While open, keyboard focus remains within the Header and Menu Panel; `Tab` and `Shift + Tab` cycle through only its interactive elements.
* As soon as closing begins, the Menu Panel and all of its interactive content become non-interactive and hidden from assistive technologies while the visual closing transition completes.
* Page scrolling remains locked and background page content remains non-interactive until the closing transition finishes and the Menu Panel is removed.
* Pressing `Escape` closes the Menu and returns focus to the Menu Control.
* Uses a short, subtle opacity transition combined with an `8px` downward movement.
* Opening takes approximately `200ms` with ease-out timing; closing takes approximately `180ms` with ease-in timing.
* Individual Menu elements do not animate separately. The transition does not use side-sliding, scaling, or exaggerated motion.
* The transition is disabled when the user prefers reduced motion.

#### Menu Navigation

* First content element within the Open Menu Panel.
* Contains the same links and order as the Desktop Navigation.
* Links appear as left-aligned vertical rows aligned with the Header content area.
* Each row uses `Inter / 16px / 600 / 1.5`, with `24px` (`M`) vertical padding.
* Horizontal alignment follows the Header and Menu Panel content area.
* A `1px` solid `#E4E7E4` divider separates adjacent rows.
* Rows do not use individual backgrounds, Card treatments, or Radius.
* The complete row is interactive, not only its text.
* Hover and focus-visible text color changes to Brand Green Dark.
* Links remain keyboard accessible and use appropriate navigation and link semantics.

#### Menu Primary CTA

* Follows Menu Navigation in document and focus order.
* Displayed only on Mobile; not displayed in the Tablet Menu.
* Label: `Get My Cash Offer`.
* Navigates to the Seller Lead Form Flow at the canonical internal route `/get-cash-offer`.
* Uses the standard `Button` Component and its inherited visual styling, dimensions, interaction states, and accessibility behavior.
* Uses its content-based width and is horizontally centered at the bottom of the Open Menu Panel.
* Uses `24px` (`M`) padding beneath it.

## Header CTA

* Label: `Get My Cash Offer`.
* Navigates to the Seller Lead Form Flow at the canonical internal route `/get-cash-offer`.
* Uses the standard `Button` Component and its inherited visual styling, dimensions, interaction states, and accessibility behavior.
* On Desktop, follows the Desktop Navigation in document, reading, and focus order and is positioned on the right side of the Header.
* On Tablet, this is an explicit Breakpoint-specific order change: the Header CTA follows the Logo and precedes the Menu Control in document, reading, and focus order.
* On Tablet, grouped on the right with the Menu Control and separated from it by `16px` (`S`).
* Not displayed in the Header on Mobile.

# Footer

## Purpose

Provide secondary navigation, company information, legal information, and contact details in a clear and unobtrusive way, while creating a structured conclusion to the page.

## Structure

The Footer is divided into several content areas:

- **Company** — Logo and short company description.
- **Navigation** — Primary navigation and company links.
- **Legal**
  - Privacy Policy
  - Terms of Service
- **Contact** — Contact details and location / service area.

A separate bottom row contains the copyright notice and any additional secondary information.

## Visual Direction

- Clean, minimal, and spacious.
- Maintain a clear but understated typographic hierarchy.
- Navigation links and contact information should not compete visually with the Final CTA above.
- Use subtle separators only when necessary.
- Preserve generous whitespace.
- Do not add elements solely to fill available space.

## Behavior

No specific interactive behavior is currently defined beyond standard link behavior.

## Technical Specifications

No Footer-specific technical specifications are currently defined. Global typography, spacing, color, container, and component rules apply unless explicitly overridden.

## Responsive Behavior

The Footer should adapt its multi-column structure to smaller viewports while preserving clear content grouping and hierarchy.

The exact Tablet and Mobile layout is not currently specified.

## Line System

- The outer System Lines bound the Footer content, using the globally defined content padding.
- On Desktop, the four visual areas may be used as the basis for organizing **Company / Navigation / Legal / Contact**.
- Internal System Lines serve as alignment axes between content areas; each visual area does not need to be fully occupied.
- The bottom copyright row may span the full content width across all four visual areas.
