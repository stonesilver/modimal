<script lang="ts" setup>
import { DUMMY_PRODUCTS } from "~/features/homepage/homepage.constant";
</script>

<template>
    <div class="content-wrapper mt-6 sm:mt-10">
        <h1 class="mobile-h5 sm:h5 text-center text-black">My Wish List</h1>

        <section class="mt-6 sm:mt-12">
            <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                <product-components-item-card
                    v-for="product in DUMMY_PRODUCTS.reverse().slice(0, 2)"
                    :key="product.name"
                    :product="product"
                />
            </ul>
        </section>
    </div>
</template>
