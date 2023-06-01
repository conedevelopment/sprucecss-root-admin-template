(() => {
  const themeSwitcher = document.querySelector('#theme-switcher');
  const preferredTheme = localStorage.getItem('preferred-theme') ?? 'system';

  themeSwitcher.addEventListener('input', (e) => {
    const theme = e.target.value;
    const systemMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    localStorage.setItem('preferred-theme', theme);
    document.documentElement.setAttribute('data-theme-mode', theme === 'system' ? systemMode : theme);
    themeSwitcher.setAttribute('data-theme-mode', theme);
    themeSwitcher.querySelector(`option[value="${theme}"]`).selected = 'selected';
  });

  themeSwitcher.setAttribute('data-theme-mode', preferredTheme);
  themeSwitcher.querySelector(`option[value="${preferredTheme}"]`).selected = 'selected';
})();
