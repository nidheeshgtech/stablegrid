// Page loader: drives --p from 0 to 1. Progress eases toward 90% while the
// page loads, finishes once window "load" fires (with a minimum on-screen time
// so it never just flashes), then plays the version's exit and removes itself.
// Runs synchronously right after the loader markup, before the page content.
(function () {
  const root = document.documentElement;
  const el = document.getElementById("sg-loader");
  if (!el) return;
  if (root.dataset.loader === "0") { el.remove(); root.classList.remove("is-loading"); return; }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // Some versions have a longer drawn intro and a staged exit: give them more
  // minimum on-screen time and keep the element until their exit has played.
  const v = root.dataset.loader;
  const INTRO_MS = { 9: 3600, 10: 3300 };
  const EXIT_MS = { 9: 2000, 10: 1400 };
  const MIN_MS = reduceMotion ? 300 : (INTRO_MS[v] || 2400);   // time to reach 100% at the earliest
  const MAX_MS = 8000;                        // never block longer than this
  const pctEls = el.querySelectorAll("[data-pct]");
  const start = performance.now();
  let loaded = false;
  let p = 0;

  window.addEventListener("load", () => { loaded = true; });
  setTimeout(() => { loaded = true; }, MAX_MS);

  function render() {
    el.style.setProperty("--p", p.toFixed(4));
    const pct = Math.round(p * 100);
    pctEls.forEach((n) => { n.textContent = n.dataset.pct === "pad" ? String(pct).padStart(3, "0") : pct; });
  }

  function frame(now) {
    const t = Math.min((now - start) / MIN_MS, 1);
    const eased = 1 - Math.pow(1 - t, 2);
    const target = loaded ? eased : Math.min(eased, 0.9);
    p += (target - p) * 0.12;
    if (loaded && t === 1 && p > 0.995) p = 1;
    render();
    if (p < 1) return requestAnimationFrame(frame);
    // Hold on 100% for a beat, then exit.
    setTimeout(finish, 250);
  }

  function finish() {
    el.classList.add("is-done");
    root.classList.remove("is-loading");
    // Scroll-reveal positions were measured with scrolling locked; refresh them.
    window.ScrollTrigger && window.ScrollTrigger.refresh();
    setTimeout(() => el.remove(), EXIT_MS[v] || 1400);
  }

  render();
  requestAnimationFrame(frame);
})();
