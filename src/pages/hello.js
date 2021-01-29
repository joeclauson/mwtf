import { LitElement, html } from "lit-element";

export class Hello extends LitElement {
    render() {
        return html`<left-component></left-component>|<middle-component></middle-component>|<right-component></right-component>`;
    }
}

$APP.register('hello-page', Hello);