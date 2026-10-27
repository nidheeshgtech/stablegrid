// Site behaviour: header scroll state, mobile menu, About scroll-lit statement
// and proof-band count-up. Loads after reveal-lenis.js (GSAP/ScrollTrigger ready).
(function () {
  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- Header: gradient at rest, glass once scrolled ----------
  const header = document.querySelector(".sg-header");
  if (header) {
    const update = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  // ---------- Mobile menu ----------
  const burger = document.querySelector(".sg-burger");
  const menu = document.getElementById("sg-mnav");
  if (burger && menu) {
    const setOpen = (open) => {
      // Hand focus back to the toggle before hiding the menu, so focus never
      // sits inside a hidden region.
      if (!open && menu.contains(document.activeElement)) burger.focus({ preventScroll: true });
      menu.classList.toggle("is-open", open);
      menu.setAttribute("aria-hidden", open ? "false" : "true");
      menu.inert = !open;
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      root.classList.toggle("sg-menu-open", open);
    };
    menu.inert = true;
    burger.addEventListener("click", () => setOpen(!menu.classList.contains("is-open")));
    // Links close the menu; reveal-lenis.js handles the smooth scroll to the anchor.
    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
    window.matchMedia("(min-width: 1024px)").addEventListener("change", (e) => { if (e.matches) setOpen(false); });
  }

  // ---------- Advisory Board carousel ----------
  const teamEl = document.querySelector(".sg-team__swiper");
  if (teamEl && window.Swiper) {
    const fill = document.querySelector(".sg-team__progress-fill");
    // Progress bar shows the visible share of the row, growing to full at the end.
    const updateFill = (sw) => {
      if (!fill) return;
      const perView = sw.params.slidesPerView === "auto" ? 1 : sw.params.slidesPerView;
      const visible = Math.min(perView / sw.slides.length, 1);
      fill.style.transform = `scaleX(${visible + (1 - visible) * Math.max(0, Math.min(1, sw.progress))})`;
    };
    new window.Swiper(teamEl, {
      slidesPerView: 1.5,
      spaceBetween: 14,
      speed: 700,
      grabCursor: true,
      watchOverflow: true,
      keyboard: { enabled: true, onlyInViewport: true },
      a11y: { enabled: true },
      navigation: {
        prevEl: ".sg-team__btn--prev",
        nextEl: ".sg-team__btn--next",
        disabledClass: "is-disabled",
      },
      breakpoints: {
        640: { slidesPerView: 2.5, spaceBetween: 18 },
        1024: { slidesPerView: 3.3, spaceBetween: 22 },
        1280: { slidesPerView: 4, spaceBetween: 24 },
      },
      on: {
        init: updateFill,
        progress: updateFill,
        breakpoint: (sw) => requestAnimationFrame(() => updateFill(sw)),
      },
    });
  }

  // ---------- Review bar: tap to expand on phones and tablets ----------
  const reviewToggle = document.querySelector(".sg-fontswitch__toggle");
  if (reviewToggle) {
    reviewToggle.addEventListener("click", () => {
      const bar = reviewToggle.parentElement;
      const open = bar.classList.toggle("is-open");
      reviewToggle.setAttribute("aria-expanded", open ? "true" : "false");
      reviewToggle.textContent = open ? "Close" : "Review";
    });
  }

  // ---------- How It Works: exact open height for each card's description ----------
  // CSS animates max-height to var(--sg-open); measuring the real height keeps
  // the expand smooth instead of racing toward an oversized cap.
  const stepTexts = document.querySelectorAll(".sg-step__text");
  if (stepTexts.length) {
    const measure = () => stepTexts.forEach((t) => t.style.setProperty("--sg-open", t.scrollHeight + "px"));
    measure();
    if ("ResizeObserver" in window) new ResizeObserver(measure).observe(document.querySelector(".sg-steps"));
    document.fonts && document.fonts.ready.then(measure);
    // Font switcher swaps families after load; re-measure once they arrive.
    new MutationObserver(() => document.fonts.ready.then(measure)).observe(root, { attributes: true, attributeFilter: ["data-font"] });
  }

  // ---------- About: words light up as the statement scrolls through ----------
  const lit = document.querySelector("[data-lit]");
  if (lit) {
    const words = [];
    const wrap = (text, hl) => {
      const frag = document.createDocumentFragment();
      text.split(/(\s+)/).forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) return frag.appendChild(document.createTextNode(part));
        const w = document.createElement("span");
        w.className = "sg-lit__w" + (hl ? " sg-lit__w--hl" : "");
        w.textContent = part;
        words.push(w);
        frag.appendChild(w);
      });
      return frag;
    };
    [...lit.childNodes].forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) lit.replaceChild(wrap(node.textContent, false), node);
      else if (node.classList && node.classList.contains("sg-lit__hl")) lit.replaceChild(wrap(node.textContent, true), node);
    });

    if (reduceMotion || !window.gsap || !window.ScrollTrigger) {
      lit.classList.add("no-lit");
    } else {
      window.gsap.to(words, {
        opacity: 1,
        color: (i, el) => (el.classList.contains("sg-lit__w--hl") ? "#ffb100" : "#ffffff"),
        ease: "none",
        stagger: 0.08,
        scrollTrigger: { trigger: lit, start: "top 85%", end: "bottom 50%", scrub: 0.6 },
      });
    }
  }

  // ---------- Proof band: count numbers up when they come into view ----------
  const counters = document.querySelectorAll("[data-count]");
  if (counters.length && !reduceMotion && "IntersectionObserver" in window) {
    const run = (el) => {
      const to = Number(el.dataset.count);
      const from = Number(el.dataset.countFrom || 0);
      const start = performance.now();
      const dur = 1600;
      const tick = (now) => {
        const t = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(from + (to - from) * eased);
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        run(e.target);
      });
    }, { threshold: 0.6 });
    counters.forEach((el) => {
      el.textContent = el.dataset.countFrom || 0;
      io.observe(el);
    });
  }
})();
