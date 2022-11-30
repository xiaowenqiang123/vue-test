<template>
    <svg>
        <use :xlink:href="symbolId" :fill="color" :class="fillClass" />
    </svg>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps<{
    name: string;
    color?: string;
    fillClass?: string;
}>();
const symbolId = computed(() => {
    return `#icon-${props.name}`;
});
const test = ref("1");
defineExpose({
    symbolId,
    test,
});
</script>

<style scoped></style>
