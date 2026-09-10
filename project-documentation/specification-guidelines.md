# Specification Guidelines

## Purpose

Define categories of specification decisions that may be resolved autonomously within the project’s approved systems. When authoring a new specification requirement or resolving an explicitly unresolved requirement, apply the existing global rules and the applicable authority under `Decisions Codex Can Make Without Approval`. If the applicable authority’s prerequisites yield one deterministic decision, make that decision without separate approval and document it precisely.

If no existing rule or authority under `Decisions Codex Can Make Without Approval` permits the required decision, or materially different valid outcomes remain, request the smallest user decision required. Do not invent the missing product, design, content, interaction, navigation, or architectural decision.

During a specification audit, treat an existing specified requirement as intentional. The authorities under `Decisions Codex Can Make Without Approval` do not permit changing, removing, consolidating, relocating, or materially reinterpreting that requirement without user approval merely because an authority might have produced a different result when authoring it from scratch. Specification audits follow this same decision model.

## Decisions Codex Can Make Without Approval

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

### Accessible-Name Derivation from Visible Content

When a specification already establishes that an element requires an accessible name and one approved visible heading or label unambiguously identifies that element, the specification author may define the accessible name as derived from that visible content without separate approval. The naming relationship must be documented explicitly in the resulting specification.

The decision is governed by these constraints:

- The requirement for an accessible name must already be established.
- Use only approved visible content that identifies the same element.
- Preserve approved local accessible names and naming relationships.
- Do not introduce hidden naming text or new visible content.
- Do not introduce a landmark, region, accessible description, state-dependent name, or live announcement under this authority.
- Do not apply this authority to an icon-only control whose accessible name requires contextual wording.
- Request approval when multiple visible candidates exist or the visible content does not identify the element unambiguously.

This authority applies to future specification work and to new unresolved accessible-name derivation decisions encountered after its approval. It does not authorize retrospective changes to existing specifications.

### Decorative-Content Classification

When an approved visual element conveys no unique information, identity, state, instruction, or interaction beyond content already communicated accessibly, the specification author may classify it as decorative without separate approval. The decorative classification must be documented explicitly in the consuming specification or shared Component.

The decision is governed by these constraints:

- The visual element itself must already be approved; this authority does not permit adding or removing it.
- Removing the element from accessible content must not remove or alter any meaningful information, identity, state, instruction, or interaction.
- Consider the element across every approved state and Breakpoint.
- All meaningful information represented by the element must already be available through accessible content.
- Preserve existing local and shared-Component classifications.
- Apply the global Decorative Content requirements after classification.
- Do not autonomously classify controls, state indicators, instructional graphics, informative images, or identity and brand assets as decorative.
- Request approval whenever the classification could change meaning or understanding.

This authority applies to future specification work and to new unresolved decorative-content classifications encountered after its approval. It does not authorize retrospective changes to existing specifications.

## How to Write Specifications

### Global Inheritance and Local Ownership

Local specifications document only requirements that establish local content, ownership, classification, relationships, overrides, extensions, or exceptions. A requirement fully established by an applicable global rule or shared Component is inherited and is not restated locally.

Component assignments and local classifications remain documented when they are necessary to establish which global or shared rules apply.

This rule applies to future specification work. It does not authorize retrospective cleanup of existing specifications.

### Section Purpose

Every Section specification must begin with a `Purpose` subsection. Briefly state what the Section helps the user accomplish or understand and why it belongs on the page. Shared Header and Footer specifications follow the same requirement, describing their reusable role.

Purpose establishes the intent against which content, design, and implementation decisions can be assessed. It does not repeat the Section's element inventory or prescribe its Layout.

### Element Order and Structural Subsections

Within a Section specification, the documented order of its primary element subsections establishes their canonical element order. Do not use a `Structure`, `Layout`, or equivalent subsection solely to restate that sequence. Retain such a subsection only when it defines an additional multi-element relationship, such as grouping, nesting, parallel composition, responsive arrangement, conditional presence, or an approved difference between document and visual order.

### Element Specification Structure and Ownership

Element specifications use only the applicable canonical subsections, in this order:

1. `Content`
2. `Component and Semantics`
3. `Visual Design`
4. `Dimensions and Alignment`
5. `Spacing`
6. `Spacing After`
7. `Interaction`
8. `Accessibility`
9. `Responsive Behavior`
10. `Technical Requirements`

Omit subsections that have nothing to own. Document each requirement once under its most precise owner:

- `Content` owns visible content, data identity, required values, and content variability.
- `Component and Semantics` owns shared Component assignment, native semantic roles, and internal semantic grouping.
- `Visual Design` owns visual treatment and typography assignments.
- `Dimensions and Alignment` owns size, proportion, Grid allocation, orientation, and alignment.
- `Spacing` owns internal spacing relationships within the element or composition.
- `Spacing After` owns external separation from the complete primary element to the next primary element in the same content flow, only at Breakpoints where that relationship exists. Omit it for separate parallel flows and for the final element in a flow unless another following relationship is explicitly specified.
- `Interaction` owns interactive behavior and states.
- `Accessibility` owns content-dependent accessibility requirements and approved local exceptions.
- `Responsive Behavior` owns Breakpoint-specific changes not owned more precisely by another subsection.
- `Technical Requirements` owns required architecture, APIs, services, configuration, data acquisition, and other technical prerequisites.

Section-level `Layout` owns only genuine relationships among multiple primary elements that cannot be owned by one element, including shared Grid composition, parallel flows, and multi-element grouping. It does not duplicate individual element placement or properties.

Content that exists solely to support, qualify, attribute, or complete another primary element may be nested under that element. Visual proximity alone does not justify nesting; an element with an independent purpose, placement, responsive composition, or interaction remains a primary element. Nested elements follow the same applicable subsection structure.

A precisely named nested element, composition, or state subsection may be used when it owns a coherent set of interdependent requirements spanning multiple canonical categories and splitting those requirements would obscure their relationship.
