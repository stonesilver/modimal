<script lang="ts" setup>
import type { InputHTMLAttributes } from "vue";
import { cn } from "~/lib/utils";

interface Props {
    placeholder?: string;
    inputClass?: string;
    number?: boolean;
    maxlength?: number;
    autocomplete?: InputHTMLAttributes["autocomplete"];
}

const props = defineProps<Props>();
const value = defineModel<string | undefined>({ required: true });
const showPassword = ref(false);
</script>

<template>
    <div class="relative">
        <Input v-model="value" :type="showPassword ? 'text' : 'password'" :class="cn('pr-12', props.inputClass)" v-bind="props" />

        <button type="button" class="absolute top-1/2 right-4 -translate-y-1/2 leading-none!" @click="showPassword = !showPassword">
            <SharedSvgIcon :name="showPassword ? 'outline/eye-close' : 'outline/eye-open'" svg-class-name="h-5 w-4" />
        </button>
    </div>
</template>
