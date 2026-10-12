/* ============================================================
   OPS DETOX™ — shared behaviour (working design, no backend)

   1. Mobile nav
   2. Seven-module popups
   3. Noise / clarity switch
   4. Demo forms (client-side validation + success state)
   5. Reveal on scroll
   6. Ticker duplication (seamless loop)
   ============================================================ */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. Mobile nav ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });

    // Close after tapping a link, and when returning to desktop width.
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 850) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- 2. Seven-module popups ---------- */
  var modal = document.getElementById('modal');

  if (modal) {
    var mTitle = modal.querySelector('.modal-title');
    var mSub = modal.querySelector('.modal-sub');
    var mIcon = modal.querySelector('.modal-icon');
    var mClose = modal.querySelector('.modal-close');
    var lastFocus = null;

    var openModal = function (trigger) {
      lastFocus = trigger;
      mTitle.textContent = trigger.dataset.title;
      mSub.textContent = trigger.dataset.sub;
      mIcon.src = trigger.querySelector('img').getAttribute('src');
      modal.classList.add('is-open');
      document.body.classList.add('is-locked');
      mClose.focus();
    };

    var closeModal = function () {
      modal.classList.remove('is-open');
      document.body.classList.remove('is-locked');
      if (lastFocus) lastFocus.focus();
    };

    document.querySelectorAll('.module').forEach(function (el) {
      el.addEventListener('click', function () { openModal(el); });
    });

    mClose.addEventListener('click', closeModal);
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
    });
  }

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

  /* ---------- 3a. Wide O and D ----------
     Brand guideline V1.0 p.25. Wraps each O and D in display type so the
     ss01 alternate applies to that glyph alone; setting the feature on the
     whole heading would swap every letter and lose the condensed character.
     Runs over text nodes only, so existing markup and links survive. */
  var OD_SELECTOR = 'h1, h2, .eyebrow, .toggle-row span, .stat-grid strong, ' +
                    '.module h3, .button, .ticker div, .process-grid article > span, .pill-list li';

  function wrapOD(root) {
    if (!root || root.closest('#modal')) return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!/[OD]/.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;
        if (n.parentNode.classList && n.parentNode.classList.contains('od')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [], n;
    while ((n = walker.nextNode())) nodes.push(n);

    nodes.forEach(function (node) {
      var parent = node.parentNode;
      var frag = document.createDocumentFragment();

      node.nodeValue.split(/([OD])/).forEach(function (part) {
        if (!part) return;
        if (part === 'O' || part === 'D') {
          var i = document.createElement('i');
          i.className = 'od';
          i.textContent = part;
          frag.appendChild(i);
        } else {
          frag.appendChild(document.createTextNode(part));
        }
      });

      // In a flex or grid parent every child becomes its own item, which
      // would collapse the spaces around each letter and apply the container
      // gap between them. Keep the split text as one item.
      var display = getComputedStyle(parent).display;
      if (display === 'flex' || display === 'inline-flex' ||
          display === 'grid' || display === 'inline-grid') {
        var keeper = document.createElement('span');
        keeper.className = 'od-run';
        keeper.appendChild(frag);
        frag = keeper;
      }

      parent.replaceChild(frag, node);
    });
  }

  document.querySelectorAll(OD_SELECTOR).forEach(wrapOD);

  /* ---------- 3b. Brand toggle rows ----------
     The noise → clarity device from the brand book. Each row is its own
     switch; aria-pressed drives every visual state from CSS. */
  document.querySelectorAll('.toggle-row').forEach(function (row) {
    var clarityTimer;

    row.addEventListener('click', function () {
      var on = row.getAttribute('aria-pressed') !== 'true';
      row.setAttribute('aria-pressed', String(on));

      window.clearTimeout(clarityTimer);
      if (!on && row.classList.contains('choice-toggle')) {
        clarityTimer = window.setTimeout(function () {
          row.setAttribute('aria-pressed', 'true');
        }, 350);
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
})();
