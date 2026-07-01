/**
 * NeoAistriq — Pricing Data
 * ─────────────────────────────────────────────────────────────────
 * SINGLE SOURCE OF TRUTH for all prices across the website.
 * To update a price, change it here — all pages update automatically.
 *
 * Usage: include <script src="prices.js"></script> before </body>
 * then call: NeoAistriqPrices.inject() on DOMContentLoaded
 * ─────────────────────────────────────────────────────────────────
 */

window.NeoAistriqPrices = (function () {

  // ── PRICE DATA ────────────────────────────────────────────────
  const PRICES = {
    toolkit: {
      id:           'toolkit',
      name:         'AI Readiness Toolkit',
      price:        '$297',
      priceRaw:     297,
      cadence:      'one-time',
      range:        null,
      cta:          'Buy the Toolkit',
    },
    virtualCohort: {
      id:           'virtualCohort',
      name:         'AI for Business Outcomes — Virtual Cohort',
      price:        '$497',
      priceRaw:     497,
      cadence:      'per person',
      range:        '$2,500 private cohort',
      cta:          'Reserve Your Spot',
    },
    onsiteWorkshop: {
      id:           'onsiteWorkshop',
      name:         'AI for Business Outcomes — Onsite Workshop',
      price:        '$5,000',
      priceRaw:     5000,
      cadence:      'half-day',
      range:        'Full-Day from $8,500',
      cta:          'Book an Onsite Workshop',
    },
    onsiteWorkshopFull: {
      id:           'onsiteWorkshopFull',
      name:         'Onsite Workshop — Full Day',
      price:        '$8,500',
      priceRaw:     8500,
      cadence:      'full-day',
      range:        null,
      cta:          'Book Full-Day Workshop',
    },
    sprint: {
      id:           'sprint',
      name:         'AI Readiness Sprint',
      price:        '$3,500',
      priceRaw:     3500,
      cadence:      'engagement',
      range:        'Typical: $3,500 – $6,500',
      cta:          'Start Your Sprint',
    },
    agenticBuild: {
      id:           'agenticBuild',
      name:         'Agentic Workflow Build',
      price:        '$8,000',
      priceRaw:     8000,
      cadence:      'engagement',
      range:        'Typical: $8,000 – $18,000',
      cta:          'Scope Your Build',
    },
    processRedesign: {
      id:           'processRedesign',
      name:         'AI-Native Process Redesign',
      price:        '$15,000',
      priceRaw:     15000,
      cadence:      'engagement',
      range:        'Typical: $15,000 – $35,000',
      cta:          'Start a Conversation',
    },
    managedOps: {
      id:           'managedOps',
      name:         'Managed AI Operations',
      price:        '$1,500',
      priceRaw:     1500,
      cadence:      '/month',
      range:        'Typical: $1,500 – $4,500/mo',
      cta:          'Talk About Managed Ops',
    },
  };

  // ── REVENUE LADDER (used on homepage) ────────────────────────
  const LADDER = [
    { step: '01', title: 'Learn',   service: 'AI Readiness Toolkit or Virtual Workshop', priceKey: 'toolkit',     display: 'From $297'       },
    { step: '02', title: 'Assess',  service: 'AI Readiness Sprint',                      priceKey: 'sprint',      display: 'From $3,500'     },
    { step: '03', title: 'Build',   service: 'Agentic Workflow Build',                   priceKey: 'agenticBuild',display: 'From $8,000'     },
    { step: '04', title: 'Operate', service: 'Managed AI Operations',                    priceKey: 'managedOps',  display: 'From $1,500/mo'  },
    { step: '05', title: 'Scale',   service: 'Compound your AI advantage',               priceKey: null,          display: 'Ongoing'         },
  ];

  // ── INJECT FUNCTION ──────────────────────────────────────────
  // Replaces all [data-price="id"] and [data-price-range="id"] elements
  function inject() {
    // Price displays
    document.querySelectorAll('[data-price]').forEach(el => {
      const key = el.dataset.price;
      if (PRICES[key]) {
        const p = PRICES[key];
        el.textContent = p.price;
        if (el.dataset.priceFormat === 'with-cadence' && p.cadence) {
          el.innerHTML = p.price + '<span class="price-cadence">' + p.cadence + '</span>';
        }
      }
    });

    // Range / subtext displays
    document.querySelectorAll('[data-price-range]').forEach(el => {
      const key = el.dataset.priceRange;
      if (PRICES[key] && PRICES[key].range) {
        el.textContent = PRICES[key].range;
      } else if (PRICES[key] && PRICES[key].cadence) {
        el.textContent = PRICES[key].cadence;
      }
    });

    // CTA labels
    document.querySelectorAll('[data-price-cta]').forEach(el => {
      const key = el.dataset.priceCta;
      if (PRICES[key]) el.textContent = PRICES[key].cta;
    });

    // Ladder starting-at displays
    document.querySelectorAll('[data-ladder-price]').forEach(el => {
      const key = el.dataset.ladderPrice;
      const item = LADDER.find(l => l.priceKey === key);
      if (item) el.textContent = item.display;
    });
  }

  // Auto-inject on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }

  // ── PUBLIC API ───────────────────────────────────────────────
  return {
    PRICES,
    LADDER,
    inject,
    get: (key) => PRICES[key] || null,
  };

})();

/*
 * HOW TO UPDATE PRICES
 * ──────────────────────────────────────────────────────────────
 * 1. Open this file (prices.js)
 * 2. Find the service in the PRICES object above
 * 3. Update the `price` string and `priceRaw` number
 * 4. Update `range` if the typical range has changed
 * 5. Save — all pages update automatically on next load
 *
 * HOW TO ADD A NEW PRICE POINT
 * ──────────────────────────────────────────────────────────────
 * 1. Add a new entry to PRICES with a unique `id` key
 * 2. In any HTML page, add: data-price="yourNewKey"
 *    to the element that should display the price
 * 3. That's it
 *
 * PRICE DISPLAY PATTERNS IN HTML
 * ──────────────────────────────────────────────────────────────
 * Price only:        <span data-price="sprint"></span>
 * Range/sub-text:    <span data-price-range="sprint"></span>
 * CTA label:         <span data-price-cta="sprint"></span>
 * With cadence:      <span data-price="managedOps" data-price-format="with-cadence"></span>
 * Ladder display:    <span data-ladder-price="sprint"></span>
 */
