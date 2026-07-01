# NeoAistriq — Website Build Document
### Complete Specification | Developer & Designer Ready
**Version 1.0 | Generated from NeoAistriq Brand Strategy & Content Sessions**

---

## HOW TO USE THIS DOCUMENT

This document is the single source of truth for building the NeoAistriq website. It contains:
- Full site architecture and navigation spec
- Page-by-page component specifications
- Content mapped to components
- Design token placeholders (replace with NeoAistriq Design System values)
- AI Opportunity Assessor technical spec
- Interaction and animation notes
- Developer implementation notes

**Design Token Placeholders:**
All design tokens appear in this format: `[TOKEN_NAME]`
Open this document alongside the NeoAistriq Design System in Claude Desktop and replace all tokens in one pass before handing to a developer.

---

## SECTION 1: DESIGN TOKEN REFERENCE

Replace every placeholder below with the actual value from the NeoAistriq Design System.

### Colors
```
[COLOR: PRIMARY]          → Primary brand color (main CTAs, key accents)
[COLOR: PRIMARY-DARK]     → Darker variant of primary
[COLOR: PRIMARY-LIGHT]    → Lighter/tinted variant of primary
[COLOR: SECONDARY]        → Secondary accent color
[COLOR: BACKGROUND]       → Page background
[COLOR: SURFACE]          → Card / panel background
[COLOR: SURFACE-ALT]      → Alternate surface (e.g. dark sections)
[COLOR: BORDER]           → Default border color
[COLOR: TEXT-PRIMARY]     → Primary body text
[COLOR: TEXT-SECONDARY]   → Secondary / muted text
[COLOR: TEXT-INVERSE]     → Text on dark backgrounds
[COLOR: SUCCESS]          → Success / positive states
[COLOR: WARNING]          → Warning states
[COLOR: ERROR]            → Error states
```

### Typography
```
[FONT: DISPLAY]           → Hero headlines, large titles
[FONT: HEADING]           → Section headings (H2, H3)
[FONT: BODY]              → Body copy, paragraphs
[FONT: MONO]              → Code, technical labels, data
[FONT: EYEBROW]           → Eyebrow labels above headlines

[SIZE: DISPLAY]           → Hero headline size (e.g. 64px / 4rem)
[SIZE: H1]                → Page title size
[SIZE: H2]                → Section headline size
[SIZE: H3]                → Sub-section headline size
[SIZE: H4]                → Card headline size
[SIZE: BODY-LG]           → Large body text
[SIZE: BODY]              → Default body text
[SIZE: BODY-SM]           → Small/caption text
[SIZE: EYEBROW]           → Eyebrow label size
[SIZE: BUTTON]            → Button label size

[WEIGHT: DISPLAY]         → Display font weight
[WEIGHT: HEADING]         → Heading font weight
[WEIGHT: BODY]            → Body font weight
[WEIGHT: EMPHASIS]        → Bold emphasis weight

[LEADING: DISPLAY]        → Line height for display text
[LEADING: HEADING]        → Line height for headings
[LEADING: BODY]           → Line height for body text
```

### Spacing
```
[SPACE: XS]               → Smallest spacing unit (e.g. 4px)
[SPACE: SM]               → Small spacing (e.g. 8px)
[SPACE: MD]               → Medium spacing (e.g. 16px)
[SPACE: LG]               → Large spacing (e.g. 24px)
[SPACE: XL]               → Extra large (e.g. 32px)
[SPACE: 2XL]              → 2x large (e.g. 48px)
[SPACE: 3XL]              → 3x large (e.g. 64px)
[SPACE: 4XL]              → 4x large (e.g. 96px)
[SPACE: SECTION]          → Section vertical padding (e.g. 120px)
```

### Layout
```
[LAYOUT: MAX-WIDTH]       → Max content width (e.g. 1200px)
[LAYOUT: GUTTER]          → Page side margins
[LAYOUT: COLUMN-GAP]      → Grid column gap
[LAYOUT: COLUMNS]         → Default grid columns (e.g. 12)

[RADIUS: SM]              → Small border radius (e.g. 4px)
[RADIUS: MD]              → Medium border radius (e.g. 8px)
[RADIUS: LG]              → Large border radius (e.g. 16px)
[RADIUS: FULL]            → Full/pill border radius (e.g. 9999px)

[SHADOW: SM]              → Small box shadow
[SHADOW: MD]              → Medium box shadow
[SHADOW: LG]              → Large box shadow
[SHADOW: CARD]            → Card default shadow
```

### Component Tokens
```
[BUTTON: PRIMARY-BG]      → Primary button background
[BUTTON: PRIMARY-TEXT]    → Primary button text color
[BUTTON: PRIMARY-HOVER]   → Primary button hover state
[BUTTON: SECONDARY-BG]    → Secondary/ghost button background
[BUTTON: SECONDARY-BORDER]→ Secondary button border
[BUTTON: SECONDARY-TEXT]  → Secondary button text
[BUTTON: RADIUS]          → Button border radius
[BUTTON: PADDING-X]       → Button horizontal padding
[BUTTON: PADDING-Y]       → Button vertical padding

[NAV: BG]                 → Navigation background
[NAV: TEXT]               → Navigation link color
[NAV: ACTIVE]             → Active nav item color
[NAV: HEIGHT]             → Navigation bar height

[CARD: BG]                → Card background
[CARD: BORDER]            → Card border
[CARD: RADIUS]            → Card border radius
[CARD: PADDING]           → Card internal padding
[CARD: SHADOW]            → Card shadow

[INPUT: BG]               → Form input background
[INPUT: BORDER]           → Form input border
[INPUT: FOCUS]            → Form input focus border
[INPUT: RADIUS]           → Form input border radius
[INPUT: PADDING]          → Form input padding
[INPUT: TEXT]             → Form input text color
[INPUT: PLACEHOLDER]      → Placeholder text color
```

### Motion
```
[MOTION: DURATION-FAST]   → Fast transition (e.g. 150ms)
[MOTION: DURATION-BASE]   → Base transition (e.g. 250ms)
[MOTION: DURATION-SLOW]   → Slow transition (e.g. 400ms)
[MOTION: EASING]          → Default easing curve (e.g. ease-in-out)
[MOTION: EASING-ENTER]    → Enter animation easing
[MOTION: EASING-EXIT]     → Exit animation easing
```

---

## SECTION 2: SITE ARCHITECTURE

### Navigation Structure
```
Primary Nav (Desktop — horizontal):
├── What We Do
├── How We Work
├── Training
├── The Lab
├── Pricing
├── About
└── [CTA BUTTON] Take the AI Assessment  ← Primary CTA in nav

Secondary Nav (Mobile — hamburger):
Same items in vertical stack
CTA Button full-width at bottom of mobile menu

Footer Nav:
Column 1: Services
  - What We Do
  - Pricing
  - Training
Column 2: Company
  - How We Work
  - The Lab
  - About
Column 3: Start Here
  - Take the AI Assessment (primary CTA)
  - Buy AI Readiness Toolkit
  - Book a Strategy Call
Column 4: Connect
  - hello@neoaistriq.com
  - LinkedIn (icon link)
  - Location: Frisco, TX
  - Part of Fractal KX

Footer Bottom Bar:
© 2025 NeoAistriq. All rights reserved.
"AI That Runs Your Business. Not Just Assists It."
```

### Page Inventory
```
/                     → Home
/what-we-do           → Services
/how-we-work          → Delivery Model
/training             → AI for Business Outcomes
/lab                  → Agentic AI Lab
/pricing              → Pricing
/about                → About + Contact
/assessment           → AI Opportunity Assessor (interactive tool)
```

---

## SECTION 3: GLOBAL COMPONENTS

### 3.1 Navigation Bar

```
COMPONENT: GlobalNav
─────────────────────────────────────────────
Layout:        Sticky top, full width
Height:        [NAV: HEIGHT]
Background:    [NAV: BG]
Border-bottom: 1px solid [COLOR: BORDER]

Left:          NeoAistriq Logo (SVG)
               → Links to /

Center:        Nav links (desktop only, hide <768px)
               Font: [FONT: BODY]
               Size: [SIZE: BODY]
               Color: [NAV: TEXT]
               Hover: [NAV: ACTIVE]
               Active page: [NAV: ACTIVE] + underline

Right:         Primary CTA Button
               Label: "Take the AI Assessment"
               Style: Primary filled button
               → Links to /assessment

Mobile:        Hamburger icon replaces center + right
               Opens full-screen overlay menu
               All nav items + CTA full-width button

Scroll behavior: Nav background adds [SHADOW: SM] after 40px scroll
```

### 3.2 Button Components

```
COMPONENT: Button — Primary
─────────────────────────────────────────────
Background:    [BUTTON: PRIMARY-BG]
Text:          [BUTTON: PRIMARY-TEXT]
Font:          [FONT: BODY]
Size:          [SIZE: BUTTON]
Weight:        [WEIGHT: EMPHASIS]
Padding:       [BUTTON: PADDING-Y] [BUTTON: PADDING-X]
Radius:        [BUTTON: RADIUS]
Hover:         Background → [BUTTON: PRIMARY-HOVER]
               Transition: [MOTION: DURATION-FAST] [MOTION: EASING]
Active:        Scale(0.98)

COMPONENT: Button — Secondary
─────────────────────────────────────────────
Background:    [BUTTON: SECONDARY-BG]
Border:        1px solid [BUTTON: SECONDARY-BORDER]
Text:          [BUTTON: SECONDARY-TEXT]
(All other properties same as Primary)
Hover:         Border color → [COLOR: PRIMARY]
               Text color → [COLOR: PRIMARY]

COMPONENT: Button — Ghost/Text
─────────────────────────────────────────────
Background:    transparent
Text:          [COLOR: PRIMARY]
Underline on hover
Arrow icon (→) appended inline
```

### 3.3 Section Wrapper

```
COMPONENT: SectionWrapper
─────────────────────────────────────────────
Max-width:     [LAYOUT: MAX-WIDTH]
Margin:        0 auto
Padding-x:     [LAYOUT: GUTTER]
Padding-y:     [SPACE: SECTION]

Variants:
  default       → Background: [COLOR: BACKGROUND]
  alternate     → Background: [COLOR: SURFACE]
  dark          → Background: [COLOR: SURFACE-ALT]
                  Text: [COLOR: TEXT-INVERSE]
  accent        → Background: [COLOR: PRIMARY-LIGHT]
```

### 3.4 Eyebrow + Headline Pattern

```
COMPONENT: SectionHeader
─────────────────────────────────────────────
Eyebrow:
  Font:         [FONT: EYEBROW]
  Size:         [SIZE: EYEBROW]
  Color:        [COLOR: PRIMARY]
  Weight:       [WEIGHT: EMPHASIS]
  Letter-spacing: 0.08em
  Text-transform: uppercase
  Margin-bottom: [SPACE: SM]

Headline:
  Font:         [FONT: HEADING]
  Size:         [SIZE: H2]
  Weight:       [WEIGHT: HEADING]
  Color:        [COLOR: TEXT-PRIMARY]
  Leading:      [LEADING: HEADING]
  Margin-bottom: [SPACE: LG]
  Max-width:    680px (for readability)

Subheadline (optional):
  Font:         [FONT: BODY]
  Size:         [SIZE: BODY-LG]
  Color:        [COLOR: TEXT-SECONDARY]
  Leading:      [LEADING: BODY]
  Max-width:    580px
  Margin-bottom: [SPACE: XL]

Alignment variants: left (default) | center
```

### 3.5 Card Component

```
COMPONENT: Card
─────────────────────────────────────────────
Background:    [CARD: BG]
Border:        1px solid [CARD: BORDER]
Radius:        [CARD: RADIUS]
Padding:       [CARD: PADDING]
Shadow:        [CARD: SHADOW]
Hover:         Shadow → [SHADOW: MD]
               Border-color → [COLOR: PRIMARY]
               Transition: [MOTION: DURATION-BASE] [MOTION: EASING]

Card Header:
  Icon/Tag (optional): [COLOR: PRIMARY] tint background, [COLOR: PRIMARY] icon
  Title: [FONT: HEADING] [SIZE: H4] [WEIGHT: HEADING]
  Tag/Badge: pill, [COLOR: SURFACE] background, [SIZE: BODY-SM]

Card Body:
  Font: [FONT: BODY] [SIZE: BODY] [COLOR: TEXT-SECONDARY]
  Leading: [LEADING: BODY]

Card Footer (optional):
  CTA link: Ghost/Text button style
  Price: [FONT: MONO] [WEIGHT: EMPHASIS] [COLOR: PRIMARY]
```

### 3.6 Form Components

```
COMPONENT: FormInput
─────────────────────────────────────────────
Background:    [INPUT: BG]
Border:        1px solid [INPUT: BORDER]
Radius:        [INPUT: RADIUS]
Padding:       [INPUT: PADDING]
Font:          [FONT: BODY] [SIZE: BODY] [INPUT: TEXT]
Placeholder:   [INPUT: PLACEHOLDER]
Focus:         Border → [INPUT: FOCUS]
               Outline: none
               Box-shadow: 0 0 0 3px [COLOR: PRIMARY-LIGHT]

Label:
  Font:        [FONT: BODY]
  Size:        [SIZE: BODY-SM]
  Weight:      [WEIGHT: EMPHASIS]
  Color:       [COLOR: TEXT-PRIMARY]
  Margin-bottom: [SPACE: XS]

Textarea: Same as input, min-height: 120px, resize: vertical

Error state: Border → [COLOR: ERROR], error message in [COLOR: ERROR] below field
```

---

## SECTION 4: PAGE SPECIFICATIONS

---

### PAGE 1: HOME ( / )

#### 4.1.1 Hero Section

```
COMPONENT: HeroSection
─────────────────────────────────────────────
Layout:        Full viewport height (min 100vh)
               Centered content, max-width [LAYOUT: MAX-WIDTH]
Background:    [COLOR: SURFACE-ALT] (dark)
               Optional: subtle animated gradient or particle effect
               (See Animation Notes 4.1.1-A)

Content Stack (centered, max-width 760px, margin auto):

  Eyebrow tag:
    Text:      "AI-Native Lean Services"
    Style:     Pill badge
    BG:        [COLOR: PRIMARY] at 15% opacity
    Text:      [COLOR: PRIMARY]
    Font:      [FONT: EYEBROW] [SIZE: EYEBROW]

  Headline:
    Text:      "AI That Runs Your Business. Not Just Assists It."
    Font:      [FONT: DISPLAY] [SIZE: DISPLAY] [WEIGHT: DISPLAY]
    Color:     [COLOR: TEXT-INVERSE]
    Leading:   [LEADING: DISPLAY]
    Margin-bottom: [SPACE: LG]

  Subheadline:
    Text:      "NeoAistriq designs and deploys AI-native workflows
               that deliver measurable outcomes — so SMB founders
               and executives can run lean, move fast, and scale
               without adding headcount."
    Font:      [FONT: BODY] [SIZE: BODY-LG]
    Color:     [COLOR: TEXT-INVERSE] at 80% opacity
    Leading:   [LEADING: BODY]
    Margin-bottom: [SPACE: 2XL]

  CTA Group (horizontal, stack on mobile):
    Primary Button:
      Label:   "Take the Free AI Assessment"
      Icon:    → arrow right
      Style:   Primary filled
      Link:    /assessment

    Secondary Button:
      Label:   "See How We Work"
      Style:   Secondary/ghost (inverse — white border on dark bg)
      Link:    /how-we-work

  Trust line:
    Text:      "No retainers. No fluff. Outcomes first."
    Font:      [FONT: BODY] [SIZE: BODY-SM]
    Color:     [COLOR: TEXT-INVERSE] at 50% opacity
    Margin-top: [SPACE: MD]

Scroll indicator:
  Animated chevron-down icon at bottom center
  Fades out after scroll begins

ANIMATION NOTE 4.1.1-A:
  Option A (subtle): CSS animated gradient mesh in background
  Option B (minimal): Static dark background, no animation
  Recommendation: Use Option A only if Design System includes
  motion guidelines. Otherwise Option B — restraint over noise.
  Headline animates in: fade up, [MOTION: DURATION-SLOW], 
  staggered per line. CTA group fades in 200ms after headline.
```

#### 4.1.2 Problem Section

```
COMPONENT: ProblemSection
─────────────────────────────────────────────
Variant:       SectionWrapper — alternate
Layout:        Two-column (60/40) on desktop, stack on mobile

Left column (60%):
  SectionHeader:
    Eyebrow:   "Why NeoAistriq Exists"
    Headline:  "Most AI Projects Deliver Activity. We Deliver Results."

  Body paragraphs (3):
    [Full copy from Website Content doc — Page 1, Problem Section]
    Font: [FONT: BODY] [SIZE: BODY] [COLOR: TEXT-SECONDARY]
    Leading: [LEADING: BODY]
    Paragraph spacing: [SPACE: MD]

Right column (40%):
  Stat cards stack (3 cards):
    Card 1:
      Stat:    "73%"
      Label:   "of AI projects fail to scale beyond pilot stage"
      Source:  "— Gartner, 2024"
    Card 2:
      Stat:    "< 30%"
      Label:   "of SMBs measure ROI on their AI investments"
      Source:  "— McKinsey SMB Survey"
    Card 3:
      Stat:    "Fractional"
      Label:   "Cost of NeoAistriq vs. traditional AI consultancy"
      Source:  "— NeoAistriq model"

  Stat card style:
    Background: [CARD: BG]
    Border-left: 3px solid [COLOR: PRIMARY]
    Padding: [SPACE: LG]
    Radius: [RADIUS: MD]
    Stat: [FONT: DISPLAY] [SIZE: H1] [COLOR: PRIMARY] [WEIGHT: DISPLAY]
    Label: [FONT: BODY] [SIZE: BODY] [COLOR: TEXT-PRIMARY]
    Source: [FONT: BODY] [SIZE: BODY-SM] [COLOR: TEXT-SECONDARY]

NOTE: Stat sources are illustrative. Replace with verified
sources or remove source lines before publishing.
```

#### 4.1.3 Differentiator Section

```
COMPONENT: DifferentiatorSection
─────────────────────────────────────────────
Variant:       SectionWrapper — default
Layout:        SectionHeader centered + 3-column card grid

SectionHeader (centered):
  Eyebrow:     "Our Model"
  Headline:    "Lean Team. Agentic AI. Fractional Cost. Full Results."

3-column grid ([LAYOUT: COLUMN-GAP] gap):
  Card 1 — Outcomes-Based Delivery
    Icon:      Target/bullseye icon [COLOR: PRIMARY]
    Title:     "Outcomes-Based Delivery"
    Body:      [Copy from Website Content doc]

  Card 2 — AI-Native from Day One
    Icon:      Circuit/agent network icon [COLOR: PRIMARY]
    Title:     "AI-Native from Day One"
    Body:      [Copy from Website Content doc]

  Card 3 — Lean by Design
    Icon:      Lightning bolt icon [COLOR: PRIMARY]
    Title:     "Lean by Design"
    Body:      [Copy from Website Content doc]

Cards use standard Card component.
On mobile: single column stack.
On tablet: 2-column + 1 centered.
```

#### 4.1.4 Revenue Ladder Section

```
COMPONENT: RevenueLadderSection
─────────────────────────────────────────────
Variant:       SectionWrapper — dark
Layout:        SectionHeader + horizontal step progression

SectionHeader (left-aligned):
  Eyebrow:     "How to Work With Us"
  Headline:    "Start Small. Scale When You're Ready."

Step Progression (horizontal on desktop, vertical on mobile):
  5 steps connected by arrow/line connector

  Step 1 — Learn
    Label:     "01"
    Title:     "Learn"
    Service:   "AI Readiness Toolkit or Virtual Workshop"
    Desc:      "Build the strategic foundation."
    Price:     "From $297"
    CTA:       → Start Here

  Step 2 — Assess
    Label:     "02"
    Title:     "Assess"
    Service:   "AI Readiness Sprint"
    Desc:      "Get a prioritized roadmap."
    Price:     "From $3,500"
    CTA:       → Learn More

  Step 3 — Build
    Label:     "03"
    Title:     "Build"
    Service:   "Agentic Workflow Build"
    Desc:      "Deploy AI that runs your business."
    Price:     "From $8,000"
    CTA:       → Learn More

  Step 4 — Operate
    Label:     "04"
    Title:     "Operate"
    Service:   "Managed AI Operations"
    Desc:      "Protect your investment."
    Price:     "From $1,500/mo"
    CTA:       → Learn More

  Step 5 — Scale
    Label:     "05"
    Title:     "Scale"
    Service:   "Repeat across more processes"
    Desc:      "Compound your AI advantage."
    Price:     "Ongoing"
    CTA:       → See Pricing

Step component style:
  Container: rounded card, [CARD: BG], [CARD: BORDER]
  Step number: [FONT: MONO] [COLOR: PRIMARY] large
  Connector: horizontal dashed line [COLOR: BORDER]
             Arrow icon at each connector midpoint [COLOR: PRIMARY]
  Active/hover step: border [COLOR: PRIMARY], elevated shadow
```

#### 4.1.5 Services Preview Section

```
COMPONENT: ServicesPreviewSection
─────────────────────────────────────────────
Variant:       SectionWrapper — alternate
Layout:        SectionHeader + 2x2 card grid (desktop)
               Single column stack (mobile)

SectionHeader (left):
  Eyebrow:     "Services"
  Headline:    "Four Ways We Deliver Outcomes"
  Subhead:     "Every engagement scoped to your business, not a template."

4 Service Cards:
  Card 1: AI Readiness Sprint — "2-Week Engagement"
  Card 2: Agentic Workflow Build — "4–8 Week Engagement"
  Card 3: AI-Native Process Redesign — "6–10 Week Engagement"
  Card 4: Managed AI Operations — "Ongoing"

  Each card includes:
    - Tag/badge: engagement duration
    - Title
    - One-line outcome description
    - Ghost CTA: "Learn More →"

Footer CTA (centered below grid):
  Button: Primary — "Explore All Services" → /what-we-do
```

#### 4.1.6 Stack Section

```
COMPONENT: StackSection
─────────────────────────────────────────────
Variant:       SectionWrapper — default
Layout:        SectionHeader centered + logo/name strip

SectionHeader (centered):
  Eyebrow:     "Built On What's Winning"
  Headline:    "Best-in-Class Tools. No Vendor Lock-In."
  Body:        [Copy from Website Content doc]

Logo/Name Strip:
  Display as horizontal pill-badge row (wraps on mobile)
  Items:
    - Claude / Anthropic
    - LangChain
    - LangGraph
    - MCP (Model Context Protocol)
    - AWS
    - GCP

  Badge style:
    Background: [COLOR: SURFACE]
    Border: 1px solid [COLOR: BORDER]
    Radius: [RADIUS: FULL]
    Padding: [SPACE: SM] [SPACE: LG]
    Font: [FONT: BODY] [SIZE: BODY-SM] [WEIGHT: EMPHASIS]
    Color: [COLOR: TEXT-PRIMARY]

Tagline (centered, below strip):
  "We integrate with your existing business stack. We don't prescribe it."
  Font: [FONT: BODY] [SIZE: BODY] [COLOR: TEXT-SECONDARY] italic
```

#### 4.1.7 Homepage CTA Banner

```
COMPONENT: CTABanner
─────────────────────────────────────────────
Variant:       SectionWrapper — accent
Layout:        Two-column (text left, CTA right) on desktop
               Stack on mobile

Left:
  Headline:    "Ready to See What AI Can Actually Do for Your Business?"
  Body:        "Take our free 5-minute AI Opportunity Assessment and
               get an instant, personalized report showing where AI
               will move the needle in your operation."

Right (CTA stack):
  Primary Button: "Take the Free Assessment" → /assessment
  Secondary Button (ghost): "Book a Strategy Call" → /about#contact
  Trust line: "Free. Instant results. No commitment."
```

---

### PAGE 2: WHAT WE DO ( /what-we-do )

```
HERO:
  Variant:       SectionWrapper — dark
  Eyebrow:       "Services"
  Headline:      "Packaged for Clarity. Priced for Outcomes."
  Subheadline:   [Copy from Website Content doc]
  No CTA in hero — let content breathe

HOW ENGAGEMENTS WORK SECTION:
  Variant:       SectionWrapper — default
  Layout:        Single column, max-width 760px centered
  SectionHeader: "We Start With the Metric. Then We Build Backwards."
  Body:          [Copy from Website Content doc]

  Highlight box:
    "Every engagement includes a defined success metric, a delivery
    timeline, and a clear handoff. No surprises. No scope creep by design."
    Style: [COLOR: PRIMARY-LIGHT] background, [COLOR: PRIMARY] left border 4px
    Radius: [RADIUS: MD] | Padding: [CARD: PADDING]

SERVICE SECTIONS (4 total — repeat pattern):
  Variant: alternating default / alternate per service
  Layout: Two-column on desktop (content 60%, detail panel 40%)

  Left — Content:
    Tag badge: engagement duration
    Headline: service name
    Subhead: one-line outcome
    Body: [Full copy from Website Content doc]
    CTA: Primary Button

  Right — Detail Panel:
    Card component
    "What You Get" list:
      - Bullet items (checkmark icon [COLOR: PRIMARY])
      - Font: [FONT: BODY] [SIZE: BODY]
    "Best For" line:
      - Italic, [COLOR: TEXT-SECONDARY]
    Price anchor:
      - "Starting at $X,XXX"
      - Font: [FONT: MONO] [SIZE: H3] [COLOR: PRIMARY] [WEIGHT: DISPLAY]

ENGAGEMENT PRINCIPLES SECTION:
  Variant: SectionWrapper — dark
  Layout: SectionHeader + 3-column
  3 principle cards (icon + title + body)
  [Copy from Website Content doc]

BOTTOM CTA:
  Standard CTABanner component
  Headline: "Not Sure Which Service Is Right for You?"
  CTA: "Book a Free Consultation" → /about#contact
```

---

### PAGE 3: HOW WE WORK ( /how-we-work )

```
HERO:
  Variant:     SectionWrapper — dark
  Eyebrow:     "Our Delivery Model"
  Headline:    "Outcomes-Based. AI-Native. Lean by Design."
  Subheadline: [Copy from Website Content doc]

ORIGIN STORY SECTION:
  Variant:     SectionWrapper — alternate
  Layout:      Single column, max-width 760px centered
  Pull quote style for key sentence:
    "Cut the fluff, deploy what works, charge for outcomes — not effort."
    Style: Large [SIZE: H3], [FONT: DISPLAY], [COLOR: PRIMARY]
    Left border: 4px [COLOR: PRIMARY]
    Padding-left: [SPACE: XL]

DELIVERY FRAMEWORK SECTION:
  Variant:     SectionWrapper — default
  Layout:      SectionHeader + 4-phase vertical timeline

  SectionHeader:
    Eyebrow:   "Our Delivery Framework"
    Headline:  "Four Phases. One Outcome."

  Timeline component:
    Vertical line: 2px [COLOR: PRIMARY] at 15% from left
    4 phase nodes on the line

    Each phase:
      Node:    Circle, [COLOR: PRIMARY] fill, phase number
      Title:   [FONT: HEADING] [SIZE: H3] [COLOR: TEXT-PRIMARY]
      Body:    [FONT: BODY] [SIZE: BODY] [COLOR: TEXT-SECONDARY]
               [Full copy from Website Content doc]
      Duration badge (optional): e.g. "Days, not weeks"

    Phases:
      01 — Define
      02 — Design
      03 — Build & Deploy
      04 — Measure & Optimize

WHY LEAN WORKS SECTION:
  Variant:     SectionWrapper — alternate
  Layout:      Two-column (text / highlight metrics)
  [Copy from Website Content doc]

  Metrics panel (right column):
    3 highlighted stats:
      "2-person core team"
      "Direct access — no account managers"
      "Lab accelerators on every engagement"
    Style: Same as stat cards from Homepage

COMMERCIAL MODEL SECTION:
  Variant:     SectionWrapper — dark
  Layout:      SectionHeader + 3-column principles

  SectionHeader:
    Headline:  "We Don't Bill Hours. We Price Outcomes."
  Body:        [Copy from Website Content doc]

  3 principle cards:
    Fixed Scope, Fixed Price
    Outcome Milestones
    Transparent Handoff

WHAT WE DON'T DO SECTION:
  Variant:     SectionWrapper — default
  Layout:      Single column, max-width 680px
  Style:       Plain prose — no cards, no columns
               This section should feel considered and direct
  [Copy from Website Content doc]

BOTTOM CTA:
  Standard CTABanner
  "See How This Works for Your Business"
  CTA: "Book a Discovery Call" → /about#contact
```

---

### PAGE 4: TRAINING ( /training )

```
HERO:
  Variant:     SectionWrapper — dark
  Eyebrow:     "Training & Enablement"
  Headline:    "AI Fluency for the Leaders Running the Business."
  Subheadline: [Copy from Website Content doc]
  CTA Group:
    Primary:   "Join a Virtual Cohort" → #virtual
    Secondary: "Book an Onsite Workshop" → #onsite

WHY DIFFERENT SECTION:
  Variant:     SectionWrapper — alternate
  Layout:      Two-column (60/40)
  Left:        SectionHeader + body [Copy from Website Content doc]
  Right:       "Who This Is For" card
               Audience list with person icons

CURRICULUM SECTION:
  Variant:     SectionWrapper — default
  Layout:      SectionHeader + 5-module accordion or card stack

  SectionHeader:
    Eyebrow:   "What You'll Learn"
    Headline:  "A Framework Your Business Can Use the Next Day."

  5 Module Cards (numbered 01–05):
    Each: module number + title + body
    [Copy from Website Content doc]
    Style: Horizontal card, number large [COLOR: PRIMARY] on left

FORMAT SECTIONS (2 — anchored):

  SECTION ID: virtual
  Variant:     SectionWrapper — alternate
  Layout:      Two-column (content / detail panel)
  Tag:         "Live Virtual Cohort"
  Audience:    "Small Business & Community Operators"
  [Full copy from Website Content doc]
  Detail panel includes:
    - Schedule (3 sessions)
    - What You Leave With (checklist)
    - Price: "$497/person | $2,500 private cohort"
    - CTA: "Reserve Your Spot"

  SECTION ID: onsite
  Variant:     SectionWrapper — default
  Layout:      Two-column (content / detail panel)
  Tag:         "Onsite Executive Workshop"
  Audience:    "Mid-Market SMB Leadership Teams"
  [Full copy from Website Content doc]
  Detail panel:
    Two sub-panels: Half-Day / Full-Day toggle or side-by-side
    Price: "from $5,000 / from $8,500"
    CTA: "Book an Onsite Workshop"

TRAINING TO TRANSFORMATION SECTION:
  Variant:     SectionWrapper — dark
  Layout:      Single column centered
  [Copy from Website Content doc]
  CTA: "Explore Our Implementation Services" → /what-we-do

SELF-SERVE SECTION:
  Variant:     SectionWrapper — accent
  Layout:      Two-column (copy / product card)
  Product card:
    Title:     "AI Readiness Toolkit"
    Price:     "$297"
    Badge:     "Instant Download"
    CTA:       "Get the Toolkit" → [purchase link]

BOTTOM CTA:
  Standard CTABanner
  "Ready to Lead AI Adoption in Your Business?"
```

---

### PAGE 5: THE LAB ( /lab )

```
HERO:
  Variant:     SectionWrapper — dark
  Eyebrow:     "Agentic AI Lab"
  Headline:    "Where We Build What Comes Next."
  Subheadline: [Copy from Website Content doc]
  No CTA — let the page sell itself

WHAT THE LAB IS SECTION:
  Variant:     SectionWrapper — default
  Layout:      Single column, max-width 760px
  [Copy from Website Content doc]

CURRENT FOCUS AREAS SECTION:
  Variant:     SectionWrapper — alternate
  Layout:      SectionHeader + 2x2 card grid

  SectionHeader:
    Eyebrow:   "What We're Building"
    Headline:  "Current Focus Areas"

  4 Focus Cards:
    01 Multi-Agent Orchestration
    02 MCP-Connected Business Workflows
    03 Voice-First Agentic Interfaces
    04 Outcomes Measurement Frameworks
    [Full copy per card from Website Content doc]

    Card style: Icon (relevant tech icon) + number + title + body
    Icon BG: [COLOR: PRIMARY] at 10% opacity
    Icon color: [COLOR: PRIMARY]

LAB ACCELERATORS SECTION:
  Variant:     SectionWrapper — dark
  Layout:      SectionHeader + inline list with subtle grid

  SectionHeader:
    Headline:  "Built Once. Deployed Many Times."
  Body:        [Copy from Website Content doc]

  Accelerator list (4 items):
    Style: pill tags [COLOR: SURFACE] [COLOR: BORDER] border
    Labels:
      - AI Readiness Assessment Framework
      - Agentic Lead Qualification Workflow
      - Automated Operations Reporting
      - Outcome Measurement Dashboard

  Note callout:
    Style: [COLOR: PRIMARY-LIGHT] bg, [COLOR: PRIMARY] text
    "We don't publish our full accelerator library publicly.
    Client engagements include access to relevant Lab IP."

STACK SECTION:
  Variant:     SectionWrapper — default
  Layout:      SectionHeader + 4 stack cards (2x2 grid)

  SectionHeader:
    Eyebrow:   "Our Stack"
    Headline:  "The Tools We Build With"

  4 Stack Cards:
    AI / LLM Layer — Claude / Anthropic
    Agentic Orchestration — LangChain & LangGraph
    Protocol Layer — MCP
    Infrastructure — AWS & GCP
    [Full copy per card from Website Content doc]

LAB COMPOUNDING SECTION:
  Variant:     SectionWrapper — accent
  Layout:      Single column centered, max-width 680px
  [Copy from Website Content doc]

BOTTOM CTA:
  Standard CTABanner
  "Want to See What the Lab Is Working On?"
  CTA: "Talk to the Lab" → /about#contact
```

---

### PAGE 6: PRICING ( /pricing )

```
HERO:
  Variant:     SectionWrapper — dark
  Eyebrow:     "Pricing"
  Headline:    "Transparent Pricing. Outcomes-Based Value."
  Subheadline: [Copy from Website Content doc]
  Trust badges row (3 items):
    "No retainers"  |  "No hourly billing"  |  "No surprises"
    Style: icon + label, [COLOR: TEXT-INVERSE] at 70%

HOW PRICING WORKS SECTION:
  Variant:     SectionWrapper — alternate
  Layout:      Single column, max-width 680px centered
  SectionHeader:
    Headline:  "We Price on Outcomes. Not Hours."
  Body:        [Copy from Website Content doc]

PRICING MENU SECTION:
  Variant:     SectionWrapper — default
  Layout:      SectionHeader + 6 pricing tier cards (stacked)

  SectionHeader:
    Eyebrow:   "What We Offer"
    Headline:  "From Self-Serve to Full Transformation."

  6 Pricing Tier Cards (full-width horizontal cards):

    Card structure:
      Left badge: tier number (01–06) [COLOR: PRIMARY]
      Content area:
        Tag: tier category name
        Title: service name
        Description: one-line outcome
        Feature list: bullet checkmarks (4–6 items)
      Right panel:
        Price: "Starting at $X,XXX" or "$X,XXX/mo"
        Price range: "(Typical: $X – $X)" [SIZE: BODY-SM] [COLOR: TEXT-SECONDARY]
        CTA button: Primary or Secondary

    TIER 00 — Self-Serve / AI Readiness Toolkit
      Accent: [COLOR: SECONDARY] or muted treatment
      Price: "$297 one-time"
      CTA: "Buy the Toolkit"

    TIER 01 — Training: Virtual Cohort
      Price: "From $497/person"
      Sub: "$2,500 private cohort"
      CTA: "Reserve Your Spot"

    TIER 01B — Training: Onsite Workshop
      Price: "From $5,000"
      Sub: "Full-Day from $8,500"
      CTA: "Book Workshop"

    TIER 02 — AI Readiness Sprint
      Price: "From $3,500"
      Sub: "Typical: $3,500 – $6,500"
      CTA: "Start Your Sprint"

    TIER 03 — Agentic Workflow Build
      Price: "From $8,000"
      Sub: "Typical: $8,000 – $18,000"
      CTA: "Scope Your Build"
      Badge: "Most Popular" → [COLOR: PRIMARY] pill

    TIER 04 — AI-Native Process Redesign
      Price: "From $15,000"
      Sub: "Typical: $15,000 – $35,000"
      CTA: "Start a Conversation"

    TIER 05 — Managed AI Operations
      Price: "From $1,500/month"
      Sub: "Typical: $1,500 – $4,500/mo"
      CTA: "Talk About Managed Ops"
      Badge: "Recurring" → [COLOR: SUCCESS] pill

PRICING PRINCIPLES SECTION:
  Variant:     SectionWrapper — alternate
  Layout:      SectionHeader + 4-column card grid

  4 Principles:
    Starting prices are real
    We scope before we price
    No retainers for project work
    We'll tell you if you don't need us
  [Full copy per principle from Website Content doc]

DECISION GUIDE SECTION:
  Variant:     SectionWrapper — dark
  Layout:      SectionHeader + interactive decision table

  SectionHeader:
    Headline:  "Not Sure Where to Start?"

  Decision table (7 rows):
    Col 1: "If you're thinking..." (situation)
    Col 2: "Start here" (recommended service + price)
    Col 3: CTA button

    Rows:
    "I'm AI-curious but don't know where to focus"
    → AI Readiness Toolkit ($297) or Virtual Cohort ($497)

    "My leadership team needs to align on AI strategy"
    → Onsite Workshop (from $5,000)

    "I need a clear roadmap before spending more"
    → AI Readiness Sprint (from $3,500)

    "I have a specific manual process eating my margin"
    → Agentic Workflow Build (from $8,000)

    "I want to transform a core business process"
    → AI-Native Process Redesign (from $15,000)

    "I've deployed AI and need ongoing management"
    → Managed AI Ops (from $1,500/mo)

    "I want to assess before committing to anything"
    → Take the Free AI Assessment (free)

BOTTOM CTA:
  Variant:     SectionWrapper — accent
  Two CTAs side by side:
    Primary:   "Take the Free AI Assessment" → /assessment
    Secondary: "Book a Discovery Call" → /about#contact
```

---

### PAGE 7: ABOUT + CONTACT ( /about )

```
HERO:
  Variant:     SectionWrapper — dark
  Eyebrow:     "About NeoAistriq"
  Headline:    "Built to Cut the Fluff. Wired for Results."
  Subheadline: [Copy from Website Content doc]

ORIGIN STORY SECTION:
  Variant:     SectionWrapper — default
  Layout:      Two-column (content / founder visual)
  Left: [Full copy from Website Content doc]
  Right:
    Founder card:
      [Founder photo placeholder or abstract graphic]
      Name + Title
      LinkedIn link
      Short 2-line bio

PRINCIPLES SECTION:
  Variant:     SectionWrapper — alternate
  Layout:      SectionHeader + 4-card grid (2x2)
  [4 principles from Website Content doc]

  Card style:
    Number: [FONT: MONO] large [COLOR: PRIMARY]
    Title: [FONT: HEADING] [SIZE: H4]
    Body: [FONT: BODY] [COLOR: TEXT-SECONDARY]

FRACTAL KX SECTION:
  Variant:     SectionWrapper — dark
  Layout:      Single column centered, max-width 680px
  SectionHeader:
    Eyebrow:   "Our Network"
    Headline:  "Part of a Larger Ecosystem"
  Body:        [Copy from Website Content doc]
  Fractal KX logo + link

CONTACT SECTION (ANCHOR: #contact):
  Variant:     SectionWrapper — default
  Layout:      Two-column (copy left / form right)

  Left:
    Eyebrow:   "Let's Talk"
    Headline:  "Start With a Conversation."
    Body:      [Copy from Website Content doc]
    Contact info:
      Email: hello@neoaistriq.com (link)
      Location: Frisco, TX
      LinkedIn: (icon link)

  Right — Contact Form:
    Fields:
      Name (text input, required)
      Company (text input, required)
      Email (email input, required)
      "What's the business challenge you're trying to solve?"
        (textarea, required, min-height 120px)
      "How did you hear about NeoAistriq?"
        (select dropdown:
          AI Assessment Tool | LinkedIn | Google | Referral |
          Fractal KX | Other)

    Submit Button:
      Label: "Request a Discovery Call"
      Style: Primary full-width

    Alternative CTA (below form):
      "Prefer to go straight to the calendar?"
      [Book a time directly →] (calendar link)

    Form behavior:
      Inline validation on blur
      Success state: form replaced by confirmation message
        "Thanks — we'll be in touch within 1 business day."
      Error state: inline error messages per field
```

---

### PAGE 8: AI OPPORTUNITY ASSESSOR ( /assessment )

```
OVERVIEW:
  This is NeoAistriq's primary inbound lead generation tool.
  A Claude API-powered interactive assessment that:
  1. Asks the user 8 questions about their business
  2. Sends responses to Claude API with a structured prompt
  3. Returns a personalized AI Opportunity Report
  4. Gates the full report behind email capture
  5. Recommends the right NeoAistriq service tier
  6. Feeds lead data to NeoAistriq CRM/email

HERO:
  Variant:     SectionWrapper — dark (minimal — assessment is the focus)
  Headline:    "Find Out Where AI Will Move the Needle in Your Business."
  Subheadline: "5 minutes. Free. Instant personalized report."
  No nav distractions — minimal header, no footer until report screen

ASSESSMENT COMPONENT LAYOUT:
  Max-width: 680px, centered
  Progress bar: top of form, [COLOR: PRIMARY] fill, animated
  Question counter: "Question 3 of 8"
  One question per screen (wizard pattern)
  Back button: ghost, previous question
  Next button: primary, disabled until answer selected

QUESTION SEQUENCE:

  Q1 — Business Type
    Type: Single select cards (visual)
    Question: "What best describes your business?"
    Options:
      🏪 Local / Community Business (< 10 staff)
      🏢 Small Business (10–50 staff)
      🏬 Mid-Size Business (50–200 staff)
      🚀 Growing Startup
      🤝 Professional Services Firm

  Q2 — Industry
    Type: Single select
    Question: "What industry are you in?"
    Options:
      Retail / E-commerce
      Professional Services
      Healthcare / Wellness
      Education / Training
      Hospitality / Food & Beverage
      Manufacturing / Operations
      Technology
      Other

  Q3 — Biggest Operational Challenge
    Type: Multi-select (up to 2)
    Question: "Where does your team spend the most manual time?"
    Options:
      Customer communications & follow-up
      Sales & lead qualification
      Reporting & data analysis
      Scheduling & operations coordination
      Finance & invoicing
      HR & people management
      Marketing & content creation
      Other

  Q4 — AI Maturity
    Type: Single select
    Question: "How would you describe your current AI usage?"
    Options:
      We don't use AI at all
      We use basic tools (ChatGPT, Copilot) informally
      We've run AI pilots but nothing is in production
      We have some AI in production but want to do more

  Q5 — Team Size for Target Process
    Type: Single select
    Question: "How many people are involved in the process
               you most want to automate or improve?"
    Options:
      Just me
      2–5 people
      6–15 people
      16+ people

  Q6 — Budget Comfort
    Type: Single select
    Question: "What investment range feels right for your
               first AI initiative?"
    Options:
      Under $1,000 (self-serve)
      $1,000 – $5,000
      $5,000 – $15,000
      $15,000+
      I'm not sure yet

  Q7 — Timeline
    Type: Single select
    Question: "How soon are you looking to move?"
    Options:
      Immediately — I have an active problem
      In the next 1–3 months
      In the next 6 months
      Just exploring for now

  Q8 — Biggest AI Concern
    Type: Single select
    Question: "What's your biggest concern about investing in AI?"
    Options:
      ROI — I'm not sure it will pay off
      Complexity — it seems too technical
      Cost — I'm not sure I can afford it
      Time — I don't have bandwidth to implement it
      Trust — I'm not sure AI will work reliably
      I don't have major concerns

EMAIL GATE (after Q8, before results):
  Headline:  "Your AI Opportunity Report is Ready."
  Subhead:   "Enter your details to see your personalized results."

  Fields:
    First Name (text, required)
    Business Email (email, required)
    Company Name (text, required)

  Checkbox: "Send me the NeoAistriq AI Readiness Newsletter"
            (opt-in, unchecked by default)

  CTA: "See My Results →" (primary, full-width)

  Trust line: "We don't spam. Your data is never shared."

RESULTS SCREEN:

  Layout: Full results page (replaces assessment)

  Section 1 — AI Readiness Score
    Score display: large circular gauge, 0–100
    Score label: "Your AI Readiness Score"
    Score tier labels:
      0–30:   "Foundations Stage — Ready to Start"
      31–60:  "Emerging — Good Momentum"
      61–85:  "Advancing — High Opportunity"
      86–100: "AI-Ready — Time to Scale"

  Section 2 — Top 3 AI Opportunities
    3 opportunity cards, personalized by Claude
    Each card:
      Opportunity title
      Business impact description (personalized)
      Estimated effort: Low / Medium / High
      Estimated ROI potential: $ / $$ / $$$

  Section 3 — Recommended Starting Point
    Highlighted recommendation card:
      Service name + description
      "Based on your answers, we recommend starting with..."
      Price anchor
      CTA: Primary button → relevant service page

  Section 4 — One Custom Insight
    A single paragraph written by Claude
    Specific to their industry + challenge combination
    Conversational, direct, non-generic

  Section 5 — Next Steps
    Two options:
      Primary: "Book a Strategy Call to Review Your Results"
               → /about#contact (with results pre-filled in notes)
      Secondary: "Explore the AI Readiness Toolkit — $297"

CLAUDE API INTEGRATION SPEC:

  Model: claude-sonnet-4-6
  Max tokens: 1000

  System prompt:
    "You are NeoAistriq's AI Opportunity Analyst. NeoAistriq is an
    AI-native lean services firm that delivers outcomes-based AI
    implementations for SMB founders and executives.

    Given a business assessment, produce a JSON response with:
    {
      readinessScore: number (0-100),
      scoreRationale: string (1 sentence),
      opportunities: [
        {
          title: string,
          description: string (2-3 sentences, specific to their business),
          effort: 'Low' | 'Medium' | 'High',
          roiPotential: '$' | '$$' | '$$$'
        }
      ] (exactly 3 items),
      recommendedService: {
        name: string,
        reason: string (2 sentences),
        startingPrice: string,
        ctaLabel: string,
        ctaPath: string
      },
      customInsight: string (3-4 sentences, industry-specific,
                     actionable, written directly to the business owner)
    }

    Be specific, direct, and outcomes-focused. Never use generic
    AI consulting language. Reference their actual industry and
    challenges. Return ONLY valid JSON."

  User prompt (constructed from answers):
    "Business profile:
    - Type: [Q1 answer]
    - Industry: [Q2 answer]
    - Manual time drains: [Q3 answers]
    - Current AI maturity: [Q4 answer]
    - Team size for target process: [Q5 answer]
    - Budget comfort: [Q6 answer]
    - Timeline: [Q7 answer]
    - Biggest concern: [Q8 answer]

    Generate their AI Opportunity Report."

  Error handling:
    If API call fails: show static fallback results
    with generic but useful content + CTA to book a call

LEAD CAPTURE:
  On email gate submission, POST to:
    [CRM_WEBHOOK_URL] — replace with actual endpoint
  Payload:
    { firstName, email, company, newsletterOptIn,
      answers: {q1..q8}, timestamp }
  Also: store results in sessionStorage for results page
```

---

## SECTION 5: SITE-WIDE INTERACTION PATTERNS

### Scroll Animations
```
Default entrance animation for all sections:
  - Fade in + translate Y (20px → 0)
  - Duration: [MOTION: DURATION-SLOW]
  - Trigger: element enters viewport (IntersectionObserver)
  - Threshold: 0.15 (15% visible before triggering)
  - Stagger for grid items: 80ms per item

Cards on hover:
  - Shadow elevation: [SHADOW: SM] → [SHADOW: MD]
  - Border: default → [COLOR: PRIMARY]
  - Duration: [MOTION: DURATION-FAST]

Respect: prefers-reduced-motion
  - All animations disabled if user has reduced motion set
```

### Active States
```
Nav active item: [NAV: ACTIVE] color + 2px bottom border [COLOR: PRIMARY]
Button active: scale(0.97) + [MOTION: DURATION-FAST]
Form input focus: [INPUT: FOCUS] border + glow ring
Assessment question selected: border [COLOR: PRIMARY] + [COLOR: PRIMARY-LIGHT] bg fill
```

### Responsive Breakpoints
```
Mobile:   < 768px   — single column, stacked layout
Tablet:   768–1024px — 2-column where applicable
Desktop:  > 1024px  — full multi-column layout
Wide:     > 1440px  — max-width container kicks in, no further scaling
```

---

## SECTION 6: SEO & META

```
Global:
  Title format:   "[Page Name] | NeoAistriq — AI-Native Lean Services"
  Meta desc max:  155 characters
  OG image:       1200x630px — NeoAistriq branded (TBD)
  Favicon:        NeoAistriq logo mark (SVG + PNG fallback)

Per page:

/
  Title:       "NeoAistriq — AI That Runs Your Business. Not Just Assists It."
  Description: "AI-native lean services for SMB founders and executives.
               Outcomes-based delivery, agentic AI, fractional cost."

/what-we-do
  Title:       "Services | NeoAistriq AI-Native Lean Services"
  Description: "AI Readiness Sprints, Agentic Workflow Builds,
               and Managed AI Operations — priced for outcomes."

/how-we-work
  Title:       "How We Work | NeoAistriq Outcomes-Based AI Delivery"
  Description: "No hourly billing. No bloated teams. Just a defined
               outcome, a lean team, and agentic AI that delivers."

/training
  Title:       "AI for Business Outcomes Training | NeoAistriq"
  Description: "Live virtual and onsite AI training for SMB founders
               and executives. Strategy-first, outcomes-focused."

/lab
  Title:       "Agentic AI Lab | NeoAistriq"
  Description: "Where NeoAistriq researches, builds, and productizes
               frontier agentic AI capabilities."

/pricing
  Title:       "Pricing | NeoAistriq AI Services — Starting at $297"
  Description: "Transparent starting prices for every NeoAistriq service.
               From self-serve AI toolkits to full process transformation."

/about
  Title:       "About NeoAistriq | AI-Native Lean Services, Frisco TX"
  Description: "Built to cut the fluff. NeoAistriq is an AI-native services
               firm and Agentic AI Lab, part of the Fractal KX ecosystem."

/assessment
  Title:       "Free AI Opportunity Assessment | NeoAistriq"
  Description: "5-minute AI assessment for SMB leaders. Get an instant
               personalized report showing where AI will move your metrics."
```

---

## SECTION 7: TECHNICAL NOTES FOR DEVELOPER

```
RECOMMENDED STACK:
  Framework:     Next.js 14+ (App Router) or Astro 4+
  Styling:       Tailwind CSS (map design tokens to Tailwind config)
  Animations:    Framer Motion (respects prefers-reduced-motion)
  Forms:         React Hook Form + Zod validation
  API calls:     Server Actions (Next.js) or serverless functions
                 (never expose Anthropic API key client-side)
  CMS (optional): Contentful or Sanity for copy management

ALTERNATIVE STACK (no-code / low-code):
  Framer:        Excellent for design-to-build, supports custom code
                 components for AI Assessor
  Webflow:       Strong for marketing sites, custom code embed for
                 AI Assessor component

AI ASSESSOR SECURITY:
  CRITICAL: Anthropic API key must NEVER be exposed in client-side code
  All Claude API calls must go through a server-side function:
    Next.js: /app/api/assess/route.ts
    Vercel:  /api/assess.ts
    Netlify: /netlify/functions/assess.ts

  Rate limiting: max 10 assessment completions per IP per hour
  Input sanitization: strip HTML from all user inputs before
                      sending to Claude API

ANALYTICS:
  Recommended: Plausible (privacy-first) or GA4
  Key events to track:
    - assessment_started
    - assessment_completed
    - email_gate_submitted
    - results_viewed
    - cta_clicked (with service name param)
    - contact_form_submitted

PERFORMANCE TARGETS:
  LCP:  < 2.5s
  CLS:  < 0.1
  FID:  < 100ms
  All images: WebP format, lazy loaded
  Fonts: self-hosted or subset via Google Fonts
  Assessment: skeleton loader while Claude API responds (avg 2–4s)

HOSTING RECOMMENDATION:
  Vercel (pairs with Next.js, handles serverless API routes cleanly)
  or Netlify
```

---

## SECTION 8: CONTENT HANDOFF CHECKLIST

Before going live, confirm the following are complete:

```
CONTENT:
[ ] All [Copy from Website Content doc] references replaced
    with final copy from NeoAistriq_Website_Content.md
[ ] Stat sources on Problem Section verified or removed
[ ] Founder name, photo, bio added to About page
[ ] hello@neoaistriq.com confirmed active
[ ] Calendar booking link added (Calendly / Cal.com)
[ ] AI Readiness Toolkit purchase link added
[ ] LinkedIn URL confirmed

DESIGN TOKENS:
[ ] All [TOKEN_NAME] placeholders replaced with Design System values
[ ] Button hover states tested in browser
[ ] Dark section text contrast verified (WCAG AA minimum)
[ ] Mobile layouts reviewed at 375px, 390px, 414px widths

TECHNICAL:
[ ] Anthropic API key stored in environment variable (server only)
[ ] CRM webhook URL added to assessment lead capture
[ ] Contact form submission endpoint configured
[ ] Analytics events firing correctly
[ ] 404 page designed and connected
[ ] Sitemap.xml generated
[ ] robots.txt configured

LEGAL:
[ ] Privacy Policy page created and linked in footer
[ ] Terms of Service page created and linked in footer
[ ] Cookie consent banner (if targeting EU users)
[ ] Assessment email opt-in language reviewed

QA:
[ ] Assessment tested end-to-end including API error state
[ ] Contact form tested with real submission
[ ] All internal links verified
[ ] All CTAs pointing to correct destinations
[ ] Site tested on iOS Safari, Chrome Android, Desktop Chrome/Safari
```

---

*NeoAistriq Website Build Document v1.0*
*Generated by Claude | NeoAistriq Brand & Strategy Sessions*
*Open alongside NeoAistriq Design System in Claude Desktop*
*to replace all [TOKEN_NAME] placeholders before development handoff.*
