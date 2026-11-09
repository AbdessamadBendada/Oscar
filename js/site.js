/* ============================================================
   OPS DETOX™ — shared behaviour (working design, no backend)

   1. Mobile nav (slide-in panel)
   2. — removed: seven-module popups
   3. Noise / clarity switch
   4. Demo forms (client-side validation + success state)
   5. Reveal on scroll
   6. Ticker duplication (seamless loop)
   7. Preloader
   8. Testimonials, one card at a time on mobile
   ============================================================ */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. Mobile nav ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');

  /* The panel slides in from the right (rebuilt 7 Nov). One function owns
     the state, because three things have to move together: the panel's own
     class, aria-expanded on the toggle, and .nav-open on <html> — which
     drives both the scrim and the body scroll lock in css/site.css. Letting
     any of them be set independently is how they drift apart. */
  if (toggle && nav) {
    var setNav = function (open) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      document.documentElement.classList.toggle('nav-open', open);
    };

    toggle.addEventListener('click', function () {
      setNav(toggle.getAttribute('aria-expanded') !== 'true');
    });

    // Close after tapping a link, and when returning to desktop width.
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') setNav(false);
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 850) setNav(false);
    });

    // Tapping the scrim closes it. The scrim is a pseudo-element on the
    // header, so there is nothing to bind to — but any click that lands on
    // the header while the panel is open, and is not the toggle or a nav
    // link, is a scrim hit.
    document.addEventListener('click', function (e) {
      if (!document.documentElement.classList.contains('nav-open')) return;
      if (toggle.contains(e.target) || nav.contains(e.target)) return;
      setNav(false);
    });

    // Escape closes and hands focus back, the same contract the module
    // popup used to follow.
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && document.documentElement.classList.contains('nav-open')) {
        setNav(false);
        toggle.focus();
      }
    });
  }

  /* ---------- 2. Seven-module popups — REMOVED 7 Nov 2026 ----------
     Taken out at the user's request. The seven cards on detox.html are
     plain <article> elements now rather than buttons, and the modal markup
     is gone from detox.html and index.html — on index it had been dead
     since the module section moved out (§18/§25), so it could never open.

     This also closes BACKLOG.md §C's "module popup detail copy" ask: there
     is no longer anywhere for that copy to go. */

  /* ---------- 3. Noise / clarity switch ---------- */
  document.querySelectorAll('.switch').forEach(function (sw) {
    var line = sw.closest('.switch-line');
    var labels = line.querySelectorAll('span');

    sw.addEventListener('click', function () {
      var clarity = sw.getAttribute('aria-pressed') !== 'true';
      sw.setAttribute('aria-pressed', String(clarity));
      labels[0].classList.toggle('is-on', !clarity);
      labels[1].classList.toggle('is-on', clarity);
    });
  });

  /* ---------- 3a. Wide O and D — REMOVED 7 Nov 2026 ----------
     This section used to walk display type and wrap every O and D in
     <i class="od"> so that ss01 could be applied to those glyphs alone.

     The licensed font made it unnecessary and then actively harmful. In
     PP Formula Condensed Bold "Alternate" the six brand letters — B C D G
     O Q — are already the default forms, and ss01 now selects the NARROW
     alternate rather than the wide one. Every wrapper was therefore
     producing the opposite shape. See css/site.css §9a. */

  /* ---------- 3b. Brand toggle rows ----------
     The noise → clarity device from the brand book. Each row is its own
     switch; aria-pressed drives every visual state from CSS. */
  document.querySelectorAll('.toggle-row').forEach(function (row) {
    var clarityTimer;

    row.addEventListener('click', function () {
      var on = row.getAttribute('aria-pressed') !== 'true';
      row.setAttribute('aria-pressed', String(on));

      /* The closing switch always returns to Clarity, but not before the
         mark has finished travelling. The knob takes 520ms to cross (see
         css/site.css §10a) and the hold is 300ms on top of that, so the
         full right-to-left motion plays out and settles before it comes
         back. At the old 350ms the knob only got about 45% across and the
         whole thing read as a wobble rather than a switch. If the travel
         duration changes, change this with it. */
      window.clearTimeout(clarityTimer);
      if (!on && row.classList.contains('choice-toggle')) {
        clarityTimer = window.setTimeout(function () {
          row.setAttribute('aria-pressed', 'true');
        }, 820);
      }
    });
  });

  /* ---------- 4. Demo forms ---------- */
  var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  document.querySelectorAll('form[data-demo-form]').forEach(function (form) {
    form.setAttribute('novalidate', '');

    var showError = function (input, message) {
      var slot = input.parentElement.querySelector('.field-error');
      if (slot) slot.textContent = message;
      input.setAttribute('aria-invalid', message ? 'true' : 'false');
      return !message;
    };

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;

      form.querySelectorAll('input, textarea').forEach(function (input) {
        var value = input.value.trim();
        var label = input.dataset.label || 'This field';
        var message = '';

        if (input.required && !value) {
          message = label + ' is required.';
        } else if (input.type === 'email' && value && !emailRe.test(value)) {
          message = 'Enter a valid email address.';
        }

        if (!showError(input, message)) valid = false;
      });

      if (!valid) {
        var firstBad = form.querySelector('[aria-invalid="true"]');
        if (firstBad) firstBad.focus();
        return;
      }

      var status = form.querySelector('.form-status') || form.querySelector('.footer-status');
      if (status) {
        status.textContent = form.dataset.successMessage ||
          'Thanks — received. (Demo only: nothing is sent until a form backend is connected.)';
        status.classList.add('is-visible');
      }
      form.reset();
    });
  });

  /* ---------- 5. Reveal on scroll ---------- */
  var revealables = document.querySelectorAll('.reveal');

  if (revealables.length) {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealables.forEach(function (el) { el.classList.add('is-in'); });
    } else {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            observer.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });

      revealables.forEach(function (el) { observer.observe(el); });
    }
  }

  /* ---------- 6. Ticker ---------- */
  // The CSS loop translates -50%, so the strip needs two identical copies.
  document.querySelectorAll('.ticker').forEach(function (ticker) {
    var strip = ticker.querySelector('div');
    if (strip && !reduceMotion) strip.innerHTML += strip.innerHTML;
  });

  /* ---------- 7. Preloader ----------
     The overlay is in the markup and already animating by the time this
     runs — CSS owns the timing so the switch never stutters waiting on JS.
     All this does is clear the overlay out of the DOM afterwards and give
     the visitor a way to skip it.

     An inline script in <head> has already set .no-preloader for
     reduced-motion users, so there is nothing to do for them. The
     ops-preloaded flag is still written below but nothing reads it while
     the preloader is under review and running on every load. */
  var preloader = document.getElementById('preloader');

  if (preloader && !document.documentElement.classList.contains('no-preloader')) {
    // The scroll lock is set by the inline <head> script, not here: this file
    // loads at the end of <body>, so locking from here would let the first
    // paint show a scrollbar beside the overlay before the lock landed.

    var finished = false;

    function endPreloader(immediate) {
      if (finished) return;
      finished = true;
      try { sessionStorage.setItem('ops-preloaded', '1'); } catch (e) {}
      // Skipping restarts the lift from wherever the overlay currently is.
      if (immediate) preloader.classList.add('is-done');
      // Released as the lift starts, never before it — unlocking early would
      // pop the scrollbar in while the overlay still covered the page, which
      // is the whole thing this timing exists to avoid.
      document.documentElement.classList.remove('pl-lock');
      // Outlast the lift animation, then take the overlay out of the DOM so
      // it can never trap a click or a tab stop.
      window.setTimeout(function () {
        if (preloader.parentNode) preloader.parentNode.removeChild(preloader);
      }, immediate ? 460 : 560);
    }

    // Matches the 1.45s lift delay on .preloader in the stylesheet; the lift
    // itself runs 0.52s. Keep the two in step if either is retimed.
    window.setTimeout(function () { endPreloader(false); }, 1450);

    ['click', 'keydown', 'wheel', 'touchstart'].forEach(function (evt) {
      window.addEventListener(evt, function () { endPreloader(true); }, { once: true, passive: true });
    });

    // Safety net: if an animation never fires (a background tab, a stalled
    // paint), the page must not stay behind a green sheet.
    window.setTimeout(function () { endPreloader(true); }, 3000);
  }

  /* ---------- 8. Testimonials, one card at a time on mobile ----------
     On desktop the row is a CSS marquee: a continuous crawl, paused on
     hover. On a phone that reads as drifting text you cannot catch, so the
     stylesheets switch the row to a snapping scroller below 700px (the same
     branch reduced motion gets) and this advances it ONE CARD per step.

     Everything here is additive. If this function never runs — old browser,
     JS off, a thrown error above it — the row is still a scroller the
     visitor can swipe by hand. Nothing below is load-bearing.

     Deliberately NOT running for reduced motion. Those users get the same
     CSS, but moving the row for them is exactly what they asked not to
     happen; theirs stays hand-driven. */
  var stepRow = window.matchMedia('(max-width: 700px)');

  if (!reduceMotion && 'IntersectionObserver' in window) {
    document.querySelectorAll('.testimonial-slider').forEach(function (slider) {
      var STEP_MS = 4200;   // long enough to read a quote of this length
      var RESUME_MS = 9000; // after a swipe, before it takes over again
      var timer = null;
      var resume = null;
      var onScreen = false;

      // The duplicate sets exist only to fill the marquee and are display:none
      // in this branch, so the real cards are the ones without aria-hidden.
      function cards() {
        return Array.prototype.filter.call(
          slider.querySelectorAll('.testimonial-track > article'),
          function (card) { return card.offsetParent !== null; }
        );
      }

      function step() {
        var list = cards();
        if (list.length < 2) return;

        // Which card is closest to the middle right now. Read from the DOM
        // every step rather than kept in a counter, so a hand-swipe between
        // steps does not leave the two out of sync.
        var middle = slider.scrollLeft + slider.clientWidth / 2;
        var current = 0;
        var best = Infinity;

        list.forEach(function (card, i) {
          var distance = Math.abs(card.offsetLeft + card.offsetWidth / 2 - middle);
          if (distance < best) { best = distance; current = i; }
        });

        var next = list[(current + 1) % list.length];
        slider.scrollTo({
          left: next.offsetLeft + next.offsetWidth / 2 - slider.clientWidth / 2,
          behavior: 'smooth'
        });
      }

      function start() {
        if (timer || !onScreen || !stepRow.matches || document.hidden) return;
        timer = window.setInterval(step, STEP_MS);
      }

      function stop() {
        window.clearInterval(timer);
        timer = null;
      }

      // A touch hands control back to the visitor. It returns on its own so
      // the row does not sit dead for the rest of the session.
      function handOver() {
        stop();
        window.clearTimeout(resume);
        resume = window.setTimeout(start, RESUME_MS);
      }

      ['pointerdown', 'touchstart', 'wheel'].forEach(function (evt) {
        slider.addEventListener(evt, handOver, { passive: true });
      });
      slider.addEventListener('focusin', handOver);

      // Off screen or in a background tab, stepping is just a timer burning
      // battery against a row nobody is looking at.
      new IntersectionObserver(function (entries) {
        onScreen = entries[0].isIntersecting;
        if (onScreen) { start(); } else { stop(); }
      }, { threshold: 0.2 }).observe(slider);

      document.addEventListener('visibilitychange', function () {
        if (document.hidden) { stop(); } else { start(); }
      });

      // Crossing the breakpoint, in either direction. Above it the CSS
      // marquee takes the row back and the timer must not keep nudging
      // scrollLeft underneath it.
      var onChange = function () {
        if (stepRow.matches) { start(); } else { stop(); slider.scrollLeft = 0; }
      };
      if (stepRow.addEventListener) {
        stepRow.addEventListener('change', onChange);
      } else if (stepRow.addListener) {
        stepRow.addListener(onChange); // Safari < 14
      }
    });
  }
})();
