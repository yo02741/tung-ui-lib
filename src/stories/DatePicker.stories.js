import { emit } from 'process';
import { ref } from 'vue';
import YoDatePicker from '../components/Picker/YoDatePicker.vue'

export default {
  title: 'Pickers/DatePicker',
  component: YoDatePicker,
}

const Template = (args) => ({
  components: { YoDatePicker },
  setup() {
    const vv = ref(args.modelValue)
    const emitUpdate = (val) => {
      vv.value = val
      emit('update:modelValue', val)
    }
    return { args, vv, emitUpdate };
  },
  template: `<YoDatePicker v-bind="args" v-model="vv" />`,
})

export const Default = Template.bind({})
Default.args = {
  modelValue: ''
}

Default.parameters = {
  docs: {
    source: {
      code: '<YoDatePicker v-model="" />',
      language: "html",
    },
  },
};

export const Disabled = Template.bind({})
Disabled.args = {
  modelValue: '',
  disabled: true
}

Disabled.parameters = {
  docs: {
    source: {
      code: '<YoDatePicker v-model="" disabled />',
      language: "html",
    },
  },
};

export const IconAtTheStart = Template.bind({})
IconAtTheStart.args = {
  iconPosition: 'start',
  modelValue: ''
}

IconAtTheStart.parameters = {
  docs: {
    source: {
      code: '<YoDatePicker v-model="" />',
      language: "html",
    },
  },
};

export const IconAtTheEnd = Template.bind({})
IconAtTheEnd.args = {
  iconPosition: 'end',
  modelValue: ''
}

IconAtTheEnd.parameters = {
  docs: {
    source: {
      code: '<YoDatePicker v-model="" icon-position="end" />',
      language: "html",
    },
  },
};
