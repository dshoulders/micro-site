document.addEventListener('theme-switch', function ({ detail: { theme } }) {
    const body = document.querySelector('body');
    body.classList.remove('theme-light', 'theme-dark');
    body.classList.add(theme);
});

// Basic route handling
// Dispatches 'location' custom event
// which is triggered by a 'route' custom event
// or a popstate event
const onRoute = (event) => {
    if (event.type === 'route') {
        history.pushState(null, '', event.detail.url);
    }
    document.dispatchEvent(new CustomEvent('location', { 
        detail: {
            url: event.detail.url 
        }
    }));
};

document.addEventListener('route', onRoute);
document.addEventListener('popstate', onRoute);