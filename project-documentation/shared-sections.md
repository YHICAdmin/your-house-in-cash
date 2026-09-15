# Header

## Purpose

Provide clear, accessible navigation.

## Layout

* Sticky at the top of the viewport with no hide-and-reveal behavior while scrolling.
* Height: `80px` on Desktop, `72px` on Tablet, and `64px` on Mobile.
* Uses a solid `#FFFFFF` background, matching the global Background color, with all Header content vertically centered.
* In its default state, uses a `1px` dashed `#ECEEF4` bottom border, matching the global Line System color, and no Shadow.
* As soon as the page is scrolled from its top position by any amount, the bottom border is removed and replaced by the global Subtle Shadow.
* Opening the Menu does not change the Header's current border or Shadow state.
* Internal System Lines remain visible but do not dictate the placement of Header elements.
* On Desktop, the Logo and Desktop Navigation links form a left-side visual group with a `24px` (`M`) gap between adjacent items.

## Logo

### Content

* Displays the company Logo.
* The homepage currently uses the Area Page template with Cleveland as its location.

### Component and Semantics

* Links to the canonical homepage at `/` from every page and does not change according to the current Area Page.
* Accessible name: `Your House in Cash home`.

### Dimensions and Alignment

* Positioned on the left and preserves its original Aspect Ratio.
* Height: `56px` on Desktop, `48px` on Tablet, and `44px` on Mobile.

## Navigation

### Content

#### Shared Navigation Links

* The navigation links and their canonical dedicated-page destinations appear in this order:

  1. `How It Works` — `/how-it-works`
  2. `Situations` — `/situations`
  3. `Areas We Buy In` — `/areas-we-buy-in`
  4. `Reviews` — `/reviews`
  5. `FAQ` — `/faq`
  6. `About Us` — `/about-us`

#### Desktop

* Contains the Desktop Navigation.
* The Desktop Navigation contains the Shared Navigation Links.

#### Tablet and Mobile

* Contains the Menu Control.
* The Menu Control displays three horizontal lines when closed and an `X` when open.

#### Tablet

* When opened, the Open Menu Panel contains the Menu Navigation.
* The Menu Navigation contains the Shared Navigation Links.

#### Mobile

* When opened, the Open Menu Panel contains:

  1. Menu Navigation containing the Shared Navigation Links.
  2. Phone Contact.
  3. Menu Primary CTA with the label `Get My Cash Offer`.

### Component and Semantics

#### Desktop

* The Desktop Navigation uses navigation landmark semantics with the accessible name `Primary navigation`.
* Each Desktop Navigation item uses link semantics.

#### Tablet and Mobile

* The Menu Control uses button semantics.
* The Menu Navigation uses navigation landmark semantics with the accessible name `Menu navigation`, and each item uses link semantics.

#### Mobile

* The Menu Primary CTA uses the standard `Button` Component with link semantics and navigates to the Seller Lead Form Flow at the canonical internal route `/get-cash-offer`.

### Visual Design

#### Desktop

* Desktop Navigation links use the global `Body Small` typography.
* The Desktop Navigation does not use a persistent Active Page Indicator.

#### Tablet and Mobile

* The Menu Control uses a transparent background, no Border, and a `#101114` icon color.
* The Open Menu Panel uses an uninterrupted solid `#FFFFFF` background with no System Lines visible through it.
* Each Menu Navigation row uses `Inter / 16px / 600 / 1.5`.
* A `1px` solid `#E4E7E4` divider separates adjacent Menu Navigation rows.
* Menu Navigation rows do not use individual backgrounds, Card treatments, or Radius.

#### Mobile

* The Menu Primary CTA inherits the standard `Button` Component's visual styling.

### Dimensions and Alignment

#### Tablet and Mobile

* The Menu Control is positioned on the right and uses a `24px` icon within a `40px × 40px` interactive area.
* The Open Menu Panel fills the remaining viewport below the Header.
* The Open Menu Panel overlays page content while the Header's foreground controls remain visually above it.
* Menu Navigation links appear as left-aligned vertical rows aligned with the Header and Menu Panel content area.
* Each Menu Navigation row uses `24px` (`M`) vertical padding.
* If the Menu content exceeds the available viewport height, the Open Menu Panel becomes vertically scrollable.

#### Mobile

* The Menu Control is the only element in the Header's right-side control area.
* The Menu Primary CTA preserves the standard `Button` Component's dimensions except that its width fills `100%` of the available Menu content width.
* It remains bounded by the Menu Panel content area, appears at the bottom of the Open Menu Panel, and has `24px` (`M`) padding beneath it.

### Interaction

#### Desktop

* Hover and focus-visible change Desktop Navigation link text to Brand Green Dark.

#### Tablet and Mobile

* Activating the closed Menu Control opens the Menu; activating the open Menu Control closes it.
* The Menu Control's active state has no additional visual treatment.
* Hover changes the Menu Control icon to Brand Green Dark.
* The complete Menu Navigation row is interactive, not only its text.
* Hover and focus-visible change Menu Navigation link text to Brand Green Dark.
* The Open Menu Panel is displayed only while the Menu is opening, open, or closing.
* The Menu closes when the Menu Control is activated or a Menu Navigation link is selected.
* If the viewport changes to Desktop while the Menu is open, the Menu closes and resets.
* The Open Menu Panel uses a short, subtle opacity transition combined with an `8px` downward movement.
* Opening takes approximately `200ms` with ease-out timing; closing takes approximately `180ms` with ease-in timing.
* Individual Menu elements do not animate separately. The transition does not use side-sliding, scaling, or exaggerated motion.
* The transition is disabled when the user prefers reduced motion.

#### Mobile

* The Menu Primary CTA inherits the standard `Button` Component's interaction states.

### Accessibility

#### Tablet and Mobile

* The Menu Control's accessible name communicates whether it opens or closes the navigation Menu.
* The Menu Control communicates its expanded or collapsed state to assistive technologies.
* The Menu Control is programmatically associated with the Open Menu Panel.
* The Menu Control icon is decorative.
* As soon as opening begins, the Open Menu Panel and its interactive content become available to assistive technologies and user interaction.
* When the Menu opens, keyboard focus moves to the first Menu Navigation link.
* While the Menu is open, keyboard focus remains within the Header and Open Menu Panel; `Tab` and `Shift + Tab` cycle through only their interactive elements.
* While the Open Menu Panel is displayed, page scrolling is locked and background page content is non-interactive.
* As soon as closing begins, the Open Menu Panel and all of its interactive content become non-interactive and hidden from assistive technologies while the visual closing transition completes.
* Page scrolling remains locked and background page content remains non-interactive until the closing transition finishes and the Open Menu Panel is removed.
* Pressing `Escape` closes the Menu and returns focus to the Menu Control.

#### Tablet

* The Phone Contact precedes the Header CTA and Menu Control in document, reading, and focus order.
* The Header CTA precedes the Menu Control in document, reading, and focus order.
* The Open Menu Panel follows the Phone Contact, Header CTA, and Menu Control in document and reading order; its interactive content follows the Phone Contact, Header CTA, and Menu Control in focus order.
* Menu Navigation is the first content element in the Open Menu Panel.

#### Mobile

* The Menu Control follows the Logo in document, reading, and focus order because the Header CTA is not displayed in the Header.
* The Open Menu Panel follows the Menu Control in document, reading, and focus order.
* Menu Navigation is the first content element in the Open Menu Panel.
* The Phone Contact follows Menu Navigation in document, reading, and focus order.
* The Menu Primary CTA follows the Phone Contact in document, reading, and focus order and inherits the standard `Button` Component's accessibility behavior.

## Phone Contact

### Content

* Label: `Call Us`.
* Phone number: `216-111-1111`.
* The phone number is fixed content and remains unchanged across all Breakpoints.
* Includes the canonical Lucide `Phone` icon and a Divider.

### Component and Semantics

* The complete Phone Contact uses link semantics across all Breakpoints, including the Phone icon, label, Divider, and phone number.
* Navigates to the phone-call destination `tel:2161111111`.

### Visual Design

* The label uses the global `Body Small` typography.
* The phone number uses the global `Body` typography.
* The Phone icon uses the global Small Icon size (`16px`) and Brand Green Dark color.
* The Divider uses the global default `1px` solid Border treatment.

### Dimensions and Alignment

* On Desktop and Tablet, appears immediately before the Header CTA and is separated from it by `S` (`16px`).
* The Phone icon, label, Divider, and phone number form one horizontal composition in that order, with an `8px` (`XS`) gap between adjacent items across all Breakpoints.
* The Divider is vertical and `24px` long across all Breakpoints.
* The complete Phone Contact is vertically center-aligned across all Breakpoints and, on Desktop and Tablet, vertically centered relative to the Header CTA.
* On Mobile, appears directly above the Menu Primary CTA, is separated from it by `16px` (`S`), and is horizontally centered.

### Responsive Behavior

* On Desktop and Tablet, appears in the Header.
* On Mobile, appears within the Open Menu Panel.

### Accessibility

* The Phone icon is decorative.
* The Divider is decorative and does not create a separate semantic boundary.

## Header CTA

### Content

* Label: `Get My Cash Offer`.

### Component and Semantics

* Uses the standard `Button` Component with link semantics and inherits its visual styling, dimensions, interaction states, and accessibility behavior.
* Navigates to the Seller Lead Form Flow at the canonical internal route `/get-cash-offer`.

### Dimensions and Alignment

* On Desktop, positioned on the right side of the Header.
* On Tablet, positioned immediately before the Menu Control and separated from it by `16px` (`S`).

### Responsive Behavior

* Not displayed in the Header on Mobile.

# Footer

## Purpose

Provide secondary navigation, company information, legal information, and contact details in a clear and unobtrusive way, while creating a structured conclusion to the page.

## Layout

The Footer is divided into Company, Navigation, Legal, and Contact content areas.

- The outer System Lines bound the Footer content, using the globally defined content padding.
- Internal System Lines serve as alignment axes between content areas.

### Desktop

- Company occupies Grid Columns `1–3`, Navigation occupies Grid Columns `4–6`, Legal occupies Grid Columns `7–9`, and Contact occupies Grid Columns `10–12`.
- Company, Navigation, Legal, and Contact are top-aligned within one shared Grid row.
- The Footer Bottom Row spans Grid Columns `1–12` across all four visual areas.

### Tablet

- Company occupies Grid Columns `1–4` and Navigation occupies Grid Columns `5–8` in the first row.
- Legal occupies Grid Columns `1–4` and Contact occupies Grid Columns `5–8` in the second row.
- The two content areas within each row are top-aligned.
- The Footer Bottom Row spans Grid Columns `1–8`.

### Mobile

- Company, Navigation, Legal, Contact, and the Footer Bottom Row each occupy Grid Columns `1–4` in one full-width flow and preserve that canonical document order.

### Visual Design

- Uses the global `Background` (`#FFFFFF`) by default. The consuming page may override it with an approved global Background System color; only the override is documented locally.
- Uses no top Border or Shadow.
- All Footer text links, including Navigation, Legal, and the phone number, use font weight `400` as a Footer-specific override of the `Text Link` Component.

### Spacing

- On Tablet, `XL` (`48px`) separates the first content-area row from the second content-area row.
- On Mobile, `XL` (`48px`) separates adjacent Company, Navigation, Legal, and Contact content areas.
- Across all Breakpoints, `XL` (`48px`) separates the complete upper content-area composition from the Footer Bottom Row Divider.

## Component and Semantics

- Uses native `footer` landmark semantics.

## Company

### Content

- Displays the company Logo using `/brand/Logo.svg`.
- The Logo remains unchanged across Area Pages.
- Company description: **We buy houses as-is throughout Northeast Ohio and provide straightforward cash offers without repairs, showings, or agent fees.**

### Component and Semantics

- The complete Logo uses link semantics and navigates to the canonical homepage at `/`.
- The Company description uses paragraph semantics.

### Visual Design

- The Company description uses the global `Body` typography and `Text Secondary` color.

### Dimensions and Alignment

- The Logo preserves its original Aspect Ratio without cropping or distortion.
- The Logo height is `56px` on Desktop, `48px` on Tablet, and `44px` on Mobile; its width is derived from its original Aspect Ratio.
- The Logo and Company description form one left-aligned vertical content flow in that order.

### Spacing

- `M` (`24px`) separates the Logo from the Company description across all Breakpoints.

### Accessibility

- The Logo link's accessible name is `Your House in Cash home`.

## Navigation

### Content

- Heading: **Explore**.
- Contains the complete `Shared Navigation Links` inventory in its canonical order and with the canonical destinations defined under `Header → Navigation → Content`.

### Component and Semantics

- The Navigation area uses navigation landmark semantics.
- The heading uses `H2` semantics.
- The Shared Navigation Links use one semantic unordered list with one list item per link.
- Each link uses the documented `Text Link` Component with link semantics.

### Visual Design

- The heading uses the global `H4` typography.
- The link list retains its semantic list structure without visible markers or default list margin or padding.

### Dimensions and Alignment

- The links form one left-aligned vertical content flow in canonical order.

### Spacing

- `M` (`24px`) separates the heading from the link list across all Breakpoints.
- `S` (`16px`) separates adjacent links across all Breakpoints.

### Accessibility

- The visible **Explore** heading provides the Navigation landmark's accessible name.

## Legal

### Content

- Heading: **Legal**.
- `Privacy Policy` — `/privacy-policy`.
- `Terms of Service` — `/terms-of-service`.

### Component and Semantics

- The heading uses `H2` semantics.
- The Legal links use one semantic unordered list with one list item per link.
- Each link uses the documented `Text Link` Component with link semantics.

### Visual Design

- The heading uses the global `H4` typography.
- The Legal link list retains its semantic list structure without visible markers or default list margin or padding.

### Dimensions and Alignment

- The Legal links form one left-aligned vertical content flow in canonical order.

### Spacing

- `M` (`24px`) separates the heading from the Legal link list across all Breakpoints.
- `S` (`16px`) separates the two Legal links across all Breakpoints.

## Contact

### Content

- Heading: **Contact**.
- Label: **Call Us**.
- Phone number: `216-111-1111`.
- The phone number uses link semantics and navigates to `tel:2161111111`.
- Email: `info@yourhousesincash.com`, linked to `mailto:info@yourhousesincash.com`.
- Physical address: **6545 Market Avenue North, North Canton, OH 44720**.
- Service-area text: **Serving Northeast Ohio**.

### Component and Semantics

- The heading uses `H2` semantics.
- The phone number uses the documented `Text Link` Component.
- The email uses the documented `Text Link` Component with the Footer's regular font weight (`400`).
- The physical address uses `address` semantics, with the street on the first line and city, state, and ZIP on the second line.
- The service-area text uses paragraph semantics.

### Visual Design

- The heading uses the global `H4` typography.
- The **Call Us** label uses the global `Label` typography.
- The service-area text uses the global `Body Small` typography and `Text Secondary` color.
- The physical address uses `Body Small`, Text Secondary, and normal (non-italic) font style.

### Dimensions and Alignment

- The heading, **Call Us** label, phone number, email, physical address, and service-area text form one left-aligned vertical content flow in that order. The email wraps when needed to remain within the column.

### Spacing

- `M` (`24px`) separates the heading from the **Call Us** label across all Breakpoints.
- `XS` (`8px`) separates the **Call Us** label from the phone number across all Breakpoints.
- `S` (`16px`) separates the phone number, email, physical address, and service-area text from each adjacent item across all Breakpoints.

## Footer Bottom Row

### Content

- Copyright notice: **© {Current Year} Your House in Cash. All rights reserved.**
- `{Current Year}` is generated dynamically from the current calendar year.
- Social identity marks link to the following profiles in this order:
  - Facebook: `https://www.facebook.com/yourhouseincash`
  - Instagram: `https://www.instagram.com/yourhouseincash/`
  - LinkedIn: `https://www.linkedin.com/company/your-house-in-cash`
  - YouTube: `https://youtube.com/@yourhouseincash`
  - TikTok: `https://www.tiktok.com/@yourhouseincash`
  - X: `https://x.com/yourhouseincash/`

### Component and Semantics

- The copyright notice uses paragraph semantics.
- Social identity marks use a semantic unordered list named `Social media` and local SVG images from `/images/social-platforms/`.
- Each mark uses native link semantics and opens the supplied profile URL in a new tab, following the global [Link Destinations](implementation-guidelines.md#link-destinations) rule (`target="_blank"`, `rel="noopener noreferrer"`).

### Visual Design

- The copyright notice uses the global `Body Small` typography and `Text Muted` color.
- Social identity marks are monochrome, `20px × 20px`, with no enclosing background, Border, or Shadow.
- A full-width Divider above the copyright notice uses the global default `1px` solid Border treatment and `Border` color (`#E4E7E4`).

### Dimensions and Alignment

- The copyright notice is left-aligned.
- On Desktop and Tablet, the social marks are right-aligned in the same row as the copyright notice, with both groups vertically centered.
- On Mobile, the social marks follow the copyright notice on a separate left-aligned row.

### Spacing

- `M` (`24px`) separates the Divider from the copyright notice across all Breakpoints.
- `S` (`16px`) separates adjacent social marks and is the minimum gap between the copyright and social groups.

### Accessibility

- The Divider is decorative and does not create a semantic boundary.
- Each social image uses its platform name as alternative text, providing the link's accessible name. Links use the global keyboard focus-visible treatment.

# Minimal Header

## Purpose

Provide brand identification, a link to the homepage, and direct phone contact while keeping attention on the page's primary task.

## Layout

* Uses the global `Background` color.
* Uses the bottom-border treatment defined for the [Header's default state](#layout).
* Uses the global [Line System](visual-design-system.md#line-system); internal lines do not dictate element placement.
* Height: `80px` on Desktop, `72px` on Tablet, and `64px` on Mobile.
* All Header content is vertically centered.
* The Minimal Header contains no primary navigation, menu control, or additional CTA.

## Logo

### Content

* Uses the company Logo at `/brand/Logo.svg`.

### Component and Semantics

* The complete Logo links to the canonical homepage at `/`.

### Dimensions and Alignment

* Positioned on the left and preserves its original Aspect Ratio.
* Reuses the approved Header Logo heights: Desktop `56px`, Tablet `48px`, Mobile `44px`.

### Accessibility

* The Logo link's accessible name is `Your House in Cash home`.

## Phone Contact

### Content

* Uses the regular Header's [Phone Contact](#phone-contact), with the label `Still have questions?` and the same phone number, icon, and Divider.

### Component and Semantics

* Reuses the regular Header's complete Phone Contact link, visual design, internal spacing, and accessibility definitions.

### Dimensions and Alignment

* Positioned on the right, opposite the Logo.

### Responsive Behavior

* The complete Phone Contact remains visible in the Minimal Header at all Breakpoints.
* The icon, label, Divider, and phone number form one horizontal row at all Breakpoints.
* On Mobile, the label is shortened to `Questions?`. Desktop and Tablet retain `Still have questions?`.

# Minimal Footer

## Purpose

Provide essential legal information while keeping attention on the page's primary task and preserving the main Footer's visual identity.

## Layout

* Uses the main Footer's white background, global Grid and System Lines, content inset, and regular-weight Text Links.
* Consists of the main Footer Bottom Row composition: a full-width Divider, copyright on the left, and Legal Links on the right on Desktop and Tablet. On Mobile, Legal Links follow the copyright on a separate left-aligned row.
* Reuses the main Footer Bottom Row alignment, Divider treatment, Divider-to-content spacing, and gap between content groups.
* Vertical Padding: `M` (`24px`) at all Breakpoints, overriding the global Section vertical padding.

## Component and Semantics

* Uses native `footer` semantics.

## Copyright

### Content

* `© {Current Year} Your House in Cash. All rights reserved.`, using the current calendar year.

### Component and Semantics

* Reuses the main Footer copyright paragraph and its typography and color.

## Legal Links

### Content

* `Privacy Policy` — `/privacy-policy`.
* `Terms of Service` — `/terms-of-service`.

### Component and Semantics

* Uses a semantic list of Text Links, inheriting the main Footer's link styling.

### Dimensions and Alignment

* Links form a horizontal row that wraps when needed.

### Spacing

* `S` (`16px`) separates links; wrapped rows use `XS` (`8px`).


# Final CTA

## Purpose

Conclude the page with a clear and simple conversion path.

At this stage, the user has already received the necessary information throughout the page, so the section does not introduce new information. Instead, it focuses attention on the primary action — receiving an offer for their house.

## Layout

- Uses the global `Background` (`#FFFFFF`) by default. The consuming page may override it with an approved global Background System color according to its adjacent Sections; only the override is documented locally.

- The left-aligned hierarchy of the Section Intro, Primary CTA, and Reassurance Row is preserved across Breakpoints.
- The Section Intro, Primary CTA, and Reassurance Row form one left-aligned composition.
- On Desktop, the CTA composition occupies Grid Columns `1–6`; the Supporting Benefits occupy Grid Columns `7–12`, with each benefit occupying three columns.
- On Tablet, the CTA composition occupies Grid Columns `1–4`; the Supporting Benefits occupy Grid Columns `5–8`, with each benefit occupying two columns.
- On Desktop and Tablet, the CTA composition and Supporting Benefits form parallel left- and right-area content flows whose top edges align.
- On Mobile, the CTA composition occupies the full available Content Grid width, followed by the Supporting Benefits in canonical document order.

## Section Intro

### Content

Contains, in document order:

1. Section Label text: supplied by the consuming page.
2. Primary Headline: supplied by the consuming page.
3. Supporting Copy: supplied by the consuming page.

Content values are supplied by the consuming page; the element structure, typography, spacing, responsive composition, and behavior are defined by this shared specification.

### Component and Semantics

- The Section Label uses the documented `Section Label` Component in its text-only configuration.
- The Primary Headline uses `H2` semantics.
- The Supporting Copy uses paragraph semantics.

### Visual Design

- The Primary Headline uses the global `H2` typography.
- The Supporting Copy uses the global `Body Large` typography.

### Dimensions and Alignment

- The complete Section Intro is left-aligned.

### Spacing

- `S` (`16px`) separates the Section Label from the Primary Headline across all Breakpoints.
- `M` (`24px`) separates the Primary Headline from the Supporting Copy across all Breakpoints.

### Spacing After

- `L` (`32px`) separates the complete Section Intro from the Primary CTA across all Breakpoints.

## Primary CTA

### Content

- Label and destination: supplied by the consuming page.

### Component and Semantics

- Uses the documented **Button** Component with its `conversion` variant.

### Spacing After

- `XS` (`8px`) separates the Primary CTA from the Reassurance Row across all Breakpoints.

### Interaction

- Navigates to the destination supplied by the consuming page, following the global link-destination rules.

## Reassurance Row

### Content

- Reassurance text: supplied by the consuming page.

### Component and Semantics

- Uses paragraph semantics.

### Visual Design

- Uses the global `Body Small` typography.

### Dimensions and Alignment

- Horizontally centered relative to the Primary CTA rather than the complete Final CTA composition.

### Spacing After

- On Mobile, `L` (`32px`) separates the Reassurance Row from the Supporting Benefits.

## Supporting Benefits

### Content

Contains exactly two benefits in the order supplied by the consuming page. Each benefit supplies a canonical Lucide icon identity, a heading, and Supporting Copy.

### Component and Semantics

- The benefits use one semantic unordered list with one list item per benefit.
- Each icon uses the documented `Icon Container` Component at its Default size.
- Each benefit heading uses `H3` semantics.
- Each Supporting Copy uses paragraph semantics.

### Visual Design

- Each benefit heading uses a local `16px / 600 / 1.25` typography treatment.
- Each Supporting Copy uses the global `Body` typography.
- The benefits remain visually open without a Card, background, Border, Radius, or Shadow.
- On Desktop and Tablet, each benefit is preceded by a `1px` global `Brand Green` vertical separator aligned with the top of its heading and matching the heading's `20px` line-box height; the first separator sits between the CTA composition and the first benefit, and the second sits between the two benefits.

### Dimensions and Alignment

- The benefits are left-aligned.
- On Desktop and Tablet, each icon, heading, and Supporting Copy form a vertical content flow in that order.

### Spacing

- `M` (`24px`) separates each `Icon Container` from its benefit heading across all Breakpoints.
- `S` (`16px`) separates each benefit heading from its Supporting Copy across all Breakpoints.

### Accessibility

- Benefit icons are decorative; the supplied adjacent headings communicate their benefit meaning.
- The separators are decorative.

### Responsive Behavior

- On Mobile, the two benefits form one full-width vertical flow in canonical order with an `L` (`32px`) gap.
- The vertical separators are not displayed on Mobile.
