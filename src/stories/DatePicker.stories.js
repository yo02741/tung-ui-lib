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