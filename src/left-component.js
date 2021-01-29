import { LitElement, html } from "lit-element";

export class LeftComponent extends LitElement {
    render() {
        return html`<label>Left Component</label>`;
    }
}

$APP.register('left-component', LeftComponent);