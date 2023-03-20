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

export const Disabled = Template.bind({})
Disabled.args = {
  type: 'number',
  disabled: true
}

export const Error = Template.bind({})
Error.args = {
  type: 'number',
  error: true
}