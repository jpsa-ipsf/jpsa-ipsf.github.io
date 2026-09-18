/* ==========================================================================
   JPSA — the Executive Committee strip on team.html (ExcoReel.astro).
   The strip scrolls and snaps without this file. It adds the arrow buttons,
   the arrow, Home and End keys, a click on a side card to bring it to the
   middle, and, where CSS scroll-driven animations are missing, the depth:
   it sets --exco-p (0 at the first card, 1 at the last) as pages.css would.
   ========================================================================== */
const reel = document.querySelector(".exco-reel");

if (reel) {
  const stage = reel.querySelector(".exco-reel__stage");
  const items = [...stage.querySelectorAll(".exco-reel__item")];
  const arrows = reel.querySelector(".exco-reel__arrows");
  const [prev, next] = arrows.querySelectorAll("button");
  const last = items.length - 1;
  const byScript = !(window.CSS && CSS.supports("animation-timeline: scroll()"));
  let target = 0;
  let frame = 0;

  const room = () => stage.scrollWidth - stage.clientWidth || 1;
  const progress = () => stage.scrollLeft / room();
  // The card to count from: the one the last press is still travelling to, or the one in the middle.
  const from = () => {
    const at = progress() * last;
    return Math.abs(at - target) < 1 ? target : Math.round(at);
  };
  // Moves smoothly (scroll-behavior in pages.css), or at once with reduced motion.
  const go = (i) => {
    target = Math.max(0, Math.min(last, i));
    stage.scrollTo({ left: (target / last) * room() });
  };

  const update = () => {
    frame = 0;
    const p = progress();
    prev.setAttribute("aria-disabled", String(p < 0.001));
    next.setAttribute("aria-disabled", String(p > 0.999));
    if (byScript) stage.style.setProperty("--exco-p", p.toFixed(4));
  };
  const queue = () => { if (!frame) frame = requestAnimationFrame(update); };

  prev.addEventListener("click", () => go(from() - 1));
  next.addEventListener("click", () => go(from() + 1));
  stage.addEventListener("keydown", (e) => {
    const step = { ArrowLeft: -1, ArrowRight: 1 }[e.key];
    if (!step && e.key !== "Home" && e.key !== "End") return;
    e.preventDefault();
    go(step ? from() + step : e.key === "Home" ? 0 : last);
  });
  stage.addEventListener("click", (e) => {
    const item = e.target.closest(".exco-reel__item");
    if (item) go(items.indexOf(item));
  });
  stage.addEventListener("scroll", queue, { passive: true });
  window.addEventListener("resize", queue);

  if (byScript) reel.classList.add("is-scripted");
  arrows.hidden = false;
  update();
}
