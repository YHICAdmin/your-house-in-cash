# Purpose

Provide a clear, plain-English explanation of how Your House in Cash handles personal information collected through the website.

# Page Routing

* Canonical route: `/privacy-policy`.
* The route is the destination used by the site Footer and the Contact form.

# Header and Footer

* Use the existing shared Site Header and Site Footer.

# Privacy Policy

## Purpose

Help visitors understand what information the website collects, why it is used, who may receive it, how long it is retained, and how to make a privacy request.

## Layout

* Use the global `Background` (`#FFFFFF`) and the global Content Container.
* Present the complete policy as one readable, left-aligned text column. On Desktop, the column occupies Grid Columns `1–8`; on Tablet and Mobile, it occupies all available columns.
* Preserve the global Line System behind the foreground content.
* Use the global Section spacing.
* Do not add promotional content, calls to action, imagery, animation, or decorative graphics.

## Page Heading

### Content

* H1: `Privacy Policy`.
* Display the effective date once below the H1 after the owner confirms it.

### Component and Semantics

* Use an `h1` followed by the effective-date paragraph.

### Visual Design

* The H1 uses global Display typography.
* The effective date uses global Body Small typography and Text Secondary color.

### Spacing

* Use `S` (`16px`) between the H1 and effective date.
* Use `XL` (`48px`) between the complete Page Heading and the policy content.

## Policy Content

### Content

* Use the approved public-facing draft below, with the confirmed effective date substituted before publication.
* Headings after the H1 use `h2` semantics in the documented order.
* Use semantic unordered lists for the categories of information and providers.
* Use the documented Text Link Component for all links, including the privacy email address and third-party privacy policies.

### Visual Design

* Section headings use global H3 typography.
* Body copy and lists use global Body typography.
* Links retain the Text Link Component’s recognizable link and keyboard-focus treatment.

### Spacing

* Use `L` (`32px`) between adjacent policy sections.
* Use `S` (`16px`) between a section heading and its first paragraph or list.
* Use `S` (`16px`) between adjacent list items.

### Public-Facing Draft

#### Privacy Policy

**Effective date: [Confirm before publication]**

Your House in Cash is operated by TOP HOUSES LLC. This Privacy Policy explains how we handle information when you use this website.

#### Information You Provide

The website includes forms for requesting a cash offer and sending a message. Depending on the form, we may collect your name, email address, phone number, property address, details about the property, your selling timeline, and information you include in a message or notes.

#### How We Use Information

We use information to respond to your request, discuss your property, provide an offer, follow up about a possible transaction, operate our business, and meet legal or recordkeeping obligations.

#### Address Autocomplete

When you type at least three characters into a property-address field, the text you enter is sent from your browser to Geoapify to provide address suggestions. Geoapify may receive technical request information, including your IP address and request details. Geoapify’s handling of that information is governed by its [Privacy Policy](https://www.geoapify.com/privacy-policy/).

#### Information Collected Automatically

When you visit the website, our website host and service providers may receive standard technical information, such as your IP address, browser type, device information, pages requested, and the date and time of your visit. We use this information to operate, maintain, and protect the website.

We do not use advertising pixels or website analytics tools at this time. Third-party features, including Google Maps and Geoapify address autocomplete, may use cookies or similar technologies under their own privacy policies.

#### Who Receives Information

We may share personal information with authorized people who need it to respond to inquiries, evaluate properties, complete transactions, operate our business, or provide support.

We may also share information with service providers that help us operate the website, store form submissions, communicate with you, and run our business. These providers may include our website host, database host, email or communication providers, Geoapify for address autocomplete, and Google for embedded maps.

We may disclose information when required by law, to protect our rights or safety, or as part of a business sale, merger, or similar transaction.

#### Google Maps

Some pages include an embedded Google Map. Loading or using that map connects your browser to Google. Google may collect information under its own [Privacy Policy](https://policies.google.com/privacy). We do not control Google’s practices.

#### Retention

We keep lead and inquiry information for three years after our last meaningful interaction with you. If your inquiry leads to a transaction, contract, or closing, we may keep relevant records longer when needed for legal, tax, accounting, dispute-resolution, or regulatory purposes.

#### Marketing Communications

We may use your contact information to respond to your request, discuss your property, provide an offer, and follow up about a possible transaction. If we send promotional email, you can opt out by using the unsubscribe instructions in the message or contacting us. Submitting a form does not itself give permission for automated marketing calls or texts.

#### Privacy Requests

You may contact us at [info@yourhousesincash.com](mailto:info@yourhousesincash.com) to ask about the personal information we hold about you or to request access, correction, or deletion. We may ask for information needed to verify your request. We may keep information that we need for legal, recordkeeping, or business purposes.

#### Changes to This Policy

We may update this Privacy Policy from time to time. We will post the updated version on this page and change the effective date.

#### Contact

For privacy questions, contact [info@yourhousesincash.com](mailto:info@yourhousesincash.com) or call `216-111-1111`.

# Audit Findings and Research Notes

This section is internal project documentation and is not rendered on the public page.

* Owner-confirmed behavior: form submissions are stored in a server database.
* The database host has not been selected. Before launch, identify the provider and add it to the public policy if appropriate.
* The code sends address-autocomplete queries to Geoapify after three typed characters. Geoapify states that successful API-request data is generally retained no longer than 24 hours.
* Area pages embed Google Maps in an iframe. Google Maps has its own data practices.
* No first-party cookie code, browser storage, analytics scripts, advertising pixels, tag manager, marketing platform, or submission integration was found in the repository.
* Production hosting, server logging, database configuration, access controls, and production-injected scripts cannot be determined from this repository and must be confirmed before launch.
* TOP HOUSES LLC is the owner-confirmed legal operator for the public policy. Confirm that the entity receives leads and enters the relevant transactions before publication.
* The owner selected three years after the last meaningful interaction for lead and inquiry retention. Transaction, contract, closing, legal, tax, accounting, dispute-resolution, and regulatory records may require longer retention.
* If commercial marketing email is used, review CAN-SPAM requirements. If automated marketing calls or texts are used, obtain legal review and implement the required consent flow; a Privacy Policy alone does not create that consent.
* Confirm whether `Your House in Cash` must be registered or reported as a trade or fictitious name of TOP HOUSES LLC in Ohio.
