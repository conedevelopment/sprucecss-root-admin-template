(() => {
  const buttonOpen = document.querySelector('[data-action="sidebar-open"]');
  const buttonClose = document.querySelector('[data-action="sidebar-close"]');
  const sidebar = document.querySelector('[data-item="sidebar"]');
  const body = document.querySelector('[data-item="body"]');

  if (!sidebar || typeof buttonOpen === 'undefined') return;

  function closeNavigation() {
    body.removeAttribute('inert');
    sidebar.classList.remove('l-main__sidebar--open');
    buttonOpen.setAttribute('aria-expanded', 'false');
    buttonOpen.focus();
  }

  function openNavigation() {
    buttonOpen.setAttribute('aria-expanded', 'true');
    body.setAttribute('inert', '');
    sidebar.classList.add('l-main__sidebar--open');
    sidebar.querySelector('a').focus();
  }

  function handleKeyDown(e) {
    if (e.code === 'Escape') {
      closeNavigation();
    }
  }

  buttonOpen.addEventListener('click', () => {
    openNavigation();
  });

  buttonClose.addEventListener('click', () => {
    closeNavigation();
  });

  window.addEventListener('keydown', handleKeyDown);
})();
