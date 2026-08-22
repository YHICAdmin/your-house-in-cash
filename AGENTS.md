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
- If a material requirement is ambiguous, ask before implementing it.
- Keep implementations as simple as the requirements allow.
- Do not modify unrelated parts of the codebase while implementing a task.