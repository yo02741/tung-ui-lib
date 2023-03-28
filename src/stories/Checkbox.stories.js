import { emit } from 'process';
import { ref } from 'vue';
import YoCheckbox from '../components/Input/YoCheckbox.vue'

export default {
  title: 'Inputs/Checkbox',
  component: YoCheckbox,
}

const Template = (args) => ({
  components: { YoCheckbox },
  setup() {
    const vv = ref(args.modelValue)
    const emitUpdate = (val) => {
      vv.value = val
      emit('update:modelValue', val)
    }
    return { args, vv, emitUpdate };
  },
  template: '<YoCheckbox v-bind="args" v-model="vv" />',
})

const defaultArgs = {
  modelValue: [],
  target: { key: 'key1', label: '選項 1' },
}

export const Default = Template.bind({})
Default.args = { ...defaultArgs }

Default.parameters = {
  docs: {
    source: {
      code: `
        modelValue: [],
        target: { key: 'key1', label: '選項 1' }

        <YoCheckbox v-model="modelValue" :target="target" />
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
        modelValue: [],
        target: { key: 'key1', label: '選項 1' }

        <YoCheckbox v-model="modelValue" :target="target" disabled />
      `,
      language: "html",
    },
  },
};

export const CheckedDisabled = Template.bind({})
CheckedDisabled.args = {
  modelValue: ['key1'],
  target: { key: 'key1', label: '選項 1' },
  disabled: true
}

CheckedDisabled.parameters = {
  docs: {
    source: {
      code: `
        modelValue: ['key1'],
        target: { key: 'key1', label: '選項 1' }

        <YoCheckbox v-model="modelValue" :target="target" disabled />
      `,
      language: "html",
    },
  },
};