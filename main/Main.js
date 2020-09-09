export default class Main extends HTMLElement {

    constructor() {

        super();

        // Create a shadow root
        this.attachShadow({ mode: 'open' }); // sets and returns 'this.shadowRoot'

        window.addEventListener('popstate', function (event) {
            self.render();
        });
    }

    render() {

        const path = document.location.pathname

        this.root.querySelector('#main').textContent = path;
    }
}