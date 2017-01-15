import mdFile from './mdFile.vue';

export default function install(Vue) {
  Vue.component('md-file', Vue.extend(mdFile));
}
