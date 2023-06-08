(() => {
  document.addEventListener('click', (e) => {
    if (!e.target.matches('.sidebar-block__toggle')) {
      return;
    }

    const state = e.target.getAttribute('aria-expanded') === 'true';
    const nav = e.target.closest('.sidebar-block').querySelector('nav');

    e.target.setAttribute('aria-expanded', !state);
    nav.setAttribute('data-state', !state ? 'open' : 'closed');
  });
})();
