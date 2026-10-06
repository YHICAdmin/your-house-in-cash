# Purpose

Give homeowners a direct way to ask Noah a question or discuss a potential sale, with clear expectations and a confirmed message submission.

# Page Routing

- Canonical route: `/contact`.
- The form's Privacy Policy link navigates to `/privacy-policy`, the destination already used by the site Footer.

# Contact

## Purpose

Help a visitor start a conversation, understand what to expect from it, and send a message about their property.

## Layout

- Use the existing site Header and Footer. Place the Contact section between them within the global Content Container and Section spacing.
- Use `Background Soft` (`#F7F9F7`) as the full-width base, giving the page a gentle green-neutral tint. Preserve the global Line System.
- Follow the supplied Semrush reference's lower-band composition: start a field of fine, evenly spaced vertical lines around the lower half of the section and continue them to the bottom edge across the full page width. Keep line widths and spacing regular; shift their apparent color from very pale Brand Green Light near the band's top to restrained Brand Green toward the bottom. Use the site's green palette in place of the reference's purple and cyan. Render the pattern behind the foreground content so the white Form Card visually covers it. The pattern is decorative and does not intercept input or pointer events.
- Desktop: place the Introduction and Conversation Points in Grid columns `1–5`, leave column `6` open, and place the Form Card in columns `7–12`. Align the top of the Introduction with the top of the Form Card.
- Tablet: use two balanced four-column areas, with the Introduction and Conversation Points on the left and the Form Card on the right; align their top edges.
- Mobile: stack the Introduction, Conversation Points, and Form Card in document order. Use `XL` (`48px`) between the complete left-side content and the Form Card. Keep the lower band of regular vertical lines, with a shorter and lighter presentation so the copy and fields remain visually dominant.

## Introduction

### Content

- H1: `Have a question? Let’s talk.`
- Supporting text: `Have a question about your property or how we work? Send me a message. You don’t need to be ready to sell to get in touch.`

### Component and Semantics

Use an `h1` followed by a paragraph.

### Visual Design

Use global Display typography for the H1 and Body Large typography with Text Secondary color for the supporting text.

### Spacing

Separate the H1 from the supporting text by `M` (`24px`) at each Breakpoint.

### Spacing After

Separate the supporting text from the Conversation Points by `L` (`32px`) at each Breakpoint.

## Conversation Points

### Content

Present these points in order:

1. `Ask about the process, timing, or your options.`
2. `Hear directly from Noah.`
3. `Decide if you want to take a next step.`

### Component and Semantics

Use a semantic list. Precede each point with a decorative Lucide `Check` icon.

### Visual Design

Use global Body typography for the text and Brand Green Dark for the simple line checkmarks. Use the global Small Icon size (`16px`).

### Spacing

Use `S` (`16px`) between list items and `S` (`16px`) between each checkmark and its text.

## Form Card

### Content

- Heading: `Send me a message`.
- Fields appear in this order:

  | Order | Visible label | Control | Required | Autocomplete |
  | --- | --- | --- | --- | --- |
  | 1 | Your Name | Single-line text | Yes | `name` |
  | 2 | Email | Email field | Yes | `email` |
  | 3 | Phone number (optional) | Phone field | No | `tel` |
  | 4 | Property address (optional) | Address field | No | `street-address` |
  | 5 | Message | Multiline textarea | Yes | — |

- Submit label: `Send Message`.
- Submitting label: `Sending…`.
- Development demo notice above the Form Card: `Demo mode — details are not sent or saved. Refresh to reset.`
- Text below the button: `Your information will be handled according to our Privacy Policy.` Link only `Privacy Policy` to `/privacy-policy`.
- Confirmed-success message: `Thanks for reaching out. I’ve received your message and will be in touch.`
- Submission-failure message: `Your message couldn’t be sent. Please try again.`
- Inline validation messages:

  | Field and condition | Message |
  | --- | --- |
  | Your Name empty after trimming | `Please enter your name.` |
  | Email empty after trimming | `Please enter your email address.` |
  | Email format invalid | `Please enter a valid email address.` |
  | Phone number supplied but invalid | `Please enter a valid US phone number.` |
  | Message empty after trimming | `Please enter a message.` |

### Component and Semantics

- Use a native `form` with a visible `h2` for the Form Card heading. Use global H3 typography for that heading.
- Use the shared Form definitions for Text Field, Email Field, Phone Field, Address Field, Textarea, validation feedback, and submission behavior. Optional fields remain valid when empty; an entered phone number follows the shared Phone Field validation and normalization rules. An entered property address allows manual entry under the shared Address Field rules.
- Use the shared Button Component as a native submit button, with its existing black primary treatment and a local full-card-width assignment. Use the shared Text Link contract for the Privacy Policy link, with its documented text-size override set to Body Small so it fits the sentence.

### Visual Design

- Use a white Surface, Medium Radius (`12px`), and the Subtle Shadow (`0 2px 8px rgba(16, 17, 20, 0.06)`) for the Form Card.
- Keep the pattern behind the card and the form controls on the white surface. Inherit the shared form control, label, focus, error, and button treatments.
- Style the privacy sentence with global Body Small typography and Text Secondary color.

### Dimensions and Alignment

- The Form Card fills its assigned Grid columns. Give the textarea five visible rows initially and allow vertical resizing.
- Each field spans the card's available width at every Breakpoint.
- Make the submit button span the available form width at every Breakpoint.

### Spacing

- Use `L` (`32px`) card padding on Desktop and Tablet, and `M` (`24px`) on Mobile.
- Separate the heading from the first field by `L` (`32px`), and adjacent field rows by `M` (`24px`). Use the shared Text Field spacing within each field.
- Separate the final field from the submit button by `L` (`32px`), and the button from the privacy sentence by `S` (`16px`).

### Interaction

- Apply the shared Form validation triggers: show a field error after blur or an attempted submission, then clear it as soon as the edited value becomes valid. Validate required values after trimming; validate nonempty Email and Phone number values using their shared field rules. A manually entered Property address is accepted.
- Preserve all entered values when validation fails or a submission request fails.
- When a live submission integration is connected, show `Sending…` while its request is pending, keep entered values visible, prevent edits and duplicate submissions, and announce the pending state through the shared Form behavior. Replace the form controls with the confirmed-success message only after the integration confirms receipt.
- In development, show the persistent demo notice and let a valid submission preview the success state without sending or saving information. Keep form values in client memory; refreshing the page resets the demo. The notice remains visible while the success state is previewed.
- Until a live integration exists, a valid submission in production displays the submission-failure message near the submit button, with all entered values and fields available for another attempt. It does not enter a pending-request state or display success.
- When a live submission fails, keep the form and its values available and display the same failure message near the submit button so the visitor can retry.

### Accessibility

- Associate every visible label with its control and retain native `required`, email, and telephone semantics. Use the shared Form error associations and focus the first invalid field after an attempted invalid submission.
- Announce submitting, success, and failure states to assistive technology. On success, move keyboard focus to the confirmation message.
- Keep the decorative background strokes and checkmark icons out of the accessibility tree.

### Technical Requirements

- No contact-form submission integration exists in the current project. Follow the existing cash-offer form's development-demo boundary for client-side implementation: a visible demo notice and success preview in development, and a value-preserving failure state in production.
- Before live submission can be implemented, define and connect a server-side message destination and a success/failure response contract. Only a confirmed successful response may trigger the production success state.
