import { emit } from 'process';
import { ref } from 'vue';
import YoRadio from '../components/Input/YoRadio.vue'

export default {
  title: 'Inputs/Radio',
  component: YoRadio,
}

const Template = (args) => ({
  components: { YoRadio },
  setup() {
    const vv = ref(args.modelValue)
    const emitUpdate = (val) => {
      vv.value = val
      emit('update:modelValue', val)
    }
    return { args, vv, emitUpdate };
  },
  template: '<YoRadio v-bind="args" v-model="vv" />',
})

const defaultArgs = {
  modelValue: "",
  target: { key: 'key1', label: '選項 1' },
}

export const Default = Template.bind({})
Default.args = { ...defaultArgs }

Default.parameters = {
  docs: {
    source: {
      code: `
        modelValue: "",
        target: { key: 'key1', label: '選項 1' }

        <YoRadio v-model="modelValue" :target="target" />
      `,
      language: "html",
    },
  },
};

export const Disabled = Template.bind({})
Disabled.args = {
  ...defaultArgs,
  disabled: true
}

Disabled.parameters = {
  docs: {
    source: {
      code: `
        modelValue: "",
        target: { key: 'key1', label: '選項 1' }

        <YoRadio v-model="modelValue" :target="target" disabled />
      `,
      language: "html",
    },
  },
};

export const SelectdDisabled = Template.bind({})
SelectdDisabled.args = {
  modelValue: "key1",
  target: { key: 'key1', label: '選項 1' },
  disabled: true
}

SelectdDisabled.parameters = {
  docs: {
    source: {
      code: `
        modelValue: 'key1',
        target: { key: 'key1', label: '選項 1' }

        <YoRadio v-model="modelValue" :target="target" disabled />
      `,
      language: "html",
    },
  },
};