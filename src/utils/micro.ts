import { registerMicroApps, start } from "qiankun";
const apps = [
    {
        name: "ReactMicroApp",
        entry: "//localhost:3000",
        container: "#frame",
        activeRule: "/react",
    },
    {
        name: "VueMicroApp",
        entry: "//localhost:3001",
        container: "#vue",
        activeRule: "/vue",
    },
];

// 注册子应用函数，包装成高阶函数，方便后期如果有参数注入修改app配置
export const registerApp = () => registerMicroApps(apps);

// 导出 qiankun 的启动函数
export default start;
