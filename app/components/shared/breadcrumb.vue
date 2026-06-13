<script lang="ts" setup>
import { cn } from "~/lib/utils";

const { list } = defineProps<{ list: { label: string; active: boolean }[] }>();
</script>

<template>
    <ul class="flex">
        <li
            v-for="{ label, active } in list"
            :key="label"
            :data-active="active"
            :class="
                cn(
                    'mobile-bodySM sm:bodyMD text-primary center-item data-[active=true]:text-primary-900 relative px-2 sm:px-4',
                    'data-[active=true]:before:bg-primary-900 before:bg-gray-606060 before:absolute before:left-0 before:h-1/2 before:w-px before:rotate-25 first:before:bg-transparent first-of-type:pl-0'
                )
            "
        >
            {{ label }}
        </li>
    </ul>
</template>
