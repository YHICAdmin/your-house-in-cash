This document defines the external libraries approved for use in the project and the responsibility assigned to each library.

Libraries not documented here must not be introduced without explicit approval.

# Icons

- Library: Lucide
- React package: `lucide-react`
- Purpose: Provides interface icons used throughout the website.
- Icon names must use the canonical `lucide-react` export names.
- Section, Element, and Component specifications define the exact icon used in each context.
- Icons must follow the rules defined by the global Icon System.
- Custom icons, icon substitutions, and additional icon libraries require explicit specification.

## Footer Social Identity Marks

- The Footer uses five local brand SVG assets (Facebook, Instagram, LinkedIn, YouTube, TikTok), as specified in `website-specification/site-shell.md`.
- Source: Simple Icons, version `11.15.0`, `https://github.com/simple-icons/simple-icons/tree/11.15.0/icons` (CC0). Original assets are stored in `/public/images/social-platforms/`.
- These are static identity assets; no additional icon package or runtime dependency is installed.
