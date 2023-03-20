<script setup>
defineProps({
  type: {
    type: String,
    default: "text", // text, password, number
  },
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
    :type="type"
    class="yo-input"
    :class="{
      'error': error,
    }"
    :placeholder="placeholder"
    :disabled="disabled"
    autocomplete="off"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
