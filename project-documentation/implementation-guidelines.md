## Element Order

Elements within each Section must be implemented in the order in which they are documented. The documented element order determines DOM order unless an approved exception is explicitly defined in the relevant Section or Element specification.

Visual layout may position elements without changing their underlying DOM order.

## Global and Shared Implementation Reuse

When an existing global utility, layout primitive, typography class, or shared Component already provides the behavior required by the specification, consume that implementation directly rather than recreating the same behavior locally. Repeating the same tokens or values locally does not constitute reuse. Local implementation may add or override only properties explicitly required by the consuming specification; all non-overridden behavior remains owned by the existing global or shared implementation.

When direct reuse is technically unsuitable, derive both uses from a shared implementation source rather than maintaining parallel definitions.
