import TestInputText from './TestInputText.vue'

export default {
  title: 'TEST/InputText',
  component: TestInputText,
}

const Template = (args) => ({
  components: { TestInputText },
  setup() {
    return { args };
  },
  template: '<TestInputText v-bind="args" />',
})

export const Default = Template.bind({})

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true
}