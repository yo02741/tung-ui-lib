import TestInputPassword from './TestInputPassword.vue'

export default {
  title: 'TEST/InputPassword',
  component: TestInputPassword,
}

const Template = (args) => ({
  components: { TestInputPassword },
  setup() {
    return { args };
  },
  template: '<TestInputPassword v-bind="args" />',
})

export const Default = Template.bind({})

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true
}