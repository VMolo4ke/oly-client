<template>
  <ClientOnly>
    <div
      class="ui-input"
      :class="{
        'ui-input_error': errorModel,
      }"
    >
      <input
        v-bind="$attrs"
        v-model="inputModel"
        class="ui-input__input"
        placeholder=" "
        :maxlength="maxLength"
      />
      <label class="ui-input__label" for="tele">
        {{ placeholder }}
      </label>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { watch } from "vue";

defineProps<{
  placeholder: string;
  state?: "default" | "filled" | "value" | "disabled" | "error";
  maxLength?: number;
}>();

const inputModel = defineModel<string>("modelValue", { default: "" });
const errorModel = defineModel<boolean | string>("error", { default: false });

watch(inputModel, () => {
  errorModel.value = false;
});
</script>

<style lang="scss" scoped>
.ui-input {
  position: relative;

  &__input {
    width: 100%;
    padding: 26px 12px 12px;
    border-radius: 10px;
    background: $bg-input;
    color: #fff;
    transition:
      border 0.3s ease,
      color 0.3s ease;

    &:focus {
      outline: none;
    }

    &:focus ~ .ui-input__label,
    &:not(:placeholder-shown) ~ .ui-input__label {
      top: 12px;
      left: 12px;
      transform: translateY(0);
      font-size: 10px;
    }

    .ui-input_error & {
      border: 1px solid #ff0000;
      color: #ff0000;
    }

    &:autofill,
    &:-webkit-autofill {
      color-scheme: dark !important;
      background-clip: initial !important;
      -webkit-text-fill-color: #fff !important;
    }
  }

  &__label {
    position: absolute;
    top: 50%;
    left: 16px;
    color: #ffffff50;
    transform: translateY(-50%);
    transition: all 0.3s ease;
    pointer-events: none;

    .ui-input_error & {
      color: #ff0000;
    }
  }
}
</style>
