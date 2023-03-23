import * as components from './components'

import './assets/scss/element/index.scss'
import './assets/scss/all.scss'

const componentsList = components?.default;
const YoUILibrary = {
  install(Vue) {
    Object.keys(componentsList).forEach((name) => {
      Vue.component(name, componentsList[name]);
    });
  }
}

export default YoUILibrary;