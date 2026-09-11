# Purpose

Provide a focused conversion flow for homeowners requesting a cash offer. Collect and save the basic lead first, then invite the seller to supply additional property information with minimal typing.

# Area Page Routing

* Canonical route: `/get-cash-offer`.

# Layout

* The Minimal Header, main form area, and Minimal Footer form the page's vertical flow.
* One large, horizontally centered Form Card is the primary element, with an abstract brand background surrounding it.
* The Form Card begins after the main form area's inherited global Section top padding, measured from the bottom of the Minimal Header.
* Do not use a `5–1–6` composition, a two-column content composition, an additional Sidebar, or marketing Cards around the form.

## Page Background

### Content

* Composition reference: the Stripe form-page screenshot supplied by the user, `Screenshot 2026-09-11 090850.png`. It guides the composition; colors use the site's established brand palette.
* A broad, curved graphic ribbon enters from the top of the main form area, passes behind the Form Card, and continues down its right side.
* No house photography, literal house illustration, promotional Cards, or additional Sidebar.

### Visual Design

* Uses the established brand greens, with soft transitions to light green and the global white `Background`. Generous white space surrounds the ribbon.
* The graphic is confined to the main form area. The Minimal Header retains its approved white background.
* Uses the global Line System and its layering rules.
* Exact ribbon geometry, gradient stops, and opacity remain TBD.

### Accessibility

* The abstract graphics are decorative and non-interactive.

### Responsive Behavior

* On Tablet, the ribbon retains the Desktop composition, scaled to the available width: it enters from the top, passes behind the Form Card, and continues down its right side.
* On Mobile, portions of the ribbon remain visible above and to the right of the Form Card. The graphic is clipped at the viewport edges without introducing horizontal scrolling.

### Technical Requirements

* The ribbon is a repository-owned SVG asset with gradients.

# Header and Footer

* Uses the shared [Minimal Header](site-shell.md#minimal-header).
* Uses the shared [Minimal Footer](site-shell.md#minimal-footer).

# Main Form Area

## Purpose

Guide sellers through submitting their contact and property details to request a cash offer, keeping the process focused and confirming that their information has been received.

## Layout

## Form Card

### Component and Semantics

* Contains the Progress indicator and the currently displayed form step, or Success State without the Progress indicator.
* Each form step uses native form semantics. The active state's primary heading uses `H1` semantics.
* Input and quick-selection Component contracts are TBD; the existing Component Library does not yet define them.

### Visual Design

* Uses opaque white global `Surface`, global `Medium` Radius (`12px`), and subtle separation from the background. The Card renders above the ribbon so the graphic does not interfere with form readability.
* Uses the global `Floating` Shadow for separation from the background.
* State headings use global `H2` typography while retaining `H1` semantics. Supporting copy uses global `Body` typography and `Text Secondary`.

### Dimensions and Alignment

* Uses a single vertical content flow.
* Width: `100%` of the available width, up to a maximum of `640px`, while preserving global page padding.
* The same Card container is retained for Step 1, Step 2, and Success State, with stable width and placement while its contents change. Its top edge remains at the same position within the main form area throughout the flow.
* Card height is determined by the content of the current state. The Card grows or shrinks downward while its top edge remains in place.

### Spacing

* Internal Padding: `XL` (`48px`) on Desktop and Tablet; `L` (`32px`) on Mobile.
* `M` (`24px`) separates Progress from the active state's heading.
* `S` (`16px`) separates a heading from its supporting copy where present.
* `L` (`32px`) separates the step introduction from its fields.
* `M` (`24px`) separates adjacent field or question groups; `XS` (`8px`) separates a visible field label from its control.
* `L` (`32px`) separates the final field from the primary action.

### Interaction

* Contents change inside the existing Card; the page does not navigate to another route.
* The Step 1-to-Step 2 transition combines a fade with `16px` of horizontal movement over `200ms`, using `ease-out`. The outgoing content moves left and fades out; the incoming content enters from the right and fades in.
* When `prefers-reduced-motion: reduce` applies, the content is replaced immediately without animation.
* Do not use a step transition to indicate success before the required save has succeeded.

### Accessibility

* After a transition between form steps completes, move keyboard focus to the new step's heading. When reduced motion is preferred, move focus after the content is replaced immediately.
* Validation feedback, save-status announcements, and Progress state semantics remain TBD before implementation.

### Responsive Behavior

* At narrower Breakpoints, the Card fits within the available page width and global page padding. Form fields remain in one vertical column.

## Progress

### Content

* Two steps, in order: `Your details` → `About the house`.

### Visual Design

* Minimal treatment at the top of the Card, using global `Body Small` typography.
* The active step uses `Brand Green`; the inactive step uses neutral `Text Muted`.

### Interaction

* Displays Step 1 as active initially and Step 2 as active after the basic lead has been saved and the second step is displayed.
* Clickable step navigation is not specified.
* The Progress indicator is hidden in Success State.

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
* The transition into Success State uses a fade over `200ms` with `ease-out`.
* When `prefers-reduced-motion: reduce` applies, Success State replaces the form immediately without animation.
* Post-completion actions remain TBD.

### Accessibility

* On entering Success State, move keyboard focus to its confirmation heading.

# Decisions Still Required Before Implementation

The TBD items above remain intentionally unresolved. They cover the final background treatment and responsive composition, form/control design and validation, final unapproved copy, Step 2 choices and completion behavior, persistence and failure/recovery handling, and accessible state transitions. No placeholder implementation, additional services, or assumptions about these decisions are authorized by this specification.
