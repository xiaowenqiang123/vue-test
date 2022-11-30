import { createApp, App } from "vue";
import "./style.css";
import A from "./App.vue";
import routerConfig from "./routes";
import { useREM } from "./utils/flexible";
import mLibs from "./lib";
import "virtual:svg-icons-register";
import { renderWithQiankun, qiankunWindow, QiankunProps } from "vite-plugin-qiankun/dist/helper";
// const app = createApp(Appvue);
// useREM();
// app.use(router);
// app.use(mLibs);
// app.mount("#app");
let router = null;
let instance: App<Element> | null = null;
// some code
renderWithQiankun({
    bootstrap: () => {
        console.log("%c ", "启动咯");
    },
    mount: (props: QiankunProps) => {
        render(props);
    },
    unmount: (props: QiankunProps) => {
        instance?.unmount();
        instance = null;
        router = null;
    },
    update: (props: QiankunProps) => {},
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    render({});
}
function render(props: any = {}) {
    const { container } = props;
    console.log(props);
    useREM();
    instance = createApp(A);
    instance.use(routerConfig);
    instance.use(mLibs);
    instance.mount(container ? container.querySelector("#app") : document.querySelector("#app"));
}
