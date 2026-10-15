---
name: ZeroLag Hardware & Gaming
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#5b403d'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#8f6f6c'
  outline-variant: '#e4beba'
  surface-tint: '#ba1a20'
  primary: '#af101a'
  on-primary: '#ffffff'
  primary-container: '#d32f2f'
  on-primary-container: '#fff2f0'
  inverse-primary: '#ffb3ac'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#11651d'
  on-tertiary: '#ffffff'
  tertiary-container: '#307f34'
  on-tertiary-container: '#d8ffd0'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb3ac'
  on-primary-fixed: '#410003'
  on-primary-fixed-variant: '#930010'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#a3f69c'
  tertiary-fixed-dim: '#88d982'
  on-tertiary-fixed: '#002204'
  on-tertiary-fixed-variant: '#005312'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '800'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-tablet: 1.25rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 1.5rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
---

## Brand & Style

The design system establishes a high-performance, strictly utilitarian visual language tailored for the Argentine PC hardware and enthusiast gaming market. Moving away from clichéd gamer tropes—such as artificial neon glows, skeuomorphic textures, and heavy ambient drop-shadows—the interface adopts an uncompromising, disciplined Flat Design ethos.

The visual tone is precise, technical, and dependable. It addresses power users, hardware modders, and competitive gamers who demand clarity, immediate price validation, and unhindered navigation through complex spec sheets and component benchmarks. Separation and hierarchy are achieved entirely through structural 1px solid boundaries and calibrated surface contrast.

## Colors

The color system enforces strict contrast guidelines and functional chromatic roles across both modes.

### Light Mode (Default)
- **Primary / Accent**: `#D32F2F` — Primary CTAs, active states, key conversion triggers, and primary price tags.
- **Primary Hover / Active**: `#B71C1C` — Interaction feedback for primary elements.
- **Background**: `#FFFFFF` — Pure white foundation for maximum reading contrast.
- **Surface / Card**: `#F5F5F5` — Structured containers, component card backgrounds, and input wells.
- **Border**: `#E0E0E0` — Neutral 1px borders defining visual bounds.
- **Text Primary**: `#121212` — Carbon black for high-contrast titles, product codes, and specifications.
- **Text Secondary**: `#616161` — Neutral gray for secondary metadata, specs labels, and breadcrumbs.

### Dark Mode
- **Primary / Accent**: `#E53935` — Slightly brightened red for AAA contrast against dark bases.
- **Primary Hover / Active**: `#B71C1C` — High-intensity active state.
- **Background**: `#121212` — Deep carbon slate.
- **Surface / Card**: `#1E1E1E` — Elevated flat canvas.
- **Border**: `#333333` — Low-reflection structural borders.
- **Text Primary**: `#FFFFFF` — Pure white for headline legibility.
- **Text Secondary**: `#B0B0B0` — Balanced mid-tone text.

### Status Palette
- **Success**: `#2E7D32` (Stock confirmations, payment approved, free shipping indicators).
- **Warning**: `#F57C00` (Low stock counters, reservation hold timers).
- **Error**: `#C62828` (Validation alerts, payment rejection, compatibility conflicts).
- **Info**: `#1976D2` (Shipping carrier notices, Andreani/Correo Argentino tracking updates).

### Accessibility Rules
All solid primary red (`#D32F2F` or `#E53935`) interactive elements or badges must feature pure white (`#FFFFFF`) text labels without exception to maintain WCAG AAA compliance.

## Typography

The design system relies on `Inter` across all touchpoints to preserve technical precision, high tabular readability, and neutral rhythm. 

- **Price Formatting**: Hardware prices in Argentine Pesos (`$ ARS`) use tabular numerals (`font-feature-settings: "tnum"`) with bold weights to avoid layout shifting on filter updates.
- **Technical Specs**: Part numbers, serial codes, and compatibility metrics utilize `label-md` or `label-sm` with slight positive tracking for crisp optical separation.
- **Hierarchy Enforcement**: Do not alter font weights outside `400`, `600`, `700`, and `800`.

## Layout & Spacing

A modular 12-column responsive grid governs the architecture:
- **Mobile (< 768px)**: 4 columns, 16px margins, 16px gutters.
- **Tablet (768px - 1023px)**: 8 columns, 24px margins, 20px gutters.
- **Desktop (>= 1024px)**: 12 columns, 32px margins, 24px gutters, max-width constrained to 1320px.

All inner paddings follow strict 4px base increments. Product catalog grids prioritize high density, keeping card gap tightly grouped with `space-md` or `space-lg` to emulate functional technical spec dashboards.

## Elevation & Depth

This system operates under an absolute zero-shadow philosophy:
- `box-shadow: none !important;`
- `drop-shadow: none !important;`
- `text-shadow: none !important;`

### Separation Mechanics
1. **Borders**: All components, modal dialogs, flyouts, and panels are circumscribed by an explicit `1px solid` border (`#E0E0E0` in Light Mode, `#333333` in Dark Mode).
2. **Surface Shifts**: Layer depth is created solely by shifting between Background (`#FFFFFF` / `#121212`) and Surface (`#F5F5F5` / `#1E1E1E`). Modals, dropdown menus, and overlays rely on high-contrast surface transitions combined with a solid 1px border.
3. **Modals & Overlays**: Backdrop scrims use an opaque or flat dimmed overlay (`rgba(18, 18, 18, 0.65)` in Light Mode, `rgba(0, 0, 0, 0.75)` in Dark Mode) without blur filters (`backdrop-filter: none`).

## Shapes

The interface embraces a strictly restrained geometric profile. Radii never exceed 4px (`0.25rem`):
- **Base Shape (`roundedness: 1`)**: Standard buttons, inputs, tags, and product cards utilize a subtle `2px` to `4px` radius.
- **Structural Corners**: Data tables, filter sidebars, top banners, and full-width navigation bars use `0px` radius to preserve sharp engineering alignment.
- **Never Pill-Shaped**: Buttons and chips must never use fully circular or pill borders (`border-radius: 9999px` is strictly forbidden).

## Components

### Buttons
- **Primary CTA**: Solid Primary (`#D32F2F` in Light, `#E53935` in Dark), label in pure `#FFFFFF`, font weight `600`, 0px or 4px radius, 0px border. Hover transitions to `#B71C1C`.
- **Secondary / Technical**: Surface background (`#F5F5F5` / `#1E1E1E`), 1px solid border (`#E0E0E0` / `#333333`), text in Text Primary. Hover state applies an inverted background or high-contrast border.
- **Destructive**: Outline 1px `#C62828` with `#C62828` text, transitioning on hover to solid `#C62828` with `#FFFFFF` text.

### Product Cards
- **Structure**: Surface fill with a 1px solid border. Padding: `space-md`.
- **Image Container**: Flat neutral box at the top with `#FFFFFF` (in Light) or `#121212` (in Dark) to present product photography clearly.
- **Price Block**: Distinctly grouped. Cash/Transfer price emphasized via `headline-md` in Primary Red, with installment details ("12 cuotas sin interés") displayed in `body-sm` Text Secondary.
- **Stock & Shipping Indicators**: Minimalist indicators showing national shipping availability (Correo Argentino / Andreani) or CABA in-store pick-up ("Retiro gratis en CABA").

### Form Inputs & Selects
- Height: 40px (Desktop), 44px (Mobile touch targets).
- Background: Surface (`#F5F5F5` / `#1E1E1E`).
- Border: 1px solid neutral border. Focus state applies a 1px solid Primary Red border with no ring/glow.
- Text: Input text `#121212` / `#FFFFFF`. Placeholder `#616161` / `#B0B0B0`.

### Chips & Filters
- Compact height (28px - 32px), 2px to 4px radius.
- Unselected: Surface fill, 1px solid border, Text Secondary.
- Selected: Primary Red background with pure white text and 0px shadow.

### Checkboxes & Radios
- Size: 18x18px.
- Checkbox: 2px border radius. 1px solid border. Selected state is solid Primary Red with a sharp white checkmark.
- Radio: Circular, 1px solid border, filled centered dot on active state.

### E-Commerce Badges
- **Free Shipping / Cuotas**: Rectangular tag with 2px radius, solid `#2E7D32` (or subtle tint with solid border), text in `#FFFFFF`.
- **Offer / Descuento**: Primary Red background, pure white bold text (`label-sm`).