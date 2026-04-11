/**
 * Resource Hub — Shared Navigation V2
 * Dark theme, matches index-v2.html design
 */

(function() {
  'use strict';

  const NAV_HTML = `
    <nav class="site-nav">
      <div class="site-nav-inner">
        <a href="../" class="nav-brand">JDV</a>
        <div class="nav-links">
          <a href="../#governance">Governance</a>
          <a href="../#finance">Finance</a>
          <a href="../#trade">Trade</a>
          <a href="../#publications">Publications</a>
          <a href="https://linkedin.com/in/jdv42/" target="_blank" rel="noopener">LinkedIn</a>
        </div>
        <button class="nav-toggle" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  `;

  const NAV_CSS = `
    <style>
      .site-nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(8,8,8,0.85);
        backdrop-filter: blur(24px);
        -webkit-backdrop-filter: blur(24px);
        border-bottom: 1px solid rgba(255,255,255,0.06);
      }
      .site-nav-inner {
        width: 100%;
        max-width: 960px;
        padding: 0 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .nav-brand {
        font-family: 'Cormorant Garamond', Georgia, serif;
        font-size: 1.2rem;
        font-weight: 600;
        color: rgba(255,255,255,0.85);
        text-decoration: none;
        letter-spacing: -0.02em;
      }
      .nav-brand:hover { color: rgba(255,255,255,0.85); }
      .nav-links {
        display: flex;
        gap: 2rem;
        align-items: center;
      }
      .nav-links a {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.8rem;
        font-weight: 500;
        color: rgba(255,255,255,0.25);
        text-decoration: none;
        transition: color 0.2s ease;
      }
      .nav-links a:hover { color: #b4a078; }
      .nav-toggle { display: none; }

      @media (max-width: 768px) {
        .nav-links { display: none; }
        .site-nav-inner { padding: 0 1.25rem; }
        .nav-toggle {
          display: flex;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .nav-toggle span {
          width: 18px;
          height: 1.5px;
          background: rgba(255,255,255,0.4);
          border-radius: 1px;
          transition: all 0.2s;
        }
        .site-nav.open .nav-links {
          display: flex;
          flex-direction: column;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(8,8,8,0.95);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          padding: 1rem 2rem 1.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          gap: 1rem;
        }
        .site-nav.open .nav-links a {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.5);
        }
      }
    </style>
  `;

  // Inject nav
  document.body.insertAdjacentHTML('afterbegin', NAV_CSS + NAV_HTML);

  // Mobile toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  // Expandable sections (shared interactive behavior)
  document.addEventListener('click', function(e) {
    const trigger = e.target.closest('.expandable-trigger');
    if (trigger) {
      const section = trigger.closest('.expandable');
      if (section) section.classList.toggle('open');
    }
  });

  // Checklist items (shared interactive behavior)
  document.addEventListener('click', function(e) {
    const item = e.target.closest('.checklist-item');
    if (item) {
      item.classList.toggle('checked');
      // Update progress if a progress bar exists
      const container = item.closest('.tool-container');
      if (container) {
        const total = container.querySelectorAll('.checklist-item').length;
        const checked = container.querySelectorAll('.checklist-item.checked').length;
        const fill = container.querySelector('.progress-fill');
        const counter = container.querySelector('.progress-counter');
        if (fill) fill.style.width = Math.round((checked / total) * 100) + '%';
        if (counter) counter.textContent = checked + ' / ' + total;
      }
    }
  });
})();
