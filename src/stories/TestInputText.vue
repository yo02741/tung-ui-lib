<template>
  <input
    type="text"
    :placeholder="placeholder"
    :disabled="disabled"
    autocomplete="off"
  />
</template>

<script>
import './test-input.css'

export default {
  name: 'TestInputText',

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
