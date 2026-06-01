(function () {
  const path = window.location.pathname;
  const isHome = path === "/" || path === "/index.html";
  const sectionHref = (id) => (isHome ? `#${id}` : `/#${id}`);

  class VeneziaSiteHeader extends HTMLElement {
    connectedCallback() {
      if (this.dataset.rendered) return;
      this.dataset.rendered = "true";

      const showLangSwitch = this.getAttribute("lang-switch") === "true";

      this.innerHTML = `
        <header class="site-header">
          <div class="container nav-row">
            <a class="logo" href="${isHome ? "#top" : "/"}" aria-label="Venezia Home">
              <img src="/images/venezia-logo.svg" alt="Venezia Sales Solution" />
            </a>
            <nav class="nav-links">
              <a href="${sectionHref("sports")}" data-i18n="nav_sports">Sportbusiness</a>
              <a href="${sectionHref("infrastructure")}" data-i18n="nav_infrastructure">Infrastruktur</a>
              <a href="${sectionHref("references")}" data-i18n="nav_references">Referenzen</a>
              <a href="${sectionHref("contact")}" data-i18n="nav_contact">Kontakt</a>
            </nav>
            <div class="right-controls">
              ${showLangSwitch ? `
              <div class="lang-switcher" aria-label="Language switch">
                <button id="lang-toggle" class="lang-flag" type="button" data-next-lang="en" aria-label="Switch to English">
                  <img id="lang-flag-icon" src="/images/flags/gb.svg" alt="English" />
                </button>
              </div>` : ""}
              <button class="burger" type="button" aria-label="Menü öffnen" aria-expanded="false">
                <span></span><span></span><span></span>
              </button>
            </div>
          </div>
        </header>

        <div class="mobile-nav" aria-hidden="true">
          <div class="mobile-nav-inner">
            <a href="${sectionHref("sports")}" data-i18n="nav_sports">Sportbusiness</a>
            <a href="${sectionHref("infrastructure")}" data-i18n="nav_infrastructure">Infrastruktur</a>
            <a href="${sectionHref("references")}" data-i18n="nav_references">Referenzen</a>
            <a href="${sectionHref("contact")}" data-i18n="nav_contact">Kontakt</a>
          </div>
        </div>
      `;

      const burgerBtn = this.querySelector(".burger");
      const mobileNav = this.querySelector(".mobile-nav");

      const closeBurger = () => {
        burgerBtn?.classList.remove("open");
        burgerBtn?.setAttribute("aria-expanded", "false");
        mobileNav?.classList.remove("open");
        mobileNav?.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
      };

      const openBurger = () => {
        burgerBtn?.classList.add("open");
        burgerBtn?.setAttribute("aria-expanded", "true");
        mobileNav?.classList.add("open");
        mobileNav?.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
      };

      burgerBtn?.addEventListener("click", () => {
        burgerBtn.classList.contains("open") ? closeBurger() : openBurger();
      });

      mobileNav?.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeBurger));

      document.addEventListener("click", (e) => {
        if (!e.target.closest(".site-header") && !e.target.closest(".mobile-nav")) {
          closeBurger();
        }
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeBurger();
      });

      window.addEventListener("resize", () => {
        if (window.innerWidth > 900) closeBurger();
      });
    }
  }

  class VeneziaSiteFooter extends HTMLElement {
    connectedCallback() {
      if (this.dataset.rendered) return;
      this.dataset.rendered = "true";

      this.innerHTML = `
        <footer>
          <div class="container footer-grid">
            <div>
              <img src="/images/venezia-logo.svg" alt="Venezia" style="width:170px" />
              <p class="muted" style="margin:0.75rem 0 0.15rem;font-size:0.84rem;font-weight:600;">Venezia Sales Solution</p>
              <p class="muted" style="margin:0;font-size:0.82rem;line-height:1.6;">Marktstrasse 4<br />75365 Calw</p>
            </div>
            <div class="footer-links">
              <p class="footer-title" data-i18n="footer_nav">Navigation</p>
              <ul>
                <li><a href="${sectionHref("sports")}" data-i18n="nav_sports">Sportbusiness</a></li>
                <li><a href="${sectionHref("infrastructure")}" data-i18n="nav_infrastructure">Infrastruktur</a></li>
                <li><a href="${sectionHref("references")}" data-i18n="nav_references">Referenzen</a></li>
                <li><a href="${sectionHref("contact")}" data-i18n="nav_contact">Kontakt</a></li>
              </ul>
            </div>
            <div class="footer-links">
              <p class="footer-title" data-i18n="footer_guidelines">Richtlinien</p>
              <ul>
                <li><a href="/impressum" data-i18n="footer_imprint">Impressum</a></li>
                <li><a href="/impressum" data-i18n="footer_privacy">Datenschutz</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom container">
            <span>© <span class="footer-year"></span> Venezia Sales Solution</span>
            <a href="https://uifactory.de" target="_blank" rel="noopener" data-i18n="footer_webdesign">Webdesign von uifactory.de</a>
          </div>
        </footer>
      `;

      const yearNode = this.querySelector(".footer-year");
      if (yearNode) yearNode.textContent = new Date().getFullYear();
    }
  }

  customElements.define("venezia-site-header", VeneziaSiteHeader);
  customElements.define("venezia-site-footer", VeneziaSiteFooter);
})();
