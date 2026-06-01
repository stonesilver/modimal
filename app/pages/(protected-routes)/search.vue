<script lang="ts" setup>
import { DUMMY_PRODUCTS } from "~/features/product/product.constants";

const search = ref(useRoute().query.q || "");

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
            <button type="button" class="buttonSM center-item mx-auto mt-3 h-11 w-fit gap-1 rounded-full px-3 text-black lg:hidden">
                <shared-svg-icon name="outline/filter" class="size-4.5" />
                Filter
            </button>

            <ul class="mt-8 grid grid-cols-1 gap-x-6 lg:grid-cols-3">
                <li class="min-h-91.25 max-lg:hidden">
                    <h1 class="h5 text-black">Filters</h1>

                    <product-components-item-filters />
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
