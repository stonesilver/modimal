<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { useVModel } from "@vueuse/core";
import { cn } from "@/lib/utils";

const props = defineProps<{
    class?: HTMLAttributes["class"];
}>();

const value = defineModel<any>({ required: true });
</script>

<template>
    <input
        v-model="value"
        data-slot="input"
        :class="
            cn(
                'placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground text-gray-606060 dark:bg-input/30 border-gray-606060 bodyXS h-10 w-full min-w-0 rounded-none border bg-transparent px-3 py-1 font-normal! transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
                'focus-visible:border-primary focus-visible:ring-primary/50 focus-visible:ring-3',
                'aria-invalid:ring-error/20 dark:aria-invalid:ring-error/40 aria-invalid:border-error',
                props.class
            )
        "
    />
</template>
