# Purpose

Define shared form controls, their presentation, and common validation and submission behavior. These defaults apply to forms unless the consuming page specifies an approved override.

Each page defines its field inventory and order, labels, choice options, required status, value-validation rules, messages, composition, steps, and submission destination.

Design tokens and accessibility requirements inherit from the [Visual Design System](visual-design-system.md) and [Accessibility](accessibility.md). Form controls are defined here; actions use the existing [Button](component-library.md#button) and [Text Link](component-library.md#text-link) contracts when assigned by the page.

# Text Fields

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

# Choice Controls

## Component and Semantics

* Single-selection groups use native radio controls. Multiple-selection groups use native checkbox controls.
* Each choice group uses a `fieldset`, with its visible question as the `legend` identifying the group.

## Visual Design

* Choice options have a bordered, clickable presentation. Unselected options use the global `Surface` background and default `Border` treatment.
* Choice-option containers use the global `Small` Radius (`8px`).
* Selected options use `Brand Green` for the border and `Brand Green Light` for the background, retaining the default border thickness and style.
* Hovering an unselected, enabled choice option changes its border color to `Brand Green` while retaining the global `Surface` background.
* Each option displays a visible radio or checkbox indicator reflecting its checked state, so selection is not communicated by color alone.

# Validation Feedback

## Visual Design

* While a field displays a validation error, its border uses the global `Error` color, retaining its specified thickness and style.
* The corresponding error message below the field uses the global `Error` color.

## Dimensions and Alignment

* When a field has supporting guidance, keep that guidance visible while an error is displayed and place the error message below it.

## Interaction

* Show field-validation errors below the corresponding field after it loses focus or when the form's submit action is activated. Preserve all entered values when errors are displayed.
* While a field displays a validation error, revalidate it as the user types and remove the error as soon as the value is valid.

## Accessibility

* When submission encounters validation errors, move keyboard focus to the first invalid field in the page's documented field order.
* While a field displays a validation error, set `aria-invalid="true"` on its control and include the error message's ID in the control's `aria-describedby`, preserving any existing references to supporting text.
* When the error clears, remove its reference from `aria-describedby` and clear the invalid state. Preserve references to any remaining supporting text.

# Submission State

## Visual Design

* Save-failure messages use the global `Error` color.
* While a save request is pending, text fields and choice controls retain their existing colors, opacity, and legibility, including selected states, without additional dimming. The submit action communicates the pending state using the page-defined saving label.

## Dimensions and Alignment

* While displaying its saving label, the activated submission control retains at least its width immediately before the label changed. It may grow if needed to accommodate the saving label.

## Interaction

* Fields and choice controls cannot be edited while a save request is pending. Preserve their displayed values and restore editing if the save fails.
* Clear any previous save-failure message when a new save request begins. Display the applicable failure message again only if that request fails.

## Accessibility

* Announce the page-defined saving status and save-failure message to screen readers without moving focus.
