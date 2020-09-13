import Main from './Main.js';
import { React, ReactDOM } from 'https://unpkg.com/es-react';
import ViewController from './components/ViewController.js';

customElements.define('micro-main', Main);

const init = () => {
    const mainElement = document.querySelector('micro-main');
    const shadowRoot = mainElement !== null ? mainElement.shadowRoot : null;

    if (shadowRoot !== null) {

        const appRoot = document.createElement('main');
        appRoot.setAttribute('id', 'main');

        const styleElement = document.createElement('link');
        styleElement.setAttribute('rel', 'StyleSheet');
        styleElement.setAttribute('href', '/main/style.css');

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

        shadowRoot.append(styleElement, appRoot);

        ReactDOM.render(
            React.createElement(ViewController, {}, null),
            appRoot
        );
    }
}

window.addEventListener('DOMContentLoaded', init);
