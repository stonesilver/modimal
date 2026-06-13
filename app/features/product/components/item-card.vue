<script lang="ts" setup>
import { cn } from "~/lib/utils";
import type { ProductContext } from "~/types/common";

defineProps<{ product: ProductContext }>();

const liked = ref(false);

const handleLike = (event: PointerEvent) => {
    event.preventDefault();
    liked.value = !liked.value;
};
</script>

<template>
    <li class="">
        <nuxt-link to="/products/236fc0b5-1cb6-4738-bf82-577bef43d93f" class="block">
            <div class="relative h-53.25 w-full md:h-109.5">
                <img :src="product.image" :alt="product.name" class="block size-full object-cover" />

                <button type="button" @click="handleLike">
                    <shared-svg-icon
                        name="outline/heart"
                        :svg-class-name="
                            cn(
                                'absolute top-2.5 right-2.5 sm:top-6 sm:right-6',
                                liked ? '[&>path]:fill-error [&>path]:stroke-error' : undefined
                            )
                        "
                    />
                </button>
            </div>

            <div class="mt-1 text-black">
                <p class="mobile-h4 sm:h6 capitalize">{{ product.name }}</p>

                <div class="mt-2 flex flex-wrap items-center justify-between gap-4">
                    <p class="mobile-bodyMD sm:bodyMD capitalize">{{ product.description }}</p>
                    <p class="mobile-h4 sm:h6 ml-auto capitalize">{{ product.price }}</p>
                </div>

                <ul class="mt-3 flex items-center gap-2 sm:mt-2">
                    <li
                        v-for="backgroundColor in product.colors"
                        :key="backgroundColor"
                        class="size-4 rounded-full sm:size-6"
                        :style="{ backgroundColor }"
                    ></li>
                </ul>
            </div>
        </nuxt-link>
    </li>
</template>
