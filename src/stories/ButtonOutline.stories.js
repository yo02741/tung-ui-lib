import YoButton from '../components/Button/YoButton.vue'

export default {
  title: 'Buttons/OutlineButton',
  component: YoButton,
}

const Template = (args) => ({
  components: { YoButton },
  setup() {
    return { args };
  },
  template: `<YoButton v-bind="args">{{ args.slotText || 'Button' }}</YoButton>`,
})

export const Outline = Template.bind({})
Outline.args = {
  slotText: 'Outline',
  outline: true
}

export const OutlineDisabled = Template.bind({})
OutlineDisabled.args = {
  slotText: 'OutlineDisabled',
  disabled: true,
  outline: true
}

export const OutlineNormalSize = Template.bind({})
OutlineNormalSize.args = {
  outline: true,
  size: 'normal'
}

export const OutlineLargeSize = Template.bind({})
OutlineLargeSize.args = {
  outline: true,
  size: 'large'
}

