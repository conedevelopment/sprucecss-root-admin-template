(() => {
  document.addEventListener('click', (e) => {
    if (!e.target.matches('[data-action="block-navigation-toggle"]')) {
      return;
    }

    const state = e.target.getAttribute('aria-expanded') === 'true';
    const nav = e.target.closest('[data-item="navigation-block"]').querySelector('nav');

    e.target.setAttribute('aria-expanded', !state);
    nav.setAttribute('data-state', !state ? 'open' : 'closed');
  });
})();
