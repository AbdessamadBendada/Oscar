/* ============================================================
   OPS DETOX™ — shared behaviour
   1. Seven-module popups
   2. Noise / clarity toggle
   ============================================================ */
(function(){
  'use strict';

  /* ---------- Module popups ---------- */
  var modal = document.getElementById('modal');
  if (modal){
    var titleEl = document.getElementById('modal-title');
    var subEl   = document.getElementById('modal-sub');
    var closeEl = document.getElementById('modal-close');
    var lastFocus = null;

    var open = function(title, sub, trigger){
      lastFocus = trigger;
      titleEl.textContent = title;
      subEl.textContent = sub;
      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      closeEl.focus();
    };
    var close = function(){
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
      if (lastFocus) lastFocus.focus();
    };

    document.querySelectorAll('.module').forEach(function(el){
      el.addEventListener('click', function(){
        open(el.dataset.title, el.dataset.sub, el);
      });
    });
    closeEl.addEventListener('click', close);
    modal.addEventListener('click', function(e){ if (e.target === modal) close(); });
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape') close(); });
  }

  /* ---------- Noise / clarity toggle ---------- */
  var sw = document.getElementById('switch');
  if (sw){
    sw.addEventListener('click', function(){
      var on = sw.getAttribute('aria-pressed') === 'true';
      sw.setAttribute('aria-pressed', String(!on));
      document.getElementById('lbl-noise').classList.toggle('is-on', on);
      document.getElementById('lbl-clarity').classList.toggle('is-on', !on);
    });
  }

})();
