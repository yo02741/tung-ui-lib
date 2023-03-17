import TungButton from '../components/Button/TungButton.vue'

export default {
  title: 'Tung/TungButton',
  component: TungButton,
}

const Template = (args) => ({
  components: { TungButton },
  setup() {
    return { args };
  },
  template: '<TungButton v-bind="args" />',
})

export const Default = Template.bind({})