import YoInputText from '../components/Input/YoInputText.vue'

export default {
  title: 'Yo/InputText',
  component: YoInputText,
}

const Template = (args) => ({
  components: { YoInputText },
  setup() {
    return { args };
  },
  template: '<YoInputText v-bind="args" />',
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