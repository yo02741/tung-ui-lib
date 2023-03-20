<script setup>
defineProps({
  placeholder: {
    type: String,
    default: "請輸入 ...",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
    default: "",
  },
});

defineEmits(["update:modelValue"]);
</script>

<template>
  <input
    type="password"
    class="yo-input"
    :class="{
      'error': error,
    }"
    :placeholder="placeholder"
    :disabled="disabled"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
