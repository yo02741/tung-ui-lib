<script setup>
import { ElSelect, ElOption } from "element-plus";
import { computed, ref } from "vue";

const props = defineProps({
  placeholder: {
    type: String,
    default: "請選擇 ...",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Array,
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
</script>

<template>
  <el-select 
    v-model="vv"
    :placeholder="placeholder"
    :teleported="false"
    :disabled="disabled"
    class="yo-select"
    popper-class="yo-select-options"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>
