(() => {
  let id = null;
  let btn = null;
  let state = null;
  let nav = null;

  document.addEventListener('click', (e) => {
    if(
      !e.target.matches('[data-action="context"]') &&
      !e.target.closest('[data-context-id]') &&
      document.querySelectorAll('[data-context-id][data-state="open"]').length > 0
    ) {
      closeContext();
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.matches('[data-action="context"]')) {
      return;
    }

    id = e.target.getAttribute('data-context-target');
    btn = document.querySelector(`[data-context-target="${id}"]`);
    state = e.target.getAttribute('aria-expanded') === 'true';

    nav = document.querySelector(`[data-context-id="${id}"]`);

    e.target.setAttribute('aria-expanded', !state);
    nav.setAttribute('data-state', !state ? 'open' : 'closed');
  });

  function closeContext() {
    if (!nav) return;

    btn.setAttribute('aria-expanded', 'false');
    btn.focus();
    nav.setAttribute('data-state', 'closed');
  }

  function handleKeyDown(e) {
    if (e.code === 'Escape') {
      closeContext();
    }
  }

  window.addEventListener('keydown', handleKeyDown);
})();
