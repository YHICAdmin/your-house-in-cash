## Accordion

A Component for displaying multiple content items that can be expanded and collapsed. It is used in the FAQ to present questions and answers in a compact format.

#### Anatomy

- Accordion Item
    - Question
    - Answer
    - Toggle Icon
    - Divider

#### Behavior

- Clicking the Question / Toggle opens or closes the Item.
- + indicates the Closed state.
- − indicates the Open state.
- Only one Item can be open at a time.
- The Answer is displayed directly below the Question.
- The entire Item header area is clickable, not only the Toggle Icon.
- Open / Close transition: height 200ms ease.
- Default state: all Items closed.

#### Visual Style

- Background: none
- Card / Container: none
- Divider: 1px, using Border #E4E7E4
- Shadow: none
- Radius: none at the Item level

#### Toggle

- Size: 32px × 32px
- Border: 1px solid #E4E7E4
- Radius: 50%
- Background: transparent
- Icon: + / −
- Icon size: 16px
- Icon color: #101114

#### Typography

- Question: Inter / 16px / 600 / 1.5
- Answer: Inter / 16px / 400 / 1.6
- Question color: #101114
- Answer color: #555B63

#### Spacing

- Vertical padding per Item: 24px
- Gap between Question and Answer in the Open state: 16px
- The gap between the Question and Toggle is determined by the available width; the Toggle is aligned to the opposite edge.

#### States

- Closed
- Open
- Hover: Question color changes to Brand Green Dark

#### Keyboard & Accessibility

- Items can be navigated using Tab.
- Enter or Space opens / closes the focused Item.
- The Open / Closed state is exposed to assistive technologies.
- Question and Answer are semantically associated.

#### Configurable

- Question
- Answer
- Number of Items
- Default open Item: optional
- All other visual and behavioral properties remain consistent across instances.

## Button

A generic Component for actions displayed as a button. It can use the appropriate semantic element depending on the action.

### Link Navigation

- When rendered as a link, follows the global [Link Destinations](guidelines/implementation-guidelines.md#link-destinations) rule: external web destinations open in a new tab; internal destinations open in the current tab.
- Telephone, email, and fragment destinations retain their native behavior. Native button actions are unaffected.

### Visual Style

- Font: Inter / 16px / 600 / 1
- Background: #101114
- Text/Icon: #FFFFFF
- Padding: 14px 22px
- Min-height: 48px
- Radius: 8px
- Icon: optional
- Icon gap: 8px
- Width: content by default
- Border/Shadow: none

### Conversion Variant

The `conversion` variant is used for the primary conversion CTA in the Area Hero and Final CTA.

- Min-height: 64px
- Horizontal padding: `XL` (`48px`)
- Mobile width: 100% of the available content width
- Tablet and Desktop width: 60% of the available content width, up to a maximum width of 360px
- All other visual, semantic, interaction, and accessibility properties inherit from the default Button.

### States

- Hover: background Brand Green Dark
- Focus: background unchanged
- Active: transform: scale(0.98); no additional color or shadow change
- Disabled: opacity 40%; pointer interaction disabled; no hover or active states
- Keyboard behavior follows the semantic role of the rendered element
- Transition: background-color 150ms ease, transform 100ms ease

### Configurable

Label, icon, icon position, width, variant and exceptional text-size overrides.

The documented visual and interaction properties define the Button defaults. A consuming element or Section specification may explicitly override individual Button properties; all properties not explicitly overridden continue to inherit from the shared Button.

## Icon Container

A reusable visual Component that presents one canonical Lucide icon within a circular container.

#### Anatomy

- One required canonical Lucide icon.

#### Visual Style

- Background: Brand Green Light
- Border: none
- Shadow: none
- Radius: 999px / Pill
- Default icon color: Brand Green Dark
- The icon is centered horizontally and vertically within the container.

#### Dimensions and Alignment

- The container does not shrink.
- Default size: `40px × 40px`, with the global Medium Icon size (`20px`).
- Large size: `48px × 48px`, with the global Large Icon size (`24px`).
- External alignment and spacing are defined by the consuming element.

#### Responsive

- The treatment remains unchanged across Breakpoints.

#### Accessibility

- Accessibility semantics are defined by the consuming use.

#### Configurable

- Canonical Lucide icon identity.
- Size: Default or Large. Default is used when no size is specified.

## Section Label

A small Component used to identify, contextualize, or categorize a Section or content area. It typically appears above the headline and remains visually secondary to it.

#### Anatomy

- Label text — required
- Icon — optional
- When present, the Icon appears before the Label text.

#### Typography

- Font: Inter / 11px / 600 / 1.3
- Letter-spacing: 0.07em
- Typically uppercase.

##### Visual Style

- Background: Brand Green Light
- Text: #101114
- Border: none
- Shadow: none
- Radius: 999px / Pill
- Icon: Brand Green Dark
- Width: content

#### Spacing

- Padding: 6px 12px
- Icon gap: 8px

#### Accessibility

- The icon is decorative.

#### Configurable

- Label
- Icon: on / off
- Icon

All other visual properties remain consistent across instances.

## Text Link

A generic Component for actions or navigation displayed as text rather than as a button.

### Link Navigation

- Follows the global [Link Destinations](guidelines/implementation-guidelines.md#link-destinations) rule across all consuming Sections and Breakpoints.
- External web destinations always open in a new tab with `target="_blank"` and `rel="noopener noreferrer"`.
- Internal destinations open in the current tab; telephone, email, and fragment destinations retain their native behavior.

### Visual Style

- Font: Inter / 16px / 600 / 1.5
- Color: #101114
- Background/Border/Shadow: none
- Width: content
- Icon gap: 8px

### States

- Active: color #245A33; no transform or layout change
- Transition: color 150ms ease
- Hover: color Brand Green Dark

### Responsive

Content-width at every Breakpoint; does not automatically become a Button or full-width.

### Configurable

Label, destination/action, icon and icon position.

## Content Table

### Purpose

Present structured comparisons within page content.

### Content

* The consuming use supplies column headings, row content, and the ID of the heading that labels the table.

### Component and Semantics

* Uses a native `table` with column headers and first-column row headers, using `scope="col"` and `scope="row"` respectively.
* The table and its scroll container are labelled by the supplied heading.

### Visual Design

* Cells use global `Body` typography with `600` weight for headers.
* Cell content is left-aligned and top-aligned, with `S` (`16px`) padding across all Breakpoints.
* The column-header row uses `Background Soft` (`#F7F9F7`); body rows use a uniform `Background` (`#FFFFFF`). All text uses `Text Primary` (`#101114`).
* Horizontal separators below the column-header row and between body rows, and vertical separators between columns throughout the header and body, use the default `Border` (`1px solid #E4E7E4`).
* Both comparison columns receive the same visual treatment, without a brand-color highlight for either option.

### Dimensions and Responsive

* The table fills its available content width. Columns retain at least `12ch` of width for readable text wrapping.
* A keyboard-focusable horizontal scroll container keeps wide tables within the available content width on smaller screens.
* A table uses the long-text layout when any body cell contains `80` or more characters of prose. Its row-header column has a minimum width of `14ch`, and each remaining column has a minimum width of `20ch` at every Breakpoint. The table fills its available width with a `33rem` minimum width, rather than expanding to the full unwrapped text width.
* When the long-text layout exceeds the available width, retain the native horizontal scrollbar and allow touch swipe, trackpad, mouse-wheel, and keyboard scrolling in the existing focusable scroll container. Do not stack the table or replace its comparison columns on Mobile.

## Autocomplete

### Purpose

Help users find and select a value from suggestions as they type, both within forms and in standalone interfaces.

### Content

* The consuming use supplies the suggestion data source, display text, selected value, loading and empty-results messages, minimum query length, debounce delay, and maximum suggestion count.

### Component and Semantics

* Uses an editable input and a suggestions panel. The consuming use supplies the input's visible label and presentation; standalone use does not inherit form validation or submission behavior.

### Visual Design

* The suggestions panel uses the global `Surface` background, default `Border` treatment, and `Small` Radius (`8px`).
* The active suggestion during keyboard navigation and a hovered suggestion use the global `Brand Green Light` background with `Text Primary` text.

### Dimensions and Alignment

* The suggestions panel appears below the input, matching its width and overlaying the following content without shifting the surrounding layout at any Breakpoint.
* Suggestion text wraps onto multiple lines as needed to display its full content within the panel width at every Breakpoint, including Mobile.
* Limit the panel's height to the available visible viewport space below the input, accounting for the on-screen keyboard on Mobile. Allow vertical scrolling in the suggestions area when needed and keep the active keyboard-navigated suggestion in view.

### Interaction

* Start a search only when the input meets the configured minimum length, after the configured debounce delay.
* Whenever the user edits the input value, immediately clear the previous suggestions and active option, including during the debounce interval, so suggestions for the previous value cannot be selected.
* When the input contains fewer characters than the configured minimum, close the suggestions panel and clear its suggestions and active option while preserving the remaining text. Cancel any scheduled search and ignore pending results for the previous value so they cannot reopen the panel.
* When the suggestions open, no suggestion is active by default. The user explicitly navigates to a suggestion with the arrow keys or selects one by clicking or tapping it.
* While suggestions are open, `ArrowDown` and `ArrowUp` navigate the suggestions. `Enter` selects the active suggestion without submitting the form. `Escape` closes the suggestions while preserving the text in the field.
* Clicking or tapping outside the input and its suggestions panel closes the panel without selecting a suggestion or changing the entered value.
* Returning focus to the input alone does not reopen the suggestions panel. Editing the input value triggers a new search under the existing minimum-length and debounce rules.
* When a search completes successfully with no matching suggestions, display the empty-results message in the suggestions panel and keep manual entry available. The message is informational, not a selectable suggestion or validation error.
* While a search is pending, display the loading message in the suggestions panel without blocking typing. The loading message is not a selectable suggestion.
* Selecting a suggestion applies its configured value to the input, closes the panel, and leaves focus in the editable input. When no suggestion is active, Enter behavior belongs to the consuming use.
* Tab follows the logical focus order. Moving focus outside the component closes the panel without selecting a suggestion or changing the entered value.

### Accessibility

* The input uses an editable `combobox` with `aria-autocomplete="list"`. Its `aria-expanded` value reflects whether the suggestions are open, and `aria-controls` references the suggestions list when it is displayed.
* The suggestions list uses `listbox` semantics, with each suggestion represented as an `option` with a unique ID. Keyboard focus stays in the input while navigating suggestions; `aria-activedescendant` references the active option and is removed when no option is active or the list closes.
* Announce the autocomplete loading and empty-results messages through a `role="status"` region without moving focus. The status region is separate from the `listbox` and its selectable options.

### Technical Requirements

* Display search results only when they belong to the latest search request and match the field's current value. Ignore responses from superseded requests so older results cannot replace current suggestions.
* Once the user closes the suggestions panel, pending search responses must not reopen it. A subsequent input edit may start a new search under the documented search rules.

## Address Autocomplete

### Purpose

Help users find a United States address through Geoapify suggestions while retaining manual entry.

### Content

* Uses the attribution text and destination defined by the approved [Address Autocomplete Service](external-libraries.md#address-autocomplete-service).
* Address-autocomplete empty-results message: `No matching addresses. You can enter the address manually.`
* Address-autocomplete loading message: `Searching addresses…`.

### Component and Semantics

* Uses [Autocomplete](#autocomplete), with the address-specific configuration below.

### Visual Design

* Geoapify attribution uses global `Caption` typography and `Text Secondary` color, remaining visible and legible when the suggestions panel is open.

### Dimensions and Alignment

* Within the inherited panel-height limit, reserve space for the attribution at the bottom and allocate the remaining height to the scrollable suggestions area.
* The Geoapify attribution remains visible at the bottom of the suggestions panel, below and outside the scrollable suggestions area.

### Interaction

* Address offers address autocomplete and allows manual entry when the address cannot be found in the suggestions.
* Autocomplete suggestions are restricted to addresses in the United States.
* Display a maximum of five address suggestions at all Breakpoints.
* Start address-autocomplete searches once the field contains at least three characters, waiting `300ms` after the most recent edit before sending a request.
* Manual entry uses the same Address field. Selecting an autocomplete suggestion is not required, and no additional address form is opened.
* The selected value applied by Autocomplete is the suggestion's full address.
* While the suggestions panel is open, `Tab` from the Address field moves focus to the Geoapify attribution link and keeps the panel open. `Tab` from that link moves focus to the next focusable element and closes the panel. Neither action selects a suggestion or changes the entered address.
* If address autocomplete is unavailable, keep the field usable for manual entry, preserve the entered value, and leave validation and submission to the consuming use without showing an autocomplete-service error message.

### Technical Requirements

* Uses the approved [Address Autocomplete Service](external-libraries.md#address-autocomplete-service) and its API-key configuration and attribution requirements.
