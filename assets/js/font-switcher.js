// Font version switcher for review. Versions come from window.SG_FONT_SETS
// (defined in <head>); picking one sets <html data-font>, loads that set's
// Google Fonts stylesheet, remembers the pick and keeps ?font= in the URL.
(function () {
  const root = document.documentElement;
  const bar = document.querySelector(".sg-fontswitch");
  const sets = window.SG_FONT_SETS;
  if (!bar || !sets) return;

  const holder = bar.querySelector(".sg-fontswitch__buttons");
  const name = bar.querySelector(".sg-fontswitch__name");

  const buttons = Object.keys(sets).map((v) => {
    const b = document.createElement("button");
    b.type = "button";
    b.dataset.fontSet = v;
    b.textContent = v.toUpperCase();
    b.title = v.toUpperCase() + ": " + sets[v].name;
    b.addEventListener("click", () => apply(v));
    holder.appendChild(b);
    return b;
  });

  function apply(v) {
    window.SG_LOAD_FONT_SET(v);
    root.dataset.font = v;
    buttons.forEach((b) => b.classList.toggle("is-active", b.dataset.fontSet === v));
    name.textContent = sets[v].name;
    try { localStorage.setItem("sg-font", v); } catch (e) {}
    const url = new URL(location.href);
    url.searchParams.set("font", v);
    history.replaceState(null, "", url);
    // Text reflows with a new font, so scroll-reveal trigger points need re-measuring.
    document.fonts.ready.then(() => window.ScrollTrigger && window.ScrollTrigger.refresh());
  }

  apply(root.dataset.font || "v1");

  // Loader picker: keep the current font in the link, mark the active loader.
  bar.querySelectorAll("[data-loader-set]").forEach((a) => {
    a.classList.toggle("is-active", a.dataset.loaderSet === root.dataset.loader);
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const url = new URL(location.href);
      url.searchParams.set("loader", a.dataset.loaderSet);
      location.href = url.toString();
    });
  });
})();
