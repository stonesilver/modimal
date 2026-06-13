<script lang="ts" setup>
const breadCrumb = [
    { label: "Home", active: false },
    { label: "Shop All", active: true },
];
</script>

<template>
    <div class="sm:mt-6">
        <SharedBreadcrumb :list="breadCrumb" class="content-wrapper" />

        <section class="my-6 h-120 border sm:h-163.75">
            <picture>
                <source
                    media="(min-width: 640px)"
                    srcset="https://res.cloudinary.com/stonesilver/image/upload/v1781355785/Modimal/products-hero_at61zv.webp"
                />

                <img
                    src="https://res.cloudinary.com/stonesilver/image/upload/v1781355784/Modimal/products-hero-mobile_y6atfj.webp"
                    alt="E-commerce summer collection banner"
                    class="h-full w-full object-cover object-center"
                    loading="lazy"
                />
            </picture>
        </section>

        <product-components-product-list-with-search>
            <template #more>
                <Button variant="outline" class="mx-auto mt-6 min-w-46 sm:mt-12">Load More</Button>
            </template>
        </product-components-product-list-with-search>
    </div>
</template>
