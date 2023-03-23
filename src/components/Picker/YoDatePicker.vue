<script setup>
import { ElConfigProvider, ElDatePicker } from 'element-plus';
import zhTw from 'element-plus/dist/locale/zh-tw.mjs'
import { computed } from 'vue';

const props = defineProps({
  placeholder: {
    type: String,
    default: "請輸入 ...",
  },
  modelValue: {
    type: String,
    default: "",
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
  <el-config-provider :locale="zhTw">
    <el-date-picker
      v-model="vv"
      type="date"
      format="YYYYMMDD"
      value-format="YYYYMMDD"
      :placeholder="placeholder"
    />
  </el-config-provider>
</template>
