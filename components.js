// Global header/footer component for all pages

const _HEADER_INNER = `
<div class="container nav-row">
  <a class="logo" href="index.html" aria-label="Venezia Home">
    <img src="./images/logo2.jpeg" alt="Venezia Sales Solution" />
  </a>
  <nav class="nav-links">
    <a href="index.html#sports" data-i18n="nav_sports">Sportbusiness</a>
    <a href="index.html#infrastructure" data-i18n="nav_infrastructure">Infrastruktur</a>
    <a href="index.html#references" data-i18n="nav_references">Referenzen</a>
    <a href="index.html#contact" data-i18n="nav_contact">Kontakt</a>
  </nav>
  <div class="right-controls">
    <div class="lang-switcher" aria-label="Language switch">
      <button id="lang-toggle" class="lang-flag" type="button" data-next-lang="en" aria-label="Switch to English">
        <img id="lang-flag-icon" src="./images/flags/gb.svg" alt="English" />
      </button>
    </div>
    <button class="burger" id="burger-btn" type="button" aria-label="Menü öffnen" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</div>`;

const _MOBILE_NAV = `
<div class="mobile-nav" id="mobile-nav" aria-hidden="true">
  <div class="mobile-nav-inner">
    <a href="index.html#sports" data-i18n="nav_sports">Sportbusiness</a>
    <a href="index.html#infrastructure" data-i18n="nav_infrastructure">Infrastruktur</a>
    <a href="index.html#references" data-i18n="nav_references">Referenzen</a>
    <a href="index.html#contact" data-i18n="nav_contact">Kontakt</a>
  </div>
</div>`;

const _FOOTER_INNER = `
<div class="container footer-grid">
  <div>
    <img src="./images/logo2.jpeg" alt="Venezia" style="height:80px;width:auto" />
    <p class="muted" style="margin:0.75rem 0 0.15rem;font-size:0.84rem;font-weight:600;">Venezia Sales Solution</p>
    <p class="muted" style="margin:0;font-size:0.82rem;line-height:1.6;">Marktstrasse 4<br />75365 Calw</p>
  </div>
  <div class="footer-links">
    <p class="footer-title" data-i18n="footer_nav">Navigation</p>
    <ul>
      <li><a href="index.html#sports" data-i18n="nav_sports">Sportbusiness</a></li>
      <li><a href="index.html#infrastructure" data-i18n="nav_infrastructure">Infrastruktur</a></li>
      <li><a href="index.html#references" data-i18n="nav_references">Referenzen</a></li>
      <li><a href="index.html#contact" data-i18n="nav_contact">Kontakt</a></li>
    </ul>
  </div>
  <div class="footer-links">
    <p class="footer-title" data-i18n="footer_guidelines">Richtlinien</p>
    <ul>
      <li><a href="impressum.html" data-i18n="footer_imprint">Impressum</a></li>
      <li><a href="#" data-i18n="footer_privacy">Datenschutz</a></li>
    </ul>
  </div>
</div>
<div class="footer-bottom container">
  <span>© <span id="year"></span> Venezia Sales Solution</span>
  <a href="https://uifactory.de" target="_blank" rel="noopener" data-i18n="footer_webdesign">Webdesign von uifactory.de</a>
</div>`;

const _WHATSAPP = `
<a class="whatsapp-float" href="https://wa.me/4917680280241" target="_blank" rel="noopener" aria-label="WhatsApp kontaktieren">
  <svg viewBox="0 0 448 512" aria-hidden="true"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
</a>`;

const _SHARED_TRANSLATIONS = {
  de: {
    nav_sports: "Sportbusiness",
    nav_infrastructure: "Infrastruktur",
    nav_references: "Referenzen",
    nav_contact: "Kontakt",
    footer_nav: "Navigation",
    footer_guidelines: "Richtlinien",
    footer_imprint: "Impressum",
    footer_privacy: "Datenschutz",
    footer_webdesign: "Webdesign von uifactory.de"
  },
  en: {
    nav_sports: "Sports Business",
    nav_infrastructure: "Infrastructure",
    nav_references: "References",
    nav_contact: "Contact",
    footer_nav: "Navigation",
    footer_guidelines: "Legal",
    footer_imprint: "Imprint",
    footer_privacy: "Privacy",
    footer_webdesign: "Web design by uifactory.de"
  }
};

function initComponents(pageTranslations) {
  const headerEl = document.querySelector('.site-header');
  if (headerEl) {
    headerEl.innerHTML = _HEADER_INNER;
    headerEl.insertAdjacentHTML('afterend', _MOBILE_NAV);
  }

  const footerEl = document.querySelector('footer');
  if (footerEl) footerEl.innerHTML = _FOOTER_INNER;

  document.body.insertAdjacentHTML('beforeend', _WHATSAPP);

  const translations = {
    de: Object.assign({}, _SHARED_TRANSLATIONS.de, (pageTranslations || {}).de || {}),
    en: Object.assign({}, _SHARED_TRANSLATIONS.en, (pageTranslations || {}).en || {})
  };

  let currentLang = 'de';

  function updateToggle(lang) {
    const btn = document.getElementById('lang-toggle');
    const icon = document.getElementById('lang-flag-icon');
    if (!btn) return;
    if (lang === 'de') {
      if (icon) { icon.src = './images/flags/gb.svg'; icon.alt = 'English'; }
      btn.dataset.nextLang = 'en';
      btn.setAttribute('aria-label', 'Switch to English');
    } else {
      if (icon) { icon.src = './images/flags/de.svg'; icon.alt = 'Deutsch'; }
      btn.dataset.nextLang = 'de';
      btn.setAttribute('aria-label', 'Auf Deutsch umstellen');
    }
  }

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    const t = translations[lang];
    if (t.page_title) document.title = t.page_title;
    document.querySelectorAll('[data-i18n]').forEach(node => {
      const key = node.getAttribute('data-i18n');
      if (t[key] !== undefined) node.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(node => {
      const key = node.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) node.placeholder = t[key];
    });
    updateToggle(lang);
    const s = document.getElementById('form-status');
    if (s) s.textContent = '';
  }

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  document.addEventListener('click', e => {
    const btn = e.target.closest('#lang-toggle');
    if (btn) applyLanguage(btn.dataset.nextLang || 'en');
  });

  function openBurger() {
    const b = document.getElementById('burger-btn');
    const n = document.getElementById('mobile-nav');
    if (!b || !n) return;
    b.classList.add('open'); b.setAttribute('aria-expanded', 'true');
    n.classList.add('open'); n.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeBurger() {
    const b = document.getElementById('burger-btn');
    const n = document.getElementById('mobile-nav');
    if (!b || !n) return;
    b.classList.remove('open'); b.setAttribute('aria-expanded', 'false');
    n.classList.remove('open'); n.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', e => {
    if (e.target.closest('#burger-btn')) {
      document.getElementById('burger-btn')?.classList.contains('open') ? closeBurger() : openBurger();
    } else if (!e.target.closest('.site-header') && !e.target.closest('.mobile-nav')) {
      closeBurger();
    }
  });

  document.getElementById('mobile-nav')?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeBurger));
  window.addEventListener('resize', () => { if (window.innerWidth > 900) closeBurger(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeBurger(); });

  applyLanguage(currentLang);

  window.venezia = { applyLanguage, getCurrentLang: () => currentLang };
}
