<script lang="ts" setup>
const route = useRoute();
const open = defineModel<boolean>({ required: true });
const search = ref(route.query.q || "");

const handleSubmit = async () => {
    await navigateTo(`/search?q=${search.value}`);
};

watch(
    () => route.query.q,
    () => {
        open.value = false;
    }
);
</script>

<template>
    <div
        :data-open="open"
        class="content-wrapper max-h-0 overflow-hidden transition-all duration-500 data-[open=true]:max-h-30 data-[open=true]:py-6 data-[open=true]:lg:py-8"
    >
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
    </div>
</template>
