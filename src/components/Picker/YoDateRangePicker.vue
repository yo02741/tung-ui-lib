<script setup>
import { ElConfigProvider, ElDatePicker } from "element-plus";
import zhTw from "element-plus/dist/locale/zh-tw.mjs";
import { computed, h, reactive, ref, shallowRef } from "vue";

const props = defineProps({
  startPlaceholder: {
    type: String,
    default: "開始時間",
  },
  endPlaceholder: {
    type: String,
    default: "結束時間",
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
    type: Array,
    required: true,
  },
  hasTitle: {
    type: Boolean,
    default: false,
  },
  shortcuts: {
    type: Object,
    default: () => ({}),
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

const getShortcuts = computed(() => {
  if (Object.keys(props.shortcuts).length === 0) return [];

  return Object.entries(props.shortcuts).reduce((result, [key, value]) => {
    result.push({
      text: key,
      value: () => {
        const start = new Date();
        const end = new Date();
        end.setTime(start.getTime() - 3600 * 1000 * 24 * value);
        return [end, start];
      },
    });
    return result;
  }, []);
});

const customPrefix = shallowRef({
  render() {
    return h("img", {
      src: new URL("/src/assets/icons/calendar.svg", import.meta.url),
      style: {
        width: "18px",
        height: "18px",
      },
    });
  },
});
</script>

<template>
  <el-config-provider :locale="zhTw">
    <el-date-picker
      v-model="vv"
      type="daterange"
      unlink-panels
      range-separator="-"
      :start-placeholder="startPlaceholder"
      :end-placeholder="endPlaceholder"
      :prefix-icon="customPrefix"
      :disabled="disabled"
      :clearable="false"
      :shortcuts="getShortcuts"
      format="YYYY-MM-DD"
      value-format="YYYYMMDD"
      class="yo-date-range-picker"
      :class="[`icon-position-${iconPosition}`]"
      :popper-class="['yo-date-range-picker-popper', { 'has-title': hasTitle }]"
    />
  </el-config-provider>
</template>
