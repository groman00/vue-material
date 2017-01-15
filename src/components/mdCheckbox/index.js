import mdCheckbox from './mdCheckbox.vue';

export default function install(Vue) {
  Vue.component('md-checkbox', Vue.extend(mdCheckbox));
}
