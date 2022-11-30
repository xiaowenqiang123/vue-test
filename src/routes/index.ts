import { isMobileTerminal } from "@/utils/flexible";
import { createRouter, createWebHistory } from "vue-router";
import mobileRoutes from "./modules/mobile-routes";
import pcRoutes from "./modules/pc-routes";
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";
const router = createRouter({
    history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? "/vue" : "/"),
    routes: isMobileTerminal.value ? mobileRoutes : pcRoutes,
});

export default router;
