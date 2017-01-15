import mdToolbar from './mdToolbar.vue';

export default function install(Vue) {
  Vue.component('md-toolbar', Vue.extend(mdToolbar));
}
