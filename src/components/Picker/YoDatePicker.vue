<script setup>
import { ElConfigProvider, ElDatePicker } from 'element-plus';
import zhTw from 'element-plus/dist/locale/zh-tw.mjs'
import { computed, h, ref, shallowRef } from 'vue';

const props = defineProps({
  placeholder: {
    type: String,
    default: "請輸入 ...",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  iconPosition: {
    type: String,
    default: "start", // start, end
  },
  modelValue: {
    type: String,
    required: true
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

const customPrefix = shallowRef({
  render() {
    return h('img', { 
      src: new URL('/src/assets/icons/calendar.svg', import.meta.url),
      style: {
        width: '18px',
        height: '18px',
      }
    })
  },
})
</script>


<template>
  <el-config-provider :locale="zhTw">
    <el-date-picker
      v-model="vv"
      type="date"
      format="YYYY-MM-DD"
      value-format="YYYYMMDD"
      :placeholder="placeholder"
      :prefix-icon="customPrefix"
      :disabled="disabled"
      :clearable="false"
      :class="[`icon-position-${iconPosition}`]"
    />
  </el-config-provider>
</template>
