import mdSwitch from './mdSwitch.vue';

export default function install(Vue) {
  Vue.component('md-switch', Vue.extend(mdSwitch));
}
