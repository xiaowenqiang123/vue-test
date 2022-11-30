<template>
    <MobileNavigation v-if="isMobileTerminal" :category="category" />
</template>
<script setup lang="ts">
import { isMobileTerminal } from "@/utils/flexible";
import { ref } from "vue";
import MobileNavigation from "./mobile/index.vue";
import PcNavigation from "./pc/index.vue";
const category = ref([
    "首页",
    "拉拉",
    "拉拉",
    "拉拉",
    "拉拉",
    "拉拉",
    "拉拉",
    "拉拉",
    "拉拉",
    "拉拉",
    "拉拉",
    "拉拉",
]);
</script>

<style scoped></style>
