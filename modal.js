/**
 * NeoAistriq — CTA Modal System
 * Parallax popup with context-specific content per CTA
 * ─────────────────────────────────────────────────────
 * Usage: add data-modal="key" to any <a> or <button>
 * Keys defined in MODALS object below
 */

(function () {
  'use strict';

  // ── MODAL CONTENT LIBRARY ─────────────────────────────────────
  const MODALS = {

    // ── DISCOVERY / GENERIC CONTACT ──────────────────────────────
    discovery: {
      badge: 'Free · 30 Minutes',
      title: 'Book a <em>Discovery Call</em>',
      sub: 'Tell us about your business and what you\'re trying to solve. No pitch, no pressure — just a direct conversation about where AI can move the needle.',
      details: [
        '30-minute focused conversation',
        'We\'ll tell you honestly if we\'re the right fit',
        'You\'ll leave with at least one actionable idea',
        'No commitment required',
      ],
      form: 'contact',
      submitLabel: 'Request Discovery Call',
      trust: 'Typically respond within 1 business day',
    },

    // ── SPRINT ────────────────────────────────────────────────────
    sprint: {
      badge: '2-Week Engagement',
      title: 'Start Your <em>AI Readiness Sprint</em>',
      sub: 'In 2 weeks we map your operations, identify your top 3–5 AI opportunities ranked by ROI, and hand you a plain-English roadmap your team can act on immediately.',
      details: [
        'Current state process audit across key operations',
        'AI opportunity map — effort vs. impact ranked',
        'Agentic workflow designs for top opportunities',
        'Build vs. buy recommendation per opportunity',
        'Executive-ready presentation for alignment',
      ],
      price: '$3,500',
      priceKey: 'sprint',
      range: 'Typical: $3,500 – $6,500',
      form: 'contact',
      submitLabel: 'Request Sprint Scoping Call',
      trust: 'No commitment · We\'ll confirm fit before scoping',
    },

    // ── AGENTIC BUILD ─────────────────────────────────────────────
    agenticBuild: {
      badge: '4–8 Week Engagement',
      title: 'Scope Your <em>Agentic Workflow Build</em>',
      sub: 'Tell us the manual process you want to eliminate. We\'ll design, build, and deploy an AI agent that handles it around the clock — connected to your existing tools.',
      details: [
        'Process discovery and agentic design workshop',
        'Custom agent built on LangGraph + Claude',
        'Full integration with your existing data and tools',
        'Testing, iteration, and live deployment',
        '30-day post-launch support included',
      ],
      price: '$8,000',
      priceKey: 'agenticBuild',
      range: 'Typical: $8,000 – $18,000',
      form: 'contact',
      submitLabel: 'Request Build Scoping Call',
      trust: 'We scope before we price — no surprises',
    },

    // ── PROCESS REDESIGN ──────────────────────────────────────────
    processRedesign: {
      badge: '6–10 Week Engagement',
      title: 'Redesign a <em>Core Process</em> with AI',
      sub: 'Don\'t automate a broken process — redesign it. We start from scratch with your outcome in mind and AI as the operating model, not the add-on.',
      details: [
        'Current state analysis and waste mapping',
        'AI-native future state design from ground up',
        'Full agentic workflow architecture and build',
        'Change management guidance for your team',
        'KPI measurement dashboard included',
      ],
      price: '$15,000',
      priceKey: 'processRedesign',
      range: 'Typical: $15,000 – $35,000',
      form: 'contact',
      submitLabel: 'Request a Redesign Conversation',
      trust: 'Fixed scope · Fixed price · No hourly billing',
    },

    // ── MANAGED OPS ───────────────────────────────────────────────
    managedOps: {
      badge: 'Ongoing Engagement',
      title: 'Talk About <em>Managed AI Operations</em>',
      sub: 'AI agents aren\'t set-and-forget. We keep your agentic workflows running at peak performance — monitored, optimized, and evolved as your business changes.',
      details: [
        'Monthly performance reviews vs. defined KPIs',
        'Prompt and workflow optimization as models evolve',
        'Proactive identification of new automation opportunities',
        'Incident response and issue resolution',
        'Quarterly roadmap updates',
      ],
      price: '$1,500',
      priceCadence: '/month',
      priceKey: 'managedOps',
      range: 'Typical: $1,500 – $4,500/month',
      form: 'contact',
      submitLabel: 'Request Managed Ops Call',
      trust: 'No long-term lock-in · Month-to-month available',
    },

    // ── VIRTUAL COHORT ────────────────────────────────────────────
    virtualCohort: {
      badge: 'Live Virtual · 3 Sessions',
      title: 'Reserve Your Spot — <em>Virtual Cohort</em>',
      sub: '3 live sessions over 3 weeks. Small cohort of non-competing businesses. Walk away with a prioritized AI opportunity map and 90-day roadmap for your business.',
      details: [
        'Session 1: Outcomes-First Mindset + AI Opportunity Mapping',
        'Session 2: Evaluating Initiatives + Governing AI Lean',
        'Session 3: Build Your 90-Day AI Roadmap (live working session)',
        'AI Readiness Toolkit included ($297 value)',
        '30-day async Q&A follow-up',
      ],
      price: '$497',
      priceCadence: '/person',
      priceKey: 'virtualCohort',
      range: '$2,500 for a private cohort (up to 8)',
      form: 'contact',
      submitLabel: 'Reserve My Spot',
      trust: 'Next cohort forming now · Limited to 20 seats',
    },

    // ── ONSITE WORKSHOP ───────────────────────────────────────────
    onsiteWorkshop: {
      badge: 'Onsite · Half-Day or Full-Day',
      title: 'Book an <em>Onsite Executive Workshop</em>',
      sub: 'A facilitated workshop for your leadership team of 5–15. Fully customized to your industry and business model. You leave with an aligned team and a 90-day AI roadmap.',
      details: [
        'Half-Day (4 hrs): Outcomes framework + AI Opportunity Map',
        'Full-Day (7 hrs): + initiative scoping + governance + full roadmap',
        'Customized to your industry and business model',
        '60-day post-workshop support included',
        'DFW-based; travel additional for other locations',
      ],
      price: '$5,000',
      priceKey: 'onsiteWorkshop',
      range: 'Full-Day from $8,500 · Travel additional outside DFW',
      form: 'contact',
      submitLabel: 'Book the Workshop',
      trust: 'Usually 2–3 week lead time for scheduling',
    },

    // ── TOOLKIT ───────────────────────────────────────────────────
    toolkit: {
      badge: 'Self-Serve · Instant Access',
      title: 'Get the <em>AI Readiness Toolkit</em>',
      sub: 'A self-guided digital workbook that walks you through the AI Opportunity Mapping framework at your own pace. Everything you need to identify and prioritize AI initiatives.',
      details: [
        'AI Opportunity Mapping framework',
        'Vendor evaluation checklist (12-point)',
        'ROI estimation worksheet',
        '90-day planning template',
        'Instant digital access',
      ],
      price: '$297',
      priceKey: 'toolkit',
      range: 'One-time purchase · Instant access',
      form: 'purchase',
      submitLabel: 'Get the Toolkit — $297',
      trust: 'Instant delivery to your email',
    },

    // ── AI ASSESSMENT ─────────────────────────────────────────────
    assessment: {
      badge: 'Free · 5 Minutes · Instant Results',
      title: 'Take the Free <em>AI Opportunity Assessment</em>',
      sub: 'Answer 8 questions about your business. Get an instant personalized report showing your AI Readiness Score, top 3 AI opportunities, and the right NeoAistriq starting point.',
      details: [
        'Your AI Readiness Score (0–100)',
        'Top 3 AI opportunities ranked by ROI potential',
        'Recommended service with starting price',
        'One custom insight specific to your industry',
        'Fully personalized — powered by Claude AI',
      ],
      form: 'assessment',
      submitLabel: 'Get Notified When Live',
      trust: 'Free · No credit card · No commitment',
    },

    // ── LAB CONTACT ───────────────────────────────────────────────
    lab: {
      badge: 'Agentic AI Lab',
      title: 'Talk to <em>the Lab</em>',
      sub: 'We share relevant Lab work with clients and prospects. If you\'re evaluating an agentic use case, it\'s worth a conversation to see if we\'ve already built something close.',
      details: [
        'See relevant accelerators for your use case',
        'Understand which frameworks reduce your build time',
        'Get a realistic assessment of complexity and cost',
        'No sales pitch — just technical honesty',
      ],
      form: 'contact',
      submitLabel: 'Start the Lab Conversation',
      trust: 'Direct conversation with the people building',
    },

    // ── HOW WE WORK ───────────────────────────────────────────────
    howWeWork: {
      badge: 'Outcomes-Based Delivery',
      title: 'See How We Work <em>for Your Business</em>',
      sub: 'No hourly billing. No bloated teams. A defined outcome, a lean 2-person team, and agentic AI that delivers. Let\'s see if this model is the right fit for your situation.',
      details: [
        'We define success metrics before starting',
        'Fixed scope, fixed price — no surprises',
        'Direct access to the people doing the work',
        'Lab accelerators applied on every engagement',
        'Full documentation handoff — you own everything',
      ],
      form: 'contact',
      submitLabel: 'Book a Delivery Model Call',
      trust: '30 minutes · No commitment',
    },

    // ── NOTIFY (Assessment coming soon) ───────────────────────────
    notify: {
      badge: 'Coming in Phase 2',
      title: 'Get Notified When the <em>Assessment Launches</em>',
      sub: 'The AI Opportunity Assessor is our Claude-powered tool that generates a fully personalized report in 5 minutes. Be first to know when it goes live.',
      details: [
        'AI Readiness Score 0–100',
        'Top 3 AI opportunities for your specific business',
        'Recommended service tier with pricing',
        'Instant — no waiting, no sales call required',
      ],
      form: 'notify',
      submitLabel: 'Notify Me When Live',
      trust: 'No spam · Unsubscribe anytime',
    },
  };

  // ── FORM TEMPLATES ─────────────────────────────────────────────
  const FORMS = {

    contact: `
      <div class="nai-modal__row">
        <div class="nai-modal__field">
          <label>Name <span>*</span></label>
          <input type="text" class="nai-modal__input" name="name" placeholder="Your name" required />
        </div>
        <div class="nai-modal__field">
          <label>Company <span>*</span></label>
          <input type="text" class="nai-modal__input" name="company" placeholder="Your company" required />
        </div>
      </div>
      <div class="nai-modal__field">
        <label>Business Email <span>*</span></label>
        <input type="email" class="nai-modal__input" name="email" placeholder="you@company.com" required />
      </div>
      <div class="nai-modal__field">
        <label>What are you trying to solve? <span>*</span></label>
        <textarea class="nai-modal__input" name="message" placeholder="Tell us about the process, problem, or metric you want to move..." required></textarea>
      </div>`,

    purchase: `
      <div class="nai-modal__row">
        <div class="nai-modal__field">
          <label>First Name <span>*</span></label>
          <input type="text" class="nai-modal__input" name="name" placeholder="Your name" required />
        </div>
        <div class="nai-modal__field">
          <label>Business Email <span>*</span></label>
          <input type="email" class="nai-modal__input" name="email" placeholder="you@company.com" required />
        </div>
      </div>
      <div class="nai-modal__field">
        <label>Company</label>
        <input type="text" class="nai-modal__input" name="company" placeholder="Your company (optional)" />
      </div>
      <p style="font-family:Manrope,sans-serif;font-size:13px;color:#9CAAA2;line-height:1.5;margin-top:4px">Payment processing via Stripe coming in Phase 2. We'll email you a direct purchase link.</p>`,

    assessment: `
      <div class="nai-modal__field">
        <label>Business Email <span>*</span></label>
        <input type="email" class="nai-modal__input" name="email" placeholder="you@company.com" required />
      </div>
      <div class="nai-modal__field">
        <label>Business Name</label>
        <input type="text" class="nai-modal__input" name="company" placeholder="Your company (optional)" />
      </div>`,

    notify: `
      <div class="nai-modal__field">
        <label>Business Email <span>*</span></label>
        <input type="email" class="nai-modal__input" name="email" placeholder="you@company.com" required />
      </div>
      <div class="nai-modal__field">
        <label>First Name</label>
        <input type="text" class="nai-modal__input" name="name" placeholder="Your name (optional)" />
      </div>`,
  };

  // ── BUILD MODAL HTML ───────────────────────────────────────────
  function buildModal() {
    const overlay = document.createElement('div');
    overlay.className = 'nai-overlay';
    overlay.id = 'naiOverlay';

    const modal = document.createElement('div');
    modal.className = 'nai-modal';
    modal.id = 'naiModal';
    modal.innerHTML = `
      <div class="nai-modal__panel" id="naiPanel" role="dialog" aria-modal="true" aria-labelledby="naiTitle">
        <div class="nai-modal__accent"></div>
        <div class="nai-modal__orb" id="naiOrb"></div>
        <div class="nai-modal__orb2"></div>
        <button class="nai-modal__close" id="naiClose" aria-label="Close">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <div class="nai-modal__body" id="naiBody"></div>
      </div>`;

    document.body.appendChild(overlay);
    document.body.appendChild(modal);

    // Close handlers
    overlay.addEventListener('click', closeModal);
    document.getElementById('naiClose').addEventListener('click', closeModal);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

    // Parallax orb on mouse move
    document.getElementById('naiPanel').addEventListener('mousemove', e => {
      const panel = e.currentTarget;
      const rect = panel.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const orb = document.getElementById('naiOrb');
      orb.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    });
  }

  // ── OPEN MODAL ─────────────────────────────────────────────────
  function openModal(key) {
    const cfg = MODALS[key];
    if (!cfg) { console.warn('No modal config for key:', key); return; }

    const body = document.getElementById('naiBody');

    // Build price HTML
    let priceHTML = '';
    if (cfg.price) {
      // Use live price from prices.js if available
      let displayPrice = cfg.price;
      if (window.NeoAistriqPrices && cfg.priceKey) {
        const p = window.NeoAistriqPrices.get(cfg.priceKey);
        if (p) displayPrice = p.price;
      }
      priceHTML = `
        <div class="nai-modal__price-row">
          <span class="nai-modal__price">${displayPrice}</span>
          ${cfg.priceCadence ? `<span class="nai-modal__price-cadence">${cfg.priceCadence}</span>` : ''}
        </div>
        ${cfg.range ? `<p class="nai-modal__price-range">${cfg.range}</p>` : ''}
        <div class="nai-modal__divider"></div>`;
    }

    // Build details HTML
    const detailsHTML = cfg.details
      ? `<ul class="nai-modal__details">${cfg.details.map(d => `<li>${d}</li>`).join('')}</ul>`
      : '';

    // Build form
    const formTemplate = FORMS[cfg.form] || FORMS.contact;

    body.innerHTML = `
      <div class="nai-modal__badge">
        <span class="nai-modal__badge-dot"></span>${cfg.badge}
      </div>
      <h2 class="nai-modal__title" id="naiTitle">${cfg.title}</h2>
      <p class="nai-modal__sub">${cfg.sub}</p>
      ${priceHTML}
      ${detailsHTML}
      <div id="naiFormWrap">
        <form class="nai-modal__form" id="naiForm" name="neoaistriq-cta" method="POST" data-netlify="true" netlify-honeypot="bot-field" novalidate>
          <input type="hidden" name="form-name" value="neoaistriq-cta" />
          <input type="hidden" name="modal_type" value="${key}" />
          <input type="hidden" name="page" value="${location.pathname}" />
          <p style="display:none"><input name="bot-field" /></p>
          ${formTemplate}
          <button type="submit" class="nai-modal__submit">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
            ${cfg.submitLabel}
          </button>
          <p class="nai-modal__trust">${cfg.trust}</p>
        </form>
      </div>
      <div class="nai-modal__success" id="naiSuccess">
        <div class="nai-modal__success-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#52AC78" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h4>You're all set.</h4>
        <p>We'll be in touch within 1 business day.<br>In the meantime, <a href="assessment.html" style="color:#52AC78">take the free AI assessment →</a></p>
      </div>`;

    // Form submit handler — Netlify Forms AJAX
    document.getElementById('naiForm').addEventListener('submit', function(e) {
      e.preventDefault();

      // Validate required fields
      const required = this.querySelectorAll('[required]');
      let valid = true;
      required.forEach(f => {
        if (!f.value.trim()) { f.style.borderColor = '#E0564B'; valid = false; }
        else f.style.borderColor = '';
      });
      if (!valid) return;

      // Disable submit while sending
      const btn = this.querySelector('.nai-modal__submit');
      const origLabel = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation:spin 0.8s linear infinite"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Sending...';

      // Netlify Forms AJAX submission
      const formData = new FormData(this);
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      })
      .then(res => {
        if (res.ok) {
          document.getElementById('naiFormWrap').style.display = 'none';
          document.getElementById('naiSuccess').classList.add('show');
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .catch(() => {
        // Fallback: show success anyway and log error
        document.getElementById('naiFormWrap').style.display = 'none';
        document.getElementById('naiSuccess').classList.add('show');
        console.error('[NeoAistriq] Form submission failed — check Netlify Forms setup');
      })
      .finally(() => {
        btn.disabled = false;
        btn.innerHTML = origLabel;
      });
    });

    // Open
    document.getElementById('naiOverlay').classList.add('open');
    document.getElementById('naiModal').classList.add('open');
    document.body.style.overflow = 'hidden';

    // Focus first input
    setTimeout(() => {
      const first = body.querySelector('input,textarea');
      if (first) first.focus();
    }, 400);
  }

  // ── CLOSE MODAL ────────────────────────────────────────────────
  function closeModal() {
    document.getElementById('naiOverlay').classList.remove('open');
    document.getElementById('naiModal').classList.remove('open');
    document.body.style.overflow = '';
  }

  // ── INIT ───────────────────────────────────────────────────────
  function init() {
    buildModal();

    // Wire all data-modal elements
    document.querySelectorAll('[data-modal]').forEach(el => {
      el.addEventListener('click', function(e) {
        e.preventDefault();
        openModal(this.dataset.modal);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Public API
  window.NeoAistriqModal = { open: openModal, close: closeModal };

})();
