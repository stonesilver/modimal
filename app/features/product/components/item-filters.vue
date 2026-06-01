<script lang="ts" setup>
import { FILTER_OPTIONS } from "../product.constants";

const open = ref({
    sortBy: false,
    size: false,
    color: false,
    collection: false,
    fabric: false,
});
</script>

<template>
    <ul class="mt-4 space-y-4">
        <li
            v-for="{ label, model, options } in FILTER_OPTIONS"
            :key="model"
            :data-open="open[model]"
            class="border-primary bg-primary border px-4 transition-all duration-500 data-[open=true]:bg-white"
        >
            <button type="button" class="flex w-full items-center justify-between gap-5 py-3 text-left" @click="open[model] = !open[model]">
                <p :data-open="open[model]" class="h6 data-[open=true]:text-primary text-white capitalize">{{ label }}</p>

                <shared-svg-icon :name="open[model] ? 'outline/minus' : 'outline/plus'" class="" />
            </button>

            <div class="grid overflow-hidden transition-all duration-500" :class="open[model] ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'">
                <ul :data-open="open[model]" class="border-primary min-h-0 space-y-3 transition-all duration-500 data-[open=true]:py-4">
                    <li v-for="option in options" :key="option.value" class="flex items-center gap-1">
                        <span class="border-primary block size-4 border bg-white" />
                        <p class="mobile-bodyMD text-black capitalize">{{ option.label }}</p>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</template>
