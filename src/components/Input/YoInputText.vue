<template>
  <input
    type="text"
    class="yo-input"
    :placeholder="placeholder"
    :disabled="disabled"
    autocomplete="off"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'YoInputText',

  props: {
    placeholder: {
      type: String,
      default: '請輸入 ...',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: String,
      default: '',
    },
  },

  emits: ['update:modelValue']
}
</script>
