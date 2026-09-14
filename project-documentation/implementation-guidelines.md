## Link Destinations

- Internal site navigation uses relative URLs and opens in the current tab.
- External web destinations (`http://`, `https://`, or protocol-relative `//` URLs) always use `target="_blank"` and `rel="noopener noreferrer"`.
- Telephone (`tel:`), email (`mailto:`), and in-page fragment links retain their native behavior.
- `Text Link`, link-style `Button`, and external native anchors share the `getExternalLinkProps` implementation in `src/lib/link-target.ts`.
- This rule applies to site-owned navigation links, not embedded third-party interfaces such as Google Maps.

## Element Order

Build each page with the default `Header` first, its content in the documented order, and the default `Footer` last. The defaults are the `Header` and `Footer` defined in [Shared Sections](website-specification/shared-sections.md), and apply even when the page specification does not list them. If the page specification explicitly selects a different Header or Footer, render that component in place of the corresponding default.

Elements within each Section must be implemented in the order in which they are documented. The documented element order determines DOM order unless an approved exception is explicitly defined in the relevant Section or Element specification.

Visual layout may position elements without changing their underlying DOM order.

## Global and Shared Implementation Reuse

When an existing global utility, layout primitive, typography class, or shared Component already provides the complete reusable behavior required by the specification, consume that implementation directly rather than recreating equivalent behavior locally. Copying or reconstructing the declarations owned by that established implementation does not constitute reuse.

This rule governs duplication of established reusable implementations; it does not independently require every local primitive value or literal that matches a global token value to reference that token. Token usage remains governed by the applicable Color, Spacing, Typography, Grid/Layout, Component, and specification ownership rules.

Local implementation may add or override only properties explicitly required by the consuming specification. All non-overridden behavior remains owned by the existing global or shared implementation.

When direct reuse is technically unsuitable and multiple uses require the same reusable behavior, derive them from a shared implementation source rather than maintaining parallel definitions.
