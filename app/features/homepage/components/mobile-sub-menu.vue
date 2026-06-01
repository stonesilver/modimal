<script lang="ts" setup>
import { SUB_MENUS } from "../homepage.constant";

const active = ref("");

const LIST = Object.values(SUB_MENUS).map((item) => item.links.map((itm) => itm.links.map((i) => i)).flat());

const handleToggle = (name: string) => {
    active.value = active.value === name ? "" : name;
};
</script>

<template>
    <div class="content-wrapper flex h-[calc(100dvh-86px)] flex-col bg-white lg:hidden">
        <ul class="flex-1 space-y-8 overflow-y-auto pt-8">
            <li v-for="({ name }, _, index) in SUB_MENUS" :key="name" class="border-b border-b-black">
                <button type="button" class="flex w-full items-center justify-between text-left" @click="handleToggle(name)">
                    <p class="mobile-bodyLG text-black capitalize">{{ name }}</p>

                    <div type="button" class="center-item size-6">
                        <shared-svg-icon name="outline/chevron-down" />
                    </div>
                </button>

                <div
                    class="grid overflow-hidden transition-[grid-template-rows] duration-500"
                    :class="active === name ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
                >
                    <ul :data-active="active === name" class="min-h-0 space-y-3 data-[active=true]:py-3">
                        <li v-for="{ label } in LIST[index]">
                            <p class="mobile-bodyLG text-gray-404040">{{ label }}</p>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>

        <div class="border-primary-600 grid shrink-0 grid-cols-2 items-center gap-4 border-t py-4">
            <Button variant="outline">
                <shared-svg-icon name="outline/user" />
                Log In
            </Button>

            <Button variant="outline">Create Account</Button>
        </div>
    </div>
</template>
