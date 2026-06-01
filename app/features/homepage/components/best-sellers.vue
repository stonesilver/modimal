<script lang="ts" setup>
import { DUMMY_PRODUCTS } from "../homepage.constant";
</script>

<template>
    <section class="content-wrapper mt-5 md:mt-22">
        <div class="flex items-end justify-between">
            <h2 class="mobile-h2 sm:h3 text-black">Best Sellers</h2>

            <nuxt-link to="/" class="buttonSM text-primary-600">View All</nuxt-link>
        </div>

        <ul class="mt-2 grid grid-cols-2 gap-4 sm:mt-6 md:grid-cols-3 lg:gap-6">
            <product-components-item-card v-for="product in DUMMY_PRODUCTS" :key="product.name" :product="product" />
        </ul>
    </section>
</template>
