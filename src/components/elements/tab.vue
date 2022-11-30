<template>
    <el-collapse v-model="activeName">
        <el-collapse-item :title="item.title" :name="item.id" v-for="item of list" :key="item.id">
            <el-avatar
                shape="square"
                size="large"
                :src="image.url"
                v-for="image of item.element"
                :key="image.id"
                @click="handleImageClick(image)"
            />
        </el-collapse-item>
    </el-collapse>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { Elements, Item } from "./interface";
defineProps<{
    list: Elements[];
}>();
const emits = defineEmits<{
    (e: "image-click", value: Item): void;
}>();
const activeName = ref();

function handleImageClick(image: Item) {
    emits("image-click", image);
}
</script>
<style>
.image {
    height: 50px;
    width: 50px;
}
</style>
