import MdButton from './mdButton.vue';

export default function install(Vue) {
  Vue.component('md-button', Vue.extend(MdButton));
}
