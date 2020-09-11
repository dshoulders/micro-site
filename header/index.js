import Header from './Header.js';
import render from './render.js';

customElements.define('micro-header', Header);

const init = () => {
    const headerElement = document.querySelector('micro-header');
    const shadowRoot = headerElement !== null ? headerElement.shadowRoot : null;

    if (shadowRoot !== null) {

        const styleElement = document.createElement('link');
        styleElement.setAttribute('rel', 'StyleSheet');
        styleElement.setAttribute('href', '/header/style.css');
        
        const header = render();

        shadowRoot.append(styleElement, header);
    }
}

window.addEventListener('DOMContentLoaded', init);
