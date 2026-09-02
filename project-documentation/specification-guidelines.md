# Specification Guidelines

## Purpose

Define categories of specification decisions that may be resolved autonomously within the project’s approved systems. Decisions made under these rules must still be documented precisely in the resulting specification so implementation remains deterministic.

## Approved Specification Authority

### Spacing-Token Selection

When a specification defines the participating elements and their relationship but leaves the exact spacing unresolved, the specification author may select an existing global spacing token without separate approval. The selected token, pixel value, ownership, and any Breakpoint variation must be documented explicitly in the resulting specification.

The decision is governed by these constraints:

- Use only the established global Spacing Scale.
- Preserve existing Component-owned internal spacing.
- Preserve every approved local spacing value.
- Use comparable approved relationships and the intended visual hierarchy as precedent.
- Document spacing tokens using the project’s established `Token` (`pixel value`) convention.
- Do not introduce custom values unless an existing specification already requires proportional or exceptional geometry.
- Do not change element order, Grid allocation, dimensions, or responsive composition while resolving spacing.
- Request approval when multiple reasonable spacing choices would materially change hierarchy, density, or Section height and existing precedent does not resolve the choice.

This authority applies to future specification work and to new unresolved spacing decisions encountered after its approval. It does not authorize retrospective changes to existing specifications.

### Typography-Style Selection

When an element’s content role, semantic role, and hierarchy are defined but its typography remains unresolved, the specification author may select an existing global typography style without separate approval. The selected style and applicable Breakpoint treatment must be documented explicitly in the resulting specification.

The decision is governed by these constraints:

- Use only existing global typography styles.
- Preserve shared Component-owned typography.
- Preserve approved semantic roles and local typography values.
- Use comparable approved elements as precedent.
- Do not introduce custom font sizes, weights, line heights, or letter spacing.
- Do not change the approved content or hierarchy while resolving typography.
- Request approval when multiple reasonable typography choices would materially change hierarchy, wrapping, or composition and existing precedent does not resolve the choice.

This authority applies to future specification work and to new unresolved typography decisions encountered after its approval. It does not authorize retrospective changes to existing specifications.

### Canonical Icon Selection

When a specification requires an icon and clearly defines the icon’s purpose, context, and semantic role but leaves its identity unresolved, the specification author may select the most appropriate canonical Lucide icon without separate approval. The exact icon identity must be documented in the resulting specification.

The decision is governed by these constraints:

- Use only the approved Lucide library.
- Preserve any icon identity already approved locally or by a shared Component.
- Preserve whether the icon is decorative or informative.
- Reuse an established project icon when the same concept already has one.
- Do not introduce custom artwork, another icon library, or a new shared Component.
- Do not add an icon where the specification has not already approved one.
- Request approval when multiple icons communicate materially different meanings or no established icon clearly represents the concept.

This authority applies to future specification work and to new unresolved icon-identity decisions encountered after its approval. It does not authorize retrospective changes to existing specifications.

### Shared Component Selection

When an element’s approved content, semantic role, interaction, and visual purpose match the documented contract of an existing shared Component, the specification author may assign that Component without separate approval. The selected Component and any permitted configurable properties must be documented explicitly in the resulting specification.

The decision is governed by these constraints:

- Use only Components already documented in the Component Library.
- Component-owned properties remain governed by the shared Component.
- Preserve the Component’s core visual, interaction, responsive, semantic, and accessibility contract.
- Use only the Component’s documented configurable properties.
- Preserve approved local content, behavior, hierarchy, and dimensions.
- Existing local requirements must be compatible with the Component contract.
- Do not remove or override an approved local rule in order to make an element fit a shared Component.
- Do not create a new Component, variant, or override.
- Request approval when an existing local requirement conflicts with a Component-owned property.
- Request approval when the element only partially matches the Component contract or multiple Components would produce materially different results.

This authority applies to future specification work and to new unresolved Component-selection decisions encountered after its approval. It does not authorize retrospective changes to existing specifications.

### Border, Radius, and Shadow Token Selection

When a specification has already established that an element uses a Border, Radius, or Shadow but leaves its exact treatment unresolved, the specification author may select the applicable existing global token without separate approval. The selected property, token, and measurable value must be documented explicitly in the resulting specification.

The decision is governed by these constraints:

- The specification must already establish that the element uses the applicable Border, Radius, or Shadow treatment.
- This authority does not permit independently adding or removing a Border, Radius, or Shadow.
- Use only tokens and default treatments already defined by the Visual Design System.
- Preserve shared Component-owned treatments and approved local values.
- Use comparable approved elements and the intended hierarchy as precedent.
- Do not introduce custom colors, thicknesses, radii, or shadows.
- Do not combine multiple separation treatments unless the combination is already approved.
- Request approval when available choices would materially change hierarchy, elevation, or visual emphasis.

This authority applies to future specification work and to new unresolved Border, Radius, and Shadow token-selection decisions encountered after its approval. It does not authorize retrospective changes to existing specifications.

### Color-Token Selection

When a specification has already established an element’s color role but leaves the exact color treatment unresolved, the specification author may select the applicable existing global Color System token without separate approval. The selected token and its role must be documented explicitly in the resulting specification.

The decision is governed by these constraints:

- The specification must already establish the element’s color role.
- Use only existing global Color System tokens.
- Preserve shared Component-owned colors and approved local values.
- Use comparable approved elements as precedent.
- Preserve required foreground readability and contrast.
- Do not introduce new emphasis, hierarchy, or state meaning while resolving the color token.
- Do not introduce custom colors, opacity treatments, Gradients, or new semantic color roles.
- Request approval when available tokens would communicate materially different hierarchy, state, or brand emphasis.

This authority applies to future specification work and to new unresolved color-token decisions encountered after its approval. It does not authorize retrospective changes to existing specifications.

### Native Semantic-Role Selection

When an element’s approved content and interaction unambiguously establish its semantic role, the specification author may assign the appropriate native semantic role without separate approval. The selected role and any content relationship it establishes must be documented explicitly in the resulting specification.

The decision is governed by these constraints:

- Prefer native semantics appropriate to the established content and behavior.
- Preserve the global primary-heading rule and approved local heading hierarchy.
- Preserve shared Component semantics and approved local roles.
- Do not introduce new interaction, landmarks, accessible names, live announcements, focus management, or ARIA-specific relationships under this authority.
- Do not change content order or grouping merely to obtain a preferred semantic structure.
- Request approval when multiple semantic structures are reasonable or the choice would materially affect interaction or accessibility relationships.

This authority applies to future specification work and to new unresolved semantic-role decisions encountered after its approval. It does not authorize retrospective changes to existing specifications.

### Straightforward Responsive Adaptation

When a specification defines the complete content, document order, hierarchy, and Desktop composition but leaves a straightforward narrower-Breakpoint arrangement unresolved, the specification author may define the simplest responsive adaptation consistent with the global Responsive System without separate approval. The exact composition at every affected Breakpoint must be documented explicitly in the resulting specification.

The decision is governed by these constraints:

- Apply this authority only to straightforward responsive adaptation of an already-defined composition.
- Use only the established Breakpoints, Grid, Content Container, and minimum-width rules.
- Preserve content, hierarchy, document order, semantic order, and Component behavior.
- Preserve every approved local responsive rule.
- Use comparable approved responsive compositions as precedent.
- Do not hide, reorder, replace, or duplicate content.
- Do not introduce new interaction patterns, horizontal scrolling, carousels, sticky behavior, overlap, or Breakpoint-specific assets.
- Do not materially change the Section composition or media treatment.
- Request approval when reasonable adaptations would produce materially different hierarchy, interaction, media treatment, or Section composition.

This authority applies to future specification work and to new unresolved straightforward responsive adaptations encountered after its approval. It does not authorize retrospective changes to existing specifications or responsive redesign.
