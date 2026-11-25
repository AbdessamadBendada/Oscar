/* OPS DETOX premium-page motion controller.
   Pages opt in by adding .premium-motion to <html> before paint and
   .hm plus a motion variant to the elements that should reveal. */
(() => {
  const root = document.documentElement;
  const body = document.body;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const targets = Array.from(document.querySelectorAll('.hm'));

  const revealAll = () => targets.forEach(target => target.classList.add('is-in'));
  const beginPage = () => body.classList.add('premium-ready');

  if (reducedMotion.matches || !root.classList.contains('premium-motion')) {
    beginPage();
    revealAll();
    return;
  }

  const preloader = document.getElementById('preloader');
  if (root.classList.contains('no-preloader') || !preloader || !preloader.isConnected) {
    requestAnimationFrame(() => requestAnimationFrame(beginPage));
  } else {
    const preloaderObserver = new MutationObserver(() => {
      if (!preloader.isConnected) {
        preloaderObserver.disconnect();
        requestAnimationFrame(beginPage);
      }
    });
    preloaderObserver.observe(body, { childList: true });
    setTimeout(beginPage, 3600);
  }

  if (!('IntersectionObserver' in window)) {
    revealAll();
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: .1 });

  targets.forEach(target => observer.observe(target));

  /* A hash link or a very fast trackpad jump can move an element from
     below to above the viewport without producing an intersecting frame. */
  let scrollFrame = 0;
  const revealPassed = () => {
    scrollFrame = 0;
    targets.forEach(target => {
      if (target.classList.contains('is-in')) return;
      if (target.getBoundingClientRect().top < innerHeight * .9) {
        target.classList.add('is-in');
        observer.unobserve(target);
      }
    });
  };

  addEventListener('scroll', () => {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(revealPassed);
  }, { passive: true });
  requestAnimationFrame(revealPassed);
})();
