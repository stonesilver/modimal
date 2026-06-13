<script lang="ts" setup></script>

<template>
    <div class="flex min-h-dvh flex-col">
        <homepage-components-header />

        <main class="content-wrapper mt-6 grid flex-1 grid-cols-1 gap-6 lg:grid-cols-[600px_1fr]">
            <div class="max-lg:max-h-54.5 lg:min-h-209.25">
                <img
                    src="https://res.cloudinary.com/stonesilver/image/upload/f_auto,q_auto,w_auto/v1781280868/Modimal/auth-sidebar_fuo7io.webp"
                    alt="modimal sign up"
                    class="block h-full w-full object-cover object-center"
                />
            </div>

            <div class="flex flex-1 lg:px-4">
                <slot />
            </div>
        </main>

        <homepage-components-footer />
    </div>
</template>
