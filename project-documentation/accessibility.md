# Accessibility

## Purpose

Provide one global source of truth for accessibility requirements that apply repeatedly across Sections and Components.

## Scope and Inheritance

These requirements apply globally unless a Component or Element specification explicitly defines an approved override.

## Document, Reading, and Focus Order

Reading and keyboard focus order preserve the intended logical document order across all Breakpoints.

Visual layout may position elements side by side without changing their reading or keyboard focus order. Any approved order exception is defined in the relevant Section or Element specification.

## Semantic Structure

### Primary Heading

Each page has exactly one primary heading using `H1` semantics.

## Keyboard and Focus

### Focus-Visible Treatment

All keyboard-focusable interactive elements use a `2px` solid Brand Green Dark outline with a `3px` offset when focus is visibly indicated.

The global outline supplements any documented focus-specific change to text, icon, background, or another visual state unless that specification explicitly states otherwise.

## Decorative Content

### Decorative Icons

An icon classified as decorative is hidden from assistive technologies and does not receive keyboard focus.

### Decorative Images

An image classified as decorative uses empty alternative text: `alt=""`.

## Local Ownership

Local specifications define accessibility only when the decision depends on the specific content, semantic role, interaction, or exception of that element.
