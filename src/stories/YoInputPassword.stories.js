import YoInputPassword from '../components/Input/YoInputPassword.vue'

export default {
  title: 'Yo/InputPassword',
  component: YoInputPassword,
}

const Template = (args) => ({
  components: { YoInputPassword },
  setup() {
    return { args };
  },
  template: '<YoInputPassword v-bind="args" />',
})

export const Default = Template.bind({})

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true
}

export const Error = Template.bind({})
Error.args = {
  error: true
}