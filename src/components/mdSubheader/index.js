import mdSubheader from './mdSubheader.vue';

export default function install(Vue) {
  Vue.component('md-subheader', Vue.extend(mdSubheader));
}
