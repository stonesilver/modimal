<script lang="ts" setup>
import { FILTER_OPTIONS } from "../product.constants";

const filter = defineModel({
    default: { sortBy: "", size: "", color: "", collection: "", fabric: "" },
    required: true,
});

const openMobile = defineModel("mobile", { default: false, required: true });

const filterInternal = reactive({ ...filter.value });

const open = reactive({
    sortBy: false,
    size: false,
    color: false,
    collection: false,
    fabric: false,
});

const hasAppliedFilters = computed(() => {
    return Object.values(filter.value).some((value) => value !== "");
});

const handleClearFilters = () => {
    Object.keys(filterInternal).forEach((key) => {
        filterInternal[key as keyof typeof filterInternal] = "";
        filter.value[key as keyof typeof filter.value] = "";
    });

    Object.keys(open).forEach((key) => {
        open[key as keyof typeof open] = false;
    });

    filter.value = { sortBy: "", size: "", color: "", collection: "", fabric: "" };
    openMobile.value = false;
};

const handleApplyFilters = () => {
    if (Object.values(filterInternal).some((value) => value !== "")) {
        Object.keys(filterInternal).forEach((key) => {
            filter.value[key as keyof typeof filter.value] = filterInternal[key as keyof typeof filterInternal];
        });
    }
    openMobile.value = false;
};
</script>

<template>
    <div class="flex flex-col">
        <div class="mb-4 grid grid-cols-2 gap-4 max-lg:hidden">
            <Button variant="ghost" :disabled="!hasAppliedFilters" @click="handleClearFilters"> Clear All Filters </Button>
            <Button @click="handleApplyFilters">Apply Filters</Button>
        </div>

        <ul class="flex-1 space-y-4">
            <li
                v-for="{ label, model, options } in FILTER_OPTIONS"
                :key="model"
                :data-open="open[model]"
                class="border-primary bg-primary border px-4 transition-all duration-500 data-[open=true]:bg-white"
            >
                <button
                    type="button"
                    class="flex w-full items-center justify-between gap-5 py-3 text-left"
                    @click="open[model] = !open[model]"
                >
                    <p :data-open="open[model]" class="h6 data-[open=true]:text-primary text-white capitalize">{{ label }}</p>

                    <shared-svg-icon :name="open[model] ? 'outline/minus' : 'outline/plus'" class="" />
                </button>

                <div class="grid overflow-hidden transition-all duration-500" :class="open[model] ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'">
                    <ul :data-open="open[model]" class="border-primary min-h-0 space-y-3 transition-all duration-500 data-[open=true]:py-4">
                        <li
                            role="button"
                            v-for="option in options"
                            :key="option.value"
                            class="flex items-center gap-1 select-none"
                            @click="
                                filterInternal[model] === option.value
                                    ? (filterInternal[model] = '')
                                    : (filterInternal[model] = option.value)
                            "
                        >
                            <span
                                :data-active="filterInternal[model] === option.value"
                                class="border-primary data-[active=true]:bg-primary block size-4 border bg-white"
                            />

                            <p class="mobile-bodyMD text-black capitalize">{{ option.label }}</p>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>

        <div class="mt-4 grid grid-cols-2 gap-4 lg:hidden">
            <Button variant="ghost" :disabled="!hasAppliedFilters" @click="handleClearFilters">Clear All Filters</Button>
            <Button @click="handleApplyFilters">Apply Filters</Button>
        </div>
    </div>
</template>
