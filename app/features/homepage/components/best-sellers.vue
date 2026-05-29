<script lang="ts" setup>
const DUMMY = [
    {
        image: "https://www.figma.com/file/Wzm7wuyAnWs7Ir8Ej979fc/image/2a1bae812e81613b401c4689b9ced6df9a3b631a",
        name: "tailored stretch",
        description: "turn it up pants",
        price: "$180",
        colors: ["#0C0C0C", "#7DC3EB", "#748C70"],
    },
    {
        image: "https://www.figma.com/file/Wzm7wuyAnWs7Ir8Ej979fc/image/d5e5f24b527834489346f983b00b7694764c987d",
        name: "Technical Silk",
        description: "Make A Splash",
        price: "$120",
        colors: ["#909225", "#19418E", "#0C0C0C"],
    },
    {
        image: "https://www.figma.com/file/Wzm7wuyAnWs7Ir8Ej979fc/image/68608864caedfff6f199090866e9fe1b5997ca26",
        name: "Cool Weave",
        description: "Anywhere Dress",
        price: "$210",
        colors: ["#D0A5EA", "#909225", "#748C70"],
    },
];
</script>

<template>
    <section class="content-wrapper mt-5 md:mt-22">
        <div class="flex items-end justify-between">
            <h2 class="mobile-h2 sm:h3 text-black">Best Sellers</h2>

            <nuxt-link to="/" class="buttonSM text-primary-600">View All</nuxt-link>
        </div>

        <ul class="mt-2 grid grid-cols-2 gap-4 sm:mt-6 md:grid-cols-3 lg:gap-6">
            <li v-for="{ image, name, description, price, colors } in DUMMY" :key="name" class="">
                <div class="relative h-53.25 w-full md:h-109.5">
                    <img :src="image" :alt="name" class="block size-full object-cover" />

                    <shared-svg-icon name="outline/heart" class="absolute top-2.5 right-2.5 sm:top-6 sm:right-6" />
                </div>

                <div class="mt-1 text-black">
                    <p class="mobile-h4 sm:h6 capitalize">{{ name }}</p>

                    <div class="mt-2 flex flex-wrap items-center justify-between gap-4">
                        <p class="mobile-bodyMD sm:bodyMD capitalize">{{ description }}</p>
                        <p class="mobile-h4 sm:h6 ml-auto capitalize">{{ price }}</p>
                    </div>

                    <ul class="mt-3 flex items-center gap-2 sm:mt-2">
                        <li
                            v-for="backgroundColor in colors"
                            :key="backgroundColor"
                            class="size-4 rounded-full sm:size-6"
                            :style="{ backgroundColor }"
                        ></li>
                    </ul>
                </div>
            </li>
        </ul>
    </section>
</template>
