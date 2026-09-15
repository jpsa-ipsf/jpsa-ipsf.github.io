/* ==========================================================================
   JPSA — shared rendering helpers, header and footer
   ========================================================================== */
(function () {
  "use strict";

  const C = window.JPSA;

  const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ESC[c]);

  /* Escapes text but keeps the few inline tags content.js is allowed to use. */
  const rich = (s) => esc(s).replace(/&lt;(\/?)(strong|em|br)&gt;/g, "<$1$2>");

  const icon = (name, cls = "") => {
    const paths = (window.ICONS || {})[name];
    if (!paths) {
      console.warn("[JPSA] Missing icon:", name);
      return "";
    }
    return `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths}</svg>`;
  };

  const paras = (list, cls = "") =>
    (Array.isArray(list) ? list : [list]).map((t) => `<p${cls ? ` class="${cls}"` : ""}>${rich(t)}</p>`).join("");

  const isExternal = (href) => /^https?:/i.test(href);
  const extAttrs = (href) => (isExternal(href) ? ' target="_blank" rel="noopener"' : "");

  const btn = ({ label, href, variant = "primary", iconName = "arrow-right", size = "" }) =>
    `<a class="btn btn--${variant}${size ? " btn--" + size : ""}" href="${esc(href)}"${extAttrs(href)}>${esc(label)}${iconName ? icon(iconName) : ""}</a>`;

  const textLink = (label, href) =>
    `<a class="text-link" href="${esc(href)}"${extAttrs(href)}>${esc(label)}${icon(isExternal(href) ? "arrow-up-right" : "arrow-right")}</a>`;

  const mailto = (subject) => `mailto:${C.site.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;

  /* Brand leaves (red + yellow), echoing the JPSA logo. */
  const leaves = (cls = "") =>
    `<svg class="${cls}" viewBox="0 0 120 130" aria-hidden="true" focusable="false">` +
    `<path d="M44 118C12 94 12 46 52 10c16 34 18 72-8 108z" fill="#9e1414"/>` +
    `<path d="M52 124c-2-34 20-62 58-68 2 36-20 64-58 68z" fill="#fdd82e"/>` +
    `<path d="M55 116c7-18 21-34 42-46" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity=".75"/></svg>`;

  const reveal = (delayMs) => `class="reveal"${delayMs ? ` style="--delay:${delayMs}ms"` : ""}`;

  const sectionHead = ({ kicker, title, lead, center = false, split = false, aside = "" }) => {
    const cls = ["section-head", center && "section-head--center", split && "section-head--split"].filter(Boolean).join(" ");
    const head = `${kicker ? `<span class="kicker">${esc(kicker)}</span>` : ""}<h2>${rich(title)}</h2>`;
    if (split) {
      return `<div class="${cls} reveal"><div class="stack" style="--stack:18px">${head}</div><div>${lead ? `<p class="lead">${rich(lead)}</p>` : ""}${aside}</div></div>`;
    }
    return `<div class="${cls} reveal">${head}${lead ? `<p class="lead">${rich(lead)}</p>` : ""}${aside}</div>`;
  };

  const pageHero = ({ kicker, title, lead, ghost, crumb, extra = "" }) => `
    <section class="page-hero">
      ${ghost ? `<div class="page-hero__ghost" aria-hidden="true">${esc(ghost)}</div>` : ""}
      ${extra}
      <div class="container page-hero__inner">
        <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Home</a>${icon("chevron-right")}<span aria-current="page">${esc(crumb || kicker)}</span></nav>
        <span class="kicker">${esc(kicker)}</span>
        <h1>${rich(title)}</h1>
        ${lead ? `<p class="lead">${rich(lead)}</p>` : ""}
      </div>
    </section>`;

  const marquee = (items, variant = "") => {
    const group = items.map((t) => `<span class="marquee__item">${esc(t)}</span>`).join("");
    return `<div class="marquee ${variant}" aria-hidden="true"><div class="marquee__track"><div class="marquee__group">${group}</div><div class="marquee__group">${group}</div></div></div>`;
  };

  const initials = (name) =>
    String(name).split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("");

  const person = (p, i = 0) => `
    <article class="person reveal" style="--delay:${(i % 4) * 70}ms">
      <div class="person__photo">${
        p.photo
          ? `<img src="${esc(p.photo)}" alt="${esc(p.name)}" loading="lazy" decoding="async" width="640" height="800">`
          : `<span class="person__initials" aria-hidden="true">${esc(initials(p.name))}</span>`
      }</div>
      <div>
        <h3 class="person__name">${esc(p.name)}</h3>
        ${p.role ? `<p class="person__role">${esc(p.role)}</p>` : ""}
        ${p.meta ? `<p class="person__meta">${esc(p.meta)}</p>` : ""}
      </div>
    </article>`;

  const stats = (list) =>
    `<div class="stats">${list
      .map((s, i) => `<div class="stat reveal" style="--delay:${i * 90}ms"><div class="stat__num" data-count="${esc(s.num)}">${esc(s.num)}</div><p class="stat__label">${esc(s.label)}</p></div>`)
      .join("")}</div>`;

  const ctaBand = ({ title, text, buttons }) => `
    <section class="section section--tight">
      <div class="container">
        <div class="cta-band reveal">
          <div>
            <h2>${rich(title)}</h2>
            ${text ? `<p>${rich(text)}</p>` : ""}
          </div>
          <div class="cluster">${buttons}</div>
          ${leaves("cta-band__leaf")}
        </div>
      </div>
    </section>`;

  /* ---------------------------------------------------------------- Header */
  const renderHeader = (page) => `
    <div class="container header-inner">
      <a class="brand" href="index.html" aria-label="JPSA — home">
        <img src="${C.site.logo.dark}" alt="JPSA — Jordan Pharmaceutical Students' Association" width="900" height="435">
      </a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Open menu">${icon("menu")}</button>
      <nav class="nav" id="site-nav" aria-label="Main">
        <ul class="nav-list">
          ${C.nav
            .map((n) => `<li><a class="nav-link" href="${n.href}"${n.page === page ? ' aria-current="page"' : ""}>${esc(n.label)}</a></li>`)
            .join("")}
        </ul>
        ${btn({ label: "Join JPSA", href: C.site.links.join, size: "sm" })}
      </nav>
    </div>`;

  /* ---------------------------------------------------------------- Footer */
  const renderFooter = () => {
    const L = C.site.links;
    const social = [
      ["instagram", L.instagram, "JPSA on Instagram"],
      ["facebook", L.facebook, "JPSA on Facebook"],
      ["linkedin", L.linkedin, "JPSA on LinkedIn"],
    ]
      .map(([i, href, label]) => `<a href="${href}" target="_blank" rel="noopener" aria-label="${label}">${icon(i)}</a>`)
      .join("");
    return `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <img src="${C.site.logo.light}" alt="JPSA" width="900" height="453" loading="lazy">
          <p>${esc(C.footer.blurb)}</p>
          <div class="social">${social}</div>
        </div>
        <div>
          <p class="footer-title">Explore</p>
          <ul class="footer-links">${C.nav.map((n) => `<li><a href="${n.href}">${esc(n.label)}</a></li>`).join("")}</ul>
        </div>
        <div>
          <p class="footer-title">Get involved</p>
          <ul class="footer-links">
            <li><a href="${L.join}"${extAttrs(L.join)}>Join JPSA</a></li>
            <li><a href="sep.html">Go on exchange</a></li>
            <li><a href="index.html#family">Meet the family</a></li>
            <li><a href="${mailto("Partnership with JPSA")}">Partner with us</a></li>
          </ul>
        </div>
        <div>
          <p class="footer-title">Contact</p>
          <div class="footer-contact">
            <a href="${mailto()}">${icon("mail")}${esc(C.site.email)}</a>
            <a href="${L.sepInstagram}" target="_blank" rel="noopener">${icon("plane")}@sep.jordan</a>
            <a href="${L.ipsfJpsa}" target="_blank" rel="noopener">${icon("globe")}JPSA on ipsf.org</a>
            <span style="display:inline-flex;gap:10px;align-items:center">${icon("map-pin")}Amman, Jordan</span>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© <span data-year>${new Date().getFullYear()}</span> ${esc(C.site.name)}</span>
        <span>${esc(C.site.slogan)}</span>
      </div>
    </div>
    <div class="footer-wordmark" aria-hidden="true">JPSA</div>`;
  };

  window.JP = {
    C, esc, rich, icon, paras, btn, textLink, mailto, leaves, reveal, extAttrs,
    sectionHead, pageHero, marquee, person, stats, ctaBand, renderHeader, renderFooter,
  };
})();
