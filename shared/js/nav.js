/**
 * Resource Hub — Shared Navigation
 * Injects consistent header and footer across all pages
 */

(function() {
  'use strict';

  const NAV_HTML = `
    <nav class="site-nav">
      <div class="container">
        <a href="/resources/" class="nav-brand">
          <span class="nav-brand-name">Juan Diego Villacís</span>
          <span class="nav-brand-tag">Practitioner-Scholar | Conservation & Governance</span>
        </a>
        <div class="nav-links">
          <a href="/resources/#governance">Governance</a>
          <a href="/resources/#finance">Finance</a>
          <a href="/resources/#trade">Trade</a>
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
        background: #0f1f15;
        color: #f0f0ec;
        padding: 0.75rem 0;
        position: sticky;
        top: 0;
        z-index: 100;
        border-bottom: 1px solid rgba(255,255,255,0.08);
      }
      .site-nav .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1100px;
        margin: 0 auto;
        padding: 0 2rem;
      }
      .nav-brand {
        text-decoration: none;
        color: #f0f0ec;
        display: flex;
        flex-direction: column;
        gap: 0.1em;
      }
      .nav-brand-name {
        font-weight: 700;
        font-size: 1rem;
        letter-spacing: -0.01em;
      }
      .nav-brand-tag {
        font-size: 0.7rem;
        opacity: 0.5;
        letter-spacing: 0.02em;
      }
      .nav-links {
        display: flex;
        gap: 1.5rem;
        align-items: center;
      }
      .nav-links a {
        color: rgba(240,240,236,0.7);
        text-decoration: none;
        font-size: 0.85rem;
        font-weight: 500;
        transition: color 0.2s;
      }
      .nav-links a:hover { color: #d4a843; }
      .nav-toggle { display: none; }

      @media (max-width: 768px) {
        .nav-links { display: none; }
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
          width: 20px;
          height: 2px;
          background: rgba(240,240,236,0.7);
          border-radius: 1px;
        }
        .site-nav.open .nav-links {
          display: flex;
          flex-direction: column;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: #0f1f15;
          padding: 1rem 2rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
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
})();
