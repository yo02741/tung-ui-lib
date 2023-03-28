<script setup>
import { computed } from 'vue'

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  target: {
    type: Object,
    required: true,
  },
  modelValue: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["update:modelValue"]);

const vv = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit("update:modelValue", val);
  },
});
</script>


<template>
  <label
    class="yo-checkbox-item"
    :class="{ 'is-disabled': disabled }"
    :for="target.key"
  >
    <input
      type="checkbox"
      class="yo-checkbox-input"
      :disabled="disabled"
      :value="target.key"
      :id="target.key"
      v-model="vv"
    />
    <span class="checkmark"></span>
    <span class="yo-checkbox-label">
      {{ target.label }}
    </span>
  </label>
</template>
