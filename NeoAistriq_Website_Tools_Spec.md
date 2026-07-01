# NeoAistriq — Website Tools Specification
### All Three Interactive Tools | Full Technical & UX Spec
**Version 1.0 | Companion to Website Build Document**

---

## HOW TO USE THIS DOCUMENT

This document fully specifies all three NeoAistriq website tools:

1. **Quick Win Calculator** — ROI estimation widget, Claude API powered
2. **AI Readiness Toolkit** — Interactive lite assessment + paid full product
3. **AI Opportunity Assessor** — Standalone full spec (supplements Build Document)

Each tool spec includes:
- Purpose and placement rationale
- UX flow and screen-by-screen wireframe descriptions
- Input/output design
- Claude API integration spec (prompt, model, response schema)
- Lead capture and CRM integration
- Error and loading states
- Embedding instructions (where applicable)
- Design token placeholders (replace from NeoAistriq Design System)

---

---

# TOOL 1: QUICK WIN CALCULATOR

---

## 1.1 Purpose & Strategy

**What it does:**
A 60-second ROI estimator that takes a specific manual process and calculates
the annual cost of that process — then shows what AI automation could recover.

**Why it exists:**
SMB founders and executives often feel AI is expensive without understanding
the cost of NOT automating. The calculator makes the cost of inaction visible
and concrete — creating urgency without a sales pitch.

**Conversion goal:**
Move a curious visitor from "AI sounds interesting" to "I can see the
specific dollar value for my business." Feeds naturally into the Assessor
or a direct service inquiry.

**Lead generation:**
Results are shown immediately (no gate). Email capture offered after
results to "send the report to your inbox" — opt-in, not forced.

---

## 1.2 Placement

**Primary: Embedded widget**
- Homepage: between Stack Section and CTA Banner
- Pricing page: between Pricing Principles and Decision Guide sections
- Widget dimensions: full-width container, max-width 760px, centered
- Background: [COLOR: SURFACE] card treatment, [CARD: RADIUS], [CARD: SHADOW]

**Secondary: Standalone page**
- URL: /calculator
- Full-page layout, same component, more breathing room
- Meta title: "AI ROI Calculator | How Much Is Manual Work Costing You? | NeoAistriq"
- Meta desc: "Calculate the real cost of manual processes in your business
  and see what AI automation could recover. Free, instant, no signup required."
- Shareable URL for sales conversations and social posts

**Entry points:**
- Homepage: text link "Calculate your AI ROI →" in Revenue Ladder section
- Pricing page: "Not sure if the investment makes sense? Run the numbers →"
- Nav: not in primary nav — discovered contextually
- Social: standalone URL shared in LinkedIn posts

---

## 1.3 UX Flow

```
SCREEN 1: INPUT SCREEN
─────────────────────────────────────────────
Header:
  Eyebrow:     "Quick Win Calculator"
  Headline:    "How Much Is This Process Costing You?"
  Subhead:     "Enter one manual process. See the real annual cost —
               and what AI could recover."

Input Form (all on one screen — no wizard):

  Field 1 — Process Name
    Label:     "What manual process do you want to automate?"
    Type:      Text input
    Placeholder: "e.g. weekly sales reporting, lead follow-up emails,
                  invoice reconciliation"
    Required:  Yes
    Helper:    "Be specific — the more detail, the better your estimate."

  Field 2 — Number of People
    Label:     "How many people spend time on this process?"
    Type:      Number stepper (min 1, max 50, default 2)
    Helper:    "Include everyone who touches it, even partially."

  Field 3 — Hours Per Week Per Person
    Label:     "How many hours per week does each person spend on it?"
    Type:      Slider (0.5 – 40, step 0.5, default 5)
    Display:   Show selected value dynamically: "5 hours/week"
    Helper:    "Estimate total time including prep, execution, and follow-up."

  Field 4 — Average Hourly Cost
    Label:     "What's the approximate fully-loaded hourly cost per person?"
    Type:      Select dropdown
    Options:
      $25–35/hr  (Admin / Coordinator)
      $35–55/hr  (Operations / Analyst)
      $55–85/hr  (Manager / Senior Analyst)
      $85–125/hr (Director / Executive)
      $125+/hr   (C-Suite / Principal)
    Default:   $35–55/hr
    Helper:    "Include salary, benefits, and overhead. When in doubt,
               go one level higher."

  Field 5 — Error Rate Impact (optional)
    Label:     "Does this process have errors that cost you extra time
               or money?"
    Type:      Single select radio
    Options:
      Rarely — minimal rework
      Sometimes — occasional fixes needed
      Often — regular errors and corrections
    Default:   Sometimes
    Helper:    "Errors multiply the true cost of manual work."

Calculate Button:
  Label:       "Calculate My ROI →"
  Style:       Primary full-width
  Disabled:    Until Field 1 + Field 2 + Field 3 filled
  Loading:     Spinner + "Analyzing your process..." (Claude API call)

---

SCREEN 2: RESULTS SCREEN
─────────────────────────────────────────────
Transition: Smooth scroll to results or in-place replace
            with fade transition [MOTION: DURATION-SLOW]

Results Header:
  Headline:   "Here's What [Process Name] Is Costing You"
  Subhead:    "Based on your inputs — and what AI automation could recover."

METRIC CARDS ROW (3 cards horizontal, stack on mobile):

  Card 1 — Annual Cost
    Label:    "Annual Cost of This Process"
    Value:    "$XX,XXX"
    Color:    [COLOR: ERROR] or muted red tint
    Sub:      "XX hours/year across your team"

  Card 2 — AI Recovery Potential
    Label:    "Estimated AI Recovery"
    Value:    "$XX,XXX – $XX,XXX"
    Color:    [COLOR: SUCCESS] or [COLOR: PRIMARY]
    Sub:      "60–80% of manual time recoverable"
    Badge:    "Conservative estimate"

  Card 3 — Payback Period
    Label:    "Estimated Payback Period"
    Value:    "X–X months"
    Color:    [COLOR: PRIMARY]
    Sub:      "Based on NeoAistriq engagement cost"

CLAUDE API INSIGHT PANEL:
  Style:      [COLOR: SURFACE] card, [COLOR: PRIMARY] left border 4px
  Headline:   "What AI Could Do With [Process Name]"
  Content:    3–4 sentences from Claude, specific to the process entered
              Describes:
              - What an agentic workflow for this process looks like
              - Specific time/cost reduction mechanisms
              - One realistic implementation approach
              - Any important caveats or considerations

CALCULATION BREAKDOWN (expandable):
  Toggle:     "How we calculated this ↓"
  Contents:
    People × Hours/week × 52 weeks = Annual hours
    Annual hours × Hourly cost = Base annual cost
    + Error rate multiplier (1.0 / 1.15 / 1.35)
    = Total annual process cost
    × Recovery rate (60–80%) = Recovery range
    Note: "AI recovery rates vary by process type. These are
           conservative estimates based on NeoAistriq deployment data."

RECOMMENDED NEXT STEP:
  Contextual based on Annual Cost value:

  If Annual Cost < $15,000:
    Recommend: AI Readiness Toolkit or Virtual Workshop
    Copy: "This process is a strong candidate for a self-serve
           automation approach. Start with our AI Readiness Toolkit
           to map your full opportunity."
    CTA: "Get the AI Readiness Toolkit — $297"
    Secondary CTA: "Take the Full AI Assessment (Free)"

  If Annual Cost $15,000 – $50,000:
    Recommend: AI Readiness Sprint or Agentic Workflow Build
    Copy: "A process at this cost level has strong ROI for an
           agentic workflow build. An AI Readiness Sprint will
           confirm the approach and scope the build."
    CTA: "Start an AI Readiness Sprint — from $3,500"
    Secondary CTA: "Take the Full AI Assessment (Free)"

  If Annual Cost > $50,000:
    Recommend: Agentic Workflow Build or Process Redesign
    Copy: "At this cost level, agentic AI delivers significant
           ROI quickly. Let's scope a build."
    CTA: "Scope an Agentic Workflow Build — from $8,000"
    Secondary CTA: "Book a Strategy Call"

EMAIL CAPTURE (below results, optional):
  Headline:   "Want This Report in Your Inbox?"
  Subhead:    "We'll send a PDF summary plus 3 implementation ideas
               specific to [Process Name]."
  Fields:     Email (required), First Name (required)
  CTA:        "Send My Report"
  Trust:      "No spam. Unsubscribe anytime."

RECALCULATE LINK:
  Text:       "← Try a different process"
  Returns to Screen 1 with fields cleared
```

---

## 1.4 Claude API Integration Spec

```
ENDPOINT: POST /api/calculate
(Server-side only — never expose API key client-side)

Model:     claude-sonnet-4-6
Max tokens: 800

System prompt:
  "You are NeoAistriq's AI ROI Analyst. NeoAistriq builds agentic
  AI workflows for SMB businesses that automate manual processes
  and deliver measurable outcomes.

  Given a manual business process and its cost parameters, generate
  a specific, practical insight about what agentic AI could do with
  this process. Be concrete, direct, and outcomes-focused. Write
  for a non-technical SMB founder or executive.

  Respond ONLY with a JSON object:
  {
    processInsight: string (3-4 sentences describing what an
                   agentic workflow for this specific process
                   would look like, what it would automate,
                   and what the business would experience),
    recoveryRateLow: number (percentage, 50-75, conservative),
    recoveryRateHigh: number (percentage, 65-85, optimistic),
    implementationNote: string (1 sentence — one important
                        caveat or consideration for this
                        specific process type),
    timeToValue: string (e.g. '4-6 weeks', '2-3 months')
  }

  Base your recovery rate estimates on the process type and
  complexity. Simpler, high-volume repetitive processes have
  higher recovery rates. Complex judgment-intensive processes
  have lower rates. Never promise 100% automation."

User prompt:
  "Process: [Field 1 — process name]
  People involved: [Field 2]
  Hours per week per person: [Field 3]
  Hourly cost bracket: [Field 4]
  Error rate: [Field 5]
  Annual base cost calculated: $[computed value]

  Generate the ROI insight for this process."

Response handling:
  Parse JSON response
  Use recoveryRateLow/High to calculate recovery range
  Display processInsight in Claude API Insight Panel
  Display implementationNote in Calculation Breakdown
  Display timeToValue in Payback Period card

Error handling:
  If API fails or returns invalid JSON:
  - Use static recovery rates: 60% low, 75% high
  - Replace processInsight with:
    "Based on your inputs, this process is a strong candidate
    for agentic automation. Common approaches include workflow
    orchestration, automated data processing, and AI-assisted
    communication — each capable of recovering significant
    manual time."
  - Log error server-side, do not surface to user
```

---

## 1.5 Calculation Logic

```javascript
// Annual cost calculation
const hoursPerYear = peopleCount * hoursPerWeek * 52;
const hourlyRate = getMidpointRate(hourlyBracket);
// Hourly bracket midpoints:
// $25-35 → 30 | $35-55 → 45 | $55-85 → 70 | $85-125 → 105 | $125+ → 150

const errorMultiplier = {
  'rarely': 1.0,
  'sometimes': 1.15,
  'often': 1.35
}[errorRate];

const annualCost = Math.round(hoursPerYear * hourlyRate * errorMultiplier);

// Recovery range (from Claude API or fallback)
const recoveryLow = annualCost * (recoveryRateLow / 100);
const recoveryHigh = annualCost * (recoveryRateHigh / 100);

// Payback period (against recommended service starting price)
const servicePrice = getRecommendedServicePrice(annualCost);
// Service price lookup:
// annualCost < 15000 → 297 (toolkit)
// annualCost 15000-50000 → 3500 (sprint)
// annualCost > 50000 → 8000 (build)

const paybackMonthsLow = Math.ceil((servicePrice / (recoveryHigh / 12)));
const paybackMonthsHigh = Math.ceil((servicePrice / (recoveryLow / 12)));
// Display as "X–Y months"
```

---

## 1.6 Embed Instructions (for Homepage + Pricing page)

```html
<!-- Embedded Calculator Widget -->
<!-- Place inside a SectionWrapper component -->
<!-- The calculator loads as a self-contained React component -->
<!-- or iframe pointing to /calculator?embed=true -->

Option A (React component — recommended for Next.js):
  import QuickWinCalculator from '@/components/tools/QuickWinCalculator'
  <QuickWinCalculator embedded={true} />
  // embedded=true hides the page header, shows compact version

Option B (iframe embed — for Webflow/Framer):
  <iframe
    src="https://neoaistriq.com/calculator?embed=true"
    width="100%"
    height="680"
    frameborder="0"
    style="border-radius: [RADIUS: LG];"
  />
  // Height adjusts dynamically via postMessage on results expansion
```

---

---

# TOOL 2: AI READINESS TOOLKIT

---

## 2.1 Purpose & Strategy

**What it is:**
The AI Readiness Toolkit is both a **paid digital product ($297)** and
an **interactive lead generation tool** with a free lite version.

**Two modes:**
1. **Lite Mode (Free)** — 3-question interactive assessment embedded on
   the Training page and used as a lead magnet. Delivers partial results,
   gates full report behind email, upsells to paid Toolkit or Assessor.

2. **Full Mode (Paid — $297)** — Complete interactive workbook with
   5 modules, AI-powered recommendations, downloadable PDF report,
   and 30-day async Q&A access. Delivered as a web app (not a PDF download)
   for a premium, interactive experience.

**Why interactive web app vs. PDF:**
A PDF toolkit is a commodity. An interactive web app that gives personalized
AI-powered guidance based on their specific answers is a premium product —
justifies $297 and creates a fundamentally better user experience.
It also keeps users in the NeoAistriq ecosystem and enables follow-up.

**Conversion goals:**
- Lite Mode: email capture + upsell to full Toolkit ($297) or Assessor (free)
- Full Mode: deliver genuine value → warm lead for Sprint or Workshop

---

## 2.2 Placement

**Lite Mode:**
- Embedded on Training page (below "Why This Training Is Different" section)
- Homepage: small teaser card in Services Preview section
- URL when accessed standalone: /toolkit/lite

**Full Mode (paid product):**
- Standalone URL: /toolkit
- Accessible after purchase via email-delivered access link
- No login required — access via unique token in URL (/toolkit?token=XXXXX)
- Pricing page: listed as Tier 00 with "Buy the Toolkit" CTA

**Purchase flow:**
- CTA "Get the AI Readiness Toolkit — $297"
- → Payment page (Stripe Checkout or equivalent)
- → Post-purchase: email with access link + onboarding instructions
- → /toolkit?token=XXXXX (full interactive experience)

---

## 2.3 Lite Mode UX Flow

```
LITE MODE COMPONENT
─────────────────────────────────────────────
Container style:
  Background: [COLOR: SURFACE]
  Border: 1px solid [COLOR: BORDER]
  Radius: [RADIUS: LG]
  Padding: [CARD: PADDING]
  Max-width: 680px

Header:
  Badge:     "Free Lite Preview"  [COLOR: PRIMARY] pill
  Headline:  "Is Your Business AI-Ready?"
  Subhead:   "Answer 3 questions to get your instant AI Readiness snapshot."

QUESTION 1:
  "What's the biggest manual bottleneck in your business right now?"
  Type: Single select (visual cards, 2x2 grid)
  Options:
    📧 Customer communications
    📊 Reporting & data work
    🔄 Repetitive operations tasks
    💰 Sales & lead management

QUESTION 2:
  "How would you describe your team's current AI confidence?"
  Type: Scale slider (1–5)
  Labels: "Complete beginners" ←→ "Using AI tools regularly"
  Visual: 5-step slider with emoji indicators

QUESTION 3:
  "What would success look like for you in 90 days?"
  Type: Single select
  Options:
    Save 5+ hours/week per team member
    Replace one fully manual process
    Have a clear AI roadmap to present internally
    Close one specific operational gap

CTA: "See My Readiness Snapshot →" (primary, full-width)
Loading: "Generating your snapshot..." (1–2 second Claude API call)

---

LITE RESULTS SCREEN:
  Readiness indicator: simple 3-level badge
    🟡 Getting Started | 🟠 Building Momentum | 🟢 Ready to Scale

  2 sentences of personalized insight from Claude
  (specific to their bottleneck + goal combination)

  1 specific recommended action (from Claude)

  GATE — to see full breakdown:
  ─────────────────────────────
  Headline: "Your Full AI Readiness Snapshot Has 4 More Insights"
  Subhead:  "Enter your email to unlock them — free."

  Fields: Email (required), First Name (required)
  CTA:    "Unlock Full Snapshot"
  Trust:  "No spam. Unsubscribe anytime."

  POST EMAIL-GATE — Additional insights revealed:
    2 more specific opportunity areas identified
    1 risk/watch-out specific to their situation
    Recommended NeoAistriq starting point with price

  UPSELL SECTION (below full snapshot):
  ─────────────────────────────────────
  Headline: "Want the Complete AI Readiness Workbook?"
  Body:     "The full AI Readiness Toolkit takes you through
             a structured 5-module framework — with AI-powered
             guidance at every step."
  Features (3 bullet points):
    ✓ 5-module interactive assessment
    ✓ Personalized AI roadmap for your business
    ✓ Downloadable PDF report
  Price:    "$297 one-time"
  CTA:      "Get the Full Toolkit — $297"  (primary)
  Alt CTA:  "Take the Free AI Opportunity Assessment instead"  (ghost)
```

---

## 2.4 Full Toolkit UX Flow (Paid — $297)

```
ACCESS & ONBOARDING:
  URL: /toolkit?token=[unique_token]
  Token validation: server-side check against purchase record
  Invalid token: redirect to /toolkit with "purchase required" message

  Welcome screen (first visit only):
    Headline:  "Welcome to Your AI Readiness Toolkit"
    Subhead:   "Work through 5 modules at your own pace.
               Your progress is saved automatically."
    Time estimate: "Most people complete this in 45–90 minutes."
    CTA:       "Start Module 1 →"

PROGRESS TRACKING:
  Top bar: 5-module progress indicator (dots or segments)
  Each module shows: Not started | In progress | Complete
  Progress saved: localStorage with token as key
  Resume prompt on return: "Welcome back. Pick up where you left off?"

─────────────────────────────────────────────
MODULE 1: The AI Opportunity Map
─────────────────────────────────────────────
Purpose: Identify the 3 highest-ROI AI opportunities in their business

Step 1.1 — Business Context
  "Tell us about your business so your recommendations are specific."
  Fields:
    Industry (select — same options as Assessor Q2)
    Business size (select: 1–10 / 11–50 / 51–200 / 200+)
    Primary revenue model (select: Services / Products / Subscription /
                           Marketplace / Mixed)
    Biggest operational challenge (text, 2–3 sentences)

Step 1.2 — Process Inventory
  Headline: "List your top 5 most time-consuming manual processes."
  5 text inputs (optional labels pre-filled as examples, clearable):
    1. [e.g. Weekly sales pipeline reporting]
    2. [e.g. Customer onboarding emails]
    3. [e.g. Invoice reconciliation]
    4. [e.g. Social media scheduling]
    5. [e.g. Meeting notes and follow-ups]

Step 1.3 — Scoring (AI-powered)
  Claude evaluates each process entered and scores it on:
    Automability: 1–5 (how suitable for agentic AI)
    Volume: 1–5 (how frequently it occurs)
    Impact: 1–5 (business value of automating)
  Displays ranked list with scores and brief rationale per process

  Output: "Your Top 3 AI Opportunities" — highlighted, scored, explained
  User can accept ranking or drag-to-reorder

─────────────────────────────────────────────
MODULE 2: Readiness Assessment
─────────────────────────────────────────────
Purpose: Assess current readiness across 4 dimensions

4 Dimension Sliders (1–5 scale each):

  Dimension 1 — Data Readiness
    "How structured and accessible is your business data?"
    Scale: "All in people's heads" ←→ "Structured, accessible, clean"
    Examples shown at each level

  Dimension 2 — Tech Stack Readiness
    "How connected and modern are your business tools?"
    Scale: "Mostly manual / spreadsheets" ←→ "Integrated cloud stack"
    Examples shown at each level

  Dimension 3 — Team Readiness
    "How open and capable is your team to adopt AI tools?"
    Scale: "Skeptical / resistant" ←→ "Enthusiastic early adopters"

  Dimension 4 — Leadership Commitment
    "How committed is leadership to driving AI adoption?"
    Scale: "Exploring casually" ←→ "Full strategic priority"

Output: Radar/spider chart showing 4-dimension readiness profile
        Overall readiness score (average of 4 dimensions × 20)
        Per-dimension interpretation (Claude-generated, 1 sentence each)
        Key readiness gap identified + recommendation

─────────────────────────────────────────────
MODULE 3: Vendor & Solution Evaluation Framework
─────────────────────────────────────────────
Purpose: Give them a framework to evaluate any AI vendor or initiative

Interactive checklist tool:

  Section A — Vendor Evaluation Criteria (12 items)
    Each item: checkbox + explanation tooltip
    Categories: Technical capability / Commercial model /
                Support & governance / References
    User marks each as: Must Have / Nice to Have / Not Relevant

  Section B — RFP/Scoping Questions (10 questions)
    Customized by Claude based on their top opportunities from Module 1
    Each question: expandable to show "why this matters" explanation

  Section C — Red Flags Checklist (8 items)
    Signs of a low-quality AI engagement
    e.g. "No defined success metrics" / "Hourly billing with no cap" /
         "Pilot with no path to production"

  Output: Their personalized vendor scorecard (downloadable)

─────────────────────────────────────────────
MODULE 4: ROI Estimation Worksheet
─────────────────────────────────────────────
Purpose: Build a business case for their top AI initiative

Pre-populated: Top opportunity from Module 1 auto-fills Process Name field

Calculator inputs (same logic as Quick Win Calculator but more detailed):
  Process name (pre-filled, editable)
  People involved
  Hours per week per person
  Hourly cost bracket
  Error rate
  PLUS:
    Revenue impact (optional): "Does this process directly affect revenue?"
    Customer impact (optional): "Does this affect customer experience?"

Output: Full ROI analysis with:
  Annual cost of current state
  Projected annual savings (Year 1)
  3-year cumulative value
  Recommended investment range
  ROI ratio (e.g. "5.2x return in Year 1")
  Payback period

Business case narrative: Claude generates a 1-paragraph executive summary
suitable for internal presentations

─────────────────────────────────────────────
MODULE 5: Your 90-Day AI Roadmap
─────────────────────────────────────────────
Purpose: Produce an actionable, prioritized roadmap

Auto-populated from Modules 1–4:
  Top 3 opportunities (from Module 1)
  Readiness gaps to address (from Module 2)
  Investment range confirmed (from Module 4)

Interactive roadmap builder:

  Month 1 — Foundation
    Pre-filled: address top readiness gap
    Editable: add/remove/reorder actions
    Each action: title + owner + success metric

  Month 2 — First Initiative
    Pre-filled: scope and begin top AI opportunity
    Editable actions

  Month 3 — Measure & Expand
    Pre-filled: measure results, identify next opportunity
    Editable actions

Claude generates: One-paragraph narrative for each month
                  "What success looks like at 90 days" summary

─────────────────────────────────────────────
FINAL REPORT GENERATION:
─────────────────────────────────────────────
Triggered: After Module 5 completion
Screen: "Your AI Readiness Report is Ready"

Report contents (all Claude-generated summaries + user inputs):
  Executive Summary (1 page)
  AI Opportunity Map (Module 1 output)
  Readiness Profile (Module 2 radar chart + interpretation)
  Vendor Evaluation Scorecard (Module 3)
  ROI Analysis (Module 4)
  90-Day Roadmap (Module 5)
  Recommended NeoAistriq Engagement (contextual)

Download options:
  "Download PDF Report" → server-side PDF generation
  "Email This Report" → send to registered email

RECOMMENDED NEXT STEP (contextual, based on ROI from Module 4):
  Same logic as Calculator recommended next step
  + Personalized message: "Based on your roadmap, your highest-ROI
    first step is [specific recommendation from Module 5]."

CTA:
  Primary:   Relevant service CTA (Sprint / Build / Workshop)
  Secondary: "Book a call to walk through your report with us"
             Pre-fills contact form with "I've completed the Toolkit"
```

---

## 2.5 Claude API Integration Spec — Toolkit

```
LITE MODE API CALL:
  Endpoint: POST /api/toolkit/lite
  Model: claude-sonnet-4-6
  Max tokens: 600

  System prompt:
    "You are NeoAistriq's AI Readiness Advisor for SMB businesses.
    Given 3 quick assessment answers, generate a brief, specific
    AI readiness snapshot. Be direct and practical. Write for a
    non-technical business leader.

    Return ONLY valid JSON:
    {
      readinessLevel: 'getting-started' | 'building-momentum' | 'ready-to-scale',
      insight: string (2 sentences — specific to their bottleneck and goal),
      recommendedAction: string (1 concrete action they can take this week),
      gatedInsights: [
        string (opportunity area 2 — 1 sentence),
        string (opportunity area 3 — 1 sentence),
        string (risk/watch-out — 1 sentence),
      ],
      recommendedService: {
        name: string,
        reason: string (1 sentence),
        price: string,
        path: string
      }
    }"

  User prompt:
    "Biggest manual bottleneck: [Q1]
    Team AI confidence: [Q2]/5
    90-day success goal: [Q3]
    Generate their AI readiness snapshot."

─────────────────────────────────────────────

MODULE 1 — PROCESS SCORING API CALL:
  Endpoint: POST /api/toolkit/score-processes
  Max tokens: 800

  System prompt:
    "You are an AI automation expert. Score each business process
    for AI automation suitability.

    Return ONLY valid JSON:
    {
      processes: [
        {
          name: string,
          automability: number (1-5),
          volume: number (1-5),
          impact: number (1-5),
          totalScore: number (sum of above),
          rationale: string (1 sentence explaining the scores),
          topApproach: string (1 sentence — the most promising
                       agentic approach for this specific process)
        }
      ] (sorted by totalScore descending)
    }"

  User prompt:
    "Business context: [industry, size, revenue model]
    Processes to score: [list of up to 5 processes entered]
    Score each for agentic AI automation potential."

─────────────────────────────────────────────

MODULE 2 — READINESS INTERPRETATION API CALL:
  Endpoint: POST /api/toolkit/readiness
  Max tokens: 500

  Returns:
    {
      overallScore: number,
      dimensionInsights: {
        data: string (1 sentence),
        tech: string (1 sentence),
        team: string (1 sentence),
        leadership: string (1 sentence)
      },
      topGap: string (the dimension with lowest score — 1 sentence
               explaining what to do about it),
      recommendation: string (1 sentence — overall readiness takeaway)
    }

─────────────────────────────────────────────

MODULE 4 — ROI NARRATIVE API CALL:
  Endpoint: POST /api/toolkit/roi-narrative
  Max tokens: 400

  Returns:
    {
      executiveSummary: string (1 paragraph suitable for
                        internal business case presentation),
      year1ROI: number (ratio, e.g. 4.8),
      paybackMonths: number
    }

─────────────────────────────────────────────

MODULE 5 — ROADMAP NARRATIVE API CALL:
  Endpoint: POST /api/toolkit/roadmap
  Max tokens: 800

  Returns:
    {
      month1Narrative: string (1 paragraph),
      month2Narrative: string (1 paragraph),
      month3Narrative: string (1 paragraph),
      successSummary: string (2 sentences — what 90 days of
                      execution looks like),
      recommendedEngagement: {
        service: string,
        reason: string (2 sentences),
        price: string,
        urgency: string (1 sentence — why now)
      }
    }
```

---

## 2.6 Purchase & Access Flow

```
PURCHASE FLOW:
  1. User clicks "Get the AI Readiness Toolkit — $297"
  2. → /toolkit/purchase (or Stripe Checkout hosted page)
  3. Payment processed (Stripe)
  4. Server generates unique access token (UUID)
  5. Token stored in database with: email, purchase_date, expiry (none)
  6. Confirmation email sent with:
     Subject: "Your NeoAistriq AI Readiness Toolkit is Ready"
     Body: Welcome message + access link (/toolkit?token=XXXXX)
           + what to expect + support email
  7. User clicks link → /toolkit?token=XXXXX
  8. Token validated server-side
  9. Welcome screen shown (first visit)
  10. Progress saved to localStorage keyed by token

ACCESS SECURITY:
  - Token is a UUIDv4 (cryptographically random, not guessable)
  - No login required (token IS the credential)
  - Token never expires (lifetime access)
  - If token invalid: show "Access link invalid. Contact hello@neoaistriq.com"
  - Rate limit: 100 requests/hour per token (prevents scraping)

PROGRESS PERSISTENCE:
  - localStorage: { [token]: { module: 1-5, answers: {...}, completedAt: null } }
  - On return visit: detect saved progress, show resume prompt
  - "Start Over" option available (clears localStorage for this token)
```

---

---

# TOOL 3: AI OPPORTUNITY ASSESSOR — STANDALONE FULL SPEC

---

## 3.1 Purpose & Strategy

**What it is:**
NeoAistriq's primary inbound lead generation and qualification tool.
A Claude API-powered 8-question assessment that produces a fully
personalized AI Opportunity Report and recommends the right
NeoAistriq service tier.

**Position in the funnel:**
This is the highest-intent tool. It's the primary CTA in the nav,
on the homepage hero, and at the bottom of every page. A visitor
who completes the Assessor is NeoAistriq's most qualified lead.

**Key differentiator vs. competitors:**
No other SMB AI services firm uses an AI-powered assessment as their
primary CTA. This signals immediately: NeoAistriq practices what it
preaches. The tool IS the demonstration of capability.

---

## 3.2 Placement

**Primary:**
- Standalone page: /assessment
- Primary CTA in global nav: "Take the AI Assessment" button
- Homepage hero: Primary CTA button
- Bottom CTA banner: appears on every page

**Secondary entry points:**
- After Quick Win Calculator results (as "next step")
- After Toolkit Lite results (as alternative to paid toolkit)
- Pricing page decision guide: last row "Take the Free AI Assessment"
- About/Contact page: offered as alternative to booking a call

**Page meta:**
  Title: "Free AI Opportunity Assessment | NeoAistriq"
  Description: "5-minute AI assessment for SMB leaders. Get an instant
               personalized report showing where AI will move your metrics."

---

## 3.3 Page Layout & Chrome

```
ASSESSMENT PAGE LAYOUT:
  Minimal chrome — this page is for converting, not browsing

  Header:
    Logo (links to /) — left
    "Back to NeoAistriq.com" — right (ghost link, not prominent)
    No full navigation — reduce exit points

  Progress bar: full-width, [COLOR: PRIMARY] fill, top of content area
  Question counter: "Question X of 8" — [FONT: MONO] [SIZE: BODY-SM]

  Footer: hidden during assessment
          Shown on results screen with minimal links

  Background: [COLOR: BACKGROUND]
  Max content width: 680px centered
  Vertical centering: question content centered in viewport
```

---

## 3.4 Question Screens (Full Spec)

```
GLOBAL QUESTION COMPONENT:
─────────────────────────────────────────────
  Progress bar: fills from 0 → 100% across 8 questions
  Question number: "Question [N] of 8" top of card
  Question card:
    Background: [CARD: BG]
    Border: 1px solid [CARD: BORDER]
    Radius: [RADIUS: LG]
    Padding: [SPACE: 2XL]
    Shadow: [CARD: SHADOW]

  Question text: [FONT: HEADING] [SIZE: H3] [COLOR: TEXT-PRIMARY]
  Helper text (where shown): [FONT: BODY] [SIZE: BODY-SM] [COLOR: TEXT-SECONDARY]

  Answer options:
    Visual card style (for single/multi select):
      Border: 1px solid [COLOR: BORDER]
      Radius: [RADIUS: MD]
      Padding: [SPACE: MD] [SPACE: LG]
      Hover: border [COLOR: PRIMARY] + [COLOR: PRIMARY-LIGHT] fill
      Selected: border [COLOR: PRIMARY] 2px + [COLOR: PRIMARY-LIGHT] bg
               + checkmark icon [COLOR: PRIMARY]
      Transition: [MOTION: DURATION-FAST]

  Navigation:
    Back button: ghost, left arrow, disabled on Q1
    Next/Continue button: primary, disabled until answer selected
    Auto-advance: on single-select after 300ms delay (feels snappy)
                  NOT on multi-select (user needs to confirm)
    Keyboard: Enter to advance, ← → arrow keys for options

─────────────────────────────────────────────
Q1 — Business Type
─────────────────────────────────────────────
Question: "What best describes your business?"
Type: Single select — 5 visual cards (icon + label + sublabel)
Layout: 2-column grid (3+2 staggered or 2+2+1 centered)

Cards:
  🏪 Local / Community Business
     Sublabel: Under 10 people
  🏢 Small Business
     Sublabel: 10–50 people
  🏬 Mid-Size Business
     Sublabel: 50–200 people
  🚀 Growing Startup
     Sublabel: Scaling fast
  🤝 Professional Services
     Sublabel: Agency, consulting, or practice

─────────────────────────────────────────────
Q2 — Industry
─────────────────────────────────────────────
Question: "What industry are you in?"
Type: Single select — 8 options in 2-column grid
Helper: "This helps us give you industry-specific recommendations."

Options:
  🛒 Retail / E-commerce
  💼 Professional Services
  🏥 Healthcare / Wellness
  🎓 Education / Training
  🍽️ Hospitality / Food & Beverage
  ⚙️ Manufacturing / Operations
  💻 Technology
  🔧 Other

─────────────────────────────────────────────
Q3 — Biggest Manual Time Drain
─────────────────────────────────────────────
Question: "Where does your team spend the most manual time?"
Type: Multi-select (up to 2 selections)
Helper: "Pick up to 2. These become your highest-priority AI opportunities."
Counter: "Select up to 2" → updates to "1 selected" / "2 selected (max)"

Options (7 cards in responsive grid):
  📧 Customer communications & follow-up
  🎯 Sales & lead qualification
  📊 Reporting & data analysis
  📅 Scheduling & operations
  💰 Finance & invoicing
  📣 Marketing & content creation
  👥 HR & people management

─────────────────────────────────────────────
Q4 — AI Maturity
─────────────────────────────────────────────
Question: "How would you describe your current AI usage?"
Type: Single select — 4 options (vertical list on mobile, 2x2 on desktop)
Helper: "Be honest — there's no wrong answer here."

Options:
  🌱 We don't use AI tools yet
     Sublabel: Starting from scratch
  🔍 We use basic AI informally
     Sublabel: ChatGPT, Copilot, etc.
  🧪 We've run AI pilots
     Sublabel: Nothing in production yet
  ⚙️ We have AI in production
     Sublabel: Want to do more

─────────────────────────────────────────────
Q5 — Team Size for Target Process
─────────────────────────────────────────────
Question: "How many people are involved in the process
          you most want to automate?"
Type: Single select — 4 option cards

Options:
  👤 Just me
  👥 2–5 people
  👨‍👩‍👧‍👦 6–15 people
  🏢 16+ people

─────────────────────────────────────────────
Q6 — Investment Comfort
─────────────────────────────────────────────
Question: "What investment range feels right for your first AI initiative?"
Type: Single select — 5 option cards
Helper: "This helps us recommend the right starting point, not upsell you."

Options:
  💡 Under $1,000
     Sublabel: Self-serve tools
  🌱 $1,000 – $5,000
     Sublabel: Sprint or workshop
  📈 $5,000 – $15,000
     Sublabel: Scoped build
  🚀 $15,000+
     Sublabel: Full transformation
  🤷 Not sure yet
     Sublabel: Help me figure it out

─────────────────────────────────────────────
Q7 — Timeline
─────────────────────────────────────────────
Question: "How soon are you looking to move on this?"
Type: Single select — 4 options

Options:
  🔥 Immediately
     Sublabel: I have an active problem to solve
  📅 1–3 months
     Sublabel: Planning and budgeting now
  🗓️ 3–6 months
     Sublabel: Evaluating options
  🔭 Just exploring
     Sublabel: No immediate timeline

─────────────────────────────────────────────
Q8 — Biggest AI Concern
─────────────────────────────────────────────
Question: "What's your biggest concern about investing in AI?"
Type: Single select — 6 options
Helper: "We'll address this directly in your report."

Options:
  💸 ROI — Will it actually pay off?
  🔧 Complexity — Seems too technical
  💰 Cost — Not sure I can afford it
  ⏱️ Time — No bandwidth to implement
  🤝 Trust — Will it work reliably?
  ✅ No major concerns

─────────────────────────────────────────────
EMAIL GATE SCREEN (after Q8):
─────────────────────────────────────────────
  Transition: progress bar fills to 100%, brief celebration moment
              (subtle confetti or checkmark animation)

  Headline:   "Your AI Opportunity Report is Ready."
  Subhead:    "Where should we send your personalized results?"

  Card layout:
    Preview of what's inside (icon list):
      🎯 Your AI Readiness Score
      💡 Top 3 AI opportunities for your business
      📋 Recommended starting point with pricing
      🔍 One custom insight for your industry

  Form:
    First Name (text, required)
    Business Email (email, required)
    Company Name (text, required)

  Checkbox (unchecked default):
    "Send me NeoAistriq's monthly AI for Business Outcomes digest"

  CTA: "See My Report →" (primary, full-width)

  Trust line:
    🔒 "Your data is never shared. Unsubscribe anytime."

  Loading state (after submit, while Claude API processes):
    Animated: "Analyzing your business profile..."
    Sub:      "Generating your personalized AI Opportunity Report..."
    Duration: 3–6 seconds typically
    Show progress animation — not a static spinner
    (This moment of anticipation increases perceived report value)
```

---

## 3.5 Results Screen (Full Spec)

```
RESULTS PAGE LAYOUT:
  Full page (replaces assessment UI)
  Restore full site chrome (nav + footer)
  Print-friendly layout (CSS @media print)
  Shareable URL: /assessment/results?id=[report_id]
                 (report stored server-side, accessible for 30 days)

─────────────────────────────────────────────
SECTION 1 — HEADER
─────────────────────────────────────────────
  Variant: SectionWrapper — dark

  Eyebrow:    "Your AI Opportunity Report"
  Headline:   "Here's Where AI Will Move the Needle, [First Name]."
  Subhead:    Generated by Claude, 1 sentence:
              "Based on your [industry] business with [N] people
               in [process area], here's what we found."
  Date badge: "Report generated [date]"
  Download:   "Download PDF" button (ghost) — top right

─────────────────────────────────────────────
SECTION 2 — AI READINESS SCORE
─────────────────────────────────────────────
  Variant: SectionWrapper — default
  Layout: Two-column (score left, interpretation right)

  Left — Score Display:
    Large circular gauge (SVG animated on load)
    Score: large number [FONT: DISPLAY] [COLOR: PRIMARY]
    Label: "AI Readiness Score"
    Tier badge below gauge:
      0–30:   🌱 "Foundations Stage"    [muted badge]
      31–60:  📈 "Building Momentum"    [yellow/amber badge]
      61–85:  🚀 "High Opportunity"     [green badge]
      86–100: ⚡ "AI-Ready"             [PRIMARY badge]

  Right — Interpretation:
    Score rationale: 2 sentences from Claude
    What this means for their business: 1 sentence
    One encouraging framing of their position

─────────────────────────────────────────────
SECTION 3 — TOP 3 AI OPPORTUNITIES
─────────────────────────────────────────────
  Variant: SectionWrapper — alternate
  Layout: SectionHeader + 3 opportunity cards (stacked, full-width)

  SectionHeader:
    Eyebrow: "Your Opportunities"
    Headline: "The 3 Highest-ROI AI Opportunities for Your Business"

  Each opportunity card:
    Left: Rank number (01, 02, 03) [COLOR: PRIMARY] [FONT: DISPLAY]
    Content:
      Title: opportunity name (Claude-generated, specific)
      Description: 2–3 sentences (personalized to their industry + process)
      Tags row:
        Effort: [Low/Medium/High] badge
        ROI Potential: [$/$$/$$$ ] badge
        Timeline: [weeks/months] badge
    Right panel (subtle):
      Quick win indicator (for Rank 01)

─────────────────────────────────────────────
SECTION 4 — RECOMMENDED STARTING POINT
─────────────────────────────────────────────
  Variant: SectionWrapper — accent
  Layout: Two-column (recommendation left / action right)

  Headline: "Where We Recommend Starting"

  Left — Recommendation card:
    Service name (large)
    "Based on your profile, we recommend..."
    Reason: 2 sentences from Claude
    Price anchor: "Starting at $X,XXX"

  Right — Action card:
    Primary CTA: relevant service page
    Secondary CTA: "Book a Strategy Call to Review Your Results"
    Trust: "Your report summary will be shared before the call
            so we don't waste your time."

─────────────────────────────────────────────
SECTION 5 — CUSTOM INDUSTRY INSIGHT
─────────────────────────────────────────────
  Variant: SectionWrapper — default
  Layout: Single column, max-width 680px, centered

  Eyebrow: "One More Thing"
  Headline: "A Note Specific to [Industry] Businesses"

  Body: 3–4 sentences from Claude
        Industry-specific AI trend or consideration
        Directly relevant to their stated challenge
        Actionable — something they can think about today

  Pull quote style: key sentence highlighted with
    [COLOR: PRIMARY] left border, slightly larger type

─────────────────────────────────────────────
SECTION 6 — NEXT STEPS
─────────────────────────────────────────────
  Variant: SectionWrapper — dark
  Layout: SectionHeader + 3-option cards

  Headline: "What Would You Like to Do Next?"

  3 cards:

  Card 1 — Book a Strategy Call (RECOMMENDED badge)
    Icon: calendar
    Title: "Review Your Results With Us"
    Body: "30-minute call. We'll walk through your report
          and answer any questions. No pitch, no pressure."
    CTA: "Book a Strategy Call" (primary)

  Card 2 — Explore Services
    Icon: arrow right
    Title: "See How We'd Address Your Top Opportunity"
    Body: "Explore the specific NeoAistriq service
          recommended for your situation."
    CTA: "Explore [Recommended Service]" (secondary)
    Link: relevant service page

  Card 3 — Self-Serve
    Icon: download
    Title: "Start With the AI Readiness Toolkit"
    Body: "Go deeper with a structured 5-module framework
          and build your complete AI roadmap."
    CTA: "Get the Toolkit — $297" (ghost)

─────────────────────────────────────────────
REPORT FOOTER:
─────────────────────────────────────────────
  "This report was generated by NeoAistriq's AI Opportunity Assessor,
   powered by Claude (Anthropic). Estimates are based on industry
   benchmarks and your self-reported inputs. Actual results vary."

  Social share:
    "Share your AI Readiness Score"
    LinkedIn share button (pre-filled text):
      "Just took the NeoAistriq AI Opportunity Assessment.
       My AI Readiness Score: [X]/100. Interesting results
       for [industry] businesses → [URL]"
```

---

## 3.6 Claude API Integration Spec — Assessor

```
ENDPOINT: POST /api/assess
(Server-side only — Anthropic API key in env vars)

Model: claude-sonnet-4-6
Max tokens: 1000
Temperature: Default

System prompt:
  "You are NeoAistriq's AI Opportunity Analyst. NeoAistriq is an
  outcomes-based AI-native lean services firm serving SMB founders
  and executives. You generate personalized AI Opportunity Reports
  based on business assessment answers.

  Your report must be:
  - Specific to their industry and stated challenges
  - Written directly to a non-technical business leader
  - Outcomes-focused (business metrics, not AI features)
  - Honest — if their situation calls for starting small, say so
  - Free of generic AI consulting language

  Return ONLY valid JSON matching this exact schema:
  {
    readinessScore: number (0-100, calculated from all inputs),
    scoreRationale: string (2 sentences explaining the score),
    scoreTier: 'foundations' | 'momentum' | 'opportunity' | 'ready',
    reportIntro: string (1 sentence personalized intro for the
                 results page header),
    opportunities: [
      {
        title: string (specific, not generic — e.g. not 'Automate
               reporting' but 'Automated weekly pipeline summary
               for your sales team'),
        description: string (2-3 sentences, specific to their
                    industry + process combination),
        effort: 'Low' | 'Medium' | 'High',
        roiPotential: '$' | '$$' | '$$$',
        timeline: string (e.g. '3-4 weeks', '2-3 months')
      }
    ] (exactly 3, ranked by ROI potential),
    recommendedService: {
      name: string,
      reason: string (2 sentences — specific to their situation),
      startingPrice: string,
      ctaLabel: string,
      ctaPath: string ('/what-we-do' | '/training' | '/pricing')
    },
    customInsight: string (3-4 sentences — industry-specific trend
                  or consideration, actionable, written directly
                  to this business owner. Reference their specific
                  industry challenges, not generic AI advice.),
    concernResponse: string (1-2 sentences directly addressing
                    their stated biggest concern from Q8)
  }

  Score calculation guidelines:
    Base: 50
    + AI maturity bonus: none=0, basic=10, pilots=15, production=20
    + High-automability processes: +5 per process area selected
    + Strong readiness signals: team size 2-5=+5, immediate timeline=+10
    - Concerns that indicate barriers: complexity/trust=-5 each
    Cap at 95 (no one is 100% ready)"

User prompt (constructed from all 8 answers):
  "Business assessment:
  Q1 Business type: [answer]
  Q2 Industry: [answer]
  Q3 Manual time drains: [answer(s)]
  Q4 Current AI maturity: [answer]
  Q5 Team size for target process: [answer]
  Q6 Investment comfort: [answer]
  Q7 Timeline: [answer]
  Q8 Biggest concern: [answer]

  Generate their AI Opportunity Report."

LEAD CAPTURE (on email gate submission):
  POST to [CRM_WEBHOOK_URL]:
  {
    firstName: string,
    email: string,
    company: string,
    newsletterOptIn: boolean,
    answers: { q1, q2, q3, q4, q5, q6, q7, q8 },
    reportId: string (UUID — for results page URL),
    readinessScore: number (from Claude response),
    recommendedService: string,
    timestamp: ISO string
  }

REPORT STORAGE:
  Store full Claude response + user answers in database
  Key: reportId (UUID)
  Expiry: 30 days
  Used for: results page URL, pre-filling contact form notes,
            strategy call prep

ERROR HANDLING:
  If API times out (> 10s): show loading message
    "Taking a little longer than usual — almost there..."
  If API fails: show fallback results
    Static readiness score: 55
    Generic opportunities (3 pre-written for their Q2 industry)
    Generic recommended service based on Q6 investment comfort
    Fallback message: "We've generated a general report based on
    your inputs. For a fully personalized analysis, book a free
    strategy call and we'll walk through it together."
  Always capture lead data regardless of API success/failure
```

---

## 3.7 Report PDF Generation

```
TRIGGER: User clicks "Download PDF" on results screen
ENDPOINT: POST /api/report/pdf

Library recommendation: Puppeteer (server-side) or
                        React-PDF for Next.js

PDF contents:
  Cover page:
    NeoAistriq logo
    "AI Opportunity Report"
    Prepared for: [First Name], [Company]
    Date: [generated date]
    Report ID: [UUID]

  Page 1: Executive Summary
    Readiness score (circular gauge)
    Score interpretation
    Report intro sentence

  Page 2: Top 3 AI Opportunities
    Each opportunity with full description, effort, ROI, timeline

  Page 3: Recommended Starting Point
    Service name, reason, price, next steps

  Page 4: Custom Industry Insight + Next Steps
    Industry insight paragraph
    3 next step options

  Footer on all pages:
    "Generated by NeoAistriq AI Opportunity Assessor"
    "neoaistriq.com | hello@neoaistriq.com"
    NeoAistriq tagline

PDF styling:
  Match NeoAistriq brand (use design tokens)
  Professional, clean layout
  [COLOR: PRIMARY] accents
  [FONT: HEADING] for titles, [FONT: BODY] for body
```

---

## 3.8 Contact Form Pre-Fill (Assessment → Strategy Call)

```
When user clicks "Book a Strategy Call" from results screen:
  Navigate to /about#contact
  Pre-fill form fields via URL params or sessionStorage:

  Pre-filled values:
    "What's the business challenge you're trying to solve?"
    → "I completed the AI Opportunity Assessment. My readiness
       score was [X]/100. My top opportunity area is [opportunity 1 title].
       I'm interested in discussing [recommended service name]."

  "How did you hear about NeoAistriq?"
    → "AI Opportunity Assessment Tool" (pre-selected)

  This gives whoever receives the form full context before
  the call — no repeat introductions, higher call quality.
```

---

## APPENDIX: TOOL COMPARISON SUMMARY

| Dimension | Quick Win Calculator | AI Readiness Toolkit | AI Opportunity Assessor |
|---|---|---|---|
| URL | /calculator | /toolkit | /assessment |
| Time to complete | 60 seconds | 45–90 minutes | 5 minutes |
| Gate | None (results free) | Email (lite) / $297 (full) | Email |
| Claude API calls | 1 | 5 (one per module) | 1 |
| Output | ROI estimate + insight | Full roadmap + PDF report | Opportunity report + PDF |
| Primary CTA placement | Homepage + Pricing | Training page | Nav + Hero |
| Lead intent signal | Low-Medium | Medium-High | High |
| Revenue | Indirect (leads) | Direct ($297) + leads | Indirect (leads) |
| Embed support | Yes (widget) | Lite only (widget) | No (standalone only) |
| Shareable result | No | No | Yes (/assessment/results?id=) |

---

## APPENDIX: SHARED TECHNICAL REQUIREMENTS

```
ALL THREE TOOLS:
  Framework:      React (Next.js recommended)
  API security:   All Claude API calls via server-side routes only
                  Never expose ANTHROPIC_API_KEY client-side
  Rate limiting:  10 completions/hour per IP (all tools)
  Input sanitize: Strip HTML from all text inputs before API calls
  Analytics:
    calculator_started
    calculator_completed
    calculator_email_captured
    toolkit_lite_started
    toolkit_lite_email_captured
    toolkit_purchased
    toolkit_module_[1-5]_completed
    toolkit_report_downloaded
    assessment_started
    assessment_q[1-8]_answered
    assessment_email_captured
    assessment_results_viewed
    assessment_report_downloaded
    assessment_cta_clicked (with service param)

ENVIRONMENT VARIABLES REQUIRED:
  ANTHROPIC_API_KEY          (server only, never client)
  CRM_WEBHOOK_URL            (lead capture endpoint)
  STRIPE_SECRET_KEY          (toolkit purchase — server only)
  STRIPE_PUBLISHABLE_KEY     (toolkit purchase — client safe)
  REPORT_STORAGE_URL         (database for report storage)
  EMAIL_SERVICE_API_KEY      (transactional email provider)

RECOMMENDED SERVICES:
  Email:          Resend or Postmark (transactional)
  Database:       Supabase or PlanetScale (report + token storage)
  Payments:       Stripe (toolkit purchase)
  CRM webhook:    HubSpot or Airtable (lead capture)
  PDF generation: Puppeteer on Vercel (serverless function)
```

---

*NeoAistriq Website Tools Specification v1.0*
*Companion document to NeoAistriq_Website_Build_Document.md*
*Open alongside NeoAistriq Design System in Claude Desktop*
*to replace all [TOKEN_NAME] placeholders before development handoff.*
