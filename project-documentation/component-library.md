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
- Focus: uses the global Focus-Visible Treatment

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

### States

- Hover: background Brand Green Dark
- Focus: uses the global Focus-Visible Treatment; background unchanged
- Active: transform: scale(0.98); no additional color or shadow change
- Disabled: opacity 40%; pointer interaction disabled; no hover or active states
- Keyboard behavior follows the semantic role of the rendered element
- Transition: background-color 150ms ease, transform 100ms ease

### Configurable

Label, icon, icon position, width and exceptional text-size overrides.

Core visual properties — colors, typography, radius, internal spacing and interaction behavior — remain consistent between instances.

## Icon Container

A reusable visual Component that presents one canonical Lucide icon within a circular container.

#### Anatomy

- One required canonical Lucide icon.

#### Visual Style

- Container: `40px × 40px`
- Background: Brand Green Light
- Border: none
- Shadow: none
- Radius: 999px / Pill
- Default icon size: Medium Icon / `20px`
- Default icon color: Brand Green Dark
- The icon is centered horizontally and vertically within the container.

#### Dimensions and Alignment

- The container does not shrink.
- External alignment and spacing are defined by the consuming element.

#### Responsive

- The treatment remains unchanged across Breakpoints.

#### Accessibility

- Accessibility semantics are defined by the consuming use.

#### Configurable

- Canonical Lucide icon identity.

## Section Label

A small Component used to identify, contextualize, or categorize a Section or content area. It typically appears above the headline and remains visually secondary to it.

#### Anatomy

- Label text — required
- Icon — optional
- When present, the Icon appears before the Label text.

#### Typography

- Font: Inter / 13px / 600 / 1.3
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

- The icon is decorative, hidden from assistive technologies, and does not receive keyboard focus.

#### Configurable

- Label
- Icon: on / off
- Icon

All other visual properties remain consistent across instances.

## Text Link

A generic Component for actions or navigation displayed as text rather than as a button.

- Font: Inter / 16px / 600 / 1.5
- Color: #101114
- Background/Border/Shadow: none
- Width: content
- Icon gap: 8px

### States

- Focus: uses the global Focus-Visible Treatment
- Active: color #245A33; no transform or layout change
- Transition: color 150ms ease
- Hover: color Brand Green Dark

### Responsive

Content-width at every Breakpoint; does not automatically become a Button or full-width.

### Configurable

Label, destination/action, icon and icon position.
