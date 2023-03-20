import YoInput from '../components/Input/YoInput.vue'

export default {
  title: 'Inputs/InputPassword',
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
  type: 'password',
}

export const Disabled = Template.bind({})
Disabled.args = {
  type: 'password',
  disabled: true
}

export const Error = Template.bind({})
Error.args = {
  type: 'password',
  error: true
}