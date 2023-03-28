<script setup>
import { ElConfigProvider, ElTimePicker } from 'element-plus';
import zhTw from 'element-plus/dist/locale/zh-tw.mjs'
import { computed, h, ref, shallowRef } from 'vue';

const props = defineProps({
  placeholder: {
    type: String,
    default: "請選擇 ...",
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
      src: new URL('/src/assets/icons/clock.svg', import.meta.url),
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
    <el-time-picker
      v-model="vv"
      format="HH:mm:ss"
      value-format="HH:mm:ss"
      :placeholder="placeholder"
      :prefix-icon="customPrefix"
      :disabled="disabled"
      :teleported="false"
      :clearable="false"
      class="yo-time-picker"
      :class="[`icon-position-${iconPosition}`]"
      popper-class="yo-time-picker"
    />
  </el-config-provider>
</template>
