# Purpose

Provide a focused conversion flow for homeowners requesting a cash offer. Collect and save the basic lead first, then invite the seller to supply additional property information with minimal typing.

# Area Page Routing

* Canonical route: `/get-cash-offer`.

# Header and Footer

* Uses the shared [Minimal Header](site-shell.md#minimal-header).
* Uses the shared [Minimal Footer](site-shell.md#minimal-footer).
* On this page, the Minimal Header and Minimal Footer use transparent backgrounds so the shared page ribbon continues behind them. Their foreground content and System Lines retain their shared styling.

# Main Form Area

## Purpose

Guide sellers through submitting their contact and property details to request a cash offer, keeping the process focused and confirming that their information has been received.

## Layout

* One large, horizontally centered Form Card is the primary element, with an abstract brand background surrounding it.
* The Form Card's content follows one vertical column at all Breakpoints, including the fields in Step 1 and question groups in Step 2.
* Within each Step 2 question group, choice options use content-based widths and form rows that wrap to fit the available width at all Breakpoints.
* The Form Card begins after the main form area's inherited global Section top padding, measured from the bottom of the Minimal Header.

### Page Background

* An original broad, continuous ribbon composition uses the flowing, folded-ribbon principle of the supplied Stripe reference as inspiration.
* The ribbon follows an S-shaped flow, entering from the top left of center, passing behind the Form Card, and continuing down its right side.

* Four layered paths define the ribbon body, dark fold, forward-facing surface, and broad highlight. Gradients use global `Brand Green`, `Brand Green Dark`, `Brand Green Light` as mint, and white `Background`, with a soft bottom fade. The strongest color remains outside the opaque Form Card.
* The complete ribbon renders at `40%` opacity at all Breakpoints, softening its presence against the white page background while preserving its layered folds.
* One shared page wrapper contains the ribbon behind the Minimal Header, main form area, and Minimal Footer. Its height follows the complete page, with a gentle fade behind the Footer and the opaque Form Card above it.
* Uses the global Line System and its layering rules.
* The current [Ribbon SVG](../../public/brand/seller-form-background.svg) defines the background geometry, gradients, and fade mask, replacing the earlier design draft as the background source.

#### Responsive Behavior

* On Desktop, the SVG fills the page wrapper's width and is horizontally centered.
* On Tablet, the SVG uses the larger of the available width and `960px`, with its center shifted right by `S` (`16px`).
* On Mobile, the SVG uses a `768px` composition width with its center shifted right by `L` (`32px`), exposing the upper curve and the right-side continuation. The background container clips the overflowing artwork.
* At every Breakpoint, the SVG fills the page wrapper's height, scaling its curve to the page dimensions with `preserveAspectRatio="none"`.

#### Technical Requirements

* The ribbon is a static, repository-owned SVG with a `0 0 1440 1120` viewBox, four paths, linear gradients, and a fade mask.
* Its decorative wrapper uses absolute positioning behind the Line System and foreground content, `aria-hidden="true"`, and `pointer-events: none`; the SVG image uses empty alternative text.

## Form Card

### Component and Semantics

* Contains the currently displayed form step or Success State.
* Each form step uses native form semantics. The active state's primary heading uses `H1` semantics.
* Uses the shared [Form](../form.md) definitions for text fields, choice controls, validation feedback, and submission state.

### Visual Design

* Uses opaque white global `Surface`, global `Medium` Radius (`12px`), and subtle separation from the background. The Card renders above the ribbon so the graphic does not interfere with form readability.
* Uses the global `Floating` Shadow for separation from the background.
* State headings use global `H2` typography. Supporting copy uses global `Body` typography and `Text Secondary`.

### Dimensions and Alignment

* Width: `100%` of the available width, up to a maximum of `640px`, while preserving global page padding.
* The same Card container is retained for Step 1, Step 2, and Success State, with stable width and placement while its contents change. Its top edge remains at the same position within the main form area throughout the flow.
* Card height is determined by the content of the current state. The Card grows or shrinks downward.

### Spacing

* Internal Padding: `XL` (`48px`) on Desktop and Tablet; `L` (`32px`) on Mobile.
* Step 1 begins with its heading.
* `S` (`16px`) separates a heading from its supporting copy where present.
* `L` (`32px`) separates the step introduction from its fields.
* `M` (`24px`) separates adjacent field or question groups.
* `L` (`32px`) separates the final field from the primary action.

### Interaction

* Contents change inside the existing Card; the page does not navigate to another route.
* The Step 1-to-Step 2 transition combines a fade with `16px` of horizontal movement over `200ms`, using `ease-out`. The outgoing content moves left and fades out; the incoming content enters from the right and fades in.
* Returning from Step 2 to Step 1 with `Back` reverses the direction using the same `16px` movement, `200ms` duration, and `ease-out`: outgoing content moves right and fades out, while incoming content enters from the left and fades in.
* When `prefers-reduced-motion: reduce` applies, the content is replaced immediately without animation.
* Do not use a step transition to indicate success before the required save has succeeded.
* Clear save-failure messages when moving between form steps, while preserving entered answers under the documented back/edit behavior.

### Accessibility

* After a transition between form steps completes, move keyboard focus to the new step's heading. When reduced motion is preferred, move focus after the content is replaced immediately.

## Step 1 — Your Details

### Content

* Heading: `Let's get you started`
* Supporting copy: `Tell us a few basic details about the house you'd like to sell. It only takes about a minute.`
* Fields, in canonical order:
  1. `Property Address`
  2. `Your Name`
  3. `Phone Number`
  4. `Email Address`
* Primary action: `Get My Cash Offer`.
* Phone Number placeholder: `e.g. 216-555-1234`.
* Save-failure message: `We couldn’t save your details. Please try again.`
* Reassurance line below the primary action: `Your information stays private`, preceded by a decorative Lucide `LockKeyhole` icon.
* Required-field error messages:
  * Your Name: `Please enter your name.`
  * Phone Number: `Please enter your phone number.`
  * Email Address: `Please enter your email address.`
* Invalid-value error messages for non-empty fields:
  * Phone Number: `Please enter a valid US phone number.`
  * Email Address: `Please enter a valid email address.`

### Component and Semantics

* The primary action uses the documented `Button` Component with native submit-button semantics.
* Property Address, Your Name, Phone Number, and Email Address are all required.
* `Your Name` uses the shared [Text Field](../form.md#text-field) as a single full-name field.
* `Phone Number` uses the shared [Phone Field](../form.md#phone-field).
* `Email Address` uses the shared [Email Field](../form.md#email-field).
* `Your Name` is valid when non-empty after trimming leading and trailing whitespace. It does not require two words or restrict the language or script used.

### Dimensions and Alignment

* The Step 1 save-failure message appears above `Get My Cash Offer`.
* `Get My Cash Offer` uses the full available field width at all Breakpoints. The reassurance icon and text form one horizontally centered group beneath it, vertically center-aligned with an `XS` (`8px`) gap. The icon uses the global Small Icon size (`16px`) and inherits the reassurance text color.

### Spacing

* `XS` (`8px`) separates `Get My Cash Offer` from the reassurance line.

### Interaction

* Completing Step 1 saves the basic lead **before** advancing to Step 2.
* Step 2 is displayed only after successful persistence has been confirmed; merely holding values in client memory does not satisfy this requirement.
* While the lead-save request is pending, the primary action displays `Saving…`.
* If saving fails, remain on Step 1, preserve all entered values, show the save-failure message, and restore the primary action to `Get My Cash Offer` so the seller can retry.

### Technical Requirements

* Open backend decisions are listed under [Decisions Still Required Before Implementation](#decisions-still-required-before-implementation).
* `Your Name` uses `autocomplete="name"` for browser autofill.
* Step 2 information must be associated with the lead saved in Step 1 rather than treated as an unrelated lead.
* When Step 1 is revisited for editing, `Get My Cash Offer` saves the revised details to the same lead before returning to Step 2; it does not create a new lead.

### Property Address

#### Content

* Property Address guidance: `Enter the street address, city, state, and ZIP code.`
* Required-field error message: `Please enter the property address.`

#### Component and Semantics

* Uses the shared [Address Field](../form.md#address-field).

#### Dimensions and Alignment

* The Property Address guidance appears below the address field.

## Step 2 — About the House

### Content

* Heading: `Thanks, {First Name}!`
* `{First Name}` uses the first word of the trimmed full name. If unavailable, use `Thanks!`.
* Supporting copy: `Your request has been received. Add a few optional details to help us understand your property.`
* Uses quick choices wherever possible to minimize typing.
* Question groups, in canonical order:
  1. `Property Condition`
  2. `Occupancy`
  3. `Reason for Selling`
  4. `Selling Timeline`
  5. `Anything else you'd like us to know?` — optional free text.
* Includes `Skip for now` as a secondary action.
* Includes a small `Back` action for returning to Step 1 to edit the basic details.
* Primary completion action: `Submit details`.
* Save-failure message: `We couldn’t save these details. Please try again.`
* `Property Condition` allows one selection from: `Move-in ready`, `Needs minor repairs`, `Needs major repairs`, `Not sure`.
* `Occupancy` allows one selection from: `Owner-occupied`, `Tenant-occupied`, `Vacant`, `Other / Not sure`.
* `Reason for Selling` allows multiple selections from: `Inherited property`, `Moving / Relocating`, `Financial difficulties`, `Too many repairs`, `Tired of being a landlord`, `Downsizing`, `Other`.
* `Selling Timeline` allows one selection from: `As soon as possible`, `Within 1–3 months`, `Within 3–6 months`, `More than 6 months`, `Just exploring`.
* All Step 2 questions are optional.
* `Reason for Selling` guidance: `Select all that apply.`
* Optional free-text length guidance: `Up to 2,000 characters`.
* Single-selection groups include a `Clear selection` action when an answer is selected.

### Component and Semantics

* Property Condition, Occupancy, and Selling Timeline use the shared single-selection controls. Reason for Selling uses the shared multiple-selection controls.
* The optional free-text question uses the shared [Textarea](../form.md#textarea).
* The optional free-text field has a maximum length of 2,000 characters, enforced with `maxlength="2000"`.
* `Clear selection` uses the documented `Text Link` Component with native button semantics (`type="button"`).
* `Skip for now` uses the documented `Text Link` Component with native button semantics (`type="button"`) for the in-page action.
* `Back` uses the documented `Text Link` Component with native button semantics (`type="button"`) for the in-page action.

### Dimensions and Alignment

* `Back` appears above the Step 2 heading, aligned to the left.
* `Skip for now` appears below the supporting copy, before the property questions.
* `Submit details` uses the full available content width on Mobile and content-based width on Tablet and Desktop.
* The Step 2 save-failure message appears above `Submit details`, whether saving was triggered by `Submit details` or `Skip for now`.
* The `Reason for Selling` guidance appears below the question and above its choice options.
* The free-text length guidance appears beside the `Anything else you'd like us to know?` label and wraps below it when space is insufficient.
* `Clear selection` appears below the options of its single-selection group, aligned to the left.

### Spacing

* At all Breakpoints, `S` (`16px`) separates `Back` from the Step 2 heading and the supporting copy from `Skip for now`. The complete introduction retains its shared spacing before the fields.

### Interaction

* Completing Step 2 updates the saved lead with the additional information and shows Success State.
* While a Step 2 save request is pending, the activated completion action (`Submit details` or `Skip for now`) displays `Saving…`.
* `Back` is unavailable while the Step 2 save request is pending. If saving fails, it becomes available again.
* `Submit details` accepts partial answers; unanswered questions do not block completion.
* On first entering Step 2, all choice groups start with no options selected. Revisiting the step preserves the seller's previous selections.
* In Property Condition, Occupancy, and Selling Timeline, `Clear selection` clears only that group's answer and then disappears. It is unavailable while a save request is pending.
* Selecting `Other` in Reason for Selling saves that choice like any other option. Additional explanation is optional and uses the existing `Anything else you'd like us to know?` field.
* `Skip for now` allows completion without supplying the additional details and leads to the same Success State, retaining the Step 1 lead.
* `Back` returns to Step 1 with all previously entered values retained, including any Step 2 values. Those Step 2 values remain available when the seller continues forward again.
* If answers have been entered, `Skip for now` saves them to the existing lead before displaying Success State. Show Success State only after that save succeeds.
* If saving fails after `Submit details` or `Skip for now`, remain on Step 2, preserve all entered answers, show the save-failure message, and allow the seller to retry. Do not display Success State until the required save succeeds.

### Accessibility

* After `Clear selection` clears a group and disappears, move focus to the first radio option in that group without selecting it.
* Each `Clear selection` action has the accessible name `Clear selection for {Question}`, using its group's visible question: `Property Condition`, `Occupancy`, or `Selling Timeline`. The visible action text remains `Clear selection`.

## Success State

### Content

* Heading: `You're all set, {First Name}.`
* Supporting copy: `We’ve received your details. Our team will review them and get in touch to discuss your property.`
* Phone prompt: `Prefer to talk now?`
* Uses the phone number and `tel:` destination defined in [Site Shell → Phone Contact](site-shell.md#phone-contact).
* `{First Name}` uses the first word from the full-name field, ignoring leading and trailing whitespace. If no name is available, the heading is `You're all set.`.

### Component and Semantics

* The phone number uses the documented `Text Link` Component with telephone link semantics.

### Dimensions and Alignment

* The phone prompt and phone link appear below the confirmation message.

### Interaction

* The transition into Success State uses a fade over `200ms` with `ease-out`.
* When `prefers-reduced-motion: reduce` applies, Success State replaces the form immediately without animation.

### Accessibility

* On entering Success State, move keyboard focus to its confirmation heading.

# Decisions Still Required Before Implementation

An approved development-only demo (`NODE_ENV === "development"`) allows testing the existing steps before backend integration. A persistent notice above the form reads `Demo mode — details are not sent or saved. Refresh to reset.` Step 1 retains its validation; valid details advance to Step 2, and either completion action previews Success State. Back preserves both steps' values in React memory; refresh resets the demo. Step changes preview a 200ms transition (100ms outgoing and 100ms incoming), with reduced-motion support and heading focus after the transition. Production retains the current Step 1 save-failure behavior until backend integration.

The following decisions remain unresolved:

* Backend: lead destination, persistence service, submission contract, duplicate handling, recovery behavior, and the mechanism associating both steps with the same lead.

No placeholder implementation, additional services, or assumptions about these decisions are authorized by this specification.
