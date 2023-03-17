import * as components from './components'

import './assets/all.scss'

const componentsList = components?.default;
const TungUILibrary = {
  install(Vue) {
    Object.keys(componentsList).forEach((name) => {
      Vue.component(name, componentsList[name]);
    });
  }
}

export default TungUILibrary;