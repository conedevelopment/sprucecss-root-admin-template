(() => {
  document.querySelectorAll('.repeater').forEach((accordion) => {
    const heading = accordion.querySelector('.repeater__heading');
    const btn = accordion.querySelector('[data-action="toggle"]');

    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';

      btn.setAttribute('aria-expanded', !expanded);
      heading.nextElementSibling.hidden = expanded;
    });
  });
})();
