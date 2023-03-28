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
    default: "normal" /* normal large */,
  },
});
</script>

<template>
  <button
    class="yo-button"
    :class="[{ outline: outline }, size]"
    :disabled="disabled"
  >
    <div class="start-icon-div">
      <slot name="start-icon" />
    </div>
    <slot />
    <div class="end-icon-div">
      <slot name="end-icon" />
    </div>
  </button>
</template>

<style lang="scss">
.yo-button .start-icon-div,
.yo-button .end-icon-div {
  display: flex;
  align-items: center;
  & > * {
    width: 16px;
    height: 16px;
  }
  &:empty {
    display: none;
  }
}
</style>
