import { LitElement, html } from "lit-element";

export class MiddleComponent extends LitElement {
    render() {
        return html`<label>Middle Component</label>`;
    }
}

$APP.register('middle-component', MiddleComponent);