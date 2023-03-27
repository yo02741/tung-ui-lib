import { emit } from 'process';
import { ref } from 'vue';
import YoSelect from '../components/Select/YoSelect.vue'

export default {
  title: 'Selects/Select',
  component: YoSelect,
}

const Template = (args) => ({
  components: { YoSelect },
  setup() {
    const vv = ref(args.modelValue)
    const emitUpdate = (val) => {
      vv.value = val
      emit('update:modelValue', val)
    }
    return { args, vv, emitUpdate };
  },
  template: `<YoSelect v-bind="args" v-model="vv"></YoSelect>`,
})

const defaultArgs = {
  modelValue: '',
  options: [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
    { value: '4', label: 'Option 4' },
    { value: '5', label: 'Option 5' },
    { value: '6', label: 'Option 6' },
    { value: '7', label: 'Option 7' },
    { value: '8', label: 'Option 8' },
  ]
}

export const Default = Template.bind({})
Default.args = defaultArgs

Default.parameters = {
  docs: {
    source: {
      code: `
        options: [
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
          { value: '4', label: 'Option 4' },
          { value: '5', label: 'Option 5' },
          { value: '6', label: 'Option 6' },
          { value: '7', label: 'Option 7' },
          { value: '8', label: 'Option 8' },
        ]
        
        <YoSelect v-model="" :options="options">Default</YoSelect>
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
        options: [
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
          { value: '4', label: 'Option 4' },
          { value: '5', label: 'Option 5' },
          { value: '6', label: 'Option 6' },
          { value: '7', label: 'Option 7' },
          { value: '8', label: 'Option 8' },
        ]
        
        <YoSelect v-model="" :options="options" disabled>Default</YoSelect>
      `,
      language: "html",
    },
  },
};
