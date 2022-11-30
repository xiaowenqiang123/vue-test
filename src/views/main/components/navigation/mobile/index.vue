<template>
    <ul class="flex overflow-x-auto bg-white sticky top-0 left-0 mt-1 relative px-2" ref="ulRef">
        <li
            class="fixed top-0.5 right-[-1px] flex items-center shadow-l-white z-20 bg-white h-3 px-1"
            @click="visible = true"
        >
            <!-- <m-svg-icon name="menu" class="w-2 h-2" /> -->
        </li>
        <li
            ref="slider"
            :style="silderStyle"
            class="absolute bg-zinc-900 h-[20px] rounded-lg duration-200"
        ></li>
        <li
            v-for="(item, index) in category"
            :key="item"
            class="text-sm px-1.5 whitespace-nowrap shrink-0 z-10 last:mr-2"
            :ref="setItemRef"
            :class="{
                'text-zinc-50': currentIndex === index,
            }"
            @click="onItemClick(index)"
        >
            {{ item }}
        </li>
    </ul>
    <m-popup> 123123 </m-popup>
</template>
<script setup lang="ts">
import { ref, onBeforeUpdate, watch, onMounted } from "vue";
import { useScroll } from "@vueuse/core";
// import SVGIcon from "@/lib/m-svg-icon/index.vue";

const props = defineProps<{
    category: string[];
}>();

const visible = ref(false);
const slider = ref<HTMLElement>();
const ulRef = ref<HTMLElement>();
const { x } = useScroll(ulRef);
const silderStyle = ref({
    width: "50px",
    transform: "translateX(0)",
});
const currentIndex = ref(0);
const itemRefs = ref<HTMLElement[]>([]);
const setItemRef = (el: any) => {
    itemRefs.value.push(el);
};
const onItemClick = (index: number) => {
    currentIndex.value = index;
};
// 数据更新后 dom更新前
onBeforeUpdate(() => {
    itemRefs.value = [];
});
watch(currentIndex, (index) => {
    const item = itemRefs.value[index];
    const { width, left } = item.getBoundingClientRect();
    silderStyle.value = {
        width: `${width}px`,
        transform: `translateX(${x.value + left - 19}px)`,
    };
});
</script>
