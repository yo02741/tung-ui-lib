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
    <slot></slot>
  </button>
</template>
