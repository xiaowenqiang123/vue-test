import { RouteRecordRaw } from "vue-router";
const routes: readonly RouteRecordRaw[] = [
    {
        path: "/",
        name: "main",
        component: () => import("@/layout/index.vue"),
    },
];

export default routes;
