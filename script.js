/* =================================================================
   ELENA HART — interactions (vanilla JS, no dependencies)
   Everything here is a PROGRESSIVE ENHANCEMENT: the page works fully
   without JavaScript. We only add behavior once the DOM is ready.
   ================================================================= */
(function () {
  "use strict";

  var doc = document;

  /* --- Mark that JS is available so reveal styles can hide-then-show --- */
  doc.documentElement.classList.add("reveal-ready");

  /* ---------------------------------------------------------------
     1) Sticky nav: add shadow once the user scrolls
     --------------------------------------------------------------- */
  var nav = doc.querySelector("[data-nav]");
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------------------------------------------------------------
     2) Mobile menu toggle (accessible)
     --------------------------------------------------------------- */
  var toggle = doc.querySelector("[data-nav-toggle]");
  var menu = doc.querySelector("[data-mobile-menu]");

  function closeMenu() {
    if (!toggle || !menu) return;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    menu.hidden = true;
  }
  function openMenu() {
    if (!toggle || !menu) return;
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    menu.hidden = false;
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      if (expanded) { closeMenu(); } else { openMenu(); }
    });

    // Close the menu after tapping any link inside it
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMenu();
    });

    // Close on Escape
    doc.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });

    // Close if resized up to desktop layout
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 900) closeMenu();
    });
  }

  /* ---------------------------------------------------------------
     3) Scroll reveal via IntersectionObserver
        Falls back to "show everything" if unsupported.
     --------------------------------------------------------------- */
  var revealEls = doc.querySelectorAll(".reveal");
  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!("IntersectionObserver" in window) || prefersReduced) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---------------------------------------------------------------
     4) Accessible FAQ accordion
        - toggles aria-expanded + panel [hidden]
        - full keyboard support (Enter/Space native to <button>)
     --------------------------------------------------------------- */
  var accordion = doc.querySelector("[data-accordion]");
  if (accordion) {
    var triggers = accordion.querySelectorAll(".accordion__trigger");
    triggers.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var expanded = btn.getAttribute("aria-expanded") === "true";
        var panel = doc.getElementById(btn.getAttribute("aria-controls"));
        btn.setAttribute("aria-expanded", String(!expanded));
        if (panel) panel.hidden = expanded;
      });
    });
  }

  /* ---------------------------------------------------------------
     5) Smooth-scroll for same-page anchors, accounting for the
        sticky nav height. (CSS scroll-padding handles most of it;
        this also cleanly manages focus for accessibility.)
     --------------------------------------------------------------- */
  doc.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      if (!id || id === "#" || id.length < 2) return;
      var target = doc.querySelector(id);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({
        behavior: prefersReduced ? "auto" : "smooth",
        block: "start"
      });

      // Move keyboard focus to the target for screen-reader users
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });

      // Keep the URL shareable without a jump
      if (history.pushState) history.pushState(null, "", id);
    });
  });

  /* ---------------------------------------------------------------
     6) Auto-update the footer copyright year
     --------------------------------------------------------------- */
  var yearEl = doc.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
