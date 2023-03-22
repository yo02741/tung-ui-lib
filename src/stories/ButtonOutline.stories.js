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

Outline.parameters = {
  docs: {
    source: {
      code: '<YoButton outline>Default</YoButton>',
      language: "html",
    },
  },
};

export const Disabled = Template.bind({})
Disabled.args = {
  slotText: 'Disabled',
  disabled: true,
  outline: true
}

Disabled.parameters = {
  docs: {
    source: {
      code: '<YoButton disabled outline>Default</YoButton>',
      language: "html",
    },
  },
};

export const NormalSize = Template.bind({})
NormalSize.args = {
  slotText: 'NormalSize',
  outline: true,
  size: 'normal'
}

NormalSize.parameters = {
  docs: {
    source: {
      code: '<YoButton outline size="normal">NormalSize</YoButton>',
      language: "html",
    },
  },
};

export const LargeSize = Template.bind({})
LargeSize.args = {
  slotText: 'LargeSize',
  outline: true,
  size: 'large'
}

LargeSize.parameters = {
  docs: {
    source: {
      code: '<YoButton outline size="large">LargeSize</YoButton>',
      language: "html",
    },
  },
};
