# NeoAistriq Website

AI-Native Lean Services & Agentic AI Lab — neoaistriq.com

## Tech Stack

Pure HTML/CSS/JS — no build step, no framework, no dependencies.
Deploys directly to Vercel free tier.

## File Structure

```
neoaistriq-website/
├── index.html              # Homepage
├── what-we-do.html         # Services page
├── how-we-work.html        # Delivery model page
├── training.html           # AI for Business Outcomes training
├── lab.html                # Agentic AI Lab page
├── pricing.html            # Pricing page
├── about.html              # About + Contact page
├── assessment.html         # AI Opportunity Assessor (Phase 2 placeholder)
├── prices.js               # ⚡ SINGLE SOURCE OF TRUTH for all pricing
├── assets/                 # Logo marks and brand assets
│   ├── logo-mark-bright.png
│   ├── logo-mark-white.png
│   ├── logo-mark.png
│   ├── logo-original.jpg
│   ├── brand-keyart.png
│   └── brand-homepage-ref.png
├── README.md               # This file
├── NeoAistriq_Website_Content.md       # All page copy
├── NeoAistriq_Website_Build_Document.md # Component specs
└── NeoAistriq_Website_Tools_Spec.md    # Interactive tools spec (Phase 2)
```

## Deploy to Vercel (5 minutes)

### Option A — Drag and Drop (fastest)
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **Add New → Project**
3. Drag this entire folder into the upload area
4. Click **Deploy**
5. Connect your custom domain in Project Settings → Domains

### Option B — Via GitHub (recommended for ongoing updates)
1. Create a new GitHub repo (e.g. `neoaistriq-website`)
2. Push all files from this folder to the repo root
3. Go to [vercel.com](https://vercel.com) → **Add New → Project**
4. Import the GitHub repo
5. Leave all settings as default (no build command needed)
6. Click **Deploy**
7. Connect `neoaistriq.com` in Project Settings → Domains

### Vercel Settings
- **Framework Preset:** Other
- **Build Command:** *(leave empty)*
- **Output Directory:** *(leave empty / use `.`)*
- **Install Command:** *(leave empty)*

No environment variables needed for Phase 1.

---

## Updating Prices

**Never edit prices directly in HTML files.**

Open `prices.js` and update the value in the `PRICES` object:

```js
sprint: {
  price: '$3,500',   // ← change this
  priceRaw: 3500,    // ← and this
  range: 'Typical: $3,500 – $6,500',  // ← and this if range changes
  ...
},
```

Save → commit → push → Vercel redeploys automatically. All pages update.

### Price Keys Reference
| Key | Service | Current Price |
|-----|---------|--------------|
| `toolkit` | AI Readiness Toolkit | $297 |
| `virtualCohort` | Virtual Cohort Training | $497/person |
| `onsiteWorkshop` | Onsite Workshop (Half-Day) | $5,000 |
| `onsiteWorkshopFull` | Onsite Workshop (Full-Day) | $8,500 |
| `sprint` | AI Readiness Sprint | $3,500 |
| `agenticBuild` | Agentic Workflow Build | $8,000 |
| `processRedesign` | AI-Native Process Redesign | $15,000 |
| `managedOps` | Managed AI Operations | $1,500/mo |

---

## Design System

**Fonts** — Loaded via CDN (jsDelivr), no local files needed:
- Display: Space Grotesk
- Body/UI: Manrope
- Mono/Labels: JetBrains Mono

**Brand Colors:**
- Primary Green: `#4A8C5C`
- Accent Green: `#52AC78`
- Canvas: `#0A1410`
- Deep: `#07100C`

**Logo** — The base64-encoded logo mark is embedded directly in HTML.
If you update the logo, replace the base64 string in the nav of each page,
or switch to `<img src="assets/logo-mark-bright.png">` references.

---

## Phase 2 — Interactive Tools + Database

When ready to build Phase 2, refer to:
- `NeoAistriq_Website_Tools_Spec.md` — full spec for all 3 tools
- `NeoAistriq_Website_Build_Document.md` — data architecture and integration spec

Phase 2 stack:
- **Claude API** (Anthropic) — AI Opportunity Assessor, Quick Win Calculator, AI Readiness Toolkit
- **Supabase** (free tier) — assessment report storage, toolkit access tokens
- **HubSpot Free** — CRM lead capture
- **Resend** (free tier) — transactional email (contact form notifications)
- **Stripe** — AI Readiness Toolkit purchases ($297)

All Phase 2 API keys go into Vercel Environment Variables — never in code.

---

## Contact

hello@neoaistriq.com | neoaistriq.com | Frisco, TX
Part of the Fractal KX ecosystem.

---

## CTA Modal System

Every CTA button on the site opens a context-specific parallax popup instead of navigating to a generic contact page.

### Files
- `modal.css` — Modal styles and animations
- `modal.js` — Modal logic, content library, form handling

### Adding a modal to any element
```html
<a href="#" data-modal="sprint">Start Your Sprint</a>
<button data-modal="discovery">Book a Call</button>
```

### Modal keys
| Key | Opens for |
|-----|-----------|
| `discovery` | Generic discovery call |
| `sprint` | AI Readiness Sprint |
| `agenticBuild` | Agentic Workflow Build |
| `processRedesign` | AI-Native Process Redesign |
| `managedOps` | Managed AI Operations |
| `virtualCohort` | Virtual Training Cohort |
| `onsiteWorkshop` | Onsite Executive Workshop |
| `toolkit` | AI Readiness Toolkit purchase |
| `assessment` | AI Opportunity Assessor |
| `lab` | Lab conversation |
| `notify` | Assessment launch notification |

### Phase 2 form submission
In `modal.js`, find the comment `// Phase 2:` and uncomment the fetch call:
```js
fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
```

---

## Founder Photo

Add your photo as `assets/founder-photo.jpg` (square crop, min 160×160px).
See `assets/REPLACE_FOUNDER_PHOTO.txt` for details.

## LinkedIn URLs
- Company: https://www.linkedin.com/company/neoaistriq/
- Founder: https://www.linkedin.com/in/aggarwalsaurabh
