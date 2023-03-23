import YoInput from '../components/Input/YoInput.vue'

export default {
  title: 'Inputs/InputText',
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
  type: 'text',
}

Default.parameters = {
  docs: {
    source: {
      code: '<YoInput type="text" />',
      language: "html",
    },
  },
};

export const Disabled = Template.bind({})
Disabled.args = {
  type: 'text',
  disabled: true
}

Disabled.parameters = {
  docs: {
    source: {
      code: '<YoInput type="text" disabled />',
      language: "html",
    },
  },
};

export const Error = Template.bind({})
Error.args = {
  type: 'text',
  error: true
}

Error.parameters = {
  docs: {
    source: {
      code: '<YoInput type="text" error />',
      language: "html",
    },
  },
};