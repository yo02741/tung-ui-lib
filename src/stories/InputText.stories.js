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

export const Disabled = Template.bind({})
Disabled.args = {
  type: 'text',
  disabled: true
}

export const Error = Template.bind({})
Error.args = {
  type: 'text',
  error: true
}