import YoTextarea from '../components/Input/YoTextarea.vue'

export default {
  title: 'Inputs/Textarea',
  component: YoTextarea,
}

const Template = (args) => ({
  components: { YoTextarea },
  setup() {
    return { args };
  },
  template: '<YoTextarea v-bind="args" />',
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: '<YoTextarea />',
      language: "html",
    },
  },
};

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true
}

Disabled.parameters = {
  docs: {
    source: {
      code: '<YoTextarea disabled />',
      language: "html",
    },
  },
};

export const Error = Template.bind({})
Error.args = {
  error: true
}

Error.parameters = {
  docs: {
    source: {
      code: '<YoTextarea error />',
      language: "html",
    },
  },
};