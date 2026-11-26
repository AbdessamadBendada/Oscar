(() => {
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items = Array.from(document.querySelectorAll('.ip-reveal'));

  if (reducedMotion || !('IntersectionObserver' in window)) {
    items.forEach(item => item.classList.add('is-in'));
  } else {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      });
    }, { threshold: .12, rootMargin: '0px 0px -7% 0px' });
    items.forEach(item => observer.observe(item));
  }

  const truthToggle = document.querySelector('[data-truth-toggle]');
  const truthDemo = document.querySelector('[data-truth-demo]');
  truthToggle?.addEventListener('click', () => {
    const compressed = truthDemo.classList.toggle('is-compressed');
    truthToggle.setAttribute('aria-pressed', String(compressed));
    truthToggle.textContent = compressed ? 'Show current route' : 'Shorten the route';
  });
})();
