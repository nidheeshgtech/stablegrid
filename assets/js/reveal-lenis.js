(function () {
  const EASE = "power3.out";
  const DURATION = 1.1;   // seconds per reveal
  const STAGGER = 0.12;   // seconds between group children
  const RISE = 28;        // px each element rises
  const SCALE_FROM = 0.97;

  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- Lenis smooth scroll ----------
  if (window.Lenis && !reduceMotion) {
    const lenis = new Lenis({ autoRaf: true, lerp: 0.1, wheelMultiplier: 1 });

    // ScrollTrigger must hear Lenis's scroll, or triggers never fire.
    if (ScrollTrigger) lenis.on("scroll", ScrollTrigger.update);

    // Same-page #anchor links glide through Lenis, landing below a fixed header.
    document.addEventListener("click", (e) => {
      const link = e.target.closest('a[href*="#"]');
      if (!link) return;
      const url = new URL(link.href, location.href);
      if (url.pathname !== location.pathname || !url.hash) return;
      const target = document.querySelector(decodeURIComponent(url.hash));
      if (!target) return;
      e.preventDefault();
      const header = document.querySelector("header");
      const offset = header ? header.offsetHeight + 16 : 0;
      lenis.scrollTo(target, {
        offset: -offset,
        duration: 1.2,
        easing: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
      });
    });
  }

  // ---------- Scroll reveal ----------
  const singles = document.querySelectorAll("[data-scroll-reveal]");
  const groups = document.querySelectorAll("[data-scroll-reveal-group]");

  // No GSAP or reduced motion: just show everything.
  if (!gsap || !ScrollTrigger || reduceMotion) {
    singles.forEach((el) => { el.style.opacity = 1; el.style.transform = "none"; });
    groups.forEach((g) => [...g.children].forEach((c) => { c.style.opacity = 1; c.style.transform = "none"; }));
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // Re-measure trigger points when the page height changes
  // (lazy images, accordions, sliders), or reveals fire in the wrong place.
  if ("ResizeObserver" in window) {
    let last = document.documentElement.scrollHeight, timer;
    new ResizeObserver(() => {
      const h = document.documentElement.scrollHeight;
      if (h === last) return;
      last = h;
      clearTimeout(timer);
      timer = setTimeout(() => ScrollTrigger.refresh(), 150);
    }).observe(document.body);
  }

  // gsap.set + gsap.to (not gsap.from): the CSS already parks elements at
  // opacity 0, so .from() would tween 0 -> 0 and do nothing.
  const startState = (t) => gsap.set(t, { opacity: 0, y: RISE, scale: SCALE_FROM });
  const trigger = (el) => ({ trigger: el, start: "top 85%", toggleActions: "play none none none" });

  singles.forEach((el) => {
    startState(el);
    gsap.to(el, { opacity: 1, y: 0, scale: 1, duration: DURATION, ease: EASE, scrollTrigger: trigger(el) });
  });

  groups.forEach((group) => {
    const kids = [...group.children];
    if (!kids.length) return;
    startState(kids);
    gsap.to(kids, { opacity: 1, y: 0, scale: 1, duration: DURATION, ease: EASE, stagger: STAGGER, scrollTrigger: trigger(group) });
  });
})();
