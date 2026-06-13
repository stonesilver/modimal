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

        <product-components-product-list-with-search />
    </div>
</template>
