import { LitElement, html } from "lit-element";

export class HelloWorld extends LitElement {
    render() {
        return html`<div>Hello World</div>`;
    }
}

$APP.register('hello-world', HelloWorld);