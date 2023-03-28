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
  <textarea 
    class="yo-textarea"
    :class="{
      'error': error,
    }"
    :placeholder="placeholder"
    :disabled="disabled"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  ></textarea>
</template>
