<template>
    <Teleport to="body">
        <Transition name="fade">
            <div
                v-if="isVisible"
                class="w-screen h-screen z-20 bg-zinc-900/80 fixed left-0 top-0"
                @click="isVisible = false"
            ></div>
        </Transition>
        <Transition name="popup-down-up">
            <div v-bind="$attrs" class="w-screen bg-white z-50 fixed bottom-0" v-if="isVisible">
                <slot />
            </div>
        </Transition>
    </Teleport>
</template>
<script setup lang="ts">
import { useScrollLock, useVModel } from "@vueuse/core";
import { watch } from "vue";
const props = defineProps<{
    modelValue: boolean;
}>();
defineEmits<{
    (e: "update:modelValue", value: boolean): void;
}>();

const isLock = useScrollLock(document.querySelector("body"));
const isVisible = useVModel(props);
watch(isVisible, (val) => {
    isLock.value = val;
});
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
.popup-down-up-enter-active,
.popup-down-up-leave-active {
    transition: all 0.5s ease;
}

.popup-down-up-enter-from,
.popup-down-up-leave-to {
    transform: translateY(100%);
}
</style>
