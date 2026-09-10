# Seller Form Page

## Purpose

Provide a focused conversion flow for homeowners requesting a cash offer. Collect and save the basic lead first, then invite the seller to supply additional property information with minimal typing.

## Status and Scope

This specification records the approved design direction and flow. Explicitly unresolved decisions are marked **TBD** and must be resolved before implementing the affected behavior or treatment. This document does not authorize implementation.

The page inherits the applicable Visual Design System, Component Library, Accessibility, and Implementation Guidelines. It uses the shared Minimal Header and Minimal Footer defined in the [Site Shell](site-shell.md) specification.

## Route and Page Ownership

* Canonical route: `/get-cash-offer`, the existing destination of the site's Seller Lead Form Flow CTAs.
* Step 1, Step 2, and Success State belong to this single page.
* There is no separate Thank You Page and no page navigation between the form states.
* Route/layout implementation and the persistence integration remain TBD; this specification does not prescribe preparatory infrastructure.

## Layout

* One large, horizontally centered Form Card is the primary element, with an abstract brand background surrounding it.
* Do not use a `5–1–6` composition, a two-column content composition, an additional Sidebar, or marketing Cards around the form.
* The Minimal Header, main form area, and Minimal Footer form the page's vertical flow.
* The same Card container is retained throughout both steps and Success State. Its width and placement remain stable while its contents change.
* A fixed Card height is not required. Exact width, vertical placement, and treatment of height changes are TBD.
* At narrower Breakpoints, the Card fits within the available page width and global page padding. Form fields remain in one vertical column.

# Minimal Header

Uses the shared [Minimal Header](site-shell.md#minimal-header) defined in the Site Shell specification.

# Main Form Area

## Purpose

Guide sellers through submitting their contact and property details to request a cash offer, keeping the process focused and confirming that their information has been received.

## Page Background

### Content

* Abstract graphics inspired by the approved reference. The reference itself has not yet been supplied in this repository and remains TBD.
* Uses large organic shapes, the established brand greens, and subtle gradients.
* No house photography, literal house illustration, promotional Cards, or additional Sidebar.

### Visual Design

* The composition may extend behind and around the Form Card, providing brand presence while keeping attention on the form.
* Exact shape geometry, gradient stops, opacity, asset technique, and relationship to the global Line System are TBD pending the reference.

### Accessibility

* The abstract graphics are decorative and non-interactive.

## Form Card

### Component and Semantics

* Contains the Progress indicator and the currently displayed step or Success State.
* Each form step uses native form semantics. The active state's primary heading uses `H1` semantics.
* Input and quick-selection Component contracts are TBD; the existing Component Library does not yet define them.

### Visual Design

* Uses white global `Surface`, global `Medium` Radius (`12px`), and subtle separation from the background.
* The choice of Border or Shadow treatment is TBD; do not assume both.
* State headings use global `H2` typography while retaining `H1` semantics. Supporting copy uses global `Body` typography and `Text Secondary`.

### Dimensions and Alignment

* Large and horizontally centered, with a single vertical content flow.
* Uses one stable width and placement for Step 1, Step 2, and Success State; exact Card width and vertical positioning remain TBD.

### Spacing

* Internal Padding: `XL` (`48px`) on Desktop and Tablet; `L` (`32px`) on Mobile.
* `M` (`24px`) separates Progress from the active state's heading.
* `S` (`16px`) separates a heading from its supporting copy where present.
* `L` (`32px`) separates the step introduction from its fields.
* `M` (`24px`) separates adjacent field or question groups; `XS` (`8px`) separates a visible field label from its control.
* `L` (`32px`) separates the final field from the primary action.

### Interaction

* Contents change inside the existing Card; the page does not navigate to another route.
* The Step 1-to-Step 2 transition is short and subtle, combining a fade with horizontal movement. Exact duration, distance, easing, and reduced-motion behavior remain TBD.
* Do not use a step transition to indicate success before the required save has succeeded.

### Accessibility

* State-change focus management, validation feedback, save-status announcements, and Progress state semantics remain TBD before implementation.

## Progress

### Content

* Two steps, in order: `Your details` → `About the house`.

### Visual Design

* Minimal treatment at the top of the Card, using global `Body Small` typography.
* The active step uses `Brand Green`; the inactive step uses neutral `Text Muted`.

### Interaction

* Displays Step 1 as active initially and Step 2 as active after the basic lead has been saved and the second step is displayed.
* Clickable step navigation is not specified. Progress appearance in Success State is TBD.

## Step 1 — Your Details

### Content

* Heading: `Let's get you started`
* Supporting copy: `Tell us a few basic details about the house you'd like to sell. It only takes about a minute.`
* Fields, in canonical order:
  1. `Property Address`
  2. `Your Name`
  3. `Phone Number`
  4. `Email Address`
* Primary action: `Continue`.
* A small reassurance line below the action communicates privacy/security and no obligation. Final wording is TBD and must reflect the actual handling of submitted information.

### Component and Semantics

* The primary action uses the documented `Button` Component with native submit-button semantics.
* Each field has its visible label. Required/optional status, validation rules, name structure, and address-entry behavior are TBD.

### Dimensions and Alignment

* All four fields appear in one vertical column at every Breakpoint.

### Spacing

* `XS` (`8px`) separates `Continue` from the reassurance line.

### Interaction

* Completing Step 1 saves the basic lead **before** advancing to Step 2.
* Step 2 is displayed only after successful persistence has been confirmed; merely holding values in client memory does not satisfy this requirement.
* If saving fails, the flow must not advance as though the lead were saved. Exact error copy, retry behavior, and loading treatment are TBD.

### Technical Requirements

* Lead destination, persistence service, submission contract, duplicate handling, and recovery behavior are TBD.
* Step 2 information must be associated with the lead saved in Step 1 rather than treated as an unrelated lead. The association mechanism is TBD.

## Step 2 — About the House

### Content

* Uses quick choices wherever possible to minimize typing.
* Question groups, in canonical order:
  1. `Property Condition`
  2. `Occupancy`
  3. `Reason for Selling`
  4. `Selling Timeline`
  5. `Anything else you'd like us to know?` — optional free text.
* Includes `Skip for now` as a secondary action.
* Exact step heading, supporting copy if any, choice inventories, selection rules, and primary completion-action label are TBD.

### Component and Semantics

* Quick-selection controls must be specified once their options and single/multiple-selection behavior are approved.
* The optional free-text question uses a labeled multiline text input.
* `Skip for now` is an in-page action, not navigation to another page. Its visual control treatment is TBD.

### Interaction

* Completing Step 2 updates the saved lead with the additional information and shows Success State within the same Card.
* `Skip for now` allows completion without supplying the additional details and leads to the same Success State, retaining the Step 1 lead.
* Required/optional status of the choice groups, treatment of partially entered details when skipping, back/edit behavior, and save-failure handling are TBD.

## Success State

### Content

* Heading direction: `You're all set, {First Name}.`
* Briefly confirms receipt, explains that the team will review the details, and says that the team will make contact. Final copy is TBD.
* A phone number may be offered for someone who wants to speak immediately. Whether to include it and its accompanying wording remain TBD.
* First-name derivation and the fallback when it cannot be derived are TBD.

### Component and Semantics

* Replaces the form contents inside the same Card.

### Interaction

* No separate Thank You Page or route is introduced.
* Exact transition into Success State and any post-completion actions remain TBD.

# Minimal Footer

Uses the shared [Minimal Footer](site-shell.md#minimal-footer) defined in the Site Shell specification.

# Decisions Still Required Before Implementation

The TBD items above remain intentionally unresolved. They cover the missing reference and final geometry, form/control design and validation, final unapproved copy, Step 2 choices and completion behavior, persistence and failure/recovery handling, and accessible state transitions. No placeholder implementation, additional services, or assumptions about these decisions are authorized by this specification.
