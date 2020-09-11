document.addEventListener('theme-switch', function ({ detail: { theme } }) {
    const body = document.querySelector('body');
    body.classList.remove('light', 'dark');
    body.classList.add(theme);
});