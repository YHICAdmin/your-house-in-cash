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
