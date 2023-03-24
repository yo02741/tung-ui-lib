import { emit } from 'process';
import { ref } from 'vue';
import YoDateRangePicker from '../components/Picker/YoDateRangePicker.vue'

export default {
  title: 'Pickers/DateRangePicker',
  component: YoDateRangePicker,
}

const Template = (args) => ({
  components: { YoDateRangePicker },
  setup() {
    const vv = ref(args.modelValue)
    const emitUpdate = (val) => {
      vv.value = val
      emit('update:modelValue', val)
    }
    return { args, vv, emitUpdate };
  },
  template: `<YoDateRangePicker v-bind="args" v-model="vv" />`,
})

export const Default = Template.bind({})
Default.args = {
  modelValue: []
}
Default.parameters = {
  docs: {
    source: {
      code: '<YoDateRangePicker v-model="" />',
      language: "html",
    },
  },
};

export const Disabled = Template.bind({})
Disabled.args = {
  modelValue: [],
  disabled: true
}
Disabled.parameters = {
  docs: {
    source: {
      code: '<YoDateRangePicker v-model="" disabled />',
      language: "html",
    },
  },
};

export const IconAtTheStart = Template.bind({})
IconAtTheStart.args = {
  modelValue: [],
  iconPosition: 'start'
}

IconAtTheStart.parameters = {
  docs: {
    source: {
      code: '<YoDateRangePicker v-model="" />',
      language: "html",
    },
  },
};

export const IconAtTheEnd = Template.bind({})
IconAtTheEnd.args = {
  modelValue: [],
  iconPosition: 'end'
}
IconAtTheEnd.parameters = {
  docs: {
    source: {
      code: '<YoDateRangePicker v-model="" icon-position="end" />',
      language: "html",
    },
  },
};

export const HasTitle = Template.bind({})
HasTitle.args = {
  modelValue: [],
  hasTitle: true,
}
HasTitle.parameters = {
  docs: {
    source: {
      code: '<YoDateRangePicker v-model="" has-title />',
      language: "html",
    },
  },
};

export const Shortcut = Template.bind({})
Shortcut.args = {
  modelValue: [],
  shortcuts: {
    近三月內: 90,
    近一月內: 30,
    近一週內: 7,
  }
}
Shortcut.parameters = {
  docs: {
    source: {
      code: `
        shortcuts: {
          近三月內: 90,
          近一月內: 30,
          近一週內: 7,
        }

        <YoDateRangePicker v-model="" :shortcuts="shortcuts" />
      `,
      language: "html",
    },
  },
};

export const ShortcutOutOfRange = Template.bind({})
ShortcutOutOfRange.args = {
  modelValue: [],
  shortcuts: {
    近一年內: 365,
    近半年內: 177,
    近三月內: 90,
    近二月內: 60,
    近一月內: 30,
    近四週內: 28,
    近三週內: 21,
    近二週內: 14,
    近一週內: 7,
  }
}
ShortcutOutOfRange.parameters = {
  docs: {
    source: {
      code: `
        shortcuts: {
          近一年內: 365,
          近半年內: 177,
          近三月內: 90,
          近二月內: 60,
          近一月內: 30,
          近四週內: 28,
          近三週內: 21,
          近二週內: 14,
          近一週內: 7,
        }

        <YoDateRangePicker v-model="" :shortcuts="shortcuts" />
      `,
      language: "html",
    },
  },
};

export const ShortcutHasTitle = Template.bind({})
ShortcutHasTitle.args = {
  modelValue: [],
  shortcuts: {
    近三月內: 90,
    近一月內: 30,
    近一週內: 7,
  },
  hasTitle: true,
}
ShortcutHasTitle.parameters = {
  docs: {
    source: {
      code: `
        shortcuts: {
          近一年內: 365,
          近半年內: 177,
          近三月內: 90,
          近二月內: 60,
          近一月內: 30,
          近四週內: 28,
          近三週內: 21,
          近二週內: 14,
          近一週內: 7,
        }

        <YoDateRangePicker v-model="" :shortcuts="shortcuts" has-title />
      `,
      language: "html",
    },
  },
};