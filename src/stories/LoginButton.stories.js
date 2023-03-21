import YoLoginButton from '../components/Button/YoLoginButton.vue'

export default {
  title: 'Buttons/LoginButton',
  component: YoLoginButton,
}

const Template = (args) => ({
  components: { YoLoginButton },
  setup() {
    return { args };
  },
  template: '<YoLoginButton v-bind="args" />',
})

export const Default = Template.bind({})
