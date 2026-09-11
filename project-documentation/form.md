# Purpose

Define shared form controls, their presentation, and common validation and submission behavior. These defaults apply to forms unless the consuming page specifies an approved override.

Each page defines its field inventory and order, labels, choice options, required status, value-validation rules, messages, composition, steps, and submission destination.

Design tokens and accessibility requirements inherit from the [Visual Design System](visual-design-system.md) and [Accessibility](accessibility.md). Form controls are defined here; actions use the existing [Button](component-library.md#button) and [Text Link](component-library.md#text-link) contracts when assigned by the page.

# Text Fields

## Component and Semantics

* Each text field uses a native `input` or `textarea`, with its visible `label` associated through matching `for` and `id` values.

## Visual Design

* Single-line inputs and multiline text fields use the global `Surface` background and default `Border` treatment.
* Single-line inputs and multiline text fields use the global `Small` Radius (`8px`).

## Dimensions and Alignment

* Each field has a persistent visible label above the control.
* Single-line inputs have a minimum height of `48px` at all Breakpoints.
* Multiline text fields initially display three rows.

## Spacing

* `XS` (`8px`) separates a visible field label from its control at all Breakpoints.

## Interaction

* Multiline text fields can be resized vertically by the user.

## Accessibility

* When a text field has visible supporting guidance, include the guidance element's ID in the control's `aria-describedby`, preserving any applicable error-message reference.

# Email Field

## Component and Semantics

* Uses the shared [Text Fields](#text-fields) single-line control with `autocomplete="email"`.

## Interaction

* A non-empty email value is validated for basic email-address syntax after trimming leading and trailing whitespace. No email verification code is sent by this field.

# Phone Field

## Component and Semantics

* Uses the shared [Text Fields](#text-fields) single-line control with `autocomplete="tel"` and accepts United States phone numbers only.

## Interaction

* Phone validation accepts input with or without the `+1` prefix and allows spaces, hyphens, and parentheses. Normalize those formatting differences before validating that the number belongs to the United States numbering region; the country code alone does not establish validity.
* Format the phone number progressively with hyphens as the user types, using `216-555-1234` as the complete display format, without a `+1` prefix. Support pasting, deletion, and editing within the number while preserving the logical caret position. An entered or pasted `+1` prefix is normalized away before formatting.

## Technical Requirements

* Validate the normalized phone number under the United States numbering-region rule and submit it as a ten-digit string, without hyphens, spaces, parentheses, or a `+1` prefix. Display formatting is not part of the submitted value.

# Address Autocomplete

## Content

* Address-autocomplete attribution: `Powered by Geoapify`, with `Geoapify` linking to `https://www.geoapify.com/`.
* Address-autocomplete empty-results message: `No matching addresses. You can enter the address manually.`
* Address-autocomplete loading message: `Searching addresses…`.

## Component and Semantics

* Uses the shared [Text Fields](#text-fields) single-line control.
* A manually entered address is valid when non-empty after trimming leading and trailing whitespace; a match in the autocomplete address database is not required.

## Visual Design

* Geoapify attribution uses global `Caption` typography and `Text Secondary` color, remaining visible and legible when the suggestions panel is open.
* The address-suggestions panel uses the global `Surface` background, default `Border` treatment, and `Small` Radius (`8px`).
* The active address suggestion during keyboard navigation and a hovered suggestion use the global `Brand Green Light` background with `Text Primary` text.

## Dimensions and Alignment

* The address-suggestions panel appears below the Address control, matching its width and overlaying the following content without shifting the form layout at any Breakpoint.
* Address-suggestion text wraps onto multiple lines as needed to display the full address within the panel width at every Breakpoint, including Mobile.
* Limit the suggestions panel's height to the available visible viewport space below the address control, accounting for the on-screen keyboard on Mobile. Reserve space for the attribution at the bottom and allow vertical scrolling in the suggestions area when its content exceeds the remaining height. Keep the active keyboard-navigated suggestion in view.
* The Geoapify attribution remains visible at the bottom of the suggestions panel, below and outside the scrollable suggestions area.

## Interaction

* Address offers address autocomplete and allows manual entry when the address cannot be found in the suggestions.
* Autocomplete suggestions are restricted to addresses in the United States.
* Display a maximum of five address suggestions at all Breakpoints.
* Start address-autocomplete searches once the field contains at least three characters, waiting `300ms` after the most recent edit before sending a request.
* Whenever the user edits the address, immediately clear the previous suggestions and active option, including during the debounce interval, so suggestions for the previous value cannot be selected.
* When the address field contains fewer than three characters, close the suggestions panel and clear its suggestions and active option while preserving the remaining text. Cancel any scheduled search and ignore pending results for the previous value so they cannot reopen the panel.
* Manual entry uses the same Address field. Selecting an autocomplete suggestion is not required, and no additional address form is opened.
* When the address suggestions open, no suggestion is active by default. The user explicitly navigates to a suggestion with the arrow keys or selects one by clicking or tapping it.
* Selecting a suggestion fills the Address field with the suggestion's full address, closes the suggestions list, and leaves focus in the editable address field.
* While address suggestions are open, `ArrowDown` and `ArrowUp` navigate the suggestions. `Enter` selects the active suggestion without submitting the form. `Escape` closes the suggestions while preserving the text in the field.
* When the Address field has focus and no suggestion is active, `Enter` invokes the consuming form's submit action using the entered address, subject to that form's normal validation rules.
* While the suggestions panel is open, `Tab` from the Address field moves focus to the Geoapify attribution link and keeps the panel open. `Tab` from that link moves focus to the next field and closes the panel. Neither action selects a suggestion or changes the entered address.
* Clicking or tapping outside the Address field and its suggestions panel closes the panel without selecting a suggestion or changing the entered address.
* Returning focus to the Address field alone does not reopen the suggestions panel. Editing the address triggers a new search under the existing minimum-length and debounce rules.
* If address autocomplete is unavailable, keep the field usable for manual entry, preserve the entered value, and allow submission under the manual-address validation rule without showing an autocomplete-service error message.
* When an address search completes successfully with no matching suggestions, display the empty-results message in the suggestions panel and keep manual entry available. The message is informational, not a selectable suggestion or validation error.
* While an address search is pending, display the loading message in the suggestions panel without blocking typing. The loading message is not a selectable suggestion.

## Accessibility

* Address uses an editable `combobox` with `aria-autocomplete="list"`. Its `aria-expanded` value reflects whether the suggestions are open, and `aria-controls` references the suggestions list when it is displayed.
* The suggestions list uses `listbox` semantics, with each suggestion represented as an `option` with a unique ID. Keyboard focus stays in the address input while navigating suggestions; `aria-activedescendant` references the active option and is removed when no option is active or the list closes.
* Announce the address-autocomplete loading and empty-results messages through a `role="status"` region without moving focus. The status region is separate from the `listbox` and its selectable options.

## Technical Requirements

* Address autocomplete uses [Geoapify Address Autocomplete API](https://apidocs.geoapify.com/docs/geocoding/address-autocomplete/), with suggestions restricted to the United States.
* The Geoapify Free plan requires visible attribution linking to Geoapify, following its [plan requirements](https://www.geoapify.com/pricing/).
* The Geoapify development API key is configured in the Git-ignored `.env.local` as `NEXT_PUBLIC_GEOAPIFY_API_KEY` for browser-side autocomplete requests. A test request with the `http://localhost:3000` Origin returned HTTP `200` and five suggestions. UI integration and browser verification remain pending implementation; add the production site's origin to the key's allowed origins before launch.
* Display address-search results only when they belong to the latest search request and match the field's current value. Ignore responses from superseded requests so older results cannot replace current suggestions.
* Once the user closes the suggestions panel, pending search responses must not reopen it. A subsequent address edit may start a new search under the documented search rules.

# Choice Controls

## Component and Semantics

* Single-selection groups use native radio controls. Multiple-selection groups use native checkbox controls.
* Each choice group uses a `fieldset`, with its visible question as the `legend` identifying the group.
* Each option's visible text is a `label` associated with its native radio or checkbox control through matching `for` and `id` values.

## Visual Design

* Choice options have a bordered, clickable presentation. Unselected options use the global `Surface` background and default `Border` treatment.
* Choice-option containers use the global `Small` Radius (`8px`).
* Selected options use `Brand Green` for the border and `Brand Green Light` for the background, retaining the default border thickness and style.
* Hovering an unselected, enabled choice option changes its border color to `Brand Green` while retaining the global `Surface` background.
* Each option displays a visible radio or checkbox indicator reflecting its checked state, so selection is not communicated by color alone.

## Interaction

* The label covers the full option container so clicking anywhere in the enabled option activates its control.

## Accessibility

* When a choice group has visible supporting guidance, include the guidance element's ID in the group's `fieldset` `aria-describedby`, preserving any applicable error-message reference.

# Validation Feedback

## Component and Semantics

* Forms use `novalidate` to suppress the browser's built-in validation popups. Validation and error presentation follow this specification and the consuming page's rules; semantic field attributes such as `required` and input types remain in place.

## Visual Design

* While a text field displays a validation error, its border uses the global `Error` color, retaining its specified thickness and style.
* Text-field error messages use the global `Error` color.
* A choice group's error message uses the global `Error` color. Its option borders retain their normal unselected, selected, and hover treatments.

## Dimensions and Alignment

* A text-field error message appears below its control. When supporting guidance is present, keep that guidance visible and place the error message below it.
* A choice group displays one group-level validation error message below all of its options, rather than repeating the message for individual options.

## Interaction

* On initial form display, show no validation errors, including for empty required fields. Begin displaying errors only through the documented blur, group-exit, and submission triggers.
* Display one validation error at a time per field or choice group. For an empty required value, show the required-value message before considering format or other value constraints. Once a value is supplied, evaluate the remaining applicable rules defined by the consuming page.
* An empty optional field does not trigger format-validation errors. When a value is supplied, validate it against the consuming page's applicable rules.
* Show text-field validation errors after the field loses focus or when the form's submit action is activated. Preserve all entered values when errors are displayed.
* For choice groups, run validation when focus leaves the entire group or when the form's submit action is activated. Moving focus between options or other controls within the same group does not trigger validation.
* While a text field displays a validation error, revalidate it as the user types and remove the error as soon as the value is valid.
* While a choice group displays a validation error, revalidate it immediately when its selection changes and remove the error as soon as the group's answer is valid.

## Accessibility

* When submission encounters validation errors, move keyboard focus to the first invalid field in the page's documented field order.
* If the first invalid field is a choice group, move focus to its first enabled option in document order without changing the group's selection.
* While a text field displays a validation error, set `aria-invalid="true"` on its control and include the error message's ID in the control's `aria-describedby`, preserving any existing references to supporting text.
* While a choice group displays a validation error, set `aria-invalid="true"` on its `fieldset` and include the group error message's ID in the fieldset's `aria-describedby`, preserving any existing references to group guidance.
* When the error clears, remove its reference from `aria-describedby` and clear the invalid state. Preserve references to any remaining supporting text.

# Submission State

## Visual Design

* Save-failure messages use the global `Error` color.
* While a save request is pending, text fields and choice controls retain their existing colors, opacity, and legibility, including selected states, without additional dimming. The submit action communicates the pending state using the page-defined saving label.

## Dimensions and Alignment

* While displaying its saving label, the activated submission control retains at least its width immediately before the label changed. It may grow if needed to accommodate the saving label.

## Interaction

* Fields and choice controls cannot be edited while a save request is pending. Preserve their displayed values and restore editing if the save fails.
* Before starting a save request, validate the form against the consuming page's applicable validation rules. If validation fails, display the validation errors without sending the request or entering the saving state. A later submission attempt validates the form again.
* Incomplete or invalid field values do not disable the submit action. Keep it available so activating it can show validation feedback; the pending-save restriction still applies.
* While a save request is pending, prevent any additional submission of the same form, including repeated clicks, keyboard submission with `Enter`, and alternative submission actions. This restriction remains in effect until the active request completes.
* Clear any previous save-failure message when a new save request begins. Display the applicable failure message again only if that request fails.

## Accessibility

* Announce the page-defined saving status and save-failure message to screen readers without moving focus.