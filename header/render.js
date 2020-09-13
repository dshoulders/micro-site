import navigation from './navigation.js';

const template = `
    <h1>Micro Site</h1>
    <input type="checkbox" id="theme-switcher" />
    <input type="search" id="search" placeholder="search" />
    <nav id="nav-level-1"></nav>
`;

export default () => {
    
    const appRoot = document.createElement('header');
    appRoot.setAttribute('id', 'header');

    appRoot.innerHTML = template;

    // Add navigation
    const mainNav = appRoot.querySelector('#nav-level-1');

    navigation.forEach(navItem => {
        const element = document.createElement('a');
        element.setAttribute('href', navItem.url);
        element.textContent = navItem.label;
        mainNav.appendChild(element);
    });

    // Add 'route' custom event dispatcher
    mainNav.addEventListener('click', (event) => {
        const href = event.target.getAttribute('href');
        document.dispatchEvent(new CustomEvent('route', { detail: { url: href }}));
        event.preventDefault();
    });

    // Add 'theme-switch' custom event dispatcher
    const themeSwitcher = appRoot.querySelector('#theme-switcher');

    themeSwitcher.addEventListener('click', ({ target: { checked } }) => {
        const theme = checked ? 'theme-dark' : 'theme-light';
        document.dispatchEvent(new CustomEvent('theme-switch', { detail: { theme }}));
    });

    // Add search custom event dispatcher
    const search = appRoot.querySelector('#search');

    search.addEventListener('keyup', ({ keyCode, target: { value } }) => {
        if (keyCode === 13) {
            // Enter key pressed

            document.dispatchEvent(new CustomEvent('route', { 
                detail: {
                    url: `search?query=${encodeURIComponent(value)}`,
                },
            }));
        }
    });

    return appRoot;
}