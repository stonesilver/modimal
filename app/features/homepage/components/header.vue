<script setup lang="ts">
import { NAV_LIST } from "../homepage.constant";

type Menus = "COLLECTION" | "NEW_IN" | "MODIWEEK" | "PLUS_SIZE" | "SUSTAINABILITY";
interface OpenState {
    tab: Menus;
    search: boolean;
    menu: boolean;
    mobileMenu: boolean;
}

const open = reactive<OpenState>({ tab: "" as Menus, menu: false, search: false, mobileMenu: false });

const openMenu = (tab: Menus) => {
    open.menu = tab === open.tab ? !open.menu : true;
    open.tab = tab;
    open.search = false;
};

const toggleSearch = () => {
    open.search = !open.search;
    open.menu = false;
};
</script>

<template>
    <header class="sticky top-0 z-5 flex flex-col bg-white">
        <p class="bg-primary-600 mobile-bodyXS sm:overlineSM px-4 py-1 text-center text-white">Enjoy Free Shipping On All Orders</p>

        <div class="content-wrapper flex flex-1 items-center gap-4 bg-white py-3 lg:py-4">
            <div class="w-fit">
                <div class="flex items-center gap-2 lg:hidden">
                    <button type="button" class="center-item size-6" @click="open.mobileMenu = !open.mobileMenu">
                        <shared-svg-icon :name="open.mobileMenu ? 'outline/close' : 'outline/hamburger'" class="w-4.5 shrink-0" />
                    </button>

                    <button type="button" class="center-item size-6" @click="toggleSearch">
                        <shared-svg-icon name="outline/search" class="size-4.5 shrink-0" />
                    </button>
                </div>

                <nuxt-link to="/" class="shrink-0 max-lg:hidden">
                    <shared-svg-icon name="brand/modimal" />
                </nuxt-link>
            </div>

            <div class="center-item flex-1">
                <ul class="flex items-center justify-center gap-4 max-lg:hidden xl:gap-6">
                    <li v-for="{ key, label } in NAV_LIST" :key="label">
                        <!-- <nuxt-link
                            :to="href"
                            class="bodyXS xl:bodyMD text-gray-404040 hover:text-primary-600 block min-w-26 text-center transition-all duration-200"
                        >
                            {{ label }}
                        </nuxt-link> -->

                        <button
                            class="bodyXS xl:bodyMD text-gray-404040 hover:text-primary-600 block min-w-26 text-center transition-all duration-200"
                            @click="openMenu(key)"
                        >
                            {{ label }}
                        </button>
                    </li>
                </ul>

                <shared-svg-icon name="brand/modimal" class="shrink-0 lg:hidden" />
            </div>

            <div class="flex w-fit items-center gap-2.5 sm:gap-6">
                <button type="button" class="center-item size-6 max-lg:hidden" @click="toggleSearch">
                    <shared-svg-icon name="outline/search" class="size-4.5 shrink-0" />
                </button>

                <button type="button" class="center-item size-6 max-lg:hidden">
                    <shared-svg-icon name="outline/user" class="w-4.5 shrink-0" />
                </button>

                <button type="button" class="center-item size-6">
                    <shared-svg-icon name="outline/heart" class="w-4.5 shrink-0" />
                </button>

                <button type="button" class="center-item size-6">
                    <shared-svg-icon name="outline/shopping-bag" class="w-4.5 shrink-0" />
                </button>
            </div>
        </div>

        <homepage-components-sub-menu :open="open" />

        <homepage-components-mobile-sub-menu v-if="open.mobileMenu" />

        <homepage-components-header-search v-model="open.search" />
    </header>
</template>
