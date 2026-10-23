# Purpose

Provide a focused conversion flow for homeowners requesting a cash offer, collecting the lead and any optional message in one submission.

# Page Routing

* Canonical route: `/get-cash-offer`.

# Header and Footer

* Uses the shared [Minimal Header](../shared-sections.md#minimal-header).
* Uses the shared [Minimal Footer](../shared-sections.md#minimal-footer).
* On this page, the Minimal Header and Minimal Footer use transparent backgrounds so the shared page ribbon continues behind them. Their foreground content and System Lines retain their shared styling.

# Main Form Area

## Purpose

Guide sellers through submitting their contact and property details to request a cash offer, keeping the process focused and confirming that their information has been received.

## Layout

* One large, horizontally centered Form Card is the primary element, with an abstract brand background surrounding it.
* The Form Card's content follows one vertical column at all Breakpoints.
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

* Contains the form or Success State.
* The form uses native form semantics. The active state's primary heading uses `H1` semantics.
* Uses the shared [Form](../form.md) definitions for text fields, validation feedback, and submission state.

### Visual Design

* Uses opaque white global `Surface`, global `Medium` Radius (`12px`), and subtle separation from the background. The Card renders above the ribbon so the graphic does not interfere with form readability.
* Uses the global `Floating` Shadow for separation from the background.
* State headings use global `H2` typography. Supporting copy uses global `Body` typography and `Text Secondary`.

### Dimensions and Alignment

* Width: `100%` of the available width, up to a maximum of `640px`, while preserving global page padding.
* The same Card container is retained for the form and Success State, with stable width and placement while its contents change. Its top edge remains at the same position within the main form area throughout the flow.
* Card height is determined by the content of the current state. The Card grows or shrinks downward.

### Spacing

* Internal Padding: `XL` (`48px`) on Desktop and Tablet; `L` (`32px`) on Mobile.
* The form begins with its heading.
* `S` (`16px`) separates a heading from its supporting copy where present.
* `L` (`32px`) separates the step introduction from its fields.
* `M` (`24px`) separates adjacent fields.
* `L` (`32px`) separates the final field from the primary action.

### Interaction

* Contents change inside the existing Card; the page does not navigate to another route.
* The form has no Step 2; do not show Success State before the required save has succeeded.

### Accessibility

* On entering Success State, move keyboard focus to its heading.

## Form

### Content

* Heading: `Let's get you started`
* Supporting copy: `Tell us a few basic details about the house you'd like to sell. It only takes about a minute.`
* Fields, in canonical order:
  1. `Property Address`
  2. `Your Name`
  3. `Phone Number`
  4. `Email Address`
  5. `Anything else you'd like us to know?` — optional free text.
  6. Optional email-marketing consent: `Yes, email me occasional updates and offers from Your House in Cash. I can unsubscribe at any time. See the Privacy Policy.`
* Primary action: `Get My Cash Offer`.
* Phone Number placeholder: `e.g. 216-555-1234`.
* Save-failure message: `We couldn’t save your details. Please try again.`
* Reassurance line below the primary action: `Your information stays private`, preceded by a decorative Lucide `LockKeyhole` icon.
* Optional free-text length guidance: `Up to 2,000 characters`.
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
* The optional message uses the shared [Textarea](../form.md#textarea), with `maxlength="2000"`.
* The email-marketing checkbox follows the shared [Optional Marketing Email Consent](../form.md#optional-marketing-email-consent) requirements. It is optional and unchecked by default.
* `Your Name` is valid when non-empty after trimming leading and trailing whitespace. It does not require two words or restrict the language or script used.

### Dimensions and Alignment

* The save-failure message appears above `Get My Cash Offer`.
* `Get My Cash Offer` uses the full available field width at all Breakpoints. The reassurance icon and text form one horizontally centered group beneath it, vertically center-aligned with an `XS` (`8px`) gap. The icon uses the global Small Icon size (`16px`) and inherits the reassurance text color.

### Spacing

* `XS` (`8px`) separates `Get My Cash Offer` from the reassurance line.

### Interaction

* Completing the form saves the lead, including any optional message, before showing Success State.
* After persistence, send an immediate best-effort internal lead notification and a transactional seller confirmation email. An email-delivery failure does not change the saved lead or prevent Success State.
* While the lead-save request is pending, the primary action displays `Saving…`.
* If saving fails, remain on the form, preserve all entered values, show the save-failure message, and restore the primary action to `Get My Cash Offer` so the seller can retry.

### Technical Requirements

* Open backend decisions are listed under [Decisions Still Required Before Implementation](#decisions-still-required-before-implementation).
* `Your Name` uses `autocomplete="name"` for browser autofill.

### Property Address

#### Content

* Property Address guidance: `Enter the street address, city, state, and ZIP code.`
* Required-field error message: `Please enter the property address.`

#### Component and Semantics

* Uses the shared [Address Field](../form.md#address-field).

#### Dimensions and Alignment

* The Property Address guidance appears below the address field.

## Success State

### Content

* Heading: `You're all set, {First Name}.`
* Supporting copy: `We’ve received your details. Our team will review them and get in touch to discuss your property.`
* Phone prompt: `Prefer to talk now?`
* Uses the phone number and `tel:` destination defined in [Shared Sections → Phone Contact](../shared-sections.md#phone-contact).
* `{First Name}` uses the first word from the full-name field, ignoring leading and trailing whitespace. If no name is available, the heading is `You're all set.`.

### Component and Semantics

* The phone number uses the documented `Text Link` Component with telephone link semantics.

### Dimensions and Alignment

* The phone prompt and phone link appear below the confirmation message.

### Interaction

* The transition into Success State uses a fade over `200ms` with `ease-out`.
* When `prefers-reduced-motion: reduce` applies, Success State replaces the form immediately without animation.

## Seller Confirmation Email

* Subject: `We received your cash-offer request`.
* Show the Your House in Cash logo from the public `/brand/Logo.jpeg` asset at the top of the email.
* Greet the seller by first name when available.
* Thank the seller for reaching out about the submitted property address, state that Noah will review it shortly, and reassure them that the conversation carries no pressure or obligation.
* Invite the seller to reply to the email with any questions and sign the email from Noah at Your House in Cash.

### Accessibility

* On entering Success State, move keyboard focus to its confirmation heading.

# Decisions Still Required Before Implementation

The following decisions remain unresolved:

* Backend: lead destination, persistence service, submission contract, duplicate handling, and recovery behavior.

No placeholder implementation, additional services, or assumptions about these decisions are authorized by this specification.
