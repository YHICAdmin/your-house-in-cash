# Purpose

Give real estate investors a direct entry point for receiving off-market investment opportunities in Greater Cleveland.

# Page Routing

- Canonical route: `/buyers`.
- The page uses the shared site Header and Footer.
- The primary CTA uses the in-page fragment destination `#buyer-registration`.

# Hero

## Purpose

Immediately establish the page as an investor-focused opportunity flow and encourage visitors to join the buyers list.

## Content

1. Primary Headline: `Find Your Next Investment Property in Greater Cleveland`
2. Supporting Copy: `Join our buyers list to receive off-market investment opportunities that match your buying criteria.`
3. Primary CTA: `Join Our Buyers List`

## Component and Semantics

- The Primary Headline uses `h1` semantics.
- The Supporting Copy uses paragraph semantics.
- The Primary CTA uses the shared Button Component with the `conversion` variant and link semantics.
- The CTA links to `#buyer-registration`, which is owned by the Buyer Registration Section.

## Layout

- Use the global Content Grid, Section spacing, and System Lines.
- On Desktop, the content occupies Grid Columns `1–6`, Grid Column `7` remains open, and the media occupies Grid Columns `8–12`. The content and media are vertically center-aligned.
- On Tablet, the content occupies all eight columns. The media occupies Grid Columns `2–7` and follows the content.
- On Mobile, the content and media each occupy all four columns, with the media following the content.
- Vertically center the content within a generously spaced Hero composition. Do not add cards, badges, secondary CTAs, microcopy, or benefit lists.

## Visual Design

- Use the global Display typography for the Primary Headline and global Body Large typography with Text Secondary color for the Supporting Copy.
- Use the shared dark conversion-button treatment so the CTA remains the Hero’s prominent action.
- Keep the Hero’s base Background neutral and light. Add a restrained Brand Green Light gradient treatment toward the lower portion of the Hero, consistent with the site-wide Hero background system.
- Preserve the global System Lines above the background treatment and below foreground content.

## Hero Media

- Use `/images/buyers/cleveland-brick-duplex-fixer-upper.png` in the Hero’s media area.
- Use the supplied brick duplex image as a real-estate-investment visual, with the alt text `Brick duplex investment property exterior`.
- Preserve a `3:2` media frame using the global Medium Radius and Subtle Shadow. The image fills the frame with `object-fit: cover`.

## Spacing

- Separate the Primary Headline from the Supporting Copy by `M` (`24px`).
- Separate the Supporting Copy from the Primary CTA by `L` (`32px`).
- Use the global Section spacing at every breakpoint.

## Responsive Behavior

- Preserve the same semantic content order at all breakpoints: headline, supporting copy, CTA.
- Keep the CTA at full available content width on Mobile through the shared conversion-button behavior.
- On Tablet and Desktop, use the shared conversion-button width behavior: 60% of the available content width, up to `360px`.
- Preserve the lower gradient treatment and System Lines across breakpoints.

# Why Join Our Buyers List?

## Layout

- Use the global Background, Content Grid, Section spacing, and System Lines. The Hero's lower gradient already provides the preceding visual separation.
- Do not include a visible section heading or subheading.
- Use one semantic unordered list of four equal-width benefits. Do not use cards, rounded containers, shadows, or background boxes.
- On Desktop, display all four benefits in one row.
- On Tablet, display two benefits per row.
- On Mobile, display one benefit per row with no dividers.

## Benefit Content

1. `Search` — **Off-Market Opportunities**
   - Discover investment properties beyond traditional listings.
2. `SlidersHorizontal` — **Deals That Fit Your Criteria**
   - Receive opportunities based on your preferred locations, budget, and investment strategy.
3. `Bell` — **Direct Property Alerts**
   - Stay informed when new investment opportunities become available.
4. `CircleDollarSign` — **Free to Join**
   - Join our buyers list at no cost, with no obligation to purchase.

## Visual Design

- Use the supplied Lucide icons as decorative line icons with a restrained Brand Green Dark color. Do not place icons inside a container.
- Keep every benefit left-aligned: icon, heading, and description.
- Use global H4 typography for the compact benefit headings and global Body typography with Text Secondary color for the descriptions.
- Separate the icon and heading by `M` (`24px`), and the heading and description by `S` (`16px`).
- Add a `1px`-wide, `16px`-high Brand Green mark aligned with each benefit heading. Align the marks with their nearest vertical System Line or divider.
- Keep the benefits visually open, with no additional internal background or surface treatment.

# Buyer Registration

## Purpose

Let investors share their buying preferences and voluntarily opt into future opportunity alerts.

## Layout

- The Section ID is `buyer-registration`.
- Use the global Background Soft, Content Grid, Section spacing, and System Lines.
- On Desktop, the left content occupies Grid Columns `1–5`, Grid Column `6` remains open, and the Form Card occupies Grid Columns `7–12`.
- On Tablet, the left content occupies Grid Columns `1–4` and the Form Card occupies Grid Columns `5–8`.
- On Mobile, stack the left content followed by the Form Card in document order.
- The Form Card uses the global Surface, default Border, and Medium Radius. Do not add a Shadow.
- The section is the scroll target for the Hero CTA. Use smooth in-page scrolling and offset the target below the sticky Header.

## Left Content

1. Eyebrow: `JOIN OUR NETWORK`
2. Headline: `Let's Find Your Next Investment.`
3. Description: `Tell us what you're looking for, and we'll notify you when opportunities matching your criteria become available.`
4. Trust points:
   - Free registration
   - No obligation to purchase

- Use the shared text-only Section Label for the Eyebrow.
- Use H2 semantics and global H2 typography for the Headline.
- Use global Body Large typography and Text Secondary color for the Description.
- Use one semantic unordered list for the Trust points, each preceded by a decorative Brand Green Dark `Check` icon.

## Registration Form

### Fields

1. `Full name` — required text field with `name` autocomplete.
2. `Email address` — required email field with `email` autocomplete.
3. `Phone number` — optional US phone field with `tel` autocomplete; required when SMS marketing consent is selected.
4. `Purchasing method` — optional single-choice group: Cash, Hard money / Private lending, Conventional financing, Other.
5. `Investment strategy` — optional multiple-choice group: Rental, Fix & flip, BRRRR, Multifamily.
6. `Purchase budget` — optional single-choice group: Under $50K, $50K–$100K, $100K–$200K, $200K+.
7. `Preferred areas / ZIP codes` — optional free-text field.
8. Email marketing consent — optional, unchecked by default.
9. SMS marketing consent — optional, unchecked by default.

### Component and Semantics

- Use shared Text Field and Phone Field controls.
- Use native `fieldset` and `legend` semantics for the three choice groups. Single-choice groups use native radios and Investment strategy uses native checkboxes.
- Each choice option uses the shared Choice Controls visual treatment: visible native indicator, Border, Small Radius, and Brand Green/Brand Green Light selected state.
- The two marketing consents remain separate native checkboxes. Email consent identifies Your House in Cash as the sender, states the promotional purpose, and links to the Privacy Policy. SMS consent identifies the sender and links to the Privacy Policy.
- The Primary Button uses the label `Join Our Buyers List`.

### Validation and Interaction

- Use `novalidate` and client-side validation only. Do not create an API route, save data, send a notification, or integrate a CRM in this phase.
- Validate Full name and Email address after blur or a submit attempt. Validate an entered Phone number after blur or a submit attempt; when SMS marketing consent is selected, an empty Phone number is invalid.
- Full name empty: `Please enter your full name.`
- Email address empty: `Please enter your email address.`
- Email address format invalid: `Please enter a valid email address.`
- Phone number required for SMS marketing: `Please enter your phone number to receive SMS marketing.`
- Phone number format invalid: `Please enter a valid US phone number.`
- Revalidate an invalid field on change and clear its error once valid. On an invalid submit attempt, move focus to the first invalid field in document order.
- After successful server-side storage, replace the form with: `Thanks for joining the Your House in Cash Buyers List. We'll keep your preferences in mind and be in touch when a matching opportunity becomes available.`

### Persistence and Notifications

- Persist registrations by normalized email address. A repeated registration updates buying preferences without creating a second buyer record or sending another welcome email.
- Store email and SMS marketing consent preferences, affirmative consent timestamps, and consent-language versions. A withdrawn consent remains withdrawn unless the buyer provides fresh affirmative consent.
- New registrations send one best-effort internal team notification and buyer confirmation email after successful storage. Delivery failures are logged and never change a successfully saved registration.
- Do not send an automated SMS message. Retain SMS consent only for future alert functionality; future SMS activation must support STOP opt-out processing.
- The buyer confirmation uses the existing verified Resend sender, is titled `Welcome to the Your House in Cash Buyers List`, and includes the website link.
- The internal notification uses the existing team notification recipient and includes submitted preferences, consent statuses, and the registration timestamp.

# FAQ

## Layout and Visual Design

- Place the FAQ immediately after Buyer Registration.
- Use the shared FaqSection with its default Background variant so the page continues the documented alternating Background pattern.
- Use the shared FaqSection layout, Accordion behavior, contact prompt, typography, and responsive composition.

## Content

- Label: `FAQ`
- Headline: `Questions about the buyers list?`
- Supporting Copy: `Learn how the buyers list works, what to expect from opportunities, and how to keep your preferences up to date.`

1. **How will I receive investment opportunities?**
   - When an opportunity matches the preferences you share, we will use the contact information and marketing preferences you selected to keep you informed.
2. **Is there a cost to join the buyers list?**
   - No. Joining the buyers list is free, and there is no obligation to purchase a property.
3. **Can I update my buying criteria later?**
   - Yes. Contact us when your target areas, budget, purchasing method, or investment strategy changes so we can keep your preferences current.
4. **Will every opportunity match my criteria?**
   - We use your preferences to help identify relevant opportunities, but availability and property details can vary. Review each opportunity carefully to decide whether it fits your plans.
5. **Do I have to buy a property after joining?**
   - No. The buyers list is simply a way to hear about potential opportunities. You decide whether to pursue any property that becomes available.

# Footer

- Use the shared Site Footer with its Background Soft variant. This follows the FAQ's default Background treatment.
