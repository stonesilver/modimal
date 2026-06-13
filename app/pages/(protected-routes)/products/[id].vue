<script lang="ts" setup>
const breadCrumb = [
    { label: "Home", active: false },
    { label: "Top + Blouses", active: false },
    { label: "Wrap Top", active: true },
];
</script>

<template>
    <div class="sm:mt-6">
        <SharedBreadcrumb :list="breadCrumb" class="content-wrapper" />
    </div>
</template>
