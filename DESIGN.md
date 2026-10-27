---
name: Kinetic Infrastructure
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d6c4ac'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#9f8e78'
  outline-variant: '#514533'
  surface-tint: '#ffba3f'
  primary: '#ffd698'
  on-primary: '#432c00'
  primary-container: '#ffb100'
  on-primary-container: '#6a4700'
  inverse-primary: '#7f5600'
  secondary: '#cbc6b9'
  on-secondary: '#323028'
  secondary-container: '#49473d'
  on-secondary-container: '#b9b5a8'
  tertiary: '#dedcdb'
  on-tertiary: '#303030'
  tertiary-container: '#c2c0c0'
  on-tertiary-container: '#4f4e4e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdeae'
  primary-fixed-dim: '#ffba3f'
  on-primary-fixed: '#281800'
  on-primary-fixed-variant: '#604100'
  secondary-fixed: '#e7e2d5'
  secondary-fixed-dim: '#cbc6b9'
  on-secondary-fixed: '#1d1c14'
  on-secondary-fixed-variant: '#49473d'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  color-dark: '#050505'
  color-dark-alt: '#252525'
  color-cream: '#D6D1C4'
  color-muted: '#777777'
  color-border: '#B7B7B7'
  color-pure-black: '#000000'
  color-pure-white: '#FFFFFF'
typography:
  display-hero:
    fontFamily: Space Grotesk
    fontSize: 5rem
    fontWeight: '500'
    lineHeight: 5.25rem
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Space Grotesk
    fontSize: 2.75rem
    fontWeight: '500'
    lineHeight: 3rem
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 3.25rem
    fontWeight: '500'
    lineHeight: 3.75rem
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 2rem
    fontWeight: '500'
    lineHeight: 2.5rem
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 2.25rem
    fontWeight: '500'
    lineHeight: 2.75rem
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 1.5rem
    fontWeight: '500'
    lineHeight: 2rem
    letterSpacing: 0em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.6rem
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.4rem
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: 1rem
    letterSpacing: 0.12em
  caption:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: 1.25rem
    letterSpacing: 0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  section-padding-desktop: 7.5rem
  section-padding-tablet: 4rem
  section-padding-mobile: 2.5rem
---

## Brand & Style

This design system embodies an editorial utility aesthetic built for high-stakes energy transition and institutional infrastructure. It merges the mechanical precision of transmission telemetry with the refined elegance of modern European editorial design. It communicates institutional authority, capital-grade reliability, and technological foresight across African power networks.

The visual style is **Modern Utility Editorial**:
- **Monochrome Foundation**: Deep blacks, architectural dark grays, and warm off-white cream surfaces form a disciplined substrate.
- **Electric Accentuation**: A solitary warm amber-yellow punch (`#FFB100`) functions as a deliberate signifier of power, active telemetry, and primary actions.
- **Architectural Framing**: Layouts are governed by thin, mechanical hairline rules, technical overlines, structural grid lines, and expansive negative space.
- **Editorial Typography**: Typographic pacing balances massive display titles anchored across viewports with dense, scannable data modules and muted technical annotations.
- **Cinematic Depth**: Full-bleed media textures, dark gradients, and restrained mathematical vector watermarks replace traditional surface gradients or dropped shadows.

## Colors

The palette operates under a default dark mode paradigm. It draws directly from the physics of energy transmission: raw black slate, conductive copper-amber accents, and tactile cream paper.

### Functional Roles
- **Primary Accent (`#FFB100`)**: Reserved exclusively for dynamic, high-signal UI elements: active states, primary CTA buttons, kinetic keyline indicators, and telemetry alerts. It is never used for lengthy paragraph copy.
- **Neutral Deep (`#050505`)**: The core canvas tone. Provides maximum contrast for technical charts, vector schematics, and video backdrops while eliminating harsh OLED clipping.
- **Secondary Neutral (`#252525`)**: Used for nested cards, interactive panels, elevated module backgrounds, and secondary interactive layers over `#050505`.
- **Soft Editorial Surface (`#D6D1C4`)**: A tactile cream used as an alternate section background or high-impact modular card block to invert the visual rhythm and introduce warmth. When on cream backgrounds, foreground typography switches to `#000000`.
- **Muted Text (`#777777`)**: Dedicated to captions, technical step numbers, metadata timestamps, and secondary contextual labels.
- **Structural Border (`#B7B7B7`)**: Applied strictly at `1px` stroke to form hairline bounding boxes, structural separators, and inactive container perimeters.

## Typography

The typography pairs **Space Grotesk** for display, structural titles, and data badges with **Plus Jakarta Sans** for body exposition and technical reading.

### Typographic Hierarchy Rules
- **Display & Section Titles**: Set in Space Grotesk at medium weight (`500`) with tight letter spacing. Displays command large scale but maintain an editorial line balance.
- **Section Overlines (`label-caps`)**: Always uppercase, tracked wide (`0.12em`), set in Space Grotesk (`500`). Used as structural category indicators (e.g., `CONTEXT`, `MODEL`, `HOW IT WORKS`).
- **Body Rhythm**: Set in Plus Jakarta Sans (`400`). Long-form narrative blocks should remain bounded between 45 and 65 characters per line to preserve effortless scan rates.
- **Editorial Lead-ins**: Card titles and numeric sequence headers (`01`, `02`) employ Space Grotesk to emphasize precision and engineering rigor.

## Layout & Spacing

The layout is built upon an architectural grid with expansive vertical pacing that creates breathing room for dense infrastructure telemetry and technical documentation.

### Grid & Max-Width Policy
- **Maximum Content Container**: Hard cap at `1440px` centered on viewports exceeding `1920px`. Decorative starburst gridlines, full-bleed images, and video backdrops are allowed to break bounds and touch viewport edges.
- **Column Models**:
  - **Desktop (≥992px)**: 12-column layout; card matrices format as 3 columns.
  - **Tablet Portrait (768px – 991px)**: 8-column layout; card matrices format as 2 columns.
  - **Mobile (<768px)**: 4-column layout; full single-column linear stack.

### Section Vertical Padding
Vertical intervals enforce structural chaptering:
- **Desktop**: `120px` (`7.5rem`)
- **Tablet**: `64px` (`4rem`)
- **Mobile**: `40px` (`2.5rem`)

### Viewport Hero Handling
Hero sections sit at `100svh` with primary content anchored to the bottom left via `flex-end` vertical justification. Bottom-docked content uses explicit load-based reveals to ensure visibility without requiring scroll triggering.

## Elevation & Depth

This system avoids soft skeuomorphic drop shadows. Depth is achieved via **tonal stacking**, **structural hairlines**, and **tactile surface contrasts**.

### Depth Layers
- **Base Level (`#050505`)**: The core canvas depth.
- **Container Level 1 (`#252525`)**: Elevated card bodies, status docks, and modal backings seated on the base level.
- **Container Level 2 (`#D6D1C4`)**: High-contrast tactile feature modules. Employs light paper surfacing nested within dark architecture.
- **Hairline Outlines**: All card modules, status badges, and rule dividers use a crisp `1px solid #B7B7B7` border at `0.2` to `0.4` opacity, preserving an architectural blueprint feel.
- **Translucent Overlays**: Media and background video feeds are coated in a downward-weighted linear black gradient (`rgba(5, 5, 5, 0.2)` transitioning to `rgba(5, 5, 5, 0.95)` at 100svh baseline) to ensure foreground text legibility.
- **Interactive Shift**: Card depth is communicated dynamically during user hover via a `-4px` vertical translation (`translateY(-4px)`) coupled with a border transition to `#FFB100`, rather than diffuse drop shadows.

## Shapes

The geometric framework balances technical rigor with modern tactile interfaces.

- **Primary Geometry**: Set at Level 2 (`roundedness: 2`). Cards, primary containers, and operational status modules feature a subtle `0.5rem` (`8px`) border radius.
- **Micro-Elements**: Chips, tags, and data metric indicators utilize a tightened `0.25rem` (`4px`) radius to maintain a crisp, machined finish.
- **Pill Exception**: Primary CTA buttons and utility status chips may selectively utilize full pill geometry (`9999px`) when functioning as self-contained floating triggers or interactive pills.
- **Dividers & Double Rules**: Vector brand signatures and structural section breakers feature parallel `1px` mechanical rule lines spaced `4px` apart.

## Components

### Buttons
- **Primary Action**: Solid `#FFB100` background with `#050505` text, Space Grotesk `500` weight, `0.5rem` radius or pill finish. Padding: `0.75rem 1.75rem`. Hover state: subtle scaling (`scale(1.02)`) with brightness shift.
- **Secondary Ghost Action**: Transparent background, `1px solid #B7B7B7` (or `#FFB100` in active states), text in `#FFFFFF`. Hover state: background fill at `10%` `#FFB100` tint.
- **Utility Link**: Text-only in Space Grotesk, accompanied by an inline directional arrow (`→`) that shifts `4px` rightward on hover.

### Cards & Grid Containers
- **Standard Infrastructure Card**: Background `#252525`, `1px solid rgba(183, 183, 183, 0.2)` border, `0.5rem` border radius, padding `2rem`. Hover state transitions the border color to `#FFB100` with `translateY(-4px)` over `0.25s ease`.
- **Editorial Cream Feature Card**: Background `#D6D1C4`, text `#000000`, border `1px solid rgba(0, 0, 0, 0.1)`. Used for key statistical metrics and structural case studies.

### Chips & Status Indicators
- **Grid Telemetry Badges**: Height `28px`, padding `0 0.75rem`, Space Grotesk uppercase `0.75rem`, letter spacing `0.08em`.
- **Operational Indicator**: Accompanied by a pulsing `6px` circular node in `#FFB100` indicating live network monitoring.

### Forms & Input Fields
- **Text Inputs**: Height `48px`, background `rgba(37, 37, 37, 0.6)`, border `1px solid rgba(183, 183, 183, 0.3)`, radius `0.5rem`. Placeholder text in `#777777`. Focus state triggers a solid `1px` border in `#FFB100` without browser-default glow rings.
- **Checkboxes & Radios**: Machined `18px` squares/circles with `1px solid #B7B7B7` border. Active fill in `#FFB100` with deep dark check mark (`#050505`).

### Steppers & Phased Timelines
- **Phased Node Sequence**: Horizontal linear connectors on desktop (vertical on mobile) executed with `1px` hairlines. Step numbers displayed in Space Grotesk (`1.25rem`), active step highlighted in `#FFB100`, inactive steps in `#777777`.

### Accordions
- **Technical Disclosure Panels**: Bound top and bottom by `1px solid rgba(183, 183, 183, 0.2)` hairlines. Header text uses Space Grotesk `headline-sm`, trailing `+` icon rotates `45deg` into a `×` upon expansion, revealing body copy in Plus Jakarta Sans.