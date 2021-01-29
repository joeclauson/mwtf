import { LitElement, html } from "lit-element";

export class RightComponent extends LitElement {
    render() {
        return html`<label>Right Component</label>`;
    }
}

$APP.register('right-component', RightComponent);