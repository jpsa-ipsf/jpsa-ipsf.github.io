/* ==========================================================================
   JPSA — motion layers (public/assets/css/motion.css). Pauses the slow light
   while it is off screen, and moves it with the scroll where CSS scroll-driven
   animations are missing. The layers show without this file: it only saves
   battery, and gives older browsers the same depth.
   ========================================================================== */
const hosts = document.querySelectorAll(".page-hero, .home-hero, .section, .cta-band, .site-footer");

if (hosts.length && "IntersectionObserver" in window) {
  const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const byScript = !still && !(window.CSS && CSS.supports("animation-timeline: view()"));
  const onScreen = new Set();
  let frame = 0;

  // --fx-p runs from -1 to 1 across a section, and from 0 to 1 as a hero leaves the top.
  const move = () => {
    frame = 0;
    const h = window.innerHeight;
    const boxes = [...onScreen].map((el) => [el, el.getBoundingClientRect()]); // read all, then write
    boxes.forEach(([el, r]) => {
      const p = el.matches(".page-hero, .home-hero")
        ? Math.min(1, Math.max(0, -r.top / r.height))
        : (2 * (h - r.top)) / (h + r.height) - 1;
      el.style.setProperty("--fx-p", p.toFixed(3));
    });
  };
  const queue = () => { if (!frame) frame = requestAnimationFrame(move); };

  // A quarter of a screen early, so the light is already in place when a section comes into view.
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      en.target.classList.toggle("fx-idle", !en.isIntersecting);
      if (en.isIntersecting) onScreen.add(en.target); else onScreen.delete(en.target);
    });
    if (byScript) queue();
  }, { rootMargin: "25% 0px" });
  hosts.forEach((el) => io.observe(el));

  if (byScript) {
    document.documentElement.classList.add("fx-js");
    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", queue);
  }
}
