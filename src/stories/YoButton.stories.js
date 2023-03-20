import YoButton from '../components/Button/YoButton.vue'

export default {
  title: 'Yo/Button',
  component: YoButton,
}

const Template = (args) => ({
  components: { YoButton },
  setup() {
    return { args };
  },
  template: '<YoButton v-bind="args">{{ args.default }}</YoButton>',
})

export const Default = Template.bind({})
Default.args = {
  default: 'Button',
}