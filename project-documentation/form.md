# Purpose

Define shared form controls, their presentation, and common validation and submission behavior. These defaults apply to forms unless the consuming page specifies an approved override.

Each page defines its field inventory and order, labels, choice options, required status, value-validation rules, messages, composition, steps, and submission destination.

Design tokens and accessibility requirements inherit from the [Visual Design System](visual-design-system.md) and [Accessibility](accessibility.md). Form controls are defined here; actions use the existing [Button](component-library.md#button) and [Text Link](component-library.md#text-link) contracts when assigned by the page.

# Field

## Purpose

Provide the shared foundation for identifying a field, presenting guidance and validation feedback, and exposing that information accessibly.

All field types below inherit these rules. Each type defines the semantic element that owns its label, guidance, and errors.

## Content

* The consuming page defines the visible label or question, supporting guidance where needed, required status, and error-message wording.

## Visual Design

* Validation error messages use the global `Error` color.

## Validation

* On initial form display, show no validation errors, including for empty required fields. Begin displaying errors only through the documented blur, group-exit, and submission triggers.
* Display one validation error at a time per field or choice group. For an empty required value, show the required-value message before considering format or other value constraints. Once a value is supplied, evaluate the remaining applicable rules defined by the consuming page.
* An empty optional field does not trigger format-validation errors. When a value is supplied, validate it against the consuming page's applicable rules.

## Accessibility

* Associate visible supporting guidance with the field's semantic owner through `aria-describedby`, preserving any applicable error-message reference.
* When the error clears, remove its reference from `aria-describedby` and clear the invalid state. Preserve references to any remaining supporting text.

# Text Field

## Purpose

Collect a value in a single line of editable text.

Inherits [Field](#field).

## Component and Semantics

* Uses a native `input`, with its visible `label` associated through matching `for` and `id` values.

## Visual Design

* Uses the global `Surface` background, default `Border` treatment, and global `Small` Radius (`8px`).
* While a text field displays a validation error, its border uses the global `Error` color, retaining its specified thickness and style.

## Dimensions and Alignment

* Each field has a persistent visible label above the control.
* Single-line inputs have a minimum height of `48px` at all Breakpoints.
* A text-field error message appears below its control. When supporting guidance is present, keep that guidance visible and place the error message below it.

## Spacing

* `XS` (`8px`) separates a visible field label from its control at all Breakpoints.

## Validation

* Show text-field validation errors after the field loses focus or when the form's submit action is activated. Preserve all entered values when errors are displayed.
* While a text field displays a validation error, revalidate it as the user types and remove the error as soon as the value is valid.

## Accessibility

* When a text field has visible supporting guidance, include the guidance element's ID in the control's `aria-describedby`, preserving any applicable error-message reference.
* While a text field displays a validation error, set `aria-invalid="true"` on its control and include the error message's ID in the control's `aria-describedby`, preserving any existing references to supporting text.

# Textarea

## Purpose

Collect longer free-form text across multiple lines.

Inherits [Text Field](#text-field), replacing its single-line control with a multiline control. Its height is governed by the row count below rather than the single-line minimum-height rule.

## Component and Semantics

* Uses a native `textarea`, with its visible `label` associated through matching `for` and `id` values.

## Dimensions and Alignment

* Multiline text fields initially display three rows.

## Interaction

* Multiline text fields can be resized vertically by the user.

# Email Field

## Purpose

Collect an email address and validate its format.

## Component and Semantics

* Uses the shared [Text Field](#text-field) single-line control with `autocomplete="email"`.

## Validation

* A non-empty email value is validated for basic email-address syntax after trimming leading and trailing whitespace. No email verification code is sent by this field.

# Phone Field

## Purpose

Collect a United States phone number with readable formatting and a normalized submission value.

## Component and Semantics

* Uses the shared [Text Field](#text-field) single-line control with `autocomplete="tel"` and accepts United States phone numbers only.

## Validation

* Phone validation accepts input with or without the `+1` prefix and allows spaces, hyphens, and parentheses. Normalize those formatting differences before validating that the number belongs to the United States numbering region; the country code alone does not establish validity.

## Interaction

* Format the phone number progressively with hyphens as the user types, using `216-555-1234` as the complete display format, without a `+1` prefix. Support pasting, deletion, and editing within the number while preserving the logical caret position. An entered or pasted `+1` prefix is normalized away before formatting.

## Technical Requirements

* Validate the normalized phone number under the United States numbering-region rule and submit it as a ten-digit string, without hyphens, spaces, parentheses, or a `+1` prefix. Display formatting is not part of the submitted value.

# Address Field

## Purpose

Use address autocomplete as a form field with shared labels, validation, and submission behavior.

## Component and Semantics

* Inherits [Text Field](#text-field) and uses [Address Autocomplete](component-library.md#address-autocomplete). Text Field owns the input's presentation, label, guidance, and validation feedback; the Component owns suggestions, search, and selection behavior.

## Validation

* A manually entered address is valid when non-empty after trimming leading and trailing whitespace; a match in the autocomplete address database is not required.

## Interaction

* When the address input has focus and no suggestion is active, `Enter` invokes the consuming form's submit action using the entered address, subject to that form's normal validation rules.
* If address autocomplete is unavailable, the manual-address validation rule still applies.

# Choice Controls

## Purpose

Let users select one or more answers from a defined set of options.

Inherits [Field](#field).

## Component and Semantics

* Single-selection groups use native radio controls. Multiple-selection groups use native checkbox controls.
* Each choice group uses a `fieldset`, with its visible question as the `legend` identifying the group.
* Each option's visible text is a `label` associated with its native radio or checkbox control through matching `for` and `id` values.

## Visual Design

* Choice options have a bordered, clickable presentation. Unselected options use the global `Surface` background and default `Border` treatment.
* Choice-option containers use the global `Small` Radius (`8px`).
* Selected options use `Brand Green` for the border and `Brand Green Light` for the background, retaining the default border thickness and style.
* Hovering an unselected, enabled choice option changes its border color to `Brand Green` while retaining the global `Surface` background.
* Option borders retain their normal unselected, selected, and hover treatments when a group validation error is displayed.
* Each option displays a visible radio or checkbox indicator reflecting its checked state, so selection is not communicated by color alone.

## Dimensions and Alignment

* A choice group displays one group-level validation error message below all of its options, rather than repeating the message for individual options.

## Validation

* For choice groups, run validation when focus leaves the entire group or when the form's submit action is activated. Moving focus between options or other controls within the same group does not trigger validation.
* While a choice group displays a validation error, revalidate it immediately when its selection changes and remove the error as soon as the group's answer is valid.

## Interaction

* The label covers the full option container so clicking anywhere in the enabled option activates its control.

## Accessibility

* When a choice group has visible supporting guidance, include the guidance element's ID in the group's `fieldset` `aria-describedby`, preserving any applicable error-message reference.
* While a choice group displays a validation error, set `aria-invalid="true"` on its `fieldset` and include the group error message's ID in the fieldset's `aria-describedby`, preserving any existing references to group guidance.

# Submission State

## Component and Semantics

* Forms use `novalidate` to suppress the browser's built-in validation popups. Validation and error presentation follow this specification and the consuming page's rules; semantic field attributes such as `required` and input types remain in place.

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

* When submission encounters validation errors, move keyboard focus to the first invalid field in the page's documented field order.
* If the first invalid field is a choice group, move focus to its first enabled option in document order without changing the group's selection.
* Announce the page-defined saving status and save-failure message to screen readers without moving focus.
