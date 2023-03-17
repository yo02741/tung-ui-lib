<template>
  <input
    type="text"
    class="tung-input"
    :placeholder="placeholder"
    :disabled="disabled"
    autocomplete="off"
  />
</template>

<script>
export default {
  name: 'TungInputText',

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
