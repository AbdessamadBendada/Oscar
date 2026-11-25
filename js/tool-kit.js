/* ==============================================================
   OPS DETOX TOOL KIT
   The shared machinery behind the step-by-step instruments. The
   scoring engines stay in their own pages; everything here is about
   getting a visitor from one screen to the next without losing
   them, their place or their answers.

   Loaded before the page's engine:
     js/site.js -> js/premium-motion.js -> js/tool-kit.js -> engine

   WHAT IT FIXES, DELIBERATELY
     - focus. Changing screen used to leave the caret on a button
       inside a now-hidden section, which strands a keyboard user
       and tells a screen reader nothing at all;
     - the radio pattern. role="radiogroup" promises arrow keys. It
       now delivers them;
     - progress. The bar is a real progressbar with a value on it;
     - the refresh. Seven answers used to die with one reload;
     - Back. The browser button used to leave the tool entirely;
     - reduced motion. The smooth scroll ignored the preference;
     - the queued-screen reveal. premium-motion.js observes .hm
       elements with an IntersectionObserver, and an observer never
       fires for anything inside a display:none screen, so motion
       classes in a screen the visitor had not reached yet would
       have stayed at opacity 0 permanently. The flow reveals them
       the moment their screen becomes the active one.

   Nothing here is load-bearing for the answers themselves: with
   JavaScript off, a tool page shows its intro and nothing moves,
   which is the same as it was before.
   ============================================================== */
(function () {
  "use strict";

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
    });
  }

  /* A list read as a sentence: "a, b and c". */
  function andJoin(list) {
    if (!list || !list.length) return '';
    if (list.length === 1) return String(list[0]);
    return list.slice(0, -1).join(', ') + ' and ' + list[list.length - 1];
  }

  /* ----------------------------------------------------------------
     Session storage, wrapped. Private browsing throws on write in
     some builds, and a thrown quota error must never take the tool
     down with it — losing persistence is a far smaller problem than
     losing the page.
     ---------------------------------------------------------------- */
  function readStore(key) {
    try {
      var raw = window.sessionStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch (err) {
      return null;
    }
  }

  function writeStore(key, value) {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    } catch (err) { /* no persistence available; carry on */ }
  }

  function clearStore(key) {
    try {
      window.sessionStorage.removeItem(key);
    } catch (err) { /* as above */ }
  }

  /* ----------------------------------------------------------------
     The first reveal has to outlast the preloader, or the headline
     finishes animating behind a green sheet and the visitor sees
     only the end state. js/site.js takes the overlay out of the DOM
     when it is done, which is the signal waited on here. The timeout
     is the safety net: a reveal that never fires would leave the
     intro at opacity 0.
     ---------------------------------------------------------------- */
  function whenPageReady(run) {
    var preloader = document.getElementById('preloader');
    var twoFrames = function () {
      requestAnimationFrame(function () { requestAnimationFrame(run); });
    };

    if (!preloader || !preloader.isConnected) {
      twoFrames();
      return;
    }

    var done = false;
    var fire = function () {
      if (done) return;
      done = true;
      observer.disconnect();
      twoFrames();
    };

    var observer = new MutationObserver(function () {
      if (!preloader.isConnected) fire();
    });
    observer.observe(document.body, { childList: true });
    window.setTimeout(fire, 2200);
  }

  /* ----------------------------------------------------------------
     THE RADIO GROUP
     Buttons with role="radio" inside role="radiogroup". The arrow
     keys move focus WITHOUT choosing, which is a deliberate
     departure from the usual pattern: choosing here advances to the
     next question, so selection-follows-focus would make it
     impossible to read the options with the keyboard at all. Space
     and Enter choose, which is what the button already did.
     ---------------------------------------------------------------- */
  function radioGroup(group) {
    if (!group || group.dataset.toolRadio === 'ready') return;
    group.dataset.toolRadio = 'ready';

    var options = function () {
      return Array.prototype.slice.call(group.querySelectorAll('[role="radio"]'));
    };

    var sync = function () {
      var all = options();
      var checked = all.filter(function (option) {
        return option.getAttribute('aria-checked') === 'true';
      })[0];
      all.forEach(function (option) {
        option.tabIndex = option === (checked || all[0]) ? 0 : -1;
      });
    };

    group.addEventListener('keydown', function (event) {
      var all = options();
      var from = all.indexOf(document.activeElement);
      if (from < 0) return;

      var to = -1;
      switch (event.key) {
        case 'ArrowDown': case 'ArrowRight': to = (from + 1) % all.length; break;
        case 'ArrowUp': case 'ArrowLeft': to = (from - 1 + all.length) % all.length; break;
        case 'Home': to = 0; break;
        case 'End': to = all.length - 1; break;
        default: return;
      }

      event.preventDefault();
      all.forEach(function (option) { option.tabIndex = -1; });
      all[to].tabIndex = 0;
      all[to].focus();
    });

    group.addEventListener('click', function () {
      /* The engine sets aria-checked on click; re-point the single
         tab stop at whatever it chose. */
      window.setTimeout(sync, 0);
    });

    sync();
    return { sync: sync };
  }

  /* ----------------------------------------------------------------
     THE FLOW
     Owns which screen is showing, the rail, focus, the announcement,
     the hash and the saved answers. It does not know what a question
     is: the page gives it an ordered list of step ids and it moves
     between them.
     ---------------------------------------------------------------- */
  function flow(config) {
    var root = config.root || document;
    var steps = config.steps || function () { return []; };
    var rail = config.rail || null;
    var railStep = config.railStep || null;
    var track = config.track || null;
    var announce = config.announce || null;

    var order = steps();
    var currentId = order[0];
    var furthest = 0;

    /* ---- the address bar ----
       The step goes in the hash so the browser's own Back button
       walks the questions instead of leaving the tool.

       pushState is tried first and it is allowed to fail. A page
       opened straight off the disk — which is how these are
       reviewed — has an opaque origin, and a browser may refuse a
       history state object there outright. Before this was wrapped,
       that SecurityError came out of the middle of a screen change
       and took the rest of it down with it: no saved answers, no
       working Start again. The hash on its own still gives Back
       something to go back to. */
    var setHash = function (id, replace) {
      var hash = '#' + id;
      if (window.location.hash === hash) return;
      try {
        if (replace) window.history.replaceState(null, '', hash);
        else window.history.pushState(null, '', hash);
      } catch (err) {
        try { window.location.hash = id; } catch (err2) { /* nothing left to try */ }
      }
    };

    var screenFor = function (id) {
      return root.querySelector('[data-step="' + id + '"]');
    };

    var indexOf = function (id) {
      return order.indexOf(id);
    };

    /* ---- the saved answers ---- */
    var persist = function () {
      if (!config.key) return;
      writeStore(config.key, {
        step: currentId,
        furthest: furthest,
        data: config.serialize ? config.serialize() : null
      });
    };

    var forget = function () {
      if (config.key) clearStore(config.key);
    };

    /* ---- the rail ---- */
    var paintRail = function (index, total) {
      var onIntro = index === 0;
      if (rail) rail.hidden = onIntro;

      if (railStep && config.label) {
        railStep.textContent = config.label(currentId, index, total);
      }

      if (track) {
        var pct = config.progress
          ? config.progress(index, total)
          : Math.round((index / Math.max(1, total - 1)) * 100);
        pct = Math.max(0, Math.min(100, pct));
        var bar = track.firstElementChild;
        if (bar) bar.style.width = pct + '%';
        track.setAttribute('aria-valuenow', String(Math.round(pct)));
        if (config.progressText) {
          track.setAttribute('aria-valuetext', config.progressText(currentId, index, total));
        }
      }
    };

    /* ---- the move ---- */
    var activate = function (id, options) {
      options = options || {};
      order = steps();

      var index = indexOf(id);
      if (index < 0) {
        id = order[0];
        index = 0;
      }

      var screen = screenFor(id);
      if (!screen) return;

      Array.prototype.forEach.call(root.querySelectorAll('[data-step]'), function (el) {
        el.classList.toggle('is-active', el === screen);
      });

      currentId = id;
      if (index > furthest) furthest = index;

      /* Anything waiting on a reveal inside this screen gets it now.
         See the note at the top of the file. The class is added a
         couple of frames late so the transition actually has two
         states to move between; on the very first screen it also
         waits for the preloader to lift. */
      var pending = screen.querySelectorAll('.hm:not(.is-in)');
      if (pending.length) {
        var reveal = function () {
          Array.prototype.forEach.call(pending, function (el) {
            el.classList.add('is-in');
          });
        };
        if (options.silent) whenPageReady(reveal);
        else requestAnimationFrame(reveal);
      }

      paintRail(index, order.length);

      if (config.onEnter) config.onEnter(id, index, order.length);

      if (!options.silent) {
        if (announce && config.announcement) {
          announce.textContent = config.announcement(id, index, order.length);
        }

        var target = screen.querySelector('[data-focus]') || screen;
        if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
        /* preventScroll, because the scroll below is the one that
           should decide where the page lands, not the focus call. */
        try { target.focus({ preventScroll: true }); } catch (err) { target.focus(); }

        var behavior = reduce.matches ? 'instant' : 'smooth';
        if (index === 0) {
          window.scrollTo({ top: 0, behavior: behavior });
        } else {
          screen.scrollIntoView({ behavior: behavior, block: 'start' });
        }
      }

      if (!options.keepHash) setHash(id, options.replace);

      persist();
    };

    var go = function (id, options) {
      activate(id, options);
    };

    var step = function (delta) {
      order = steps();
      var next = indexOf(currentId) + delta;
      if (next < 0) next = 0;
      if (next > order.length - 1) next = order.length - 1;
      activate(order[next]);
    };

    /* The browser's own Back and Forward. Both events are listened
       for because the two ways of setting the hash above announce
       themselves differently: pushState pairs with popstate, a bare
       hash assignment with hashchange. Anything that matches the
       screen already showing is this code's own doing and ignored.

       A visitor may not skip ahead of where they have actually
       been, or they would land on a result built from nothing. */
    var onHistory = function () {
      var id = window.location.hash.replace('#', '');
      if (!id || id === currentId) return;

      order = steps();
      var index = indexOf(id);
      if (index < 0) return;

      if (index > furthest) {
        activate(order[furthest], { replace: true });
        return;
      }
      activate(id, { keepHash: true });
    };

    window.addEventListener('popstate', onHistory);
    window.addEventListener('hashchange', onHistory);

    /* ---- first paint ---- */
    var start = function () {
      order = steps();

      var saved = config.key ? readStore(config.key) : null;
      var restoredTo = null;

      if (saved && config.restore) {
        try {
          restoredTo = config.restore(saved.data) === false ? null : saved.step;
        } catch (err) {
          restoredTo = null;
        }
        order = steps();
        furthest = Math.max(0, Math.min(order.length - 1, saved.furthest || 0));
      }

      /* A hash is only honoured when there are answers behind it.
         Otherwise a shared #result link would open a result page
         built out of nothing, which is worse than no link at all. */
      var hashId = restoredTo ? window.location.hash.replace('#', '') : '';
      var wanted = order.indexOf(hashId) > -1 ? hashId
        : (restoredTo && order.indexOf(restoredTo) > -1 ? restoredTo : order[0]);

      /* silent: a page that has just loaded must not grab focus or
         animate a scroll the visitor did not ask for. */
      activate(wanted, { silent: true, replace: true });
    };

    return {
      go: go,
      next: function () { step(1); },
      back: function () { step(-1); },
      current: function () { return currentId; },
      index: function () { return indexOf(currentId); },
      total: function () { return steps().length; },
      refresh: function () { order = steps(); paintRail(indexOf(currentId), order.length); },
      persist: persist,
      forget: forget,
      start: start
    };
  }

  /* ----------------------------------------------------------------
     DOWNLOAD, WHICH IS THE BROWSER'S PRINT DIALOG
     No PDF library, on purpose. The print sheet in css/tool.css
     already lays the result out for paper, and the browser's own
     Save as PDF gives selectable text in the licensed font, at any
     page size, on a phone as well as a desktop — for none of the
     weight of a bundled renderer.

     The document title is the saved file's default name in every
     browser that does this, so it is swapped for something the
     visitor will recognise in a downloads folder and swapped back
     afterwards.
     ---------------------------------------------------------------- */
  function download(name) {
    var original = document.title;
    if (name) document.title = name;

    var restore = function () {
      document.title = original;
      window.removeEventListener('afterprint', restore);
    };
    window.addEventListener('afterprint', restore);
    /* Safari has fired afterprint late or not at all; the timer is
       the belt to that braces. */
    window.setTimeout(restore, 4000);

    window.print();
  }

  /* Today, as the file name wants it: 2026-11-25. */
  function stamp(date) {
    var d = date || new Date();
    var pad = function (n) { return (n < 10 ? '0' : '') + n; };
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  }

  window.OpsTool = {
    flow: flow,
    radioGroup: radioGroup,
    download: download,
    stamp: stamp,
    escapeHtml: escapeHtml,
    andJoin: andJoin,
    reducedMotion: reduce
  };
})();
