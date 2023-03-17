import TungInputText from '../components/Input/TungInputText.vue'

export default {
  title: 'Tung/TungInputText',
  component: TungInputText,
}

const Template = (args) => ({
  components: { TungInputText },
  setup() {
    return { args };
  },
  template: '<TungInputText v-bind="args" />',
})

export const Default = Template.bind({})

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true
}