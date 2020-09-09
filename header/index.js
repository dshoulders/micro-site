class Header extends HTMLElement {

    navItems = [
        {
            label: 'Home',
            url: '/',
        },
        {
            label: 'Shop',
            url: '/shop'
        }
    ];

    style = `
        #header {
            background: #ccc;
        }
    `;

    template = `
        <div id="header">
            <header>
                <h1>Micro Site</h1>
            </header>
            <nav id="nav-level-1"></nav>
        </div>
    `;

    constructor() {

        super();

        // Create a shadow root
        this.attachShadow({ mode: 'open' }); // sets and returns 'this.shadowRoot'

        const style = document.createElement('style');
        style.textContent = this.style;

        const template = document.createElement('template');
        template.innerHTML = this.template;

        const root = document.createDocumentFragment();
        root.appendChild(template.content);

        this.render(root);

        // attach the created elements to the shadow DOM
        this.shadowRoot.append(style, root);
    }

    render(root) {

        const mainNav = root.querySelector('#nav-level-1');

        this.navItems.forEach(navItem => {
            const element = document.createElement('a');
            element.setAttribute('href', navItem.url);
            element.textContent = navItem.label;
            mainNav.appendChild(element);
        });

        mainNav.addEventListener('click', (event) => {
            const href = event.target.getAttribute('href');
            history.pushState(null, '', href);
            document.dispatchEvent(new CustomEvent('location', { detail: { path: href }}));
            event.preventDefault();
        });
    }
}

customElements.define('micro-header', Header);