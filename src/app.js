const components = {};
let started = false;

export class App {
    register(name, fn) {
        components[name] = fn
    }

    start() {
        if (started) {
            return;
        }

        started = true;

        const keys = Object.keys(components);

        keys.forEach(key => {
            if (!customElements.get(key)) {
                customElements.define(key, components[key]);
            }
        });

        console.log(components);
    }
}

global.$APP = new App();