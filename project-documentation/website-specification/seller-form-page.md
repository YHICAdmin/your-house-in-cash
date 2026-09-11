# Purpose

Provide a focused conversion flow for homeowners requesting a cash offer. Collect and save the basic lead first, then invite the seller to supply additional property information with minimal typing.

# Area Page Routing

* Canonical route: `/get-cash-offer`.

# Header and Footer

* Uses the shared [Minimal Header](site-shell.md#minimal-header).
* Uses the shared [Minimal Footer](site-shell.md#minimal-footer).

# Main Form Area

## Purpose

Guide sellers through submitting their contact and property details to request a cash offer, keeping the process focused and confirming that their information has been received.

## Layout

* One large, horizontally centered Form Card is the primary element, with an abstract brand background surrounding it.
* The Form Card begins after the main form area's inherited global Section top padding, measured from the bottom of the Minimal Header.
* Do not use a `5–1–6` composition, a two-column content composition, an additional Sidebar, or marketing Cards around the form.

### Page Background

* Composition reference: the Stripe form-page screenshot supplied by the user, `Screenshot 2026-09-11 090850.png`. It guides the composition; colors use the site's established brand palette.
* A broad, curved graphic ribbon enters from the top of the main form area, passes behind the Form Card, and continues down its right side.
* No house photography, literal house illustration, promotional Cards, or additional Sidebar.

* The ribbon's gradient transitions from global `Brand Green` to `Brand Green Light` and then the white `Background`. Concentrate the strongest green to the right of the Form Card, with soft transitions and generous surrounding white space.
* The graphic is confined to the main form area. The Minimal Header retains its approved white background.
* Uses the global Line System and its layering rules.
* Exact ribbon geometry, gradient stops, and opacity remain TBD.

#### Responsive Behavior

* On Tablet, the ribbon retains the Desktop composition, scaled to the available width: it enters from the top, passes behind the Form Card, and continues down its right side.
* On Mobile, portions of the ribbon remain visible above and to the right of the Form Card. The graphic is clipped at the viewport edges without introducing horizontal scrolling.

#### Technical Requirements

* The ribbon is a repository-owned SVG asset with gradients.

## Form Card

### Component and Semantics

* Contains the Progress indicator and the currently displayed form step, or Success State without the Progress indicator.
* Each form step uses native form semantics. The active state's primary heading uses `H1` semantics.
* Uses the shared [Form](../form.md) definitions for text fields, choice controls, validation feedback, and submission state.

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
* In Step 1, `M` (`24px`) separates Progress from the heading at all Breakpoints.
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

### Responsive Behavior

* At narrower Breakpoints, the Card fits within the available page width and global page padding. Form fields remain in one vertical column.

## Progress

### Content

* Two steps, in order: `Your details` → `About the house`.

### Component and Semantics

* Uses ordered-list semantics, with each step represented as a list item.

### Visual Design

* Minimal treatment at the top of the Card, using global `Body Small` typography.
* The active step uses `Brand Green`; the inactive step uses neutral `Text Muted`.

### Interaction

* Displays Step 1 as active initially and Step 2 as active after the basic lead has been saved and the second step is displayed.
* The Progress indicator is informational only; its steps are not clickable.
* The Progress indicator is hidden in Success State.

### Accessibility

* The current step is marked with `aria-current="step"`.

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
* Phone Number placeholder: `216-555-1234`.
* Save-failure message: `We couldn’t save your details. Please try again.`
* Reassurance line below the primary action: `Your information stays private. No obligation.`
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
* `Your Name` is a single full-name field.
* `Phone Number` accepts United States phone numbers only.
* `Your Name` is valid when non-empty after trimming leading and trailing whitespace. It does not require two words or restrict the language or script used.
* `Email Address` is validated for basic email-address syntax after trimming leading and trailing whitespace. No email verification code is sent as part of this flow.
* Phone Number validation accepts input with or without the `+1` prefix and allows spaces, hyphens, and parentheses. Normalize those formatting differences before validating that the number belongs to the United States numbering region; the country code alone does not establish validity.

### Dimensions and Alignment

* All four fields appear in one vertical column at every Breakpoint.
* The Step 1 save-failure message appears above `Continue`.
* `Continue` uses the full available content width on Mobile and content-based width on Tablet and Desktop.

### Spacing

* `XS` (`8px`) separates `Continue` from the reassurance line.

### Interaction

* Completing Step 1 saves the basic lead **before** advancing to Step 2.
* Format Phone Number progressively with hyphens as the seller types, using `216-555-1234` as the complete display format, without a `+1` prefix. Support pasting, deletion, and editing within the number while preserving the logical caret position. An entered or pasted `+1` prefix is normalized away before formatting.
* Step 2 is displayed only after successful persistence has been confirmed; merely holding values in client memory does not satisfy this requirement.
* While the lead-save request is pending, the primary action displays `Saving…` and prevents repeated submission until the request completes.
* If saving fails, remain on Step 1, preserve all entered values, show the save-failure message, and restore the primary action to `Continue` so the seller can retry.

### Technical Requirements

* Lead destination, persistence service, submission contract, duplicate handling, and recovery behavior are TBD.
* Enable browser autofill for contact details: `Your Name` uses `autocomplete="name"`, `Phone Number` uses `autocomplete="tel"`, and `Email Address` uses `autocomplete="email"`.
* Validate the normalized phone number under the United States numbering-region rule and submit it as a ten-digit string, without hyphens, spaces, parentheses, or a `+1` prefix. Display formatting is not part of the submitted value.
* Step 2 information must be associated with the lead saved in Step 1 rather than treated as an unrelated lead. The association mechanism is TBD.
* When Step 1 is revisited for editing, `Continue` saves the revised details to the same lead before returning to Step 2; it does not create a new lead.

### Property Address

#### Content

* Property Address guidance: `Enter the street address, city, state, and ZIP code.`
* Address-autocomplete attribution: `Powered by Geoapify`, with `Geoapify` linking to `https://www.geoapify.com/`.
* Address-autocomplete empty-results message: `No matching addresses. You can enter the address manually.`
* Address-autocomplete loading message: `Searching addresses…`.
* Required-field error message: `Please enter the property address.`

#### Component and Semantics

* A manually entered `Property Address` is valid when non-empty after trimming leading and trailing whitespace; a match in the autocomplete address database is not required.

#### Visual Design

* Geoapify attribution uses global `Caption` typography and `Text Secondary` color, remaining visible and legible when the suggestions panel is open.
* The address-suggestions panel uses the global `Surface` background, default `Border` treatment, and `Small` Radius (`8px`).
* The active address suggestion during keyboard navigation and a hovered suggestion use the global `Brand Green Light` background with `Text Primary` text.

#### Dimensions and Alignment

* The Property Address guidance appears below the address field.
* The address-suggestions panel appears below the Property Address control, matching its width and overlaying the following content without shifting the form layout at any Breakpoint.
* Address-suggestion text wraps onto multiple lines as needed to display the full address within the panel width at every Breakpoint, including Mobile.
* Limit the suggestions panel's height to the available visible viewport space below the address control, accounting for the on-screen keyboard on Mobile. Reserve space for the attribution at the bottom and allow vertical scrolling in the suggestions area when its content exceeds the remaining height. Keep the active keyboard-navigated suggestion in view.
* The Geoapify attribution remains visible at the bottom of the suggestions panel, below and outside the scrollable suggestions area.

#### Interaction

* Property Address offers address autocomplete and allows manual entry when the address cannot be found in the suggestions.
* Autocomplete suggestions are restricted to addresses in the United States.
* Display a maximum of five address suggestions at all Breakpoints.
* Start address-autocomplete searches once the field contains at least three characters, waiting `300ms` after the most recent edit before sending a request.
* Whenever the seller edits the address, immediately clear the previous suggestions and active option, including during the debounce interval, so suggestions for the previous value cannot be selected.
* When the address field contains fewer than three characters, close the suggestions panel and clear its suggestions and active option while preserving the remaining text. Cancel any scheduled search and ignore pending results for the previous value so they cannot reopen the panel.
* Manual entry uses the same Property Address field. Selecting an autocomplete suggestion is not required, and no additional address form is opened.
* When the address suggestions open, no suggestion is active by default. The seller explicitly navigates to a suggestion with the arrow keys or selects one by clicking or tapping it.
* Selecting a suggestion fills the Property Address field with the suggestion's full address, closes the suggestions list, and leaves focus in the editable address field.
* While address suggestions are open, `ArrowDown` and `ArrowUp` navigate the suggestions. `Enter` selects the active suggestion without submitting the form. `Escape` closes the suggestions while preserving the text in the field.
* When the Property Address field has focus and no suggestion is active, `Enter` invokes `Continue` using the entered address, subject to the normal validation of all Step 1 fields.
* While the suggestions panel is open, `Tab` from the Property Address field moves focus to the Geoapify attribution link and keeps the panel open. `Tab` from that link moves focus to the next field and closes the panel. Neither action selects a suggestion or changes the entered address.
* Clicking or tapping outside the Property Address field and its suggestions panel closes the panel without selecting a suggestion or changing the entered address.
* Returning focus to the Property Address field alone does not reopen the suggestions panel. Editing the address triggers a new search under the existing minimum-length and debounce rules.
* If address autocomplete is unavailable, keep the field usable for manual entry, preserve the entered value, and allow submission under the manual-address validation rule without showing an autocomplete-service error message.
* When an address search completes successfully with no matching suggestions, display the empty-results message in the suggestions panel and keep manual entry available. The message is informational, not a selectable suggestion or validation error.
* While an address search is pending, display the loading message in the suggestions panel without blocking typing. The loading message is not a selectable suggestion.

#### Accessibility

* Property Address uses an editable `combobox` with `aria-autocomplete="list"`. Its `aria-expanded` value reflects whether the suggestions are open, and `aria-controls` references the suggestions list when it is displayed.
* The suggestions list uses `listbox` semantics, with each suggestion represented as an `option` with a unique ID. Keyboard focus stays in the address input while navigating suggestions; `aria-activedescendant` references the active option and is removed when no option is active or the list closes.
* Announce the address-autocomplete loading and empty-results messages through a `role="status"` region without moving focus. The status region is separate from the `listbox` and its selectable options.

#### Technical Requirements

* Address autocomplete uses [Geoapify Address Autocomplete API](https://apidocs.geoapify.com/docs/geocoding/address-autocomplete/), with suggestions restricted to the United States.
* The Geoapify Free plan requires visible attribution linking to Geoapify, following its [plan requirements](https://www.geoapify.com/pricing/).
* Geoapify account/API-key setup and integration remain pending implementation.
* Display address-search results only when they belong to the latest search request and match the field's current value. Ignore responses from superseded requests so older results cannot replace current suggestions.
* Once the seller closes the suggestions panel, pending search responses must not reopen it. A subsequent address edit may start a new search under the documented search rules.

## Step 2 — About the House

### Content

* Heading: `Tell us a little more about the house`
* Supporting copy: `These details help us understand your property. All questions are optional—answer what you can or skip this step.`
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
* The optional free-text question uses the shared multiline text field.
* The optional free-text field has a maximum length of 2,000 characters, enforced with `maxlength="2000"`.
* `Clear selection` uses the documented `Text Link` Component with native button semantics (`type="button"`).
* `Skip for now` uses the documented `Text Link` Component with native button semantics (`type="button"`) for the in-page action.
* `Back` uses the documented `Text Link` Component with native button semantics (`type="button"`) for the in-page action.

### Dimensions and Alignment

* `Back` appears between the Progress indicator and the Step 2 heading, aligned to the left.
* `Skip for now` appears below `Submit details`.
* `Submit details` uses the full available content width on Mobile and content-based width on Tablet and Desktop.
* The Step 2 save-failure message appears above `Submit details`, whether saving was triggered by `Submit details` or `Skip for now`.
* Within each question group, choice options use content-based widths and form rows that wrap to fit the available width at all Breakpoints.
* The `Reason for Selling` guidance appears below the question and above its choice options.
* The free-text length guidance appears beside the `Anything else you'd like us to know?` label and wraps below it when space is insufficient.
* `Clear selection` appears below the options of its single-selection group, aligned to the left.

### Spacing

* At all Breakpoints, `M` (`24px`) separates Progress from `Back`, and `S` (`16px`) separates `Back` from the Step 2 heading.

### Interaction

* Completing Step 2 updates the saved lead with the additional information and shows Success State within the same Card.
* While a Step 2 save request is pending, the activated completion action displays `Saving…`, and both `Submit details` and `Skip for now` prevent further submission until the request completes.
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

* Replaces the form contents inside the same Card.
* The phone number uses the documented `Text Link` Component with telephone link semantics.

### Dimensions and Alignment

* The phone prompt and phone link appear below the confirmation message.

### Interaction

* No separate Thank You Page or route is introduced.
* The transition into Success State uses a fade over `200ms` with `ease-out`.
* When `prefers-reduced-motion: reduce` applies, Success State replaces the form immediately without animation.

### Accessibility

* On entering Success State, move keyboard focus to its confirmation heading.

# Decisions Still Required Before Implementation

The following decisions remain unresolved:

* Page Background: exact ribbon geometry, gradient stops, and opacity.
* Backend: lead destination, persistence service, submission contract, duplicate handling, recovery behavior, and the mechanism associating both steps with the same lead.

No placeholder implementation, additional services, or assumptions about these decisions are authorized by this specification.
