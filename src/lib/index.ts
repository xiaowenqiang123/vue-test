import { App, defineAsyncComponent, Component } from "vue";

export default {
    install(app: App) {
        const components = import.meta.glob<Component>("./*/index.vue");
        for (const [key, fn] of Object.entries(components)) {
            const name = "m-" + key.replace("./", "").split("/")[0];
            app.component(name, defineAsyncComponent(fn));
        }
    },
};
