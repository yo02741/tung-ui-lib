import YoButton from '../components/Button/YoButton.vue'

export default {
  title: 'Buttons/Button',
  component: YoButton,
}

const Template = (args) => ({
  components: { YoButton },
  setup() {
    return { args };
  },
  template: `<YoButton v-bind="args">{{ args.slotText || 'Button' }}</YoButton>`,
})

export const Default = Template.bind({})
Default.args = {
  slotText: 'Default',
}

export const DefaultDisabled = Template.bind({})
DefaultDisabled.args = {
  slotText: 'Disabled',
  disabled: true
}

export const DefaultNormalSize = Template.bind({})
DefaultNormalSize.args = {
  size: 'normal'
}

export const DefaultLargeSize = Template.bind({})
DefaultLargeSize.args = {
  size: 'large'
}
