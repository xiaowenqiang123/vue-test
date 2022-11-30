import { PC_DEVICE_WIDTH } from "@/constance";
import { useWindowSize } from "@vueuse/core";
import { computed } from "vue";
/* 
    判断设备
*/

export const isMobileTerminal = computed(() => {
    const { width } = useWindowSize();
    return width.value < PC_DEVICE_WIDTH;
});

export const useREM = () => {
    const MAX_FONT_SIZE = 40;
    document.addEventListener("DOMContentLoaded", () => {
        const html = document.querySelector("html");
        let fontSize = window.innerWidth / 10;
        fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize;
        html!.style.fontSize = fontSize + "px";
    });
};
