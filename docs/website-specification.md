# Visual Direction

**Element Restraint / Visual Simplicity**

Each section should be built around a limited number of elements, each serving a clear purpose. Do not add cards, icons, badges, text, statistics, or decorative elements simply to fill empty space.

The default structure is: label, headline, supporting copy, CTA when needed, and one primary media or content element.

Whitespace is an intentional part of the design and should not be filled unnecessarily. Each section should have one clear visual concept.

**Note**

Mockups and visual references serve as design guidance and are not Pixel-Perfect implementation specifications. In the event of a conflict between a concept image and the Website Specification or Visual Design System, the written documentation is the source of truth.

### Header

**Purpose**

Provide clear, accessible navigation while keeping the primary conversion path available to the user at all times.

**Structure**

The Header consists of three primary areas:

- Logo — positioned on the left.
- Navigation — How It Works / Situations / Areas We Buy In / Reviews / FAQ / About Us.
- Primary CTA — Get My Cash Offer, positioned on the right.

**Visual Direction**

- Quiet and minimal, with generous whitespace.
- The Primary CTA is clear and accessible but does not compete with the page content.
- Do not use a persistent Active Page Indicator in the primary navigation.

**Behavior**

- The Header remains sticky while scrolling.
- There is no additional trigger and no hide/reveal behavior while scrolling.
- In the default state, the Header uses the bottom border defined below and no shadow.
- In the sticky state, the bottom border is removed and replaced by the global Subtle Shadow.
- Scrolled State Trigger: Activates as soon as the page is scrolled (scrollY > 0).

**Technical Specifications**

**Header**

| Property | Desktop | Tablet | Mobile |
| --- | --- | --- | --- |
| Height | 80px | 72px | 64px |
| Position | sticky | sticky | sticky |
| Top | 0 | 0 | 0 |
| Background | #FFFFFF | #FFFFFF | #FFFFFF |
| Bottom Border | 1px solid #F0F2F0 | 1px solid #F0F2F0 | 1px solid #F0F2F0 |
| Sticky Shadow | Subtle Shadow | Subtle Shadow | Subtle Shadow |

**Logo**

| Property | Desktop | Tablet | Mobile |
| --- | --- | --- | --- |
| Height | 56px | 48px | 44px |
| Width | auto | auto | auto |
| Aspect Ratio | Preserved | Preserved | Preserved |

**Navigation**

| Property | Desktop | Tablet | Mobile |
| --- | --- | --- | --- |
| Typography | Body Small | — | — |
| Gap | 24px | — | — |

**Hamburger**

| Property | Desktop | Tablet | Mobile |
| --- | --- | --- | --- |
| Icon | — | 3 horizontal lines | 3 horizontal lines |
| Icon Size | — | 24px | 24px |
| Hit Area | — | 40 × 40px | 40 × 40px |
| Background | — | transparent | transparent |
| Border | — | none | none |
| Color | — | #101114 | #101114 |
| Gap from Primary CTA | — | 16px | 16px |

**Responsive Behavior**

| Element | Desktop | Tablet | Mobile |
| --- | --- | --- | --- |
| Logo | Left | Left | Left |
| Navigation | Full | Hidden | Hidden |
| Primary CTA | Right | Right | Right |
| Hamburger | Hidden | Right | Right |

- On Tablet and Mobile, the Primary CTA and Hamburger are grouped on the right.
- The Primary CTA remains visible and does not move inside the Hamburger Menu.

**Line System**

- The outer system lines bound the Header content according to the global definition.
- The internal system lines remain visible but do not dictate the placement of the Logo, Navigation, or Primary CTA.

**Open Menu Behavior**

- Available on Tablet and Mobile only.
- Opens directly below the Header with no gap.
- The Header remains visible while the menu is open.
- The menu is a dropdown panel, not a full-screen overlay.
- Navigation links are displayed vertically.
- The Primary CTA remains in the Header and is not duplicated inside the menu.
- Use a short, subtle open/close transition.
- The menu closes when:
  - the Hamburger button is pressed again;
  - a navigation item is selected;
  - the user clicks outside the menu;
  - the user presses Escape.
- The Hamburger button exposes its state using aria-expanded.
- When closed with Escape, focus returns to the Hamburger button.

### Footer

**Purpose**

Provide secondary navigation, company information, legal information, and contact details in a clear and unobtrusive way, while creating a structured conclusion to the page.

**Structure**

The Footer is divided into several content areas:

- **Company** — Logo and short company description.
- **Navigation** — Primary navigation and company links.
- **Legal**
  - Privacy Policy
  - Terms of Service
- **Contact** — Contact details and location / service area.

A separate bottom row contains the copyright notice and any additional secondary information.

**Visual Direction**

- Clean, minimal, and spacious.
- Maintain a clear but understated typographic hierarchy.
- Navigation links and contact information should not compete visually with the Final CTA above.
- Use subtle separators only when necessary.
- Preserve generous whitespace.
- Do not add elements solely to fill available space.

**Behavior**

No specific interactive behavior is currently defined beyond standard link behavior.

**Technical Specifications**

No Footer-specific technical specifications are currently defined. Global typography, spacing, color, container, and component rules apply unless explicitly overridden.

**Responsive Behavior**

The Footer should adapt its multi-column structure to smaller viewports while preserving clear content grouping and hierarchy.

The exact Tablet and Mobile layout is not currently specified.

**Line System**

- The outer System Lines bound the Footer content, using the globally defined content padding.
- On Desktop, the four visual areas may be used as the basis for organizing **Company / Navigation / Legal / Contact**.
- Internal System Lines serve as alignment axes between content areas; each visual area does not need to be fully occupied.
- The bottom copyright row may span the full content width across all four visual areas.

# Pages

## Home Page / Area Pages

**Purpose**

The primary page template for Cleveland and future city/area pages.

The primary goal is to generate leads from motivated home sellers.

Secondary goals are to build trust, demonstrate a local presence, and support organic and local search visibility.

**Page Structure**

1. Header
2. Hero
3. Situations
4. Reviews
5. How It Works
6. Cleveland / Local Section
7. FAQ
8. Final CTA
9. Footer

**Visual Direction**

Clean, modern, and spacious, with strong typography and clear visual hierarchy. Use generous whitespace to create the feel of a trustworthy local business rather than a generic cash-buyer website.

Visual elements and gradients may be used to create character and atmosphere, but should not compete with the content. Media should support the message while remaining secondary in the visual hierarchy.

Sections may use different compositions as long as a cohesive visual language is maintained throughout the website.

### Hero

**Purpose**

Immediately communicate the location, offer, and credibility of the business, while providing the seller with a clear path to begin the conversion process.

**Structure**

- Section Label: **Location**, with Location icon.
- Primary headline.
- Supporting copy / subheadline.
- Component: **Button / Primary**.
- Supporting microcopy: **“100% free. No obligation.”**
- Three key benefits.
- Local media composition using a limited number of images featuring properties, Cleveland, and the surrounding area.
- A personal trust element that reinforces credibility and local presence.

**Visual Direction**

- The primary headline is the main visual focal point.
- The Section Label is positioned above the primary headline.
- The left side contains the primary message and conversion content.
- The Local Trust Card is smaller and visually secondary to the image composition. It integrates with the images as a single media unit that reinforces credibility and local presence.
- The three key benefits are compact and displayed in a horizontal row.
- Use generous whitespace.

**Behavior**

- The Primary CTA leads to the form flow used to collect seller and property information.
- The Header CTA leads to the same conversion flow.

**Technical Specifications**

No additional Hero-specific technical specifications are currently defined. Global typography, spacing, color, component, and layout rules apply unless explicitly overridden below.

**Responsive Behavior**

No Hero-specific Tablet or Mobile composition is currently defined.

The Hero should adapt to smaller viewports while preserving the hierarchy between the primary message, CTA, benefits, media composition, and Local Trust Card.

Exact stacking, ordering, and media proportions for Tablet and Mobile remain to be defined.

**Line System**

- The left content area maintains the globally defined content padding from the left outer System Line.
- Internal System Lines serve as alignment axes but do not constrain the composition.
- The image composition on the right extends slightly beyond the right outer System Line to create a more asymmetric, distinctive, and less generic composition.

**Hero Media Composition**

- Use an asymmetric composition consisting of three rectangular images with different dimensions and aspect ratios.
- The **left image** is wide and horizontal and is positioned slightly lower than the right image.
- The **right image** is tall and vertical and begins higher than the other images.
- The **bottom image** is wide and horizontal, positioned below and between the two upper images so that it visually connects them.
- The images should not align to a symmetrical grid or form a perfect outer rectangle.
- Maintain a small and consistent gap of approximately **5px** where the images approach one another.
- All images use a moderate, consistent border radius and a subtle shadow.
- Keep the composition compact so that it does not compete with the primary headline.
- The asymmetry is intentional. Do not align the three images into a uniform grid.
- A smaller **Local Trust Card** appears adjacent to the image composition and contains a personal image and a message emphasizing local presence and credibility.
- The Local Trust Card and the three images should read as a single media unit without forming a symmetrical grid or rigid rectangular block.
- The overall composition should feel **balanced, asymmetric, and editorial**, rather than like a collection of uniform cards.

**Background Gradient**

- The Hero begins with a white background and gradually transitions into a subtle green gradient toward the bottom.
- The gradient spans the full viewport width and is not constrained by the Line System.
- Its direction is primarily vertical with a slight diagonal bias, and its intensity may be slightly stronger around the media area.
- Colors are derived from the Brand Palette at low intensity so that the gradient remains visually secondary to the content.
- Final color values, opacity, and gradient stops will be determined during implementation.

### Situations — Situations We Can Help With

**Purpose**

Allow sellers to quickly identify the situation that best matches their circumstances and understand that we know how to handle it.

The section also provides entry points to dedicated content and SEO pages for each situation.

**Structure**

- Section Label: **We Help With**, with House icon.
- Headline: **What brings you here?**
- Supporting copy.
- List of situations.
- Dynamic content area for the selected situation, including:
  - Relevant image.
  - Short explanation.
  - Relevant benefits.
  - CTA linking to the dedicated situation page.
- **Contact Us** option for users who are unsure which situation applies to them.

**Visual Direction**

- The headline and supporting copy appear above the main content area rather than inside it.
- The Section Label is positioned above the primary headline.
- The main content area occupies a relatively limited portion of the available width, preserving generous whitespace.
- The internal composition uses an approximate **35% Situation Selector / 65% Content** split.
- Keep the visual language minimal. Do not present every situation as a large card.
- The active situation receives a subtle visual distinction.
- The image supports the selected situation but should not become the dominant visual element.

**Behavior**

- Selecting a situation on the left updates the dynamic content area on the right.
- Each situation can link to its own dedicated SEO page.
- **Foreclosure** may be used as the default selected situation.
- All primary situation options should remain visible without requiring a carousel.

**Technical Specifications**

No additional Situations-specific technical specifications are currently defined. Global typography, spacing, color, component, and layout rules apply unless explicitly overridden.

**Responsive Behavior**

No specific Tablet or Mobile composition is currently defined.

The section should preserve access to all primary situations and the relationship between the Situation Selector and the selected content. Exact stacking, ordering, and interaction behavior on smaller viewports remain to be defined.

**Line System**

- The outer System Lines bound the main content area.
- On Desktop, the **second System Line from the left** also serves as the divider between the Situation Selector and the dynamic content area.
- Content on both sides of the dividing line maintains appropriate padding.
- The headline and supporting copy are not required to follow this internal division.

### Reviews

**Purpose**

Strengthen trust and social proof through authentic reviews from sellers who have worked with us.

Demonstrate that the business is local, credible, and has already helped homeowners throughout the Cleveland area.

**Structure**

- Section Label: **Customer Reviews**, with Star icon.
- Headline: **What Cleveland homeowners say**
- Short supporting copy.
- Google rating, including star rating and total number of reviews.
- Review cards containing:
  - Customer name.
  - Customer location.
  - Review source — Google, Facebook, BBB, etc.
- Link to view additional reviews.
- Short trust message at the bottom of the section.

**Visual Direction**

- Keep the section clean, minimal, and spacious.
- Position the Section Label above the primary headline.
- Use a large, prominent headline consistent with the site's overall typographic language.
- Display the Google rating below the supporting copy in a compact format that does not compete with the headline.
- Review cards should be large enough for comfortable reading without dominating the section.
- Cards use a very subtle border and avoid unnecessary visual decoration.
- The review source is displayed as secondary information.
- The carousel extends toward the side to reveal part of the next card.
- Preserve generous whitespace around the content.

**Behavior**

- Reviews are displayed in a horizontal carousel.
- On Desktop, multiple review cards are visible simultaneously.
- A portion of the next card remains visible at the edge to indicate additional content.
- Navigation arrows allow users to move through the reviews.
- Each review clearly identifies its source.
- The **See more reviews on Google** link leads to the external Google reviews profile.
- On Mobile, the number of visible cards adapts to the available viewport width.

**Technical Specifications**

No additional Reviews-specific technical specifications are currently defined. Global typography, spacing, color, component, and layout rules apply unless explicitly overridden.

**Responsive Behavior**

- Desktop displays multiple review cards simultaneously.
- Mobile adjusts the number of visible cards according to the available viewport width.
- The exact Tablet behavior, card widths, number of visible cards, and carousel movement increments are not currently defined.

**Line System**

- The outer System Lines bound the primary content area with the globally defined content padding.
- The headline, supporting copy, and Google rating remain within the area defined by the outer System Lines.
- The Carousel is not constrained by the internal System Lines and may extend beyond the right outer System Line to reveal part of the next card.

### How It Works

**Purpose**

Present the home-selling process as a simple, fast, and clear three-step process, while guiding the user toward starting the process.

**Structure**

- Section Label: **HOW IT WORKS**, with Gear icon.
- Headline: **Selling your house can be simple.**
- Short supporting copy.
- Three process steps:
  1. **Tell us about your house**
  2. **Get your cash offer**
  3. **Choose your closing date**
- Component: **Button / Primary**
- Compact benefits row below the CTA.

**Visual Direction**

- Use an asymmetric composition rather than three identical cards.
- The headline and supporting copy are positioned on the left as an independent content block.
- The three process steps appear to the right of the headline block.
- **Step 02 is the dominant element in the composition**, displayed as a larger and taller card.
- Steps 01 and 03 are smaller and serve as supporting elements around Step 02.
- Subtle circular arrows connect the steps and clarify the direction of the process.
- The numbers **01 / 02 / 03** act as prominent visual elements and are integrated with the icons.
- Brand Green is used to emphasize the numbers, icons, and small details, while the cards themselves remain light and understated.
- The Primary CTA is positioned below the step composition and uses the system's **Button / Primary** component.
- A compact horizontal benefits row appears below the CTA.
- Preserve generous whitespace and a clear hierarchy between the headline, process steps, and CTA.
- Do not turn the three steps into three symmetrical, identical cards. The difference in size and visual weight between the steps is an intentional part of the composition.
- Position the Section Label above the primary headline.

**Behavior**

- The Primary CTA leads the user into the conversion process.

**Technical Specifications**

No additional How It Works-specific technical specifications are currently defined. Global typography, spacing, color, component, and layout rules apply unless explicitly overridden.

**Responsive Behavior**

No specific Tablet or Mobile composition is currently defined.

The section should preserve the sequence and hierarchy of the three steps on smaller viewports. The exact stacking, positioning of the CTA and benefits, and treatment of the asymmetric step composition remain to be defined.

**Line System**

- The main composition containing the headline and three process steps is not constrained by the internal System Lines.
- The Benefits row is divided according to the four visual areas, with one Benefit in each area and appropriate padding from the outer System Lines.
- The three internal System Lines serve as dividers between the Benefits and may use a subtle Brand Green treatment within this area only.

### Local / Area Section

**Purpose**

Create a meaningful local section that differentiates the individual Area Pages across the website.

The overall design structure remains consistent between pages, while the content changes according to the specific area — Cleveland, Cleveland Heights, South Euclid, etc.

Primary goals:

- Establish local familiarity and credibility.
- Provide useful information about the specific area.
- Highlight nearby cities and neighborhoods where we buy houses.
- Create unique and meaningful local content for each Area Page.

**Content**

- Section Label: **Location**, with Location icon.
- Large area-specific headline.
- Short supporting copy.
- Local map.
- Nearby cities / neighborhoods.
- Link to all areas where we buy houses.
- Local statistics.
- Short local-market familiarity content.
- Data sources.
- Optional CTA at the end of the section.

**Structure**

This is intentionally a relatively long and spacious section. Do not attempt to compress all content into a single viewport.

The section uses a two-column composition, but neither column needs to be fully occupied at every point.

**Left Column**

- Introductory content.
- Local map.
- Local statistics.

**Right Column**

- Nearby cities / neighborhoods.
- Local market familiarity content.

Whitespace and intentionally unoccupied areas are part of the composition.

**Visual Direction**

- Use generous whitespace.
- Keep the number of elements restrained.
- Do not fill columns or empty areas simply because space is available.
- Use subtle cards and dividers.
- Position the Section Label above the primary headline.
- Maintain the site's overall design language through consistent typography, border radius, spacing, and iconography.

**Behavior**

- Content changes according to the specific Area Page.
- The **See all areas we buy in →** link leads to the complete list of areas where we buy houses.
- Local statistics may vary between Area Pages according to what is relevant to each location.
- The CTA at the end of the section is optional.

**Technical Specifications**

No additional Local / Area Section-specific technical specifications are currently defined. Global typography, spacing, component, color, and layout rules apply unless explicitly overridden below.

**Responsive Behavior**

No specific Tablet or Mobile composition is currently defined.

The section should preserve the hierarchy and relationship between the introductory content, local map, nearby areas, statistics, and local-market content on smaller viewports.

Exact column stacking, content ordering, map dimensions, and statistics composition for Tablet and Mobile remain to be defined.

**Line System**

- The outer System Lines bound the content area.
- The center System Line serves as the primary division between the left and right columns.
- The two additional internal System Lines remain visible but do not dictate the positioning of elements within either column.

**Local Map**

- Appears only within the left column.
- Remains relatively compact and does not dominate the section.
- Shows the current area and relevant surrounding areas.
- Uses a simple and understated visual treatment that supports the content rather than competing with it.

**Nearby Areas**

Nearby cities and neighborhoods are presented visually rather than as a conventional text list.

- Use a subtle grid with simple icons and area names.
- Conclude the group with a clear link:

**See all areas we buy in →**

**Local Statistics**

Display a small number of useful, area-specific data points in a format that is easy to scan and creates a distinct visual moment within the section.

The statistics use an asymmetric composition of blocks/cards with varying sizes and proportions, inspired by Stripe, rather than a generic grid of identical cards.

- Keep the overall statistics composition relatively small and compact compared with the rest of the section.
- Keep the statistics within the left column.
- Use varying card sizes and heights to create hierarchy and controlled asymmetry.
- Individual statistics may receive greater visual emphasis than others.
- Do not make the cards identical in size or proportion.
- Maintain a small and consistent gap between cards.
- Cards use **bold, solid background colors** and may intentionally extend beyond the Brand Green and Neutral Palette.
- Multiple colors may be used within the same statistics group, such as purple, turquoise, and different shades of blue.
- The color treatment acts as an intentional **visual accent** within the page and does not require the same palette to be used elsewhere.
- Text and icons on the cards should be light/white with high contrast.
- Maintain the site's overall design language through consistent typography, border radius, spacing, and iconography.
- Do not add statistics simply to fill available space.
- Data sources appear discreetly below the statistics composition.
- The specific data points may vary between Area Pages according to what is relevant to each location.

**Local Market Content**

A short editorial-style content block appears in the right column to reinforce familiarity with the local market.

Examples:

**We live and work here.  
This is our market.**

The supporting copy should be specific to the individual area rather than generic company messaging.

### FAQ

**Purpose**

Provide clear and quick answers to the main questions sellers may have, reduce uncertainty and objections, and help users understand the process without overloading the rest of the page with information.

**Content**

- Section Label: **FAQ**, no icon.
- Headline: **Questions? We’ve got answers.**
- Short supporting copy.
- **Contact us** link for users who did not find the answer they were looking for.
- List of frequently asked questions.

**Example Questions**

- How does the process work?
- Do I need to make any repairs?
- Are there any fees or commissions?
- How quickly can I sell my house?
- How do you determine your offer?
- Am I obligated to accept the offer?

**Structure**

- Two-column asymmetric layout.
- Left column is relatively narrow and contains:
  - Section Label above the primary headline.
  - Headline.
  - Supporting copy.
  - Contact us link.
- The right column is wider and contains the Accordion.

**Visual Direction**

- Keep the section highly minimal and primarily driven by typography, whitespace, and subtle lines.
- The Accordion should feel wide, clean, and visually light.
- Do not add icons, illustrations, cards, or decorative elements that are not required.
- Preserve generous whitespace and do not attempt to fill empty areas.
- The FAQ should feel editorial rather than component-heavy.
- Visual hierarchy should come primarily from typography, spacing, and the Accordion interaction rather than from cards or decorative UI.

**Behavior**

- Questions are displayed using the **Accordion** defined in the Component Library.
- One question may be open by default.

**Technical Specifications**

No additional FAQ-specific technical specifications are currently defined. Global typography, spacing, component, color, and layout rules apply unless explicitly overridden.

**Responsive Behavior**

No specific Tablet or Mobile composition is currently defined.

The relationship between the content block and Accordion should remain clear on smaller viewports. Exact stacking, ordering, and Accordion width behavior remain to be defined.

**Line System**

- The outer System Lines bound the content area using the globally defined content padding.
- The center System Line serves as the primary division between the headline/content area and the Accordion.
- The two additional internal System Lines remain visible but do not dictate the positioning of content within either area.

### Final CTA

**Purpose**

Conclude the page with a clear and simple conversion path.

At this stage, the user has already received the necessary information throughout the page, so the section does not introduce new information. Instead, it focuses attention on the primary action — receiving an offer for their house.

**Content**

- Section Label: **Ready When You Are**, no icon.
- Headline: **Ready to sell your Cleveland house?**
- Short supporting copy.
- Component: **Button / Primary**
- Short reassurance row below the button, for example: **100% Free • No Obligation • Secure**

**Structure**

- Section Label positioned above the primary headline.
- Headline and supporting copy.
- Primary CTA.
- Reassurance row positioned below the CTA.
- Content is centered and presented as a single focused composition.

**Visual Direction**

- Keep the section simple and focused, using a minimal number of elements.
- The headline is the primary visual focal point.
- Position the Section Label above the primary headline.
- Preserve generous whitespace around the content.
- Do not add cards, statistics, or additional supporting elements.

**Behavior**

- The Primary CTA leads to the same **Seller Lead Form Flow** used by the Hero and Header CTAs.
- On Area Pages, the headline and supporting content adapt to the current city / area.

**Technical Specifications**

No additional Final CTA-specific technical specifications are currently defined. Global typography, spacing, component, color, and layout rules apply unless explicitly overridden.

**Responsive Behavior**

No specific Tablet or Mobile composition is currently defined.

The centered hierarchy of the Section Label, headline, supporting copy, CTA, and reassurance row should be preserved across breakpoints.

**Line System**

- The outer System Lines bound the content area using the globally defined content padding.
- The centered content — headline, supporting copy, and CTA — is not constrained by the internal System Lines.
- The internal System Lines remain visible as part of the visual system but do not dictate the composition.

## Situation Pages

**Purpose**

Create a consistent page template for content addressing different home seller situations, such as **Foreclosure**, **Inherited Property**, or **Tired Landlord**.

The goal is to provide users with information relevant to their specific situation, build trust, and gradually guide them toward the offer process.

**Page Structure**

1. Header
2. Hero
3. Situation Content
4. Final CTA
5. Footer

**Visual Direction**

- Keep the page clean, modern, and spacious while maintaining the same visual language as the rest of the website.
- Each page should feel specific to the individual situation rather than like a generic template with replaced content.
- Media and content should adapt to the specific situation.
- Use generous whitespace, strong typography, and a restrained number of visual elements.
- The Hero should remain simpler and more focused than the Hero used on Area Pages.

### Hero

**Purpose**

Immediately confirm that the user has reached a page relevant to their specific situation, establish relevance and trust, and encourage them to continue reading.

**Content**

- Section Label: **Situation Name**.
- H1 specific to both the situation and the area.
- Short supporting copy.
- One authentic image relevant to the situation.
- No CTA within the Hero.

**Structure**

- Simple, spacious two-column composition.
- **Left:** Section Label, H1, and supporting copy.
- **Right:** One primary image.
- The Section Label is positioned above the primary headline.

**Visual Direction**

- The headline is the dominant element in the section.
- The image is large and visually present, with a subtle corner radius.
- Do not use cards or unnecessary decorative elements.
- Preserve generous whitespace.
- Keep the overall composition simpler and more focused than the Area Page Hero.

**Behavior**

- The Hero does not include a direct action or form.
- Content and imagery change according to the specific Situation Page.
- The Header remains the site's global Header.

**Technical Specifications**

No additional Situation Hero-specific technical specifications are currently defined. Global typography, spacing, component, color, and layout rules apply unless explicitly overridden below.

**Responsive Behavior**

No specific Tablet or Mobile composition is currently defined.

The relationship and hierarchy between the text content and primary image should be preserved on smaller viewports. Exact stacking, ordering, and image proportions remain to be defined.

**Line System**

- The outer System Lines bound the content area using the globally defined content padding.
- The center System Line may serve as the division between the text area on the left and the image on the right.
- The remaining internal System Lines stay visible but do not dictate the composition.

**Background Gradient**

- Most of the Hero remains on a white background.
- A subtle, light gray-green gradient appears toward the bottom.
- The gradient uses a broad, arched / elliptical shape: higher at the sides and lower toward the center.
- The transition is soft, with no hard boundary, and creates depth and separation from the following section.
- The gradient spans the full viewport width and is not constrained by the Line System.

### Situation Content

**Purpose**

Present in-depth, situation-specific content in a clear and readable format, while allowing users to navigate quickly between the key questions and topics on the page.

**Content**

- Sidebar containing a list of questions / topics covered on the page.
- Main content area containing a continuous sequence of questions and answers.
- The number, order, and wording of questions are determined during the content-writing stage for each Situation Page.
- Answers may include paragraphs, lists, images, callouts, and other relevant elements as needed.
- A small contact CTA appears at the bottom of the Sidebar.
- The main content area does not use a fixed Section structure.

**Structure**

- The section is divided into a narrow Sidebar and a wider main content area.
- The Sidebar contains the page navigation and contact CTA.
- The main content area contains the complete sequence of questions and answers.
- Content elements such as images and callouts are incorporated only when justified by the content.

**Visual Direction**

- The section uses a white background.
- The Sidebar is minimal and text-based, without circles or additional navigation indicators.
- The active Sidebar item receives subtle emphasis using the Brand color.
- Question headings are large and prominent, with their answers positioned directly below.
- Do not use divider lines between questions and answers.
- Maintain generous whitespace between questions.
- Images and additional visual elements are included only when the content justifies them.

**Behavior**

- Each Sidebar item acts as an anchor to its corresponding question / topic.
- On Desktop, the Sidebar remains sticky while the user scrolls through the Situation Content area.
- The active Sidebar item receives subtle visual emphasis based on the user's current position within the page.

**Technical Specifications**

No additional Situation Content-specific technical specifications are currently defined. Global typography, spacing, component, color, and layout rules apply unless explicitly overridden below.

**Responsive Behavior**

No specific Tablet or Mobile behavior is currently defined for the Sidebar navigation.

The Desktop sticky Sidebar behavior applies only to Desktop. The exact navigation treatment, content ordering, and Sidebar behavior for Tablet and Mobile remain to be defined.

**Line System**

- The five-line System remains visible throughout the section.
- The left internal System Line integrates with the Sidebar and serves as a navigation indicator. At the active item, the relevant portion of the line changes to Brand Green.
- The right outer System Line bounds the main content area.
- Text content maintains the globally defined padding from the right outer System Line.
- Images and media may extend to the right outer System Line and terminate directly on it.

### Final CTA

**Purpose**

Conclude the Situation Page with a clear conversion point after the user has received the information relevant to their situation.

**Content**

- Short headline tailored to the specific situation.
- Short supporting copy.
- Primary CTA: **Get My Cash Offer**.
- Short microcopy below the CTA when appropriate.

**Structure**

- Headline and supporting copy.
- Primary CTA.
- Optional microcopy positioned below the CTA.
- Content is presented as a single focused composition.

**Visual Direction**

- Keep the section simple and spacious with a strong visual hierarchy.
- Create clear visual separation from the preceding Q&A content.
- Do not add unnecessary cards or supporting elements.
- The section may use a different background treatment in accordance with the **Background System**.

**Behavior**

- The Primary CTA leads to the offer process.
- Content may change according to the specific situation of the page.

**Technical Specifications**

No additional Situation Final CTA-specific technical specifications are currently defined. Global typography, spacing, component, color, and layout rules apply unless explicitly overridden.

**Responsive Behavior**

No specific Tablet or Mobile composition is currently defined.

The hierarchy between the headline, supporting copy, CTA, and optional microcopy should be preserved across breakpoints.

**Line System**

- Content remains within the two outer System Lines using the globally defined content padding.
- The internal System Lines remain visible but are not required to dictate element alignment.
