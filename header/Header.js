export default class Header extends HTMLElement {

    constructor() {

        super();
        
        // Create a shadow root
        this.attachShadow({ mode: 'open' });
    }
}