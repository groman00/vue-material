import mdInputContainer from './mdInputContainer.vue';
import mdInput from './mdInput.vue';
import mdTextarea from './mdTextarea.vue';

export default function install(Vue) {
  Vue.component('md-input-container', mdInputContainer);
  Vue.component('md-input', mdInput);
  Vue.component('md-textarea', mdTextarea);
}
