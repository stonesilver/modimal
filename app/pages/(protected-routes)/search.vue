<script lang="ts" setup>
import { DUMMY_PRODUCTS } from "~/features/product/product.constants";

const search = ref(useRoute().query.q || "");
const filter = reactive({ sortBy: "", size: "", color: "", collection: "", fabric: "" });
const showMobileFilters = ref(false);

const handleSubmit = async () => {
    await navigateTo(`/search?q=${search.value}`);
};
</script>

<template>
    <div class="content-wrapper mt-6">
        <form class="relative flex h-10 items-center sm:h-14" @submit.prevent="handleSubmit">
            <shared-svg-icon name="outline/magnify" class="text-gray-adadad absolute left-0 size-4 max-sm:-translate-y-1 sm:size-6" />

            <input
                v-model="search"
                type="text"
                required
                minlength="3"
                placeholder="Search"
                class="border-b-gray-adadad text-gray-adadad focus-within:border-b-primary h-full w-full border-b pl-9 outline-none"
            />
        </form>

        <p class="bodyLG mt-8 text-center text-black max-lg:hidden">{{ DUMMY_PRODUCTS.length }} items</p>

        <section class="">
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

            <ul class="mt-4 grid grid-cols-1 gap-x-6 lg:mt-8 lg:grid-cols-3">
                <li class="min-h-91.25 max-lg:hidden">
                    <h1 class="h5 leading-none! text-black">Filters</h1>

                    <product-components-item-filters v-model="filter" v-model:mobile="showMobileFilters" class="mt-4" />
                </li>

                <li class="lg:col-span-2">
                    <ul class="grid grid-cols-2 gap-x-4 gap-y-4 lg:gap-x-6 lg:gap-y-10">
                        <product-components-item-card v-for="product in DUMMY_PRODUCTS" :key="product.name" :product="product" />
                    </ul>
                </li>
            </ul>
        </section>
    </div>
</template>
