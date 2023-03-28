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
  template: `
    <YoButton v-bind="args">
      <template #start-icon>
        <img v-if="args.slotStartIcon" :src="args.slotStartIcon" alt="" />
      </template>
      <template #default>{{ args.slotText || 'Button' }}</template>
      <template #end-icon>
        <img v-if="args.slotEndIcon" :src="args.slotEndIcon" alt="" />
      </template>
    </YoButton>`,
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


export const withStartIcon = Template.bind({})
withStartIcon.args = {
  slotStartIcon: new URL('../assets/icons/user.svg', import.meta.url),
}

export const withEndIcon = Template.bind({})
withEndIcon.args = {
  slotEndIcon: new URL('../assets/icons/user.svg', import.meta.url),
}