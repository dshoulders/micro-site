import Main from './Main.js';
import { React, ReactDOM } from 'https://unpkg.com/es-react';
import ViewController from './components/ViewController.js';

// TODO: 
// listen for route and popstate
// on route pushstate
// then dispatch location


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

        shadowRoot.append(styleElement, appRoot);

        ReactDOM.render(
            React.createElement(ViewController, {}, null),
            appRoot
        );
    }
}

window.addEventListener('DOMContentLoaded', init);
