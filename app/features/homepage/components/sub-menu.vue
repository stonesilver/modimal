<script lang="ts" setup>
import { SUB_MENUS } from "../homepage.constant";

type Menus = "COLLECTION" | "NEW_IN" | "MODIWEEK" | "PLUS_SIZE" | "SUSTAINABILITY";

defineProps<{ open: { tab: Menus; menu: boolean; search: boolean } }>();
</script>

<template>
    <div
        :data-open="open.menu"
        class="flex max-h-0 w-full flex-col overflow-hidden bg-white transition-all duration-500 data-[open=true]:max-h-[90dvh] max-lg:hidden"
    >
        <ul class="content-wrapper grid flex-1 grid-cols-2 pt-4 pb-8!">
            <li class="">
                <ul class="grid gap-3" :style="{ gridTemplateColumns: `repeat(${SUB_MENUS?.[open.tab]?.links.length}, minmax(0, 1fr))` }">
                    <li v-for="{ header, links } in SUB_MENUS?.[open.tab]?.links" :key="header" class="">
                        <p class="bodyLG text-black capitalize">{{ header }}</p>

                        <ul :key="open.tab" class="mt-3 space-y-2">
                            <li
                                v-for="{ label } in links"
                                :key="label"
                                class="bodyMD animate-in fade-in-20 text-gray-404040 cursor-pointer capitalize duration-500"
                            >
                                {{ label }}
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>

            <li class="grid gap-4" :style="{ gridTemplateColumns: `repeat(${SUB_MENUS?.[open.tab]?.imageCard.length}, minmax(0, 1fr))` }">
                <div
                    v-for="{ label, image } in SUB_MENUS?.[open.tab]?.imageCard"
                    :key="label"
                    class="animate-in slide-in-from-bottom-10 even:slide-in-from-top-10 duration-500"
                >
                    <img :src="image" :alt="label" class="block min-h-105 w-full object-cover" />

                    <p v-if="label" class="bodyMD mt-1 text-black capitalize">{{ label }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
