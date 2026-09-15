This document defines the external libraries and services approved for use in the project and the responsibility assigned to each.

Libraries and services not documented here must not be introduced without explicit approval.

# Phone Number Validation

- Library/package: `libphonenumber-js`.
- Purpose: Parses phone numbers and validates numbering rules for the [Phone Field](form.md#phone-field).
- Use `libphonenumber-js/max` for validation with complete metadata. Require a valid parsed number whose country is `US`; a default country or the `+1` calling code alone does not restrict a number to the United States.
- Validation checks numbering-plan validity, not whether the number is active or owned by the user.
- Display formatting and the submitted value remain governed by `form.md`.
- Approved for installation during implementation; no dependency is installed as part of this specification update.
- Documentation: [Official README](https://github.com/catamphetamine/libphonenumber-js/blob/master/README.md).

# Address Autocomplete Service

- Service: Geoapify Address Autocomplete API.
- Purpose: Supplies address suggestions for the [Address Autocomplete Component](component-library.md#address-autocomplete). Geographic filtering and search behavior are defined by that Component.
- Documentation: [Geoapify Address Autocomplete API](https://apidocs.geoapify.com/docs/geocoding/address-autocomplete/).
- The Geoapify Free plan requires visible attribution linking to Geoapify, following its [plan requirements](https://www.geoapify.com/pricing/). Use `Powered by Geoapify`, with `Geoapify` linking to `https://www.geoapify.com/`; presentation and placement are defined by the consuming Component.
- The development API key is configured in the Git-ignored `.env.local` as `NEXT_PUBLIC_GEOAPIFY_API_KEY` for browser-side autocomplete requests. A test request with the `http://localhost:3000` Origin returned HTTP `200` and five suggestions.
- UI integration and browser verification remain pending implementation; add the production site's origin to the key's allowed origins before launch.

# Google Maps Embed

- Service: Google Maps, embedded through an iframe using its standard Share/embed URL or an approved city-based URL: `https://www.google.com/maps?q={encoded location}&output=embed`. For City Pages, encode `{City}, Ohio, USA` with `encodeURIComponent`; Google determines the location and zoom. Existing Cleveland and Euclid Share/embed URLs remain supported.
- Purpose: Provides interactive location maps. The consuming page owns the displayed location, embed URL, container layout, and iframe title.
- Google Maps owns the embedded map's internal presentation, labels, controls, geographic detail, and interaction behavior. No custom JavaScript map interaction layer is added.
- Required Google Maps branding and attribution remain visible and unmodified.
- Google Maps' embedded accessible interface remains unmodified.

# Icons

- Library: Lucide
- React package: `lucide-react`
- Purpose: Provides interface icons used throughout the website.
- Icon names must use the canonical `lucide-react` export names.
- Section, Element, and Component specifications define the exact icon used in each context.
- Icons must follow the rules defined by the global Icon System.
- Custom icons, icon substitutions, and additional icon libraries require explicit specification.

## Footer Social Identity Marks

- The Footer uses six local brand SVG assets (Facebook, Instagram, LinkedIn, YouTube, TikTok, X), as specified in `shared-sections.md`.
- Source: Simple Icons, version `11.15.0`, `https://github.com/simple-icons/simple-icons/tree/11.15.0/icons` (CC0). Original assets are stored in `/public/images/social-platforms/`.
- These are static identity assets; no additional icon package or runtime dependency is installed.
