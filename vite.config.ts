import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { join, resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import qiankun from "vite-plugin-qiankun";
export default defineConfig({
    plugins: [
        vue(),
        qiankun("VueMicroApp", {
            useDevMode: true,
        }),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),

        createSvgIconsPlugin({
            // Specify the icon folder to be cached
            iconDirs: [resolve(process.cwd(), "src/assets")],
            // Specify symbolId format
            symbolId: "icon-[name]",

            /**
             * custom insert position
             * @default: body-last
             */
            // inject?: 'body-last' | 'body-first'

            // /**
            //  * custom dom id
            //  * @default: __svg__icons__dom__
            //  */
            // customDomId: '__svg__icons__dom__',
        }),
    ],
    resolve: {
        alias: {
            "@": join(__dirname, "/src"),
        },
    },
    server: {
        port: 7711,
        origin: "//localhost:7711",
        cors: true,
    },
    // base: __DEV__ ? '/' : '//localhost:7711',
    base: "/",
});
