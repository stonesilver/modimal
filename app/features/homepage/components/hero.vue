<script lang="ts" setup>
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
</script>

<template>
    <section
        class="flex h-[80dvh] flex-col bg-[url('https://www.figma.com/file/Wzm7wuyAnWs7Ir8Ej979fc/image/5acf40a14ec616f602d9f91b003061a5deef40d0')] bg-cover bg-position-[left_-330px_center] bg-no-repeat md:bg-center"
    >
        <div class="content-wrapper flex flex-1 flex-col justify-end pb-6 md:pb-25.75">
            <h1 class="font-gill-sans-condensed text-xl italic sm:text-[2.25rem]">
                <span class="block">Elegance in simplicity,</span>
                <span class="block">Earth's harmony</span>
            </h1>

            <nuxt-link to="/" :class="cn(buttonVariants({ variant: 'white', size: 'lg' }), 'mt-8 w-fit min-w-46 sm:mt-6.75')">
                New In
            </nuxt-link>
        </div>
    </section>
</template>
