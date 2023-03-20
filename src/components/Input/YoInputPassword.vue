<template>
  <input
    type="password"
    class="yo-input"
    :placeholder="placeholder"
    :disabled="disabled"
  />
</template>

<script>
export default {
  name: 'YoInputPassword',

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
