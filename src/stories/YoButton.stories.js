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

// ------------------------------

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

