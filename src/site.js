import { LitElement, html } from "lit-element";

export class Site extends LitElement {
    static get properties() {
        return {
            page: { type: String },
        }
    }

    constructor() {
        super();
        this.page = html`<hello-page />`;
    }

    render() {
        return html`${this.page}`;
    }
}

$APP.register('mwtf-site', Site);