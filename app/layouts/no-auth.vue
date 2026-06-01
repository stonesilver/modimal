<script lang="ts" setup></script>

<template>
    <div class="flex min-h-dvh flex-col">
        <homepage-components-header />

        <main class="flex-1">
            <slot />
        </main>

        <homepage-components-footer />
    </div>
</template>
