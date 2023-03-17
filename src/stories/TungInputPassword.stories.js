import TungInputPassword from './TungInputPassword.vue'

export default {
  title: 'Tung/InputPassword',
  component: TungInputPassword,
}

const Template = (args) => ({
  components: { TungInputPassword },
  setup() {
    return { args };
  },
  template: '<TungInputPassword v-bind="args" />',
})

export const Default = Template.bind({})

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true
}