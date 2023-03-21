<script setup>
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  outline: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'normal', /* normal large */
  },
});
</script>

<template>
  <button
    class="yo-button"
    :class="[
      {
        'outline': outline
      },
      size
    ]"
    :disabled="disabled"
  >
    <!-- <img src="../../assets/icons/done.svg" alt="" class="start-icon"> -->
    <slot></slot>
    <!-- <img src="../../assets/icons/done.svg" alt="" class="end-icon"> -->
  </button>
</template>

<style lang="scss" scoped>
.yo-button .start-icon,
.yo-button .end-icon {
  width: 16px;
  height: 16px;
}
</style>