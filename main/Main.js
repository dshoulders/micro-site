export default class Main extends HTMLElement {

    constructor() {

        super();
        
        // Create a shadow root
        this.attachShadow({ mode: 'open' });
    }
}