// Hero Africa map: hover / focus / tap a target country (or its chip) to
// highlight it and show a tooltip. Click or tap pins the selection; Escape
// or a click outside the map clears it.
(function () {
  const map = document.querySelector(".sg-map");
  if (!map) return;

  const svg = map.querySelector(".sg-map__svg");
  const tip = map.querySelector(".sg-map__tip");
  const tipName = map.querySelector(".sg-map__tip-name");
  const items = map.querySelectorAll("[data-country]");
  const viewBox = svg.viewBox.baseVal;
  let pinned = null;

  function show(name) {
    map.classList.add("is-focused");
    items.forEach((el) => el.classList.toggle("is-active", el.dataset.country === name));

    // Place the tooltip above the country's marker, in figure pixels.
    const marker = map.querySelector('.sg-map__marker[data-country="' + name + '"]');
    const svgBox = svg.getBoundingClientRect();
    const mapBox = map.getBoundingClientRect();
    const x = svgBox.left - mapBox.left + (marker.cx.baseVal.value / viewBox.width) * svgBox.width;
    const y = svgBox.top - mapBox.top + (marker.cy.baseVal.value / viewBox.height) * svgBox.height;
    tip.style.left = x + "px";
    tip.style.top = y + "px";
    tipName.textContent = name;
    tip.hidden = false;
  }

  function clear() {
    if (pinned) return show(pinned);
    map.classList.remove("is-focused");
    items.forEach((el) => el.classList.remove("is-active"));
    tip.hidden = true;
  }

  items.forEach((el) => {
    if (el.classList.contains("sg-map__marker")) return;
    const name = el.dataset.country;
    el.addEventListener("mouseenter", () => show(name));
    el.addEventListener("mouseleave", clear);
    el.addEventListener("focus", () => show(name));
    el.addEventListener("blur", clear);
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      pinned = pinned === name ? null : name;
      pinned ? show(pinned) : clear();
    });
    // <button> chips get Enter/Space for free; SVG paths need it wired up.
    if (el.tagName === "BUTTON") return;
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        el.dispatchEvent(new MouseEvent("click"));
      }
    });
  });

  function unpin() {
    if (!pinned) return;
    pinned = null;
    clear();
  }
  document.addEventListener("click", unpin);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") unpin(); });
  window.addEventListener("resize", () => { if (pinned) show(pinned); });
})();
