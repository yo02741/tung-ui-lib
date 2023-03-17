<template>
  <input
    type="password"
    class="tung-input"
    :placeholder="placeholder"
    :disabled="disabled"
  />
</template>

<script>
export default {
  name: 'TungInputPassword',

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
