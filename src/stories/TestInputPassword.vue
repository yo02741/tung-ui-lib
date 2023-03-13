<template>
  <input
    type="password"
    :placeholder="placeholder"
    :disabled="disabled"
  />
</template>

<script>
import './test-input.css'

export default {
  name: 'TestInputPassword',

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
