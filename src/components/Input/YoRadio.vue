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
    type: String,
    required: true,
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

const checkSelected = (payload) => {
  if (payload === props.modelValue) {
    emit("update:modelValue", "");
    return
  }
};
</script>


<template>
  <label
    class="yo-radio-item"
    :class="{ 'is-disabled': disabled }"
    :for="target.key"
  >
    <input
      type="radio"
      class="yo-radio-input"
      :disabled="disabled"
      :value="target.key"
      :id="target.key"
      v-model="vv"
      @click="checkSelected(target.key)"
    />
    <span class="radiomark"></span>
    <span class="yo-radio-label">
      {{ target.label }}
    </span>
  </label>
</template>
