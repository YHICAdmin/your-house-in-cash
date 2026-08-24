# Your House in Cash — Project Instructions

## Project Documentation

The project documentation in `/docs` is the source of truth for product, UX, visual design, and component decisions.

Relevant documents include:

- Website Specification
- Visual Design System
- Component Library

Read the relevant project documentation before implementing UI that it governs.

If project documentation conflicts with assumptions, framework defaults, or generated code, follow the project documentation.

## Project Rules

- Use Next.js App Router with TypeScript.
- Prefer Server Components by default.
- Use Client Components only when client-side interaction is required.
- Keep Client Component boundaries as small as practical.
- Prefer static/prerendered rendering for public content pages unless dynamic rendering is required.
- Do not add third-party dependencies without approval.
- Do not invent product, UX, visual-design, or architectural requirements.
- Do not invent colors, spacing values, typography, shadows, radii, breakpoints, or other design-system values when they are defined in the project documentation.
- Do not add UI elements, interactions, or functionality that were not requested or specified.
- If a material requirement is ambiguous and cannot be reasonably resolved from the existing documentation, established project patterns, or conventional implementation defaults, ask before implementing it.
- Do not treat minor implementation details or straightforward responsive adaptations as unresolved requirements when they can be derived without introducing a new design decision.
- Keep implementations as simple as the requirements allow.
- Do not modify unrelated parts of the codebase while implementing a task.

## Implementation Approval

- Do not begin implementation of a feature, component, section, or architectural change until I explicitly approve it for implementation.
- Planning, clarification, specification updates, analysis, and discussion do not constitute implementation approval.
- If a requirement is unresolved or TBD, do not create preparatory code, abstractions, infrastructure, placeholders, or configuration for it.
- When asked only to analyze, review, or clarify, do not modify implementation files.
