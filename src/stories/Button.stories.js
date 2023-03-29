import YoButton from '../components/Button/YoButton.vue'

export default {
  title: 'Buttons/Button',
  component: YoButton,
  argTypes: {
    'start-icon': {
      description: '前方的 button icon，請使用 img tag',
      control: 'null',
    },
    'default': {
      description: 'button 文字',
      control: 'text',
    },
    'end-icon': {
      description: '後方的 button icon，請使用 img tag',
      control: 'null',
    },
    disabled: {
      description: '是否套用 disabled 樣式',
      control: 'boolean',
    },
    outline: {
      description: '是否套用 outline 樣式',
      control: 'boolean',
    },
    size: {
      description: 'button 大小',
      control: 'inline-radio',
      options: ['normal', 'large'],
    },
  },
}

const Template = (args) => ({
  components: { YoButton },
  setup() {
    return { args };
  },
  template: `
    <YoButton v-bind="args">

      <template v-if="args['start-icon']" #start-icon>
        <img :src="args['start-icon']" alt="" />
      </template>

      <template v-if="args['default']" #default>
        {{ args.default }}
      </template>

      <template v-if="args['end-icon']" #end-icon>
        <img :src="args['end-icon']" alt="" />
      </template>

    </YoButton>`,
})

const defaultArgs = { 
  disabled: false,
  outline: false,
  size: 'normal',
  'start-icon': null,
  'default': 'Button',
  'end-icon': null,
}

export const Default = Template.bind({})
Default.args = { ...defaultArgs }
Default.parameters = {
  docs: {
    source: {
      code: '<YoButton>Button</YoButton>',
      language: "html",
    },
  },
};

export const Disabled = Template.bind({})
Disabled.args = {
  ...defaultArgs,
  disabled: true
}
Disabled.parameters = {
  docs: {
    source: {
      code: '<YoButton disabled>Button</YoButton>',
      language: "html",
    },
  },
};

export const NormalSize = Template.bind({})
NormalSize.args = {
  ...defaultArgs,
  size: 'normal'
}
NormalSize.parameters = {
  docs: {
    source: {
      code: '<YoButton size="normal">Button</YoButton>',
      language: "html",
    },
  },
};

export const LargeSize = Template.bind({})
LargeSize.args = {
  ...defaultArgs,
  size: 'large'
}
LargeSize.parameters = {
  docs: {
    source: {
      code: '<YoButton size="large">Button</YoButton>',
      language: "html",
    },
  },
};


export const withStartIcon = Template.bind({})
withStartIcon.args = {
  ...defaultArgs,
  'start-icon': new URL('../assets/icons/user.svg', import.meta.url),
}
withStartIcon.parameters = {
  docs: {
    source: {
      code: `
        <YoButton>
          <template #start-icon>
            <img src="" alt="" />
          </template>
          Button
        </YoButton>
      `,
      language: "html",
    },
  },
};

export const withEndIcon = Template.bind({})
withEndIcon.args = {
  ...defaultArgs,
  'end-icon': new URL('../assets/icons/user.svg', import.meta.url),
}
withEndIcon.parameters = {
  docs: {
    source: {
      code: `
        <YoButton>
          Button
          <template #end-icon>
            <img src="" alt="" />
          </template>
        </YoButton>
      `,
      language: "html",
    },
  },
};

