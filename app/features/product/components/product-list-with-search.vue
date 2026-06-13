<script lang="ts" setup>
import { DUMMY_PRODUCTS } from "../product.constants";

const filter = reactive({ sortBy: "", size: "", color: "", collection: "", fabric: "" });
const showMobileFilters = ref(false);
</script>

<template>
    <section class="content-wrapper">
        <button
            type="button"
            class="buttonSM center-item mx-auto mt-3 h-11 w-fit gap-1 rounded-full px-3 text-black lg:hidden"
            @click="showMobileFilters = !showMobileFilters"
        >
            <shared-svg-icon name="outline/filter" class="size-4.5" />
            Filter
        </button>

        <section v-if="showMobileFilters" class="fixed inset-0 z-50 flex h-dvh w-full flex-col overflow-y-auto bg-white p-5 lg:hidden">
            <div class="flex items-center justify-between">
                <h1 class="h5 leading-none! text-black">Filters</h1>

                <button type="button" class="center-item size-6" @click="showMobileFilters = false">
                    <shared-svg-icon name="outline/close" />
                </button>
            </div>

            <product-components-item-filters v-model="filter" v-model:mobile="showMobileFilters" class="mt-4 flex-1" />
        </section>

        <div class="mt-4 grid grid-cols-1 gap-x-6 lg:mt-8 lg:grid-cols-3">
            <div class="min-h-91.25 max-lg:hidden">
                <h1 class="h5 leading-none! text-black">Filters</h1>

                <product-components-item-filters v-model="filter" v-model:mobile="showMobileFilters" class="mt-4" />
            </div>

            <div class="lg:col-span-2">
                <ul class="grid grid-cols-2 gap-x-4 gap-y-4 lg:gap-x-6 lg:gap-y-10">
                    <product-components-item-card v-for="product in DUMMY_PRODUCTS" :key="product.name" :product="product" />
                </ul>

                <slot name="more" />
            </div>
        </div>
    </section>
</template>
