import mdButtonToggle from './mdButtonToggle.vue';

export default function install(Vue) {
  Vue.component('md-button-toggle', Vue.extend(mdButtonToggle));
}
