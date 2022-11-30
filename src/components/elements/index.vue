<template>
    <Tab :list="list" @image-click="handleSelectedImage" />
</template>
<script setup lang="ts">
import { ref, reactive, watchEffect } from "vue";
import Tab from "./tab.vue";
import { Elements, Item } from "./interface";
const data: Elements[] = [
    {
        title: "身体",
        id: "12",
        element: [
            {
                url: "https://cdn.shopify.com/s/files/1/0343/0275/4948/files/y_89e9d233-be11-4d7e-897d-2262c429fbe9.png?v=1666687087",
                id: "333",
                children: [],
                parentId: "12",
            },
            {
                url: "https://cdn.shopify.com/s/files/1/0343/0275/4948/files/y_89e9d233-be11-4d7e-897d-2262c429fbe9.png?v=1666687087",
                id: "3343",
                children: [],
                parentId: "12",
            },
        ],
    },
];
const emits = defineEmits<{
    (e: "change", data: Item[]): void;
}>();
const selectedElement = reactive<Item[]>([]);
const list = ref<Elements[]>(data);
function handleSelectedImage(image: Item) {
    // 画布上只能存在一个父元素 如果已经存在则替换 不存在则添加
    const index = selectedElement.findIndex((item) => item.parentId === image.parentId);
    if (index !== -1) {
        selectedElement.splice(index, 1, image);
    } else {
        selectedElement.push(image);
    }
    emits("change", selectedElement);
}
</script>

<style scoped></style>
