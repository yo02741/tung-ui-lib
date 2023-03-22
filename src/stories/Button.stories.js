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

Default.parameters = {
  docs: {
    source: {
      code: '<YoButton>Default</YoButton>',
      language: "html",
    },
  },
};

export const Disabled = Template.bind({})
Disabled.args = {
  slotText: 'Disabled',
  disabled: true
}

Disabled.parameters = {
  docs: {
    source: {
      code: '<YoButton disabled>Disabled</YoButton>',
      language: "html",
    },
  },
};

export const NormalSize = Template.bind({})
NormalSize.args = {
  slotText: 'NormalSize',
  size: 'normal'
}

NormalSize.parameters = {
  docs: {
    source: {
      code: '<YoButton size="normal">NormalSize</YoButton>',
      language: "html",
    },
  },
};

export const LargeSize = Template.bind({})
LargeSize.args = {
  slotText: 'LargeSize',
  size: 'large'
}

LargeSize.parameters = {
  docs: {
    source: {
      code: '<YoButton size="large">LargeSize</YoButton>',
      language: "html",
    },
  },
};
