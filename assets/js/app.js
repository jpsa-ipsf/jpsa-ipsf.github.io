/* ==========================================================================
   JPSA — boot + interactions
   ========================================================================== */
(function () {
  "use strict";

  const JP = window.JP;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasIO = "IntersectionObserver" in window;

  function render() {
    const page = document.body.dataset.page || "home";
    const main = document.getElementById("main");
    document.getElementById("site-header").innerHTML = JP.renderHeader(page);
    try {
      main.innerHTML = (JP.pages[page] || JP.pages.home)();
    } catch (err) {
      console.error("[JPSA] Could not render page:", err);
      main.innerHTML = `<section class="section"><div class="container"><h1>Something went wrong</h1><p class="lead">Please check assets/js/content.js for a typo (a missing quote or comma is the usual culprit).</p></div></section>`;
    }
    document.getElementById("site-footer").innerHTML = JP.renderFooter();
  }

  /* ---------- Header: scrolled state + mobile menu ---------- */
  function initHeader() {
    const header = document.getElementById("site-header");
    const toggle = header.querySelector(".menu-toggle");
    const nav = header.querySelector(".nav");

    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const setOpen = (open) => {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      toggle.innerHTML = JP.icon(open ? "x" : "menu");
      document.body.style.overflow = open ? "hidden" : "";
    };
    toggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
    nav.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("is-open")) { setOpen(false); toggle.focus(); }
    });
    window.matchMedia("(min-width: 1041px)").addEventListener("change", (e) => { if (e.matches) setOpen(false); });
  }

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    const els = document.querySelectorAll(".reveal, .journey");
    if (!hasIO) { els.forEach((el) => el.classList.add("is-visible")); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
    );
    // Whatever is already on screen when the page opens is shown at once (no fade),
    // so the first view never waits on animation timing. The rest fades in on scroll.
    const fold = window.innerHeight * 0.92;
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < fold) el.classList.add("is-visible", "no-anim");
      else io.observe(el);
    });

    // Manifesto lines light up one by one as they cross the middle of the screen.
    const lines = document.querySelectorAll(".manifesto__line");
    const lio = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); lio.unobserve(en.target); }
      }),
      { rootMargin: "0px 0px -35% 0px", threshold: 0.6 }
    );
    lines.forEach((el) => lio.observe(el));
  }

  /* ---------- Counting numbers ---------- */
  function initCounters() {
    const els = document.querySelectorAll("[data-count]");
    if (!hasIO || reduceMotion || !els.length) return;
    const parse = (s) => {
      const m = String(s).match(/^([^\d]*)([\d,]+)(.*)$/);
      return m ? { pre: m[1], num: parseInt(m[2].replace(/,/g, ""), 10), post: m[3], comma: m[2].indexOf(",") > -1 } : null;
    };
    const fmt = (n, comma) => (comma ? n.toLocaleString("en-US") : String(n));

    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (!en.isIntersecting) return;
        io.unobserve(en.target);
        const el = en.target;
        const p = el._count;
        const t0 = performance.now();
        const dur = 1300;
        const tick = (t) => {
          const k = Math.min(1, (t - t0) / dur);
          const eased = 1 - Math.pow(1 - k, 3);
          const v = Math.round(p.from + (p.num - p.from) * eased);
          el.textContent = p.pre + fmt(v, p.comma) + p.post;
          if (k < 1) requestAnimationFrame(tick);
          else el.textContent = el.dataset.count;
        };
        requestAnimationFrame(tick);
      }),
      { threshold: 0.6 }
    );

    els.forEach((el) => {
      const p = parse(el.dataset.count);
      if (!p || p.num < 3) return;
      p.from = p.num >= 1900 && p.num <= 2100 ? p.num - 40 : 0; // years count up from a nearby year
      el._count = p;
      el.textContent = p.pre + fmt(p.from, p.comma) + p.post;
      io.observe(el);
    });
  }

  /* ---------- Tabs (team explorer) ---------- */
  function initTabs() {
    document.querySelectorAll("[data-tabs]").forEach((root) => {
      const tabs = Array.from(root.querySelectorAll('[role="tab"]'));
      const select = (tab, focus) => {
        tabs.forEach((t) => {
          const on = t === tab;
          t.setAttribute("aria-selected", String(on));
          t.tabIndex = on ? 0 : -1;
          const panel = document.getElementById(t.getAttribute("aria-controls"));
          if (panel) panel.hidden = !on;
        });
        if (focus) tab.focus();
      };
      tabs.forEach((t, i) => {
        t.addEventListener("click", () => select(t));
        t.addEventListener("keydown", (e) => {
          const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
          if (step) { e.preventDefault(); select(tabs[(i + step + tabs.length) % tabs.length], true); }
          else if (e.key === "Home") { e.preventDefault(); select(tabs[0], true); }
          else if (e.key === "End") { e.preventDefault(); select(tabs[tabs.length - 1], true); }
        });
      });
    });
  }

  /* ---------- Sticky sub-nav scroll spy (portfolios) ---------- */
  function initScrollSpy() {
    const links = Array.from(document.querySelectorAll(".subnav [data-spy]"));
    if (!links.length || !hasIO) return;
    const strip = document.querySelector(".subnav__inner");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (!en.isIntersecting) return;
        links.forEach((a) => {
          const on = a.dataset.spy === en.target.id;
          a.classList.toggle("is-active", on);
          if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
          if (on && strip.scrollWidth > strip.clientWidth) {
            strip.scrollTo({ left: a.offsetLeft - (strip.clientWidth - a.offsetWidth) / 2, behavior: reduceMotion ? "auto" : "smooth" });
          }
        });
      }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach((a) => { const s = document.getElementById(a.dataset.spy); if (s) io.observe(s); });
  }

  /* ---------- Partner filter ---------- */
  function initFilter() {
    const pills = Array.from(document.querySelectorAll("[data-filter]"));
    if (!pills.length) return;
    const groups = Array.from(document.querySelectorAll("[data-group]"));
    pills.forEach((pill) =>
      pill.addEventListener("click", () => {
        const id = pill.dataset.filter;
        pills.forEach((p) => p.setAttribute("aria-pressed", String(p === pill)));
        groups.forEach((g) => g.classList.toggle("is-filtered-out", !(id === "all" || g.dataset.group === id)));
        document.querySelectorAll("[data-group]:not(.is-filtered-out) .reveal").forEach((el) => el.classList.add("is-visible"));
      })
    );
  }

  /* ---------- Deep links (#section) after the page is rendered ---------- */
  function scrollToHash() {
    if (!location.hash) return;
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
  }

  function boot() {
    if (!JP || !window.JPSA) {
      console.error("[JPSA] content.js or core.js failed to load.");
      return;
    }
    render();
    initHeader();
    initReveal();
    initCounters();
    initTabs();
    initScrollSpy();
    initFilter();
    scrollToHash();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
