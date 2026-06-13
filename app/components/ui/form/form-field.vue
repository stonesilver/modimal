<script lang="ts" setup>
import type { RuleExpression } from "vee-validate";
import { cn } from "~/lib/utils";

interface Props {
  name: string;
  value?: string;
  as?: string;
  rules?: RuleExpression<unknown>;
  label?: string;
  labelClass?: string;
}

const { label, as, labelClass, ...props } = defineProps<Props>();
const slots = defineSlots();
</script>

<template>
  <vee-form-field v-slot="{ ...fieldProps }" :as="as || 'div'" v-bind="props">
    <form-item>
      <form-label v-if="label || slots?.label" :class="cn('text-sm font-medium text-gray-2', labelClass)">
        <slot name="label">
          {{ label }}
        </slot>

        <slot name="label-append" />
      </form-label>

      <form-control>
        <slot v-bind="{ ...fieldProps }" />
      </form-control>
      <form-message />
    </form-item>
  </vee-form-field>
</template>
