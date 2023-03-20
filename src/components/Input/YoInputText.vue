<template>
  <input
    type="text"
    class="yo-input"
    :placeholder="placeholder"
    :disabled="disabled"
    autocomplete="off"
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
  }
}
</script>
