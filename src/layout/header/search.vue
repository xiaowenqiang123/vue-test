<template>
    <div
        class="flex group bg-white rounded-lg border-white duration-500 hover:bg-red-100/40 flex-1 items-center p-1 relative"
    >
        <m-svg-icon name="menu" class="w-1.5 h-1.5 absolute left-2 top-[50%] translate-y-[-50%]" />
        <input
            type="text"
            class="w-full h-[44px] border outline-0 caret-zinc-400 rounded-xl bg-zinc-100 text-zinc-900 tracking-wide text-sm px-3 font-semibold duration-500 group-hover:bg-white focus:border-red-300"
        />
        <Transition name="slide">
            <div
                class="w-full max-h-[368px] rounded-md bg-red-500 overflow-auto text-base duration-500 hover:shadow-2xl border-zinc-200 absolute z-20 left-0 top-[60px] p-2"
            ></div>
        </Transition>
    </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: all 0.5;
}
.slide-enter-from,
.slide-leave-to {
    transform: translateY(50px);
}
</style>
