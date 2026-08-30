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
* On Desktop, the Logo and Desktop Navigation links form a left-side visual group with a `24px` (`M`) gap between adjacent items.

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

### Content

#### Shared Navigation Links

* The navigation links appear in this canonical order:

  1. `How It Works`
  2. `Situations`
  3. `Areas We Buy In`
  4. `Reviews`
  5. `FAQ`
  6. `About Us`

#### Desktop

* Contains the Desktop Navigation.
* The Desktop Navigation contains the Shared Navigation Links.

#### Tablet

* Contains the Menu Control.
* The Menu Control displays three horizontal lines when closed and an `X` when open.
* When opened, the Open Menu Panel contains the Menu Navigation.
* The Menu Navigation contains the Shared Navigation Links.

#### Mobile

* Contains the Menu Control.
* The Menu Control displays three horizontal lines when closed and an `X` when open.
* When opened, the Open Menu Panel contains:

  1. Menu Navigation containing the Shared Navigation Links.
  2. Menu Primary CTA with the label `Get My Cash Offer`.

### Component and Semantics

#### Desktop

* The Desktop Navigation uses navigation landmark semantics with the accessible name `Primary navigation`.
* Each Desktop Navigation item uses link semantics.

#### Tablet and Mobile

* The Menu Control uses button semantics.
* The Menu Navigation uses navigation landmark semantics with the accessible name `Menu navigation`, and each item uses link semantics.

#### Mobile

* The Menu Primary CTA uses the standard `Button` Component with link semantics and navigates to the Seller Lead Form Flow at the canonical internal route `/get-cash-offer`.

### Visual Design

#### Desktop

* Desktop Navigation links use the global `Body Small` typography.
* The Desktop Navigation does not use a persistent Active Page Indicator.

#### Tablet and Mobile

* The Menu Control uses a transparent background, no Border, and a `#101114` icon color.
* The Open Menu Panel uses an uninterrupted solid `#FFFFFF` background with no System Lines visible through it.
* Each Menu Navigation row uses `Inter / 16px / 600 / 1.5`.
* A `1px` solid `#E4E7E4` divider separates adjacent Menu Navigation rows.
* Menu Navigation rows do not use individual backgrounds, Card treatments, or Radius.

#### Mobile

* The Menu Primary CTA inherits the standard `Button` Component's visual styling.

### Dimensions and Alignment

#### Tablet and Mobile

* The Menu Control is positioned on the right and uses a `24px` icon within a `40px × 40px` interactive area.
* The Open Menu Panel fills the remaining viewport below the Header.
* Menu Navigation links appear as left-aligned vertical rows aligned with the Header and Menu Panel content area.
* Each Menu Navigation row uses `24px` (`M`) vertical padding.
* If the Menu content exceeds the available viewport height, the Open Menu Panel becomes vertically scrollable.

#### Mobile

* The Menu Control is the only element in the Header's right-side control area.
* The Menu Primary CTA inherits the standard `Button` Component's dimensions, uses its content-based width, is horizontally centered at the bottom of the Open Menu Panel, and has `24px` (`M`) padding beneath it.

### Interaction

#### Desktop

* Hover and focus-visible change Desktop Navigation link text to Brand Green Dark.

#### Tablet and Mobile

* Activating the closed Menu Control opens the Menu; activating the open Menu Control closes it.
* The Menu Control's active state has no additional visual treatment.
* Hover changes the Menu Control icon to Brand Green Dark.
* The complete Menu Navigation row is interactive, not only its text.
* Hover and focus-visible change Menu Navigation link text to Brand Green Dark.
* The Open Menu Panel is displayed only while the Menu is opening, open, or closing.
* The Menu closes when the Menu Control is activated, a Menu Navigation link is selected, or `Escape` is pressed.
* If the viewport changes to Desktop while the Menu is open, the Menu closes and resets.
* The Open Menu Panel uses a short, subtle opacity transition combined with an `8px` downward movement.
* Opening takes approximately `200ms` with ease-out timing; closing takes approximately `180ms` with ease-in timing.
* Individual Menu elements do not animate separately. The transition does not use side-sliding, scaling, or exaggerated motion.
* The transition is disabled when the user prefers reduced motion.

#### Mobile

* The Menu Primary CTA inherits the standard `Button` Component's interaction states.

### Accessibility

#### Tablet and Mobile

* The Menu Control's accessible name communicates whether it opens or closes the navigation Menu.
* The Menu Control communicates its expanded or collapsed state to assistive technologies.
* The Menu Control uses the global Focus-Visible Treatment.
* When the Menu opens, keyboard focus moves to the first Menu Navigation link.
* While the Menu is open, keyboard focus remains within the Header and Open Menu Panel; `Tab` and `Shift + Tab` cycle through only their interactive elements.
* While the Open Menu Panel is displayed, page scrolling is locked and background page content is non-interactive.
* As soon as closing begins, the Open Menu Panel and all of its interactive content become non-interactive and hidden from assistive technologies while the visual closing transition completes.
* Page scrolling remains locked and background page content remains non-interactive until the closing transition finishes and the Open Menu Panel is removed.
* Pressing `Escape` closes the Menu and returns focus to the Menu Control.

#### Tablet

* The Header CTA precedes the Menu Control in document, reading, and focus order.
* The Open Menu Panel follows the Header CTA and Menu Control in document, reading, and focus order.
* Menu Navigation is the first content element in the Open Menu Panel.

#### Mobile

* The Menu Control follows the Logo in document, reading, and focus order because the Header CTA is not displayed in the Header.
* The Open Menu Panel follows the Menu Control in document, reading, and focus order.
* Menu Navigation is the first content element in the Open Menu Panel.
* The Menu Primary CTA follows Menu Navigation in document and focus order and inherits the standard `Button` Component's accessibility behavior.

## Header CTA

### Content

* Label: `Get My Cash Offer`.

### Component and Semantics

* Uses the standard `Button` Component with link semantics and inherits its visual styling, dimensions, interaction states, and accessibility behavior.
* Navigates to the Seller Lead Form Flow at the canonical internal route `/get-cash-offer`.

### Dimensions and Alignment

* On Desktop, positioned on the right side of the Header.
* On Tablet, grouped on the right with the Menu Control and separated from it by `16px` (`S`).

### Responsive Behavior

* On Tablet, this is an explicit Breakpoint-specific order change: the Header CTA follows the Logo and precedes the Menu Control in document, reading, and focus order.
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
