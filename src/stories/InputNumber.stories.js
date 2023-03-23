import YoInput from '../components/Input/YoInput.vue'

export default {
  title: 'Inputs/InputNumber',
  component: YoInput,
}

const Template = (args) => ({
  components: { YoInput },
  setup() {
    return { args };
  },
  template: '<YoInput v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
  type: 'number',
}

Default.parameters = {
  docs: {
    source: {
      code: '<YoInput type="number" />',
      language: "html",
    },
  },
};

export const Disabled = Template.bind({})
Disabled.args = {
  type: 'number',
  disabled: true
}

Disabled.parameters = {
  docs: {
    source: {
      code: '<YoInput type="number" disabled />',
      language: "html",
    },
  },
};

export const Error = Template.bind({})
Error.args = {
  type: 'number',
  error: true
}

Error.parameters = {
  docs: {
    source: {
      code: '<YoInput type="number" error />',
      language: "html",
    },
  },
};